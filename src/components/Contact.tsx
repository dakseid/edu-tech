import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <form className="max-w-lg mx-auto flex flex-col gap-6">
        {["Name", "Email", "Message"].map((label) => (
          <motion.input
            key={label}
            type={label === "Message" ? "text" : "text"}
            placeholder={label}
            className="p-4 rounded-lg bg-gray-700 placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        ))}
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white font-medium transition"
          whileHover={{ scale: 1.05 }}
        >
          Submit
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
