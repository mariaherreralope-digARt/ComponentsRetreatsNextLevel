import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";


import { useModal } from "./ModalContext";
import GlobalModal from "./GlobalModal"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { openModal } = useModal();

  const navLinks = [
    { href: "#quiensoy", label: "Quien Soy" },
    { href: "#cursos", label: "Cursos" },
    { href: "#retiros", label: "Retiros" },
    { href: "#coaching", label: "Coaching" },
    { href: "#testimonios", label: "Testimonios" },
  ];

  const handleOpenContactForm = () => {
    openModal(<GlobalModal />);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      >
        <div className="w-full bg-transparent mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-10 h-20">

           {/* Sidebar button */}
        <div className="z-30 flex-1">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-8 h-8 bg-btt hover:bg-white hover:border hover:border-btt hover:text-btt text-white rounded-full p-2 transition duration-300" />
            ) : (
              <HiMenu className="w-8 h-8 bg-btt hover:bg-white hover:border hover:border-btt hover:text-btt text-white rounded-full p-2 transition duration-300" />
            )}
          </button>
        </div>

          {/* Logo */}
        <div className="z-30 flex flex-1 justify-center">
          <a
            href="#inicio"
            onClick={() => setActiveLink("#inicio")}
            className=" items-center mt-4 focus:outline-none focus:ring-0"
          >
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.8, delay: 0.5 }}
              src={logo}
              alt="Happy & Healthy"
              className="h-40 relative z-10"
            />
          </a>
        </div>
        

          {/* Contact button  */}
          <div className="flex-1 flex justify-end z-30">
          <motion.button
            onClick={handleOpenContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className=" bg-btt text-sm text-white px-6 py-2.5 hover:bg-white hover:text-btt hover:border hover:border-btt font-light uppercase transition-all"
          >
            Contacta
          </motion.button>
          </div>

         
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-slate-100 border-t h-screen border-gray-100 py-28 scroll-margin-top: 80px z-10"
            >
              <div className="container text-center mx-auto px-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`block text-sm font-medium font-body py-2 ${
                      activeLink === link.href
                        ? "text-slate-700 hover:primary"
                        : "text-btt hover:primary"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
                {/* <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleOpenContactForm();
                  }}
                  className="w-auto bg-btt font-body text-white px-6 py-2.5 hover:bg-white hover:border hover:border-btt hover:text-btt font-medium transition-all"
                >
                  Contáctanos
                </button> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
