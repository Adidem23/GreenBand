import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Card = () => {
  const container = useRef(null);
  const containerSvg = useRef(null);
  const texts = useRef([]);

  // Scroll progress for cards
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Scroll progress for SVG text
  const { scrollYProgress: scrollYProgressSvg } = useScroll({
    target: containerSvg,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgressSvg.on("change", (progress) => {
      // Update the startOffset dynamically to make the text move continuously based on scroll
      texts.current.forEach((text, i) => {
        if (text) {
          text.setAttribute("startOffset", `${-40 + i * 40 + progress * 40}%`);
        }
      });
    });

    return () => unsubscribe();
  }, [scrollYProgressSvg]);

  const projects = [
    {
      title: "GreenBand Origin",
      description:
        "Founded in 2009, GreenBand made history as the first rock band from Nanded. The band started with six talented musicians who shared a passion for creating unique music that would resonate with their local audience.",
      images: [
        "/src/assets/images/Team_1.jpg",
        "/src/assets/images/Team_2.jpg",
      ],
      url: "https://example.com/project1",
      color: "#B1FF0A",
    },
    {
      title: "Performances & Musical Journey",
      description:
        "GreenBand quickly established themselves in the local music scene, performing at prestigious music competitions, youth festivals, and college events throughout the region.",
      images: [
        "/src/assets/images/Event_1.jpg",
        "/src/assets/images/Event_2.jpg",
      ],
      url: "https://example.com/project2",
      color: "#FEC5E5",
    },
    {
      title: "Awards & Recognition",
      description:
        "Through the years, GreenBand has earned numerous accolades in competitions and garnered significant media attention, with multiple features in local and regional newspapers. Their achievements have helped establish them as one of Nanded's most influential musical acts.",
      images: [
        "/src/assets/images/Award_1.jpg",
        "/src/assets/images/Mention_1.jpg",
        "/src/assets/images/Mention_2.jpg",
      ],
      url: "https://example.com/project3",
      color: "#FEFB62",
    },
    {
      title: "Musical Education & Mentorship",
      description:
        "Under the guidance of band member Sidhant Bidwai, GreenBand expanded its impact through music education. Through GreenBand Music Classes, Sidhant has successfully taught and inspired over 9,000 students, sharing his expertise and passion for music with the next generation.",
      images: [
        "/src/assets/images/Sid_1.jpg",
        "/src/assets/images/Class_3.jpg",
      ],
      url: "https://example.com/project3",
      color: "#BAF3FE",
    },
    {
      title: "Community Impact & Leadership",
      description:
        "Beyond teaching, Sidhant Bidwai has established himself as a respected mentor in the music community. Through mentoring at youth festivals and hosting regular jamming sessions, he creates opportunities for young musicians to grow and collaborate, strengthening the local music scene.",
      images: [
        "/src/assets/images/Mentor_1.jpg",
        "/src/assets/images/Class_2.jpg",
      ],
      url: "https://example.com/project3",
      color: "#F7B538",
    },
  ];

  return (
    <div>
      <div id="footer" ref={containerSvg} className=" mt-[20vh]">
        {/* SVG Section */}
        <svg
          viewBox="0 -50 1512 454"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="pt-[2rem]"
        >
          <path
            id="MyPath"
            fill="none"
            stroke="none"
            d="M0 445.51C0 445.51 293.5 -2.49995 756 1C1218.5 4.49995 1507.5 445.51 1507.5 445.51"
          />
          <g>
            {[...Array(5)].map((_, i) => (
              <text key={i} className="text-5xl lg:text-5xl font-serif">
                <textPath
                  href="#MyPath"
                  ref={(ref) => (texts.current[i] = ref)}
                  startOffset={`${i * 45}%`}
                >
                  About GreenBand and Mentor
                </textPath>
              </text>
            ))}
          </g>
        </svg>
      </div>

      <main ref={container} className="w-full ">
        {projects.map((project, i) => {
          const range = [i / projects.length, (i + 1) / projects.length];
          return (
            <ScrollCard
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={range}
            />
          );
        })}
      </main>
    </div>
  );
};

const ScrollCard = ({
  title,
  description,
  images,
  url,
  color,
  i,
  progress,
  range,
}) => {
  const container = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scale = useTransform(progress, range, [1, 0.9]); // Card scales from 1 to 0.9

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      ref={container}
      className="flex justify-center items-center h-[100vh] p-8 sticky top-0"
    >
      <motion.div
        className="relative p-8 flex flex-col justify-start items-center rounded-3xl h-[70vh] md:w-[60vh] overflow-hidden"
        style={{
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
          scale: scale,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="relative w-full h-[25vh] md:h-[60%] rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: "contain", // Ensures the entire image is visible
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 1, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -500 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="relative z-10 mt-4 w-full">
          <h2 className="text-4xl font-bold text-black font-Kudryashev">
            {title}
          </h2>
          <p className="text-black text-lg font-serif mt-2">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-blue-500 hover:underline transition-all"
          >
            Read Here
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
