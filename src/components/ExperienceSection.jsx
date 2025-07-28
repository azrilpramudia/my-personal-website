/* eslint-disable no-unused-vars */
import { experienceData } from "../data/experienceData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const canvas = document.getElementById("exp-star-canvas");
    const section = canvas?.parentElement;
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
      id="experience"
      className="relative bg-secondary text-white py-20 px-4 sm:px-6 md:px-10 font-poppins overflow-hidden"
    >
      {/* Background Stars */}
      <canvas
        id="exp-star-canvas"
        className="absolute inset-0 w-full h-full z-0"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 z-10 relative">
        Experience
      </h1>

      <div ref={containerRef} className="max-w-6xl mx-auto relative z-10">
        {/* Animated Vertical Line */}
        <motion.div
          className="absolute left-4 top-0 w-0.5 bg-blue-500 origin-top"
          style={{ height: "100%", scaleY }}
        />

        <div className="flex flex-col gap-20">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start relative"
            >
              {/* Bullet */}
              <div className="absolute left-4 top-3 transform -translate-x-1/2 w-6 h-6 rounded-full bg-secondary border border-blue-500 flex items-center justify-center z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              </div>

              {/* Left Side - Desktop */}
              <div className="md:col-span-5 relative z-10 hidden md:block pl-12">
                <h3 className="text-base sm:text-lg md:text-xl font-bold">
                  {exp.title}
                </h3>
                <p className="italic text-sm text-gray-400">{exp.company}</p>
              </div>

              {/* Mobile Title */}
              <div className="md:hidden relative z-10 pl-12">
                <h3 className="text-base sm:text-lg font-bold">{exp.title}</h3>
                <p className="italic text-sm text-gray-400">{exp.company}</p>
              </div>

              {/* Right Side Box */}
              <div className="md:col-span-7 mt-4 md:mt-0 ml-12">
                <div className="bg-secondary border border-gray-700 rounded-xl p-5 shadow-md shadow-white/30 hover:shadow-white/40 transition-shadow duration-300">
                  <p className="font-semibold mb-3 text-sm">{exp.date}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                    {exp.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
