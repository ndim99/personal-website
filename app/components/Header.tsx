"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest("#mobile-menu") &&
        !(event.target as HTMLElement).closest("#hamburger-menu")
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 w-full bg-gradient-to-r from-[#0f0f0f] via-[#081117] to-[#0f0f0f] z-20 ${
        menuOpen ? "" : "border-b border-[#333] shadow-md"
      } flex items-center`}
    >
      <nav className="container mx-auto px-6 2xl:py-4 lg:py-3 py-2.5 flex justify-between items-center">
        <Link href="#hero" className="lg:text-2xl text-xl font-bold text-white">
          My Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6 font-medium text-gray-200">
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
        <svg
          id="hamburger-menu"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-5 h-5 sm:hidden flex cursor-pointer"
          fill="#fff"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          menuOpen ? "block" : "hidden"
        } text-gray-200 font-medium sm:hidden bg-gradient-to-r from-[#0f0f0f] pb-2.5 via-[#081117] to-[#0f0f0f] px-6 absolute w-full top-12 left-0 shadow-md flex flex-col gap-2.5 border-b border-[#333]`}
      >
        <Link
          href="#experience"
          className="hover:text-white"
          onClick={() => setMenuOpen(false)}
        >
          Experience
        </Link>
        <Link
          href="#skills"
          className="hover:text-white"
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          href="#contact"
          className="hover:text-white"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
