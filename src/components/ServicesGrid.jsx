import React from 'react';
import BorderGlow from './BorderGlow'; // Asegúrate de que la ruta sea correcta

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: 'Fábrica de software',
      path: '/fabricadesoftware', // <-- Ruta vinculada al Navbar
      description: 'Diseñamos y desarrollamos sistemas y plataformas integradas a la operación diaria...',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      ),
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Nube',
      path: '/nube', // <-- Ruta vinculada al Navbar
      description: 'Diseñamos y operamos arquitecturas en la Nube que sostienen la operación institucional bajo criterios...',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
      ),
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: 'Datos',
      path: '/datos', // <-- Ruta vinculada al Navbar
      description: 'Gobernanza e inteligencia institucional para la toma de decisiones estratégicas...',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
      ),
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      title: 'QOPA Framework',
      path: '/qopa', // <-- Ruta vinculada al Navbar
      description: 'Framework tecnológico que permite a las instituciones integrar inteligencia artificial en procesos, sistemas...',
      icon: <img src="/qopa.svg" alt="QOPA" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />,
      bgImage: '/qopa.svg',
    },
    {
      id: 5,
      title: 'DOMA',
      path: '/doma', // <-- Ruta vinculada al Navbar
      description: 'DOMA es una plataforma tecnológica basada en inteligencia artificial que habilita la creación y operación...',
      icon: <img src="/fondo (1).png" alt="DOMA" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />,
      bgImage: '/portada-doma.jpg',
    },
    {
      id: 6,
      title: 'DevSpace',
      path: '/devspace', // <-- Ruta vinculada al Navbar
      description: 'DevSpace es una solución tecnológica basada en inteligencia artificial que transforma la forma en que se construye...',
      icon: <img src="/devTransparente.webp" alt="DevSpace" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />,
      bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <section style={{ 
      backgroundColor: '#050505', 
      padding: '5rem 2rem',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
      textAlign: 'center'
    }}>
      
      <style>{`
        /* --- ESTILOS DEL ENCABEZADO --- */
        .section-eyebrow {
          color: #75bf40; /* Verde SYE Oficial */
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.03em;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #a1a1aa;
          max-width: 800px;
          margin: 0 auto 4rem auto;
          line-height: 1.6;
        }

        /* --- ESTILOS DEL GRID --- */
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          text-align: left; 
        }

        /* --- WRAPPER Y TARJETA INTERNA --- */
        .service-wrapper {
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .service-wrapper:hover {
          transform: translateY(-5px);
        }

        .card-inner-content {
          position: relative;
          height: 380px;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding: 2.5rem;
        }

        .card-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.3;
          transition: transform 0.7s ease, opacity 0.5s ease;
        }

        .service-wrapper:hover .card-bg {
          transform: scale(1.08);
          opacity: 0.45;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom, 
            rgba(5,5,5,0.2) 0%, 
            rgba(5,5,5,0.9) 70%, 
            #050505 100%
          );
        }

        .card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1rem 0;
          letter-spacing: -0.02em;
        }

        .card-desc {
          font-size: 0.95rem;
          color: #a1a1aa;
          line-height: 1.6;
          margin: 0;
          flex-grow: 1;
        }

        .card-btn {
          align-self: flex-start;
          padding: 10px 24px;
          border-radius: 50px;
          background: rgba(64, 68, 151, 0.2); /* Azul SYE difuminado */
          border: 1px solid rgba(64, 68, 151, 0.4);
          color: #a6c8ff;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-top: 1.5rem;
        }

        .service-wrapper:hover .card-btn {
          background: #404497; /* Azul SYE sólido al hover */
          color: #ffffff;
          transform: scale(1.05);
        }

        /* --- ESTILOS DEL BOTÓN FINAL --- */
        .main-cta-container {
          margin-top: 4rem;
        }

        .main-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 48px;
          border-radius: 50px;
          background: #404497; /* Azul SYE */
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .main-cta-btn:hover {
          background: #5c63ad; /* Azul SYE secundario (más claro) */
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(64, 68, 151, 0.4);
        }
      `}</style>

      {/* --- ENCABEZADO --- */}
      <div id="soluciones" className="section-eyebrow">NUESTROS SERVICIOS</div>
      <h2 className="section-title">Conoce nuestras soluciones</h2>
      <p className="section-subtitle">
      Nuestras capacidades se integran en modelos tecnológicos institucionales que combinan arquitectura, desarrollo y operación sostenida.       </p>

      {/* --- GRID DE SERVICIOS CON BORDER GLOW --- */}
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-wrapper">
            <BorderGlow
              edgeSensitivity={30}
              glowColor="323 97 38" 
              backgroundColor="#0d0d0d"
              borderRadius={24}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#404497', '#bd0374', '#75bf40', '#5c63ad', '#e00591']} 
            >
              <div className="card-inner-content">
                <div className="card-bg" style={{ backgroundImage: `url(${service.bgImage})` }}></div>
                <div className="card-overlay"></div>
                
                <div className="card-content">
                  <div className="icon-box">{service.icon}</div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-desc">{service.description}</p>
                  
                  {/* CAMBIO AQUÍ: Convertimos el botón en un enlace funcional con textDecoration 'none' */}
                  <a 
                    href={service.path} 
                    className="card-btn" 
                    style={{ textDecoration: 'none' }}
                  >
                    Ver más
                  </a>

                </div>
              </div>
            </BorderGlow>
          </div>
        ))}
      </div>

      {/* --- BOTÓN FINAL --- */}
      <div className="main-cta-container">
        <a href="/contacto" className="main-cta-btn">
          Contáctanos
        </a>
      </div>

    </section>
  );
}