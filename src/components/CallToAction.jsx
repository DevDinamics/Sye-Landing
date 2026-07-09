'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- ICONOS MINIMALISTAS (Mantenemos los mismos de tu diseño) ---
const SVG_ICONS = {
  cpu: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
  cloud: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>,
  database: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
  layers: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
  shield: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  code: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  globe: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  zap: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
};

const MOSAIC_PATTERN = [
  null, SVG_ICONS.zap, null, null, SVG_ICONS.layers, null, null, SVG_ICONS.cloud, null,
  SVG_ICONS.database, null, null, null, null, SVG_ICONS.shield, null, null, null,
  null, SVG_ICONS.cpu, null, null, null, null, null, SVG_ICONS.code, null,
  SVG_ICONS.globe, null, null, SVG_ICONS.zap, null, null, null, null, SVG_ICONS.layers,
  null, null, SVG_ICONS.database, null, null, null, SVG_ICONS.shield, null, null
];

export default function CallToAction() {
  const containerRef = useRef(null);

  // 1. Detectamos el scroll específicamente sobre este contenedor
  // "start end" = empieza cuando la parte superior de la sección entra por abajo de la pantalla
  // "end start" = termina cuando la parte inferior de la sección sale por arriba de la pantalla
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end start"]
  });

 // 2. MAPEO INTERACTIVO DE ANIMACIÓN CORREGIDO
  // Suavizamos las escalas para que nunca colapsen a 0.85 si la página es corta
  const gridScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  
  // CORRECCIÓN CLAVE: Nos aseguramos de que el punto de opacidad máxima 1 empiece antes (0.1) 
  // y se mantenga visible hasta que la sección realmente empiece a salir de la pantalla por completo (0.9)
  const gridOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  
  // Efecto Parallax un poco más sutil para que no desfase si hay poco espacio de scroll
  const gridY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Animación del texto
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <section 
      ref={containerRef}
      style={{ 
        position: 'relative',
        backgroundColor: '#050505', 
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
        overflow: 'hidden',
        padding: '6rem 2rem'
      }}
    >
      
      {/* ─── CAPA 1: EL MOSAICO DINÁMICO (Sigue el scroll de ida y vuelta) ─── */}
      <motion.div 
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
          gap: '1.5rem',
          padding: '4rem 2rem',
          alignContent: 'center',
          justifyContent: 'center',
          // Vinculamos las variables transformadas por el scroll directo al estilo:
          scale: gridScale,
          opacity: gridOpacity,
          y: gridY,
        }}
      >
        {MOSAIC_PATTERN.map((icon, i) => (
          <div
            key={i}
            style={{
              aspectRatio: '1/1',
              borderRadius: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.35)',
              transition: 'background-color 0.3s ease, border-color 0.3s ease',
            }}
            // Truco extra: un sutil destello individual si el usuario pasa el mouse
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
            }}
          >
            {icon && icon}
          </div>
        ))}
      </motion.div>

      {/* ─── CAPA 2: MÁSCARA RADIAL (Hoyo negro central para legibilidad) ─── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.7) 50%, transparent 90%)',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* ─── CAPA 3: CONTENIDO CENTRAL TEXTOS Y BOTÓN (Con micro-ajuste de scroll) ─── */}
      <motion.div 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          textAlign: 'center',
          maxWidth: '800px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          scale: textScale // El texto se encoge un 5% sutilmente si te alejas
        }}
      >
        <span style={{ 
          color: '#75bf40', 
          fontWeight: 700, 
          fontSize: '0.9rem', 
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem' 
        }}>
          SYE Software
        </span>

        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
          fontWeight: 800, 
          color: '#ffffff',
          letterSpacing: '-0.03em',
          margin: '0 0 1.5rem 0',
          lineHeight: 1.1
        }}>
          Hazlo real. Hazlo software.
        </h2>

        <p style={{ 
          color: '#a1a1aa', 
          fontSize: '1.2rem', 
          lineHeight: 1.6,
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          Te ayudamos a modernizar tus procesos con responsabilidad y entregando resultados medibles.
        </p>

        {/* Botón interactivo */}
        <motion.a 
          href="/contacto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#545aa1', 
            color: '#ffffff',
            padding: '16px 44px',
            borderRadius: '999px', 
            fontWeight: 600,
            fontSize: '1.05rem',
            textDecoration: 'none',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 30px rgba(64, 68, 151, 0.3)', 
            transition: 'background-color 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5c63ad'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#404497'}
        >
          Contáctanos
        </motion.a>
      </motion.div>

    </section>
  );
}