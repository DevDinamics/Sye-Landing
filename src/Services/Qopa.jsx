import React from 'react';
import { motion } from 'framer-motion';
import Lightfall from './Lightfall';

export default function Qopa() {
  return (
    <section 
      className="hero-qopa-container"
      style={{
        position: 'relative',
        width: '100%',
        /* ✅ TRUCO PRO: 100dvh soluciona el problema de la barra de direcciones en móvil */
        minHeight: '100dvh',
        backgroundColor: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        /* ✅ Aplicamos la fuente primaria corporativa como base general */
        fontFamily: "var(--font-primary)",
      }}
    >
      
      {/* ─── ESTILOS RESPONSIVOS PRO Y JERARQUÍA ─── */}
      <style>{`
        .hero-qopa-content {
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
          
          /* ✅ CLAVE: Permite que el mouse traspase e interactúe con el Lightfall de fondo */
          pointer-events: none; 
        }

        .qopa-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 1rem 0;
          line-height: 1.1;
          letter-spacing: -0.04em;
        }

        .qopa-subtitle {
          font-size: clamp(1.5rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #75bf40; /* Verde SYE */
          margin: 0 0 2rem 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .qopa-paragraph {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          color: #d4d4d8;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto 3rem auto;
          text-shadow: 0 4px 10px rgba(0,0,0,0.8);
        }

        .qopa-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 36px;
          border-radius: 999px;
          background-color: #ffffff;
          color: #000000;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          
          /* ✅ Tipografía secundaria aplicada al botón */
          font-family: var(--font-secondary);
          
          /* ✅ CLAVE: Le regresamos la interactividad al botón para poder hacer clic */
          pointer-events: auto;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          cursor: pointer;
        }

        /* ─── MEDIA QUERIES (TABLET Y MÓVIL) ─── */
        @media (max-width: 768px) {
          .hero-qopa-content {
            margin-top: 4rem;
            padding: 0 1.25rem;
          }
          .qopa-paragraph {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .qopa-cta {
            width: 50%;
            max-width: 320px;
            justify-content: center;
          }
        }
      `}</style>

      {/* ─── CAPA DE FONDO: LIGHTFALL EFFECT ─── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 1 }}>
        <Lightfall
          colors={['#a6c8ff', '#5227ff', '#ff9ffc']} 
          backgroundColor="#0a29ff"
          speed={0.5} 
          streakCount={2} 
          streakWidth={1} 
          streakLength={1}
          glow={1}
          density={0.6}
          twinkle={1}
          zoom={3}
          backgroundGlow={0.5} 
          opacity={1}
          mouseInteraction={true}
          mouseStrength={0.5}
          mouseRadius={1}
        />
        
        {/* Máscara de gradiente opcional para suavizar los bordes y enfocar la luz */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 30%, #050505 100%)',
          pointerEvents: 'none' 
        }} />
      </div>

      {/* ─── CONTENIDO PRINCIPAL ─── */}
      <div className="hero-qopa-content">
        
        {/* Badge / Etiqueta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 24px",
            borderRadius: "999px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            marginBottom: "2rem",
            boxShadow: "0 4px 20px rgba(82, 39, 255, 0.2)",
            /* Habilitar interacción por si el badge necesita hover futuro */
            pointerEvents: "auto", 
          }}
        >
          <img 
            src="/qopaTransparente.webp" 
            alt="Logo QOPA" 
            style={{ width: '22px', height: '22px', objectFit: 'contain' }}
          />
          <span style={{ 
            color: '#d4d4d8', 
            fontWeight: 600, 
            fontSize: '0.85rem', 
            letterSpacing: '0.1em', 
            textTransform: 'uppercase',
            /* ✅ Tipografía secundaria en la etiqueta */
            fontFamily: 'var(--font-secondary)' 
          }}>
            QOPA
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="qopa-title"
        >
          QOPA Framework
        </motion.h1>

        {/* Subtítulo Verde SYE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="qopa-subtitle"
        >
          IA Responsable con Valor Medible
        </motion.h2>
        
        {/* Descripción */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="qopa-paragraph"
        >
          Nuestro marco de trabajo ágil y robusto diseñado específicamente para acelerar el despliegue en entornos críticos.
        </motion.p>

        {/* Botón CTA */}
        <motion.a
          href="#qopa-features"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.4)" }} 
          whileTap={{ scale: 0.95 }}
          className="qopa-cta"
        >
          Descubrir QOPA
        </motion.a>
      </div>
    </section>
  );
}