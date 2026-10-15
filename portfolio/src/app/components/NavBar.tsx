"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const currentTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const toggleMenu = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);
    if (newState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <nav className="flex justify-between items-center h-[70px] px-6">
      <div>
        <p
          className="my-[10px] text-[25px] font-semibold"
          style={{ color: "var(--text-primary)" }}
          title="Rachael-Vallee"
        >
          Rachael`s Portfolio
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 rounded-full border border-current cursor-pointer transition-colors duration-200 flex items-center justify-center w-10 h-10"
          style={{ color: "var(--text-primary)" }}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>

        <button
          onClick={toggleMenu}
          className="text-[30px] cursor-pointer block flex-end"
          style={{ color: "var(--text-primary)" }}
        >
          ☰
        </button>
      </div>

      <ul
        className={`fixed inset-x-0 bottom-0 top-[70px] z-50 font-semibold text-[24px] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-8 
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none hidden"}`}
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <li className="w-fit py-3 px-6 flex justify-center items-center relative overflow-hidden" style={{ color: "var(--text-primary)" }}>
          <a href="/" data-section="/home" className="hover:opacity-80" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li className="w-fit py-3 px-6 flex justify-center items-center relative overflow-hidden" style={{ color: "var(--text-primary)" }}>
          <a href="/about" data-section="/about" className="hover:opacity-80" onClick={closeMenu}>
            About
          </a>
        </li>
        <li className="w-fit py-3 px-6 flex justify-center items-center relative overflow-hidden" style={{ color: "var(--text-primary)" }}>
          <a href="/education" data-section="/education" className="hover:opacity-80" onClick={closeMenu}>
            Education & Skills
          </a>
        </li>
        <li className="w-fit py-3 px-6 flex justify-center items-center relative overflow-hidden" style={{ color: "var(--text-primary)" }}>
          <a href="/projects" data-section="/projects" className="hover:opacity-80" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li className="w-fit py-3 px-6 flex justify-center items-center relative overflow-hidden" style={{ color: "var(--text-primary)" }}>
          <a href="Resume.png" target="_blank" className="hover:opacity-80" onClick={closeMenu}>
            Resume
          </a>
        </li>
        <li className="w-fit py-3 px-6 flex justify-center items-center relative overflow-hidden" style={{ color: "var(--text-primary)" }}>
          <a href="/contact" data-section="/contact" className="hover:opacity-80" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
