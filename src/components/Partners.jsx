import React from 'react';
import { motion } from 'framer-motion';

// Datos de las alianzas - RUTAS LOCALES EXACTAS según tu carpeta public/alianzas/
const partnersLeft = [
  { 
    name: "Google Cloud", 
    logo: "/alianzas/Google_Cloud_logo.svg", 
    hoverShadow: "rgba(66, 133, 244, 0.8)" 
  },
  { 
    name: "Oracle", 
    logo: "/alianzas/Oracle_logo.svg", 
    hoverShadow: "rgba(248, 0, 0, 0.8)" 
  }
];

const partnersRight = [
  { 
    name: "Azure", 
    logo: "/alianzas/Microsoft_Azure.svg", 
    hoverShadow: "rgba(0, 137, 214, 0.8)" 
  },
  { 
    name: "AWS", 
    logo: "/alianzas/Amazon_Web_Services_Logo.svg", 
    hoverShadow: "rgba(255, 153, 0, 0.8)" 
  }
];

export default function Partners() {
  
  // 🎬 Variantes para la animación de entrada
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <section className="partners-section">
      
      {/* ─── ESTILOS RESPONSIVOS Y FORMAS (HEXÁGONOS) ─── */}
      <style>{`
        .partners-section {
          position: relative;
          padding: 8rem 1.5rem;
          background-color: #050505;
          color: #fff;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
          overflow: hidden;
        }

        /* Texto superior centrado */
        .partners-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 5rem auto;
        }

        .partners-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          color: #ffffff;
        }
        
        .partners-title span {
          color: #75bf40; /* Verde SYE */
        }

        .partners-description {
          color: #a1a1aa;
          line-height: 1.7;
          font-size: clamp(1rem, 2vw, 1.15rem);
        }

        /* Layout del Panal (Honeycomb) */
        .honeycomb-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .side-column {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          justify-content: center;
        }

        /* Forma del Hexágono base */
        .hex-wrapper {
          position: relative;
          width: 140px;
          height: 160px;
          /* Clip-path para hexágono con punta arriba/abajo */
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .hex-inner {
          width: calc(100% - 4px); /* Espacio para el borde */
          height: calc(100% - 4px);
          background: #0a0a0a;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          gap: 0.8rem;
          transition: background 0.3s ease;
        }

        /* Modificador para el logo central (SYE) */
        .hex-wrapper.center-hex {
          width: 220px;
          height: 250px;
          z-index: 10;
        }
        .center-hex .hex-inner {
          background: linear-gradient(145deg, #111 0%, #050505 100%);
        }

        /* Breakpoints para Desktop */
        @media (min-width: 900px) {
          .honeycomb-layout {
            flex-direction: row;
            gap: 1.5rem;
          }
          .side-column {
            flex-direction: column;
            gap: 1.5rem;
          }
          /* Desfase para que embonen visualmente como panal */
          .col-left {
            transform: translateY(20px);
          }
          .col-right {
            transform: translateY(-20px);
          }
        }
      `}</style>

      {/* Resplandor verde de fondo */}
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vh',
        background: 'radial-gradient(circle, rgba(117,191,64,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* HEADER DE LA SECCIÓN */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="partners-header"
        >
          <h2 className="partners-title">Alianzas <span>Estratégicas</span></h2>
          <p className="partners-description">
            Trabajamos con líderes tecnológicos globales como Google Cloud, Oracle, Microsoft y AWS. Estas alianzas fortalecen nuestras capacidades técnicas y garantizan que las soluciones implementadas estén respaldadas por tecnologías consolidadas y con soporte internacional.
          </p>
        </motion.div>

        {/* LAYOUT DEL PANAL (HONEYCOMB) */}
        <motion.div 
          className="honeycomb-layout"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* COLUMNA IZQUIERDA */}
          <div className="side-column col-left">
            {partnersLeft.map((partner, i) => (
              <PartnerHex key={i} partner={partner} itemVariants={itemVariants} />
            ))}
          </div>

          {/* CENTRO: LOGO SYE - Movimiento sutilizado a 3px vertical */}
          <motion.div 
            variants={itemVariants}
            className="hex-wrapper center-hex"
            style={{ background: 'linear-gradient(180deg, #75bf40 0%, #2a4716 100%)' }}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: { filter: 'drop-shadow(0px 0px 0px rgba(117,191,64,0))' },
              hover: { filter: 'drop-shadow(0px 0px 30px rgba(117,191,64,0.4))' }
            }}
          >
            <div className="hex-inner">
              <motion.img 
                src="/Simbolo_sye_.png" 
                alt="SYE Software" 
                style={{ width: '100px', objectFit: 'contain', marginBottom: '10px' }}
                animate={{ y: [0, -3, 0] }} // Movimiento reducido para máxima sutileza
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* COLUMNA DERECHA */}
          <div className="side-column col-right">
            {partnersRight.map((partner, i) => (
              <PartnerHex key={i} partner={partner} itemVariants={itemVariants} />
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}

/* 
 * Componente interno para cada hexágono de Partner 
 * Esto mantiene el código limpio y repetible 
 */
/* 
 * Componente interno para cada hexágono de Partner 
 */
function PartnerHex({ partner, itemVariants }) {
  return (
    <motion.div
      variants={itemVariants}
      className="hex-wrapper"
      style={{ background: 'rgba(255, 255, 255, 0.1)' }}
      initial="rest"
      whileHover="hover"
      whileTap="hover" 
      animate="rest"
      variants={{
        rest: { 
          background: 'rgba(255, 255, 255, 0.05)',
          filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
        },
        hover: { 
          background: partner.hoverShadow,
          filter: `drop-shadow(0px 0px 20px ${partner.hoverShadow})`
        }
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="hex-inner">
        <motion.div
          variants={{
            /* 🚀 FIX: Quitamos el invert y el resplandor blanco feo. 
               Solo lo dejamos en escala de grises y un poco transparente en reposo */
            rest: { 
              filter: "grayscale(100%) opacity(60%)", 
              scale: 0.9 
            },
            /* 🚀 En el hover: Colores HD originales y un resplandor del color de la marca */
            hover: { 
              filter: `grayscale(0%) opacity(100%) drop-shadow(0px 5px 15px ${partner.hoverShadow})`, 
              scale: 1.05 
            }
          }}
          transition={{ duration: 0.3 }}
          style={{ height: "40px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}
        >
          <img 
            src={partner.logo} 
            alt={partner.name} 
            style={{ maxHeight: "100%", maxWidth: "80px", objectFit: "contain" }} 
          />
        </motion.div>
        
        <motion.span 
          variants={{
            rest: { color: "#71717a" },
            hover: { color: "#ffffff" }
          }}
          style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.02em", textAlign: 'center' }}
        >
          {partner.name}
        </motion.span>
      </div>
    </motion.div>
  );
}