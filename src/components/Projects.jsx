import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";

export default function Projects({ messages }) {
  const projects = messages.projects.items;

  // Define variants for a single item.
  // We'll apply this to each card.
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title - We'll still animate this once */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {messages.projects.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Showcasing my journey from engineering concepts to digital solutions
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="mb-16 group"
            >
              <div className="relative overflow-hidden bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl">
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-0">
                  {/* Image and Content here (no changes needed) */}
                  <div className="relative overflow-hidden order-1 lg:order-1">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 sm:h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent group-hover:from-slate-900/60 transition-all duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-2">
                    <Badge
                      variant="secondary"
                      className="w-fit mb-4 bg-slate-700/50 text-purple-300"
                    >
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-purple-500/30 text-purple-300 hover:bg-purple-900/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full"
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          {messages.projects.viewDemo}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden"
              >
                {/* Image and Content here (no changes needed) */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-slate-800/80 text-gray-200"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-slate-700/50 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {messages.projects.viewDemo}
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
