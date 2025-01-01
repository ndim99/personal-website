"use client";
import { motion } from "framer-motion";
import ExperienceBox from "./ExperienceBox";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const numbersAnimation = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: [0, 1, 0], y: [10, 0, -10] },
    transition: { duration: 2, delay, repeat: Infinity, ease: "easeInOut" },
  });
  return (
    <section
      id="experience"
      className="h-screen sm:py-20 py-12 relative"
      ref={ref}
    >
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
      <div className="container mx-auto px-6 flex flex-col sm:gap-8 gap-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          Experience
        </motion.h2>

        <div className="space-y-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ExperienceBox
              company="TokenSight"
              description="TokenSight is a decentralized trading platform supporting multiple blockchain ecosystems. As a front-end engineer, I was responsible for designing and implementing performant and intuitive user interfaces, leveraging React, Next.js, TypeScript, and web3 technologies. My work focused on creating scalable solutions for complex trading workflows and delivering seamless user experiences while integrating the necessary tools to achieve platform functionality."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <ExperienceBox
              company="Ruby.Exchange"
              description="Ruby.Exchange is a decentralized trading platform built on the SKALE Network. I contributed to the development of a highly interactive and visually appealing interface, focusing on providing a smooth and efficient trading experience for crypto users. I utilized technologies such as React, Next.js, TypeScript, and blockchain-specific tools optimized for SKALE."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
