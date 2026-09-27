import { motion } from 'framer-motion';

function Capsule({ className, delay, duration }: { className: string; delay: number; duration: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -40, 0],
        x: [0, 30, 0],
        rotateY: [0, 360],
        rotateX: [0, 15, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className="relative"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'linear-gradient(180deg, rgba(17,201,232,0.12) 0%, rgba(21,185,133,0.08) 50%, rgba(17,201,232,0.12) 100%)',
          border: '1px solid rgba(17,201,232,0.2)',
          boxShadow: '0 0 60px rgba(17,201,232,0.15), inset 0 0 30px rgba(17,201,232,0.05)',
        }}
      >
        <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-400/20" style={{ transform: 'translateY(-50%)' }} />
        <div
          className="absolute top-0 bottom-0 w-1/3"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
            borderRadius: '50%',
          }}
        />
      </div>
    </motion.div>
  );
}

function HexagonMolecule({ className, delay, duration }: { className: string; delay: number; duration: number }) {
  const nodes = [
    { x: 50, y: 5 },
    { x: 95, y: 30 },
    { x: 95, y: 70 },
    { x: 50, y: 95 },
    { x: 5, y: 70 },
    { x: 5, y: 30 },
  ];

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, -20, 0],
        rotate: [0, 120, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 12px rgba(21,185,133,0.2))' }}>
        {nodes.map((n, i) => {
          const next = nodes[(i + 1) % nodes.length];
          return (
            <line
              key={`line-${i}`}
              x1={n.x}
              y1={n.y}
              x2={next.x}
              y2={next.y}
              stroke="rgba(21,185,133,0.15)"
              strokeWidth="0.8"
            />
          );
        })}
        {nodes.map((n, i) => (
          <circle
            key={`node-${i}`}
            cx={n.x}
            cy={n.y}
            r="4"
            fill="rgba(52,211,163,0.25)"
            stroke="rgba(52,211,163,0.3)"
            strokeWidth="0.5"
          />
        ))}
        <circle cx="50" cy="50" r="3" fill="rgba(17,201,232,0.3)" />
      </svg>
    </motion.div>
  );
}

function Tablet({ className, delay, duration }: { className: string; delay: number; duration: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, 25, 0],
        x: [0, -25, 0],
        rotateY: [0, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className="w-full h-full"
        style={{
          borderRadius: '30%',
          background: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(251,146,60,0.06) 100%)',
          border: '1px solid rgba(249,115,22,0.15)',
          boxShadow: '0 0 50px rgba(249,115,22,0.1)',
        }}
      >
        <div
          className="w-1/2 h-full float-left"
          style={{
            borderRadius: '30% 0 0 30%',
            background: 'linear-gradient(135deg, rgba(17,201,232,0.08), transparent)',
          }}
        />
      </div>
    </motion.div>
  );
}

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ perspective: '1200px' }}>
      {/* Animated gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 0%, rgba(11,165,200,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(21,185,133,0.10) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(249,115,22,0.08) 0%, transparent 50%), #030712',
        }}
      />

      {/* Slowly shifting gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            'radial-gradient(ellipse at 30% 20%, rgba(17,201,232,0.15) 0%, transparent 60%)',
            'radial-gradient(ellipse at 70% 40%, rgba(21,185,133,0.12) 0%, transparent 60%)',
            'radial-gradient(ellipse at 40% 70%, rgba(249,115,22,0.1) 0%, transparent 60%)',
            'radial-gradient(ellipse at 30% 20%, rgba(17,201,232,0.15) 0%, transparent 60%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* 3D Floating capsules */}
      <Capsule className="w-24 h-12 top-[12%] left-[8%]" delay={0} duration={14} />
      <Capsule className="w-16 h-8 top-[60%] left-[15%]" delay={2} duration={18} />
      <Capsule className="w-20 h-10 top-[35%] right-[10%]" delay={1} duration={16} />
      <Capsule className="w-14 h-7 top-[80%] right-[20%]" delay={3} duration={20} />
      <Capsule className="w-28 h-14 top-[5%] right-[35%]" delay={4} duration={22} />

      {/* Molecular hexagons */}
      <HexagonMolecule className="w-32 h-32 top-[25%] left-[45%]" delay={0} duration={25} />
      <HexagonMolecule className="w-24 h-24 top-[70%] right-[40%]" delay={3} duration={28} />
      <HexagonMolecule className="w-20 h-20 top-[45%] left-[30%]" delay={5} duration={22} />

      {/* Tablets */}
      <Tablet className="w-16 h-16 top-[50%] left-[5%]" delay={1} duration={19} />
      <Tablet className="w-12 h-12 top-[15%] right-[5%]" delay={4} duration={17} />
      <Tablet className="w-14 h-14 top-[88%] left-[55%]" delay={2} duration={21} />

      {/* Floating glow orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full top-[20%] left-[20%]"
        style={{ background: 'radial-gradient(circle, rgba(17,201,232,0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bottom-[15%] right-[10%]"
        style={{ background: 'radial-gradient(circle, rgba(21,185,133,0.05) 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full top-[55%] left-[60%]"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
