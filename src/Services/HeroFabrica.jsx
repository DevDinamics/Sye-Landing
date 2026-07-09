import React from 'react';
import { motion } from 'framer-motion';
import DotField from './DotField'; // Reutilizamos el mismo fondo interactivo y fluido

export default function HeroFabrica() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#050505',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
    }}>
      
      {/* ─── REUTILIZACIÓN DEL DOT FIELD (FONDO INTERACTIVO) ─── */}
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
        
        {/* Máscara de gradiente radial para oscurecer las esquinas */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 20%, #050505 100%)',
          pointerEvents: 'none' 
        }} />
      </div>

      {/* ─── CONTENIDO CENTRAL (DISEÑO ALINEADO A TU CAPTURA) ─── */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        maxWidth: '1000px',
        marginTop: '6rem', // Espacio para no chocar con el Navbar
        marginBottom: '4rem'
      }}>
        
        {/* Badge / Etiqueta de la parte superior */}
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
          {/* Icono minimalista de código / desarrollo */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em' }}>
            FÁBRICA DE SOFTWARE
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          style={{ 
            fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            margin: '0 0 0.5rem 0', 
            lineHeight: 1.1, 
            letterSpacing: '-0.04em' 
          }}
        >
          Fábrica de Software
        </motion.h1>

        {/* Subtítulo Verde de tu captura */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ 
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
            fontWeight: 700, 
            color: '#75bf40', // Verde SYE exacto
            margin: '0 0 2.5rem 0', 
            lineHeight: 1.2, 
            letterSpacing: '-0.02em' 
          }}
        >
          Gestión de Desarrollo Institucional
        </motion.h2>

        {/* Cuerpo del Texto (Párrafos exactos de la captura) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{ 
            fontSize: '1.2rem', 
            color: '#d4d4d8', 
            lineHeight: 1.7, 
            maxWidth: '900px', 
            margin: '0 auto 3.5rem auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem' // Separación entre ambos párrafos
          }}
        >
          <p style={{ margin: 0 }}>
            Diseñamos y desarrollamos sistemas y plataformas integradas a la operación diaria de instituciones públicas, alineándonos a sus marcos normativos y estructuras institucionales vigentes.
          </p>
          <p style={{ margin: 0, color: '#a1a1aa', fontSize: '1.15rem' }}>
            Nuestro modelo de trabajo asegura estabilidad, trazabilidad y mejora continua de las soluciones implementadas, permitiendo coordinar diversos proyectos simultáneamente y garantizando la continuidad operativa en entornos de alta exigencia.
          </p>
        </motion.div>

        {/* Botón CTA */}
        <motion.a
          href="#fabrica-features" // <-- Apunta a la sección de la Fábrica
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-block', // Mantiene la forma del botón
            textDecoration: 'none',  // Quita la línea de enlace
            textAlign: 'center',
            backgroundColor: '#ffffff', 
            color: '#050505', 
            padding: '16px 36px',
            borderRadius: '999px', 
            fontSize: '1.1rem', 
            fontWeight: 700,
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