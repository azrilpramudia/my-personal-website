import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* HR di atas footer */}
      <hr className="border-gray-600" />

      <footer className="bg-gradient-to-b from-secondary to bg-primary text-white px-6 md:px-20 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / Deskripsi */}
          <div>
            <h2 className="text-2xl font-bold mb-4">ItsMeow.</h2>
            <p className="text-sm text-gray-300">
              Frontend passion to upgrade skills and develop projects using
              modern technology.
            </p>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 text-2xl text-gray-300">
              <a
                href="https://github.com/azrilpramudia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/azril-pramudia-anugrah-202a872a6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/azrilpramudia"
                className="hover:text-blue-400 transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.facebook.com/azril.pramudia.01"
                className="hover:text-blue-400 transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="my-8 border-gray-600" />
        <p className="text-center text-sm text-gray-400">
          © 2025 Azril Pramudia. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
