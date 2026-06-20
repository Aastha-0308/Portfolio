import { useState } from "react";

function Navbar() {
  return (
    <div className="navbar fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl sm:px-1 md:px-2 py-2 flex justify-between items-center">
      <div className="h-14 p-2 flex items-center gap-4 w-fit bg-white/30 backdrop-blur-md rounded-full">
        <a
          href="#hero"
          className="size-11 rounded-full bg-pink-50 flex items-center justify-center shadow-md"
        >
          🌸
        </a>

        <div className="flex items-center gap-1 bg-pink-50 rounded-full px-2 py-1 shadow-sm">
          <a
            href="#about"
            className="text-pink-300 px-5 py-1 rounded-full hover:bg-pink-400 hover:text-white transition-all"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-pink-300 px-5 py-1 rounded-full hover:bg-pink-400 hover:text-white transition-all"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-pink-300 px-5 py-1 rounded-full hover:bg-pink-400 hover:text-white transition-all"
          >
            Skills
          </a>
        </div>
      </div>

      <a
        href="#contact"
        className="hidden md:flex w-48 h-11 items-center justify-center bg-pink-400 text-white border-2 border-pink-200 shadow-sm rounded-bl-2xl rounded-tr-2xl hover:scale-105 transition-all"
      >
        Contact
      </a>
    </div>
  );
}

export default Navbar;
