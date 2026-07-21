import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// ─── COMPONENTE REUTILIZABLE: TARJETA SPOTLIGHT (BENTO GRID) ───
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      style={{
        position: 'relative',
        backgroundColor: 'rgba(15, 15, 18, 0.4)',
        borderRadius: '24px',
        padding: '2.5rem',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
        boxSizing: 'border-box',
        ...style
      }}
      className="bento-card"
    >
      <div 
        className="glow-bg" 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(117, 191, 64, 0.05), transparent 40%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>

      <style>{`
        .bento-card:hover .glow-bg { opacity: 1 !important; }
        .bento-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(117, 191, 64, 0.3), transparent 40%);
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
  const fileInputRef = useRef(null);
  
  // Estados para el Formulario Premium
  const [fileName, setFileName] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animaciones de scroll ligeras para el Hero
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Manejadores del Archivo (CV)
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      fileInputRef.current.files = e.dataTransfer.files;
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  // Bullets de "¿Por qué trabajar con SYE Software?"
  const porQueBullets = [
    "Modelos institucionales replicables.",
    "Gestión simultánea de múltiples proyectos.",
    "Metodologías documentadas y auditables.",
    "Operación bajo esquemas formales de gobernanza.",
    "Equipos certificados integrados a estructuras públicas."
  ];

  return (
    <div 
      ref={containerRef}
      style={{
        backgroundColor: '#050505',
        color: '#ffffff',
        fontFamily: 'var(--font-primary)', 
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      <style>{`
        /* ─── GRID GENERAL BENTO ─── */
        .bento-grid-layout {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .full-width-card { grid-column: span 2; }
        
        /* ─── FORMULARIO GLOBALES ─── */
        .premium-input-group {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }
        .premium-label {
          font-weight: 500; 
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #71717a;
          transition: color 0.2s ease;
        }
        .premium-input {
          font-family: var(--font-primary);
          font-weight: 400;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          color: #ffffff;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
          box-sizing: border-box;
        }
        .premium-input::placeholder {
          color: #52525b;
        }
        .premium-input:focus {
          border-color: rgba(117, 191, 64, 0.6);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 0 0 4px rgba(117, 191, 64, 0.15);
        }
        .premium-input-group:focus-within .premium-label {
          color: #75bf40;
        }

        /* ─── LAYOUT SECCIÓN CARRERAS (SPLIT 2 COLUMNAS) ─── */
        .careers-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 4rem;
          margin-bottom: 2rem;
          align-items: start;
        }
        .careers-info {
          text-align: left;
          padding-top: 2rem; /* Alinea visualmente el texto con el formulario */
        }
        .careers-info h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-top: 0.5rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }
        .careers-info p {
          color: #a1a1aa;
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 95%;
        }

        /* ─── HERO EDITORIAL ─── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }

        .hero-bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          filter: grayscale(15%) contrast(1.1) brightness(0.85);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(5, 5, 5, 0.2) 0%,
            rgba(5, 5, 5, 0.4) 60%,
            rgba(5, 5, 5, 0.9) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .hero-badge-container {
          padding-left: 5%;
        }

        .hero-badge {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px 6px 14px;
          background: rgba(117, 191, 64, 0.08);
          border: 1px solid rgba(117, 191, 64, 0.3);
          border-radius: 999px;
          margin-bottom: 2.5rem;
          backdrop-filter: blur(10px);
        }
        .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #75bf40;
          box-shadow: 0 0 8px 2px rgba(117, 191, 64, 0.7);
        }

        /* Línea infinita ultradelgada */
        .hero-line-wrapper {
          width: 100%;
          border-bottom: 0.5px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        /* Ajuste exacto de las letras rebanadas */
        .sliced-text {
          font-size: clamp(2.5rem, 8vw, 8.5rem);
          font-weight: 500;
          color: #f4f4f5;
          text-transform: none;
          line-height: 0.95;
          letter-spacing: -0.01em;
          white-space: nowrap; /* Evita que el texto salte de línea y rompa la máscara */
          
          clip-path: inset(0 0 22% 0);
          transform: translateY(22%);
          
          padding-right: 2rem;
          display: inline-block;
        }

        /* Posiciones horizontales de las líneas (Controladas por clases para ser responsivas) */
        .line-1 { padding-left: 5%; }
        .line-2 { padding-left: 20%; }

        /* Estilos de la sección "¿Por qué?" */
        .porque-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .porque-item {
          padding: 1rem;
          border-left: 2px solid rgba(117, 191, 64, 0.4);
          background: rgba(255,255,255,0.01);
          border-radius: 0 12px 12px 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .porque-dot {
          display: none;
        }
        .porque-text {
          color: #a1a1aa;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* ─── MEDIA QUERIES (MÓVIL / TABLET) ─── */
        @media (max-width: 900px) {
          .bento-grid-layout { grid-template-columns: 1fr; }
          .full-width-card { grid-column: span 1; }
          
          /* Ajustes de alineación Hero para móvil */
          .line-1 { padding-left: 0%; }
          .line-2 { padding-left: 5%; }
          .sliced-text { font-size: clamp(2.5rem, 11vw, 4rem); }
          
          /* Ajustes Formulario Split para móvil */
          .careers-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-top: 2rem;
          }
          .careers-info {
            text-align: center;
            padding-top: 0;
          }
          .careers-info p {
            max-width: 100%;
            margin: 0 auto;
          }
        }
      `}</style>

      {/* ─── SECCIÓN HERO (VIDEO DE FONDO + TEXTO SLICED) ─── */}
      <motion.section className="hero-section" style={{ opacity: heroOpacity }}>
        <motion.video
          className="hero-bg-video"
          src="/SYE_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ y: heroY }}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-badge-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hero-badge"
            >
              <span className="hero-badge-dot" />
              <span style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Nosotros
              </span>
            </motion.div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.1 }} className="hero-line-wrapper">
              <span className="sliced-text line-1">Soluciones</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} className="hero-line-wrapper">
              <span className="sliced-text line-2">de Alta Escala</span>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ─── CONTENIDO INFERIOR (BENTO GRID Y FORMULARIO) ─── */}
      <div style={{ position: 'relative', zIndex: 10, paddingBottom: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1200px', padding: '0 2rem', boxSizing: 'border-box' }}>
          
          <div className="bento-grid-layout">
            {/* TARJETA 1: Quiénes Somos */}
            <SpotlightCard className="full-width-card" delay={0.0}>
              <span style={{ color: '#75bf40', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>Especialización Institucional</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: '#ffffff', marginBottom: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                Gobernanza y Soluciones Tecnológicas de Alta Disponibilidad
              </h2>
              <p style={{ color: '#a1a1aa', fontSize: '1.15rem', lineHeight: 1.7, margin: 0 }}>
                Somos una empresa especializada en el desarrollo e implementación de soluciones tecnológicas para instituciones públicas y organizaciones estratégicas. Diseñamos tecnología con enfoque en estabilidad, gobernanza, trazabilidad y cumplimiento normativo.
              </p>
            </SpotlightCard>

            {/* TARJETA 2: Cultura e Integridad */}
            <SpotlightCard delay={0.1}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(117, 191, 64, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 500, letterSpacing: '-0.01em' }}>Cultura e Integridad</h3>
              <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.65, margin: 0 }}>
                Promovemos la disponibilidad, integridad y confidencialidad de la información, así como una cultura organizacional basada en ética, transparencia y responsabilidad.
              </p>
            </SpotlightCard>

            {/* TARJETA 3: Políticas Formales */}
            <SpotlightCard delay={0.2}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(117, 191, 64, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 500, letterSpacing: '-0.01em' }}>Políticas Formales</h3>
              <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.65, margin: 0 }}>
                Contamos con políticas formales de seguridad de la información, anticorrupción y línea de denuncia, alineadas a buenas prácticas internacionales.
              </p>
            </SpotlightCard>

            {/* TARJETA 4: ¿Por qué SYE Software? */}
            <SpotlightCard className="full-width-card" style={{ background: 'linear-gradient(135deg, rgba(20,20,25,0.4) 0%, rgba(10,10,12,0.6) 100%)' }} delay={0.3}>
              <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '2rem', fontWeight: 700, letterSpacing: '-0.02em', textAlign: 'center' }}>
                ¿Por qué trabajar con SYE Software?
              </h3>
              <div className="porque-list">
                {porQueBullets.map((item, idx) => (
                  <div key={idx} className="porque-item">
                    <span className="porque-text">{item}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* ─── SECCIÓN CARRERAS (SPLIT LAYOUT RESPONSIVE) ─── */}
          <div className="careers-section">
            
            {/* Columna Izquierda: Información */}
            <div className="careers-info">
              <span style={{ color: '#75bf40', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Carreras
              </span>
              <h2>Únete a nuestro equipo</h2>
              <p>
                En SYE Software buscamos talento que quiera generar impacto a través de la tecnología. Si te interesa formar parte de proyectos estratégicos para instituciones públicas y organizaciones clave, nos gustaría conocerte. Comparte tu información y nuestro equipo se pondrá en contacto contigo.
              </p>
            </div>

            {/* Columna Derecha: Tarjeta con el Formulario */}
            <div className="careers-form">
              <SpotlightCard delay={0.4} style={{ width: '100%', padding: '3.5rem 2.5rem' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} onSubmit={(e) => e.preventDefault()}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div className="premium-input-group">
                      <label className="premium-label">Nombre completo</label>
                      <input type="text" placeholder="Ej. Carlos Fuentes" required className="premium-input" />
                    </div>
                    <div className="premium-input-group">
                      <label className="premium-label">Correo electrónico</label>
                      <input type="email" placeholder="carlos@empresa.com" required className="premium-input" />
                    </div>
                  </div>
                  
                  <div className="premium-input-group">
                    <label className="premium-label">Teléfono <span style={{ color: '#52525b', fontWeight: 400 }}>(Opcional)</span></label>
                    <input type="tel" placeholder="+52 (55) 0000 0000" className="premium-input" />
                  </div>
                  
                  <div className="premium-input-group">
                    <label className="premium-label">Adjuntar CV</label>
                    <div onClick={() => fileInputRef.current.click()} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} style={{ border: isDragOver ? '1px dashed #75bf40' : '1px dashed rgba(255, 255, 255, 0.15)', backgroundColor: isDragOver ? 'rgba(117, 191, 64, 0.03)' : 'rgba(255, 255, 255, 0.01)', borderRadius: '14px', padding: '2.5rem 1.5rem', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s ease', }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'} onMouseOut={(e) => e.currentTarget.style.borderColor = isDragOver ? '#75bf40' : 'rgba(255, 255, 255, 0.15)'}>
                      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.docx" style={{ display: 'none' }} />
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={fileName ? "#75bf40" : "#52525b"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '0.75rem', transition: 'stroke 0.2s' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#e4e4e7', fontWeight: 500 }}>
                        {fileName ? '¡Archivo cargado con éxito!' : 'Arrastra tu currículum aquí o haz clic'}
                      </p>
                      <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: '#71717a' }}>
                        Soporta formatos PDF o DOCX (Máx. 5MB)
                      </p>
                      <AnimatePresence>
                        {fileName && (
                          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={{ display: 'inline-flex', alignItems: 'center', marginTop: '1rem', padding: '6px 14px', background: 'rgba(117, 191, 64, 0.1)', border: '1px solid rgba(117, 191, 64, 0.2)', borderRadius: '8px', gap: '8px' }}>
                            <span style={{ fontSize: '0.85rem', color: '#75bf40', fontWeight: 600 }}>{fileName}</span>
                            <span onClick={(e) => {e.stopPropagation(); setFileName(''); fileInputRef.current.value = '';}} style={{ color: '#75bf40', fontSize: '0.8rem', cursor: 'pointer', padding: '0 2px' }}>
                              ✕
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  <motion.button whileHover={{ scale: 1.01, backgroundColor: '#75bf40', boxShadow: '0 10px 25px rgba(117,191,64,0.25)' }} whileTap={{ scale: 0.99 }} type="submit" style={{ backgroundColor: 'rgba(117, 191, 64, 0.9)', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '1.1rem', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', marginTop: '1rem', letterSpacing: '0.02em', fontOpacity: 1, fontFamily: 'var(--font-primary)'}}>
                    Enviar información
                  </motion.button>
                </form>
              </SpotlightCard>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}