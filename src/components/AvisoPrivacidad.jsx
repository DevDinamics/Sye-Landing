import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function AvisoPrivacidad() {
  // Barra de progreso de lectura premium
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animación base para que los párrafos vayan apareciendo suavemente
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div style={{ backgroundColor: '#050505', color: '#ffffff', minHeight: '100vh', position: 'relative' }}>
      
      {/* Barra de progreso de lectura en el top */}
      <motion.div 
        style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #75bf40)', transformOrigin: '0%', scaleX, zIndex: 100 }} 
      />

      {/* Estilos CSS encapsulados con tipografías corporativas homologadas */}
      <style>{`
        .legal-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 8rem 2rem 6rem 2rem;
        }
        .legal-header {
          margin-bottom: 4rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 2rem;
        }
        
        /* 👑 FUENTE PRIMARIA: Montserrat para Encabezados */
        .legal-header h1, .legal-h2, .data-card h3, .consent-box h2, .consent-box h3 {
          font-family: 'Montserrat', sans-serif !important;
        }

        /* 🎯 FUENTE SECUNDARIA: Poppins para todo el contenido de lectura */
        .legal-header span, .legal-p, .legal-list li, .consent-box p {
          font-family: 'Poppins', sans-serif !important;
        }

        .legal-h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }
        .legal-p {
          color: #a1a1aa;
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .legal-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }
        .legal-list li {
          position: relative;
          color: #a1a1aa;
          font-size: 1.05rem;
          line-height: 1.7;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .legal-list li::before {
          content: "•";
          color: #75bf40;
          position: absolute;
          left: 0;
          font-weight: bold;
        }
        
        .data-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin: 2rem 0;
        }
        .data-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 1.5rem;
        }
        .data-card h3 {
          color: #fff;
          font-size: 1.1rem;
          margin: 0 0 1rem 0;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .email-highlight {
          display: inline-block;
          background: rgba(117, 191, 64, 0.1);
          color: #75bf40;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.2s;
        }
        .email-highlight:hover {
          background: rgba(117, 191, 64, 0.2);
        }

        .consent-box {
          margin-top: 5rem;
          padding: 3rem;
          background: rgba(20, 20, 22, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .data-grid { grid-template-columns: 1fr; }
          .consent-box { padding: 2rem 1.5rem; }
        }
      `}</style>

      {/* Elemento decorativo de fondo */}
      <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '40vh', background: 'radial-gradient(ellipse at top, rgba(117, 191, 64, 0.15), transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

      <div className="legal-container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* HEADER */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="legal-header">
          <span style={{ color: '#75bf40', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Legal
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '1rem 0', lineHeight: 1.1 }}>
            Aviso de Privacidad
          </h1>
          <p style={{ color: '#71717a', fontSize: '0.95rem' }}>Última actualización: 9 de Julio de 2026</p>
        </motion.div>

        {/* INTRODUCCIÓN */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="legal-section">
          <p className="legal-p">
            <strong>SYE Software</strong>, con domicilio en México y portal de Internet [www.syesoftware.com], es responsable del uso y protección de sus datos personales. Al respecto, le informamos lo siguiente:
          </p>
        </motion.section>

        {/* SECCIÓN 1 */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="legal-section">
          <h2 className="legal-h2">¿Qué son los datos personales?</h2>
          <p className="legal-p">
            Los datos personales son toda aquella información que se relaciona con nuestra persona y que nos identifica o nos hace identificables. Nos dan identidad, nos describen y precisan.
          </p>
          
          <div className="data-grid">
            <div className="data-card">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Datos generales
              </h3>
              <ul className="legal-list">
                <li>Edad y Domicilio</li>
                <li>Número telefónico</li>
                <li>Correo electrónico personal</li>
                <li>Trayectoria académica y laboral</li>
                <li>Patrimonio</li>
                <li>Número de seguridad social</li>
                <li>CURP</li>
                <li>Entre otros</li>
              </ul>
            </div>
            
            <div className="data-card">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Datos sensibles
              </h3>
              <p className="legal-p" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Describen aspectos más delicados, como:</p>
              <ul className="legal-list">
                <li>Forma de pensar</li>
                <li>Estado de salud</li>
                <li>Origen étnico y racial</li>
                <li>Características físicas (ADN, huella)</li>
                <li>Ideología y opiniones políticas</li>
                <li>Creencias religiosas o filosóficas</li>
                <li>Preferencias sexuales</li>
              </ul>
            </div>
          </div>

          <p className="legal-p">
            El concept de datos personales abarca la información en cualquier modo, ya sea alfabética, numérica, gráfica, fotográfica o sonora, y puede estar contenida en cualquier soporte, como papel, memoria informática, cinta de video o DVD. Los datos personales siempre son suyos; sin embargo, en ocasiones es necesario proporcionarlos a terceros para realizar trámites, acceder a productos o recibir servicios.
          </p>
        </motion.section>

        {/* SECCIÓN 2 */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="legal-section">
          <h2 className="legal-h2">¿Qué datos personales recabaremos?</h2>
          <p className="legal-p">Para cumplir con las finalidades señaladas en el presente Aviso de Privacidad, podremos recabar los siguientes datos personales:</p>
          <ul className="legal-list" style={{ columnCount: 2, columnGap: '2rem' }}>
            <li>Nombre completo</li>
            <li>Registro Federal de Contribuyentes (RFC)</li>
            <li>Clave Única de Registro de Población (CURP)</li>
            <li>Domicilio</li>
            <li>Teléfono particular y celular</li>
            <li>Correo electrónico</li>
            <li>Datos de identificación y contacto</li>
            <li>Información relacionada con campañas</li>
          </ul>
        </motion.section>

        {/* SECCIÓN 3 */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="legal-section">
          <h2 className="legal-h2">¿Para qué fines utilizaremos los datos personales?</h2>
          <p className="legal-p">
            Los datos personales que recabamos podrán ser utilizados para la realización de contratos y/o convenios que respalden nuestra relación contractual, así como para las siguientes finalidades secundarias que nos permiten brindarle una mejor atención:
          </p>
          <ul className="legal-list">
            <li>Proveer los servicios y productos solicitados.</li>
            <li>Dar cumplimiento a las obligaciones contraídas.</li>
            <li>Notificarle sobre nuevos servicios, productos o cambios relacionados.</li>
            <li>Actualizar nuestra base de datos de clientes.</li>
            <li>Evaluar la calidad de nuestros servicios.</li>
            <li>Realizar actividades de mercadotecnia, publicidad y comunicación.</li>
            <li>Llevar a cabo actividades de prospección comercial.</li>
          </ul>
          <p className="legal-p">
            En caso de que no desee que sus datos personales se utilicen para estas finalidades secundarias, podrá enviar un correo electrónico a <a href="mailto:privacidad@syesoftware.com" className="email-highlight">privacidad@syesoftware.com</a>, especificando su negativa. La negativa para el uso de sus datos personales en finalidades secundarias no será motivo para negar los servicios o productos que solicita.
          </p>
        </motion.section>

        {/* SECCIÓN 4 */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="legal-section">
          <h2 className="legal-h2">Derechos ARCO y revocación</h2>
          <p className="legal-p">
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (<strong>Acceso</strong>). Asimismo, tiene derecho a solicitar la corrección de su información personal (<strong>Rectificación</strong>); solicitar que la eliminemos de nuestros registros (<strong>Cancelación</strong>); y oponerse al uso de sus datos para fines específicos (<strong>Oposición</strong>).
          </p>
          <p className="legal-p">
            Para el ejercicio de derechos ARCO, revocación de consentimiento o limitación de divulgación, deberá presentar la solicitud correspondiente a través del correo electrónico: <a href="mailto:privacidad@syesoftware.com" className="email-highlight">privacidad@syesoftware.com</a>
          </p>
          <p className="legal-p">
            Es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que, por alguna obligación legal, debamos seguir tratando sus datos personales. Para ciertos fines, la revocación de su consentimiento podría implicar que no podamos seguir prestándole el servicio solicitado.
          </p>
        </motion.section>

        {/* SECCIÓN 5 */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="legal-section">
          <h2 className="legal-h2">Cambios y conservación de datos</h2>
          <p className="legal-p">
            El presente Aviso de Privacidad puede sufrir modificaciones derivadas de requerimientos legales, necesidades relacionadas con nuestros productos o servicios, prácticas de privacidad o cambios en nuestro modelo de negocio. Nos comprometemos a mantenerlo informado sobre cualquier modificación a través de nuestra página oficial.
          </p>
          <p className="legal-p">
            Cuando los datos personales hayan dejado de ser necesarios para el cumplimiento de las finalidades previstas, serán suprimidos una vez que concluya el plazo de conservación de setenta y dos meses, de acuerdo con el artículo 10 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
          </p>
        </motion.section>

        {/* SECCIÓN DE CONSENTIMIENTO */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="consent-box">
          <h2>Consentimiento</h2>
          <p className="legal-p" style={{ marginBottom: '2.5rem' }}>
            Al interactuar con nuestra plataforma, usted decide sobre el tratamiento de su información conforme a los términos de este Aviso de Privacidad.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
            
            <div style={{ 
              background: 'rgba(117, 191, 64, 0.05)', 
              borderLeft: '4px solid #75bf40', 
              padding: '1.5rem', 
              borderRadius: '0 12px 12px 0' 
            }}>
              <h3>Estoy de acuerdo</h3>
              <p style={{ color: '#a1a1aa', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                Consiento que mis datos personales sean utilizados conforme a los términos y condiciones del presente Aviso de Privacidad.
              </p>
            </div>

            <div style={{ 
              background: 'rgba(255, 255, 255, 0.02)', 
              borderLeft: '4px solid rgba(255, 255, 255, 0.2)', 
              padding: '1.5rem', 
              borderRadius: '0 12px 12px 0' 
            }}>
              <h3>No estoy de acuerdo</h3>
              <p style={{ color: '#a1a1aa', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                No consiento que mis datos personales sean utilizados conforme a este Aviso de Privacidad.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}