"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-gray-200 transition-all">
        <div className="flex justify-between items-center px-[clamp(1.25rem,8%,7.5rem)] py-[18px]">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="text-[1.4rem] font-bold text-indigo-600"
          >
            Suchismita Chatterjee
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="relative text-[18px] text-gray-700 pb-1 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:h-[2px] after:w-0 after:bg-indigo-600 
                    after:transition-all after:duration-300
                    hover:after:w-full hover:text-indigo-600 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[22px] h-[2px] bg-gray-800 rounded transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-gray-800 rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-gray-800 rounded transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-[61px] left-0 w-full bg-white border-b border-gray-200 z-40 flex flex-col gap-0 transition-all duration-300 overflow-hidden md:hidden ${
          menuOpen ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              handleSmoothScroll(e, link.href);
              setMenuOpen(false);
            }}
            className="font-medium text-base px-[clamp(1.25rem,8%,7.5rem)] py-3 border-b border-gray-100 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
