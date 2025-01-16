import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/Logo.png";

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
    <div className="p-2 text-white bg-transparent">
      <motion.nav
        className="p-4 flex justify-between text-gr items-center max-w-[50rem] mx-auto"
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
          <NavLink href="#home">SERVICES</NavLink>
          <p className=" text-md">|</p>
          <NavLink href="#about">FAQ</NavLink>
        </div>
        <div>
          <p className=" font-Kudryashev text-4xl text-white">Green Band</p>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <NavLink href="#services">ABOUT US</NavLink>
          <p className="text-md">|</p>
          <NavLink href="#contact">CONTACT</NavLink>
        </div>

        <div className="lg:hidden w-6"></div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <NavLink href="#home" onClick={toggleMenu}>About Us</NavLink>
            <NavLink href="#about" onClick={toggleMenu}>FAQs</NavLink>
            <NavLink href="#services" onClick={toggleMenu}>SERVICES</NavLink>
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
    className="text-white text-md relative group transition duration-300 hover:text-[#00FF00] my-2 active:scale-90 lg:group-hover:w-full"
    onClick={onClick}
  >
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00FF00] group-hover:w-full transition-all duration-300"></span>
  </a>
);

export default Navbar;