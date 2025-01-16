import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Facebook, Instagram, Youtube } from "lucide-react";
import FooterBg from "../assets/images/footer_bg.jpg";

const Footer = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  return (
    <div id="footer" ref={container} className="relative bg-gray-50">
      <div
        id="footer"
        ref={container}
        className="relative text-white border-none"
        style={{ backgroundImage: `url(${FooterBg})` }}
      >
        <div className="stars absolute inset-0"></div>
        <div className="h-[150px] md:h-[250px] overflow-hidden">
          <motion.div
            className="h-full flex justify-center items-center"
            style={{ y }}
          >
            <p className="text-[80px] md:text-[80px] lg:text-[250px] font-extrabold font-Kudryashev mt-4 text-transparent bg-gradient-to-b from-white to-gray-600 bg-clip-text">
              GreenBand
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-start p-4 md:p-8 font-serif gap-6 md:gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl md:text-2xl">Contact</p>
            <div className="flex flex-row gap-2">
              <p className="font-semibold text-lg md:text-xl">Email:</p>
              <a
                href="mailto:greenband@gmail.com"
                className="text-sm md:text-lg"
              >
                greenband@gmail.com
              </a>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-semibold text-lg md:text-xl">Phone:</p>
              <a href="tel:+918668344235" className="text-sm md:text-lg">
                +918668344235
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl md:text-2xl">Addresses 📍</p>
            <a
              href="https://google.com/maps"
              className="text-sm md:text-lg max-w-[30vh] md:max-w-[40vh]"
            >
              GreenBand Music Classes, Khandelwal Complex, Vazirabad, Nanded -
              431602
            </a>
            <a
              href="https://google.com/maps"
              className="text-sm md:text-lg max-w-[30vh] md:max-w-[40vh]"
            >
              GreenBand Music Studio, ITI Corner, Nanded - 431603
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl md:text-2xl">Services</p>
            <ul className="flex flex-col">
              <a href="#" className="text-sm md:text-lg text-gray-800 hover:underline">
                TUTOR
              </a>
              <a href="#" className="text-sm md:text-lg text-gray-800 hover:underline">
                STORE
              </a>
              <a href="#" className="text-sm md:text-lg text-gray-800 hover:underline">
                EVENT MENTORSHIP
              </a>
              <a href="#" className="text-sm md:text-lg text-gray-800 hover:underline">
                ORCHESTRA MANAGEMENT
              </a>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xl md:text-2xl">Socials</p>
            <ul className="flex flex-row gap-4">
              <a href="https://facebook.com" className="hover:text-[#1877F2]">
                <Facebook size={24} className="transition-colors duration-300" />
              </a>
              <a href="https://instagram.com" className="hover:text-[#C13584]">
                <Instagram size={24} className="transition-colors duration-300" />
              </a>
              <a href="https://youtube.com" className="hover:text-[#FF0000]">
                <Youtube size={24} className="transition-colors duration-300" />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;