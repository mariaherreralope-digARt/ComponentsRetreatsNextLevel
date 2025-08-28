import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import NavMenuButton from "./NavMenuButton";
import MobileMenu from "./MobileMenu";
import ContactButton from "./ContactButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");
  const [scrolled, setScrolled] = useState(false);
  const [circlePos, setCirclePos] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!buttonRef.current || !containerRef.current) return;
    const btn = buttonRef.current.getBoundingClientRect();
    const parent = containerRef.current.getBoundingClientRect();
    setCirclePos({
      top: btn.top - parent.top + btn.height / 2,
      left: btn.left - parent.left + btn.width / 2,
    });
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#quiensoy", label: "Quien Soy" },
    { href: "#cursos", label: "Cursos" },
    { href: "#retiros", label: "Retiros" },
    { href: "#coaching", label: "Coaching" },
    { href: "#testimonios", label: "Testimonios" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        ref={containerRef}
        className="w-full mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-10 h-20 relative"
      >
        {/* Menu Button */}
        <div ref={buttonRef} className="z-30">
          <NavMenuButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>

        {/* Centered Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Logo setActiveLink={setActiveLink} isMenuOpen={isMenuOpen} />
        </div>

  {/* Contact Button */}
  <ContactButton isMenuOpen={isMenuOpen} />

        {/* Expanding Circle Background (anchored to button center) */}
        <motion.div
          initial={false}
          animate={{ scale: isMenuOpen ? 50 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            top: circlePos.top,
            left: circlePos.left,
            transform: "translate(-50%, -50%)",
          }}
          className="absolute w-12 h-12 rounded-full bg-btt z-10 pointer-events-none"
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        navLinks={navLinks}
      />
    </motion.nav>
  );
};

export default Navbar;