import React from 'react';
import { motion } from 'framer-motion';

export default function Politicas() {
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
            COMPLIANCE Y POLÍTICAS
          </span>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#75bf40' }} />
        </div>

        {/* Título Principal */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '3rem',
          color: '#ffffff'
        }}>
          Política Organizacional de <br/>Seguridad de la Información
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
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }}
      >
        {/* Marca de agua (Escudo de fondo en la tarjeta) */}
        <svg 
          style={{ position: 'absolute', right: '-5%', top: '5%', opacity: 0.03, width: '350px', height: '350px', pointerEvents: 'none' }} 
          viewBox="0 0 24 24" fill="currentColor"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>

        {/* Sección: Declaración */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
            {/* Icono de Alerta / Atención */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              Declaración
            </h2>
          </div>
          
          {/* TEXTO INTACTO - Exactamente como lo solicitaste */}
          <p style={{ 
            color: '#a1a1aa', 
            fontSize: '1.15rem', 
            lineHeight: 1.8,
            fontWeight: 400,
            margin: 0
          }}>
            En <strong style={{ color: '#ffffff' }}>SYE Software</strong> nos comprometemos a preservar y proteger la información contra amenazas internas y externas, mediante procesos de evaluación de riesgos, mejora continua, objetivos de seguridad de la información y aspectos legales, asegurando la disponibilidad, integridad y confidencialidad de los activos de la información.
          </p>
        </div>

      </motion.div>
    </div>
  );
}