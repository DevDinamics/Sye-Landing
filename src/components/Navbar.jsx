import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND = {
  blue: "#545aa1",
  magenta: "#bd0374",
  green: "#75bf40",
};

const iconColors = [BRAND.blue, BRAND.magenta, BRAND.green];
const SCROLL_TRIGGER_Y = 90;

const THEME = {
  dark: {
    navBg: 'rgba(10, 10, 12, 0.55)',
    navBorder: '1px solid rgba(255, 255, 255, 0.08)',
    navShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.35)',
    text: '#e4e4e7',
    textMuted: '#a1a1aa',
    textHover: '#ffffff',
    hamburger: '#ffffff',
    logoFilter: 'none', 
    dropdownBg: 'rgba(18, 18, 22, 0.97)',
    dropdownBorder: '1px solid rgba(255, 255, 255, 0.08)',
    dropdownShadow: '0 20px 45px rgba(0, 0, 0, 0.55)',
    dropdownLabel: '#71717a',
    dropdownText: '#f4f4f5',
    dropdownHoverBg: 'rgba(255, 255, 255, 0.06)',
    dropdownDivider: 'rgba(255, 255, 255, 0.08)',
    dropdownCtaBorder: '1px solid rgba(255, 255, 255, 0.12)',
    dropdownCtaArrow: '#a1a1aa',
    featuredText: '#d4d4d8',
    featuredHover: '#9498d6', 
  },
  light: {
    navBg: 'rgba(255, 255, 255, 0.75)',
    navBorder: '1px solid rgba(0, 0, 0, 0.06)',
    navShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
    text: '#3f3f46',
    textMuted: '#71717a',
    textHover: '#18181b',
    hamburger: '#18181b',
    logoFilter: 'brightness(0)', 
    dropdownBg: 'rgba(255, 255, 255, 0.98)',
    dropdownBorder: '1px solid rgba(0, 0, 0, 0.06)',
    dropdownShadow: '0 20px 45px rgba(0, 0, 0, 0.12)',
    dropdownLabel: '#a1a1aa',
    dropdownText: '#18181b',
    dropdownHoverBg: 'rgba(0, 0, 0, 0.04)',
    dropdownDivider: 'rgba(0, 0, 0, 0.06)',
    dropdownCtaBorder: '1px solid rgba(0, 0, 0, 0.08)',
    dropdownCtaArrow: '#71717a',
    featuredText: '#3f3f46',
    featuredHover: BRAND.blue,
  },
};

// ─── LISTA DE SERVICIOS ───
const servicesList = [
  { name: "Fábrica de Software", path: "/fabricadesoftware", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4L2 9Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg> },  { name: "Nube", path: "/nube", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg> },
  { name: "Datos", path: "/datos", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg> },  
  { name: "QOPA Framework", path: "/qopa", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> },
  { name: "DOMA", path: "/doma", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path></svg> },  
  { name: "DevSpace", path: "/devspace", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },];
const featuredLinks = [
  { name: "Casos de éxito", path: "/casos-de-exito" },
  { name: "Nuestro proceso", path: "/proceso" },
  { name: "Soporte", path: "/soporte" },
];

