import html from "/html.png";
import css from "/css.png";
import js from "/js.png";
import node from "/nodejs.png";
import react from "/react.png";
import tailwind from "/tailwind.png";
import git from "/git.png";
import github from "/github.png";
import mysql from "/mysql.png";
import postman from "/postman.png";
import linux from "/linux.png";
import figma from "/figma.png";
import astronaut from "/astronaut.png";

const skills = [
  {
    src: html,
    label: "HTML",
    border: "border-orange-500",
    shadow: "shadow-orange-400",
  },
  {
    src: css,
    label: "CSS",
    border: "border-blue-500",
    shadow: "shadow-blue-400",
  },
  {
    src: js,
    label: "JavaScript",
    border: "border-yellow-400",
    shadow: "shadow-yellow-300",
  },
  {
    src: node,
    label: "Node.js",
    border: "border-green-500",
    shadow: "shadow-green-400",
  },
  {
    src: react,
    label: "React",
    border: "border-cyan-400",
    shadow: "shadow-cyan-300",
  },
  {
    src: tailwind,
    label: "Tailwind",
    border: "border-teal-400",
    shadow: "shadow-teal-300",
  },
  {
    src: git,
    label: "Git",
    border: "border-red-500",
    shadow: "shadow-red-400",
  },
  {
    src: github,
    label: "GitHub",
    border: "border-white",
    shadow: "shadow-white",
  },
  {
    src: mysql,
    label: "MySQL",
    border: "border-blue-300",
    shadow: "shadow-blue-200",
  },
  {
    src: postman,
    label: "Postman",
    border: "border-orange-400",
    shadow: "shadow-orange-300",
  },
  {
    src: linux,
    label: "Linux",
    border: "border-gray-400",
    shadow: "shadow-gray-300",
  },
  {
    src: figma,
    label: "Figma",
    border: "border-green-400",
    shadow: "shadow-green-300",
  },
];

const SkillsSection = () => {
  return (
    <section className="min-h-screen bg-secondary text-white px-6 py-12 flex flex-col items-center">
      {/* Heading Skills */}
      <h2 className="text-4xl font-bold text-white mb-16 text-center font-poppins">
        Skills
      </h2>

      {/* Konten Grid + Astronot */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Grid Skill */}
        <div className="w-full md:w-2/3 flex justify-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div
                  className={`
      w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-md border-2 
      ${skill.border} bg-[#1E1E1E]
      ${skill.shadow} shadow-md
      hover:bg-[#2E2E2E] hover:shadow-lg
      hover:scale-105 transition duration-300 ease-in-out
      flex items-center justify-center
    `}
                >
                  <img
                    src={skill.src}
                    alt={skill.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-2 text-sm text-white font-medium">
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Astronot */}
        <div className="w-full md:w-1/3 flex justify-center pr-24">
          <img
            src={astronaut}
            alt="Astronaut"
            className="w-full object-contain animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
