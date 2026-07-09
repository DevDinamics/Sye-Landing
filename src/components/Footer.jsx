import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#050505', 
      color: '#fff', 
      paddingTop: '6rem',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        .footer-top-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .footer-links-grid {
          display: flex;
          gap: 5rem;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-col h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.5rem 0;
        }
        .footer-link {
          color: #a1a1aa;
          text-decoration: none;
          transition: color 0.2s ease;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-link:hover {
          color: #ffffff;
        }
        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.15);
          color: #a1a1aa;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .social-icon-btn:hover {
          background: rgba(255,255,255,0.05);
          color: #fff;
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-2px);
        }

        /* 👇 TEXTO GIGANTE ESTILO HOWITZER 👇 */
        .big-sye-text {
          /* 👇 AJUSTA ESTOS VALORES PARA HACERLO MÁS PEQUEÑO O GRANDE 👇 */
          font-size: clamp(3.5rem, 13vw, 9.5rem);

          font-weight: 600;
          font-family: "Arial", "Helvetica Neue", sans-serif;
          line-height: 0.8;
          letter-spacing: 0.01em;
          text-align: center;
          
          /* TRUCO PRO: Si ves líneas cruzadas dentro de la "A" o la "W", 
             cambia 'transparent' por '#050505' para rellenarlas del color del fondo */
          color: transparent;

          /* Contorno visible y definido */
          -webkit-text-stroke: 1.8px rgba(255, 255, 255, 0.45);

          /* 👇 EL DEGRADADO SUAVE ESTILO HOWITZER 👇 */
          /* black 45%: Empieza a difuminarse casi a la mitad de la letra */
          /* transparent 95%: Se vuelve 100% invisible justo antes del corte */
          -webkit-mask-image: linear-gradient(
            to bottom,
            black 0%,
            transparent 65%
          );
          mask-image: linear-gradient(
            to bottom,
            black 0%,
            transparent 65%
          );

          user-select: none;
          margin-top: 2rem;
          margin-bottom: 0rem;
          transform: translateY(30px); 
        }

        .footer-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: #71717a;
          font-size: 0.85rem;
        }
        
        /* RESPONSIVE MÓVIL */
        @media (max-width: 900px) {
          .footer-top-section {
            flex-direction: column;
            gap: 4rem;
          }
          .footer-links-grid {
            flex-direction: column;
            gap: 3rem;
            width: 100%;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
        }
      `}</style>

      {/* SECCIÓN SUPERIOR: Logo, Descripción, Iconos y Columnas */}
      <div className="footer-top-section">
        
        {/* Lado Izquierdo: Marca y Redes */}
        <div style={{ maxWidth: '350px' }}>
          <img src="/Logo2SYE.png" alt="SYE Logo" style={{ height: '100px', marginBottom: '1.5rem' }} />
          <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Diseñamos y desarrollamos arquitecturas en la Nube que sostienen la operación institucional bajo criterios de alta disponibilidad.
          </p>
          
          {/* Iconos Sociales Estilo Howitzer */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {/* LinkedIn */}
            <a href="#" className="social-icon-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="social-icon-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="social-icon-btn" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            {/* Facebook */}
            <a href="#" className="social-icon-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" className="social-icon-btn" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </a>
          </div>
        </div>

        {/* Lado Derecho: Columnas de Enlaces (Mapeado de tu info de Contacto original) */}
        <div className="footer-links-grid">
          
          {/* Columna 1: Teléfonos */}
          <div className="footer-col">
            <h4>Contacto</h4>
            <a href="tel:+525580075348" className="footer-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +52 (55) 800 75348
            </a>
            <a href="tel:+525530233604" className="footer-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +52 (55) 3023 3604
            </a>
          </div>

          {/* Columna 2: Correos */}
          <div className="footer-col">
            <h4>Correos</h4>
            <a href="mailto:info@syesoftware.com" className="footer-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              info@syesoftware.com
            </a>
            <a href="mailto:proyectosgobierno@syesoftware.com" className="footer-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              proyectosgobierno@syesoftware.com
            </a>
          </div>

          {/* Columna 3: Empresa (Agregada para mantener la estructura de 3 columnas de Howitzer) */}
          <div className="footer-col">
            <h4>Empresa</h4>
            <a href="/servicios" className="footer-link">Servicios</a>
            <a href="/politicas" className="footer-link">Políticas</a>
            <a href="/nosotros" className="footer-link">Nosotros</a>
          </div>

        </div>
      </div>

      {/* TEXTO GIGANTE DE FONDO (Fade out effect) */}
      <div className="big-sye-text" style={{ position: 'relative', zIndex: 1 }}>
        SYE SOFTWARE
      </div>

      {/* BARRA INFERIOR: Derechos y enlaces legales */}
      <div style={{ position: 'relative', zIndex: 10, backgroundColor: '#050505', }}>
        <div className="footer-bottom-bar">
          <div>
            © SYE Software S.A de C.V. 2009 — 2026 Todos los derechos reservados. 
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/seguridad" className="footer-link" style={{ fontSize: '0.85rem' }}>Seguridad</a>
            <a href="/terminos" className="footer-link" style={{ fontSize: '0.85rem' }}>Términos de servicio</a>
            <a href="/privacidad" className="footer-link" style={{ fontSize: '0.85rem' }}>Privacidad</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}