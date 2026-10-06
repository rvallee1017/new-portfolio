"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-[70px]">
      <div>
        <p
          className="my-[10px] mx-[30px] text-[25px] font-semibold text-[#b81bf6]"
          title="Rachael-Vallee"
        >
          Rachael`s Portfolio
        </p>
      </div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-[30px] text-[#b81bf6] cursor-pointer block flex-end mr-7.5"
      >
        ☰
      </button>
      <ul
        className={`fixed top-17.5 left-0 right-0 bottom-0 z-50 bg-[#1c1c21] font-semibold text-[20px] text-[#b81bf6] transition-all duration-300 ease-in-out 
        ${menuOpen ? "flex flex-col items-center" : "hidden"}`}
      >
        <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center hover:text-white items-center relative overflow-hidden text-[#b81bf6] hover:text-white">
          <a href="/" data-section="/home">
            Home
          </a>
        </li>
        <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center hover:text-white items-center relative overflow-hidden text-[#b81bf6] hover:text-white">
          <a href="/about" data-section="/about">
            About
          </a>
        </li>
        <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center hover:text-white items-center relative overflow-hidden text-[#b81bf6] hover:text-white">
          <a href="/education" data-section="/education">
            Education & Skills
          </a>
        </li>
        <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center items-center relative overflow-hidden text-[#b81bf6] hover:text-white">
          <a href="/projects" data-section="/projects">
            Projects
          </a>
        </li>
        <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center hover:text-white items-center relative overflow-hidden text-[#b81bf6] hover:text-white">
          <a href="Resume.png" target="_blank">
            Resume
          </a>
        </li>
        <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center hover:text-white items-center relative overflow-hidden text-[#b81bf6] hover:text-white">
          <a href="/contact" data-section="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
