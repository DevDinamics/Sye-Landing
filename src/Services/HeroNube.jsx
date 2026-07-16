import React from 'react';
import { motion } from 'framer-motion';
import DotField from './DotField'; 

export default function HeroNube() {
  return (
    <section 
      className="hero-nube-container"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        /* ✅ Aplicamos Montserrat (Primaria) como base general */
        fontFamily: "var(--font-primary)",
      }}
    >
      
      {/* ─── ESTILOS RESPONSIVOS Y JERARQUÍA TIPOGRÁFICA ─── */}
      <style>{`
        .hero-nube-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1.5rem;
          max-width: 1000px;
          margin-top: 6rem;
          margin-bottom: 4rem;
        }

        .nube-title {
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
          line-height: 1.1;
          letter-spacing: -0.04em;
        }

        .nube-subtitle {
          font-size: clamp(1.5rem, 5vw, 3rem);
          font-weight: 700;
          color: #75bf40;
          margin: 0 0 2.5rem 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .nube-paragraph {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          color: #d4d4d8;
          line-height: 1.75;
          max-width: 900px;
          margin: 0 auto 3rem auto;
        }

        /* Ajustes específicos para dispositivos móviles */
        @media (max-width: 768px) {
          .hero-nube-content {
            margin-top: 4rem;
            padding: 0 1.25rem;
          }
          .nube-paragraph {
            text-align: justify;
            text-align-last: center;
          }
        }
      `}</style>

      {/* ─── FONDO INTERACTIVO (DOT FIELD) ─── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <DotField
          dotRadius={2.5}
          dotSpacing={14}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly={true}
          bulgeStrength={67}
          glowRadius={160}
          gradientFrom="rgba(255, 255, 255, 0.4)"
          gradientTo="rgba(255, 255, 255, 0.1)"
          glowColor="rgba(64, 68, 151, 0.4)" /* Glow azul para diferenciar la sección de Nube */
        />
        
        {/* Máscara de gradiente para oscurecer los bordes */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 20%, #050505 100%)',
          pointerEvents: 'none' 
        }} />
      </div>

      {/* ─── CONTENIDO CENTRAL ─── */}
      <div className="hero-nube-content">
        
        {/* Badge / Etiqueta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '8px 20px', 
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            borderRadius: '999px',
            backdropFilter: 'blur(12px)', 
            marginBottom: '2rem'
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#404497" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
          </svg>
          <span style={{ 
            color: '#ffffff', 
            fontWeight: 600, 
            fontSize: '0.85rem', 
            letterSpacing: '0.15em',
            /* ✅ Brandon Grotesque (Secundaria) aplicada en la etiqueta */
            fontFamily: 'var(--font-secondary)' 
          }}>
            NUBE
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="nube-title"
        >
          NUBE
        </motion.h1>

        {/* Subtítulo Verde */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="nube-subtitle"
        >
          Infraestructura y Modernización Tecnológica
        </motion.h2>

        {/* Cuerpo del Texto */}
        <motion.p
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="nube-paragraph"
        >
          Diseñamos y operamos arquitecturas en la Nube que sostienen la operación institucional bajo criterios de modernización, escalabilidad, disponibilidad, seguridad y control.
        </motion.p>

        {/* Botón CTA */}
        <motion.a
          href="#nube-features" 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-block', 
            textDecoration: 'none',  
            textAlign: 'center',
            backgroundColor: '#ffffff', 
            color: '#050505', 
            padding: '16px 36px',
            borderRadius: '999px', 
            fontSize: '1.1rem', 
            fontWeight: 700,
            /* ✅ Brandon Grotesque (Secundaria) aplicada al botón */
            fontFamily: 'var(--font-secondary)',
            border: 'none', 
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(255,255,255,0.1)'
          }}
        >
          Conocer Nube
        </motion.a>
      </div>
    </section>
  );
}