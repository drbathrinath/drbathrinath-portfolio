import { motion } from 'framer-motion';
import { Trophy, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const awards = [
  {
    title: 'Clinical Research',
    score: '90%',
    issuer: 'Medclinigen Merit Awards',
    desc: 'Awarded for outstanding academic performance in the Clinical Research program.',
    color: 'teal' as const,
  },
  {
    title: 'Clinical Data Management',
    score: '87.5%',
    issuer: 'Medclinigen Merit Awards',
    desc: 'Recognized for excellence in the Clinical Data Management coursework.',
    color: 'green' as const,
  },
];

const colorMap = {
  teal: {
    text: 'text-primary-300',
    bg: 'bg-primary-400/10',
    border: 'border-primary-400/30',
    bar: 'from-primary-400 to-primary-500',
  },
  green: {
    text: 'text-secondary-300',
    bg: 'bg-secondary-400/10',
    border: 'border-secondary-400/30',
    bar: 'from-secondary-400 to-secondary-500',
  },
};

const glowMap = {
  teal: {
    shadow: [
      '0px 0px 10px rgba(17,201,232,0.1)',
      '0px 0px 35px rgba(17,201,232,0.7)',
      '0px 0px 10px rgba(17,201,232,0.1)',
    ],
    border: [
      'rgba(17,201,232,0.3)',
      'rgba(17,201,232,1)',
      'rgba(17,201,232,0.3)',
    ],
  },
  green: {
    shadow: [
      '0px 0px 10px rgba(21,185,133,0.1)',
      '0px 0px 35px rgba(21,185,133,0.7)',
      '0px 0px 10px rgba(21,185,133,0.1)',
    ],
    border: [
      'rgba(21,185,133,0.3)',
      'rgba(21,185,133,1)',
      'rgba(21,185,133,0.3)',
    ],
  },
};

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.5,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-2 px-5 py-3 rounded-full glass-strong text-primary-200 hover:text-white hover:shadow-[0_0_30px_rgba(17,201,232,0.3)] transition-all duration-300 group ${
        visible ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowUp className="w-4 h-4" />
      </motion.div>

      <span className="text-sm font-medium">Back to Top</span>
    </motion.button>
  );
}

export default function Honors() {
  return (
    <section id="honors" className="relative py-24 z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-primary-400 tracking-widest uppercase">
            Recognition
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
            Honors & Awards
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {awards.map((award, i) => {
            const colors = colorMap[award.color];
            const glow = glowMap[award.color];
            const scoreNum = parseFloat(award.score);

            return (
              <motion.div
                key={award.title}
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
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      boxShadow: glow.shadow,
                      borderColor: glow.border,
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                    className={`group glass h-full rounded-2xl p-6 border ${colors.border} hover:bg-white/[0.05] transition-colors duration-300 cursor-pointer flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}
                          >
                            <Trophy className="w-6 h-6" />
                          </div>

                          <div>
                            <h3 className="font-display text-lg font-semibold text-white">
                              {award.title}
                            </h3>

                            <p className={`text-sm ${colors.text}`}>
                              {award.issuer}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`font-display text-2xl font-bold ${colors.text}`}
                        >
                          {award.score}
                        </span>
                      </div>

                      <p className="text-sm text-ink-400 mb-4">
                        {award.desc}
                      </p>
                    </div>

                    <div className="h-2 rounded-full bg-white/5 overflow-hidden mt-auto">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${scoreNum}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3,
                          ease: 'easeOut',
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <BackToTop />
    </section>
  );
}