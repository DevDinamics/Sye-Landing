import React from 'react';
import { motion } from 'framer-motion';
import DotField from './DotField';

export default function HeroFabrica() {
  return (
    <section 
      className="hero-fabrica-container"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        /* Aplicamos Montserrat (Primaria) como base general */
        fontFamily: "var(--font-primary)",
      }}
    >
      
      {/* ─── ESTILOS RESPONSIVOS AVANZADOS ─── */}
      <style>{`
        .hero-fabrica-content {
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

        .fabrica-title {
          font-size: clamp(2.8rem, 8vw, 5.5rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
          line-height: 1.1;
          letter-spacing: -0.04em;
        }

        .fabrica-subtitle {
          font-size: clamp(1.5rem, 5vw, 2.8rem);
          font-weight: 700;
          color: #75bf40;
          margin: 0 0 2.5rem 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .fabrica-paragraphs {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: #d4d4d8;
          line-height: 1.7;
          max-width: 900px;
          margin: 0 auto 3.5rem auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Ajustes específicos para móviles */
        @media (max-width: 768px) {
          .hero-fabrica-content {
            margin-top: 4rem;
            padding: 0 1.25rem;
          }
          .fabrica-paragraphs {
            text-align: justify;
            text-align-last: center;
          }
        }
      `}</style>

      {/* ─── REUTILIZACIÓN DEL DOT FIELD ─── */}
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
          glowColor="rgba(117, 191, 64, 0.3)"
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 20%, #050505 100%)',
          pointerEvents: 'none' 
        }} />
      </div>

      {/* ─── CONTENIDO CENTRAL ─── */}
      <div className="hero-fabrica-content">
        
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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span style={{ 
            color: '#ffffff', 
            fontWeight: 600, 
            fontSize: '0.85rem', 
            letterSpacing: '0.15em',
            /* Aplicamos Brandon Grotesque (Secundaria) al badge para contraste */
            fontFamily: 'var(--font-secondary)' 
          }}>
            FÁBRICA DE SOFTWARE
          </span>
        </motion.div>

        {/* Títulos con Montserrat (heredada de var(--font-primary)) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="fabrica-title"
        >
          Fábrica de Software
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="fabrica-subtitle"
        >
          Gestión de Desarrollo Institucional
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="fabrica-paragraphs"
        >
          <p style={{ margin: 0 }}>
            Diseñamos y desarrollamos sistemas y plataformas integradas a la operación diaria de instituciones públicas, alineándonos a sus marcos normativos y estructuras institucionales vigentes.
          </p>
          <p style={{ margin: 0, color: '#a1a1aa' }}>
            Nuestro modelo de trabajo asegura estabilidad, trazabilidad y mejora continua de las soluciones implementadas, permitiendo coordinar diversos proyectos simultáneamente y garantizando la continuidad operativa en entornos de alta exigencia.
          </p>
        </motion.div>

        <motion.a
          href="#fabrica-features" 
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
            /* Aplicamos Brandon Grotesque (Secundaria) al CTA */
            fontFamily: 'var(--font-secondary)',
            border: 'none', 
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(255,255,255,0.1)'
          }}
        >
          Conocer Fábrica
        </motion.a>

      </div>
    </section>
  );
}