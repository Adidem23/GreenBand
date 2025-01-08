import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Lenis from "lenis";
import Lottie from "react-lottie-player";

import Animation1 from "../assets/Images/Animation_1.json";
import Animation2 from "../assets/Images/Animation_2.json";
import Animation3 from "../assets/Images/Animation_3.json";

function Learn() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  const blockVariants = {
    hidden: { scale: 0.8, y: 100, z: 20, transformOrigin: "center" },
    visible: {
      scale: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const textLines = [
    "“Discover the Art of Music at GreenBand:",
    "From Strings to Keys, Flutes to Beats,",
    "Vocals and Music Production”",
  ];

  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const lineAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeIn" },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeIn" },
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-12 bg-gray-50 font-Kudryashev">
      {/* Headline Section */}
      <motion.div
        className="text-center w-full max-w-[90%] mx-auto mb-12 "
        ref={headingRef}
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {textLines.map((line, index) => (
          <motion.div
            key={index}
            className="overflow-hidden mb-4 p-2"
            variants={lineAnimation}
          >
            <div className="inline-block">
              {line.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 font-bold inline-block mr-2 "
                  variants={wordAnimation}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Feature Blocks */}
      <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 w-full">
        {/* Block 1 */}
        <motion.div
          className="bg-gray-100 w-full max-w-[70rem] h-auto rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8"
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl lg:text-6xl font-semibold text-[#19323C] mb-4">
              String Instruments
            </h3>
            <p className="text-[#19323C] font-serif text-xl">
              Start your journey with expert training in acoustic guitar,
              electric guitar, and ukulele. Our structured curriculum covers
              everything from basic scales to advanced techniques, helping you
              develop your unique playing style.
            </p>
          </motion.div>
          <div className="flex justify-center items-center flex-1">
            <Lottie
              loop
              animationData={Animation1}
              play
              style={{ width: "100%", maxWidth: 350, height: "auto" }}
            />
          </div>
        </motion.div>

        {/* Block 2 */}
        <motion.div
          className="bg-gray-100 w-full max-w-[70rem] h-auto rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8"
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl lg:text-6xl font-semibold text-[#19323C] mb-4">
              Percussion & Melodic Instruments
            </h3>
            <p className="text-[#19323C] font-serif text-xl">
              Master the fundamentals of drums, keyboard, and flute. Learn
              rhythmic patterns on drums, explore classical to modern pieces on
              keyboard, and discover the art of melodic expression through
              flute.
            </p>
          </motion.div>
          <div className="flex justify-center items-center flex-1">
            <Lottie
              loop
              animationData={Animation2}
              play
              style={{ width: "100%", maxWidth: 350, height: "auto" }}
            />
          </div>
        </motion.div>

        {/* Block 3 */}
        <motion.div
          className="bg-gray-100 w-full max-w-[70rem] h-auto rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8"
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl lg:text-6xl font-semibold text-[#19323C] mb-4">
              Advanced Music Studies
            </h3>
            <p className="text-[#19323C] font-serif text-xl">
              Elevate your musical skills with vocal training focusing on proper
              techniques and breathing exercises. Learn modern music production
              using professional software, including mixing and arrangement
              techniques.
            </p>
          </motion.div>
          <div className="flex justify-center items-center flex-1">
            <Lottie
              loop
              animationData={Animation3}
              play
              style={{ width: "100%", maxWidth: 350, height: "auto" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Learn;