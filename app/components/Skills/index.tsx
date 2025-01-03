"use client";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="sm:py-20 py-12 bg-gradient-to-r from-[#0f0f0f] via-[#0a131b] to-[#0f0f0f] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col sm:gap-12 gap-8 z-20 relative">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Skill Boxes */}
          {[
            {
              title: "Front-End Development",
              description: "React, Next.js, TypeScript, JavaScript",
            },
            {
              title: "Web3 Technologies",
              description:
                "Integration with blockchain ecosystems, libraries for dApps functionality",
            },
            {
              title: "Styling",
              description: "Tailwind CSS, CSS Modules, Responsive Design",
            },
            {
              title: "API Development",
              description: "RESTful APIs, GraphQL, Data Fetching, SSR, CSR",
            },
            {
              title: "Performance Optimization",
              description: "Code Splitting, Lazy Loading, State Management",
            },
            {
              title: "Tools & Methodologies",
              description:
                "Git, Agile Development, Unit and Integration Testing, CI/CD",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-[#0f0f0f] border border-[#333] shadow-xl backdrop-blur-md transition-all duration-300"
              variants={fadeInVariant}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                {skill.title}
              </h3>
              <p className="text-gray-300 mt-3 text-base sm:text-lg">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
