import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 100;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop - offset;
          const bottom = top + el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderNavLinks = (mobile = false) => (
    <ul
      className={`flex ${
        mobile ? "flex-col space-y-4" : "space-x-6"
      } font-poppins text-base`}
    >
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={() => setIsOpen(false)}
            className={`cursor-pointer transition-colors duration-300 ${
              activeSection === item.id
                ? "text-blue-500 font-semibold"
                : "text-white hover:text-blue-400"
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
      {mobile && (
        <Link
          to="/hire-me"
          className="mt-4 font-poppins text-red-500 text-sm px-4 py-2 rounded-md border border-red-800 bg-red-900/20 hover:bg-red-800/30 shadow-md shadow-red-900/30 transition duration-200"
          onClick={() => setIsOpen(false)}
        >
          Hire Me
        </Link>
      )}
    </ul>
  );

  return (
    <nav className="bg-primary/80 backdrop-blur-md border-b border-white/10 text-white py-4 shadow-md fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold font-poppins cursor-pointer text-white"
        >
          <span>Its</span>
          <span>Meow.</span>
        </a>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {renderNavLinks(false)}
          <Link
            to="/hire-me"
            className="font-poppins text-red-500 text-sm px-4 py-2 rounded-md border border-red-800 bg-red-900/20 hover:bg-red-800/30 shadow-md shadow-red-900/30 transition duration-200"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-primary/80 backdrop-blur-md border-t border-white/10 text-white shadow-lg md:hidden z-50 px-6 py-4">
          {renderNavLinks(true)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
