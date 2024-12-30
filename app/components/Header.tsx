"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-primary-bg shadow-md z-20">
      <nav className="container mx-auto px-6 sm:py-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          Nikola{"'"}s Portfolio
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex space-x-6">
          <li>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden">
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)} // toggle menu state
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
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
        } sm:hidden bg-primary-bg py-2.5 px-6 absolute w-full top-14 left-0 shadow-md flex flex-col gap-2.5`}
      >
        <Link href="#about" className="text-white hover:text-blue-400">
          About
        </Link>

        <Link href="#experience" className="text-white hover:text-blue-400">
          Experience
        </Link>

        <Link href="#skills" className="text-white hover:text-blue-400">
          Skills
        </Link>

        <Link href="#contact" className="text-white hover:text-blue-400">
          Contact
        </Link>
      </div>
    </header>
  );
}
