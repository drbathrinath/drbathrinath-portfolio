
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Building2,
  Stethoscope,
  BarChart3,
  FileSpreadsheet,
  ExternalLink,
} from 'lucide-react';

const timeline = [
  {
    icon: <Stethoscope className="w-5 h-5" />,
    role: 'Pharm.D Internship',
    org: 'Govt Cuddalore Medical College',
    period: 'Aug 2025 – Aug 2026',
    points: [
      'Managed 15+ Adverse Drug Reactions (ADRs) with complete documentation and follow-up.',
      'Applied WHO-UMC causality assessment for standardized ADR evaluation.',
      'Utilized the Naranjo Algorithm for adverse drug reaction probability assessment.',
      'Handled a Grade III Anaphylaxis Serious Adverse Event (SAE) case with complete reporting.',
    ],
    tags: [
      'WHO-UMC',
      'Naranjo',
      'SAE Reporting',
      '15+ ADRs',
      'Grade III Anaphylaxis',
    ],
    color: 'teal' as const,
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    role: 'Academic Clerkship',
    org: 'Govt Cuddalore Medical College',
    period: 'Jul 2024 – Jul 2025',
    points: [
      'Completed clinical rotations across eight hospital departments.',
      'Gained clinical exposure to diverse medical specialties and patient care settings.',
      'Developed patient communication, clinical observation, and healthcare documentation skills.',
    ],
    tags: [
      '8 Rotational Departments',
      'Clinical Exposure',
      'Patient Care',
    ],
    color: 'green' as const,
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    role: 'Healthcare Data Analyst Intern',
    org: 'YuvaIntern by Henry Harvin',
    period: 'Jul 2026 – Aug 2026',
    points: [
      'Completed a virtual internship in healthcare data analytics and health informatics.',
      'Practiced healthcare data cleaning, data organization, and analysis to support data-driven insights relevant to clinical and healthcare operations.',
    ],
    tags: [
      'Healthcare Analytics',
      'Data Analysis',
      'Health Informatics',
      'Data Cleaning',
    ],
    color: 'teal' as const,
    certUrl: '/Healthcare%20Intern.jpeg',
  },
  {
    icon: <FileSpreadsheet className="w-5 h-5" />,
    role: 'Virtual Advanced Excel Efficiency Intern',
    org: 'YuvaIntern by Henry Harvin',
    period: 'Aug 2026 – Sep 2026',
    points: [
      'Completed a structured virtual internship focused on advanced Microsoft Excel and spreadsheet efficiency.',
      'Developed familiarity with spreadsheet functions, data manipulation, data organization, and workflow optimization techniques.',
    ],
    tags: [
      'Microsoft Excel',
      'Data Analysis',
      'Data Manipulation',
      'Workflow Optimization',
    ],
    color: 'green' as const,
    certUrl: '/Excel%20Intern.jpeg',
  },
];

const colorMap = {
  teal: {
    text: 'text-primary-300',
    bg: 'bg-primary-400/10',
    border: 'border-primary-400/30',
    glow: 'shadow-[0_0_20px_rgba(17,201,232,0.5)]',
  },
  green: {
    text: 'text-secondary-300',
    bg: 'bg-secondary-400/10',
    border: 'border-secondary-400/30',
    glow: 'shadow-[0_0_20px_rgba(21,185,133,0.5)]',
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

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const animatedLineHeight = useTransform(
    lineHeight,
    (value) => `${value * 100}%`,
  );

  return (
    <section id="experience" className="relative py-24 z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-primary-400 tracking-widest uppercase">
            Hands-on Practice
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
            Clinical Training & Experience
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Timeline background */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {/* Animated timeline */}
          <motion.div
            className="absolute left-6 sm:left-1/2 top-0 w-px bg-gradient-to-b from-primary-400 via-secondary-400 to-primary-400 -translate-x-1/2 origin-top"
            style={{ height: animatedLineHeight }}
          />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const colors = colorMap[item.color];
              const glow = glowMap[item.color];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.role}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                    y: 20,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } items-start gap-6`}
                >
                  {/* Timeline marker */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        delay: 0.2,
                      }}
                      className={`w-5 h-10 rounded-full bg-gradient-to-b ${
                        item.color === 'teal'
                          ? 'from-primary-300 to-primary-500'
                          : 'from-secondary-300 to-secondary-500'
                      } ${colors.glow} ring-4 ring-ink-950`}
                    />
                  </div>

                  {/* Experience card */}
                  <div
                    className={`ml-16 sm:ml-0 sm:w-1/2 ${
                      isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'
                    }`}
                  >
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.2,
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.02,
                          boxShadow: glow.shadow,
                          borderColor: glow.border,
                          transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                        }}
                        className={`group glass rounded-2xl p-6 border ${colors.border} hover:bg-white/[0.06] transition-colors duration-300 cursor-pointer`}
                      >
                        {/* Role and organization */}
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            isLeft ? 'sm:flex-row-reverse' : ''
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}
                          >
                            {item.icon}
                          </div>

                          <div className={isLeft ? 'sm:text-right' : 'text-left'}>
                            <h3 className="font-display text-lg font-semibold text-white leading-tight">
                              {item.role}
                            </h3>

                            <p className={`text-sm ${colors.text}`}>
                              {item.org}
                            </p>
                          </div>
                        </div>

                        {/* Period */}
                        <p className="text-xs text-ink-500 mb-4">
                          {item.period}
                        </p>

                        {/* Responsibilities */}
                        <ul
                          className={`space-y-2 ${
                            isLeft ? 'sm:text-right' : 'text-left'
                          }`}
                        >
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="text-sm text-ink-300 leading-relaxed flex gap-2 items-start text-left"
                            >
                              <span
                                className={`mt-1.5 w-1 h-1 rounded-full ${colors.text} bg-current flex-shrink-0`}
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills tags */}
                        <div
                          className={`flex flex-wrap gap-2 mt-4 ${
                            isLeft ? 'sm:justify-end' : 'justify-start'
                          }`}
                        >
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs px-2.5 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Certificate link - only for these two internships */}
                        {item.certUrl && (
                          <div
                            className={`mt-4 pt-3 border-t border-white/10 flex ${
                              isLeft ? 'sm:justify-end' : 'justify-start'
                            }`}
                          >
                            <a
                              href={item.certUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} hover:opacity-80 transition-opacity`}
                            >
                              View Certificate
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
