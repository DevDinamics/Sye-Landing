// src/components/BackToTop.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Lógica para mostrar/ocultar el botón basada en el scroll
  useEffect(() => {
    const toggleVisibility = () => {
      // Mostramos el botón si bajamos más de 400px
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Limpieza del evento
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 2. Lógica para subir suavemente (Smooth Scroll)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esta es la clave de la animación suave
    });
  };

  return (
    // AnimatePresence permite animaciones de salida (cuando isVisible es false)
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 50 }} // Estado inicial (invisible)
          animate={{ opacity: 1, scale: 1, y: 0 }}    // Estado animado (visible)
          exit={{ opacity: 0, scale: 0.5, y: 50 }}   // Estado al desaparecer
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: "#ffffff", 
            color: "#75bf40",
            boxShadow: "0 10px 25px rgba(117,191,64,0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#75bf40', // Verde SYE exacto
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100, // Por encima de todo
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            outline: 'none',
            // Aseguramos que la tipografía sea Montserrat para el ícono si es texto
            fontFamily: "'Montserrat', sans-serif !important"
          }}
          aria-label="Volver arriba"
        >
          {/* Ícono de Flecha hacia arriba (SVG minimalista) */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}