import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  ExternalLink,
  Presentation,
  ChevronDown,
  BookOpen,
} from 'lucide-react';

const publications = [
  {
    type: 'publication',
    title:
      'Comparative Analysis of Oral Labetalol vs Oral Nifedipine in Gestational Hypertension',
    venue: 'VVI Journal',
    year: '2025',
    link: 'https://vvijournal.com/volume-13-issue-5-2025/',
    summary:
      'A comparative study evaluating the efficacy and safety profiles of oral labetalol versus oral nifedipine in the management of gestational hypertension, with emphasis on maternal and fetal outcomes.',
  },
  {
    type: 'publication',
    title: 'Evaluation of Postoperative Pain Management Strategies in Haemorrhoidectomy',
    venue: 'IJISRT',
    year: 'Aug 2025',
    link: 'https://doi.org/10.38124/ijisrt/25aug1277',
    summary:
      'An evaluation of postoperative pain management strategies following haemorrhoidectomy, examining pharmacological interventions and their impact on pain control and patient recovery.',
  },
  {
    type: 'presentation',
    title: 'Evaluation of Post-Operative Pain Management Strategies in Haemorrhoidectomy',
    venue: "TIPS'25 Conference",
    year: 'April 2025',
    link: null,
    summary:
      'Oral presentation delivered at TIPS’25 (Translational Innovations in Pharmaceutical Sciences) conference, presenting research findings on postoperative pain management strategies following haemorrhoidectomy.',
  },
];

export default function Research() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="research" className="relative py-24 z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-primary-400 tracking-widest uppercase">
            Scholarly Work
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
            Research Publications & Presentations
          </h2>
        </motion.div>

        <div className="space-y-5">
          {publications.map((pub, i) => {
            const isOpen = expanded === i;
            const isPresentation = pub.type === 'presentation';

            return (
              <motion.div
                key={`${pub.title}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setExpanded(i)}
                onMouseLeave={() => setExpanded(null)}
                className={`glass rounded-2xl border transition-all duration-300 ${
                  isPresentation
                    ? 'border-accent-400/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]'
                    : 'border-primary-400/30 hover:shadow-[0_0_30px_rgba(17,201,232,0.15)]'
                } overflow-hidden`}
              >
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isPresentation
                          ? 'bg-accent-400/10 text-accent-300'
                          : 'bg-primary-400/10 text-primary-300'
                      }`}
                    >
                      {isPresentation ? (
                        <Presentation className="w-6 h-6" />
                      ) : (
                        <FileText className="w-6 h-6" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            isPresentation
                              ? 'bg-accent-400/20 text-accent-200'
                              : 'bg-primary-400/20 text-primary-200'
                          }`}
                        >
                          {isPresentation ? 'Presentation' : 'Publication'}
                        </span>

                        <span className="text-xs text-ink-500">
                          {pub.venue} · {pub.year}
                        </span>
                      </div>

                      <h3 className="font-display text-base font-semibold text-white leading-snug">
                        {pub.title}
                      </h3>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown
                      className={`w-5 h-5 ${
                        isPresentation
                          ? 'text-accent-300'
                          : 'text-primary-300'
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="ml-16 border-t border-white/5 pt-4">
                          <p className="text-ink-300 text-sm leading-relaxed mb-4">
                            {pub.summary}
                          </p>

                          {pub.link ? (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                isPresentation
                                  ? 'bg-accent-400/10 text-accent-200 border border-accent-400/30 hover:bg-accent-400/20 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                                  : 'bg-primary-400/10 text-primary-200 border border-primary-400/30 hover:bg-primary-400/20 hover:shadow-[0_0_20px_rgba(17,201,232,0.3)]'
                              } group`}
                            >
                              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                              Read Full{' '}
                              {isPresentation ? 'Presentation' : 'Paper'}
                            </a>
                          ) : (
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-ink-400 bg-white/[0.03] border border-white/5">
                              <BookOpen className="w-4 h-4" />
                              Conference Presentation — TIPS'25
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}