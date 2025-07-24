import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-primary text-white flex flex-col justify-center items-center px-4 md:px-0"
    >
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-60 h-60 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
      />

      {/* Intro Text */}
      <div className="">
        <p className="ml-2 text-gray-300 text-sm md:text-base font-poppins">
          Hello, I'm
        </p>
        <h1 className="text-3xl md:text-4xl font-bold font-poppins text-white">
          Azril Pramudia
        </h1>
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold font-poppins bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-2">
        Passionate Front-End Developer
      </h2>

      {/* Social Media Icons */}
      <div className="flex gap-4 mt-4 text-lg md:text-xl">
        <a href="#" className="hover:text-blue-400">
          <FaGithub />
        </a>
        <a href="#" className="hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="#" className="hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-blue-400">
          <FaFacebook />
        </a>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <a
          href="/resume.pdf"
          download
          className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-4 rounded-md font-poppins text-sm hover:bg-red-800/50 transition"
        >
          Download Resume
        </a>
        <a
          href="#projects"
          className="bg-white/10 border border-white text-white px-8 py-4 rounded-md font-poppins text-sm hover:bg-white/20 transition"
        >
          View Projects
        </a>
      </div>

      {/* Down Arrow */}
      <div className="mt-10 animate-bounce text-6xl">
        <span>↓</span>
      </div>
    </section>
  );
};

export default HomeSection;
