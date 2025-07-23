const Navbar = () => {
  return (
    <nav className="bg-[#1E2124] text-white px-8 py-4 shawow-md flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer">
        <span className="text-white">Its</span>
        <span className="text-white">Meow.</span>
      </div>

      {/* Menu */}
      <ul className="flex space-x-6 text-sm font-medium">
        <li className="hover:text-red-400 cursor-pointer">Home</li>
        <li className="hover:text-red-400 cursor-pointer">About</li>
        <li className="hover:text-red-400 cursor-pointer">Project</li>
        <li className="hover:text-red-400 cursor-pointer">Experience</li>
        <li className="hover:text-red-400 cursor-pointer">Contact</li>
      </ul>

      {/* Button */}
      <button className="bg-red-600 hover:bg-red-400 text-white text-sm px-4 py-2 rounded-md transition duration-200 cursor-pointer">
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
