"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      className="sm:py-20 py-12 bg-gradient-to-r from-primary-bg via-secondary-bg to-primary-bg z-20"
      ref={ref}
    >
      <div className="container mx-auto px-6 flex flex-col sm:gap-8 gap-6 z-20">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-300 text-center max-w-2xl mx-auto text-base sm:text-lg"
        >
          I am a results-driven front-end engineer with over 4 years of
          experience creating scalable, high-performance web applications that
          prioritize user satisfaction. My approach involves balancing clean,
          maintainable code with innovative solutions that align with modern
          development practices. I have a strong track record of designing and
          implementing features that enhance application efficiency,
          scalability, and responsiveness, ensuring seamless performance even
          under high user loads. Passionate about crafting intuitive user
          experiences, I excel in collaborative environments that value
          adaptability, attention to detail, and continuous improvement.
        </motion.p>
      </div>
    </section>
  );
}
