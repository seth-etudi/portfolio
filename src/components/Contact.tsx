import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-emerald-500 mb-4 flex items-center">
            <span className="text-emerald-500 mr-3">$</span>
            <span className="glow-text">echo "Get in touch"</span>
          </h2>
          <p className="text-gray-400 ml-8">Let's connect and build something amazing</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[#0d1117]/50 backdrop-blur-sm rounded-lg border border-emerald-500/30 p-6">
              <h3 className="text-2xl font-bold text-emerald-500 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-emerald-500 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-emerald-500 transition-colors duration-200">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-emerald-500 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-emerald-500 transition-colors duration-200">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-500 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-300">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117]/50 backdrop-blur-sm rounded-lg border border-emerald-500/30 p-6">
              <h3 className="text-xl font-bold text-emerald-500 mb-4">Why reach out?</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Collaboration on cybersecurity projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Open source contributions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>Internship opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span>General inquiries</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d1117]/50 backdrop-blur-sm rounded-lg border border-emerald-500/30 p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-emerald-500 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0a0f0d] border border-emerald-500/30 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-300 transition-colors duration-200"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-emerald-500 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0a0f0d] border border-emerald-500/30 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-300 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-500 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0a0f0d] border border-emerald-500/30 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-300 transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all duration-200 hover:scale-105 text-emerald-500 font-medium flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center"
                >
                  <p className="text-emerald-500 font-medium">Message sent successfully! 🚀</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
