"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { navigation, resumeLinks, profile } from "./portfolio-data";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={inView || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("profile");

  useEffect(() => {
    const updateActiveSection = () => {
      const checkpoint = window.scrollY + window.innerHeight * 0.34;
      const current = navigation.findLast((item) => {
        const section = document.getElementById(item.id);
        return section ? section.offsetTop <= checkpoint : false;
      });

      if (current) {
        setActive(current.id);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return active;
}

export function Navbar() {
  const active = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const panelId = "mobile-navigation";

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("nav-locked");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("nav-locked");
    };
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#profile" aria-label="Go to profile">
          <span aria-hidden="true">{profile.shortName}</span>
          <span>{profile.name}</span>
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : ""}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div id={panelId} className={`mobile-nav-panel ${isOpen ? "is-open" : ""}`}>
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setIsOpen(false)}
            className={active === item.id ? "is-active" : ""}
          >
            <span>{item.number}</span>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export function EvidenceIndex() {
  const active = useActiveSection();

  return (
    <aside className="evidence-index" aria-label="Section index">
      {navigation.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={active === item.id ? "is-active" : ""}
          aria-current={active === item.id ? "location" : undefined}
        >
          <span>{item.number}</span>
          {item.label}
        </a>
      ))}
    </aside>
  );
}

export function ResumeMenu({ compact = false }: { compact?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = compact ? "resume-menu-compact" : "resume-menu";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnOutside = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className={`resume-menu ${compact ? "resume-menu--compact" : ""}`} ref={menuRef}>
      <button
        className="button button--secondary"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <FileIcon />
        View Resume
      </button>
      <div id={menuId} className={`resume-options ${isOpen ? "is-open" : ""}`} role="menu">
        {resumeLinks.map((resume) => (
          <a
            key={resume.href}
            href={resume.href}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            <FileIcon />
            <span>
              <strong>{resume.role}</strong>
              <small>{resume.action}</small>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const saved = window.localStorage.getItem("portfolio-theme");
    return saved === "dark" || saved === "light"
      ? saved
      : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-switch"
      type="button"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={theme === "light"}
      onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
      <span>{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}

function FileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M8.5 13h7" />
      <path d="M8.5 17h5" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}
