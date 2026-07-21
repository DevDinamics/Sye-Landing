import React from 'react';
import { motion } from 'framer-motion';

export default function FabricaFeatures() {
  const aseguramosList = [
    "Cumplimiento de los tiempos establecidos.",
    "Entregables documentados y auditales.",
    "Control de versiones y repositorios institucionales.",
    "Soporte y mantenimiento evolutivo."
  ];

  const beneficiosList = [
    "Desarrollo alineado a normativas públicas.",
    "Metodologías formales y documentadas.",
    "Continuidad operativa garantizada.",
    "Reducción de riesgos técnicos."
  ];

  return (
    <section id="fabrica-features" className="features-section">
      
      {/* ─── ESTILOS RESPONSIVOS Y TIPOGRÁFICOS ─── */}
      <style>{`
        .features-section {
          background-color: #050505;
          color: #ffffff;
          padding: 8rem 2rem;
          /* ✅ Aplicamos tipografía primaria (Montserrat) globalmente a la sección */
          font-family: var(--font-primary);
          display: flex;
          justify-content: center;
          overflow: hidden;
        }

        .features-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .features-title {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin: 0 0 2.5rem 0;
          color: #ffffff;
        }

        /* Contenedor padre del video y la tarjeta */
        .media-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Caja del video */
        .video-box {
          position: relative;
          width: 100%;
          height: 650px;
          border-radius: 32px;
          background-color: #18181b;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        /* Tarjeta flotante (Desktop) */
        .floating-card {
          position: absolute;
          bottom: -3rem;
          right: 3rem;
          width: 90%;
          max-width: 480px;
          background-color: rgba(20, 20, 22, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          z-index: 10;
        }

        .card-title {
          /* ✅ Aplicamos tipografía secundaria (Brandon Grotesque) para contrastar el título de la tarjeta */
          font-family: var(--font-secondary);
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1.5rem 0;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        /* ADAPTACIÓN MÓVIL / TABLET */
        @media (max-width: 960px) {
          .features-section {
            padding: 5rem 1.5rem;
          }
          .video-box {
            height: 400px;
            border-radius: 24px;
          }
          .floating-card {
            position: relative;
            bottom: auto;
            right: auto;
            width: 100%;
            max-width: 100%;
            /* Efecto de solapamiento hacia arriba en móvil */
            margin-top: -4rem; 
            margin-left: auto;
            margin-right: auto;
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <div className="features-container">
        
        {/* ─── BLOQUE SUPERIOR (TEXTO) ─── */}
        <div style={{ maxWidth: '900px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="features-title"
          >
            Lo que <span style={{ color: '#404497' }}>aseguramos:</span>
          </motion.h2>

          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
          >
            {aseguramosList.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                  color: '#d4d4d8',
                  fontWeight: 500
                }}
              >
                {/* Punto corporativo SYE (Cambiado al verde de la marca para mantener consistencia) */}
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#404497', flexShrink: 0 }} />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* ─── CONTENEDOR DE IMAGEN Y TARJETA FLOTANTE ─── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="media-wrapper"
        >
          {/* WRAPPER DEL VIDEO */}
          <div className="video-box">
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="/Fabrica-Software.mp4" type="video/mp4" />
            </video>

            {/* Gradiente oscuro de izquierda a derecha para integrar el video con el fondo negro */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.1) 100%)'
            }} />
          </div>

          {/* TARJETA FLOTANTE DE BENEFICIOS */}
<motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
  className="floating-card"
>
  <h3 className="card-title">
    Beneficios
  </h3>
  
  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
    {beneficiosList.map((beneficio, index) => (
      <li 
        key={index}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
          color: '#a1a1aa',
          lineHeight: 1.6
        }}
      >
        {/* 🚀 Cambiado: Círculo minimalista verde SYE en perfecta alineación con el texto */}
        <svg 
          style={{ flexShrink: 0, marginTop: '6px' }} 
          width="8" 
          height="8" 
          viewBox="0 0 10 10"
        >
          <circle cx="5" cy="5" r="5" fill="#75bf40" />
        </svg>
        {beneficio}
      </li>
    ))}
  </ul>
</motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}