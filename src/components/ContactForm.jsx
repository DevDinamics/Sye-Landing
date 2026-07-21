import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [showPrivacyError, setShowPrivacyError] = useState(false); 
  const [status, setStatus] = useState('idle'); 
  
  // Referencias para capturar los datos sin forzar re-renders constantes
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if (!privacyChecked) {
      setShowPrivacyError(true);
      return;
    }

    setShowPrivacyError(false);
    setStatus('loading');

    // 1. Obtener los datos del formulario
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      // 2. Aquí ejecutarías reCAPTCHA v3 para obtener el token
      // const recaptchaToken = await window.grecaptcha.execute('TU_CLAVE_PUBLICA', {action: 'submit'});
      // data.recaptchaToken = recaptchaToken; // Se envía al backend para validar

      // 3. Petición POST al endpoint PHP
      const response = await fetch('/api/enviar_correo.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setPrivacyChecked(false);
          formRef.current.reset(); 
        }, 3000);
      } else {
        throw new Error(result.message || 'Error en el servidor');
      }

    } catch (error) {
      console.error("Fallo al enviar:", error);
      setStatus('idle');
      alert("Hubo un problema al enviar tu mensaje. Intenta de nuevo.");
    }
  };

  return (
    <section className="contact-section" style={{
      backgroundColor: '#050505',
      color: '#ffffff',
      minHeight: '100vh',
      // 🚀 FUENTE SECUNDARIA A NIVEL GLOBAL (Para textos de lectura, inputs y descripciones)
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div className="contact-grid-container" style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
      }}>
        
        {/* ─── BLOQUE 1: SÓLO EL TÍTULO PRINCIPAL ─── */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="contact-title-block"
        >
          <h1 style={{
            // 🚀 FUENTE PRIMARIA (Títulos de alto impacto)
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700, // Aumenté un poco el peso para resaltar la fuente primaria
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            margin: '0 0 2rem 0',
            color: '#ffffff'
          }}>
            ¿Listo para crear <br />
            algo increíble?
          </h1>
        </motion.div>

        {/* ─── BLOQUE 2: EL FORMULARIO MINIMALISTA ─── */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="contact-form-block"
        >
          <h2 style={{
            // 🚀 FUENTE PRIMARIA (Encabezados de sección)
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            margin: '0 0 4rem 0',
            color: '#ffffff'
          }}>
            Contáctanos
          </h2>

          {/* FALTABA AGREGAR ref={formRef} AQUÍ 👇 */}
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column' }}>
                {/* FALTABA name="nombre" */}
                <input type="text" name="nombre" placeholder="Nombre" required style={inputStyle} />
              </div>
              <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column' }}>
                {/* FALTABA name="apellido" */}
                <input type="text" name="apellido" placeholder="Apellido" required style={inputStyle} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* FALTABA name="email" */}
              <input type="email" name="email" placeholder="Correo electrónico" required style={inputStyle} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* FALTABA name="empresa" */}
              <input type="text" name="empresa" placeholder="Empresa o Institución" style={inputStyle} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* FALTABA name="mensaje" */}
              <textarea 
                name="mensaje"
                placeholder="Escribe tu mensaje..." 
                rows="1"
                required
                style={{ ...inputStyle, resize: 'none', overflow: 'hidden' }}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
              />
            </div>

            {/* Contenedor del Checkbox y su Mensaje de Error (Se queda igual, no necesita name porque lo validas en el state) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', color: '#a1a1aa', fontSize: '0.9rem', userSelect: 'none' }}>
                <div style={{ position: 'relative', width: '22px', height: '22px' }}>
                  <input 
                    type="checkbox" 
                    className="privacy-checkbox"
                    checked={privacyChecked}
                    onChange={(e) => {
                      setPrivacyChecked(e.target.checked);
                      if (e.target.checked) setShowPrivacyError(false);
                    }}
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: privacyChecked ? 'rgba(117, 191, 64, 0.15)' : 'transparent',
                      border: privacyChecked ? '1px solid #75bf40' : showPrivacyError ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease, border 0.2s ease',
                      margin: 0,
                      display: 'block'
                    }}
                  />
                  {privacyChecked && (
                    <svg 
                      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}
                      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
                <span>He leído y entiendo el <a href="/privacidad" style={{ color: '#ffffff', textDecoration: 'underline' }}>aviso de privacidad</a></span>
              </label>

              <AnimatePresence>
                {showPrivacyError && (
                  <motion.span
                    initial={{ opacity: 0, y: -5, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -5, height: 0 }}
                    style={{ color: '#ef4444', fontSize: '0.85rem', marginLeft: '38px', fontWeight: 500 }}
                  >
                    * Por favor acepta el aviso de privacidad para continuar.
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Botón de Enviar (Se queda exactamente igual) */}
            <div>
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                animate={{
                  backgroundColor: status === 'idle' ? '#ffffff' : status === 'loading' ? '#404497' : '#75bf40',
                  color: status === 'idle' ? '#050505' : '#ffffff',
                }}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  padding: '16px 40px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  cursor: status === 'idle' ? 'pointer' : 'default',
                  marginTop: '1rem',
                  boxShadow: status === 'idle' ? '0 4px 14px rgba(255, 255, 255, 0.1)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  minWidth: '160px',
                  height: '56px',
                  width: '100%', 
                  maxWidth: '200px' 
                }}
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      Enviar
                    </motion.span>
                  )}

                  {status === 'loading' && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      <div style={{
                        width: '18px',
                        height: '18px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#ffffff',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite'
                      }} />
                      <span>Enviando...</span>
                    </motion.div>
                  )}

                  {status === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>¡Enviado!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
            
          </form>
        </motion.div>

        {/* ─── BLOQUE 3: LA INFO DE CONTACTO ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="contact-info-block"
        >
          <img 
            src="/Logo2SYE.png" 
            alt="SYE Logo" 
            style={{
              height: '52px',
              width: 'auto',
              display: 'block',
              marginBottom: '2rem'
            }}
          />
          
          <p style={{ color: '#a1a1aa', margin: '0 0 0.5rem 0', fontSize: '1rem', lineHeight: 1.6 }}>
            +52 (55) 800 75348 <br />
            +52 (55) 3023 3604
          </p>
          <p style={{ color: '#a1a1aa', margin: '0 0 2rem 0', fontSize: '1rem', lineHeight: 1.6 }}>
            info@syesoftware.com <br />
            proyectosgobierno@syesoftware.com
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', color: '#d4d4d8', fontSize: '0.9rem' }}>
            {/* Las redes sociales heredan la fuente secundaria (Inter) */}
            <a href="https://mx.linkedin.com/company/sye-software" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://www.instagram.com/syesoftware/" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
            <a href="https://www.facebook.com/SYESoftware/" style={{ color: 'inherit', textDecoration: 'none' }}>Facebook</a>
            <a href="https://x.com/SYESoftware_" style={{ color: 'inherit', textDecoration: 'none' }}>X</a>
          </div>
        </motion.div>

      </div>

      <style>{`
        .contact-section {
          padding: 8rem 2rem 4rem 2rem;
        }
        .privacy-checkbox {
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          appearance: none !important;
          -webkit-tap-highlight-color: transparent;
        }
        .privacy-checkbox:focus, .privacy-checkbox:focus-visible {
          outline: none !important;
          box-shadow: none !important;
        }
        
        /* ALINEACIÓN DE ESCRITORIO BASE */
        @media (min-width: 769px) {
          .contact-grid-container {
            grid-template-areas: 
              "title form"
              "info form";
          }
          .contact-title-block { grid-area: title; }
          .contact-info-block { grid-area: info; align-self: end; }
          .contact-form-block { grid-area: form; }
        }

        /* DETECCIÓN RESPONSIVA MÓVIL CRÍTICA */
        @media (max-width: 768px) {
          .contact-section {
            padding: 7rem 1.5rem 3rem 1.5rem !important;
          }
          .contact-grid-container {
            display: flex !important;
            flex-direction: column !important;
            gap: 3rem !important;
          }
          .contact-title-block {
            order: 1 !important;
          }
          .contact-form-block {
            order: 2 !important;
          }
          .contact-info-block {
            order: 3 !important;
            margin-top: 1rem !important;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.08); 
          }
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

// Estilos del Input (Heredan automáticamente la fuente secundaria del contenedor padre)
const inputStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#ffffff',
  fontSize: '1.1rem',
  padding: '10px 0',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.3s ease',
  fontFamily: 'inherit', // 🚀 Aseguramos que herede "Inter"
};