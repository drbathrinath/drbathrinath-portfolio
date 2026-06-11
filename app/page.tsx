"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

/* ================= ANIMATED SECTION ================= */
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export default function Home() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);
  const [offset, setOffset] = useState(0);
  const [text, setText] = useState("");
  const fullText = "Pharmacovigilance Professional";

  const [showNavbar, setShowNavbar] = useState(false);

  /* ================= SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      setScroll((window.scrollY / total) * 100);
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= CURSOR ================= */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ================= TRAIL ================= */
  useEffect(() => {
    const animate = () => {
      setTrail((p) => ({
        x: p.x + (cursor.x - p.x) * 0.12,
        y: p.y + (cursor.y - p.y) * 0.12,
      }));
      requestAnimationFrame(animate);
    };
    animate();
  }, [cursor]);

  /* ================= TYPING ================= */
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 70);
    return () => clearInterval(typing);
  }, []);

    const certifications = [
    { name: "GCP ICH E6(R3)", issuer: "NIHR" },
    { name: "Pharmacovigilance Basics", issuer: "PharmUni" },
    { name: "Clinical Data Management", issuer: "Medclinigen" },
    { name: "GCP Training", issuer: "NIH" },
  ];

  const skillCategories = [
    {
      title: "Drug Safety",
      skills: ["ICSR", "MedDRA Coding", "Signal Detection"],
    },
    {
      title: "Clinical Research",
      skills: ["GCP", "Protocol Review", "Data Collection"],
    },
    {
      title: "Regulatory",
      skills: ["FDA Guidelines", "Compliance", "Risk Management"],
    },
  ];
    return (
    <main className="relative min-h-screen text-white overflow-x-hidden">

      {/* 🌌 PARTICLE BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* 📊 SCROLL BAR */}
      <div className="fixed top-0 left-0 w-full h-[4px] z-[100]">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          style={{ width: `${scroll}%` }}
        />
      </div>

      {/* 🟢 CURSOR */}
      <div
        className="fixed z-[999] w-3 h-3 bg-cyan-400 rounded-full pointer-events-none"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%,-50%)",
        }}
      />

      {/* 🔵 TRAIL */}
      <div
        className="fixed z-[998] w-10 h-10 bg-cyan-400/30 blur-xl rounded-full pointer-events-none"
        style={{
          left: trail.x,
          top: trail.y,
          transform: "translate(-50%,-50%)",
        }}
      />

      {/* NAVBAR */}
      <div
        onMouseEnter={() => setShowNavbar(true)}
        className="fixed top-0 left-0 h-2 w-full z-[60]"
      />

      <motion.nav
        onMouseLeave={() => setShowNavbar(false)}
        animate={{ y: showNavbar ? 0 : -120 }}
        className="fixed top-0 z-50 w-full glass-navbar"
      >
        <div className="flex justify-between px-6 py-4 max-w-7xl mx-auto">
          <h1 className="font-bold">Dr Portfolio</h1>
        </div>
      </motion.nav>

      {/* HERO (typing + parallax) */}
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ transform: `translateY(${offset * 0.2}px)` }}
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            {text}<span className="text-cyan-400">|</span>
          </h1>

          {/* MAGNETIC BUTTONS */}
          <div className="flex gap-4 justify-center mt-8">
            <button className="px-6 py-3 bg-cyan-500 text-black rounded-xl hover:scale-110 transition">
              LinkedIn
            </button>
            <button className="px-6 py-3 border border-cyan-400 rounded-xl hover:scale-110 transition">
              Resume
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto p-10">
          <div className="glass-card p-8 rounded-3xl hover:scale-105 transition">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-gray-300 mt-3">
              Pharmacovigilance Professional focused on Drug Safety & Clinical Research.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* SKILLS */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto p-10">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((c) => (
              <div
                key={c.title}
                className="glass-card p-6 rounded-3xl hover:rotate-1 hover:scale-105 transition"
              >
                <h3 className="text-cyan-400 mb-3">{c.title}</h3>
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="inline-block m-1 px-3 py-1 bg-cyan-500/10 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* CERTIFICATIONS */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto p-10">
          <div className="glass-card p-6 rounded-3xl">
            <h2 className="text-xl font-bold mb-4">Certifications</h2>
            {certifications.map((c) => (
              <p key={c.name} className="text-gray-300">
                • {c.name} ({c.issuer})
              </p>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* CONNECT */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto p-10">
          <div className="glass-card p-8 rounded-3xl text-center">
            <h2 className="text-2xl font-bold">Let’s Connect</h2>
            <p className="text-gray-400 mt-2">Chennai, India</p>
          </div>
        </section>
      </AnimatedSection>

    </main>
  );
}