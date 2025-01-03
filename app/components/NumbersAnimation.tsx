"use client";
import { motion } from "framer-motion";

export default function NumbersAnimation() {
  const numbersAnimation = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: [0, 1, 0], y: [10, 0, -10] },
    transition: { duration: 2, delay, repeat: Infinity, ease: "easeInOut" },
  });

  return (
    <div className="absolute inset-0 z-0 flex flex-wrap justify-center items-center overflow-hidden">
      {Array.from({ length: 50 }, (_, i) => {
        const delay = Math.random() * 2; // Random delay between 0 and 2 seconds
        const randomTop = Math.random() * 100; // Random position between 0% and 100%
        const randomLeft = Math.random() * 100; // Random position between 0% and 100%

        return (
          <motion.span
            key={i}
            className="text-gray-500 2xl:text-2xl lg:text-xl text-lg font-mono"
            {...numbersAnimation(delay)}
            style={{
              position: "absolute",
              top: `calc(${randomTop}% - 1rem)`, // Adjust top to keep within bounds
              left: `calc(${randomLeft}% - 1rem)`, // Adjust left to keep within bounds
              userSelect: "none",
            }}
          >
            {Math.random() > 0.5 ? "0" : "1"}
          </motion.span>
        );
      })}
    </div>
  );
}
