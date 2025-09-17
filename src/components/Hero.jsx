import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

export default function Hero({ messages }) {
  const typedRef = useRef(null);

  // useEffect(() => {
  //   // Simple typing effect implementation
  //   let typed;
  //   const element = typedRef.current;
  //   if (element) {
  //     const texts = [messages.hero.title, messages.hero.subtitle];
  //     let textIndex = 0;
  //     let charIndex = 0;
  //     let isDeleting = false;

  //     const type = () => {
  //       const currentText = texts[textIndex];

  //       if (isDeleting) {
  //         element.textContent = currentText.substring(0, charIndex - 1);
  //         charIndex--;
  //       } else {
  //         element.textContent = currentText.substring(0, charIndex + 1);
  //         charIndex++;
  //       }

  //       let typeSpeed = isDeleting ? 50 : 100;

  //       if (!isDeleting && charIndex === currentText.length) {
  //         typeSpeed = 2000;
  //         isDeleting = true;
  //       } else if (isDeleting && charIndex === 0) {
  //         isDeleting = false;
  //         textIndex = (textIndex + 1) % texts.length;
  //         typeSpeed = 500;
  //       }

  //       typed = setTimeout(type, typeSpeed);
  //     };

  //     type();
  //   }

  //   return () => {
  //     if (typed) clearTimeout(typed);
  //   };
  // }, [messages]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="lg:order-1 lg:flex-1 min-w-0 text-center lg:text-left">
            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6"
            >
              {messages.hero.name}
            </motion.h1>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="mb-6 max-w-full">
              <span
                className="block max-w-full whitespace-nowrap text-xl sm:text-2xl lg:text-3xl font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                {messages.hero.title}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {messages.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <a href="#projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {messages.hero.cta}
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 px-8 py-3 text-lg font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {messages.hero.contact}
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div 
            variants={imageVariants} 
            className="lg:order-2 flex justify-center lg:justify-end flex-shrink-0"
          >
            <div className="relative">
              {/* Outer Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #8b5cf6, #06b6d4, #8b5cf6, #06b6d4, #8b5cf6)",
                  padding: "4px",
                  width: "320px",
                  height: "320px"
                }}
              >
                <div className="w-full h-full bg-slate-900 rounded-full" />
              </motion.div>

              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 p-1"
              >
                <div className="w-full h-full bg-slate-900/50 rounded-full" />
              </motion.div>

              {/* Inner Glow Ring */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-purple-600/30 p-2">
                <div className="w-full h-full bg-slate-900 rounded-full" />
              </div>

              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src="/profile.png"
                  alt={messages.hero.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback content if image fails to load */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-6xl font-bold text-purple-400" style={{ display: 'none' }}>
                  STN
                </div>
              </div>

              {/* Floating Particles */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0,
                }}
                className="absolute -top-4 -right-4 w-3 h-3 bg-purple-400 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
                className="absolute -bottom-2 -left-6 w-2 h-2 bg-blue-400 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 2,
                }}
                className="absolute top-8 -left-8 w-4 h-4 bg-purple-300 rounded-full blur-sm"
              />
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator - Centered at bottom */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mt-16 lg:mt-20"
        >
          <p className="text-sm text-gray-400 mb-4">Scroll to explore</p>
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}