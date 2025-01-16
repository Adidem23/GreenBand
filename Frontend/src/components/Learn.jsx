import { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";
import Lenis from "lenis";
import Lottie from "react-lottie-player";
import { CrossPatternCard } from "./CrossPatternCard";
import { cn } from "../lib/utils";
import { Phone, Mail, MessageCircle } from "lucide-react";

import Animation1 from "../../src/assets/images/Animation_1.json";
import Animation2 from "../../src/assets/images/Animation_2.json";
import Animation3 from "../../src/assets/images/Animation_3.json";

import Acoustic from "../../src/assets/images/Acoustic.png";
import Drums from "../../src/assets/images/Drums.png";
import Keyboard from "../../src/assets/images/Keyboard.png";
import Event1 from "../assets/images/Event_1.jpg"



function Learn() {
  const imagesData = [
    { name: "Guitar", src: Acoustic },
    { name: "Drums", src: Drums },
    { name: "Keyboard", src: Keyboard },
    { name: "Image 4", src: Acoustic },
    { name: "Image 5", src: Acoustic },
    { name: "Image 6", src: Acoustic },
    { name: "Image 7", src: Acoustic },
    { name: "Image 8", src: Acoustic },
  ];

  return (
    <div className="bg-black text-white font-Kudryashev">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 max-w-7xl mx-auto">
        {imagesData.map((image, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center py-6 relative group/feature dark:border-neutral-800 border-l border-b border-neutral-800",
              (index === 0 || index === 4) &&
                "lg:border-l dark:border-neutral-800",
              index < 4 && "lg:border-b dark:border-neutral-800"
            )}
          >
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-transparent to-neutral-900 pointer-events-none" />

            <div className="mb-4 relative z-10 px-4 w-full text-center">
              <img
                src={image.src}
                alt={image.name}
                className="w-3/4 h-auto rounded-lg  shadow-md transition-transform transform group-hover/feature:scale-105"
              />
            </div>

            <div className="text-lg font-bold mb-2 relative z-10 px-4 text-center">
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                {image.name}
              </span>
            </div>

            {/* <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-4 text-center">
              Explore our {image.name} and start your musical journey with
              expert training.
            </p> */}
          </div>
        ))}
      </div>

      <div className=" border"  >
        <ContactSection />
      </div>
    </div>
  );
}

export default Learn;

const ContactSection = () => (
  <div className=" py-10 px-5 text-center" style={{ backgroundImage: `url(${Event1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <h2 className="text-3xl font-semibold mb-6 text-blue-400">
      For Concerts or Music Events
    </h2>
    <p className="text-lg mb-6">Reach out to us now!</p>
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      <ContactButton
        href="https://wa.me/your-whatsapp-number"
        icon={<MessageCircle size={24} />}
        label="WhatsApp"
        className="text-green-400"
      />
      <ContactButton
        href="mailto:your-email@example.com"
        icon={<Mail size={24} />}
        label="Email"
        className="text-blue-400"
      />
      <ContactButton
        href="tel:+1234567890"
        icon={<Phone size={24} />}
        label="Phone"
        className="text-yellow-400"
      />
    </div>
  </div>
);

const ContactButton = ({ href, icon, label, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "flex items-center gap-3 px-6 py-3 text-lg font-medium border border-current rounded-lg transition-all transform hover:scale-105 hover:shadow-md",
      className
    )}
  >
    {icon}
    <span>{label}</span>
  </a>
);
