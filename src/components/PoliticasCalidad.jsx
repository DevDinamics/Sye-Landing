import React from 'react';
import { motion } from 'framer-motion';

// --- NUEVO COMPONENTE PRO PARA POLÍTICA DE CALIDAD ---
export default function PoliticasCalidad() {
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
        /* Resplandor súper sutil en el fondo usando el verde de SYE */
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
        {/* Eyebrow con líneas laterales (Estilo Compliance) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#75bf40' }} />
          <span style={{ color: '#75bf40', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            CALIDAD Y MEJORA CONTINUA
          </span>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#75bf40' }} />
        </div>

        {/* Título Principal - Actualizado a Política de Calidad */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '3rem',
          color: '#ffffff'
        }}>
          Política de Calidad
        </h1>

        
      </motion.div>

      {/* ─── TARJETA DE CONTENIDO (Estilo estructurado con Iconos) ─── */}
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
          gap: '3rem' // Espacio entre secciones
        }}
      >
        {/* Marca de agua (Escudo de fondo en la tarjeta) */}
        <svg 
          style={{ position: 'absolute', right: '-5%', top: '5%', opacity: 0.03, width: '350px', height: '350px', pointerEvents: 'none' }} 
          viewBox="0 0 24 24" fill="currentColor"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>

        {/* Sección: Objetivo - Icono de Calidad / Checkmark */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7"></path>
            </svg>
            <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Objetivo
            </h2>
          </div>
          {/* TEXTO DE CALIDAD INTACTO - Verbatim del Objetivo */}
          <p style={{ color: '#a1a1aa', fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 400, margin: 0 }}>
            El propósito principal de esta política es el de garantizar la excelencia y satisfacción de nuestros clientes en la entrega de nuestros productos y/o servicios, mediante la estandarización y optimización de procesos bajo un enfoque de mejora continua, asegurando siempre el cumplimiento de los requisitos aplicables y los objetivos estratégicos de la organización.<br/>
            Se describen las políticas definidas por la organización, tomándose como base las leyes y demás regulaciones aplicables bajo las recomendaciones del estándar <strong>ISO 9001:2015</strong>.
          </p>
        </div>

        {/* Sección: Alcance - Mismo icono */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7"></path>
            </svg>
            <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Alcance
            </h2>
          </div>
          {/* TEXTO DE CALIDAD INTACTO - Verbatim del Alcance */}
          <p style={{ color: '#a1a1aa', fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 400, margin: 0 }}>
            Esta política es de aplicación obligatoria para todos los colaboradores, proveedores y socios de negocio que participan en el ciclo de vida de los productos y/o servicios de la organización en cumplimiento de los requisitos de calidad (<strong>ISO 9001:2015</strong>).
          </p>
        </div>

        {/* Sección: Descripción - Con la lista de puntos */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7"></path>
            </svg>
            <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Descripción
            </h2>
          </div>
          {/* TEXTO DE CALIDAD INTACTO - Verbatim main point */}
          <p style={{ color: '#a1a1aa', fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 400, marginBottom: '2rem' }}>
            <strong>•</strong> Nos enfocamos en la satisfacción total de necesidades y expectativas de nuestros clientes mediante la entrega de soluciones confiables y oportunas, así como de la estandarización de nuestros procesos.<br/>
            Aplicamos metodologías ágiles y marcos de alta madurez para asegurar que nuestros productos y/o servicios cumplan con los requisitos técnicos, legales y reglamentarios aplicables, fomentando una cultura de mejora continua y eficiencia.
          </p>

          {/* Detailed Points - Verbatim list points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1.5rem' }}>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
              <strong>•</strong> Nuestro compromiso se basa en:
            </p>
            <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.5, margin: 0, paddingLeft: '1rem' }}>
              -<strong>Satisvación del Cliente</strong>: Entender y cumplir sus requisitos y los del mercado.
            </p>
            <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.5, margin: 0, paddingLeft: '1rem' }}>
              -<strong>Mejora Continua</strong>: Estandarizar y optimizar nuestros procesos, productos y sistema de gestión integrado de manera constante.
            </p>
            <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.5, margin: 0, paddingLeft: '1rem' }}>
              -<strong>Cumplimiento</strong>: Cumplir los requisitos legales, reglamentarios y normativos aplicables.
            </p>
            <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.5, margin: 0, paddingLeft: '1rem' }}>
              -<strong>Desarrollo del personal</strong>: Capacitar a nuestro equipo para asegurar la competencia y calidad en sus labores.
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
}