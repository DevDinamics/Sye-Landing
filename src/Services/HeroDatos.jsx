import React from 'react';
import { motion } from 'framer-motion';
import DotField from './DotField'; // Importamos el nuevo componente fluido

export default function HeroDatos() {
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
        
        {/* Máscara de gradiente para oscurecer los bordes */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 20%, #050505 100%)',
          pointerEvents: 'none' 
        }} />
      </div>

      {/* ─── CONTENIDO CENTRAL (DISEÑO LIMPIO TIPO DOMA) ─── */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        maxWidth: '1000px',
        marginTop: '4rem' 
      }}>
        
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
          <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em' }}>
            DATOS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          style={{ 
            fontSize: 'clamp(4rem, 8vw, 6rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            margin: '0 0 0.5rem 0', 
            lineHeight: 1.1, 
            letterSpacing: '-0.04em' 
          }}
        >
          Datos
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ 
            fontSize: 'clamp(1.8rem, 4vw, 3rem)', 
            fontWeight: 700, 
            color: '#75bf40', 
            margin: '0 0 2rem 0', 
            lineHeight: 1.2, 
            letterSpacing: '-0.02em' 
          }}
        >
          Gobernanza e inteligencia institucional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{ 
            fontSize: '1.25rem', 
            color: '#d4d4d8', 
            lineHeight: 1.7, 
            maxWidth: '850px', 
            margin: '0 auto 3rem auto' 
          }}
        >
          Integramos, estructuramos y analizamos información institucional para transformar datos dispersos en inteligencia útil para la gestión pública.
          <br/><br/>
          Apoyamos la toma de decisiones operativas y estratégicas mediante arquitecturas de datos organizadas y sostenibles.
        </motion.p>

        <motion.a
          href="#datos-features" // <-- Apunta al ID que acabamos de crear
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-block', // Necesario para que el <a> respete padding y transformaciones
            textDecoration: 'none',  // Evita el subrayado clásico de los enlaces
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
          Conocer Datos
        </motion.a>

      </div>
    </section>
  );
}