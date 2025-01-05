"use client";
import { motion } from "framer-motion";
import NumbersAnimation from "./NumbersAnimation";

export default function Hero() {
  const scrollToExperienceSection = () => {
    const section = document.getElementById("experience");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSkillsSection = () => {
    const section = document.getElementById("skills");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="hero"
      className="flex items-center justify-center text-center text-gray-100 relative overflow-hidden px-6 sm:px-12 lg:px-16 min-h-screen"
    >
      {/* Animated Numbers */}
      <NumbersAnimation />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col 2xl:gap-8 lg:gap-7 gap-6 2xl:py-20 lg:py-12 py-8"
      >
        <motion.img
          src="/nikola.png"
          alt="Nikola's profile picture"
          className="rounded-full shadow-lg mx-auto w-40 h-40 lg:w-48 lg:h-48 border-2 border-white 2xl:mt-0 lg:mt-10 mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          Hello, I am Nikola
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-base lg:text-lg 2xl:text-xl text-gray-300"
        >
          I{"’"}m an intermediate frontend engineer with a strong blockchain
          background. With 4 years of experience, I{"’"}ve contributed to many
          projects, primarily in the crypto/web3 domain. Most of my professional
          journey has revolved around DEX platforms, where I{"’"}ve implemented
          numerous features across the stack. My previous professional
          experiences include TokenSight and Ruby Exchange. <br /> My expertise
          lies in crafting beautiful and functional UIs using React and Next.js,
          though I{"’"}m well-versed in a wide range of frontend libraries and
          frameworks, including web3 libraries. Beyond development, I{"’"}m
          deeply committed to continuous growth. I am deeply involved in the
          crypto space, staying ahead of trends and consistently advancing my
          skills to push boundaries as an engineer. <br /> I consider myself a
          team player who thrives in startup environments, and I{"’"}m driven by
          the desire to grow personally while building products that people
          genuinely love to use.
        </motion.p>
        <motion.div className="sm:flex hidden items-center justify-center sm:flex-row flex-col 2xl:gap-8 lg:gap-7 gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToExperienceSection}
            className="w-[150px] py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 text-base font-medium"
          >
            My Experience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToSkillsSection}
            className="w-[150px] py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 text-base font-medium"
          >
            My Skills
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
