/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { projects } from "../data/projectsData";
import { motion, useReducedMotion } from "framer-motion";

const ProjectsPages = () => {
  const prefersReducedMotion = useReducedMotion();

  // Reset Scroll
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const containerVariants = prefersReducedMotion
    ? { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
    : {
        hidden: { opacity: 0, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.12 },
        },
      };

  const itemVariants = prefersReducedMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 8 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: "easeOut" },
        },
      };

  return (
    <section className="relative min-h-screen bg-primary flex justify-center items-center p-6 sm:p-8 py-28 sm:py-36 font-poppins">
      <div className="max-w-7xl w-full relative z-10">
        {/* Back to Home (fade) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
          className="w-full max-w-7xl mb-6 px-2 sm:px-0"
        >
          <motion.div variants={itemVariants}>
            <HashLink
              smooth
              to="/#projects"
              className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white transition group"
            >
              <ArrowLeft
                size={18}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              Back to Home
            </HashLink>
          </motion.div>
        </motion.div>

        {/* Header (Fade + Stagger)*/}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-white text-3xl md:text-4xl font-bold mb-4"
          >
            All My Projects
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg"
          >
            A collection of my recent work and experiments
          </motion.p>
        </motion.div>

        {/* Grid (stagger children) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="relative bg-primary rounded-2xl overflow-hidden border border-white/30 backdrop-blur-sm hover:border-white/50 transition-all duration-300 hover:transform hover:-translate-y-1 flex flex-col h-full shadow-lg shadow-white/10 hover:shadow-white/20 ring-1 ring-white/10 hover:ring-white/20"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 via-transparent to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                  {project.title ?? project.name ?? "Untitled Project"}
                </h3>

                <div className="mb-4">
                  {project.hasPeriod && (
                    <p className="text-gray-400 text-sm mb-3">
                      {project.period}
                    </p>
                  )}
                  {project.hasCategory && (
                    <span className="inline-block bg-blue-400/20 text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  )}
                </div>

                <p className="text-white text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-primary text-white text-xs px-2 py-1 rounded border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.tags.length > 4 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-primary text-white text-xs px-2 py-1 rounded border border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  {/* Live Demo and Code Links */}
                  {project.hasLiveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2.5 px-4 rounded-lg 
                 transition-colors duration-200 flex items-center justify-center gap-2 min-h-[40px]"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                  {/* Github Code */}
                  {project.hasGithub && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary hover:bg-gray-600 border border-gray-200/20 text-white 
                 text-sm py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center 
                 justify-center gap-2 min-h-[40px]"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPages;
