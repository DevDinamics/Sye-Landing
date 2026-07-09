import React from 'react';
import { motion } from 'framer-motion';

// Le agregamos el color de "hoverShadow" personalizado para cada marca
const partners = [
  { 
    name: "Google Cloud", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    hoverShadow: "rgba(66, 133, 244, 0.2)" // Azul Google
  },
  { 
    name: "Oracle", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    hoverShadow: "rgba(248, 0, 0, 0.2)" // Rojo Oracle
  },
  { 
    name: "Azure", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    hoverShadow: "rgba(0, 137, 214, 0.2)" // Azul Microsoft
  },
  { 
    name: "AWS", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    hoverShadow: "rgba(255, 153, 0, 0.2)" // Naranja AWS
  },
];

export default function Partners() {
  
  // 🎬 Variantes para la animación de entrada (Stagger Effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section style={{ 
      padding: "8rem 2rem", 
      backgroundColor: "#050505", 
      color: "#fff",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      overflow: "hidden"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap",
        gap: "4rem", 
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        
        {/* Lado Izquierdo: Texto Institucional */}
        <div style={{ flex: "1 1 350px", maxWidth: "400px" }}>
          <h2 style={{ 
            fontSize: "clamp(2rem, 4vw, 2.5rem)", 
            fontWeight: 800, 
            marginBottom: "1.5rem", 
            letterSpacing: "-0.02em" 
          }}>
            Alianzas
          </h2>
          <p style={{ color: "#a1a1aa", lineHeight: 1.7, fontSize: "1.05rem" }}>
            Trabajamos con líderes tecnológicos globales como Google Cloud, Oracle, Microsoft y AWS. Estas alianzas fortalecen nuestras capacidades técnicas y garantizan que las soluciones implementadas estén respaldadas por tecnologías consolidadas y con soporte internacional.
          </p>
        </div>

        {/* Lado Derecho: Grid de Tarjetas PRO */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }} // Se anima solo la primera vez que haces scroll
          style={{ 
            flex: "2 1 600px",
            display: "grid", 
            /* Se adapta a 4 columnas en desktop o 2 en móvil automáticamente */
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", 
            gap: "1.5rem" 
          }}
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.2rem",
                height: "170px",
                cursor: "pointer",
              }}
              /* Efecto Hover sobre toda la tarjeta */
              variants={{
                rest: { y: 0, backgroundColor: "#0a0a0a", boxShadow: "0 0 0 rgba(0,0,0,0)" },
                hover: { 
                  y: -8, 
                  backgroundColor: "rgba(255,255,255,0.02)",
                  boxShadow: `0 20px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 20px ${partner.hoverShadow}`
                }
              }}
            >
              {/* Animación del Logo */}
              <motion.img 
                src={partner.logo} 
                alt={partner.name} 
                variants={{
                  rest: { filter: "grayscale(100%) opacity(50%)", scale: 1 },
                  hover: { filter: `grayscale(0%) opacity(100%) drop-shadow(0 4px 12px ${partner.hoverShadow})`, scale: 1.15 }
                }}
                transition={{ duration: 0.3 }}
                style={{ maxHeight: "45px", maxWidth: "100%", objectFit: "contain" }}
              />
              
              {/* Animación del Nombre */}
              <motion.span 
                variants={{
                  rest: { color: "#52525b" },
                  hover: { color: "#ffffff" }
                }}
                style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.02em" }}
              >
                {partner.name}
              </motion.span>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}