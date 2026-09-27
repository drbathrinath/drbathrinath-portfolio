import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, FileText } from 'lucide-react';

const steps = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Doctor of Pharmacy (Pharm.D)',
    institution: 'Annamalai University',
    period: '2020 – 2026',
    detail: 'Six-year doctoral program in pharmacy practice with clinical clerkship and pharmacovigilance training.',
    color: 'teal' as const,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Advanced Diploma in Clinical Research',
    institution: 'CliniLaunch Research Institute',
    period: 'Mar 2026 – Aug 2026',
    detail: 'Intensive clinical research diploma covering Regulatory Affairs, Clinical Data Management, Medical Writing, Pharmacology, and Pharmacovigilance Operations.',
    color: 'green' as const,
  },
  {
    icon: <School className="w-6 h-6" />,
    title: '12th Board (HSE)',
    institution: 'Sri Vivekananda Hr. Sec. School',
    period: '2019 – 2020 · 88%',
    detail: 'Higher Secondary Education with science stream — achieved 88% overall.',
    color: 'orange' as const,
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: '10th Board (SSLC)',
    institution: 'Sri Vivekananda Hr. Sec. School',
    period: '2017 – 2018 · 95%',
    detail: 'Secondary School Leaving Certificate — achieved 95% overall, demonstrating academic excellence early on.',
    color: 'teal' as const,
  },
];

const colorMap = {
  teal: { text: 'text-primary-300', bg: 'bg-primary-400/10', border: 'border-primary-400/30', dot: 'bg-primary-400' },
  green: { text: 'text-secondary-300', bg: 'bg-secondary-400/10', border: 'border-secondary-400/30', dot: 'bg-secondary-400' },
  orange: { text: 'text-accent-300', bg: 'bg-accent-400/10', border: 'border-accent-400/30', dot: 'bg-accent-400' },
};

// INNOVATION: Custom Glow mapping corresponding to your card colors
const glowMap = {
  teal: {
    shadow: ["0px 0px 10px rgba(6,182,212,0.1)", "0px 0px 35px rgba(6,182,212,0.7)", "0px 0px 10px rgba(6,182,212,0.1)"],
    border: ["rgba(6,182,212,0.3)", "rgba(6,182,212,1)", "rgba(6,182,212,0.3)"]
  },
  green: {
    shadow: ["0px 0px 10px rgba(34,197,94,0.1)", "0px 0px 35px rgba(34,197,94,0.7)", "0px 0px 10px rgba(34,197,94,0.1)"],
    border: ["rgba(34,197,94,0.3)", "rgba(34,197,94,1)", "rgba(34,197,94,0.3)"]
  },
  orange: {
    shadow: ["0px 0px 10px rgba(249,115,22,0.1)", "0px 0px 35px rgba(249,115,22,0.7)", "0px 0px 10px rgba(249,115,22,0.1)"],
    border: ["rgba(249,115,22,0.3)", "rgba(249,115,22,1)", "rgba(249,115,22,0.3)"]
  }
};

export default function Education() {
  return (
    <section id="education" className="relative py-24 z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-primary-400 tracking-widest uppercase">Academic Journey</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">Education</h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-white/10" />
          <motion.div
            className="hidden md:block absolute top-8 left-0 h-px bg-gradient-to-r from-primary-400 to-secondary-400"
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, i) => {
              const colors = colorMap[step.color];
              const glow = glowMap[step.color];
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative flex flex-col h-full"
                >
                  <div className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                      className={`w-5 h-5 rounded-full ${colors.dot} ring-4 ring-ink-950`}
                    />
                  </div>

                  <div className="md:pt-16 flex-1">
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: i * 0.2 
                      }}
                      className="h-full"
                    >
                      {/* Added Hover Blinking Outline and Glow */}
                      <motion.div 
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: glow.shadow,
                          borderColor: glow.border,
                          transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        // Changed transition-all to transition-colors to avoid conflicting with Framer motion
                        className={`group glass rounded-2xl p-5 border ${colors.border} hover:${colors.bg} hover:bg-white/[0.05] transition-colors duration-300 h-full flex flex-col cursor-pointer`}
                      >
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}>
                          {step.icon}
                        </div>
                        <h3 className="font-display text-base font-semibold text-white leading-tight mb-1">
                          {step.title}
                        </h3>
                        <p className={`text-sm ${colors.text} font-medium`}>{step.institution}</p>
                        <p className="text-xs text-ink-500 mt-1">{step.period}</p>
                        <p className="text-xs text-ink-400 mt-3 leading-relaxed flex-1">{step.detail}</p>
                      </motion.div>
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