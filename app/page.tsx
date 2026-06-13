"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function SlideUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1.2, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerGrid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1.2, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HeroButton({
  href,
  children,
  variant = "ghost",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
}) {
  const base =
    "relative inline-flex min-w-[10.5rem] items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 group sm:rounded-2xl sm:px-8 sm:py-4";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.28)] hover:shadow-[0_0_32px_rgba(34,211,238,0.48)] hover:scale-105 hover:-translate-y-0.5",
    secondary:
      "bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950/80 text-cyan-50 border border-cyan-300/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_18px_rgba(34,211,238,0.14)] hover:border-cyan-300/65 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_28px_rgba(34,211,238,0.28)] hover:scale-105 hover:-translate-y-0.5",
    ghost:
      "bg-[#0f1a2e] border border-white/10 text-white hover:border-cyan-500/50 hover:bg-[#0f2233] hover:shadow-[0_0_28px_rgba(34,211,238,0.18)] hover:scale-105 hover:-translate-y-0.5",
  };

  const isExternal = external;

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]}`}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {children}
    </a>
  );
}

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isInitialThemeSync = useRef(true);
  const isLight = theme === "light";

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const preferredTheme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

    document.documentElement.dataset.theme = preferredTheme;
    document.documentElement.style.colorScheme = preferredTheme;
    queueMicrotask(() => setTheme(preferredTheme));
  }, []);

  useEffect(() => {
    if (isInitialThemeSync.current) {
      isInitialThemeSync.current = false;
      return;
    }

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const certifications = [
    { name: "GCP ICH E6(R3)", issuer: "NIHR", year: "2026" },
    { name: "Introduction to Pharmacovigilance", issuer: "PharmUni - Zaman Pharma", year: "2026" },
    { name: "IMP Management", issuer: "NIHR", year: "2026" },
    { name: "Introduction to Decentralised Trials", issuer: "NIHR", year: "2026" },
    { name: "Clinical Data Management", issuer: "Medclinigen", year: "2026" },
    { name: "Ethical & Regulatory Aspects of Clinical Research", issuer: "NIH", year: "2026" },
    { name: "Principles & Practice of Clinical Research", issuer: "NIH", year: "2026" },
    { name: "GCP by NIDA CTN", issuer: "NIDA CTN", year: "2026" },
  ];

  const skillCategories = [
    {
      title: "Drug Safety",
      skills: ["Adverse Event Reporting", "ICSR Processing", "Case Triage", "Signal Detection", "MedDRA Coding"],
    },
    {
      title: "Clinical Research",
      skills: ["Good Clinical Practice (GCP)", "Clinical Trial Documentation", "Protocol Review", "Research Methodology", "Data Collection"],
    },
    {
      title: "Regulatory",
      skills: ["FDA Guidelines", "Pharmacovigilance Regulations", "Risk Management", "Regulatory Compliance"],
    },
    {
      title: "Technical",
      skills: ["Microsoft Excel", "Literature Review", "Scientific Documentation", "Data Analysis"],
    },
  ];

  const education = [
    {
      title: "Doctor of Pharmacy (Pharm.D)",
      period: "2020 - 2026",
      school: "Annamalai University, FEAT - Chidambaram",
    },
    {
      title: "Advanced Diploma in Clinical Research",
      period: "Mar 2026 - Aug 2026",
      school: "CliniLaunch Research Institute - Bangalore",
    },
    {
      title: "12th Board (HSE)",
      period: "2019 - 2020",
      school: "Sri Vivekananda Hr. Sec. School - Kallakurichi, Tamil Nadu",
      score: "88th Percentile",
    },
    {
      title: "10th Board (SSLC)",
      period: "2017 - 2018",
      school: "Sri Vivekananda Hr. Sec. School - Kallakurichi, Tamil Nadu",
      score: "95th Percentile",
    },
  ];

  return (
    <main className={`portfolio-shell min-h-screen text-white ${isLight ? "theme-light" : "theme-dark"}`}>
      <div
        onMouseEnter={() => setShowNavbar(true)}
        className="fixed top-0 left-0 z-[60] h-2 w-full"
      />
      <button
        type="button"
        onClick={() => setTheme(isLight ? "dark" : "light")}
        aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
        aria-pressed={isLight}
        className="theme-toggle fixed top-4 right-4 z-[70] inline-flex h-11 items-center gap-2 rounded-full border px-3 text-xs font-semibold transition-all duration-300"
      >
        <span className="theme-toggle-icon" aria-hidden="true">
          {isLight ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          )}
        </span>
        {isLight ? "Dark" : "Light"}
      </button>
      <motion.nav
        onMouseLeave={() => setShowNavbar(false)}
        initial={{ y: -100 }}
        animate={{ y: showNavbar ? 0 : -120, opacity: showNavbar ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="glass-navbar fixed top-0 z-50 w-full"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-wide">Dr. BATHRINATH M S</a>
          <div className="hidden items-center gap-8 md:flex">
            {["about","skills","experience","education","publications","certifications","achievements","connect"].map(s => (
              <a key={s} href={`#${s}`} className="capitalize hover:text-cyan-400 transition-colors">{s}</a>
            ))}
          </div>
          <HeroButton href="https://www.linkedin.com/in/drbathrinath" variant="primary" external>
            LinkedIn
          </HeroButton>
        </div>
      </motion.nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-14 pb-14 sm:px-6 sm:pt-16 sm:pb-16">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <div className="glass-card mx-auto w-full max-w-6xl rounded-2xl p-4 text-center sm:rounded-3xl sm:p-8 md:p-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-cyan-300 sm:mb-6 sm:px-5 sm:text-xs sm:tracking-[0.18em]"
          >
            Drug Safety · Pharmacovigilance · Clinical Research
          </motion.span>

          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 select-none"
          >
            <h1 className="hero-name font-black">
              <span className="hero-name-accent">Dr. BATHRINATH</span>
              <span className="hero-name-rest">M S</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-7 h-px w-48 origin-center"
            style={{ background: "linear-gradient(90deg, transparent, #22d3ee, #3b82f6, transparent)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-lg text-gray-300 md:text-xl font-medium"
          >
            Pharmacovigilance Professional — Drug Safety & Clinical Research
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.68 }}
            className="mx-auto mt-4 max-w-2xl text-gray-400 text-sm leading-7"
          >
            Pharm.D graduate with hands-on experience in Pharmacovigilance, Drug Safety,
            Clinical Research, Regulatory Compliance, and Clinical Operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.82 }}
            className="mt-9 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4"
          >
            <HeroButton href="https://www.linkedin.com/in/drbathrinath" variant="secondary" external>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </HeroButton>

            <HeroButton href="#connect" variant="primary">
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </HeroButton>

            <HeroButton href="/Bathrinath_Resume.pdf" variant="secondary" external>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
              </svg>
              View Resume
            </HeroButton>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 1.05 } } }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {[
              { value: "2 Years", label: "Clinical Experience" },
              { value: "15+", label: "ADRs Documented" },
              { value: "11", label: "Clinical Departments" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1.2, 0.36, 1] } },
                }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-3xl font-bold text-cyan-400">{item.value}</h3>
                <p className="mt-2 text-gray-400 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <SlideUp>
          <div className="glass-card rounded-3xl p-10">
            <h2 className="mb-6 text-3xl font-bold">About Me</h2>
            <p className="text-gray-300 leading-8 text-justify">
              I am a Pharm.D graduate with strong grounding in Pharmacovigilance,
              Drug Safety, and Clinical Research. I have documented real-world ADRs including
              a Grade II A Anaphylaxis SAE escalated per ICH E2A, hold multiple industry
              certifications, and have two peer-reviewed publications.
            </p>
          </div>
        </SlideUp>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 pb-24">
        <SlideUp className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">Professional Expertise</p>
          <h2 className="text-4xl font-bold">Skills & Competencies</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Core competencies developed through Pharm.D training, clinical exposure, research activities, and professional certifications.
          </p>
        </SlideUp>
        <StaggerGrid className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="glass-card rounded-3xl p-8">
                <h3 className="mb-6 text-xl font-semibold text-cyan-400">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 pb-24">
        <SlideUp className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">Academic Background</p>
          <h2 className="text-4xl font-bold">Education</h2>
        </SlideUp>
        <SlideUp delay={0.1}>
          <div className="glass-card rounded-3xl p-10">
            <div className="border-l-2 border-cyan-500 pl-5 sm:pl-8">
              <div className="grid gap-4">
                {education.map((item, index) => (
                  <div key={item.title} className="education-card rounded-2xl p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="education-number" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-lg font-semibold sm:text-xl">{item.title}</h3>
                      </div>
                      {item.period && (
                        <span className="text-xs font-semibold text-cyan-300">{item.period}</span>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-gray-300 sm:ml-12">{item.school}</p>
                    {item.score && (
                      <p className="mt-3 text-2xl font-bold text-cyan-400 sm:ml-12">{item.score}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SlideUp>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 pb-24">
        <SlideUp className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">Professional Journey</p>
          <h2 className="text-4xl font-bold">Clinical Training & Experience</h2>
        </SlideUp>
        <StaggerGrid className="space-y-8">
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold">Pharm.D Final Year Internship</h3>
              <p className="mt-2 text-cyan-400">Government Cuddalore Medical College & Hospital</p>
              <p className="mt-1 text-gray-500">Aug 2025 - Aug 2026</p>
              <ul className="mt-6 space-y-3 text-gray-300">
                <li>• Documented and managed 15 Adverse Drug Reactions (ADRs)</li>
                <li>• Performed WHO-UMC causality assessments</li>
                <li>• Applied Naranjo Scale for ADR evaluation</li>
                <li>• Escalated 1 Grade III Anaphylaxis SAE per ICH E2A guidelines</li>
                <li>• Maintained GCP-compliant documentation</li>
                <li>• Worked with CRFs and Informed Consent Files</li>
                <li>• Participated in ward rounds and medication reviews</li>
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold">Academic Clinical Clerkship</h3>
              <p className="mt-2 text-cyan-400">Government Cuddalore Medical College & Hospital</p>
              <p className="mt-1 text-gray-500">Jul 2024 - Jul 2025</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["General Medicine","Surgery","Pediatrics","Obstetrics & Gynaecology","Psychiatry","Pulmonology","Orthopaedics","ENT","Ophthalmology","Dermatology","DVL"].map((dept) => (
                  <span key={dept} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm">{dept}</span>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerGrid>
      </section>

      <section id="publications" className="mx-auto max-w-6xl px-6 pb-24">
        <SlideUp>
          <h2 className="mb-4 text-center text-3xl font-bold">Research Publications</h2>
        </SlideUp>
        <StaggerGrid className="grid gap-6 md:grid-cols-2 mt-8">
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="mb-4 text-xl font-semibold">
                Comparative Analysis of Oral Labetalol vs Oral Nifedipine in Gestational Hypertension
              </h3>
              <p className="mb-6 text-gray-400">VVI Journal • Vol 13 • Issue 5 • 2025</p>
              <a href="https://vvijournal.com/volume-13-issue-5-2025/" target="_blank" rel="noopener noreferrer"
                className="inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition duration-300 hover:scale-105">
                View Publication
              </a>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="mb-4 text-xl font-semibold">
                Evaluation of Postoperative Pain Management Strategies in Haemorrhoidectomy
              </h3>
              <p className="mb-6 text-gray-400">IJISRT • Vol 10 • Issue 8 • Aug 2025</p>
              <a href="https://doi.org/10.38124/ijisrt/25aug1277" target="_blank" rel="noopener noreferrer"
                className="inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition duration-300 hover:scale-105">
                View Publication
              </a>
            </div>
          </StaggerItem>
        </StaggerGrid>
      </section>

      <section id="certifications" className="mx-auto max-w-6xl px-6 pb-24">
        <SlideUp>
          <h2 className="mb-8 text-center text-3xl font-bold">Certifications</h2>
        </SlideUp>
        <StaggerGrid className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <div
                className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(34,211,238,0.04)", border: "1px solid rgba(34,211,238,0.12)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(34,211,238,0.08)";
                  e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(34,211,238,0.04)";
                  e.currentTarget.style.borderColor = "rgba(34,211,238,0.12)";
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold rounded-full px-3 py-1"
                    style={{ background: "#cffafe", color: "#0e7490", letterSpacing: "0.05em" }}>
                    CERTIFIED
                  </span>
                  <span className="text-xs text-gray-500">{cert.year}</span>
                </div>
                <p className="text-sm font-medium text-slate-200 leading-snug">{cert.name}</p>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l18 0"/><path d="M9 8l1 0"/><path d="M9 12l1 0"/><path d="M9 16l1 0"/>
                    <path d="M14 8l1 0"/><path d="M14 12l1 0"/><path d="M14 16l1 0"/>
                    <path d="M5 21l0 -16a2 2 0 0 1 2 -2l10 0a2 2 0 0 1 2 2l0 16"/>
                  </svg>
                  {cert.issuer}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section id="achievements" className="mx-auto max-w-6xl px-6 pb-24">
        <SlideUp className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">Recognition & Accomplishments</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </SlideUp>
        <StaggerGrid className="grid gap-6 md:grid-cols-2">
          {[
            { value: "88th Percentile", label: "Medclinigen National Clinical Research Talent Assessment" },
            { value: "87.5th Percentile", label: "Clinical Data Management Talent Assessment" },
            { value: "Stanford Medicine CME", label: "Hypertension in Primary Care - AMA PRA Category 1 Credit" },
            { value: "Guinness World Record", label: "Contributor - Cipla #PharmacistFightsAMR Campaign" },
          ].map((item) => (
            <StaggerItem key={item.value}>
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-xl font-bold text-cyan-400">{item.value}</h3>
                <p className="mt-3 text-gray-300">{item.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section id="connect" className="mx-auto max-w-6xl px-6 pb-24">
        <SlideUp>
          <div className="glass-card rounded-3xl p-10 text-center">
            <h2 className="mb-6 text-3xl font-bold">Let us Connect</h2>
            <p className="mb-6 text-gray-300">
              Interested in Pharmacovigilance, Drug Safety, Clinical Research, or Collaboration Opportunities.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>Chennai, India</p>
              <p>bathrinathshanmugam7@gmail.com</p>
              <p>+91 90425 11773</p>
            </div>
            <a href="https://www.linkedin.com/in/drbathrinath" target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:scale-105 transition">
              Connect on LinkedIn
            </a>
          </div>
        </SlideUp>
      </section>

    </main>
  );
}
