/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Mail, Linkedin, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const HireMe = () => {
  const prefersReducedMotion = useReducedMotion();

  // Reset scroll
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // bisa ganti "auto" -> "smooth"
  }, []);

  const containerVariants = prefersReducedMotion
    ? {
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }
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
    <section className="min-h-screen bg-primary text-white px-6 py-24 font-poppins flex flex-col items-center justify-center">
      {/* Back to Home */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
        className="w-full mb-8 pl-4 sm:pl-6"
      >
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white transition group"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Title + Subtitle */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Ready to Hire Me?
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-gray-300 max-w-2xl text-center mb-12"
        >
          I&apos;am{" "}
          <span className="text-purple-400 font-semibold">currently</span>{" "}
          looking for new opportunities, let&apos;s discuss, collaborate, and
          help with your project.
        </motion.p>
      </motion.div>

      {/* What I'm Looking For & Expertise */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-12"
      >
        {/* Left Section */}
        <motion.div
          variants={itemVariants}
          className="bg-primary border border-white rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            🎯 What I&apos;m Looking For
          </h2>
          <ul className="space-y-3 text-sm sm:text-base">
            <li>
              <strong>• Full-time Positions:</strong> Junior Frontend Developer
              roles
            </li>
            <li>
              <strong>• Freelance Projects:</strong> Short-term to long-term
              contracts
            </li>
            <li>
              <strong>• Remote Work:</strong> Open to remote work opportunities
            </li>
            <li>
              <strong>• Internship:</strong> I am open to internships with roles
              as a frontend developer &amp; web development
            </li>
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={itemVariants}
          className="bg-primary border border-white rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            🧠 My Expertise for Beginner Frontend Developer
          </h2>
          <div className="text-sm sm:text-base space-y-3">
            <div>
              <strong>Frontend Skills:</strong> HTML, CSS, JavaScript, React,
              &amp; TailwindCSS
            </div>
            <div>
              <strong>Experience:</strong> 3 months of experience in frontend
              using React, Vite, &amp; TailwindCSS tech stack.
            </div>
            <div>
              <strong>Learning:</strong> I am currently focusing on developing
              my skills by learning Tech Stack React, Vue.js, TailwindCSS, &amp;
              Express.
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={containerVariants}
        className="bg-primary border border-white rounded-lg p-6 shadow-lg w-full max-w-4xl text-center"
      >
        <motion.h3
          variants={itemVariants}
          className="text-xl font-semibold mb-3"
        >
          Let’s Start a Conversation
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-sm sm:text-base mb-6"
        >
          Let&apos;s Start a Conversation Whether you&apos;re a startup or a
          large corporation, I&apos;m ready to help and collaborate with you.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:azrilpramudia01@gmail.com"
            className="bg-primary border border-red-600 hover:bg-red-700 text-white text-sm px-6 py-2 rounded-md flex items-center justify-center gap-2 transition"
          >
            <Mail size={16} /> Email Me
          </a>
          <a
            href="https://linkedin.com/in/azril-pramudia-anugrah-202a872a6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary border border-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-md flex items-center justify-center gap-2 transition"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="/My Personal CV.pdf"
            download
            className="bg-primary border border-green-700 hover:bg-green-800 text-white text-sm px-6 py-2 rounded-md flex items-center justify-center gap-2 transition"
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HireMe;
