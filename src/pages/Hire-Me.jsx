import { Mail, Linkedin, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <section className="min-h-screen bg-primary text-white px-6 py-24 font-poppins flex flex-col items-center justify-center">
      <div className="w-full mb-8 pl-4 sm:pl-6">
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
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
        Ready to Hire Me?
      </h1>
      <p className="text-gray-300 max-w-2xl text-center mb-12">
        I'am <span className="text-purple-400 font-semibold">currently</span>{" "}
        looking for new opportunities, let's discuss, collaborate, and help with
        your project.
      </p>

      {/* Sections: What I'm Looking For & Expertise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-12">
        {/* Left Section */}
        <div className="bg-primary border border-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            🎯 What I'm Looking For
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
              as a frontend developer & web development
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-primary border border-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            🧠 My Expertise for Beginner Frontend Developer
          </h2>
          <div className="text-sm sm:text-base space-y-3">
            <div>
              <strong>Frontend Skills:</strong> HTML, CSS, JavaScript, React, &
              TailwindCSS
            </div>
            <div>
              <strong>Experience:</strong> 3 months of experience in frontend
              using React, Vite, & TailwindCSS tech stack.
            </div>
            <div>
              <strong>Learning:</strong> I am currently focusing on developing
              my skills by learning Tech Stack React, Vue.js, TailwindCSS, &
              Express.
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary border border-white rounded-lg p-6 shadow-lg w-full max-w-4xl text-center">
        <h3 className="text-xl font-semibold mb-3">
          Let’s Start a Conversation
        </h3>
        <p className="text-gray-300 text-sm sm:text-base mb-6">
          Let's Start a Conversation Whether you're a startup or a large
          corporation, I'm ready to help and collaborate with you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:you@example.com"
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
        </div>
      </div>
    </section>
  );
};

export default HireMe;
