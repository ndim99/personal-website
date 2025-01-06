"use client";
import { motion } from "framer-motion";
import ExperienceBox from "./ExperienceBox";

export default function Experience() {
  return (
    <section
      id="experience"
      className="2xl:py-20 lg:py-12 py-8 bg-gradient-to-r from-[#0f0f0f] via-[#0a131b] to-[#0f0f0f]"
    >
      {/* Animated Numbers
      <NumbersAnimation /> */}
      <div className="container mx-auto px-6 flex flex-col 2xl:gap-8 lg:gap-7 gap-6">
        {/* Experience Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-3xl lg:text-4xl font-bold text-center z-10"
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="2xl:space-y-8 lg:space-y-7 space-y-6 z-10">
          {/* Experience Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ExperienceBox
              link="https://tokensight.io/"
              company="TokenSight"
              duration="[April 2023 – November 2024]"
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
              duration="[October 2021 – January 2024]"
              link="https://x.com/ruby_exchange"
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
              duration="Over 1.5 years"
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
