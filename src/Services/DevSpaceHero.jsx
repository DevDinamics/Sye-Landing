import React from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles'; 

export default function DevSpaceHero() {
  return (
    <section 
      className="hero-devspace-container"
      style={{
        position: 'relative',
        width: '100%',
        /* El uso de 100dvh evita cortes por la barra de navegación en navegadores móviles */
        minHeight: '100dvh',
        backgroundColor: '#050505', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        /* Tipografía corporativa primaria aplicada como base */
        fontFamily: "var(--font-primary)"
      }}
    >
      
      {/* ─── ESTILOS RESPONSIVOS PRO Y JERARQUÍA ─── */}
      <style>{`
        .hero-devspace-content {
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

        .devspace-title {
          font-size: clamp(3.2rem, 8vw, 6rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.04em;
          margin: 0 0 1rem 0;
          line-height: 1.1;
        }

        .devspace-subtitle {
          font-size: clamp(1.4rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #75bf40; /* Verde SYE */
          letter-spacing: -0.02em;
          margin: 0 0 2.5rem 0;
          line-height: 1.2;
        }

        /* Contenedor flexible para párrafos (Mejor UX en móvil que usar <br/>) */
        .devspace-paragraph-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          max-width: 850px;
          margin: 0 auto 3.5rem auto;
        }

        .devspace-paragraph {
          color: #a1a1aa;
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          line-height: 1.7;
          margin: 0;
        }

        .devspace-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          color: #050505;
          padding: 16px 42px;
          /* ✅ Usamos !important para que ningún estilo global te quite lo "redondito" */
          border-radius: 999px !important; 
          font-weight: 700;
          font-size: 1.05rem;
          text-decoration: none;
          /* Tipografía secundaria para contraste editorial */
          font-family: var(--font-secondary);
          box-shadow: 0 10px 30px rgba(255,255,255,0.15);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        /* ─── MEDIA QUERIES (TABLET Y MÓVIL) ─── */
        @media (max-width: 768px) {
          .hero-devspace-content {
            margin-top: 4rem;
            padding: 0 1.25rem;
          }
          .devspace-paragraph {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .devspace-cta {
            /* ✅ Le damos 90% para que no toque los bordes y mantenga su forma de píldora */
            width: 50%; 
            max-width: 320px;
            padding: 15px 24px; /* Ajuste de padding para móviles */
          }
        }
      `}</style>
      
      {/* ─── CAPA 1: FONDO INTERACTIVO 3D ─── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, #050505 90%)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />
        
        <Particles
          particleColors={["#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* ─── CAPA 2: CONTENIDO CENTRAL ─── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hero-devspace-content"
      >
        {/* Badge Pill Superior */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 24px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
            backdropFilter: 'blur(12px)',
            marginBottom: '2rem'
          }}
        >
          <img
            src="/QOPADevSpace_2blanco.png"
            alt="DevSpace Logo"
            style={{ width: '52px', height: '22px', objectFit: 'contain' }}
          />
          <span style={{ 
            color: '#d4d4d8', 
            fontWeight: 600, 
            fontSize: '0.85rem', 
            letterSpacing: '0.1em', 
            textTransform: 'uppercase',
            fontFamily: 'var(--font-secondary)'
          }}>
            DevSpace
          </span>
        </motion.div>

        {/* Título Principal */}
        <h1 className="devspace-title">
          DevSpace
        </h1>

        {/* Subtítulo Verde SYE */}
        <h2 className="devspace-subtitle">
          Desarrollo inteligente, para ejecución de tareas
        </h2>

        {/* Descripción */}
        <div className="devspace-paragraph-wrapper">
          <p className="devspace-paragraph">
            DevSpace es una solución tecnológica basada en inteligencia artificial que transforma la forma en que se construye software, mediante la creación de un “especificador vivo” que centraliza, interpreta y ejecuta los requerimientos del negocio.
          </p>
          <p className="devspace-paragraph">
            Este enfoque permite conectar la estrategia con la ejecución técnica, reduciendo tiempos, errores y dependencias, al mismo tiempo que mejora la calidad y la trazabilidad del desarrollo.
          </p>
        </div>

        {/* Botón Principal (Redondito) */}
        <motion.a
          href="#metodologia"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="devspace-cta"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f4f4f5'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
        >
          Descubrir solución
        </motion.a>
      </motion.div>
    </section>
  );
}