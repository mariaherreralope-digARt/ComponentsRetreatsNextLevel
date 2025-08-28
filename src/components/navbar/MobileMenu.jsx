import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";

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

      <div className="relative container text-center mx-auto px-6 space-y-3 z-10">
          <NavLinks
            navLinks={navLinks}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;

