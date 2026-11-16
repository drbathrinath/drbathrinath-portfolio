import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, FileText } from 'lucide-react';

const steps = [
  {
    id: 'pharmd',
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Doctor of Pharmacy (Pharm.D)',
    institution: 'Annamalai University',
    period: '2020 – 2026',
    detail: 'Six-year doctoral program in pharmacy practice with clinical clerkship and pharmacovigilance training.',
    color: 'teal' as const,
  },
  {
    id: 'clinilaunch',
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Advanced Diploma in Clinical Research',
    institution: 'CliniLaunch Research Institute',
    period: 'Mar 2026 – Aug 2026',
    detail: 'Intensive clinical research diploma covering Regulatory Affairs, Clinical Data Management, Medical Writing, Pharmacology, and Pharmacovigilance Operations.',
    color: 'green' as const,
  },
  {
    id: 'hsc',
    icon: <School className="w-6 h-6" />,
    title: '12th Board (HSE)',
    institution: 'Sri Vivekananda Hr. Sec. School',
    period: '2019 – 2020 · 88%',
    detail: 'Higher Secondary Education with science stream — achieved 88% overall.',
    color: 'orange' as const,
  },
  {
    id: 'sslc',
    icon: <FileText className="w-6 h-6" />,
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

const glowMap = {
  teal: {
    shadow: '0px 0px 40px rgba(6,182,212,0.5)',
    border: 'rgba(6,182,212,1)',
  },
  green: {
    shadow: '0px 0px 40px rgba(34,197,94,0.5)',
    border: 'rgba(34,197,94,1)',
  },
  orange: {
    shadow: '0px 0px 40px rgba(249,115,22,0.5)',
    border: 'rgba(249,115,22,1)',
  },
};

export default function Education() {
  const [activeId, setActiveId] = useState<string | null>(null);

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

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-white/10" />
          <motion.div
            className="hidden md:block absolute top-8 left-0 h-px bg-gradient-to-r from-cyan-400 to-teal-400"
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
            {steps.map((step, i) => {
              const colors = colorMap[step.color];
              const glow = glowMap[step.color];
              const isFocused = activeId === step.id;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex flex-col h-full"
                >
                  <div className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                      className={`w-5 h-5 rounded-full ${colors.dot} ring-4 ring-[#030712]`}
                    />
                  </div>

                  <div className="md:pt-16 flex-1">
                    <motion.div
                      onMouseEnter={() => setActiveId(step.id)}
                      onMouseLeave={() => setActiveId(null)}
                      onTouchStart={() => setActiveId(step.id)}
                      onTouchEnd={() => setActiveId(null)}
                      animate={{
                        scale: isFocused ? 1.08 : 1,
                        y: isFocused ? -10 : 0,
                        zIndex: isFocused ? 50 : 1,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{
                        boxShadow: isFocused ? glow.shadow : 'none',
                      }}
                      className={`glass rounded-2xl p-5 border transition-colors duration-300 h-full flex flex-col cursor-pointer bg-white/5 backdrop-blur-xl ${
                        isFocused ? 'bg-white/[0.08] border-cyan-400' : 'border-white/10 hover:border-cyan-400/40'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                      <h3 className="font-display text-base font-semibold text-white leading-tight mb-1">
                        {step.title}
                      </h3>
                      <p className={`text-sm ${colors.text} font-medium`}>{step.institution}</p>
                      <p className="text-xs text-gray-400 mt-1">{step.period}</p>
                      <p className="text-xs text-gray-300 mt-3 leading-relaxed flex-1">{step.detail}</p>
                    </motion.div>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}