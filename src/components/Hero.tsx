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
            Get Started
        </motion.button>

    <div className="moving-container">
        <div className="hero-image">
            <div>
          <img src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" alt="Hero" />
            </div>
            <div>
          <img src="https://i.pinimg.com/1200x/46/4b/8a/464b8ac1969f591a2316c8fa1d534027.jpg" alt="Hero" />
            </div>
            <div>
          <img src="https://i.pinimg.com/736x/22/e5/9f/22e59f89cc596c374501270f83a1989f.jpg" alt="Hero" />
            </div>
            <div>
          <img src="https://i.pinimg.com/736x/79/c6/9b/79c69b4aa810869c13b2d26a86fce54f.jpg" alt="Hero" />
            </div>
            <div>
          <img src="https://i.pinimg.com/736x/eb/d3/f3/ebd3f3f26769de312f82f2c5c623023a.jpg" alt="Hero" />
            </div>
            <div>
          <img src="https://i.pinimg.com/736x/89/fc/9b/89fc9b3fd48616f62fd21ab3505b4185.jpg" alt="Hero" />
            </div>
        </div>
    </div>
    </section>
    );
};

export default Hero;
