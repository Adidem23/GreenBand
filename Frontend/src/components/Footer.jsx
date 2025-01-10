import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  return (
    <div id="footer" ref={container} className="relative bg-gray-50">
      <div className="h-[150px] md:h-[250px] overflow-hidden">
        <motion.div
          className="h-full flex justify-center items-center"
          style={{ y }}
        >
          <p className="text-[80px] md:text-[80px] lg:text-[250px] font-extrabold font-Kudryashev mt-4">
            GreenBand
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-start p-4 md:p-8 font-serif gap-4 md:gap-0">
        <div className="flex flex-col gap-2">
          <p className="text-black font-bold text-xl md:text-2xl">Contact</p>
          <div className="flex flex-row gap-2">
            <p className="font-semibold text-lg md:text-xl">Email:</p>
            <a href="mailto:langconnect@help.com" className="text-sm md:text-lg">
              greenband@gmail.com
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold text-lg md:text-xl">Phone:</p>
            <a href="tel:+918282828282" className="text-sm md:text-lg">
              +918668344235
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-black font-bold text-xl md:text-2xl">Address 📍</p>
          <a
            href="googlemaps.com"
            className="text-sm md:text-lg max-w-[30vh] md:max-w-[40vh]"
          >
            GreenBand Music Classes, Khandelwal Complex, Vazirabad, Nanded -
            431602
          </a>
        </div>

        <div>
          <p className="text-black font-bold text-xl md:text-2xl">Services</p>
          <ul className="flex flex-col">
            <a
              href="#"
              className="text-sm md:text-lg text-gray-800 hover:underline"
            >
              TUTOR
            </a>
            <a
              href="#"
              className="text-sm md:text-lg text-gray-800 hover:underline"
            >
              STORE
            </a>
            <a
              href="#"
              className="text-sm md:text-lg text-gray-800 hover:underline"
            >
              EVENT MENTORSHIP
            </a>
            <a
              href="#"
              className="text-sm md:text-lg text-gray-800 hover:underline"
            >
              ORCHESTRA MANAGEMENT
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;