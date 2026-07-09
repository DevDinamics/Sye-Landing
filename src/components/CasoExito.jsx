'use client';
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate, useTransform } from 'framer-motion';

// ─────────────────────────────────────────────
// Tokens de marca
// ─────────────────────────────────────────────
const BRAND = {
  indigo: '#404497',
  azulAcero: '#545aa1',
  magenta: '#bd0374',
  fucsia: '#e00591',
  verde: '#75bf40',
  grafito: '#3b3b3b',
};

const GRADIENT_CTA = `linear-gradient(90deg, ${BRAND.indigo}, ${BRAND.magenta})`;
const EASE = [0.16, 1, 0.3, 1];

// 👇 MATEMÁTICA CORREGIDA DEL RECORTE TIPO CLERK 👇
const NOTCH_HEIGHT = 64;
const SHOULDER = '12%';
const ANGLE_WIDTH = '48px';

const CLERK_CUTOUT = `polygon(
  0% 0%,
  ${SHOULDER} 0%,
  calc(${SHOULDER} + ${ANGLE_WIDTH}) ${NOTCH_HEIGHT}px,
  calc(100% - ${SHOULDER} - ${ANGLE_WIDTH}) ${NOTCH_HEIGHT}px,
  calc(100% - ${SHOULDER}) 0%,
  100% 0%,
  100% 100%,
  calc(100% - ${SHOULDER}) 100%,
  calc(100% - ${SHOULDER} - ${ANGLE_WIDTH}) calc(100% - ${NOTCH_HEIGHT}px),
  calc(${SHOULDER} + ${ANGLE_WIDTH}) calc(100% - ${NOTCH_HEIGHT}px),
  ${SHOULDER} 100%,
  0% 100%
)`;

