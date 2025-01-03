"use client";
import { motion } from "framer-motion";
import ExperienceBox from "./ExperienceBox";

export default function Experience() {
  const numbersAnimation = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: [0, 1, 0], y: [10, 0, -10] },
    transition: { duration: 2, delay, repeat: Infinity, ease: "easeInOut" },
  });

  return (
    <section id="experience" className="sm:py-20 py-12 relative">
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
      <div className="container mx-auto px-6 flex flex-col sm:gap-8 gap-6">
        {/* Experience Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-center"
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="sm:space-y-8 space-y-6 z-10">
          {/* Experience Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ExperienceBox
              link=""
              company="TokenSight"
              description="TokenSight is a decentralized trading platform supporting multiple blockchain ecosystems. As a front-end engineer, I was responsible for designing and implementing performant and intuitive user interfaces, leveraging React, Next.js, TypeScript, and web3 technologies. My work focused on creating scalable solutions for complex trading workflows and delivering seamless user experiences while integrating the necessary tools to achieve platform functionality."
            />
          </motion.div>

          {/* Experience Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <ExperienceBox
              company="Ruby.Exchange"
              link=""
              description="Ruby.Exchange is a decentralized trading platform built on the SKALE Network. I contributed to the development of a highly interactive and visually appealing interface, focusing on providing a smooth and efficient trading experience for crypto users. I utilized technologies such as React, Next.js, TypeScript, and blockchain-specific tools optimized for SKALE."
            />
          </motion.div>

          {/* Experience Box 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <ExperienceBox
              freelance
              link=""
              company="Freelance Front-End Developer"
              description="As a freelance front-end developer, I worked on a variety of projects ranging from landing pages to full web applications. 
              My expertise in React, Next.js, TypeScript, and Tailwind CSS allowed me to build highly interactive and user-friendly interfaces for clients in various industries. 
              I collaborated with clients to define requirements, translate them into technical solutions, and deliver projects on time while ensuring a high standard of code quality."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
