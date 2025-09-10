
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, BookOpen, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Skills({ messages }) {
  const skillCategories = [
    {
      title: messages.skills.frontend,
      icon: Code2,
      color: "from-blue-600 to-purple-600",
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "Next.js", "SWR", "Zustand", "React Hook Form", "Framer Motion"]
    },
    {
      title: messages.skills.backend,
      icon: Server,
      color: "from-green-600 to-blue-600",
      skills: ["REST APIs (consumption)", "API Integration", "HTTP Methods"]
    },
    {
      title: messages.skills.learning,
      icon: BookOpen,
      color: "from-yellow-600 to-orange-600",
      skills: ["PHP (beginner)", "Laravel (beginner)", "TypeScript", "MySQL", "Backend Development"]
    },
    {
      title: messages.skills.engineering,
      icon: Wrench,
      color: "from-purple-600 to-pink-600",
      skills: ["Mechatronics", "Research", "Data Analysis", "Project Management", "Equipment Procurement"]
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      color: "from-orange-600 to-red-600",
      skills: ["Git", "GitHub", "GitLab", "Version Control", "CI/CD Pipeline", "Manual Deployment", "Auto Deployment", "Collaboration"]
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
              {messages.skills.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="relative overflow-hidden bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-full">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Header */}
                  <div className="relative z-10 mb-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { 
                            delay: skillIndex * 0.1,
                            duration: 0.3
                          }
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary"
                          className="bg-slate-700/50 text-gray-200 hover:bg-slate-600/50 border border-slate-600/50 px-3 py-1 text-sm font-medium transition-all duration-200"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Animation */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${category.color} rounded-full blur-xl opacity-30`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-10 left-10 w-4 h-4 bg-purple-400/30 rounded-full blur-sm"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-10 right-10 w-6 h-6 bg-blue-400/20 rounded-full blur-sm"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
