"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 w-full bg-gradient-to-r from-[#0f0f0f] via-[#0a131b] to-[#0f0f0f] z-20 ${
        menuOpen ? "" : "border-b border-[#333] shadow-md"
      } flex items-center`}
    >
      <nav className="container mx-auto px-6 2xl:py-4 lg:py-3 py-2.5 flex justify-between items-center">
        <h1 className="lg:text-2xl text-xl font-bold text-white">
          Nikola{"'"}s Portfolio
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6 font-medium text-gray-300">
          <Link href="#about" className="hover:text-white">
            About
          </Link>
          <Link href="#experience" className="hover:text-white">
            Experience
          </Link>
          <Link href="#skills" className="hover:text-white">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden pt-2">
          <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } text-gray-300 font-medium sm:hidden bg-gradient-to-r from-[#0f0f0f] via-[#0a131b] to-[#0f0f0f] py-2.5 px-6 absolute w-full top-12 left-0 shadow-md flex flex-col gap-2.5 border-b border-[#333]`}
      >
        <Link href="#about" className="hover:text-white">
          About
        </Link>

        <Link href="#experience" className="hover:text-white">
          Experience
        </Link>

        <Link href="#skills" className="hover:text-white">
          Skills
        </Link>

        <Link href="#contact" className="hover:text-white">
          Contact
        </Link>
      </div>
    </header>
  );
}
