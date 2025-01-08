import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Note1 from "../assets/images/Note_1.svg";
import Note2 from "../assets/images/Note_2.svg";
import Note3 from "../assets/images/Note_3.svg";

const Hero = () => {
  const text =
    "“The Symphony of Excellence: Composing Talent, Orchestrating Dreams, Conducting Success.”";
  const words = useMemo(() => text.split(/(\s+)/), [text]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.016, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        mass: 0.2,
      },
    },
  };

  const waveVariants = {
    animate: {
      x: [0, -1440],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "easeInOut",
        },
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 2,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const buttonTextVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2,
        duration: 0.5,
        type:"spring",
      },
    },
  };

  const noteSVGs = [Note1, Note2, Note3];

  const paths = useMemo(() => {
    const generatedPaths = [];
    for (let i = 0; i < 10; i++) {
      const startX = Math.random() * 1440;
      const startY = Math.random() * 800;
      const controlX1 = Math.random() * 1440;
      const controlY1 = Math.random() * 800;
      const controlX2 = Math.random() * 1440;
      const controlY2 = Math.random() * 800;
      const endX = Math.random() * 1440;
      const endY = Math.random() * 800;

      generatedPaths.push(
        `M${startX},${startY} C${controlX1},${controlY1},${controlX2},${controlY2},${endX},${endY}`
      );
    }
    return generatedPaths;
  }, []);

  const notesData = useMemo(() => {
    return [...Array(15)].map(() => ({
      svg: noteSVGs[Math.floor(Math.random() * noteSVGs.length)],
      pathIndex: Math.floor(Math.random() * paths.length),
      startOffset: `${Math.random() * 100}%`,
      duration: 6 + Math.random() * 6,
      direction: Math.random() > 0.5 ? "reverse" : "normal",
    }));
  }, [noteSVGs, paths]);

  return (
    <div className=" relative overflow-hidden min-h-screen bg-gray-50">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={`wave-${index}`}
            className="absolute top-0 left-0 w-[200%] h-[15rem] sm:h-[30rem]"
            variants={waveVariants}
            animate="animate"
            style={{
              top: `${index * 20}%`,
            }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 2880 320"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke={`rgba(129,52,5,${0.3 - index * 0.1})`}
                strokeWidth="1"
                d="M0,160 C640,300,840,0,1480,160 C2120,300,2240,0,2880,160"
              />
            </svg>
          </motion.div>
        ))}

        {notesData.map((note, index) => (
          <motion.div
            key={`note-${index}`}
            className="absolute w-6 h-6 sm:w-8 sm:h-8"
            initial={{ offsetDistance: note.startOffset }}
            animate={{
              offsetDistance:
                note.direction === "normal" ? ["0%", "100%"] : ["100%", "0%"],
              transition: {
                duration: note.duration,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              offsetPath: `path('${paths[note.pathIndex]}')`,
              WebkitOffsetPath: `path('${paths[note.pathIndex]}')`,
            }}
          >
            <img
              src={note.svg}
              alt={`Musical Note ${index}`}
              className="w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center font-semibold"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <p className="font-Kudryashev text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#19323C] leading-tight">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className={`inline-block whitespace-pre ${
                  word.includes("Talent,")
                    ? "text-[#F2545B]"
                    : word.includes("Dreams,")
                    ? "text-[#813405]"
                    : word.includes("Success.")
                    ? "text-[#00FF00]"
                    : ""
                }`}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={child}
                    className="inline-block relative overflow-hidden pb-1.5"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </p>
        </motion.div>

        <motion.button
          className="mt-8 px-4 py-2 font-serif rounded-full sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-[#F2545B] text-white font-semibold text-sm sm:text-base lg:text-lg shadow-md hover:shadow-lg focus:outline-none transition-all"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.span
            className="block"
            variants={buttonTextVariants}
            initial="hidden"
            animate="visible"
          >
            Join Classes Now
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
