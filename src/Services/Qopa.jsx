import React from 'react';
import Lightfall from './Lightfall';

export default function Qopa() {
  return (
    <section 
      style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        width: '100%',
        margin: 0,
        background: '#050505', 
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '80px', 
        overflow: 'hidden',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      }}
    >
      
      {/* CAPA DE FONDO: Lightfall Effect - VALORES ORIGINALES */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0,
        opacity: 1 // Lo dejamos al 100% para que brille como el original
      }}>
        <Lightfall
          // 👇 Exactamente los colores de la captura 👇
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
          
          // 👇 EFECTO DE LUZ EN EL CURSOR ACTIVADO 👇
          mouseInteraction={true}
          mouseStrength={0.5}
          mouseRadius={1}
        />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '0 2rem',
        textAlign: 'center',
        
        // Súper importante: esto deja "traspasar" el mouse para que el 
        // fondo detecte el cursor y encienda la luz
        pointerEvents: 'none' 
      }}>
        
{/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 20px",
            borderRadius: "50px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "0.05em",
            marginBottom: "2rem",
            boxShadow: "0 4px 20px rgba(82, 39, 255, 0.2)", 
          }}
        >
          {/* 👇 Tu logo de QOPA desde la carpeta public 👇 */}
          <img 
            src="/qopaTransparente.webp" 
            alt="Logo QOPA" 
            style={{ width: '22px', height: '22px', objectFit: 'contain' }}
          />
          <span style={{ color: '#d4d4d8', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            QOPA
          </span>
        </div>
        {/* Título */}
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '-0.04em',
          margin: '0 0 1rem 0',
          lineHeight: 1.1
        }}>
          QOPA Framework
        </h1>

        {/* Subtítulo Verde SYE */}
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: '#75bf40', 
          letterSpacing: '-0.02em',
          margin: '0 0 2rem 0'
        }}>
         IA Responsable con Valor Medible

        </h2>
        
        {/* Descripción */}
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#d4d4d8', 
          lineHeight: 1.7, 
          marginBottom: '3rem',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          textShadow: '0 4px 10px rgba(0,0,0,0.8)'
        }}>
          Nuestro marco de trabajo ágil y robusto diseñado específicamente para acelerar el despliegue en entornos críticos.
        </p>

        {/* Botón */}
        <a
          href="#qopa-features"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "16px 36px",
            borderRadius: "50px",
            background: "#fff",
            color: "#000",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            pointerEvents: "auto", // Le regresamos el pointer events para que reciba clics
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Descubrir metodología
        </a>
      </div>
    </section>
  );
}