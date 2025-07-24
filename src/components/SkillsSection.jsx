import { useEffect } from "react";

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
  useEffect(() => {
    const canvas = document.getElementById("star-canvas");
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02,
    }));

    function animateStars() {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
      });
      requestAnimationFrame(animateStars);
    }

    animateStars();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-secondary text-white px-4 sm:px-6 py-12 flex flex-col items-center overflow-hidden">
      {/* Canvas background bintang */}
      <canvas
        id="star-canvas"
        className="absolute inset-0 w-full h-full z-0"
      ></canvas>

      {/* Konten utama */}
      <div className="relative z-10 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12 sm:mb-16 text-center font-poppins">
          Skills
        </h2>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-14">
          {/* Grid Skill */}
          <div className="w-full md:w-2/3 flex justify-center">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-6 gap-y-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div
                    className={`
                      w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-md border-2
                      ${skill.border} bg-[#1E1E1E] ${skill.shadow} shadow-md
                      hover:bg-[#2E2E2E] hover:shadow-lg hover:scale-105
                      transition duration-300 ease-in-out flex items-center justify-center
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
          <div className="hidden md:flex w-full md:w-1/3 justify-center md:justify-end">
            <img
              src={astronaut}
              alt="Astronaut"
              className="w-64 sm:w-72 md:w-80 lg:w-[28rem] object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
