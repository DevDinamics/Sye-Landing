import { motion } from "framer-motion";
import OrbBackground from "./OrbBackground";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#050505",
        color: "#fff",
        textAlign: "center",
        padding: "0 1.5rem",
        overflow: "hidden",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      }}
    >
      {/* El Orbe reaccionando al mouse */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <OrbBackground backgroundColor="#050505" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ 
          position: "relative", 
          zIndex: 10, 
          maxWidth: "700px", 
          width: "100%",
          pointerEvents: "none" 
        }}
      >
        <motion.div variants={item} style={{ marginBottom: "1.5rem" }}>
  <div style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "10px", // Aumentamos un poco el espacio
    padding: "4px 16px 4px 6px", // Un poco más de espacio a la izquierda para el logo
    borderRadius: "50px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(12px)",
    cursor: "pointer",
    // Efecto sutil al pasar el mouse
    transition: "all 0.3s ease"
  }}>
    {/* Logo miniatura */}
    <img 
      src="/Simbolo_sye_.png" 
      alt="SYE Icon" 
      style={{ 
        width: "20px", 
        height: "20px", 
        objectFit: "contain",
        filter: "drop-shadow(0 0 4px rgba(255,255,255,0.3))" 
      }} 
    />
    
    <span style={{ 
      fontSize: "0.8rem", 
      fontWeight: 500, 
      color: "#e4e4e7" 
    }}>
      Innovación SYE: Soluciones
    </span>
  </div>
</motion.div>

        {/* Headline contundente */}
        <motion.h1
          variants={item}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 1.1,
            fontWeight: 700,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
            transform: "translateZ(0)", 
            willChange: "transform",
          }}
        >
          Tecnología que fortalece <br/> al sector público.
        </motion.h1>

        {/* Subheadline corto */}
        <motion.p
          variants={item}
          style={{
            fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
            color: "#a1a1aa",
            marginBottom: "2rem"
          }}
        >
          Diseñamos, desarrollamos y operamos soluciones tecnológicas bajo esquemas de gobernanza, <br/> continuidad operativa, seguridad de la información y cumplimiento normativo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          style={{ 
            display: "flex", 
            gap: "12px", 
            justifyContent: "center",
            pointerEvents: "auto" 
          }}
        >
          <motion.a
  href="#soluciones"
  whileHover={{ scale: 1.05 }}
  onClick={(e) => {
    e.preventDefault(); // Evita el salto instantáneo nativo de HTML
    document.querySelector('#soluciones').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }}
  style={{
    padding: "12px 28px",
    borderRadius: "50px",
    background: "#fff",
    color: "#000",
    fontWeight: 700,
    textDecoration: "none",
    cursor: "pointer"
  }}
>
  Conoce nuestras soluciones
</motion.a>
          
          
        </motion.div>
      </motion.div>
    </section>
  );
}