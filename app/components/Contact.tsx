"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const numbersAnimation = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: [0, 1, 0], y: [10, 0, -10] },
    transition: { duration: 2, delay, repeat: Infinity, ease: "easeInOut" },
  });

  const linkClass =
    "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-lg font-semibold transition duration-300";

  return (
    <section id="contact" className="sm:py-20 py-12 relative overflow-hidden">
      {/* Animated Numbers */}
      <div className="absolute inset-0 z-0 flex flex-wrap justify-center items-center">
        {Array.from({ length: 50 }, (_, i) => {
          const delay = Math.random() * 2; // Random delay between 0 and 2 seconds
          return (
            <motion.span
              key={i}
              className="text-gray-600 text-2xl font-mono"
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
      <div className="container mx-auto px-6 text-center flex flex-col gap-6 z-10 relative">
        {/* Title with animation when in view */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        {/* Description with animation when in view */}
        <motion.p
          className="text-gray-300 text-base font-normal"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out via Gmail, LinkedIn, or GitHub:
        </motion.p>
        {/* Links with animation when in view */}
        <motion.div
          className="flex justify-center items-center gap-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="mailto:nikola.dimovski666@gmail.com"
            target="_blank"
            className={linkClass}
          >
            Gmail
          </Link>
          <Link
            href="https://www.linkedin.com/in/ndim19/"
            target="_blank"
            className={linkClass}
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/ndim19"
            target="_blank"
            className={linkClass}
          >
            GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
