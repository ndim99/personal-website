"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="2xl:py-20 lg:py-12 py-8 bg-gradient-to-r from-[#0f0f0f] via-[#0a131b] to-[#0f0f0f]"
    >
      <div className="container mx-auto px-6 flex flex-col 2xl:gap-8 lg:gap-7 gap-6">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-center max-w-3xl mx-auto text-base lg:text-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
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
