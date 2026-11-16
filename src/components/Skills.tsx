import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldPlus, Database, FlaskConical, Wrench, ChevronDown } from 'lucide-react';

const cards = [
  {
    id: 'pv',
    priority: true,
    icon: <ShieldPlus className="w-7 h-7" />,
    title: 'Pharmacovigilance & Drug Safety',
    subtitle: 'Priority Domain',
    color: 'teal' as const,
    items: [
      'ADR Monitoring',
      'ICSR Case Processing',
      'WHO-UMC & Naranjo Assessment',
      'MedDRA Coding',
    ],
    marquee: [
      'ADR Monitoring and Reporting',
      'ICSR Case Processing',
      'WHO-UMC Causality',
      'Naranjo Algorithm',
      'MedDRA Coding',
      'Signal Detection',
      'PSUR & DSUR',
      'Risk Management',
      'Drug Safety',
    ],
  },
  {
    id: 'cdm',
    priority: false,
    icon: <Database className="w-7 h-7" />,
    title: 'Clinical Data Management',
    subtitle: 'Core Competency',
    color: 'green' as const,
    items: ['CRF / eCRF Concepts', 'Electronic Data Capture', 'Source Data Review', 'Discrepancy Management'],
    marquee: [],
  },
  {
    id: 'cr',
    priority: false,
    icon: <FlaskConical className="w-7 h-7" />,
    title: 'Clinical Research',
    subtitle: 'Foundation',
    color: 'orange' as const,
    items: ['ICH-GCP E6(R3) Compliance', 'Patient Safety', 'Regulatory Timeline'],
    marquee: [],
  },
  {
    id: 'tools',
    priority: false,
    icon: <Wrench className="w-7 h-7" />,
    title: 'Tools',
    subtitle: 'Technical Stack',
    color: 'teal' as const,
    items: ['PubMed', 'Google Scholar', 'MS Word', 'MS Excel', 'MS PowerPoint'],
    marquee: [],
  },
];

const colorMap = {
  teal: {
    text: 'text-cyan-300',
    border: 'border-cyan-400/30',
    bg: 'bg-cyan-400/10',
    glow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]',
    badge: 'bg-cyan-400/20 text-cyan-200',
  },
  green: {
    text: 'text-teal-300',
    border: 'border-teal-400/30',
    bg: 'bg-teal-400/10',
    glow: 'hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]',
    badge: 'bg-teal-400/20 text-teal-200',
  },
  orange: {
    text: 'text-blue-300',
    border: 'border-blue-400/30',
    bg: 'bg-blue-400/10',
    glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]',
    badge: 'bg-blue-400/20 text-blue-200',
  },
};

function Marquee({ items, color }: { items: string[]; color: string }) {
  const text = color === 'teal' ? 'text-cyan-300' : '';
  return (
    <div className="relative w-full overflow-hidden py-3 mt-4 border-t border-white/5 group">
      <div className="flex gap-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className={`text-xs sm:text-sm font-display ${text} flex items-center gap-3`}>
            {item}
            <span className="text-cyan-500/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  // Starts with null so cards are closed by default, opens instantly on touch/hover
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-24 z-10 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-cyan-400 tracking-widest uppercase">What I bring to the table</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3">Core Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {cards.map((card, i) => {
            const colors = colorMap[card.color];
            const isOpen = expanded === card.id;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${card.priority ? 'md:col-span-2' : ''} w-full`}
              >
                <div className="h-full">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    onMouseEnter={() => setExpanded(card.id)}
                    onMouseLeave={() => setExpanded(null)}
                    onTouchStart={() => setExpanded(card.id)}
                    className={`glass h-full rounded-2xl p-5 sm:p-6 border ${colors.border} ${colors.glow} transition-all duration-300 cursor-pointer relative z-10 bg-white/5 backdrop-blur-xl`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center flex-shrink-0`}>
                          {card.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                            <h3 className="font-display text-lg sm:text-xl font-semibold text-white truncate">{card.title}</h3>
                            
                            {card.priority && (
                              <span className={`text-xs px-2.5 py-0.5 sm:py-1 rounded-full ${colors.badge} font-medium`}>
                                {card.subtitle}
                              </span>
                            )}
                            {!card.priority && (
                              <span className="text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 text-gray-400 font-medium">
                                {card.subtitle}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            {card.items.length} key competenc{card.items.length > 1 ? 'ies' : 'y'}
                          </p>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                        <ChevronDown className={`w-5 h-5 ${colors.text}`} />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2 space-y-2">
                            {card.items.map((item) => (
                              <div
                                key={item}
                                className="flex items-center gap-3 text-gray-300 text-xs sm:text-sm py-2 px-3 rounded-lg bg-white/[0.02] border border-white/5"
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('300', '400')} bg-current`} />
                                {item}
                              </div>
                            ))}
                          </div>
                          {card.marquee.length > 0 && <Marquee items={card.marquee} color={card.color} />}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}