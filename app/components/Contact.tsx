"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const numbersAnimation = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: [0, 1, 0], y: [10, 0, -10] },
    transition: { duration: 2, delay, repeat: Infinity, ease: "easeInOut" },
  });
  return (
    <>
      <section id="contact" className="sm:py-20 py-12 relative">
        {/* Animated Numbers */}
        <div className="absolute inset-0 z-0 flex flex-wrap justify-center items-center">
          {Array.from({ length: 50 }, (_, i) => {
            const delay = Math.random() * 2; // Random delay between 0 and 2 seconds
            return (
              <motion.span
                key={i}
                className="text-gray-500 text-2xl font-mono"
                {...numbersAnimation(delay)}
                style={{
                  position: "absolute",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              >
                {Math.random() > 0.5 ? "0" : "1"}
              </motion.span>
            );
          })}
        </div>
        <div className="container mx-auto px-6 text-center flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-400">
            Contact
          </h2>
          <p className="text-gray-300 text-base font-normal">
            Feel free to reach out via Gmail, LinkedIn, or GitHub:
          </p>
          <div className="flex justify-center items-center gap-6">
            <Link
              href="mailto:nikola.dimovski666@gmail.com"
              target="_blank"
              className="text-blue-400 hover:text-blue-500 flex items-center text-lg font-semibold"
            >
              Gmail
            </Link>
            <Link
              href="https://www.linkedin.com/in/ndim19/"
              target="_blank"
              className="text-blue-400 hover:text-blue-500 flex items-center text-lg font-semibold"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/ndim19"
              target="_blank"
              className="text-blue-400 hover:text-blue-500 flex items-center text-lg font-semibold"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <footer className="py-6 bg-primary-bg text-center text-gray-300">
        <p>&copy; 2024 Nikola. All Rights Reserved.</p>
      </footer>
    </>
  );
}
