import React from 'react';
import MagicRings from './MagicRings';

const BRAND = {
  blue: "#404497",
  magenta: "#bd0374",
  green: "#75bf40",
};

export default function HeroDoma() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden", 
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#050505",
        padding: "6rem 1.5rem 3rem",
        textAlign: "center",
        color: "#fff",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      }}
    >
      {/* --- FONDO: MagicRings --- */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          // ELIMINAMOS pointerEvents: "none" para que el Canvas detecte el mouse
        }}
      >
        <MagicRings
          color="#a100ff" 
          colorTwo="#437ceb" 
          ringCount={6}
          speed={0.6}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={1} 
          blur={0}
          noiseAmount={0.08}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          
          // 👇 LOS ACTIVADORES DE INTERACCIÓN PRO 👇
          followMouse={true}    // Activamos el seguimiento
          mouseInfluence={0.15}  // Le subí un poco la fuerza (de 0.2 a 0.5) para que el efecto se note más
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={true}     // Activamos la explosión al hacer clic en el fondo
        />
      </div>

      {/* --- CONTENIDO --- */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "0 1rem", pointerEvents: "none" }}>
        {/* Envolvemos los elementos interactivos reales (como el botón) para devolverles el pointer-events */}
        
{/* Badge superior */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 22px",
            borderRadius: "50px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#e4e4e7",
            marginBottom: "2.5rem",
          }}
        >
          {/* 👇 Tu logo de DOMA desde la carpeta public 👇 */}
          <img 
            src="/Logo_doma.png" 
            alt="Logo DOMA" 
            style={{ 
              width: '20px',  // Dejamos el tamaño base igual para no empujar la cápsula
              height: '20px', 
              objectFit: 'contain',
              // 👇 EL TRUCO MAGICO 👇
              transform: 'scale(1.6)', // 1.6 significa 60% más grande. Ajusta este número (1.8, 2.0...) hasta que te guste
              transformOrigin: 'center' // Asegura que crezca desde el centro y no se vaya chueco
            }} 
          />
          DOMA
        </div>
        {/* Título grande */}
        <h1
          style={{
            fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.75rem",
          }}
        >
          Automatización inteligente con interacción personalizada.
        </h1>

        {/* Párrafo gris */}
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto 2.5rem",
            color: "#a1a1aa",
            fontSize: "1.15rem",
            lineHeight: 1.7,
          }}
        >
          DOMA es una plataforma tecnológica basada en inteligencia artificial que habilita la
          creación y operación de trabajadores digitales autónomos para la atención al cliente y
          la automatización de procesos en entornos físicos y digitales, combinando interacción
          conversacional y análisis en tiempo real.
        </p>

        {/* Botón CTA (Le devolvemos el puntero para que siga siendo clickeable) */}
        <a
  href="#doma-detalle" // <-- Este es el ID que va a buscar al hacer clic
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
    pointerEvents: "auto", 
  }}
>
  Conocer Doma
</a>
      </div>
    </section>
  );
}