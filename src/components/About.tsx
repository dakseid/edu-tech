import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
        id="about"
        className="py-20 bg-gray-900 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold mb-6">About EduTech</h2>
            <p className="max-w-2xl mx-auto text-lg">
                EduTech is a leading online education platform dedicated to providing high-quality courses in technology and related fields.
                 Our mission is to empower individuals with the skills they need to succeed in the digital age.
                 Whether you're a beginner looking to learn the basics or a professional aiming to advance your career, EduTech has something for everyone.
            </p>
        </motion.section>
    );
};

export default About;