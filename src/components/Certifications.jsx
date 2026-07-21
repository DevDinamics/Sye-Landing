import React from 'react';
import { motion } from 'framer-motion';
import LogoLoop from './LogoLoop'; // Asegúrate de que la ruta sea correcta

export default function Certifications() {
  const certificationLogos = [
    { src: "/Recurso-65.png", alt: "Certificación CMMI ML5" },
    { src: "/Recurso-66.png", alt: "Certificación CMMI DEV" },
    { src: "/Recurso-67.png", alt: "Certificación ISO 27001" },
    { src: "/Recurso-68.png", alt: "Certificación ISO 37001" },
    { src: "/Recurso-69.png", alt: "Certificación IQNET" },
    { src: "/ISO_9001-2015.png", alt: "Certificación ISO 9001" },
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section style={{ 
      position: 'relative',
      backgroundColor: '#050505', 
      padding: '8rem 2rem',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      overflow: 'hidden',
      color: '#ffffff'
    }}>
      
      {/* 🚀 ESTILOS INYECTADOS LIMPIOS PARA LOGO BLANCO POR DEFECTO */}
      <style>{`
        /* Buscamos las imágenes del bucle que tengan el atributo del logo de ISO 9001 */
        img[alt="Certificación ISO 9001"] {
          /* 1. Eliminamos cualquier inversión o cambio de color para que mantenga su blanco original */
          filter: none !important;
          /* 2. Aseguramos que renderice normal sobre el fondo oscuro */
          mix-blend-mode: normal !important; 
          padding: 4px;
        }
      `}</style>
      
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '400px',
        background: 'radial-gradient(circle, rgba(92, 99, 173, 0.15) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* --- CONTENEDOR DE ENCABEZADO --- */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              fontWeight: 800, 
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: '0 0 0.75rem 0'
            }}
          >
            Certificaciones
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
              fontWeight: 400, 
              letterSpacing: '-0.01em',
              color: '#a1a1aa', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}
          >
            Estándares que respaldan nuestra ejecución.
          </motion.p>
        </div>

        {/* --- LOGO LOOP (Carrusel infinito) ─── */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ 
            marginBottom: '8rem',
            width: '100%',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)'
          }}
        >
          <LogoLoop
            logos={certificationLogos}
            speed={40} 
            direction="left"
            logoHeight={70} 
            gap={80}
            hoverSpeed={10} 
            scaleOnHover={true}
            fadeOut={false} 
            ariaLabel="Certificaciones de SYE"
          />
        </motion.div>

        {/* --- SECCIÓN PRESENCIA (2 Columnas) --- */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem',
          alignItems: 'center'
        }}>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: 700, 
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem' 
            }}>
              Presencia
            </h3>
            
            <p style={{ color: '#d4d4d8', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Adaptamos nuestras soluciones a distintos ámbitos de la administración pública:
            </p>

            <ul style={{ 
              color: '#d4d4d8', 
              fontSize: '1.1rem', 
              lineHeight: 1.8, 
              paddingLeft: '1.2rem',
              marginBottom: '2rem'
            }}>
              <li style={{ paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Gobierno federal</li>
              <li style={{ paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Gobierno estatal</li>
              <li style={{ paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Organismos internacionales</li>
            </ul>

            <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Cada implementación se diseña considerando los requerimientos regulatorios, operativos y presupuestales del sector.
            </p>
          </motion.div>

          {/* Columna Derecha: Imagen Premium */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover="hover" 
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
              },
              hover: {
                y: -8, 
                boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(64, 68, 151, 0.15)' 
              }
            }}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              aspectRatio: '16/10', 
              backgroundColor: '#0a0a0a',
              cursor: 'pointer' 
            }}
          >
            <motion.img 
              src="/cyber-security-operations.jpg" 
              alt="Presencia y operaciones" 
              variants={{
                hidden: { scale: 1.25 }, 
                visible: { 
                  scale: 1, 
                  transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
                },
                hover: { 
                  scale: 1.06, 
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transformOrigin: 'center center'
              }}
            />
            
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 60%)',
              pointerEvents: 'none'
            }} />

            <motion.div
              variants={{
                hidden: { left: '-100%' },
                visible: { left: '-100%' },
                hover: { 
                  left: '200%', 
                  transition: { duration: 0.8, ease: "easeInOut" }
                }
              }}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '50%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                transform: 'skewX(-25deg)', 
                pointerEvents: 'none',
                zIndex: 10
              }}
            />

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 0 },
                hover: { opacity: 1 }
              }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '24px',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.25)', 
                pointerEvents: 'none',
                transition: 'opacity 0.3s ease'
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}