import React from 'react';
import { motion } from 'framer-motion';

// Datos de las alianzas
const partnersLeft = [
  { 
    name: "Google Cloud", 
    logo: "/alianzas/Google_Cloud_logo.svg", 
    hoverShadow: "rgba(66, 133, 244, 0.8)",
    lineColor: "#4285F4" 
  },
  { 
    name: "Oracle", 
    logo: "/alianzas/Oracle_logo.svg", 
    hoverShadow: "rgba(248, 0, 0, 0.8)",
    lineColor: "#F80000" 
  }
];

const partnersRight = [
  { 
    name: "Azure", 
    logo: "/alianzas/Microsoft_Azure.svg", 
    hoverShadow: "rgba(0, 137, 214, 0.8)",
    lineColor: "#0089D6" 
  },
  { 
    name: "AWS", 
    logo: "/alianzas/Amazon_Web_Services_Logo.svg", 
    hoverShadow: "rgba(255, 153, 0, 0.8)",
    lineColor: "#FF9900" 
  }
];

export default function Partners() {
  
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
      
      <style>{`
        .partners-section {
          position: relative;
          padding: 8rem 1.5rem;
          background-color: #050505;
          color: #fff;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
          overflow: hidden;
        }

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
        
        .partners-title span { color: #75bf40; }

        .partners-description {
          color: #a1a1aa;
          line-height: 1.7;
          font-size: clamp(1rem, 2vw, 1.15rem);
        }

        .honeycomb-layout {
          position: relative; 
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
          z-index: 1;
        }

        .side-column {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          justify-content: center;
          z-index: 2;
        }

        /* 🚀 ESCALA MASIVA: HEXÁGONOS MÁS GRANDES */
        .hex-wrapper {
          position: relative;
          width: 180px;  /* 🚀 Subimos a 180px de ancho */
          height: 200px; /* 🚀 Subimos a 200px de alto */
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2; 
        }

        .hex-inner {
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          background: #0a0a0a;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.5rem; /* 🚀 Padding casi al mínimo para aprovechar el espacio interno */
          gap: 0.2rem;
          transition: background 0.3s ease;
        }

        .hex-wrapper.center-hex {
          width: 240px;  /* 🚀 Hexágono central inmenso */
          height: 270px;
          z-index: 10;
        }
        .center-hex .hex-inner {
          background: linear-gradient(145deg, #111 0%, #050505 100%);
        }

        .desktop-connections {
          display: none;
        }
        .data-stream {
          stroke-dasharray: 40 250; 
          stroke-linecap: round;
          animation: dataTravel 2.5s linear infinite;
        }
        
        .delay-1 { animation-delay: 0.5s; }
        .delay-2 { animation-delay: 1.2s; }
        .delay-3 { animation-delay: 1.8s; }

        @keyframes dataTravel {
          0% { stroke-dashoffset: 290; }
          100% { stroke-dashoffset: 0; }
        }

        @media (min-width: 900px) {
          .desktop-connections { display: block; } 
          
          .honeycomb-layout {
            flex-direction: row;
            gap: 1.5rem;
          }
          .side-column {
            flex-direction: column;
            gap: 1.5rem;
          }
          .col-left {
            transform: translateY(20px);
          }
          .col-right {
            transform: translateY(-20px);
          }
        }
      `}</style>

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

        <motion.div 
          className="honeycomb-layout"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* 🚀 LÍNEAS DE CONEXIÓN CON COORDENADAS RECALCULADAS PARA LOS HEXÁGONOS GIGANTES */}
          <svg
            className="desktop-connections"
            viewBox="0 0 800 400"
            preserveAspectRatio="xMidYMid meet"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: '800px',
              height: '400px',
              zIndex: -1, 
              pointerEvents: 'none'
            }}
          >
            {/* LÍNEAS ESTRUCTURALES BASE */}
            <path d="M 166 108 L 400 200" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <path d="M 166 332 L 400 200" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <path d="M 634 68 L 400 200" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <path d="M 634 292 L 400 200" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />

            {/* PARTÍCULAS ANIMADAS */}
            <path d="M 166 108 L 400 200" stroke={partnersLeft[0].lineColor} strokeWidth="3" className="data-stream" style={{ filter: `drop-shadow(0 0 8px ${partnersLeft[0].lineColor})`}} />
            <path d="M 166 332 L 400 200" stroke={partnersLeft[1].lineColor} strokeWidth="3" className="data-stream delay-1" style={{ filter: `drop-shadow(0 0 8px ${partnersLeft[1].lineColor})`}} />
            <path d="M 634 68 L 400 200" stroke={partnersRight[0].lineColor} strokeWidth="3" className="data-stream delay-2" style={{ filter: `drop-shadow(0 0 8px ${partnersRight[0].lineColor})`}} />
            <path d="M 634 292 L 400 200" stroke={partnersRight[1].lineColor} strokeWidth="3" className="data-stream delay-3" style={{ filter: `drop-shadow(0 0 8px ${partnersRight[1].lineColor})`}} />
          </svg>

          {/* COLUMNA IZQUIERDA */}
          <div className="side-column col-left">
            {partnersLeft.map((partner, i) => (
              <PartnerHex key={i} partner={partner} itemVariants={itemVariants} />
            ))}
          </div>

          {/* CENTRO: LOGO SYE GIGANTE */}
          <motion.div 
            variants={itemVariants}
            className="hex-wrapper center-hex"
            style={{ background: 'linear-gradient(180deg, #75bf40 0%, #2a4716 100%)' }}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: { filter: 'drop-shadow(0px 0px 0px rgba(117,191,64,0))' },
              hover: { filter: 'drop-shadow(0px 0px 30px rgba(117,191,64,0.6))' }
            }}
          >
            <div className="hex-inner">
              <motion.img 
                src="/Simbolo_sye_.png" 
                alt="SYE Software" 
                style={{ width: '140px', objectFit: 'contain', marginBottom: '10px' }} /* 🚀 Logo central escalado a 140px */
                animate={{ y: [0, -3, 0] }}
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
            rest: { 
              filter: "grayscale(100%) opacity(60%)", 
              scale: 0.9 
            },
            hover: { 
              filter: `grayscale(0%) opacity(100%) drop-shadow(0px 5px 15px ${partner.hoverShadow})`, 
              scale: 1.05 
            }
          }}
          transition={{ duration: 0.3 }}
          /* 🚀 FIX DE LOGOS MAX-SIZE: Contenedor sube a 90px de alto */
          style={{ height: "90px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }} 
        >
          <img 
            src={partner.logo} 
            alt={partner.name} 
            /* 🚀 FIX DE LOGOS MAX-SIZE: Ancho de la imagen liberado hasta 140px */
            style={{ maxHeight: "100%", maxWidth: "140px", objectFit: "contain" }} 
          />
        </motion.div>
        
        <motion.span 
          variants={{
            rest: { color: "#71717a" },
            hover: { color: "#ffffff" }
          }}
          style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.02em", textAlign: 'center' }}
        >
          {partner.name}
        </motion.span>
      </div>
    </motion.div>
  );
}