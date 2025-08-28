import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

const Logo = ({ setActiveLink, isMenuOpen }) => (
  <div className="z-30 flex justify-center">
    <a
      href="#inicio"
      onClick={() => setActiveLink("#inicio")}
      className="items-center mt-4 focus:outline-none focus:ring-0"
    >
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.8, delay: 0.5 }}
        src={isMenuOpen ? logo2 : logo}
        alt="Happy & Healthy"
        className="h-40 relative z-10"
      />
    </a>
  </div>
);

export default Logo;
