import { motion } from 'framer-motion';
import { Users, Heart, BookOpen, Award } from 'lucide-react';

const Mentoring = () => {
  const experiences = [
    {
      title: 'Mentorship',
      mentor: 'Peter Kibet',
      description: 'Currently being mentored by Peter Kibet, gaining invaluable insights into cybersecurity best practices, professional development, and industry standards.',
      icon: Award,
      color: 'from-emerald-500/20 to-cyan-500/20'
    },
    {
      title: 'Open Source Contributions',
      description: 'Contributing to open-source security tools and educational resources. Helping improve documentation and adding features to community-driven projects.',
      icon: BookOpen,
      color: 'from-emerald-500/20 to-green-500/20'
    },
    {
      title: 'Peer Learning',
      description: 'Actively participating in cybersecurity communities, sharing knowledge through blog posts, and helping peers understand complex security concepts.',
      icon: Users,
      color: 'from-emerald-500/20 to-teal-500/20'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="mentoring" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-emerald-500 mb-4 flex items-center">
            <span className="text-emerald-500 mr-3">$</span>
            <span className="glow-text">cat community.md</span>
          </h2>
          <p className="text-gray-400 ml-8">Mentorship, collaboration, and community involvement</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-[#0d1117]/50 backdrop-blur-sm rounded-lg border border-emerald-500/30 p-6 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center border border-emerald-500/30 mb-4`}>
                <exp.icon className="w-8 h-8 text-emerald-500" />
              </div>

              <h3 className="text-xl font-bold text-emerald-500 mb-2">{exp.title}</h3>
              {exp.mentor && (
                <p className="text-sm text-emerald-400 mb-2 flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Mentor: {exp.mentor}
                </p>
              )}
              <p className="text-gray-300 text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-[#0d1117]/50 backdrop-blur-sm rounded-lg border border-emerald-500/30 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-emerald-500 mb-4">Open to Collaborations</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always excited to collaborate on cybersecurity projects, contribute to open-source initiatives,
            or participate in hackathons and CTF competitions. Let's build something amazing together!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all duration-200 hover:scale-105 text-emerald-500 font-medium"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mentoring;
