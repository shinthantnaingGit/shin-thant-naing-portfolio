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
} from "lucide-react";

export default function About({ messages = {} }) {
  const t = messages?.about || {};
  const s = t.stats || {};

  // Animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.08 },
    },
  };
  const item = {
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
      value: s.seeking || "Frontend Web Developer (Japan-wide & Remote)",
    },
    {
      icon: Globe,
      label: s.languagesLabel || "Languages",
      value: s.languages || "English / Japanese",
    },
  ];

  // Skill chips
  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "Zustand",
    "SWR",
    "PrimeReact",
    "Chart.js",
    "Framer Motion",
    "Lucide",
    "i18n (EN/JA)",
    "Git/GitHub",
    "Vercel",
  ];

  // Languages (prefer messages.about.languages if you later add it; else fallback)
  // Shape if provided in messages:
  // about.languages = [{ name: "Japanese", level: "JLPT N2", percent: 70 }, ...]
  const languageItems =
    t.languages && Array.isArray(t.languages) && t.languages.length > 0
      ? t.languages
      : [
          { name: "Japanese", level: "JLPT N2", percent: 95 },
          { name: "English", level: "Business", percent: 90 },
          { name: "Burmese", level: "Native", percent: 100 },
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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {/* Title */}
          <motion.div variants={item} className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t.title || "About Me"}
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
          </motion.div>

          {/* Grid */}
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Left: Narrative + Highlights */}
            <motion.div variants={item} className="lg:col-span-7">
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
                      : "Actively applying for Frontend Web Developer roles (Japan-wide & Remote)."}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-6">
                  <h3 className="flex items-center text-xl font-semibold text-purple-300">
                    <Heart className="mr-2 h-5 w-5" />
                    {t.highlightsTitle || "Highlights"}
                  </h3>

                  {/* Current Job */}
                  <div className="space-y-3 text-gray-300">
                    {(t.highlights?.job || []).map((row, i) => (
                      <div key={`job-${i}`} className="flex items-start">
                        <div
                          className={`mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full ${row.dot}`}
                        />
                        <p className="text-base">
                          <span className="font-semibold text-white">
                            {row.k}：
                          </span>{" "}
                          {row.v}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Projects */}
                  <div className="space-y-3 text-gray-300">
                    {(t.highlights?.projects || []).map((row, i) => (
                      <div key={`proj-${i}`} className="flex items-start">
                        <div
                          className={`mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full ${row.dot}`}
                        />
                        <p className="text-base">
                          <span className="font-semibold text-white">
                            {row.k}：
                          </span>{" "}
                          {row.v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-8">
                  <h4 className="mb-3 text-sm font-semibold tracking-wide text-gray-300">
                    Core Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 text-xs text-gray-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-8">
                  <h4 className="mb-3 text-sm font-semibold tracking-wide text-gray-300">
                    {t.languagesTitle || "Languages / 言語"}
                  </h4>
                  <ul className="space-y-3">
                    {languageItems.map((lang) => (
                      <li
                        key={lang.name}
                        className="rounded-xl border border-white/10 bg-slate-900/40 p-3"
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
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/resume"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow ring-1 ring-white/20"
                  >
                    View Resume
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/40 px-5 py-2.5 text-sm font-semibold text-gray-200"
                  >
                    See Projects
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Stat cards */}
            <motion.div variants={item} className="lg:col-span-5">
              <div className="flex flex-col gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
