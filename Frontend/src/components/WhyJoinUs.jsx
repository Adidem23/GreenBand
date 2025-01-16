import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Import the images
import Team1 from "../../src/assets/images/Team_1.jpg";
import Team2 from "../../src/assets/images/Team_2.jpg";
import Event1 from "../../src/assets/images/Event_1.jpg";
import Event2 from "../../src/assets/images/Event_2.jpg";
import Award1 from "../../src/assets/images/Award_1.jpg";
import Mention1 from "../../src/assets/images/Mention_1.jpg";
import Mention2 from "../../src/assets/images/Mention_2.jpg";
import Sid1 from "../../src/assets/images/Sid_1.jpg";
import Class3 from "../../src/assets/images/Class_3.jpg";
import Mentor1 from "../../src/assets/images/Mentor_1.jpg";
import Class2 from "../../src/assets/images/Class_2.jpg";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  const projects = [
    {
      title: "GreenBand Origin",
      description:
        "Founded in 2009, GreenBand made history as the first rock band from Nanded. The band started with six talented musicians who shared a passion for creating unique music that would resonate with their local audience.",
      images: [Team1, Team2],
      url: "https://example.com/project1",
    },
    {
      title: "Performances & Musical Journey",
      description:
        "GreenBand quickly established themselves in the local music scene, performing at prestigious music competitions, youth festivals, and college events throughout the region.",
      images: [Event1, Event2],
      url: "https://example.com/project2",
    },
    {
      title: "Awards & Recognition",
      description:
        "Through the years, GreenBand has earned numerous accolades in competitions and garnered significant media attention, with multiple features in local and regional newspapers.",
      images: [Award1, Mention1, Mention2],
      url: "https://example.com/project3",
    },
    {
      title: "Musical Education & Mentorship",
      description:
        "Under the guidance of band member Sidhant Bidwai, GreenBand expanded its impact through music education. Sidhant has successfully taught over 9,000 students.",
      images: [Sid1, Class3],
      url: "https://example.com/project4",
    },
    {
      title: "Community Impact & Leadership",
      description:
        "Beyond teaching, Sidhant Bidwai has established himself as a respected mentor in the music community. Hosting jamming sessions strengthens the local music scene.",
      images: [Mentor1, Class2],
      url: "https://example.com/project5",
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {projects.map((project, index) => (
            <Card project={project} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % project.images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="group relative h-[350px] sm:h-[400px] lg:h-[450px] w-[350px] sm:w-[400px] lg:w-[450px] overflow-hidden rounded-xl bg-black">
      <div
        style={{
          backgroundImage: `url(${project.images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-all duration-500"
      ></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-400 hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const WhyJoinUs = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col h-auto items-center justify-center py-12 px-4 sm:px-6 md:px-8">
        <p className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          “The Journey of GreenBand”
        </p>
        <p className="text-center mt-4 text-lg sm:text-xl md:text-2xl text-white font-serif font-thin">
          Shaping Future Musicians with Passion and Commitment
        </p>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

export default WhyJoinUs;