const CARDS = [
  {
    label: 'Reto',
    text: 'El SAT requería acelerar el desarrollo de sistemas críticos, mejorar la estabilidad operativa y responder con rapidez a cambios regulatorios sin comprometer control ni trazabilidad.',
    tags: ['Sistemas críticos', 'Estabilidad operativa', 'Cambios regulatorios', 'Trazabilidad'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l10 18H2L12 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="17.2" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Solución',
    text: 'Implementamos una fábrica de software integral basada en metodologías ágiles, gobierno de TI y estándares de calidad, integrando talento especializado, automatización y monitoreo continuo.',
    tags: ['Metodologías ágiles', 'Gobierno de TI', 'Automatización', 'Monitoreo continuo'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 18h6M10 21h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .8 1.7V16h5.6v-.5c0-.7.3-1.3.8-1.7A6 6 0 0 0 12 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const STATS = [
  { value: '+40%', label: 'Incremento en velocidad de entrega' },
  { value: '-60%', label: 'Incidencias críticas en 6 meses' },
  { value: '100%', label: 'Trazabilidad de requerimientos', highlight: true },
  { value: '+25', label: 'Módulos digitales implementados' },
];

const IMPACT_TEXT =
  'El SAT fortaleció su capacidad de innovación tecnológica, redujo retrabajos operativos y consolidó una operación digital estable, escalable y alineada a sus marcos normativos.';

function BrandMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="url(#markGrad)" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4.5" stroke="url(#markGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="markGrad" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor={BRAND.azulAcero} />
          <stop offset="100%" stopColor={BRAND.magenta} />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TechCircuitOverlay() {
  const paths = [
    'M 0,140 H 260 L 300,180 V 420',
    'M 1600,90 H 1260 L 1220,130 V 320 L 1180,360 H 860',
    'M 120,620 H 460 L 500,660 V 900',
    'M 1500,720 H 1080 L 1040,680 V 460',
    'M 680,40 V 220 L 720,260 H 980 L 1020,300 V 500',
  ];

  const DASH = 90;
  const GAP = 910;
  const CYCLE = DASH + GAP; // 1000 — este es el número que usamos en el keyframe

  return (
    <svg
      viewBox="0 0 1600 600"
      preserveAspectRatio="none"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }}
    >
      {paths.map((d, i) => {
        const duration = 2 + i ;
        const delay = i * 1.3;
        return (
          <g key={i}>
            <path
              d={d}
              fill="none"
              stroke="rgba(15,23,42,0.07)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            <path
              d={d}
              fill="none"
              stroke={BRAND.verde}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={`${DASH} ${GAP}`}
              vectorEffect="non-scaling-stroke"
              className="circuit-flow"
              style={{
                filter: `drop-shadow(0 0 5px ${BRAND.verde})`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          </g>
        );
      })}

      <style>{`
        @keyframes circuitFlow {
          from { stroke-dashoffset: ${CYCLE}; }
          to   { stroke-dashoffset: 0; }
        }
        .circuit-flow {
          animation-name: circuitFlow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </svg>
  );
}

function StoryCard({ card, delay }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mx.set(px);
    my.set(py);
    rotY.set(((px / rect.width) - 0.5) * 5);
    rotX.set(((py / rect.height) - 0.5) * -5);
  }

  function handleLeave() {
    rotX.set(0);
    rotY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: EASE, delay }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ y: -6 }}
      style={{
        position: 'relative',
        borderRadius: '28px',
        background: '#ffffff',
        border: '1px solid rgba(15,23,42,0.08)',
        overflow: 'hidden',
        perspective: '1000px',
      }}
    >
      <motion.div >
        <div
         
        />
        <motion.div
          style={{
            position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
            background: useMotionTemplate`radial-gradient(340px circle at ${mx}px ${my}px, ${BRAND.azulAcero}12, transparent 78%)`,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, padding: '2.75rem 2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.6rem' }}>
            <span
              style={{
                width: '42px', height: '42px', borderRadius: '12px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                color: BRAND.indigo,
              }}
            >
              {card.icon}
            </span>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: '0.7rem', color: '#94a3b8', letterSpacing: '0.1em' }}>
                {card.index}
              </div>
              <h4 style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
                {card.label}
              </h4>
            </div>
          </div>

          <p style={{ color: '#475569', lineHeight: 1.85, fontSize: '1.06rem', margin: '0 0 1.75rem' }}>
            {card.text}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
            {card.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.72rem', fontWeight: 600, color: BRAND.indigo,
                  background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(92,99,173,0.25)',
                  borderRadius: '999px', padding: '0.35rem 0.8rem',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Connector() {
  return (
    <div className="story-connector" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
        style={{
          width: '44px', height: '44px', borderRadius: '50%', background: GRADIENT_CTA,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 10px 30px -8px ${BRAND.indigo}aa`,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </div>
  );
}

function StatCard({ stat, index }) {
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  const match = stat.value.match(/^([+-]?)(\d+)(.*)$/);
  const sign = match ? match[1] : '';
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : '';

  function handleEnter() {
    if (startedRef.current) return;
    startedRef.current = true;
    const duration = 1100;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      onViewportEnter={handleEnter}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      whileHover={{ y: -4 }}
      style={{
        borderRadius: '22px',
        padding: '2.4rem 1.5rem',
        textAlign: 'center',
        background: stat.highlight ? 'linear-gradient(180deg, #f8f9fc 0%, #ffffff 100%)' : '#ffffff',
        border: stat.highlight ? `1.5px solid ${BRAND.azulAcero}44` : '1px solid rgba(0,0,0,0.06)',
        boxShadow: stat.highlight
          ? `0 24px 50px -20px ${BRAND.indigo}30, 0 0 0 4px ${BRAND.indigo}0a`
          : '0 12px 30px -18px rgba(0,0,0,0.08)',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(2.1rem, 4vw, 2.7rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          backgroundImage: GRADIENT_CTA,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {sign}{display}{suffix}
      </div>
      <div
        style={{
          marginTop: '0.75rem', fontSize: '0.78rem', fontWeight: 700, color: '#475569',
          textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.5,
        }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function CaseStudy() {
  return (
    <>
      <section
        data-navbar-theme="light"
        style={{
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#ffffff',

          backgroundImage: `
            radial-gradient(ellipse at 50% 0%, rgba(92, 99, 173, 0.03) 0%, transparent 60%),
            url('/backgraund.webp')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

          marginTop: `-${NOTCH_HEIGHT}px`,
          marginBottom: `-${NOTCH_HEIGHT}px`,
          padding: `calc(6rem + ${NOTCH_HEIGHT}px) 2rem calc(7rem + ${NOTCH_HEIGHT}px)`,

          clipPath: CLERK_CUTOUT,
          WebkitClipPath: CLERK_CUTOUT,

          overflow: 'hidden',
        }}
      >
        <style>{`
          @media (max-width: 900px) {
            .story-grid { grid-template-columns: 1fr !important; }
            .story-connector { display: none !important; }
            .stats-grid { grid-template-columns: 1fr 1fr !important; }
          }

          @keyframes circuitFlow {
            0%   { stroke-dashoffset: 1500; }
            100% { stroke-dashoffset: -140; }
          }
          .circuit-flow {
            animation-name: circuitFlow;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}</style>

        <TechCircuitOverlay />

        {/* ---------- Bloque 1: Reto / Solución ---------- */}
        <div style={{ textAlign: 'center', marginBottom: '5.5rem', position: 'relative', zIndex: 2 }}>
        <motion.img
  initial={{ opacity: 0, y: -10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ ease: EASE }} // Asegúrate de tener EASE definido en tu archivo
  src="/SAT-logo.webp"
  alt="SAT"
  style={{ 
    display: 'block',                 // Fuerza el comportamiento de bloque
    margin: '0 auto 2.25rem auto',    // Centrado perfecto horizontal y margen inferior
    height: '65px',                   // Un poco más de altura para compensar el padding
    objectFit: 'contain',             // Evita que el logo se estire o deforme
    backgroundColor: '#0f172a',       // Fondo oscuro para que resalten las letras blancas
    padding: '12px 24px',             // Espaciado interno para que respire el logo
    borderRadius: '16px',             // Bordes redondeados modernos
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' // Sombra sutil para darle profundidad
  }}
/>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.55rem', padding: '0.5rem 1.15rem',
              borderRadius: '999px', marginBottom: '1.75rem',
              border: '1px solid rgba(0,0,0,0.08)',
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <BrandMark />
            <span style={{ color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}>
              Caso de éxito · Sector gubernamental
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, ease: EASE }}
            style={{
              fontSize: 'clamp(2.1rem, 6vw, 4rem)',
              color: '#0f172a',
              fontWeight: 800,
              letterSpacing: '-0.02em', margin: '0 0 1.5rem', lineHeight: 1.05,
            }}
          >
            Fábrica de Software en el SAT
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, ease: EASE }}
            style={{
              fontSize: 'clamp(1.1rem, 1vw, 2rem)',
              color: '#0f172a',
              fontWeight: 100,
              letterSpacing: '-0.02em', margin: '0 0 1.5rem', lineHeight: 2.05,
            }}
          >
            Acelerando la innovación tecnológica en la administración tributaria


          </motion.h3>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7, ease: EASE }}
            style={{ height: '3px', width: '110px', margin: '0 auto', background: GRADIENT_CTA, borderRadius: '999px' }}
          />
        </div>

        <div
          className="story-grid"
          style={{
            position: 'relative', zIndex: 2, maxWidth: '1180px', width: '100%', margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1rem', alignItems: 'stretch',
            marginBottom: '6rem',
          }}
        >
          <StoryCard card={CARDS[0]} delay={0} />
          <Connector />
          <StoryCard card={CARDS[1]} delay={0.12} />
        </div>

        {/* ---------- Bloque 2: Resultados logrados ---------- */}
        <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
          >
            <span style={{ color: BRAND.indigo, fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em' }}>
              Impacto medible
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, ease: EASE }}
            style={{
              textAlign: 'center', color: '#0f172a', fontWeight: 900, letterSpacing: '-0.02em',
              fontSize: 'clamp(1.9rem, 4.5vw, 2.9rem)', margin: '0 0 3.5rem',
            }}
          >
            Resultados logrados
          </motion.h3>

          <div
            className="stats-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '2rem' }}
          >
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ease: EASE }}
            style={{
              borderRadius: '26px', padding: '3.5rem 3rem', textAlign: 'center',
              background: 'linear-gradient(135deg, #f8f9fc 0%, #ffffff 100%)',
              border: `1px solid rgba(0,0,0,0.06)`,
              boxShadow: '0 12px 30px -18px rgba(0,0,0,0.08)',
            }}
          >
            <h4 style={{ color: '#0f172a', fontWeight: 800, fontSize: '1.6rem', margin: '0 0 1.1rem', letterSpacing: '-0.01em' }}>
              Impacto
            </h4>
            <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.85, maxWidth: '760px', margin: '0 auto' }}>
              {IMPACT_TEXT}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, ease: EASE }}
            style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
          >
            
          </motion.div>
        </div>
      </section>
    </>
  );
}