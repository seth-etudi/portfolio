import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Code, Lock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Network Security Scanner',
      description: 'A comprehensive network vulnerability scanner built with Python. Identifies open ports, weak protocols, and potential security risks in network infrastructure.',
      tech: ['Python', 'Scapy', 'Socket Programming', 'Nmap'],
      icon: Shield,
      github: '#',
      demo: '#',
      color: 'from-emerald-500/20 to-cyan-500/20'
    },
    {
      title: 'Password Strength Analyzer',
      description: 'Interactive tool that analyzes password strength using entropy calculations, common pattern detection, and breach database checks.',
      tech: ['JavaScript', 'React', 'Crypto API', 'RegEx'],
      icon: Lock,
      github: '#',
      demo: '#',
      color: 'from-emerald-500/20 to-green-500/20'
    },
    {
      title: 'Secure Chat Application',
      description: 'End-to-end encrypted chat application implementing RSA and AES encryption. Features include key exchange, message authentication, and secure storage.',
      tech: ['Node.js', 'WebSocket', 'Cryptography', 'Express'],
      icon: Code,
      github: '#',
      demo: '#',
      color: 'from-emerald-500/20 to-teal-500/20'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-emerald-500 mb-4 flex items-center">
            <span className="text-emerald-500 mr-3">$</span>
            <span className="glow-text">ls -la projects/</span>
          </h2>
          <p className="text-gray-400 ml-8">Featured cybersecurity and software projects</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-[#0d1117]/50 backdrop-blur-sm rounded-lg border border-emerald-500/30 p-6 hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center border border-emerald-500/30`}>
                  <project.icon className="w-10 h-10 text-emerald-500" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-emerald-500 mb-2 group-hover:glow-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-md text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-sm text-gray-300 hover:text-emerald-500 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-sm text-gray-300 hover:text-emerald-500 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            <span className="text-emerald-500">Note:</span> More projects available on{' '}
            <a href="#" className="text-emerald-500 hover:underline">GitHub</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
