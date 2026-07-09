import React from 'react';
import { motion } from 'framer-motion';

export default function NubeFeatures() {
  const logrosList = [
    "Alta disponibilidad de sistemas críticos.",
    "Protección de información sensible.",
    "Optimización del gasto tecnológico.",
    "Cumplimiento de estándares de seguridad."
  ];

  const beneficiosList = [
    "Arquitecturas seguras y auditables.",
    "Modelos híbridos y controlados.",
    "Continuidad de servicios al ciudadano.",
    "Escalabilidad bajo demanda."
  ];

  return (
    <section id="nube-features" style={{
      backgroundColor: '#050505',
      color: '#ffffff',
      padding: '6rem 2rem',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        
        {/* ─── BLOQUE SUPERIOR (TEXTO Y LOGROS) ─── */}
        <div style={{ maxWidth: '900px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              margin: '0 0 2rem 0',
              color: '#ffffff'
            }}
          >
            Con Nube, las instituciones <span style={{ color: '#404497' }}>logran:</span>
          </motion.h2>

          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
          >
            {logrosList.map((item, index) => (
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
                  fontSize: '1.15rem',
                  color: '#d4d4d8',
                  fontWeight: 500
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#404497', flexShrink: 0 }} />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* ─── CONTENEDOR DE IMAGEN CON TARJETA FLOTANTE ─── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            height: '600px',
            borderRadius: '24px',
            backgroundColor: '#18181b',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* ─── WRAPPER DEL VIDEO (recorte solo aquí) ─── */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '24px',
            overflow: 'hidden'
          }}>
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
              <source src="/Nube-sye.mp4" type="video/mp4" />
            </video>
          </div>

          {/* TARJETA FLOTANTE DE BENEFICIOS (Posicionada abajo a la derecha) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              right: '2rem',
              width: '90%',
              maxWidth: '400px',
              backgroundColor: 'rgba(20, 20, 22, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1.2rem 0', color: '#ffffff' }}>Beneficios</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {beneficiosList.map((beneficio, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#a1a1aa', fontSize: '1rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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