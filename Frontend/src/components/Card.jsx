// import { useRef, useState, useEffect } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";

// import Team1 from '../../src/assets/images/Team_1.jpg'
// import Team2 from '../../src/assets/images/Team_2.jpg'
// import Event1 from '../../src/assets/images/Event_1.jpg'
// import Event2 from '../../src/assets/images/Event_2.jpg'
// import Award1 from '../../src/assets/images/Award_1.jpg'
// import Mention1 from '../../src/assets/images/Mention_1.jpg'
// import Mention2 from '../../src/assets/images/Mention_2.jpg'
// import Sid1 from '../../src/assets/images/Sid_1.jpg'
// import Class3 from '../../src/assets/images/Class_3.jpg'
// import Mentor1 from '../../src/assets/images/Mentor_1.jpg'
// import Class2 from '../../src/assets/images/Class_2.jpg'


// const Card = () => {

//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//   const projects = [
//     {
//       title: "GreenBand Origin",
//       description:
//         "Founded in 2009, GreenBand made history as the first rock band from Nanded. The band started with six talented musicians who shared a passion for creating unique music that would resonate with their local audience.",
//       images: [
//         Team1,
//         Team2,
//       ],
//       url: "https://example.com/project1",
//       color: "#B1FF0A",
//     },
//     {
//       title: "Performances & Musical Journey",
//       description:
//         "GreenBand quickly established themselves in the local music scene, performing at prestigious music competitions, youth festivals, and college events throughout the region.",
//       images: [
//         Event1,
//         Event2,
//       ],
//       url: "https://example.com/project2",
//       color: "#FEC5E5",
//     },
//     {
//       title: "Awards & Recognition",
//       description:
//         "Through the years, GreenBand has earned numerous accolades in competitions and garnered significant media attention, with multiple features in local and regional newspapers. Their achievements have helped establish them as one of Nanded's most influential musical acts.",
//       images: [
//         Award1,
//         Mention1,
//         Mention2,
//       ],
//       url: "https://example.com/project3",
//       color: "#FEFB62",
//     },
//     {
//       title: "Musical Education & Mentorship",
//       description:
//         "Under the guidance of band member Sidhant Bidwai, GreenBand expanded its impact through music education. Through GreenBand Music Classes, Sidhant has successfully taught and inspired over 9,000 students, sharing his expertise and passion for music with the next generation.",
//       images: [
//         Sid1,
//         Class3,
//       ],
//       url: "https://example.com/project3",
//       color: "#BAF3FE",
//     },
//     {
//       title: "Community Impact & Leadership",
//       description:
//         "Beyond teaching, Sidhant Bidwai has established himself as a respected mentor in the music community. Through mentoring at youth festivals and hosting regular jamming sessions, he creates opportunities for young musicians to grow and collaborate, strengthening the local music scene.",
//       images: [
//         Mentor1,
//         Class2,
//       ],
//       url: "https://example.com/project3",
//       color: "#F7B538",
//     },
//   ];

//   return (
//     <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-8">
//           {projects.map((project, index) => (
//             <Card project={project} key={index} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const ScrollCard = ({
//   title,
//   description,
//   images,
//   url,
//   color,
//   i,
//   progress,
//   range,
// }) => {
//   const container = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const scale = useTransform(progress, range, [1, 0.9]); // Card scales from 1 to 0.9

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div
//       ref={container}
//       className="flex justify-center items-center h-[100vh] p-8 sticky top-0"
//     >
//       <motion.div
//         className="relative p-8 flex flex-col justify-start items-center rounded-3xl h-[70vh] md:w-[60vh] overflow-hidden"
//         style={{
//           backgroundColor: color,
//           top: `calc(-5vh + ${i * 25}px)`,
//           scale: scale,
//         }}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentImageIndex}
//             className="relative w-full h-[25vh] md:h-[60%] rounded-lg overflow-hidden"
//             style={{
//               backgroundImage: `url(${images[currentImageIndex]})`,
//               backgroundSize: "contain", // Ensures the entire image is visible
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "center",
//             }}
//             initial={{ opacity: 1, x: 500 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 1, x: -500 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//           />
//         </AnimatePresence>
//         <div className="relative z-10 mt-4 w-full">
//           <h2 className="text-4xl font-bold text-black font-Kudryashev">
//             {title}
//           </h2>
//           <p className="text-black text-lg font-serif mt-2">{description}</p>
//           <a
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-4 text-blue-500 hover:underline transition-all"
//           >
//             Read Here
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Card;

import React from 'react'

function Card() {
  return (
    <div>Card</div>
  )
}

export default Card
