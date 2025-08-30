/* eslint-disable no-unused-vars */
import { experienceData } from "../data/experienceData";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const RING_SIZE = 24;
const CURSOR_OFFSET_VH = 0.28;

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const nodeRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const ringTopMV = useMotionValue(0);
  const ringTop = useSpring(ringTopMV, {
    stiffness: 400,
    damping: 40,
    mass: 0.7,
  });

  const [containerH, setContainerH] = useState(1);
  const lineScaleY = useTransform(ringTop, (v) =>
    clamp((v + RING_SIZE / 2) / containerH, 0, 1)
  );

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

  useEffect(() => {
    if (!containerRef.current) return;

    let raf = 0;
    const measure = () => {
      const cRect = containerRef.current.getBoundingClientRect();
      setContainerH(cRect.height || 1);

      const cursorInContainer =
        window.innerHeight * CURSOR_OFFSET_VH - cRect.top;

      const cursor = clamp(
        cursorInContainer,
        0,
        (cRect.height || 0) - RING_SIZE
      );

      let nearestIdx = 0;
      let nearestDist = Infinity;
      let nearestCenter = cursor;

      nodeRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const topInContainer = r.top - cRect.top;
        const center = topInContainer + RING_SIZE / 2;
        const d = Math.abs(center - (cursor + RING_SIZE / 2));
        if (d < nearestDist) {
          nearestDist = d;
          nearestIdx = i;
          nearestCenter = center - RING_SIZE / 2; // konversi ke top px
        }
      });

      ringTopMV.set(clamp(nearestCenter, 0, (cRect.height || 0) - RING_SIZE));
      setActiveIndex(nearestIdx);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [ringTopMV]);

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
        {/* Vertical Line (gradient + mask) */}
        <div
          className="pointer-events-none absolute left-4 top-0 h-full overflow-hidden w-[2px]
                     bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
                     from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Fill progress that is synchronized with the ring */}
          <motion.div
            className="absolute inset-x-0 top-0 w-[2px]
                       bg-gradient-to-t from-purple-500 via-blue-500 to-transparent
                       from-[0%] via-[10%] rounded-full origin-top"
            style={{ height: "100%", scaleY: lineScaleY }}
          />
        </div>

        {/* Active ring that moves following the scroll */}
        <motion.div
          className="absolute left-4 -translate-x-1/2 w-6 h-6 rounded-full
             bg-blue-600 shadow-lg shadow-blue-500/40
             flex items-center justify-center z-30"
          style={{ top: ringTop }}
          aria-hidden
        >
          <div className="h-4 w-4 rounded-full bg-blue-400 border border-blue-300" />
        </motion.div>

        <div className="flex flex-col gap-20">
          {experienceData.map((exp, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start relative"
              >
                {/* Anchor per item (reference for position count) */}
                <div
                  ref={(el) => (nodeRefs.current[index] = el)}
                  className="absolute left-4 top-3 -translate-x-1/2 w-6 h-6 rounded-full
             bg-neutral-500 dark:bg-neutral-700
             flex items-center justify-center z-20"
                >
                  <div
                    className="h-4 w-4 rounded-full
                  bg-neutral-300 dark:bg-neutral-600
                  border border-neutral-400 dark:border-neutral-500"
                  />
                </div>

                {/* Left (Desktop) */}
                <motion.div
                  className="md:col-span-5 relative z-10 hidden md:block pl-12"
                  animate={{
                    opacity: isActive ? 1 : 0.55,
                    y: isActive ? 0 : 6,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">
                    {exp.title}
                  </h3>
                  <p className="italic text-sm text-gray-400">{exp.company}</p>
                </motion.div>

                {/* Mobile Title */}
                <motion.div
                  className="md:hidden relative z-10 pl-12"
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    y: isActive ? 0 : 6,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <h3 className="text-base sm:text-lg font-bold">
                    {exp.title}
                  </h3>
                  <p className="italic text-sm text-gray-400">{exp.company}</p>
                </motion.div>

                {/* Right Box */}
                <motion.div
                  className="md:col-span-7 mt-4 md:mt-0 ml-12"
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    y: isActive ? 0 : 6,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="bg-secondary border border-gray-700 rounded-xl p-5 shadow-md shadow-white/30 hover:shadow-white/40 transition-shadow duration-300">
                    <p className="font-semibold mb-3 text-sm">{exp.date}</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      {exp.descriptions.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
