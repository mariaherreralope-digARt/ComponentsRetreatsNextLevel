import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import SocialIcons from "../SocialIcons";

const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  closed: { opacity: 0, y: 50, transition: { duration: 0.2 } },
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, activeLink, setActiveLink, navLinks }) => (
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-[url('/bkgMenu.png')] bg-cover bg-center border-t h-screen border-gray-100 py-28 z-10"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-white/85 z-0" />

        <motion.div
          className="relative container text-center mx-auto px-6 space-y-3 z-10"
          variants={containerVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <NavLinks
            navLinks={navLinks}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            onClick={() => setIsMenuOpen(false)}
          />
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
  <SocialIcons />
</div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;

