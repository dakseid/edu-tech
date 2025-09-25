import { motion } from "framer-motion";
import { FaAirbnb, FaAmazon, FaApple, FaAppStore, FaBehance, FaDraft2Digital, FaFutbol, FaGoogle, FaMicrosoft, FaSkull, FaStripe, FaTiktok, FaTwitch, FaTwitter } from "react-icons/fa";
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

      <div className="about-icons" style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2rem" }}>
        <div className="icon-row">
        <FaApple size={40} color="#333" />
        <FaGoogle size={40} color="#4285F4" />
        <FaMicrosoft size={40} color="#F25022" />
        <FaAmazon size={40} color="#FF9900" />
        <FaTiktok size={40} color="#E82127" />
        <FaSkull size={40} color="#000000" />
        <FaTwitter size={40} color="#1DA1F2" />
        <FaTwitch size={40} color="#9146FF" />
        </div>
        <div className="icon-row2">
        <FaDraft2Digital size={40} color="#FF6F61" />
        <FaStripe size={40} color="#008CDD" />
        <FaAirbnb size={40} color="#FF5A5F" />
        <Fa42Group size={40} color="#000000" />
        <FaAppStore size={40} color="#0A84FF" />
        <FaX size={40} color="#000000" />
        <FaFutbol size={40} color="#FF4500" />
        <FaBehance size={40} color="#1769FF" />
        </div>

        <div className="icon-row3">
        <FaAmazon size={40} color="#FF9900" />
        <FaGoogle size={40} color="#4285F4" />
        <FaMicrosoft size={40} color="#F25022" />
        <FaApple size={40} color="#333" />
        <FaTiktok size={40} color="#E82127" />
        <FaSkull size={40} color="#000000" />
        <FaTwitter size={40} color="#1DA1F2" />
        <FaTwitch size={40} color="#9146FF" />
        </div>



      </div>

    </motion.section>


  );
};

export default About;
