import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, BookOpen, School, FileText, X } from 'lucide-react';

const steps = [
  {
    id: 'pharmd',
    icon: <GraduationCap className="w-7 h-7" />,
    title: 'Doctor of Pharmacy (Pharm.D)',
    institution: 'Annamalai University',
    period: '2020 – 2026',
    detail: 'Six-year doctoral program in pharmacy practice with clinical clerkship and pharmacovigilance training.',
    color: 'teal' as const,
  },
  {
    id: 'clinilaunch',
    icon: <BookOpen className="w-7 h-7" />,
    title: 'Advanced Diploma in Clinical Research',
    institution: 'CliniLaunch Research Institute',
    period: 'Mar 2026 – Aug 2026',
    detail: 'Intensive clinical research diploma covering Regulatory Affairs, Clinical Data Management, Medical Writing, Pharmacology, and Pharmacovigilance Operations.',
    color: 'green' as const,
  },
  {
    id: 'hsc',
    icon: <School className="w-7 h-7" />,
    title: '12th Board (HSE)',
    institution: 'Sri Vivekananda Hr. Sec. School',
    period: '2019 – 2020 · 88%',
    detail: 'Higher Secondary Education with science stream — achieved 88% overall.',
    color: 'orange' as const,
  },
  {
    id: 'sslc',
    icon: <FileText className="w-7 h-7" />,
    title: '10th Board (SSLC)',
    institution: 'Sri Vivekananda Hr. Sec. School',
    period: '2017 – 2018 · 95%',
    detail: 'Secondary School Leaving Certificate — achieved 95% overall, demonstrating academic excellence early on.',
    color: 'teal' as const,
  },
];

const colorMap = {
  teal: { text: 'text-cyan-300', bg: 'bg-cyan-400/10', border: 'border-cyan-400/30', dot: 'bg-cyan-400' },
  green: { text: 'text-teal-300', bg: 'bg-teal-400/10', border: 'border-teal-400/30', dot: 'bg-teal-400' },
  orange: { text: 'text-blue-300', bg: 'bg-blue-400/10', border: 'border-blue-400/30', dot: 'bg-blue-400' },
};

export default function Education() {
  const [activeId, setActiveId] = useState<string | null>(null);

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

        {/* Grid Container - When a card is active, the rest get blurred */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative transition-all duration-300 ${activeId ? 'blur-sm opacity-40 scale-[0.98]' : 'blur-0 opacity-100 scale-100'}`}>
          {steps.map((step, i) => {
            const colors = colorMap[step.color];

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col h-full"
              >
                <div className="md:pt-16 flex-1">
                  <div
                    onMouseEnter={() => setActiveId(step.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onTouchStart={() => setActiveId(step.id)}
                    onTouchEnd={() => setActiveId(null)}
                    className={`glass rounded-2xl p-5 border ${colors.border} transition-all duration-300 h-full flex flex-col cursor-pointer bg-white/5 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}>
                      {step.icon}
                    </div>
                    <h3 className="font-display text-base font-semibold text-white leading-tight mb-1">
                      {step.title}
                    </h3>
                    <p className={`text-sm ${colors.text} font-medium`}>{step.institution}</p>
                    <p className="text-xs text-gray-400 mt-1">{step.period}</p>
                    <p className="text-xs text-gray-300 mt-3 leading-relaxed flex-1 line-clamp-3">{step.detail}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center Spotlight Pop-out Card when touched/hovered */}
        <AnimatePresence>
          {activeStep && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className={`glass max-w-lg w-full rounded-3xl p-8 border ${colorMap[activeStep.color].border} bg-[#09090b]/95 backdrop-blur-2xl shadow-[0_0_80px_rgba(6,182,212,0.4)] pointer-events-auto relative`}>
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}