import React from 'react';
import { motion } from 'framer-motion';

export default function DevSpaceFeatures() {
  const lograList = [
    "Traducir necesidades de negocio en especificaciones claras y accionables.",
    "Automatizar y acelerar el ciclo de desarrollo de software.",
    "Mejorar la comunicación entre áreas técnicas y de negocio.",
    "Asegurar consistencia, calidad y trazabilidad en cada entrega."
  ];

  const beneficiosList = [
    "Reducción significativa en tiempos de desarrollo",
    "Mayor precisión en la ejecución de requerimientos",
    "Menor retrabajo y optimización de recursos",
    "Desarrollo alineado a objetivos estratégicos"
  ];

  return (
    <section id="metodologia" className="devspace-features-section">
      
      {/* ─── ESTILOS RESPONSIVOS Y TIPOGRÁFICOS PRO ─── */}
      <style>{`
        .devspace-features-section {
          background-color: #050505;
          color: #ffffff;
          padding: 8rem 2rem;
          /* ✅ Tipografía primaria (Montserrat) global para la sección */
          font-family: var(--font-primary);
          display: flex;
          justify-content: center;
          overflow: hidden; /* Vital para que no haya scroll horizontal con la tarjeta flotante */
        }

        .devspace-features-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .devspace-title {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin: 0 0 2.5rem 0;
          color: #ffffff;
        }

        /* Contenedor padre del video y la tarjeta */
        .devspace-media-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Caja del video con altura responsiva */
        .devspace-video-box {
          position: relative;
          width: 100%;
          height: clamp(350px, 50vw, 600px);
          border-radius: 32px;
          background-color: #18181b;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        /* Tarjeta flotante (Desktop default) */
        .devspace-floating-card {
          position: absolute;
          bottom: -3.5rem;
          right: 2.5rem;
          width: 90%;
          max-width: 450px;
          background-color: rgba(20, 20, 22, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          z-index: 10;
        }

        .devspace-card-title {
          /* ✅ Tipografía secundaria (Brandon Grotesque) para contraste editorial */
          font-family: var(--font-secondary);
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1.5rem 0;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        /* ─── ADAPTACIÓN MÓVIL / TABLET (BREAKPOINT PRO) ─── */
        @media (max-width: 960px) {
          .devspace-features-section {
            padding: 5rem 1.5rem;
          }
          .devspace-media-wrapper {
            gap: 0; /* Eliminamos el gap structural para manejarlo con márgenes */
          }
          .devspace-video-box {
            height: 400px; /* Un poco más alto en móvil para lucir el video de fondo */
            border-radius: 24px;
          }
          .devspace-floating-card {
            position: relative;
            bottom: auto;
            right: auto;
            width: 100%;
            max-width: 100%;
            /* ✅ TRUCO PRO: Margen negativo para seguir solapándose sin tapar el video */
            margin-top: -4rem; 
            margin-left: auto;
            margin-right: auto;
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <div className="devspace-features-container">
        
        {/* ─── BLOQUE SUPERIOR (TEXTO Y LISTA) ─── */}
        <div style={{ maxWidth: '900px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="devspace-title"
          >
            Con DevSpace, las <br />
            organizaciones <span style={{ color: '#404497' }}>logran:</span> {/* Azul SYE exacto */}
          </motion.h2>

          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
          >
            {lograList.map((item, index) => (
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
                {/* Viñeta minimalista azul SYE */}
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#404497', flexShrink: 0 }} />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* ─── CONTENEDOR DE LA IMAGEN CENTRAL Y TARJETA FLOTANTE ─── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="devspace-media-wrapper"
        >
          {/* WRAPPER DEL VIDEO */}
          <div className="devspace-video-box">
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            >
              <source src="/DevSpace-sye.mp4" type="video/mp4" />
            </video>

            {/* Overlay oscuro para legibilidad responsiva */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.2) 100%)'
            }} />
          </div>

          {/* TARJETA FLOTANTE DE BENEFICIOS */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="devspace-floating-card"
          >
            <h3 className="devspace-card-title">
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
                  {/* Ícono de Check en verde SYE exacto */}
                  <svg style={{ flexShrink: 0, marginTop: '2px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
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