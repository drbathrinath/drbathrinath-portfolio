import { motion } from 'framer-motion';
import { HeartPulse, AlertTriangle, GitBranch, BookCheck } from 'lucide-react';

const highlights = [
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: 'Patient Safety',
    desc: 'Support safer medication use through rigorous adverse event monitoring and risk mitigation strategies.',
    color: 'text-primary-300',
    border: 'border-primary-400/20',
    bg: 'bg-primary-400/10',
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: 'AE / ADR Identification',
    desc: 'Expert-level detection, documentation, and assessment of adverse drug events and reactions in clinical settings.',
    color: 'text-accent-300',
    border: 'border-accent-400/20',
    bg: 'bg-accent-400/10',
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: 'WHO-UMC Causality',
    desc: 'Applying the World Health Organization – Uppsala Monitoring Centre system for standardized causality assessment.',
    color: 'text-secondary-300',
    border: 'border-secondary-400/20',
    bg: 'bg-secondary-400/10',
  },
  {
    icon: <BookCheck className="w-6 h-6" />,
    title: 'ICH E6(R3) Compliance',
    desc: 'Adhering to the latest International Council for Harmonisation Good Clinical Practice guidelines in all research activities.',
    color: 'text-primary-300',
    border: 'border-primary-400/20',
    bg: 'bg-primary-400/10',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-primary-400 tracking-widest uppercase">Get to know me</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-xl sm:text-2xl font-display text-white leading-relaxed">
            Driven by one question:{' '}
            <span className="text-gradient-teal">How can medicines be made safer for every patient?</span>
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto mt-10">
          
          <div className="absolute -bottom-8 -left-4 w-4 h-20 bg-gradient-to-b from-primary-400/50 to-transparent rounded-full -rotate-[40deg] z-0 shadow-[0_0_15px_rgba(17,201,232,0.3)] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="glass-strong p-8 md:p-14 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden z-10"
            style={{
              borderRadius: '2rem 10rem 2rem 10rem'
            }}
          >
            
            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-[55deg] scale-150 pointer-events-none z-0" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] pointer-events-none z-0" />
            
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 relative z-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full"
                >
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
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="group h-full rounded-3xl p-7 transition-all duration-300 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-default backdrop-blur-sm"
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg} ${item.color} mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-lg border border-white/10`}>
                        {item.icon}
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-ink-400 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}