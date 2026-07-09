import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Componente individual para cada sección desplegable (Acordeón)
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0',
          background: 'transparent',
          border: 'none',
          color: '#ffffff',
          cursor: 'pointer',
          textAlign: 'left',
          fontSize: '1.15rem',
          fontWeight: 700,
          transition: 'color 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.color = '#75bf40'}
        onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
      >
        {title}
        {/* Ícono animado que cambia de + a - */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isOpen ? '#75bf40' : '#a1a1aa'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </motion.div>
      </button>

      {/* Contenido desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: '1.5rem', color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7 }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PoliticasAntisoborno() {
  // Lista de los puntos a desplegar extraídos de tu captura
  const descripcionItems = [
    "Revisión de la Política Antisoborno",
    "Identificar y prevenir el soborno",
    "Principios fundamentales",
    "Compromisos",
    "Regalos",
    "Donaciones y Patrocinios",
    "Gastos de viaje y Viáticos",
    "Socios de negocio",
    "Puestos Claves",
    "Puestos de Operaciones / Proyecto:",
    "Formación",
    "Delegación de la toma de decisiones antisoborno",
    "Consecuencias del Incumplimiento",
    "Procedimientos de Cumplimiento, Implementación, Denuncia y Control"
  ];

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
        background: 'radial-gradient(circle, rgba(117, 191, 64, 0.04) 0%, rgba(5,5,5,0) 70%)', 
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
          marginBottom: '5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#75bf40' }} />
          <span style={{ color: '#75bf40', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            ÉTICA Y TRANSPARENCIA
          </span>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#75bf40' }} />
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '3rem',
          color: '#ffffff'
        }}>
          Política Antisoborno
        </h1>

        
      </motion.div>

      {/* ─── TARJETA DE CONTENIDO ─── */}
      <motion.div
        id="declaracion"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '900px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '24px',
          padding: '4rem',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '3.5rem'
        }}
      >
        {/* Marca de agua */}
        <svg 
          style={{ position: 'absolute', right: '-5%', top: '5%', opacity: 0.03, width: '350px', height: '350px', pointerEvents: 'none' }} 
          viewBox="0 0 24 24" fill="currentColor"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>

        {/* --- OBJETIVO --- */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
            </svg>
            <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Objetivo
            </h2>
          </div>
          <p style={{ color: '#a1a1aa', fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 400, margin: '0 0 1rem 0' }}>
            El objetivo de este documento es establecer las políticas Antisoborno, asegurando y promoviendo que cualquier actividad que se desempeñe dentro de la organización SYE Software, S.A. de C.V., o a nombre de la misma, esté fundamentada en la ética y valores que nos caracterizan, condenando la corrupción, soborno, fraude o cualquier otro acto ilegal que se pudiera presentar a lo largo de nuestra cadena productiva.
          </p>
          <p style={{ color: '#a1a1aa', fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 400, margin: '0 0 1rem 0' }}>
            Dentro de nuestra organización buscamos promover siempre los valores y aptitudes que nos representan tales como, la honestidad y la ética, permitiendo así que nuestro desempeño sea reconocido no solo por nuestros resultados sino también por nuestra calidad humana.
          </p>
          <p style={{ color: '#a1a1aa', fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 400, margin: 0 }}>
            Se describen las políticas y normas Antisoborno definidas por la organización, tomándose como base las leyes y demás regulaciones aplicables bajo las recomendaciones del estándar <strong>ISO 37001:2016</strong>.
          </p>
        </div>

        {/* --- ALCANCE --- */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Alcance
            </h2>
          </div>
          <p style={{ color: '#a1a1aa', fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 400, margin: 0 }}>
            Esta política es aplicable a los colaboradores, socios, proveedores, aliados, partners y clientes. A fin de coadyuvar y promover el cumplimiento de esta política, se ha establecido un Sistema de Gestión Antisoborno (SGAS) bajo la Norma <strong>ISO 37001:2016</strong>, el cual contiene medidas diseñadas para identificar y evaluar riesgos; prevenir, detectar y enfrentar el soborno; controles y procesos que buscan el logro de los objetivos antisoborno y reforzar nuestra cultura de honestidad y ética en los negocios.
          </p>
        </div>

        {/* --- DESCRIPCIÓN (ACORDEÓN) --- */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Descripción
            </h2>
          </div>
          
          <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            {descripcionItems.map((item, index) => (
              <AccordionItem key={index} title={item}>
                {/* 
                  ¡AQUÍ ES DONDE PONDRÁS TU INFORMACIÓN LUEGO!
                  Por ahora dejo un texto de relleno para que veas cómo se abre y se cierra.
                */}
                <p style={{ margin: 0 }}>
                  Detalles y lineamientos correspondientes a <strong>{item.toLowerCase()}</strong>. Aquí se agrega la info, normativa para este punto.
                </p>
              </AccordionItem>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}