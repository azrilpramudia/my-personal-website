import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projectsData";

const ProjectSection = () => {
  return (
    <section className="min-h-screen bg-secondary flex justify-center items-center p-8 py-36 font-poppins">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-400 text-lg">
            A collection of my recent work and experiments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-secondary rounded-2xl overflow-hidden border border-white/30 backdrop-blur-sm hover:border-white/50 transition-all duration-300 hover:transform hover:-translate-y-1 flex flex-col h-full shadow-lg shadow-white/10 hover:shadow-white/20 ring-1 ring-white/10 hover:ring-white/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 via-transparent to-transparent"></div>

                {/* Featured Badge on Image */}
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
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{project.period}</p>
                  <span className="inline-block bg-blue-400/20 text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
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

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 min-h-[40px]">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button className="flex-1 bg-secondary hover:bg-gray-600 border border-gray-200/20 text-white text-sm py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 min-h-[40px]">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
