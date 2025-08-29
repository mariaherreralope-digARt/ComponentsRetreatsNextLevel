"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const containerVariants = {
  open: {
    transition: { staggerChildren: 0.15, staggerDirection: 1 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const iconVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  closed: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

export default function SocialIcons() {
  return (
    <motion.div
      variants={containerVariants}
      className="flex space-x-6 justify-center"
    >
      <motion.a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
      >
        <FaFacebookF className="w-6 h-6 text-slate-500/70 hover:text-blue-600 transition-colors" />
      </motion.a>

      <motion.a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
      >
        <FaInstagram className="w-6 h-6 text-slate-500/70 hover:text-pink-500 transition-colors" />
      </motion.a>

      <motion.a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
      >
        <FaLinkedinIn className="w-6 h-6 text-slate-500/70 hover:text-blue-500 transition-colors" />
      </motion.a>
    </motion.div>
  );
}
