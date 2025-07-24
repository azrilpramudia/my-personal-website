const Navbar = () => {
  return (
    <nav className="bg-primary text-white px-8 py-4 shawow-md flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-poppins font-bold cursor-pointer">
        <span className="text-white">Its</span>
        <span className="text-white">Meow.</span>
      </div>

      {/* Menu */}
      <ul className="flex space-x-6 text-md font-poppins">
        {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
          <li
            key={item}
            className="relative cursor-pointer after:content-['']
              after:absolute after:left-0 after:bottom-1 after:w-0
              hover:after:w-full after:h-[2px] after:bg-red-400
              after:transition-all after-duration-300 hover:text-red-400"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="font-poppins text-red-500 text-sm px-4 py-2 rounded-md border border-red-800 bg-red-900/20 hover:bg-red-800/30 shadow-md shadow-red-900/30 transition duration-200">
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
