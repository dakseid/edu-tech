import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
        <motion.h1
        className="hero-big"
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        >
            Showcase Your Mastery.<br />
            Get Connected.
        </motion.h1>
        <motion.p 
        className="hero-text"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
        >
           Create your profile, showcase your skills, and connect with leading employers in the tech industry.
        </motion.p>
        <motion.button
        className="hero-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        >
            Get Started →
        </motion.button>

        <div className="hero-image">
          <img src="/path/to/your/image.jpg" alt="Hero" />
          <div className="hero-image-overlay"></div>
          
        </div>
    </section>
    );
};

export default Hero;
