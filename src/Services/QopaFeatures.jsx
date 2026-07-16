import React from 'react';
import { motion } from 'framer-motion';

export default function QopaFeatures() {
  const permiteList = [
    "Automatización de procesos institucionales.",
    "Integración de IA en sistemas y plataformas.",
    "Gestión inteligente del conocimiento institucional.",
    "Optimización de soluciones en infraestructura Cloud."
  ];

  const beneficiosList = [
    "IA con supervisión humana y control institucional",
    "Decisiones mejor informadas",
    "Resultados medibles y trazables",
    "Soluciones escalables y seguras"
  ];

  return (
    <section id="qopa-features" className="qopa-features-section">
      
      {/* ─── ESTILOS RESPONSIVOS Y TIPOGRÁFICOS PRO ─── */}
      <style>{`
        .qopa-features-section {
          background-color: #050505;
          color: #ffffff;
          padding: 8rem 2rem;
          /* ✅ Tipografía primaria (Montserrat) global para la sección */
          font-family: var(--font-primary);
          display: flex;
          justify-content: center;
          overflow: hidden;
        }

        .qopa-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .qopa-top-block {
          position: relative;
          z-index: 10;
          max-width: 800px;
        }

        .qopa-title {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin: 0 0 2.5rem 0;
          color: #ffffff;
        }

        /* Contenedor padre del video y la tarjeta */
        .qopa-media-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Caja del video con altura adaptable */
        .qopa-video-box {
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
        .qopa-floating-card {
          position: absolute;
          bottom: -3rem;
          right: 2rem;
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

        .qopa-card-title {
          /* ✅ Tipografía secundaria (Brandon Grotesque) para contraste editorial */
          font-family: var(--font-secondary);
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1.5rem 0;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        /* ADAPTACIÓN MÓVIL / TABLET (BREAKPOINT PRO) ─── */
        @media (max-width: 960px) {
          .qopa-features-section {
            padding: 5rem 1.5rem;
          }
          .qopa-media-wrapper {
            gap: 0; /* Eliminamos gap para manejarlo con margen negativo */
          }
          .qopa-floating-card {
            position: relative;
            bottom: auto;
            right: auto;
            width: 100%;
            max-width: 100%;
            /* Efecto de solapamiento hacia arriba sobre el video en móvil */
            margin-top: -3rem; 
            margin-left: auto;
            margin-right: auto;
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>

      <div className="qopa-container">
        
        {/* ─── BLOQUE SUPERIOR (QOPA PERMITE) ─── */}
        <div className="qopa-top-block">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="qopa-title"
          >
            QOPA permite la <br />
            <span style={{ color: '#75bf40' }}>transformación total.</span>
          </motion.h2>

          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
          >
            {permiteList.map((item, index) => (
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
                {/* Viñeta minimalista alineada al azul corporativo SYE */}
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#404497', flexShrink: 0 }} />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* ─── CONTENEDOR DE VIDEO CENTRAL Y TARJETA FLOTANTE ─── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="qopa-media-wrapper"
        >
          {/* WRAPPER DEL VIDEO */}
          <div className="qopa-video-box">
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
              <source src="/Qopa-frame.mp4" type="video/mp4" />
            </video>

            {/* Overlay oscuroresponsivo para legibilidad */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom right, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.2) 100%)'
            }} />
          </div>

          {/* TARJETA FLOTANTE DE BENEFICIOS */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="qopa-floating-card"
          >
            <h3 className="qopa-card-title">
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
                  {/* Check Icon en verde SYE exacto */}
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