// ─── NUEVA LISTA DE POLÍTICAS ───
const politicasList = [
  { name: "Seguridad de la Información", path: "/seguridad", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
  { name: "Política de Calidad", path: "/calidad", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg> },
  { name: "Política Antisoborno", path: "/antisoborno", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><polyline points="9 15 11 17 15 13"></polyline></svg> },
  { name: "Línea de denuncia", path: "/denuncia", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg> }
];
// Destacados para Políticas
const featuredPoliticas = [
  { name: "Código de Ética", path: "/politicas/etica" },
  { name: "Aviso de Privacidad", path: "/privacidad" },
  { name: "Términos y Condiciones", path: "/terminos" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isPoliticasHovered, setIsPoliticasHovered] = useState(false);
  const [theme, setTheme] = useState('dark');
  const rafRef = useRef(null);

  const updateThemeFromScroll = useCallback(() => {
    const sections = document.querySelectorAll('[data-navbar-theme]');
    let active = 'dark';
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= SCROLL_TRIGGER_Y && rect.bottom > SCROLL_TRIGGER_Y) {
        active = section.getAttribute('data-navbar-theme');
      }
    });
    setTheme((prev) => (prev === active ? prev : active));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        updateThemeFromScroll();
        rafRef.current = null;
      });
    };
    updateThemeFromScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateThemeFromScroll]);

  const c = THEME[theme];

  return (
    <>
      <style>{`
        .desktop-menu { display: flex; }
        .mobile-toggle { display: none; }
        @media (max-width: 900px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>

      {/* NAVBAR PRINCIPAL CORREGIDO Y CENTRADO */}
      <motion.nav
        initial={{ y: -100, x: '-50%', opacity: 0 }} // Añadimos x: '-50%' aquí
        animate={{ y: 0, x: '-50%', opacity: 1 }}    // Añadimos x: '-50%' aquí
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%', // Cambiamos left a 50% para posicionar el eje en medio de la pantalla
          right: 'auto', // Limpiamos el right anterior
          width: '95%',
          maxWidth: '1200px',
          height: '64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 1.5rem',
          background: c.navBg,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '18px',
          border: c.navBorder,
          boxShadow: c.navShadow,
          zIndex: 100,
          color: c.text,
          transition: 'background 0.35s ease, border 0.35s ease, box-shadow 0.35s ease, color 0.35s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              src="/Logo2SYE.png"
              alt="Logo SYE"
              style={{ height: '42px', width: 'auto', objectFit: 'contain', cursor: 'pointer', filter: c.logoFilter, transition: 'filter 0.35s ease' }}
            />
          </a>

          {/* ENLACES ESCRITORIO */}
          <ul className="desktop-menu" style={{ gap: '1.75rem', listStyle: 'none', margin: 0, alignItems: 'center' }}>
            {['Inicio', 'Servicios', 'Políticas', 'Nosotros'].map((item) => (
              <li
                key={item}
                onMouseEnter={() => {
                  if (item === 'Servicios') setIsServicesHovered(true);
                  if (item === 'Políticas') setIsPoliticasHovered(true);
                }}
                onMouseLeave={() => {
                  if (item === 'Servicios') setIsServicesHovered(false);
                  if (item === 'Políticas') setIsPoliticasHovered(false);
                }}
                style={{
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: c.text,
                  position: 'relative',
                  padding: '10px 0',
                  transition: 'color 0.35s ease'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {item === 'Inicio' ? (
                    <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>{item}</a>
                  ) : item === 'Nosotros' ? (
                    <a href="/nosotros" style={{ color: 'inherit', textDecoration: 'none' }}>{item}</a>
                  ) : (
                    item
                  )}

                  {(item === 'Servicios' || item === 'Políticas') && (
                    <motion.span
                      animate={{ rotate: (item === 'Servicios' && isServicesHovered) || (item === 'Políticas' && isPoliticasHovered) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ fontSize: '0.65em', marginTop: '2px', color: c.textMuted }}
                    >
                      ▼
                    </motion.span>
                  )}
                </span>

                {/* ─── DROPDOWN DE SERVICIOS ─── */}
                <AnimatePresence>
                  {item === 'Servicios' && isServicesHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        background: c.dropdownBg,
                        backdropFilter: 'blur(25px)',
                        border: c.dropdownBorder,
                        borderRadius: '20px',
                        padding: '1.5rem',
                        width: '620px',
                        display: 'flex',
                        gap: '2rem',
                        boxShadow: c.dropdownShadow,
                        marginTop: '14px',
                        cursor: 'default'
                      }}
                    >
                      <div style={{ flex: 1.4 }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: c.dropdownLabel, textTransform: 'uppercase' }}>
                          Servicios
                        </span>
                        <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.25rem' }}>
                          {servicesList.map((service, i) => (
                            <a
                              key={service.name} href={service.path}
                              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '10px', color: c.dropdownText, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'background 0.15s ease' }}
                              onMouseOver={(e) => e.currentTarget.style.background = c.dropdownHoverBg}
                              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '8px', flexShrink: 0, background: `${iconColors[i % iconColors.length]}1A`, color: iconColors[i % iconColors.length] }}>
                                {service.icon}
                              </div>
                              {service.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ─── DROPDOWN DE POLÍTICAS ─── */}
                <AnimatePresence>
                  {item === 'Políticas' && isPoliticasHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-100px',
                        background: c.dropdownBg,
                        backdropFilter: 'blur(25px)',
                        border: c.dropdownBorder,
                        borderRadius: '20px',
                        padding: '1.5rem',
                        width: '620px',
                        display: 'flex',
                        gap: '2rem',
                        boxShadow: c.dropdownShadow,
                        marginTop: '14px',
                        cursor: 'default'
                      }}
                    >
                      <div style={{ flex: 1.4 }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: c.dropdownLabel, textTransform: 'uppercase' }}>
                          Marco Normativo
                        </span>
                        <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.25rem' }}>
                          {politicasList.map((politica, i) => (
                            <a
                              key={politica.name} href={politica.path}
                              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '10px', color: c.dropdownText, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'background 0.15s ease' }}
                              onMouseOver={(e) => e.currentTarget.style.background = c.dropdownHoverBg}
                              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '8px', flexShrink: 0, background: `${iconColors[i % iconColors.length]}1A`, color: iconColors[i % iconColors.length] }}>
                                {politica.icon}
                              </div>
                              {politica.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </li>
            ))}
          </ul>
        </div>

        {/* ACCIONES ESCRITORIO */}
        <div className="desktop-menu" style={{ gap: '1.25rem', alignItems: 'center' }}>
          <a href="/contacto" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                padding: '0.6rem 1.4rem', 
                background: BRAND.blue, 
                color: 'white', 
                border: 'none', 
                borderRadius: '50px', 
                cursor: 'pointer', 
                fontWeight: '600', 
                fontSize: '0.85rem' 
              }}
            >
              Contactar 
            </motion.button>
          </a>
        </div>

        {/* MENÚ HAMBURGUESA MÓVIL */}
        <div
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px', width: '32px', height: '32px', cursor: 'pointer', zIndex: 110 }}
        >
          <motion.div animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 7 : 0, background: c.hamburger }} style={{ width: '100%', height: '2px', borderRadius: '2px', transformOrigin: 'center', transition: 'background 0.35s ease' }} />
          <motion.div animate={{ opacity: isMobileMenuOpen ? 0 : 1, background: c.hamburger }} style={{ width: '100%', height: '2px', borderRadius: '2px', transition: 'background 0.35s ease' }} />
          <motion.div animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -7 : 0, background: c.hamburger }} style={{ width: '100%', height: '2px', borderRadius: '2px', transformOrigin: 'center', transition: 'background 0.35s ease' }} />
        </div>
      </motion.nav>

      {/* PANTALLA COMPLETA MÓVIL ADAPTABLE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ 
              position: 'fixed', 
              inset: 0, 
              background: c.dropdownBg, 
              backdropFilter: 'blur(30px)', 
              WebkitBackdropFilter: 'blur(30px)', 
              zIndex: 90, 
              display: 'flex', 
              flexDirection: 'column', 
              padding: '120px 2rem 2rem', 
              overflowY: 'auto',
              transition: 'background 0.35s ease'
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <li key="Inicio" style={{ fontSize: '1.5rem', fontWeight: 600, borderBottom: c.dropdownDivider, paddingBottom: '1rem' }}>
                <a href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ color: c.dropdownText, textDecoration: 'none', transition: 'color 0.35s ease' }}>Inicio</a>
              </li>

              <li style={{ borderBottom: c.dropdownDivider, paddingBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 600, color: c.dropdownLabel, display: 'block', marginBottom: '1.5rem', transition: 'color 0.35s ease' }}>Servicios</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', paddingLeft: '1rem' }}>
                  {servicesList.map((service, i) => (
                    <a key={service.name} href={service.path} onClick={() => setIsMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: c.dropdownText, textDecoration: 'none', fontSize: '1.2rem', fontWeight: 500, transition: 'color 0.35s ease' }}>
                      <div style={{ color: iconColors[i % iconColors.length] }}>{service.icon}</div>
                      {service.name}
                    </a>
                  ))}
                </div>
              </li>

              <li style={{ borderBottom: c.dropdownDivider, paddingBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 600, color: c.dropdownLabel, display: 'block', marginBottom: '1.5rem', transition: 'color 0.35s ease' }}>Políticas</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', paddingLeft: '1rem' }}>
                  {politicasList.map((politica, i) => (
                    <a key={politica.name} href={politica.path} onClick={() => setIsMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: c.dropdownText, textDecoration: 'none', fontSize: '1.2rem', fontWeight: 500, transition: 'color 0.35s ease' }}>
                      <div style={{ color: iconColors[i % iconColors.length] }}>{politica.icon}</div>
                      {politica.name}
                    </a>
                  ))}
                </div>
              </li>

              <li key="Nosotros" style={{ fontSize: '1.5rem', fontWeight: 600, borderBottom: c.dropdownDivider, paddingBottom: '1rem' }}>
                <a href="/nosotros" onClick={() => setIsMobileMenuOpen(false)} style={{ color: c.dropdownText, textDecoration: 'none', transition: 'color 0.35s ease' }}>Nosotros</a>
              </li>
            </ul>

            <a href="/contacto" style={{ textDecoration: 'none', width: '100%', marginTop: '3rem' }}>
              <button onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '1rem', background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.blue} 100%)`, color: 'white', border: 'none', borderRadius: '16px', fontWeight: '700', fontSize: '1.1rem', width: '100%', cursor: 'pointer' }}>
                Contactar
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}