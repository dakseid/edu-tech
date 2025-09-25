import { motion } from "framer-motion";
import { FaAirbnb, FaAmazon, FaApple, FaAppStore, FaDraft2Digital, FaFutbol, FaGoogle, FaMicrosoft, FaSkull, FaStripe, FaTiktok, FaTwitch, FaTwitter } from "react-icons/fa";
import { Fa42Group, FaX } from "react-icons/fa6";


const About = () => {
  return (
    <motion.section
      id="about"
      className="about-reveal"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="about-title">
        We are happy to work with incredible clients
      </h2>
      <p className="about-description">
        Fortune 500 companies and renowned global brands place their trust in
        our products, solutions and bespoke software development services.
      </p>

      <div className="about-icons">
        <div className="icon-row">
        <FaApple size={50} color="#333" />
        <FaGoogle size={50} color="#4285F4" />
        <FaMicrosoft size={50} color="#F25022" />
        <FaAmazon size={50} color="#FF9900" />
        <FaTiktok size={50} color="#000000ff" />
        <FaSkull size={50} color="#000000" />
        <FaTwitter size={50} color="#1DA1F2" />
        <FaTwitch size={50} color="#9146FF" />
        </div>
        <div className="icon-row2">
        <FaDraft2Digital size={50} color="#FF6F61" />
        <FaStripe size={50} color="#008CDD" />
        <FaAirbnb size={50} color="#ff0e16ff" />
        <Fa42Group size={50} color="#000000" />
        <FaAppStore size={50} color="#0A84FF" />
        <FaX size={50} color="#000000" />
        <FaFutbol size={50} color="#000000ff" />
        </div>

        <div className="icon-row3">
        <FaAmazon size={50} color="#FF9900" />
        <FaGoogle size={50} color="#4285F4" />
        <FaMicrosoft size={50} color="#071ff7ff" />
        <FaApple size={50} color="#333" />
        <FaTiktok size={50} color="#000000ff" />
        <FaSkull size={50} color="#000000" />
        </div>



      </div>

    </motion.section>


  );
};

export default About;
