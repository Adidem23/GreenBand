import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    closed: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const lineVariants = {
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <div className="p-2 bg-gray-50">
      <motion.nav
        className="bg-[#813405] p-4 flex justify-between text-gr items-center max-w-[50rem] mx-auto rounded-full"
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: "easeOut", type: "spring" }}
      >
        <div className="flex items-center gap-4 lg:hidden">
          <motion.div
            className="cursor-pointer z-50"
            onClick={toggleMenu}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <motion.div className="w-6 h-0.5 bg-white mb-1.5" variants={lineVariants} />
            <motion.div
              className="w-6 h-0.5 bg-white mb-1.5"
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
            />
            <motion.div className="w-6 h-0.5 bg-white" variants={lineVariants} transition={{ rotate: { delay: 0.2 } }} />
          </motion.div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <NavLink href="#home">About Us</NavLink>
          <p className="text-white text-lg">|</p>
          <NavLink href="#about">FAQs</NavLink>
        </div>

        <div className="text-[#00FF00] font-Pacifico font-extralight text-4xl lg:text-5xl p-1 tracking-wide leading-none -mt-3">
          GreenBand
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <NavLink href="#services">Contact</NavLink>
          <p className="text-white text-lg">|</p>
          <NavLink href="#contact">Join Now</NavLink>
        </div>

        <div className="lg:hidden w-6"></div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#813405] z-40 flex flex-col items-center justify-center lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <NavLink href="#home" onClick={toggleMenu}>About Us</NavLink>
            <NavLink href="#about" onClick={toggleMenu}>FAQs</NavLink>
            <NavLink href="#services" onClick={toggleMenu}>Contact</NavLink>
            <NavLink href="#contact" onClick={toggleMenu}>Join Now</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    className="text-white text-lg font-semibold relative group transition duration-300 hover:text-[#00FF00] my-2 active:scale-90 lg:group-hover:w-full"
    onClick={onClick}
  >
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00FF00] group-hover:w-full transition-all duration-300"></span>
  </a>
);

export default Navbar;