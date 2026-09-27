import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FileText, Pill, Hexagon } from 'lucide-react';

const Hero = () => {
  // State to trigger the shaky effect on the photo
  const [isShaking, setIsShaking] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map the motion values to 3D rotation angles (-15 to 15 degrees for realistic tilt)
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  useEffect(() => {
    // 1. LAPTOP & DESKTOP: Global Mouse Movement
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const xPos = ((e.clientX / windowWidth) - 0.5) * 200;
      const yPos = ((e.clientY / windowHeight) - 0.5) * 200;
      x.set(xPos);
      y.set(yPos);
    };

    // 2. TABLETS & iPADS: Touch Movement
    const handleTouchMove = (e: TouchEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const touch = e.touches[0];
      const xPos = ((touch.clientX / windowWidth) - 0.5) * 200;
      const yPos = ((touch.clientY / windowHeight) - 0.5) * 200;
      x.set(xPos);
      y.set(yPos);
    };

    // 3. MOBILES: Gyroscope
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma === null || event.beta === null) return;
      const gamma = Math.min(Math.max(event.gamma, -45), 45); 
      const beta = Math.min(Math.max(event.beta - 45, -45), 45); 
      x.set(gamma * (100 / 45)); 
      y.set(beta * (100 / 45));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [x, y]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">

      {/* Floating 3D Background Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 text-cyan-500/20 pointer-events-none"
      >
        <Pill size={64} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 text-teal-500/20 pointer-events-none"
      >
        <Hexagon size={80} />
      </motion.div>

      <div className="z-10 flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto px-6 py-20 w-full mt-10 md:mt-0">

        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-cyan-400 font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
              Registered Pharmacist (RPH) | Pharm.D
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Dr. BATHRINATH M S
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Pharm.D Graduate focusing on <span className="text-teal-400">Pharmacovigilance</span>, Drug Safety, and <span className="text-blue-400">Clinical Data Management</span>. Transforming clinical data into actionable patient safety insights.
            </p>
          </motion.div>

          {/* Buttons Section with Shaky Trigger on Hover */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center lg:justify-start"
          >
            {/* PV Resume Button */}
            <a 
              href="/Bathrinath_MS_Pharmacovigilance_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto"
              onMouseEnter={() => setIsShaking(true)}
              onMouseLeave={() => setIsShaking(false)}
            >
              <motion.button 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center px-6 py-3 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                <FileText className="w-4 h-4 mr-2" /> PV Resume
              </motion.button>
            </a>

            {/* Drug Safety Resume Button */}
            <a 
              href="/Bathrinath_MS_Drug_Safety_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto"
              onMouseEnter={() => setIsShaking(true)}
              onMouseLeave={() => setIsShaking(false)}
            >
              <motion.button 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center px-6 py-3 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/30 hover:bg-teal-500/20 hover:border-teal-400 transition-colors backdrop-blur-sm shadow-[0_0_15px_rgba(20,184,166,0.2)]"
              >
                <FileText className="w-4 h-4 mr-2" /> Drug Safety Resume
              </motion.button>
            </a>

            {/* CDM Resume Button */}
            <a 
              href="/Dr_Bathrinath_MS_CDM_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto"
              onMouseEnter={() => setIsShaking(true)}
              onMouseLeave={() => setIsShaking(false)}
            >
              <motion.button 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center px-6 py-3 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400 transition-colors backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              >
                <FileText className="w-4 h-4 mr-2" /> CDM Resume
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* 3D Glassmorphic Portrait Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mt-12 lg:mt-0 pointer-events-none"
          style={{ perspective: 1000 }}
        >
          {/* Subtle Shake & 3D Tilt Wrapper (Reduced Intensity by 50%) */}
          <motion.div
            style={{ rotateX, rotateY }}
            animate={isShaking ? { x: [-2, 2, -2, 2], y: [-1.5, 1.5, -1.5, 1.5] } : { x: 0, y: 0 }}
            transition={{ duration: 0.1, repeat: isShaking ? Infinity : 0, repeatType: "mirror" }}
          >
            {/* Blinking/Glowing Border Animation */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0px 0px 15px rgba(6,182,212,0.2)", 
                  "0px 0px 40px rgba(6,182,212,0.8)", 
                  "0px 0px 15px rgba(6,182,212,0.2)"
                ],
                borderColor: [
                  "rgba(6,182,212,0.3)", 
                  "rgba(6,182,212,1)", 
                  "rgba(6,182,212,0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-3xl overflow-hidden border-2 bg-white/5 backdrop-blur-xl z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-10" />
              <img 
                src="/linkedin-Photo.png" 
                alt="Dr. Bathrinath M S" 
                className="w-full h-full object-cover relative z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-20 pointer-events-none" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 md:-left-10 bg-[#09090b]/80 backdrop-blur-md border border-teal-500/50 px-5 py-3 rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] z-30"
            >
              <span className="text-teal-400 font-bold text-sm md:text-base tracking-wide">Pharm.D Graduate</span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;