import { motion } from 'framer-motion';
import { Shield, Code, Database, Terminal, Lock, Network, GitBranch, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cybersecurity',
      icon: Shield,
      skills: ['Network Security', 'Penetration Testing', 'Ethical Hacking', 'Security Auditing', 'Cryptography', 'OWASP Top 10']
    },
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'JavaScript/TypeScript', 'C/C++', 'Bash/Shell Scripting', 'HTML/CSS', 'React']
    },
    {
      title: 'Tools & Platforms',
      icon: Terminal,
      skills: ['Kali Linux', 'Wireshark', 'Metasploit', 'Burp Suite', 'Git', 'Docker']
    },
    {
      title: 'Other Technologies',
      icon: Database,
      skills: ['SQL/NoSQL', 'REST APIs', 'Linux Administration', 'Cloud Services', 'Networking', 'Firewalls']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-emerald-500 mb-4 flex items-center">
            <span className="text-emerald-500 mr-3">$</span>
            <span className="glow-text">cat skills.txt</span>
          </h2>
          <p className="text-gray-400 ml-8">Technical arsenal and competencies</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-[#0d1117]/50 backdrop-blur-sm rounded-lg border border-emerald-500/30 p-6 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-4">
                <category.icon className="w-6 h-6 text-emerald-500" />
                <h3 className="text-xl font-bold text-emerald-500">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-md text-sm text-gray-300 hover:bg-emerald-500/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-[#0d1117]/50 backdrop-blur-sm rounded-lg border border-emerald-500/30 p-6"
        >
          <div className="flex items-center space-x-2 mb-3">
            <Lock className="w-5 h-5 text-emerald-500" />
            <h4 className="text-lg font-semibold text-emerald-500">Security Focus Areas</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Network className="w-4 h-4 text-emerald-500" />
              <span>Network Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Web Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <GitBranch className="w-4 h-4 text-emerald-500" />
              <span>Secure Coding</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-4 h-4 text-emerald-500" />
              <span>Cloud Security</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
