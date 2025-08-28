import { motion } from "framer-motion";
import { useModal } from "../ModalContext";
import GlobalModal from "../GlobalModal";
import { useContext } from "react";

const ContactButton = ({ isMenuOpen }) => {
  const { openModal } = useModal();

  // Button base styles depending on menu state
  const baseClass = isMenuOpen
    ? "bg-btt text-white"
    : "bg-white text-btt ";

  return (
    <div className="flex-1 flex justify-end z-30">
      <motion.button
        onClick={openModal}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover="hover"
        variants={{}}
        className={`text-sm px-6 py-2.5 group font-light uppercase relative overflow-hidden transition-colors duration-300 ${baseClass}`}
      >
        {/* background animation layer */}
        <motion.span
          className={`absolute inset-0 ${isMenuOpen ? 'bg-white group-hover:border group-hover:border-btt' : 'bg-btt'}`}
          initial={isMenuOpen ? { x: "100%" } : { x: "-100%" }}
          variants={{
            hover: isMenuOpen
              ? { x: 0, transition: { duration: 0.4, ease: "easeInOut" } }
              : { x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
          }}
        />
        {/* button text */}
        <span className={`relative z-10 transition-colors duration-300 ${isMenuOpen ? 'text-white  group-hover:text-btt' : 'text-black group-hover:text-white'}`}>
          Contact
        </span>
      </motion.button>
    </div>
  );
};

export default ContactButton;
