import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─── COMPONENTE REUTILIZABLE: TARJETA SPOTLIGHT (BENTO GRID) ───
// Este componente rastrea el mouse y crea un brillo súper fluido en los bordes y el fondo.
const SpotlightCard = ({ children, style = {}, delay = 0 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      style={{
        position: 'relative',
        backgroundColor: 'rgba(20, 20, 22, 0.4)',
        borderRadius: '24px',
        padding: '3rem',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
        ...style
      }}
      className="bento-card"
    >
      {/* Glow del fondo (sigue al mouse) */}
      <div 
        className="glow-bg" 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(117, 191, 64, 0.06), transparent 40%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />
      
      {/* Contenido */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>

      {/* CSS inyectado solo para el efecto Hover sutil de las tarjetas */}
      <style>{`
        .bento-card:hover .glow-bg { opacity: 1 !important; }
        .bento-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px; /* Grosor del borde brillante */
          background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(117, 191, 64, 0.4), transparent 40%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
        }
        .bento-card:hover::before { opacity: 1; }
      `}</style>
    </motion.div>
  );
};


export default function Nosotros() {
  const containerRef = useRef(null);
  
  // Rastrear el progreso del scroll en toda la página
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // ─── EFECTOS CINEMATOGRÁFICOS AL HACER SCROLL ───
  // El video hace un ligero zoom out (de 1.1 a 1.0)
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  // El video se oscurece
  const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [0.85, 0.15]);
  // El video se desenfoca (Blur effect nativo ultra premium)
  const videoBlur = useTransform(scrollYProgress, [0, 0.4], ['blur(0px)', 'blur(15px)']);
  
  // El texto del Hero sube y desaparece
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div 
      ref={containerRef}
      style={{
        backgroundColor: '#050505',
        // 250vh permite mucho espacio para scrollear y ver las animaciones
        minHeight: '250vh', 
        color: '#ffffff',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
        position: 'relative'
      }}
    >
      {/* ─── FONDO DE VIDEO (STICKY) ─── */}
      {/* Esto se queda pegado al fondo de la pantalla mientras haces scroll */}
      <div style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 0
      }}>
        <motion.div style={{
          width: '100%',
          height: '100%',
          scale: videoScale,
          opacity: videoOpacity,
          filter: videoBlur
        }}>
          <video 
            autoPlay loop muted playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/SYE_video.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Gradiente inferior para fusionar el video con el negro del final de la página */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '40vh',
          background: 'linear-gradient(to top, #050505 0%, transparent 100%)',
          zIndex: 1
        }} />
      </div>

      {/* ─── CONTENIDO FRONTEND (SCROLLABLE) ─── */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        // Subimos el contenido para que empiece dentro de la primera pantalla
        marginTop: '-100vh',
        paddingTop: '35vh',
        paddingBottom: '10rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* TEXTO HERO QUE DESAPARECE */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, textAlign: 'center', marginBottom: '40vh', padding: '0 2rem' }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 24px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '999px', backdropFilter: 'blur(12px)', marginBottom: '2rem' }}
          >
            <span style={{ color: '#75bf40', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              ADN Corporativo
            </span>
          </motion.div>
          
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 800, letterSpacing: '-0.04em', margin: 0, lineHeight: 1.1 }}>
            Impulsando la <br/>
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Excelencia</span> Digital
          </h1>
        </motion.div>

        {/* ─── BENTO GRID DE CONTENIDO (NUESTRO TRABAJO) ─── */}
        <div style={{ width: '100%', maxWidth: '1200px', padding: '0 2rem' }}>
          
          <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#75bf40' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0, letterSpacing: '-0.03em' }}>Nuestro Trabajo</h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem' 
          }}>
            
            {/* TARJETA 1: Especialización (Grande - Ocupa 2 columnas en desktop) */}
            <SpotlightCard style={{ gridColumn: '1 / -1' }} delay={0.1}>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 600 }}>Desarrollo Estratégico</h3>
              <p style={{ color: '#a1a1aa', fontSize: '1.25rem', lineHeight: 1.7, margin: 0, maxWidth: '800px' }}>
                Somos una empresa especializada en el desarrollo e implementación de soluciones tecnológicas para instituciones públicas y organizaciones estratégicas. Nos involucramos profundamente en el núcleo de cada proyecto.
              </p>
            </SpotlightCard>

            {/* TARJETA 2: Enfoque Tecnológico */}
            <SpotlightCard delay={0.2}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: 'rgba(117, 191, 64, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 600 }}>Arquitectura y Estabilidad</h3>
              <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
                Diseñamos tecnología con un enfoque absoluto en la <strong>estabilidad, gobernanza, trazabilidad y cumplimiento normativo</strong>, asegurando operaciones ininterrumpidas.
              </p>
            </SpotlightCard>

            {/* TARJETA 3: Compliance y Ética */}
            <SpotlightCard delay={0.3}>
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: 'rgba(117, 191, 64, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 600 }}>Compliance Internacional</h3>
              <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
                Contamos con políticas de seguridad, anticorrupción y línea de denuncia. Promovemos una cultura basada en <strong>ética, transparencia y responsabilidad</strong>.
              </p>
            </SpotlightCard>

          </div>
        </div>

      </div>
    </div>
  );
}