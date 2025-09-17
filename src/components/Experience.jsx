import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Flag,
} from "lucide-react";

export default function Experience({ messages }) {
  const [activeTab, setActiveTab] = useState("jobs");
  const experiences = [
    {
      title: messages.experience.experiences.researcher.title,
      company: messages.experience.experiences.researcher.company,
      location: messages.experience.experiences.researcher.location,
      period: messages.experience.experiences.researcher.period,
      type: "Full-time",
      description: messages.experience.experiences.researcher.description,
      highlights: messages.experience.experiences.researcher.highlights,
      current: true,
    },
    {
      title: messages.experience.experiences.internship.title,
      company: messages.experience.experiences.internship.company,
      location: messages.experience.experiences.internship.location,
      period: messages.experience.experiences.internship.period,
      type: "Internship",
      description: messages.experience.experiences.internship.description,
      highlights: messages.experience.experiences.internship.highlights,
      current: true,
    },
    {
      title: messages.experience.experiences.coordinator.title,
      company: messages.experience.experiences.coordinator.company,
      location: messages.experience.experiences.coordinator.location,
      period: messages.experience.experiences.coordinator.period,
      type: "Coordinator",
      description: messages.experience.experiences.coordinator.description,
      highlights: messages.experience.experiences.coordinator.highlights,
      current: false,
    },
    {
      title: messages.experience.experiences.teacher.title,
      company: messages.experience.experiences.teacher.company,
      location: messages.experience.experiences.teacher.location,
      period: messages.experience.experiences.teacher.period,
      type: "Full-time",
      description: messages.experience.experiences.teacher.description,
      highlights: messages.experience.experiences.teacher.highlights,
      current: false,
    },
    {
      title: messages.experience.experiences.student.title,
      company: messages.experience.experiences.student.company,
      location: messages.experience.experiences.student.location,
      period: messages.experience.experiences.student.period,
      type: "Education",
      description: messages.experience.experiences.student.description,
      highlights: messages.experience.experiences.student.highlights,
      current: false,
    },
  ];

  const jobExperiences = experiences.filter((e) => e.type !== "Education");
  const educationExperiences = experiences.filter(
    (e) => e.type === "Education"
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {messages.experience.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          {/* Toggle */}
          <motion.div variants={itemVariants} className="mb-10 flex justify-center">
            <div className="inline-flex items-center bg-slate-800/60 border border-purple-500/30 rounded-full p-1">
              <button
                type="button"
                aria-pressed={activeTab === "jobs"}
                onClick={() => setActiveTab("jobs")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  activeTab === "jobs"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                {messages.experience.jobsTitle}
              </button>
              <button
                type="button"
                aria-pressed={activeTab === "education"}
                onClick={() => setActiveTab("education")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  activeTab === "education"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                {messages.experience.educationTitle}
              </button>
            </div>
          </motion.div>

          {/* Jobs Timeline */}
          {activeTab === "jobs" && (
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-purple-400" />{" "}
              {messages.experience.jobsTitle}
            </h3>
            <div className="relative">
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600" />
              <div className="space-y-8 sm:space-y-12">
                {jobExperiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative flex items-start"
                  >
                    {/* Timeline Node */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`relative z-10 flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 ${
                        exp.current
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 border-purple-400"
                          : "bg-slate-800 border-purple-500/50"
                      }`}
                    >
                      <Briefcase
                        className={`w-3 h-3 sm:w-6 sm:h-6 ${
                          exp.current ? "text-white" : "text-purple-400"
                        }`}
                      />

                      {/* Pulse Effect for Current Position */}
                      {exp.current && (
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-purple-600 rounded-full"
                        />
                      )}
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="ml-4 sm:ml-8 flex-1 bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8"
                    >
                      {/* Header */}
                      <div className="flex flex-col space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-purple-400 font-semibold mb-2 text-sm sm:text-base">
                            <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>

                        <div className="flex flex-col space-y-1 sm:space-y-2">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            {exp.location}
                          </div>
                          {exp.current && (
                            <motion.div
                              animate={{ opacity: [1, 0.6, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-xs sm:text-sm font-medium w-fit"
                            >
                              {messages.experience.currentStatus}
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                          {messages.experience.keyResponsibilities}
                        </h4>
                        <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <motion.div
                              key={hIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: hIndex * 0.1 }}
                              className="flex items-center text-gray-300 text-sm"
                            >
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                              {highlight}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              {/* End Cap Icon */}
              <div className="absolute left-4 sm:left-8 -bottom-4 sm:-bottom-5 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 bg-slate-900 border-purple-500/60 shadow-lg">
                <Flag className="w-3 h-3 sm:w-6 sm:h-6 text-purple-400" />
              </div>
            </div>
          </motion.div>
          )}

          {/* Education Timeline */}
          {activeTab === "education" && (
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-purple-400" />{" "}
              {messages.experience.educationTitle}
            </h3>
            <div className="relative">
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600" />
              <div className="space-y-8 sm:space-y-12">
                {educationExperiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative flex items-start"
                  >
                    {/* Timeline Node */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`relative z-10 flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 ${"bg-slate-800 border-purple-500/50"}`}
                    >
                      <GraduationCap
                        className={`w-3 h-3 sm:w-6 sm:h-6 text-purple-400`}
                      />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="ml-4 sm:ml-8 flex-1 bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8"
                    >
                      {/* Header */}
                      <div className="flex flex-col space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-purple-400 font-semibold mb-2 text-sm sm:text-base">
                            <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>

                        <div className="flex flex-col space-y-1 sm:space-y-2">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                          Key Courses/Highlights:
                        </h4>
                        <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <motion.div
                              key={hIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: hIndex * 0.1 }}
                              className="flex items-center text-gray-300 text-sm"
                            >
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                              {highlight}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              {/* End Cap Icon */}
              <div className="absolute left-4 sm:left-8 -bottom-4 sm:-bottom-5 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 bg-slate-900 border-purple-500/60 shadow-lg">
                <Flag className="w-3 h-3 sm:w-6 sm:h-6 text-purple-400" />
              </div>
            </div>
          </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
