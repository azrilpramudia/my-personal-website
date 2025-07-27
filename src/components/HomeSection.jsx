import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-primary text-white flex flex-col justify-center items-center py-36 px-6 sm:px-8 md:px-16"
    >
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
      />

      {/* Intro Text */}
      <div>
        <p className="ml-2 text-gray-300 text-sm sm:text-base md:text-lg font-poppins">
          Hello, I'm
        </p>
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold font-poppins text-white">
          Azril Pramudia
        </h1>
      </div>

      {/* Subheadline */}
      <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold font-poppins bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-2">
        <Typewriter
          words={["Passionate Frontend Developer"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
        <span
          className="ml-1 animate-blink text-white"
          style={{ animationDelay: "200ms" }}
        >
          |
        </span>
      </h2>

      {/* Social Media Icons */}
      <div className="flex gap-4 mt-6 text-xl sm:text-2xl">
        <a
          href="https://github.com/azrilpramudia"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/azril-pramudia-anugrah-202a872a6"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/azrilpramudia"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.facebook.com/azril.pramudia.01"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a
          href="/My Personal CV.pdf"
          download
          className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 rounded-md font-poppins text-sm sm:text-base hover:bg-red-800/50 shadow-[0_0_15px_rgba(255,0,0,0.5)] transition"
        >
          Download Resume
        </a>
        <a
          href="#projects"
          className="bg-white/10 border border-white text-white px-8 py-3 rounded-md font-poppins text-sm sm:text-base hover:bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.4)] transition"
        >
          View Projects
        </a>
      </div>

      {/* Down Arrow */}
      <div className="mt-10 animate-bounce text-4xl sm:text-5xl md:text-6xl">
        <span>↓</span>
      </div>
    </section>
  );
};

export default HomeSection;
