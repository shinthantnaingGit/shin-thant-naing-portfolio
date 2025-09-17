import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { messages } from "./I18n/messages";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [language, setLanguage] = useState("ja");

  const t = messages[language];

  // Removed scroll handling - using traditional anchor links

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden scroll-smooth">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/50 to-slate-900 pointer-events-none" />

      <Header language={language} setLanguage={setLanguage} messages={t} />

      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero messages={t} />
          <About messages={t} />
          <Skills messages={t} />
          <Projects messages={t} />
          <Experience messages={t} />
          <Contact messages={t} />
        </motion.div>
      </main>

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-40"
        />
      </div>
    </div>
  );
}

export default App;
