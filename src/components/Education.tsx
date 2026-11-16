import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, BookOpen, School, FileText } from 'lucide-react';

const steps = [
  {
    id: 'pharmd',
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Doctor of Pharmacy (Pharm.D)',
    institution: 'Annamalai University',
    period: '2020 – 2026',
    detail: 'Six-year doctoral program in pharmacy practice with clinical clerkship, adverse drug reaction monitoring, and advanced pharmacovigilance training.',
    color: 'teal' as const,
  },
  {
    id: 'clinilaunch',
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Advanced Diploma in Clinical Research',
    institution: 'CliniLaunch Research Institute',
    period: 'Mar 2026 – Aug 2026',
    detail: 'Intensive clinical research diploma covering Regulatory Affairs, Clinical Data Management, Medical Writing, Pharmacology, Argus Safety, and Pharmacovigilance Operations.',
    color: 'green' as const,
  },
  {
    id: 'hsc',
    icon: <School className="w-8 h-8" />,
    title: '12th Board (HSE)',
    institution: 'Sri Vivekananda Hr. Sec. School',
    period: '2019 – 2020 · 88%',
    detail: 'Higher Secondary Education with science stream — achieved 88% overall, building the analytical core for healthcare studies.',
    color: 'orange' as const,
  },
  {
    id: 'sslc',
    icon: <FileText className="w-8 h-8" />,
    title: '10th Board (SSLC)',
    institution: 'Sri Vivekananda Hr. Sec. School',
    period: '2017 – 2018 · 95%',
    detail: 'Secondary School Leaving Certificate — achieved 95% overall, demonstrating early academic excellence and strong foundational aptitude.',
    color: 'teal' as const,
  },
];

const colorMap = {
  teal: { text: 'text-cyan-300', bg: 'bg-cyan-400/10', border: 'border-cyan-400/30' },
  green: { text: 'text-teal-300', bg: 'bg-teal-400/10', border: 'border-teal-400/30' },
  orange: { text: 'text-blue-300', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
};

export default function Education() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Automatically reset card state when user scrolls up or down
  useEffect(() => {
    const handleScroll = () => {
      if (activeId) setActiveId(null);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  const activeStep = steps.find((s) => s.id === activeId);

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

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => {
            const colors = colorMap[step.color];
            const isSelected = activeId === step.id;

            return (
              <div key={step.id} className="relative h-full">
                {/* Invisible placeholder to keep grid perfectly aligned */}
                <div className="opacity-0 pointer-events-none p-6 rounded-2xl border border-transparent h-full flex flex-col">
                  <div className="w-12 h-12 mb-4" />
                  <h3 className="text-base font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm">{step.institution}</p>
                  <p className="text-xs mt-1">{step.period}</p>
                  <p className="text-xs mt-3">{step.detail}</p>
                </div>

                {!isSelected && (
                  <motion.div
                    layoutId={`card-${step.id}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onMouseEnter={() => setActiveId(step.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onTouchStart={() => setActiveId(step.id)}
                    className={`absolute inset-0 glass rounded-2xl p-6 border ${colors.border} h-full flex flex-col cursor-pointer bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 shadow-lg`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center flex-shrink-0`}>
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="font-display text-base font-semibold text-white leading-tight mb-1">
                      {step.title}
                    </h3>
                    <p className={`text-sm ${colors.text} font-medium`}>{step.institution}</p>
                    <p className="text-xs text-gray-400 mt-1">{step.period}</p>
                    <p className="text-xs text-gray-300 mt-3 leading-relaxed flex-1 line-clamp-3">
                      {step.detail}
                    </p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Center Spotlight Pop-out Card with light unblurred background and scroll reset */}
        <AnimatePresence>
          {activeStep && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Very light 75% unblurred background overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto"
                onClick={() => setActiveId(null)}
              />

              {/* Expanding Center Card */}
              <motion.div
                layoutId={`card-${activeStep.id}`}
                transition={{ type: 'spring', stiffness: 220, damping: 26 }}
                className={`glass relative z-10 max-w-lg w-full rounded-3xl p-8 border ${colorMap[activeStep.color].border} bg-[#09090b]/95 backdrop-blur-2xl shadow-[0_0_80px_rgba(6,182,212,0.5)] pointer-events-auto`}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${colorMap[activeStep.color].bg} ${colorMap[activeStep.color].text} flex items-center justify-center`}>
                    {activeStep.icon}
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-medium">
                    Active Focus
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {activeStep.title}
                </h3>
                <p className={`text-base ${colorMap[activeStep.color].text} font-semibold mb-2`}>{activeStep.institution}</p>
                <p className="text-sm text-gray-400 mb-4">{activeStep.period}</p>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed border-t border-white/10 pt-4">
                  {activeStep.detail}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}