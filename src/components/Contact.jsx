
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Clock, Github, Linkedin, Send } from 'lucide-react';

export default function Contact({ messages }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: messages.contact.info.location,
      value: "Tokyo, Japan",
      color: "from-purple-600 to-blue-600"
    },
    {
      icon: Clock,
      label: messages.contact.info.response,
      value: "Within 24 hours",
      color: "from-green-600 to-blue-600"
    },
    {
      icon: Mail,
      label: messages.contact.info.available,
      value: "Full-time opportunities",
      color: "from-orange-600 to-red-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "#",
      color: "hover:text-purple-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:shinthantnaing@example.com",
      color: "hover:text-green-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {messages.contact.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {messages.contact.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                
                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 flex items-center space-x-4"
                    >
                      <div className={`bg-gradient-to-br ${info.color} p-3 rounded-xl`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-slate-800/50 border border-purple-500/20 rounded-xl p-4 text-gray-400 ${social.color} transition-colors`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative w-32 h-32 mx-auto opacity-20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl" />
                <div className="absolute inset-2 bg-gradient-to-l from-blue-600 to-purple-600 rounded-full blur-lg" />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      {messages.contact.form.name}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      {messages.contact.form.email}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      {messages.contact.form.message}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>{messages.contact.form.send}</span>
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-6 h-6 bg-purple-400/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400/30 rounded-full blur-sm"
        />
      </div>
    </section>
  );
}
