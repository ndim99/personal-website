"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const linkClass =
    "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 lg:text-lg text-base font-semibold transition duration-300";

  return (
    <section
      id="contact"
      className="2xl:py-20 lg:py-12 py-8 relative overflow-hidden bg-gradient-to-r from-[#0f0f0f] via-[#081117] to-[#0f0f0f]"
    >
      <div className="container mx-auto px-6 text-center flex flex-col 2xl:gap-8 lg:gap-7 gap-6 z-10 relative">
        {/* Title with animation when in view */}
        <motion.h2
          className="text-3xl lg:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        {/* Description with animation when in view */}
        <motion.p
          className="text-gray-200 text-base font-normal"
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
            href="https://github.com/ndim99"
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
