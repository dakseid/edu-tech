// src/sections/CTASection.tsx
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-8 md:px-20 bg-indigo-600 text-white text-center rounded-xl mx-8 md:mx-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Start Learning?
      </h2>
      <p className="text-lg mb-8">
        Join thousands of students building their future with us.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
      >
        Get Started
      </motion.button>
    </motion.section>
  );
}
