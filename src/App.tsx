import { useDarkMode } from './hooks/useDarkMode';
import MatrixRain from './components/MatrixRain';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Mentoring from './components/Mentoring';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="relative min-h-screen bg-[#0a0f0d] text-gray-100">
      <MatrixRain />
      <Navigation isDark={isDark} toggleDark={() => setIsDark(!isDark)} />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Mentoring />
        <Contact />
      </main>

      <footer className="border-t border-emerald-500/20 bg-[#0a0f0d]/80 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            <span className="text-emerald-500">$</span> Built with React, TypeScript, Tailwind CSS & Framer Motion
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
