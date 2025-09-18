import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Phone,
  Calendar,
  ExternalLink,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function Contact({ messages }) {
  const t = messages?.contact || {};

  const contactMethods = [
    {
      icon: Mail,
      title: t.methods?.email?.title || "Email",
      value: t.methods?.email?.value || "shinthantnaing.general@gmail.com",
      url: "mailto:shinthantnaing.general@gmail.com",
      description: t.methods?.email?.description || "Send me an email anytime",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: Phone,
      title: t.methods?.phone?.title || "Phone",
      value: t.methods?.phone?.value || "+81-70-9239-4148",
      url: "tel:+817092394148",
      description: t.methods?.phone?.description || "Call me directly",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      icon: Linkedin,
      title: t.methods?.linkedin?.title || "LinkedIn",
      value: t.methods?.linkedin?.value || "Shin Thant Naing",
      url: "https://linkedin.com/in/shin-thant-naing-748109373",
      description:
        t.methods?.linkedin?.description || "Connect with me professionally",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Github,
      title: t.methods?.github?.title || "GitHub",
      value: t.methods?.github?.value || "@shinthantnaingGit",
      url: "https://github.com/shinthantnaingGit",
      description:
        t.methods?.github?.description || "Check out my code and projects",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
  ];

  const quickInfo = [
    {
      icon: MapPin,
      label: t.quickInfo?.location?.label || "Location",
      value: t.quickInfo?.location?.value || "Kanagawa, Japan",
    },
    {
      icon: Calendar,
      label: t.quickInfo?.available?.label || "Available",
      value: t.quickInfo?.available?.value || "Full-time opportunities",
    },
    {
      icon: Phone,
      label: t.quickInfo?.response?.label || "Response",
      value: t.quickInfo?.response?.value || "Within 24 hours",
    },
    {
      icon: MessageCircle,
      label: t.quickInfo?.languages?.label || "Languages",
      value: t.quickInfo?.languages?.value || "English, Japanese, Burmese",
    },
    {
      icon: Github,
      label: t.quickInfo?.projects?.label || "Portfolio Projects",
      value: t.quickInfo?.projects?.value || "5+ completed projects",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 sm:scroll-mt-28 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-purple-500/30 mb-6">
              <MessageCircle className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                {t.header?.badge || "Let's Connect"}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.header?.title || "Get In Touch"}
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.header?.description ||
                "Ready to collaborate on your next project? I'm always excited to discuss new opportunities, innovative ideas, and how we can build something amazing together."}
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Methods - Left Side */}
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.url}
                    target={
                      method.url.startsWith("mailto:") ||
                      method.url.startsWith("tel:")
                        ? "_self"
                        : "_blank"
                    }
                    rel={
                      method.url.startsWith("mailto:") ||
                      method.url.startsWith("tel:")
                        ? ""
                        : "noopener noreferrer"
                    }
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative overflow-hidden rounded-2xl ${method.bgColor} border ${method.borderColor} p-8 hover:shadow-2xl transition-all duration-300`}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${method.color} shadow-lg`}
                        >
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                        {method.title}
                      </h3>

                      <p className="text-gray-300 text-sm mb-3">
                        {method.description}
                      </p>

                      <p className="text-white font-medium text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Info & CTA - Right Side */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="space-y-6">
                {/* Quick Info Cards */}
                <div className="bg-slate-800/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    {t.quickInfo?.title || "Quick Info"}
                  </h3>

                  <div className="space-y-4">
                    {quickInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                          <info.icon className="w-4 h-4 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-medium">
                            {info.label}
                          </p>
                          <p className="text-sm text-white font-medium">
                            {info.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.cta?.title || "Let's Build Something Amazing Together"}
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                {t.cta?.description ||
                  "Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love to hear from you. Let's create something extraordinary!"}
              </p>
              <motion.a
                href="mailto:shinthantnaing.general@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                <Mail className="w-5 h-5" />
                {t.cta?.button || "Get In Touch"}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
