import { motion } from "framer-motion";
import { useModal } from "../ModalContext";
import GlobalModal from "../GlobalModal";

const ContactButton = () => {
  const { openModal } = useModal();

  return (
    <div className="flex-1 flex justify-end z-30">
      <motion.button
        onClick={openModal}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="bg-btt text-sm text-white px-6 py-2.5 hover:bg-white hover:text-btt hover:border hover:border-btt font-light uppercase transition-all"
      >
        Contacta
      </motion.button>
    </div>
  );
};

export default ContactButton;
