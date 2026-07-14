import React from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles'; // Asegúrate de que apunte al archivo que guardaste

export default function DevSpaceHero() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#050505', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
    }}>
      
      {/* ─── CAPA 1: FONDO INTERACTIVO 3D (React Bits) ─── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        
        {/* Viñeta de gradiente para que las partículas se desvanezcan en los bordes y centren la atención */}
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

      {/* ─── CAPA 2: CONTENIDO CENTRAL (Dark Tech Premium) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 2rem',
          maxWidth: '1000px',
          marginTop: '4rem' // Deja espacio si tienes un navbar fijo
        }}
      >
        {/* Etiqueta / Pill superior con el Logo */}
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
          {/* Logo transparente */}
          <img
            src="/devTransparente.webp"
            alt="DevSpace Logo"
            style={{ width: '22px', height: '22px', objectFit: 'contain' }}
          />
          <span style={{ color: '#d4d4d8', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            DevSpace
          </span>
        </motion.div>

        {/* Título Principal */}
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '-0.04em',
          margin: '0 0 1rem 0',
          lineHeight: 1.1
        }}>
          DevSpace
        </h1>

        {/* Subtítulo Verde SYE */}
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: '#75bf40', 
          letterSpacing: '-0.02em',
          margin: '0 0 2rem 0'
        }}>
          Desarrollo inteligente, para ejecución de tareas
        </h2>

        {/* Descripción */}
        <p style={{
          color: '#a1a1aa',
          fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
          lineHeight: 1.7,
          margin: '0 auto 3.5rem auto',
          maxWidth: '850px'
        }}>
DevSpace es una solución tecnológica basada en inteligencia artificial que transforma la forma en que se construye software, mediante la creación de un “especificador vivo” que centraliza, interpreta y ejecuta los requerimientos del negocio.
Este enfoque permite conectar la estrategia con la ejecución técnica, reduciendo tiempos, errores y dependencias, al mismo tiempo que mejora la calidad y la trazabilidad del desarrollo.
        </p>

        {/* Botón Principal Estilo Apple (Blanco, limpio, contraste alto) */}
        <motion.a
  href="#metodologia" // <-- Este es el ID que va a buscar en la página
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    color: '#050505',
    padding: '18px 48px',
    borderRadius: '999px',
    fontWeight: 700,
    fontSize: '1.05rem',
    textDecoration: 'none',
    boxShadow: '0 10px 30px rgba(255,255,255,0.15)',
    transition: 'all 0.3s ease'
  }}
  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f4f4f5'}
  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
>
  Descubrir solución
</motion.a>
      </motion.div>
    </section>
  );
}