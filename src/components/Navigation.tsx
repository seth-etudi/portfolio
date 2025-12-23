import { Moon, Sun, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationProps {
  isDark: boolean;
  toggleDark: () => void;
}

const Navigation = ({ isDark, toggleDark }: NavigationProps) => {
  const navItems = ['About', 'Skills', 'Projects', 'Mentoring', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f0d]/80 backdrop-blur-md border-b border-emerald-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-emerald-500" />
            <span className="text-emerald-500 font-bold text-xl">~/portfolio</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-emerald-500 transition-colors duration-200 text-sm font-medium"
              >
                <span className="text-emerald-500">{'> '}</span>
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={toggleDark}
            className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors duration-200 border border-emerald-500/30"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-emerald-500" />
            ) : (
              <Moon className="w-5 h-5 text-emerald-500" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
