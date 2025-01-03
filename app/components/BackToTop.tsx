"use client";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const newOpacity = Math.min(
        scrollPosition / (maxScroll - screenHeight),
        1
      );

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed lg:p-2.5 p-2 bottom-2 right-2 rounded-full text-white bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-lg transition-opacity duration-300 z-30`}
      style={{ opacity }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="lg:w-5 w-4 lg:h-5 h-4"
        fill="#fff"
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
    </button>
  );
}
