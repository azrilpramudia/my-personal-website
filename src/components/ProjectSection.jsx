/* eslint-disable no-unused-vars */
import { useEffect, useMemo } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "../data/projectsData";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const ProjectSection = () => {
  const displayedProjects = projects.slice(0, 6);
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        hidden: {},
        show: (i = 0) => ({}),
      };
    }
    return {
      hidden: { opacity: 0, y: 16, scale: 0.98 },
      show: (i = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.45,
          ease: "easeOut",
          delay: i * 0.12,
        },
      }),
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const canvas = document.getElementById("project-section-star-canvas");
    const section = document.querySelector('[data-section="project-section"]');
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");

    const updateCanvasSize = () => {
      const width = section.offsetWidth;
      const height = section.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      return { width, height };
    };

    let width = 0;
    let height = 0;
    let stars = [];

    const initializeStars = () => {
      ({ width, height } = updateCanvasSize());
      stars = Array.from({ length: 150 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        delta: Math.random() * 0.02,
      }));
    };

    const drawStars = () => {
      stars.forEach((star) => {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      drawStars();
      requestAnimationFrame(animate);
    };

    setTimeout(() => {
      initializeStars();
      animate();
    }, 100);

    const handleResize = () => {
      initializeStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-secondary flex justify-center items-center p-6 sm:p-8 py-28 sm:py-36 font-poppins"
      data-section="project-section"
    >
      {/* Background Stars */}
      <canvas
        id="project-section-star-canvas"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="max-w-7xl w-full relative z-10">
        {/* Header tetap sederhana; bisa diberi fade ringan */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Projects
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            A collection of my recent work and experiments
          </p>
        </motion.div>

        {/* Grid projects: setiap kartu animasi satu per satu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="relative bg-secondary rounded-2xl overflow-hidden border border-white/30 backdrop-blur-sm hover:border-white/50 transition-all duration-300 hover:transform hover:-translate-y-1 flex flex-col h-full shadow-lg shadow-white/10 hover:shadow-white/20 ring-1 ring-white/10 hover:ring-white/20"
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
                <div className="mb-4">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
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
                      className="flex-1 bg-secondary hover:bg-gray-600 border border-gray-200/20 text-white 
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
        </div>

        {/* See More */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: prefersReducedMotion ? 0 : 0.1,
          }}
          className="w-full mt-8 flex justify-center"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-1 text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
          >
            See more
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
