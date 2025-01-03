"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const numbersAnimation = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: [0, 1, 0], y: [10, 0, -10] },
    transition: { duration: 2, delay, repeat: Infinity, ease: "easeInOut" },
  });

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-center text-gray-100 relative overflow-hidden px-6 sm:px-12 lg:px-16"
    >
      {/* Animated Numbers */}
      <div className="absolute inset-1 z-0 flex flex-wrap justify-center items-center">
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

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl mx-auto flex flex-col sm:gap-8 gap-6"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          Hello, I{"'"}m Nikola
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-300"
        >
          As a Front-End Engineer, I specialize in building high-performance,
          scalable, and highly functional web applications. I focus on
          delivering seamless user experiences through intuitive design,
          efficient code, and a strong emphasis on performance optimization. My
          work ensures robust functionality, making applications both reliable
          and easy to use. I thrive in collaborative environments where creative
          solutions, quality, and innovative approaches drive the success of
          every project.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToSection}
          className="mx-auto mt-4 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150"
        >
          Discover More
        </motion.button>
      </motion.div>
    </section>
  );
}
