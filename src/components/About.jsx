"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Target,
  Globe,
  Sparkles,
  Heart,
  Wrench,
} from "lucide-react";

export default function About({ messages = {} }) {
  const t = messages?.about || {};
  const s = t.stats || {};
  const contactButtons = messages?.contact?.buttons || {};

  // Define variants for a single item.
  // This will be applied to each stat card, skill chip, and language item.
  const itemVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Stat cards (uses messages.about.stats)
  const stats = [
    {
      icon: MapPin,
      label: s.basedInLabel || "Based in",
      value: s.basedIn || "Kanagawa, Japan",
    },
    {
      icon: Briefcase,
      label: s.currentLabel || "Current",
      value: s.current || "Researcher @ Kajima Technical Research Institute",
    },
    {
      icon: Target,
      label: s.seekingLabel || "Seeking",
      value: s.seeking || "Frontend Web Developer roles in Japan",
    },
  ];

  // Skill chips
  const skills = [
    "HTML 5",
    "CSS 3",
    "TailwindCSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Zustand",
    "SWR",
    "Git/GitHub",
  ];

  // Languages (prefer messages.about.languages if you later add it; else fallback)
  const languageItems =
    t.languages && Array.isArray(t.languages) && t.languages.length > 0
      ? t.languages
      : [
          { name: "Japanese", level: "JLPT N2", percent: 95 },
          { name: "English", level: "Business", percent: 90 },
        ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 sm:scroll-mt-28"
    >
      {/* decorative orb behind layout */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 right-[-8%] top-1/3 hidden h-[28rem] w-[28rem] rounded-full bg-gradient-to-r from-purple-600/25 to-blue-600/25 blur-3xl lg:block"
      />

      <div className="mx-auto max-w-6xl">
        {/* Main content container with 'whileInView' */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t.title || "About Me"}
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid items-start gap-12 lg:grid-cols-12">
            {/* Left: Image + Stats */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              {/* Profile Image */}
              <div className="relative mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl border-2 border-emerald-500/30 bg-slate-800/30 backdrop-blur-sm shadow-2xl shadow-emerald-500/20"
                >
                  <img
                    src="/about.png"
                    alt="About me"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  {/* Additional glow effect */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-emerald-400/20" />
                </motion.div>
              </div>

              {/* Stat cards */}
              <div className="flex flex-col gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    whileHover={{ y: -2 }}
                    className="transform-gpu rounded-2xl border border-white/10 bg-slate-800/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-content-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 ring-1 ring-white/20">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-400">
                          {stat.label}
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Content + Highlights + Skills */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 p-8 backdrop-blur-sm">
                {/* contained inner glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-10 -z-10 rounded-[2rem] bg-gradient-to-r from-purple-600/15 to-blue-600/15 blur-2xl"
                />
                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                  {t.content ||
                    "Myanmar-born engineer in Kanagawa, transitioning into a Frontend Web Developer while working as a researcher at Kajima Technical Research Institute. I build clean, fast, bilingual UIs with Next.js/React and Tailwind."}
                </p>

                {/* hiring line uses s.seeking */}
                <div className="mb-8 flex items-center gap-2 rounded-xl border border-purple-500/20 bg-slate-900/40 px-4 py-3 text-purple-200">
                  <Sparkles className="h-5 w-5" />
                  <p className="text-sm">
                    {s.seeking
                      ? `Actively applying for: ${s.seeking}`
                      : "Actively applying for Frontend Web Developer roles in Japan."}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-6 mb-8">
                  <h3 className="flex items-center text-xl font-semibold text-purple-300">
                    <Heart className="mr-2 h-5 w-5" />
                    {t.highlightsTitle || "Highlights"}
                  </h3>

                  {/* Current Job */}
                  <div className="space-y-3 text-gray-300">
                    {(t.highlights?.job || []).map((row, i) => (
                      <motion.div
                        key={`job-${i}`}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex items-start"
                      >
                        <div
                          className={`mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full ${row.dot}`}
                        />
                        <p className="text-base">
                          <span className="font-semibold text-white">
                            {row.k}：
                          </span>{" "}
                          {row.v}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Projects */}
                  <div className="space-y-3 text-gray-300">
                    {(t.highlights?.projects || []).map((row, i) => (
                      <motion.div
                        key={`proj-${i}`}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex items-start"
                      >
                        <div
                          className={`mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full ${row.dot}`}
                        />
                        <p className="text-base">
                          <span className="font-semibold text-white">
                            {row.k}：
                          </span>{" "}
                          {row.v}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills & Languages Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Skills */}
                  <div>
                    <h4 className="mb-4 text-lg font-semibold text-purple-300 flex items-center">
                      <Wrench className="w-5 h-5 mr-2" />
                      Core Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((s, i) => (
                        <motion.span
                          key={i}
                          variants={itemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 text-xs text-gray-200 hover:bg-purple-900/20 transition-colors"
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h4 className="mb-4 text-lg font-semibold text-purple-300 flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      {t.languagesTitle || "Languages"}
                    </h4>
                    <ul className="space-y-3">
                      {languageItems.map((lang, i) => (
                        <motion.li
                          key={i}
                          variants={itemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          className="rounded-xl border border-white/10 bg-slate-900/40 p-3 hover:bg-slate-800/40 transition-colors"
                          aria-label={`${lang.name} ${lang.level || ""}`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-white">
                              {lang.name}
                            </span>
                            {lang.level && (
                              <span className="text-xs text-gray-300">
                                {lang.level}
                              </span>
                            )}
                          </div>
                          {typeof lang.percent === "number" && (
                            <div
                              className="mt-2 h-2 w-full rounded-full bg-white/10"
                              role="progressbar"
                              aria-valuenow={lang.percent}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                                style={{
                                  width: `${Math.max(
                                    0,
                                    Math.min(100, lang.percent)
                                  )}%`,
                                }}
                              />
                            </div>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/resume/シンタンッナイン＿履歴書.pdf"
                    download
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow ring-1 ring-white/20 hover:shadow-lg transition-all duration-300"
                  >
                    {contactButtons.downloadResume || "Download Resume"}
                  </a>
                  <a
                    href="/resume/シンタンッナイン＿職務経歴書.pdf"
                    download
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow ring-1 ring-white/20 hover:shadow-lg transition-all duration-300"
                  >
                    {contactButtons.downloadCareerHistory ||
                      "Download Career History"}
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/40 px-5 py-2.5 text-sm font-semibold text-gray-200 hover:bg-slate-800/60 transition-all duration-300"
                  >
                    {contactButtons.seeProjects || "See Projects"}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
