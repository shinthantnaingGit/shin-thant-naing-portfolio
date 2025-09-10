
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

export default function Projects({ messages }) {
  const projects = [
    {
      title: "Full-Stack ERP Solution",
      description: "Complete inventory and invoice management with analytics dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Next.js", "React", "Laravel API", "Chart.js", "TailwindCSS", "SWR", "Zustand"],
      category: "Full-Stack",
      featured: true
    },
    {
      title: "Bakery POS Sale Screen",
      description: "Point of Sale interface for bakery operations with modern UI (Dashboard in development)",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      category: "Frontend"
    },
    {
      title: "Business Portfolio Website",
      description: "Animated portfolio site for trading company with custom branding and smooth interactions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tech: ["React", "Framer Motion", "CSS", "JavaScript"],
      category: "Web Design"
    },
    {
      title: "Invoice Generation Tool",
      description: "Simple invoice creation with modern UI and PDF export functionality",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      tech: ["HTML", "CSS", "Tailwind", "JavaScript DOM"],
      category: "Frontend"
    },
    {
      title: "Task Management App",
      description: "Clean todo application with local storage and drag & drop functionality",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["HTML", "CSS", "Tailwind", "JavaScript DOM"],
      category: "Frontend"
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {messages.projects.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
            <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Showcasing my journey from engineering concepts to digital solutions
            </p>
          </motion.div>

          {/* Featured Project */}
          <motion.div variants={itemVariants} className="mb-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <div key={index} className="relative overflow-hidden bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl">
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden order-1 lg:order-1">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 sm:h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-2">
                    <Badge variant="secondary" className="w-fit mb-4 bg-slate-700/50 text-purple-300">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
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

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {messages.projects.viewDemo}
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {messages.projects.sourceCode}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden"
              >
                {/* Image */}
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
                    <Badge variant="secondary" className="bg-slate-800/80 text-gray-200">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-slate-700/50 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-slate-700/50 text-gray-400">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 flex-1"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
