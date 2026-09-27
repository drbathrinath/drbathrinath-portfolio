import { motion } from 'framer-motion';
import { Award, BadgeCheck, ExternalLink } from 'lucide-react';

const certifications = [
  { title: 'Intro to Pharmacovigilance', issuer: 'Zamann Pharma Support', date: 'Feb 2026' },
  { title: 'Good Clinical Practice (ICH E6(R3))', issuer: 'NIHR', date: 'Feb 2026' },
  { title: 'Collecting and Reporting Adverse Events', issuer: 'The Global Health Network', date: '2026' },
  { title: 'Good Clinical Practice (11 Modules)', issuer: 'NIDA, NIH', date: 'May 2026' },
  { title: 'Intro to Principles and Practice of Clinical Research', issuer: 'NIH', date: '2025-2026' },
  { title: 'Ethical and Regulatory Aspects of Clinical Research', issuer: 'NIH', date: '2026' },
  { title: 'GCP: IMP Management', issuer: 'NIHR', date: 'Feb 2026' },
  { title: 'NIHR Informed Consent Series', issuer: 'NIHR', date: 'Feb 2026' },
  { title: 'SAS Started with SAS Programming', issuer: 'Coursera', date: 'Sept 2026' },
];

const colorVariants = [
  'border-primary-400/25 hover:border-primary-400/50 hover:shadow-[0_0_25px_rgba(17,201,232,0.2)]',
  'border-secondary-400/25 hover:border-secondary-400/50 hover:shadow-[0_0_25px_rgba(21,185,133,0.2)]',
  'border-accent-400/25 hover:border-accent-400/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.2)]',
];

const iconColors = ['text-primary-300', 'text-secondary-300', 'text-accent-300'];

function CertBadge({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const colorClass = colorVariants[index % 3];
  const iconColor = iconColors[index % 3];

  return (
    <div
      className={`flex-shrink-0 w-[300px] glass rounded-2xl p-5 border ${colorClass} transition-all duration-300 mx-3 group cursor-default`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-lg bg-white/5 ${iconColor} flex items-center justify-center flex-shrink-0`}>
          <BadgeCheck className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-sm font-semibold text-white leading-snug mb-1">{cert.title}</h3>
          <p className={`text-xs ${iconColor} font-medium`}>{cert.issuer}</p>
          <p className="text-xs text-ink-500 mt-0.5">{cert.date}</p>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-primary-400 tracking-widest uppercase">Credentials & Training</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">Certifications</h2>
          <p className="text-ink-400 mt-4 max-w-2xl mx-auto text-sm">
            9+ verified certifications in pharmacovigilance, clinical research, GCP, and data programming.
          </p>
        </motion.div>
      </div>

      {/* Infinite marquee row 1 */}
      <div className="relative flex overflow-hidden py-4 mask-gradient">
        <div className="flex animate-marquee">
          {certifications.map((cert, i) => (
            <CertBadge key={`row1-${i}`} cert={cert} index={i} />
          ))}
          {certifications.map((cert, i) => (
            <CertBadge key={`row1-dup-${i}`} cert={cert} index={i} />
          ))}
        </div>
      </div>

      {/* Infinite marquee row 2 (reversed, offset) */}
      <div className="relative flex overflow-hidden py-4 mask-gradient">
        <div className="flex animate-marquee-reverse">
          {[...certifications].reverse().map((cert, i) => (
            <CertBadge key={`row2-${i}`} cert={cert} index={certifications.length - 1 - i} />
          ))}
          {[...certifications].reverse().map((cert, i) => (
            <CertBadge key={`row2-dup-${i}`} cert={cert} index={certifications.length - 1 - i} />
          ))}
        </div>
      </div>

      {/* Edge gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ink-950 to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ink-950 to-transparent pointer-events-none z-20" />

      <style>{`
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
    </section>
  );
}
