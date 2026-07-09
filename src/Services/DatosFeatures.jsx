import React from 'react';
import { motion } from 'framer-motion';

export default function DatosFeatures() {
  const habilitamosList = [
    "Seguimiento de indicadores estratégicos.",
    "Reportes ejecutivos claros y trazables.",
    "Visualización de información en tiempo real.",
    "Gobernanza y calidad de datos."
  ];

  const beneficiosList = [
    "Mayor control institucional",
    "Decisiones basadas en evidencia",
    "Transparencia y trazabilidad",
    "Integración de múltiples fuentes de información"
  ];

  return (
    <section id="datos-features" style={{
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
        gap: '3.5rem'
      }}>
        
        {/* ─── BLOQUE SUPERIOR (TEXTO Y LISTA) ─── */}
        <div style={{ maxWidth: '900px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              margin: '0 0 2rem 0',
              color: '#ffffff'
            }}
          >
            A través de Datos, <br />
            nosotros <span style={{ color: '#75bf40' }}>habilitamos:</span> {/* Verde SYE exacto */}
          </motion.h2>

          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
          >
            {habilitamosList.map((item, index) => (
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
                {/* Viñeta minimalista con el Azul corporativo */}
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
          style={{
            position: 'relative',
            width: '100%',
            height: '650px', // Un poquito más alto para lucir los gráficos analíticos
            borderRadius: '32px',
            backgroundColor: '#18181b',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* ─── WRAPPER DEL VIDEO (recorte solo aquí) ─── */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '32px',
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
              <source src="/datos-sye.mp4" type="video/mp4" />
            </video>

            {/* Capa de oscurecimiento sutil (gradiente) */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom right, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.4) 100%)'
            }} />
          </div>

          {/* ─── TARJETA FLOTANTE DE BENEFICIOS ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            style={{
              position: 'absolute',
              bottom: '-2.5rem', // Desbordado elegante hacia abajo
              right: '2.5rem',
              width: '90%',
              maxWidth: '460px',
              backgroundColor: 'rgba(20, 20, 22, 0.85)', // Cristal ahumado premium
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
            }}
          >
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              margin: '0 0 1.5rem 0',
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}>
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
                    fontSize: '1.05rem',
                    color: '#a1a1aa',
                    lineHeight: 1.5
                  }}
                >
                  {/* Icono de Check en verde neón exacto al del ejemplo */}
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