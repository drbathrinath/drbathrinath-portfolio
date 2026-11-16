import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, FileText } from 'lucide-react';

const steps = [
  {
    id: 'pharmd',
    icon: <GraduationCap className="w-7 h-7" />,
    title: 'Doctor of Pharmacy (Pharm.D)',
    institution: 'Annamalai University',
    period: '2020 – 2026',
    detail: 'Six-year doctoral program in pharmacy practice with clinical clerkship, adverse drug reaction monitoring, and advanced pharmacovigilance training.',
    color: 'teal' as const,
  },
  {
    id: 'clinilaunch',
    icon: <BookOpen className="w-7 h-7" />,
    title: 'Advanced Diploma in Clinical Research',
    institution: 'CliniLaunch Research Institute',
    period: 'Mar 2026 – Aug 2026',
    detail: 'Intensive clinical research diploma covering Regulatory Affairs, Clinical Data Management, Medical Writing, Pharmacology, Argus Safety, and Pharmacovigilance Operations.',
    color: 'green' as const,
  },
  {
    id: 'hsc',
    icon: <School className="w-7 h-7" />,
    title: '12th Board (HSE)',
    institution: 'Sri Vivekananda Hr. Sec. School',
    period: '2019 – 2020 · 88%',
    detail: 'Higher Secondary Education with science stream — achieved 88% overall, building the analytical core for healthcare studies.',
    color: 'orange' as const,
  },
  {
    id: 'sslc',
    icon: <FileText className="w-7 h-7" />,
    title: '10th Board (SSLC)',
    institution: 'Sri Vivekananda Hr. Sec. School',
    period: '2017 – 2018 · 95%',
    detail: 'Secondary School Leaving Certificate — achieved 95% overall, demonstrating early academic excellence and strong foundational aptitude.',
    color: 'teal' as const,
  },
];

const colorMap = {
  teal: { text: 'text-cyan-300', bg: 'bg-cyan-400/10', border: 'border-cyan-400/30', glow: 'shadow-[0_0_35px_rgba(6,182,212,0.35)]', dot: 'bg-cyan-400' },
  green: { text: 'text-teal-300', bg: 'bg-teal-400/10', border: 'border-teal-400/30', glow: 'shadow-[0_0_35px_rgba(34,197,94,0.35)]', dot: 'bg-teal-400' },
  orange: { text: 'text-blue-300', bg: 'bg-blue-400/10', border: 'border-blue-400/30', glow: 'shadow-[0_0_35px_rgba(249,115,22,0.35)]', dot: 'bg-blue-400' },
};

export default function Education() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Auto-reset when scrolling away to prevent any boundary overflow
  useEffect(() => {
    const handleScroll = () => {
      if (activeId) setActiveId(null);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  return (
    <section id="education" className="relative py-24 z-10 overflow-hidden w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-cyan-400 tracking-widest uppercase">Academic Journey</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3">Education</h2>
        </motion.div>

        {/* Timeline & Grid Container */}
        <div 
          className="relative pt-6"
          onMouseLeave={() => setActiveId(null)}
        >
          {/* Horizontal Timeline Bar */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10" />
          <motion.div
            className="hidden md:block absolute top-6 left-0 h-px bg-gradient-to-r from-cyan-400 via-teal-400 to-orange-400"
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          {/* Grid Layout with instant snap reflow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative items-stretch pt-4">
            {steps.map((step, i) => {
              const colors = colorMap[step.color];
              const isSelected = activeId === step.id;

              return (
                <motion.div
                  key={step.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    layout: { type: 'spring', stiffness: 500, damping: 32 }, 
                    opacity: { duration: 0.2 } 
                  }}
                  onMouseEnter={() => setActiveId(step.id)}
                  onTouchStart={() => setActiveId(step.id)}
                  className={`flex flex-col h-full transition-all duration-150 ${
                    isSelected ? 'lg:col-span-2 sm:col-span-2 z-20 scale-[1.01]' : 'lg:col-span-1 sm:col-span-1'
                  } ${activeId && !isSelected ? 'opacity-40 blur-[0.5px] scale-[0.98]' : 'opacity-100 blur-0 scale-100'}`}
                >
                  {/* Branch Dot Connected to Timeline */}
                  <div className="hidden md:flex justify-center -mt-4 mb-4 relative z-10">
                    <motion.div
                      layout
                      className={`w-4 h-4 rounded-full ${colors.dot} ring-4 ring-[#030712] shadow-[0_0_12px_rgba(255,255,255,0.3)]`}
                    />
                  </div>

                  <div
                    className={`glass rounded-2xl p-6 border ${colors.border} h-full flex flex-col cursor-pointer bg-white/5 backdrop-blur-xl transition-all duration-150 ${
                      isSelected
                        ? `border-cyan-400 ${colors.glow} bg-white/[0.09]`
                        : 'hover:border-cyan-400/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center flex-shrink-0`}>
                        {step.icon}
                      </div>
                      {isSelected && (
                        <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-medium">
                          Active Focus
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white leading-tight mb-1">
                      {step.title}
                    </h3>
                    <p className={`text-sm ${colors.text} font-medium`}>{step.institution}</p>
                    <p className="text-xs text-gray-400 mt-1">{step.period}</p>
                    <p className={`text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed flex-1 ${isSelected ? 'line-clamp-none' : 'line-clamp-3'}`}>
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}