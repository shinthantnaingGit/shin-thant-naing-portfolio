import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";

export default function Projects({ messages }) {
  const projects = messages.projects.items;

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
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
           {messages.projects.description}
          </p>
        </motion.div>

        {/* Featured Projects */}
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <motion.div
              key={`featured-${index}`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-16 group cursor-pointer"
            >
              {/* Desktop Image-First Design */}
              <div className="hidden lg:block relative overflow-hidden rounded-2xl shadow-2xl aspect-video lg:aspect-[21/9]">
                {/* Project Image */}
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />

                {/* Dark Overlay - Much darker on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/80 transition-all duration-500" />

                {/* Featured Badge */}
                <div className="absolute top-6 left-6">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm px-3 py-1">
                    {project.tag}
                  </Badge>
                </div>

                {/* Project Info Overlay - Shows on Hover */}
                <motion.div
                  variants={overlayVariants}
                  initial="hidden"
                  whileInView="hidden"
                  whileHover="visible"
                  className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-8 lg:p-12"
                >
                  <div className="space-y-4 max-w-md">
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-600/80 to-blue-600/80 backdrop-blur-sm text-white border-none"
                    >
                      {project.category}
                    </Badge>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-100 text-base lg:text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-white/40 text-white bg-white/10 backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="pt-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8"
                        >
                          <Eye className="w-5 h-5 mr-2" />
                          {messages.projects.viewDemo}
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Product Card - Image Top, Info Bottom */}
              <div className="lg:hidden bg-slate-800/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-64 object-cover object-center"
                  />
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                      Featured
                    </Badge>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-black/70 backdrop-blur-sm text-purple-300 border-purple-400/30 shadow-lg"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
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
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full"
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      {messages.projects.viewDemo}
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other Projects Grid - 2x2 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={`project-${index}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                {/* Desktop Image-First Design */}
                <div className="hidden lg:block relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                  {/* Project Image */}
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Dark Overlay - Much darker on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500" />

                  {/* Category Badge - Better visibility */}
                  <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <Badge
                      variant="secondary"
                      className="bg-black/60 backdrop-blur-sm text-white border-white/40 shadow-lg"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Info Overlay - Shows on Hover */}
                  <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    whileInView="hidden"
                    whileHover="visible"
                    className="absolute inset-0 flex flex-col justify-center items-center text-center p-6"
                  >
                    <div className="space-y-4 max-w-xs">
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-600/80 to-blue-600/80 backdrop-blur-sm text-white border-none"
                      >
                        {project.category}
                      </Badge>
                      
                      <h3 className="text-xl lg:text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-100 text-sm lg:text-base leading-relaxed">
                        {project.description.length > 120 
                          ? `${project.description.substring(0, 120)}...` 
                          : project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 justify-center">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-white/15 backdrop-blur-sm text-white border-white/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          {messages.projects.viewDemo}
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile Product Card - Image Top, Info Bottom */}
                <div className="lg:hidden bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover object-center"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-black/70 backdrop-blur-sm text-purple-300 border-purple-400/30 shadow-lg"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Info Section */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
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
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full"
                      >
                        <Eye className="w-5 h-5 mr-2" />
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