import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Honors from './components/Honors';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      <GlobalBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Honors />
      <Research />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}