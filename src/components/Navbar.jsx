import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <nav className="bg-primary text-white px-6 md:px-12 py-4 shadow-md flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold font-poppins cursor-pointer">
        <span className="text-white">Its</span>
        <span className="text-white">Meow.</span>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Items & Button (Desktop) */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-6 text-md font-poppins">
          {navItems.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer after:content-['']
                after:absolute after:left-0 after:bottom-1 after:w-0
                hover:after:w-full after:h-[2px] after:bg-blue-600
                after:transition-all after-duration-300 hover:text-blue-500"
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="font-poppins text-red-500 text-sm px-4 py-2 rounded-md border border-red-800 bg-red-900/20 hover:bg-red-800/30 shadow-md shadow-red-900/30 transition duration-200">
          Hire Me
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-primary text-white shadow-lg md:hidden z-50">
          <ul className="flex flex-col space-y-4 px-6 py-4 font-poppins text-base">
            {navItems.map((item) => (
              <li key={item} className="cursor-pointer hover:text-blue-400">
                {item}
              </li>
            ))}
            <button className="mt-4 font-poppins text-red-500 text-sm px-4 py-2 rounded-md border border-red-800 bg-red-900/20 hover:bg-red-800/30 shadow-md shadow-red-900/30 transition duration-200">
              Hire Me
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
