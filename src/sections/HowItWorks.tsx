// src/sections/CoursesSection.tsx
import { motion } from "framer-motion";
import { FiLogIn, FiSearch, FiUpload } from "react-icons/fi";

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works-section">
      <motion.h2
        className="how-it-works-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>How It Works</h1>

        <div className="steps-container">

        <div className="line">
        <div className="underline">
        <div className="step-number"><h2>01</h2></div>
        <div className="step-content">
          <span className="step-icon"><FiLogIn size={42} color="#5885e6ff" /></span>
          <div className="step-text">
        <h3 className="step-title">Sign Up and create Account</h3>
        <p>Fill out your details and showcase your skills.</p>
          </div>
        </div>
        </div>

        <div className="underline">
        
        <div className="step-content">
          <span className="step-icon"><FiUpload size={42} color="#5885e6ff" /></span>
          <div className="step-text">
        <h3 className="step-title">Upload Your Portfolio</h3>
        <p>Add your resume, videos, and more.</p>
          </div>
        </div>
        <div className="step-number"><h2>02</h2></div>
        </div>

        <div className="underline">
        <div className="step-number"><h2>03</h2></div>
        <div className="step-content">
          <span className="step-icon"><FiSearch size={42} color="#5885e6ff" /></span>
          <div className="step-text">
        <h3 className="step-title">Get Discovered</h3>
        <p>Let employers find and contact you.</p>
          </div>
        </div>
        </div>
        </div>

        <div className="image-container">
          <img className="step-image-1" src="https://i.pinimg.com/736x/80/92/99/809299bf52ca03861b2fd373a1ef8676.jpg" alt="How it works" />
          <img className="step-image-2" src="https://i.pinimg.com/1200x/f7/bf/bd/f7bfbd2790aac0718e9f4ce075f876e7.jpg" alt="How it works" />
        </div>
        </div>
      </motion.h2>
    </section>
  );
};

export default HowItWorks;