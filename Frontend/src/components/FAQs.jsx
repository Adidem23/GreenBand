import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What levels of guitar lessons do you offer?",
      answer:
        "We offer lessons for beginners, intermediate players, and advanced guitarists.",
    },
    {
      question: "How can I enroll in a guitar class?",
      answer:
        "You can enroll by clicking the 'Join Classes Now' button and filling out the registration form.",
    },
    {
      question: "Do I need my own guitar for the lessons?",
      answer:
        "Yes, it's recommended to have your own guitar for practice. However, we can guide you in selecting the right one.",
    },
    {
      question: "Can I return a product?",
      answer: "Yes, you can return products within 30 days of purchase.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to multiple countries worldwide.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking link provided in your email.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="h-fit p-4 w-full bg-black text-white relative overflow-hidden ">
      <div className=" stars absolute inset-0"></div>
      {/* <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div
          className=" w-[20vh] h-[20vh] md:h-[35vh] md:w-[35vh] absolute bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-80"
          animate={{
            x: ["-100%", "-90%", "-75%"], // More confined to the left side
            y: ["-20%", "15%", "-10%"], // Natural vertical movement
          }}
          transition={{
            duration: 5, // Slightly slower for a more serene effect
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div> */}
      <div className="relative z-10 max-w-[90%] mx-auto">
        <div className="px-6 py-10 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Title */}
            <div className="lg:w-1/3">
              <h1 className="text-5xl md:text-6xl mb-6 lg:mb-0 font-serif text-transparent bg-gradient-to-r from-green-400 via-green-500 to-blue-500 bg-clip-text">
                Frequently Asked Questions
              </h1>
            </div>

            {/* FAQs */}
            <div className="lg:w-2/3">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-500 py-4">
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <motion.span
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-medium text-pink-400"
                    >
                      +
                    </motion.span>
                    <span className="text-xl pl-2 font-medium font-serif">
                      {faq.question}
                    </span>
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeIn" }}
                        className="mt-4 pl-6 text-lg text-gray-200 font-serif"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
