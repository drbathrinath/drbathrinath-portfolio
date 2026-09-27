import { motion } from 'framer-motion';
import { Trophy, Mail, Phone, MapPin, ArrowUp, Award, Heart } from 'lucide-react';
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
  teal: { text: 'text-primary-300', bg: 'bg-primary-400/10', border: 'border-primary-400/30', bar: 'from-primary-400 to-primary-500' },
  green: { text: 'text-secondary-300', bg: 'bg-secondary-400/10', border: 'border-secondary-400/30', bar: 'from-secondary-400 to-secondary-500' },
};

// INNOVATION: Glow mapping for the interactive hover blink effect
const glowMap = {
  teal: {
    shadow: ["0px 0px 10px rgba(17,201,232,0.1)", "0px 0px 35px rgba(17,201,232,0.7)", "0px 0px 10px rgba(17,201,232,0.1)"],
    border: ["rgba(17,201,232,0.3)", "rgba(17,201,232,1)", "rgba(17,201,232,0.3)"]
  },
  green: {
    shadow: ["0px 0px 10px rgba(21,185,133,0.1)", "0px 0px 35px rgba(21,185,133,0.7)", "0px 0px 10px rgba(21,185,133,0.1)"],
    border: ["rgba(21,185,133,0.3)", "rgba(21,185,133,1)", "rgba(21,185,133,0.3)"]
  }
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
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
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
    <section id="contact" className="relative py-24 z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-primary-400 tracking-widest uppercase">Recognition</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">Honors & Awards</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-24">
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
                    ease: "easeInOut",
                    delay: i * 0.2 
                  }}
                  className="h-full"
                >
                  {/* Applied interactive hover blink/glow effect here */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: glow.shadow,
                      borderColor: glow.border,
                      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className={`group glass h-full rounded-2xl p-6 border ${colors.border} hover:bg-white/[0.05] transition-colors duration-300 cursor-pointer flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}>
                            <Trophy className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-semibold text-white">{award.title}</h3>
                            <p className={`text-sm ${colors.text}`}>{award.issuer}</p>
                          </div>
                        </div>
                        <span className={`font-display text-2xl font-bold ${colors.text}`}>{award.score}</span>
                      </div>
                      <p className="text-sm text-ink-400 mb-4">{award.desc}</p>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden mt-auto">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${scoreNum}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="flex justify-center mb-6 relative z-10">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center glow-teal"
            >
              <Award className="w-7 h-7 text-ink-950" />
            </motion.div>
          </div>

          <h3 className="font-display text-2xl font-bold text-white mb-2 relative z-10">Dr. BATHRINATH M S</h3>
          <p className="text-ink-400 text-sm mb-8 max-w-md mx-auto relative z-10">
            Pharm.D Graduate | Pharmacovigilance & Drug Safety Enthusiast | Clinical Data Management Professional
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-8 relative z-10">
            <a
              href="mailto:bathrinathshanmugam7@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/5 hover:border-primary-400/30 hover:bg-primary-400/10 hover:shadow-[0_0_20px_rgba(17,201,232,0.2)] text-ink-300 hover:text-primary-300 transition-all duration-300 group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">bathrinathshanmugam7@gmail.com</span>
            </a>
            <a
              href="tel:+919042511773"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/5 hover:border-secondary-400/30 hover:bg-secondary-400/10 hover:shadow-[0_0_20px_rgba(21,185,133,0.2)] text-ink-300 hover:text-secondary-300 transition-all duration-300 group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">+91 90425 11773</span>
            </a>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/5 text-ink-300 cursor-default">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Chennai, India</span>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex items-center justify-center gap-2 text-xs text-ink-500 relative z-10">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-accent-400" />
            <span>for patient safety</span>
            <span className="mx-2">·</span>
            <span>© 2026 Dr. Bathrinath M S</span>
          </div>
        </motion.footer>
      </div>

      <BackToTop />
    </section>
  );
}