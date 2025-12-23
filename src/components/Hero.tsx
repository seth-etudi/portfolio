import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'whoami';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0d1117]/50 backdrop-blur-sm rounded-lg border border-emerald-500/30 p-8 shadow-2xl"
        >
          <div className="flex items-center space-x-2 mb-6 border-b border-emerald-500/20 pb-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm ml-4">terminal</span>
          </div>

          <div className="font-mono space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-emerald-500">$</span>
              <span className="text-gray-300">{displayText}</span>
              {displayText.length < fullText.length && (
                <span className="animate-pulse text-emerald-500">▊</span>
              )}
            </div>

            {displayText === fullText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 pl-4 border-l-2 border-emerald-500/30"
              >
                <div className="ml-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-2 glow-text">
                    Your Name Here
                  </h1>
                  <p className="text-xl text-gray-400 mb-4">
                    <span className="text-emerald-500">{'>'}</span> Cybersecurity Enthusiast & Software Engineer
                  </p>

                  <div className="space-y-2 text-gray-300 mb-6">
                    <p className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Fresh high school graduate with a passion for securing digital systems and building robust software solutions</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Exploring the intersection of security, code, and innovation</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>Committed to continuous learning and contributing to the tech community</span>
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <Github className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <Linkedin className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href="mailto:your.email@example.com"
                      className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <Mail className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm">Email</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
