import React from 'react';
import { motion } from 'framer-motion';
import DotField from './DotField';

export default function HeroDatos() {
  return (
    <section 
      className="hero-datos-container"
      style={{
        position: 'relative',
        width: '100%',
        /* ✅ TRUCO PRO: 100dvh soluciona el problema de la barra de direcciones en Safari/Chrome móvil */
        minHeight: '100dvh',
        backgroundColor: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        /* ✅ Aplicamos Montserrat (Primaria) como base general */
        fontFamily: "var(--font-primary)",
      }}
    >
      
      {/* ─── ESTILOS RESPONSIVOS PRO Y JERARQUÍA ─── */}
      <style>{`
        .hero-datos-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1.5rem;
          width: 100%;
          max-width: 1000px;
          margin-top: 6rem;
          margin-bottom: 4rem;
        }

        .datos-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
          line-height: 1.1;
          letter-spacing: -0.04em;
        }

        .datos-subtitle {
          font-size: clamp(1.5rem, 5vw, 3rem);
          font-weight: 700;
          color: #75bf40;
          margin: 0 0 2rem 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        /* ✅ TRUCO PRO: Contenedor de párrafos en lugar de <br/> */
        .datos-paragraph-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          max-width: 850px;
          margin: 0 auto 3rem auto;
        }

        .datos-paragraph {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          color: #d4d4d8;
          line-height: 1.75;
          margin: 0;
        }

        .datos-cta {
          display: inline-block;
          text-decoration: none;
          text-align: center;
          background-color: #ffffff;
          color: #050505;
          padding: 16px 36px;
          border-radius: 999px;
          font-size: 1.1rem;
          font-weight: 700;
          /* ✅ Brandon Grotesque (Secundaria) aplicado al botón */
          font-family: var(--font-secondary);
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(255,255,255,0.1);
        }

        /* ─── MEDIA QUERIES (TABLET Y MÓVIL) ─── */
        @media (max-width: 768px) {
          .hero-datos-content {
            margin-top: 4rem;
            padding: 0 1.25rem;
          }
          /* En móvil, el texto centrado suele leerse mejor que justificado si son pocas líneas */
          .datos-paragraph {
            text-align: center;
          }
        }

        /* ✅ TRUCO PRO: Ajuste para pantallas muy pequeñas (iPhone SE, etc) */
        @media (max-width: 480px) {
          .datos-cta {
            width: 50%;
            max-width: 320px;
          }
        }
      `}</style>
      
      {/* ─── FONDO INTERACTIVO FLUIDO (DOT FIELD) ─── */}
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
      <div className="hero-datos-content">
        
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
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
          <span style={{ 
            color: '#ffffff', 
            fontWeight: 600, 
            fontSize: '0.85rem', 
            letterSpacing: '0.15em',
            /* ✅ Brandon Grotesque (Secundaria) aplicado en la etiqueta de navegación superior */
            fontFamily: 'var(--font-secondary)' 
          }}>
            DATOS
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="datos-title"
        >
          Datos
        </motion.h1>

        {/* Subtítulo Verde */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="datos-subtitle"
        >
          Gobernanza e inteligencia institucional
        </motion.h2>

        {/* Cuerpo del Texto (Optimizado sin <br/>) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="datos-paragraph-wrapper"
        >
          <p className="datos-paragraph">
            Integramos, estructuramos y analizamos información institucional para transformar datos dispersos en inteligencia útil para la gestión pública.
          </p>
          <p className="datos-paragraph">
            Apoyamos la toma de decisiones operativas y estratégicas mediante arquitecturas de datos organizadas y sostenibles.
          </p>
        </motion.div>

        {/* Botón CTA */}
        <motion.a
          href="#datos-features" 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="datos-cta"
        >
          Conocer Datos
        </motion.a>

      </div>
    </section>
  );
}