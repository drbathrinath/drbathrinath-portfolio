import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Pill, Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Certifications', href: '#contact' }, // Mapped honors to contact section
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // Smart Auto-hide logic based on scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Hide when scrolling down, show when scrolling up
    if (latest > 150 && latest > previous && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    // Morph into pill when scrolled past 50px
    setScrolled(latest > 50);
  });

  // INNOVATION: Custom Smooth Scroll Function
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault(); // Default teleport aagradha block pandrom
    const targetElement = document.querySelector(href);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setOpen(false); // Mobile menu open-a irundha adhaiyum close pannidum
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-120%", opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 px-4 ${
          scrolled ? 'top-4' : 'top-0'
        }`}
      >
        <div 
          className={`w-full flex items-center justify-between transition-all duration-500 ${
            scrolled 
              ? 'max-w-4xl glass-strong rounded-full border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] px-6 py-3' 
              : 'max-w-7xl px-6 py-5'
          }`}
        >
          <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center glow-teal"
            >
              <Pill className="w-5 h-5 text-ink-950" />
            </motion.div>
            <span className="font-display font-semibold text-sm tracking-wide text-white hidden sm:block">
              BATHRINATH M S
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="px-4 py-2 text-sm text-ink-300 hover:text-primary-300 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 w-0 h-px bg-primary-400 group-hover:w-1/2 group-hover:-translate-x-1/2 transition-all duration-300" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full glass border border-white/5 text-primary-300 hover:text-primary-200 hover:bg-primary-500/10 hover:border-primary-500/30 transition-all text-sm font-medium shadow-[0_0_15px_rgba(6,182,212,0)] hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            Contact
          </a>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 glass-strong md:hidden flex flex-col items-center justify-center gap-6"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl font-display text-white hover:text-primary-300 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.05 }}
              className="mt-4 px-8 py-3 rounded-full glass border border-primary-500/30 text-primary-300 text-xl font-display"
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}