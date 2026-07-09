import React from 'react';
import { motion } from 'framer-motion';

export default function LineaDenuncia() {
  return (
    <div style={{
      backgroundColor: '#050505',
      minHeight: '100vh',
      color: '#ffffff',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '8rem 2rem 6rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* ─── FONDOS Y DEGRADADOS ─── */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(117, 191, 64, 0.05) 0%, rgba(5,5,5,0) 70%)', 
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* ─── HERO SECTION CENTRADO ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '900px',
          width: '100%',
          marginBottom: '4rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#75bf40' }} />
          <span style={{ color: '#75bf40', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            CANAL SEGURO Y CONFIDENCIAL
          </span>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#75bf40' }} />
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          color: '#ffffff'
        }}>
          Línea de Denuncia
        </h1>
        
        <p style={{
          color: '#a1a1aa',
          fontSize: '1.15rem',
          lineHeight: 1.7,
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Este es un canal seguro y confidencial para reportar cualquier conducta que vulnere nuestros principios éticos, políticas internas o la legislación aplicable.
        </p>
      </motion.div>

      {/* ─── CONTENEDOR DEL IFRAME (DISEÑO PRO) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1000px', // Un poco más ancho para dar espacio al formulario
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          /* Ocultamos el desbordamiento para que las esquinas del iframe no rompan el borde redondeado */
          overflow: 'hidden', 
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Cabecera del contenedor para darle aspecto de aplicación web */}
        <div style={{
          width: '100%',
          padding: '1rem 2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          {/* Tres puntitos estilo ventana de macOS (A color) */}
          <div style={{ display: 'flex', gap: '8px', marginRight: '4px' }}>
            {/* Cerrar (Rojo) */}
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56', boxShadow: 'inset 0 0 4px rgba(0,0,0,0.2)' }}></div>
            {/* Minimizar (Amarillo) */}
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e', boxShadow: 'inset 0 0 4px rgba(0,0,0,0.2)' }}></div>
            {/* Maximizar (Verde) */}
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f', boxShadow: 'inset 0 0 4px rgba(0,0,0,0.2)' }}></div>
          </div>
          <span style={{ color: '#71717a', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.05em' }}>
            Formulario Seguro Encriptado
          </span>
          <svg style={{ marginLeft: 'auto', color: '#75bf40' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>

        {/* El iframe original intacto */}
        <div style={{ width: '100%', minHeight: '1000px', backgroundColor: 'transparent' }}>
          <iframe 
            src="https://qrewards.qualtop.com/api/denouncement/?site=sye" 
            width="100%" 
            height="1000px" 
            frameBorder="0" 
            title="Línea de Denuncia SYE"
            style={{ overflowY: 'scroll', display: 'block' }} // display block elimina márgenes fantasma debajo del iframe
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}