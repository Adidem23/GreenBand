import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ShootingStars from "./ShootingStars";
import NavBar from "./Navbar";
import Note1 from "../../src/assets/images/Note_1.svg";
import Note2 from "../../src/assets/images/Note_2.png";
import Note3 from "../../src/assets/images/Note_3.png";
import Note4 from "../../src/assets/images/Note_4.png";
import HeroImg from "../../src/assets/images/Hero.png";
import { MoveRight, Guitar, Instagram, Youtube, Facebook } from "lucide-react";

const Hero = () => {
  const noteSVGs = [Note1, Note2, Note3, Note4];

  const paths = useMemo(() => {
    const generatedPaths = [];
    for (let i = 0; i < 20; i++) {
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

  const navigate = useNavigate();



  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="stars absolute inset-0" />
      </div>

      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={5}
        maxSpeed={15}
        minDelay={1000}
        maxDelay={3000}
        numStars={10}
      />
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={5}
        maxSpeed={15}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={5}
        maxSpeed={15}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={5}
        maxSpeed={15}
        minDelay={1000}
        maxDelay={3000}
      />

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
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
      <NavBar />
      <div className="w-full text-white py-20 lg:py-40 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
            <div className="flex gap-4 flex-col">
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-Kudryashev">
                  The Door To Your{" "}
                  <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Music Dreams
                  </span>
                </h1>
                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left font-serif font-thin">
                  “Step into a world where your musical aspirations come alive.
                  Whether you’re mastering an instrument through our expert-led
                  classes or discovering the perfect gear at our store, we make
                  every note of your journey seamless and inspiring.”
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <button onClick={(e)=>{e.preventDefault(); navigate("/form")}} className="px-6 py-3 text-white font-semibold font-serif text-sm flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#9E00FF] to-[#2EB9DF] hover:from-[#2EB9DF] hover:to-[#9E00FF] transition-transform transform hover:scale-105 shadow-lg">
                  Join Classes Now <MoveRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 text-white font-semibold font-serif text-sm flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-500 hover:to-purple-700 transition-transform transform hover:scale-105 shadow-lg">
                  Visit Store <Guitar className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-row gap-2 items-start mt-4">
                <span className="text-white font-serif text-lg">
                  Follow Us:
                </span>
                <div className="flex items-center gap-4">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 transition-transform transform hover:scale-110"
                  >
                    <Instagram className="w-7 h-7" />
                  </a>
                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 transition-transform transform hover:scale-110"
                  >
                    <Youtube className="w-7 h-7" />
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110"
                  >
                    <Facebook className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-muted aspect-square">
              <img
                src={HeroImg}
                alt="Hero"
                className="rounded-2xl w-full object-cover md:scale-110 md:translate-x-1/4 lg:scale-120 lg:translate-x-1/4"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stars {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #eee,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.5;
          }
          25% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          75% {
            opacity: 0.7;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
