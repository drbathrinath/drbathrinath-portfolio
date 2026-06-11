"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

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

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  const certifications = [
    { name: "GCP ICH E6(R3)", issuer: "NIHR", year: "2026" },
    { name: "Introduction to Pharmacovigilance", issuer: "PharmUni – Zaman Pharma", year: "2026" },
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
  return (
    <main className="min-h-screen text-white">

      <div
        onMouseEnter={() => setShowNavbar(true)}
        className="fixed top-0 left-0 z-[60] h-2 w-full"
      />
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
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#experience" className="hover:text-cyan-400">Experience</a>
            <a href="#education" className="hover:text-cyan-400">Education</a>
            <a href="#publications" className="hover:text-cyan-400">Publications</a>
            <a href="#certifications" className="hover:text-cyan-400">Certifications</a>
            <a href="#achievements" className="hover:text-cyan-400">Achievements</a>
            <a href="#connect" className="hover:text-cyan-400">Connect</a>
          </div>
          <a href="https://www.linkedin.com/in/drbathrinath" target="_blank"
            className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black hover:scale-105 transition">
            LinkedIn
          </a>
        </div>
      </motion.nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16 pb-16">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="glass-card mx-auto w-full max-w-6xl rounded-3xl p-10 text-center md:p-16">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm"
          >
            Drug Safety • Pharmacovigilance • Clinical Research
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glow-text mb-6 text-3xl font-bold sm:text-5xl md:text-7xl"
          >
            Dr. BATHRINATH M S
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-gray-300 md:text-2xl"
          >
            Pharmacovigilance Professional Focused on Drug Safety & Clinical Research
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mx-auto mt-6 max-w-3xl text-gray-400"
          >
            Pharm.D graduate with hands-on experience in Pharmacovigilance, Drug Safety,
            Clinical Research, Regulatory Compliance, and Clinical Operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a href="https://www.linkedin.com/in/drbathrinath" target="_blank"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
              LinkedIn
            </a>
            <a href="#connect"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition duration-300 hover:scale-110 hover:shadow-cyan-400/50">
              Contact Me
            </a>
            <a href="/resume.pdf" target="_blank"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:scale-105 transition">
              View Resume
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 1.0 } } }}
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
                <p className="mt-2 text-gray-400">{item.label}</p>
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
              a Grade III Anaphylaxis SAE escalated per ICH E2A, hold multiple industry
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
            <div className="border-l-2 border-cyan-500 pl-8">
              <div className="mb-10">
                <h3 className="text-2xl font-semibold">Doctor of Pharmacy (Pharm.D)</h3>
                <p className="mt-2 text-cyan-400">Annamalai University, FEAT – Chidambaram</p>
                <p className="mt-2 text-gray-400">Pharmacovigilance • Clinical Research • Clinical Pharmacy</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Professional Focus</h3>
                <p className="mt-2 text-gray-400 leading-7">
                  Developed strong foundations in drug safety, adverse event monitoring, clinical research,
                  patient care, regulatory compliance, literature evaluation, and evidence-based medicine.
                </p>
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
              <p className="mt-1 text-gray-500">Aug 2025 – Aug 2026</p>
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
              <p className="mt-1 text-gray-500">Jul 2024 – Jul 2025</p>
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
                View Publication →
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
                View Publication →
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
            { value: "Stanford Medicine CME", label: "Hypertension in Primary Care — AMA PRA Category 1 Credit" },
            { value: "Guinness World Record", label: "Contributor — Cipla #PharmacistFightsAMR Campaign" },
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
            <h2 className="mb-6 text-3xl font-bold">Let's Connect</h2>
            <p className="mb-6 text-gray-300">
              Interested in Pharmacovigilance, Drug Safety, Clinical Research, or Collaboration Opportunities.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 Chennai, India</p>
              <p>📧 bathrinathshanmugam7@gmail.com</p>
              <p>📱 +91 90425 11773</p>
            </div>
            <a href="https://www.linkedin.com/in/drbathrinath" target="_blank"
              className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:scale-105 transition">
              Connect on LinkedIn
            </a>
          </div>
        </SlideUp>
      </section>

    </main>
  );
}