import GlobalBackground from '@/components/GlobalBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Research from '@/components/Research';
import Certifications from '@/components/Certifications';
import Honors from '@/components/Honors';

function App() {
  return (
    <div className="relative min-h-screen text-ink-100 w-full overflow-x-hidden">
      <GlobalBackground />
      <div className="relative z-10 w-full">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Research />
          <Certifications />
          <Honors />
        </main>
      </div>
    </div>
  );
}

export default App;