"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest("button, a, input, textarea, select")) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePos.x - 15,
        y: mousePos.y - 15,
        scale: isHoveringInteractive ? 0 : 1, // hide on buttons/links
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className="fixed top-0 left-0 w-12 h-12 rounded-full border border-slate-300 pointer-events-none z-[9999]"
    />
  );
}
