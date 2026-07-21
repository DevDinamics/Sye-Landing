import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Componente individual para cada sección desplegable (Acordeón)
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <button
        className="accordion-button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontWeight: 700,
          transition: 'all 0.3s ease',
          /* ✅ Aplicamos el color verde y el subrayado cuando está abierto, tal como en tu captura */
          color: isOpen ? '#75bf40' : '#ffffff',
          textUnderlineOffset: '4px'
        }}
      >
        <span style={{ paddingRight: '1rem' }}>{title}</span>
        {/* Ícono animado que cambia de + a X */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isOpen ? '#75bf40' : '#ffffff', // Cambia a verde al abrir
            flexShrink: 0
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </motion.div>
      </button>

      {/* Contenido desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <div className="accordion-content">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PoliticasAntisoborno() {
  
  // ✅ AQUÍ ES DONDE METES TU INFORMACIÓN. 
  // Solo cambia el texto dentro de las comillas de 'content'.
  const descripcionItems = [
    {
      title: <span style={{ textDecoration: 'none', display: 'inline-block' }}>Revisión de la Política Antisoborno</span>,
      content: (
        <>
          <p style={{ margin: 0 }}>
            La Política Antisoborno será revisada al menos una vez al año, al ser requerido por la dirección o si ocurren cambios significativos en la organización, y dejando como evidencia un registro de la Minuta de reunión.
          </p>
        </>
      )
    },
    {
      title: <span style={{ textDecoration: 'none', display: 'inline-block' }}>Identificar y prevenir el soborno</span>,
      content: (
        <>
          <p style={{ marginBottom: '1.2rem' }}>
            En nuestra organización entendemos como Soborno a la oferta, promesa, entrega, aceptación o solicitud de una ventaja indebida de cualquier valor (que pueda ser de naturaleza financiera o no financiera), directamente ó indirectamente e independiente de su ubicación en violación de la ley aplicable, como incentivo o recompensa para que una persona actúe o deje de actuar en relación con el desempeño de las obligaciones de esa persona.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Los Sobornos pueden tener la forma de obsequios, prestamos, valores, pago de entretenimiento, viajes, vacaciones, pagos de comisiones o recompensas en efectivo o en especie, ofertas de trabajo, servicios personales especiales o cualquier otra cosa de valor, que se proporcione con el ánimo de obtener una ventaja o influenciar una decisión. Los actos de corrupción para efectos de la política antisoborno de la organización incluyen conductas no éticas tales como soborno, fraude, extorsión o la utilización de información falsa o privilegiada en perjuicio de la empresa.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Estas acciones están prohibidas y constituyen delitos graves. La organización prohíbe cualquier intento de ayudar u ocultar actos de corrupción independientemente de si obtienes un beneficio.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Asimismo, se entiende como un acto de corrupción y faltas de ética, el “fraude ocupacional” entendiendo a este como el uso intencional del puesto de trabajo para el enriquecimiento personal, de un socio de negocio u otra entidad a través del uso indebido de los recursos o activos de la empresa.
          </p>
          <p style={{ margin: 0 }}>
            Si identifican alguna alerta, se deberá contactar al Oficial de Cumplimiento Antisoborno para orientación y generar el registro en <span style={{ color: '#75bf40', fontWeight: 600 }}>Línea de Denuncia – SYE</span>.
          </p>
        </>
      )
    },
    {
      title: "Principios fundamentales",
      content: (
        <>
          <p style={{ marginBottom: '1.2rem' }}>
            Por lo anterior la organización prohíbe en su nombre o representación:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: 0 }}>
            <li>
              Ofrecer, pagar, prometer, autorizar el pago o recibir, directa o indirectamente, dinero, obsequios o servicios de o a cualquier colaborador, servidor público o socio de negocio, a fin de obtener alguna ventaja o de influir en una decisión a lo largo de nuestra cadena de valor.
            </li>
            <li>
              Aceptar u ofrecer algún servicio, entretenimiento, dinero, valores, gastos de viaje, alojamiento o comidas cuyo valor sea inapropiado o que no porten el logotipo de la Empresa, de o a un servidor público, proveedor, u otra parte interesada o realizar algún tipo de acto o actividad que se pueda interpretar como un incentivo para influir en una decisión o la obtención de una ventaja. En ciertas relaciones comerciales, la aceptación de comidas y otros tipos de hospitalidad se consideran normales y se estima que no influyen en las decisiones de una persona.
            </li>
            <li>
              Negociar o hacer pagos a terceros si existe algún indicio de que esas personas puedan realizar algún tipo de soborno en nuestra representación.
            </li>
            <li>
              Realizar pagos por concepto de gastos de viaje a servidores públicos o sus familiares.
            </li>
            <li>
              Realizar pagos a causas o partidos políticos con recursos de la empresa o a nombre de la organización. Se pueden realizar donativos bajo los lineamientos previamente establecidos de la organización.
            </li>
            <li>
              Los colaboradores, directivos y socios de negocio dentro del alcance del Sistema de Gestión Antisoborno deberán a apegarse a nuestra política antisoborno, procesos aplicables y ayudar en el logro de nuestros objetivos antisoborno.
            </li>
            <li>
              El personal designado como Oficial de Cumplimiento Antisoborno tiene la autoridad e independencia para supervisar el sistema de gestión, y proporcionar orientación al personal sobre cualquier inquietud, o sospecha de soborno.
            </li>
            <li>
              El Analista de Riesgos en conjunto con el Oficial de Cumplimiento Antisoborno deben evaluar los riesgos de soborno que puedan afectar el logro de los objetivos.
            </li>
          </ul>
        </>
      )
    },
    {
  title: "Compromisos",
  content: (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', margin: 0 }}>
        <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
          La organización define como <strong>'Puestos Clave'</strong> a aquellos roles con alta exposición a riesgos de corrupción, gestión financiera o relación con terceros interesados, con toma de decisión que puede influir en decisiones que podrían ser vulnerables a prácticas de soborno. Para estos perfiles identificados en <a href="https://qualtopgroup.atlassian.net/wiki/spaces/BDPYAS/pages/5967414001/Pol+tica+de+Control+de+Expedientes" style={{ color: '#75bf40', fontWeight: 600, textDecoration: 'none' }}>la Política de Control de Expedientes</a>, la <strong>Debida Diligencia</strong> es obligatoria y reforzada, consistiendo en la realización de un Estudio Socioeconómico y verificaciones de antecedentes  (ver <a href="https://qualtopgroup.atlassian.net/wiki/spaces/BDPYAS/pages/5967414231/Reclutamiento+y+Selecci+n" style={{ color: '#75bf40', fontWeight: 600, textDecoration: 'none' }}>Proceso de Reclutamiento y Selección</a>).
        </p>
        
        <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
          La <strong>Declaración de Cumplimiento Antisoborno</strong> es un requisito obligatorio para la totalidad de los colaboradores de la organización sin excepción. Deberá presentarse en el momento de la contratación, al menos una vez al año y, en caso de cambio de puesto, deberá renovarse.
        </p>
      </div>
    </>
  )
},
    {
      title: "Regalos",
      content: (
        <>
          <p style={{ marginBottom: '1.2rem' }}>
            Está prohibido dar o recibir regalos, comidas, entretenimiento, hospitalidad o cortesías (en adelante regalos), sin embargo, puede ser aceptable mientras no haya expectativa de que la persona que recibió el beneficio vaya a corresponder con algo a cambio de esa atención. Así mismo, los regalos deben ser razonables según las circunstancias, no excesivos e infrecuentes y deben cumplir la siguiente serie de requisitos que los regulan:
          </p>
          
          {/* Lista numerada para los 10 requisitos */}
          <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '0 0 1.5rem 0' }}>
            <li>Se podrá realizar o recibir regalos de valor modesto, como tazas, lapiceros o camisetas, o con valor simbólico, como trofeos o placas en reconocimiento.</li>
            <li>En ningún caso se podrá ofrecer o aceptar dinero en efectivo o equivalente (vales o tarjetas de regalo).</li>
            <li>Únicamente se podrá ofrecer o aceptar regalos u otro tipo de atenciones que no vulneren la legalidad vigente ni estén prohibidos en el marco de un contrato vigente; teniendo en cuenta que el valor no supere el importe de $4,500.00 pesos mexicanos anuales por persona y que no supere anualmente 30,000 pesos mexicanos por cliente, proveedor, partner, socio o aliado.</li>
            <li>No se podrá aceptar o realizar regalos o invitaciones de/a una misma persona más de 3 veces al año.</li>
            <li>Se habrá de respetar en todo momento la Política de Regalos de las Organizaciones con las que tenemos relaciones de negocio.</li>
            <li>No se aceptarán u ofrecerán regalos hechos en forma de servicios o beneficios (por ejemplo, promesas de empleo).</li>
            <li>No se debe realizar o aceptar regalos durante o inmediatamente después de la negociación de un contrato.</li>
            <li>No se debe aceptar u ofrecer regalos a aquellas personas que participen directamente en la adjudicación de contratos, aprobación de certificados, u otros.</li>
            <li>No deben resultar en un problema si se hace público este regalo.</li>
            <li>Cuando los regalos superen el valor o la frecuencia establecidos se solicitará la aprobación previa de Dirección General.</li>
          </ol>

          <p style={{ marginBottom: '1.2rem' }}>
            Si la organización decide otorgar algún obsequio o regalo a sus colaboradores esta acción no se considerará un acto de soborno y estarán regulados con procesos y políticas internas de la empresa. En caso de que la organización decida otorgar un regalo a alguien externo a la organización deberá cumplir la política Antisoborno. En caso de otorgar regalo(s) se deberá seguir el Proceso de Compras y Política de Compras.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Los regalos por recibir deben ser previamente reportados y autorizados vía correo electrónico al Oficial de Cumplimiento Antisoborno.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            El Oficial de Cumplimiento Antisoborno deberá:
          </p>
          
          {/* Lista con viñetas para las responsabilidades */}
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '0 0 1.5rem 0' }}>
            <li>Revisar cada solicitud de compra clasificada como regalo en la mesa de ayuda de Solicitudes administrativas.</li>
            <li>Validar que se cumplan las políticas establecidas para los regalos y en caso de que así sea, deberá de comunicarlo vía correo electrónico a los integrantes del Comité de Ética, estos deberán de revisar la información y responder por correo a más tardar los siguientes 3 días hábiles con su aprobación o rechazo, la solicitud se considerará aprobada o rechazada cuando por lo menos la mitad más uno de los integrantes del Comité de Ética haya expresado su decisión.</li>
            <li>Informar de la decisión final al colaborador.</li>
            <li>Ser responsable de llevar un registro de todos los regalos solicitados y recibidos.</li>
          </ul>

          <p style={{ margin: 0 }}>
            Si tenemos una duda sobre dar o aceptar una comida o regalo debemos preguntar a nuestro jefe directo, consultarlo con el Oficial de Cumplimiento Antisoborno, algún integrante del comité de ética o hacerlo mediante la línea de denuncia de SYE Software:&nbsp;
            <a 
              href="https://www.syesoftware.com/linea-de-denuncia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#75bf40', fontWeight: 600, textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              https://www.syesoftware.com/linea-de-denuncia/
            </a>
          </p>
        </>
      )
    },
    {
      title: "Donaciones y Patrocinios",
      content: (
        <>
          <p style={{ marginBottom: '1.2rem' }}>
            La organización puede realizar donaciones o contribuciones sociales a alguna institución y organización sin fines de lucro con la finalidad de contribuir al bienestar y desarrollo de la sociedad y de la comunidad.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            La organización deberá verificar que los Donativos apoyen alguna de las siguientes causas:
          </p>
          
          {/* Lista de Causas */}
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '0 0 1.5rem 0' }}>
            <li><strong>Promoción del bienestar:</strong> Proyectos que promuevan hábitos saludables y una mejor calidad de vida, como el deporte o alimentación balanceada.</li>
            <li><strong>Voluntariado:</strong> Programas que busquen el involucramiento de la comunidad para el apoyo de personas en situación vulnerable.</li>
            <li><strong>Auxilio en Desastres Naturales:</strong> Asistencia a personas afectadas por contingencias provocadas por temblores, huracanes, entre otros.</li>
            <li><strong>Educación:</strong> Formación de niños y jóvenes de escasos recursos a través de instituciones con programas educativos.</li>
            <li><strong>Medio Ambiente:</strong> Impulsar programas para el cuidado y conservación de los recursos.</li>
          </ul>

          <p style={{ marginBottom: '1.2rem' }}>
            Para otorgar un Donativo o contribución a un organismo o institución sin fines de lucro se debe cumplir con los siguientes lineamientos:
          </p>

          {/* Lista de Lineamientos de Donativos */}
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '0 0 1.5rem 0' }}>
            <li>Que las instituciones u organizaciones estén legalmente constituidas y registradas fiscalmente para emitir recibos deducibles de impuestos.</li>
            <li>Llevar un control efectivo y transparente de los Donativos, éstos deberán ser adecuadamente registrados en la contabilidad.</li>
            <li>En ninguna circunstancia se otorgarán Donativos a personas físicas.</li>
            <li>No se otorgará apoyo a instituciones u organizaciones con las que exista un Conflicto de Interés con algún Colaborador de la organización, a menos que se cuente con la autorización de la Dirección General.</li>
            <li>Se debe seguir el Proceso de Compras y Política de Compras para la gestión de un Donativo.</li>
          </ul>

          <p style={{ marginBottom: '1.2rem' }}>
            El objetivo de los Patrocinios es la promoción de la marca de la organización y para realizarlos se deberá cumplir con los siguientes lineamientos:
          </p>

          {/* Lista de Lineamientos de Patrocinios */}
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: 0 }}>
            <li>No realizar pagos en efectivo.</li>
            <li>No aceptar compromisos como obligación.</li>
            <li>No comprometer Patrocinios por períodos.</li>
            <li>Todos los Patrocinios deberán ser documentados especificando los montos económicos, la forma en que éstos serán utilizados y el o los beneficiarios de los mismos.</li>
            <li>No otorgar un patrocinio que ponga en riesgo la reputación de la organización o de sus accionistas.</li>
            <li>Los Patrocinios deberán ser registrados como tal en la contabilidad.</li>
          </ul>
        </>
      )
    },
    {
      title: "Gastos de viaje y Viáticos",
      content: (
        <>
          <p style={{ marginBottom: '1.2rem' }}>
            Está prohibido ofrecer, solicitar o aceptar invitaciones a viajes ya que se pueden percibir con la intención de influir o inducir a cualquiera de las partes a realizar actos que otorguen un beneficio Indebido a la organización, a sus Colaboradores, Familiares, amigos, asociados o entidades en las que tenga un Interés significativo.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Cuando se trate de invitaciones para fines relacionados con el negocio, como presentaciones y conferencias deberán tener un sentido legítimo empresarial y los gastos de viaje que se deriven deben ser cubiertos por la organización.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Los gastos de viaje y viáticos que pueden ser autorizados corresponden a los derivados de transportación aérea o terrestre, hospedaje y alimentos, que deberán cumplir con los siguientes lineamientos:
          </p>
          
          {/* Lista de Lineamientos de Viáticos */}
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '0 0 1.5rem 0' }}>
            <li>
              El costo de los vuelos, transporte, alimentos y hospedaje se autorizará y reembolsará conforme a los lineamientos establecidos en la Política de Viáticos y Comprobaciones.
            </li>
            <li>
              Cualquier gasto que no esté relacionado con un asunto de negocios de la organización o trabajo no será autorizado ni reembolsado.
            </li>
            <li>
              Los reembolsos a terceros sólo aplicarán cuando exista un contrato (o en su defecto, una propuesta de servicios aceptada) que lo estipule.
            </li>
          </ul>

          <p style={{ marginBottom: '1.2rem' }}>
            El oficial de cumplimiento antisoborno:
          </p>

          {/* Lista de Responsabilidades del Oficial */}
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: 0 }}>
            <li>
              Revisar cada solicitud de viáticos y reembolsos registrada para terceros en la mesa de ayuda de Solicitudes administrativas.
            </li>
            <li>
              Únicamente considerar los registros de gastos por otorgar a empresas o individuos que no formen parte de las empresas de Grupo Qualtop y validar que se cumplan las políticas establecidas para los viáticos y reembolso y en caso de que así sea, deberá de comunicarlo vía correo electrónico a los integrantes del Comité de Ética, estos deberán de revisar la información y responder por correo a más tardar los siguientes 3 días hábiles con su aprobación o rechazo, la solicitud se considerará aprobada o rechazada cuando por lo menos la mitad más uno de los integrantes del Comité de Ética haya expresado su decisión.
            </li>
            <li>
              Informar de la decisión final al colaborador.
            </li>
            <li>
              Ser responsable de llevar un registro de todos los tickets solicitados y recibidos.
            </li>
          </ul>
        </>
      )
    },
    {
      title: "Socios de negocio",
      content: (
        <>
          <p style={{ marginBottom: '1.2rem' }}>
            Las organizaciones sobre las que la organización tiene control son la de Proveedores, Aliados y Socios de Negocio. Quienes deben apegarse y cumplir la presente política.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Las organizaciones sobre las que se considera que no tenemos control son los Clientes y Partners, ya que nos estaremos apegando a sus lineamientos. Debido a ello, si se identifica algún desapego a esta política o antecedente de soborno se deberá identificar, evaluar y tratar como un riesgo de soborno.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Cuando se haya identificado un riesgo no bajo de soborno, ya sea a través de la evaluación de riesgos o la debida diligencia, se deberá determinar si el socio de negocio cuenta con controles antisoborno apropiados que gestionen el riesgo de soborno, tales como: Política Antisoborno, Función de Cumplimiento Antisoborno, Código de Ética u otro similar.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            En este contexto, si se identifica que el socio de negocio no cuenta con dichos controles, o si no es posible verificarlos, la organización deberá:
          </p>
          
          {/* Lista de acciones a tomar */}
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '0 0 1.5rem 0' }}>
            <li>
              De ser posible, fomentar y requerir la implementación de controles antisoborno en relación con la operación, proyecto o actividad correspondiente.
            </li>
            <li>
              De no ser posible, se deberá evaluar el riesgo de soborno que conlleva la relación con el socio de negocio y evaluar la manera de gestionar dicho riesgo.
            </li>
          </ul>

          <p style={{ marginBottom: '1.2rem' }}>
            Cuando algún Proveedor, Aliado o Socio de Negocio no desea aceptar la Política Antisoborno no se podrá continuar con la firma del contrato ni la relación comercial.
          </p>
          <p style={{ margin: 0 }}>
            Cuando un socio de negocio no desee implementar controles antisoborno la organización puede tomar la decisión de terminar, interrumpir, suspender o retirarse de la relación comercial.
          </p>
        </>
      )
    },
    /* {
      title: "Puestos Claves",
      content: (
        <>
          <p style={{ marginBottom: '1.5rem' }}>
            Los puestos identificados como clave que se listan a continuación deberán presentar una declaración de cumplimiento antisoborno por lo menos una vez al año o al cambiar de puesto:
          </p>
          
          <p style={{ fontWeight: 700, color: '#ffffff', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Puestos Administrativos:
          </p>

          
          <ul style={{ 
            listStyleType: 'disc', 
            paddingLeft: '1.5rem', 
            display: 'block', 
            columnCount: 'clamp(1, 2vw, 2)', 
            columnGap: '2rem',
            margin: 0 
          }}>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Analista de Compras</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Apoderado Legal</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Chofer</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Contador de Nómina</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Contador</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Auxiliar de Nómina</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Coordinador de Reclutamiento</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Reclutador TI</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Coordinador de Administración General</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Coordinador de Administración de Personal</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Coordinador de Capacitación y Desarrollo Organizacional</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Customer Success Leader Jr</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Customer Success Leader Sr</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Customer Success Manager</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Director Comercial Gobierno</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Director de Administración y Finanzas</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Director de Auditoría Interna y Procesos</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Director de PMO</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Director de THDO</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Director de I+D</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Director Ejecutivo/Executive Director</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Director General</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Especialista de Proyectos de Gobierno Sr.</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Gerente de Administración y Finanzas</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Gerente de Cuentas por Cobrar</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Gerente de la PMO</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Gerente de Preventa Cloud</li>
            
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Gerente de Infraestructura y Soporte TI</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Analista de Infraestructura y Soporte TI</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Gerente de Administración de Personal</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Gerente de Tesorería</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Líder Especialista de Proyectos de Gobierno</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Project Success Executive</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Sales & Business Development Manager</li>
            <li style={{ marginBottom: '0.6rem', breakInside: 'avoid' }}>Comercial Senior</li>
          </ul>
        </>
      )
    }, */
    {
      title: "Puestos de Operaciones / Proyecto:",
      content: (
        <>
          <ul style={{ 
            listStyleType: 'disc', 
            paddingLeft: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.8rem', 
            margin: 0 
          }}>
            <li>Contract Manager</li>
            <li>Director de Operaciones Gobierno y APS</li>
            <li>Director de Proyectos</li>
            <li>Gerente/Sub-Gerente del Proyecto</li>
            <li>Coordinador de Proyectos</li>
            <li>Líder de Proyecto/ Líder de Área / Project Manager</li>
          </ul>
        </>
      )
    },
    {
      title: "Formación",
      content: (
        <>
          <ul style={{ 
            listStyleType: 'disc', 
            paddingLeft: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.8rem', 
            margin: 0 
          }}>
            <li>Toda capacitación que se requiera deberá seguir el proceso de Capacitaciones.</li>
            <li>Todo el personal incluyendo directivos, debe realizar el curso de formación sobre la Política Antisoborno por lo menos una vez al año, dicho curso será administrado por el área de capacitación.</li>
            <li>Todo el personal señalado en el alcance del Sistema de Gestión Antisoborno, debe realizar el curso de formación sobre la Política Antisoborno por lo menos una vez al año, dicho curso será administrado por el área de capacitación.</li>
          </ul>
        </>
      )
    },
    {
      title: "Delegación de la toma de decisiones antisoborno",
      content: (
        <>
          <p style={{ marginBottom: '1.2rem' }}>
            El Oficial de Cumplimiento Antisoborno será el responsable de gestionar las tomas de decisiones formales que se presenten y de asegurar la implementación de la mejor solución conforme al Proceso Toma de decisiones organizacionales.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Es obligatorio realizar un proceso formal de toma de decisiones ante las siguientes situaciones:
          </p>
          
          <ul style={{ 
            listStyleType: 'disc', 
            paddingLeft: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.8rem', 
            margin: 0 
          }}>
            <li>Ante un incumplimiento con la Política Antisoborno.</li>
            <li>Cuándo en la debida diligencia se identifica algún antecedente de soborno.</li>
            <li>Cuando exista conflicto de intereses ya sea entre personal interno, o personal interno con agentes externos a la organización.</li>
          </ul>
        </>
      )
    },
    {
      title: "Consecuencias del Incumplimiento",
      content: (
        <>
          <p style={{ marginBottom: '1.2rem' }}>
            Los directivos y los colaboradores deben conocer, comprender y cumplir la presente política.
          </p>
          <p style={{ margin: 0 }}>
            Cualquier acto no congruente o en contra de esta política que sea observado o denunciado por cualquier medio, será revisado por el Comité de Ética, conforme a los lineamientos que para este efecto aplican y estarán sujetos a sanciones según lo indica la Matriz de Sanciones, las cuales pueden llegar hasta la rescisión laboral.
          </p>
        </>
      )
    },
    {
      title: "Procedimientos de Cumplimiento, Implementación, Denuncia y Control",
      content: (
        <>
          {/* Primera lista de viñetas antes del enlace web */}
          <ul style={{ 
            listStyleType: 'disc', 
            paddingLeft: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.8rem', 
            margin: '0 0 1rem 0' 
          }}>
            <li>Cualquier Directivo, Colaborador, Proveedor, Aliado, Partner o Cliente, tiene la obligación de reportar ante cualquier conocimiento de incumplimiento real o sospechoso de esta Política al Oficial de Cumplimiento Antisoborno.</li>
            <li>
              Cuando un colaborador o socio de negocio requiera obtener información, asesoría, exponer sus preocupaciones, solicitar apoyo o plantear dudas sobre temas relacionados con riesgos o posibles actos de soborno podrán acercarse al Oficial de Cumplimiento Antisoborno o al Comité de Ética para obtener asesoría, o bien, podrán hacer uso de la&nbsp;
              <a href="#" style={{ color: '#75bf40', fontWeight: 600, textDecoration: 'none' }}>Línea de Denuncia</a>.
            </li>
            <li>Cualquier reporte de soborno o actividad sospechosa será tratado como confidencial. Ninguna persona que realice un reporte de soborno o de actividad sospechosa de buena fe sufrirá sanción o perjuicio por esta actividad.</li>
            <li>
              Se ha establecido el canal&nbsp;
              <a href="#" style={{ color: '#75bf40', fontWeight: 600, textDecoration: 'none' }}>Línea de Denuncia</a>
              &nbsp;supervisado por el Oficial de Cumplimiento Antisoborno y Comité de Ética, el cual es un canal de acceso público de denuncia, para que todos los interesados puedan realizar, de buena fe y sin temor a represalias, consultas o comunicaciones de incumplimientos de lo establecido en esta Política.</li>
            <li>
              Si se tiene conocimiento de alguna conducta (activa o pasiva) contraria al contenido de la presente Política, se debe seguir el Proceso de Línea de Denuncia de Antisoborno para el planteamiento de inquietudes o denuncias y comunicarlo a través de la&nbsp;
              <a href="#" style={{ color: '#75bf40', fontWeight: 600, textDecoration: 'none' }}>Línea de Denuncia</a>
              , al que se podrá acceder a través de las páginas web de la organización:
            </li>
          </ul>

          {/* Enlace de la URL externa con la sangría correspondiente tal como en tu captura */}
          <div style={{ paddingLeft: '2.5rem', marginBottom: '1.5rem' }}>
            <span style={{ color: '#75bf40', marginRight: '0.5rem' }}>•</span>
            <a 
              href="https://www.syesoftware.com/linea-de-denuncia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#75bf40', fontWeight: 600, textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              https://www.syesoftware.com/linea-de-denuncia/
            </a>
          </div>

          {/* Segunda lista de viñetas después del enlace web */}
          <ul style={{ 
            listStyleType: 'disc', 
            paddingLeft: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '0.8rem', 
            margin: 0 
          }}>
            <li>La denuncia se puede presentar de forma anónima o el remitente se puede identificar. En cualquier caso, se garantiza la confidencialidad de la información que se comunique.</li>
            <li>Todas aquellas personas que, de buena fe o sobre la base de una creencia razonable, transmitan sus notificaciones, cooperen en una investigation o se nieguen a participar en actos presumibles de soborno estarán protegidas contra cualquier tipo de discriminación, represalias y penalización por motivo de las denuncias realizadas a menos que en base a las investigaciones se compruebe que estas mismas personas que notifican o cooperan en la investigación se encuentren involucradas.</li>
            <li>
              Reportar en la&nbsp;
              <a href="#" style={{ color: '#75bf40', fontWeight: 600, textDecoration: 'none' }}>Línea de Denuncia</a>
              &nbsp;cualquier discriminación o represalias ante alguna denuncia, participación en la investigación o por negarse a participar en actos de soborno.</li>
            <li>Es causa de despido para todo aquel que tome represalias contra algún denunciante, participante en una investigación o por negarse a participar en un soborno.</li>
            <li>Las denuncias falsas o difamatorias podrán ser objeto de sanción o dar lugar al ejercicio de las acciones a que haya lugar en derecho.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="politicas-section">
      
      {/* ─── ESTILOS RESPONSIVOS PRO ─── */}
      <style>{`
        .politicas-section {
          background-color: #050505;
          min-height: 100vh;
          color: #ffffff;
          font-family: var(--font-primary);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8rem 2rem 6rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .politicas-hero {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
          width: 100%;
          margin-bottom: 5rem;
        }

        .politicas-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 900px;
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          padding: clamp(2rem, 5vw, 4rem);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          display: flex;
          flex-direction: column;
          gap: clamp(2.5rem, 4vw, 3.5rem);
        }

        .section-title {
          margin: 0;
          font-size: clamp(1.6rem, 4vw, 2rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .section-text {
          color: #a1a1aa;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          line-height: 1.8;
          font-weight: 400;
          margin: 0 0 1rem 0;
        }

        /* Botón de Acordeón interactivo */
        .accordion-button {
          font-size: clamp(1.05rem, 3vw, 1.25rem);
          font-family: var(--font-primary);
        }
        .accordion-button:hover {
          color: #75bf40 !important;
        }

        .accordion-content {
          padding-bottom: 1.5rem;
          color: #a1a1aa;
          font-size: clamp(0.95rem, 2.5vw, 1.05rem);
          line-height: 1.7;
        }

        /* Ajustes para Móvil */
        @media (max-width: 768px) {
          .politicas-section {
            padding: 5rem 1.25rem 4rem 1.25rem;
          }
          .politicas-hero {
            margin-bottom: 3rem;
          }
          .section-text {
            text-align: justify;
            text-align-last: left;
          }
        }
      `}</style>

      {/* ─── FONDOS Y DEGRADADOS ─── */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(117, 191, 64, 0.04) 0%, rgba(5,5,5,0) 70%)', 
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* ─── HERO SECTION CENTRADO ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="politicas-hero"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#75bf40' }} />
          <span style={{ 
            color: '#75bf40', 
            fontWeight: 700, 
            fontSize: '0.85rem', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase',
            fontFamily: 'var(--font-secondary)'
          }}>
            ÉTICA Y TRANSPARENCIA
          </span>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#75bf40' }} />
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '1rem',
          color: '#ffffff'
        }}>
          Política Antisoborno
        </h1>
      </motion.div>

      {/* ─── TARJETA DE CONTENIDO ─── */}
      <motion.div
        id="declaracion"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="politicas-card"
      >
        <svg 
          style={{ position: 'absolute', right: '-5%', top: '5%', opacity: 0.03, width: '350px', height: '350px', pointerEvents: 'none' }} 
          viewBox="0 0 24 24" fill="currentColor"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>

        {/* --- OBJETIVO --- */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
            </svg>
            <h2 className="section-title">Objetivo</h2>
          </div>
          <p className="section-text">
            El objetivo de este documento es establecer las políticas Antisoborno, asegurando y promoviendo que cualquier actividad que se desempeñe dentro de la organización SYE Software, S.A. de C.V., o a nombre de la misma, esté fundamentada en la ética y valores que nos caracterizan, condenando la corrupción, soborno, fraude o cualquier otro acto ilegal que se pudiera presentar a lo largo de nuestra cadena productiva.
          </p>
          <p className="section-text">
            Dentro de nuestra organización buscamos promover siempre los valores y aptitudes que nos representan tales como, la honestidad y la ética, permitiendo así que nuestro desempeño sea reconocido no solo por nuestros resultados sino también por nuestra calidad humana.
          </p>
          <p className="section-text" style={{ marginBottom: 0 }}>
            Se describen las políticas y normas Antisoborno definidas por la organización, tomándose como base las leyes y demás regulaciones aplicables bajo las recomendaciones del estándar <strong>ISO 37001:2016</strong>.
          </p>
        </div>

        {/* --- ALCANCE --- */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h2 className="section-title">Alcance</h2>
          </div>
          <p className="section-text" style={{ marginBottom: 0 }}>
            Esta política es aplicable a los colaboradores, socios, proveedores, aliados, partners y clientes. A fin de coadyuvar y promover el cumplimiento de esta política, se ha establecido un Sistema de Gestión Antisoborno (SGAS) bajo la Norma <strong>ISO 37001:2016</strong>, el cual contiene medidas diseñadas para identificar y evaluar riesgos; prevenir, detectar y enfrentar el soborno; controles y procesos que buscan el logro de los objetivos antisoborno y reforzar nuestra cultura de honestidad y ética en los negocios.
          </p>
        </div>

        {/* --- DESCRIPCIÓN (ACORDEÓN DINÁMICO) --- */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#75bf40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <h2 className="section-title">Descripción</h2>
          </div>
          
          <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            {/* ✅ Ahora mapeamos el arreglo de objetos para inyectar título y contenido automáticamente */}
            {descripcionItems.map((item, index) => (
              <AccordionItem key={index} title={item.title}>
                
                  {item.content}
                
              </AccordionItem>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}