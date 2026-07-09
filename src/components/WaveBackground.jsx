import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// === Tu paleta de marca (primarios + secundarios vivos) ===
const PALETTE = [
  '#545aa1', // Azul Primario
  '#bd0374', // Magenta Primario
  '#75bf40', // Verde Primario
  '#5c63ad', // Azul Secundario
  '#e00591', // Magenta Secundario
  '#b5d461', // Verde Secundario
];

// Neonizar: saturación al máximo + boost de luz.
function neonize(hex, lightBoost = 0.18) {
  const c = new THREE.Color(hex);
  const hsl = { h: 0, s: 0, l: 0 };
  c.getHSL(hsl);
  c.setHSL(hsl.h, 1, Math.min(hsl.l + lightBoost, 0.75));
  return c;
}

function useMousePosition() {
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  useEffect(() => {
    const handleMove = (e) => {
      mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  return mouse;
}

const CameraRig = ({ mouse }) => {
  useFrame((state) => {
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;
    state.camera.position.x += (mouse.current.x * 0.5 - state.camera.position.x) * 0.03;
    state.camera.position.y += (mouse.current.y * 0.25 - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

// Devuelve los puntos de control de la onda como Vector3 (para construir
// una curva real, no un array plano de posiciones).
function computeWavePoints(controlCount, index, strandCount, phase, time, mouse) {
  const pts = [];
  const mx = mouse.current.x;
  const my = mouse.current.y;
  const mouseWorldX = mx * 18;
  const RANGE = 60;

  for (let j = 0; j <= controlCount; j++) {
    const t = j / controlCount;
    const x = t * RANGE - RANGE / 2;

    let y =
      Math.sin(x * 0.18 + time * 0.25 + phase) * 1.1 +
      Math.cos(x * 0.11 - time * 0.15 + phase * 0.5) * 0.35;

    const dist = x - mouseWorldX;
    const push = Math.exp(-(dist * dist) / 30) * my * 0.5;
    y += push;

    const z = (index - strandCount / 2) * 0.4;
    pts.push(new THREE.Vector3(x, y, z));
  }
  return pts;
}

// --- Una hebra dibujada como TUBOS reales (geometría 3D), no líneas
// simuladas en pantalla. Al ser geometría de verdad, con sección
// circular real, no puede aparecer el patrón de puntos: es liso
// sin importar el ángulo o la curvatura. ---
const TubeStrand = ({ index, strandCount, controlCount, baseColor, mouse, phase }) => {
  const haloRef = useRef();
  const coreRef = useRef();

  const coreColor = useMemo(() => neonize(baseColor, 0.22), [baseColor]);
  const glowColor = useMemo(() => neonize(baseColor, 0.05), [baseColor]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const points = computeWavePoints(controlCount, index, strandCount, phase, time, mouse);
    const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);

    if (haloRef.current) {
      const old = haloRef.current.geometry;
      haloRef.current.geometry = new THREE.TubeGeometry(curve, 100, 0.075, 6, false);
      old.dispose();
    }
    if (coreRef.current) {
      const old = coreRef.current.geometry;
      coreRef.current.geometry = new THREE.TubeGeometry(curve, 100, 0.022, 6, false);
      old.dispose();
    }
  });

  return (
    <group>
      {/* Halo: tubo ancho, semitransparente */}
      <mesh ref={haloRef}>
        <bufferGeometry />
        <meshBasicMaterial
          color={glowColor}
          transparent
          opacity={0.3}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      {/* Núcleo: tubo delgado, opaco */}
      <mesh ref={coreRef}>
        <bufferGeometry />
        <meshBasicMaterial color={coreColor} toneMapped={false} />
      </mesh>
    </group>
  );
};

const WaveLines = ({ mouse }) => {
  const strandCount = PALETTE.length;
  // Puntos de CONTROL de la curva (no de renderizado). El tubo interpola
  // 100 segmentos entre ellos, así que no hace falta que sean miles.
  const controlCount = 40;

  return (
    <group rotation={[0.06, 0, 0]}>
      {PALETTE.map((color, i) => (
        <TubeStrand
          key={i}
          index={i}
          strandCount={strandCount}
          controlCount={controlCount}
          baseColor={color}
          mouse={mouse}
          phase={i * 1.15}
        />
      ))}
    </group>
  );
};

export default function WaveBackground() {
  const mouse = useMousePosition();

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }} gl={{ alpha: true, antialias: true }}>
        <CameraRig mouse={mouse} />
        <WaveLines mouse={mouse} />
      </Canvas>
    </div>
  );
}