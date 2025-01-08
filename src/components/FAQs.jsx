import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  // Set the first FAQ as open by default
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
    <div className="max-w-[90%] mx-auto">
      <div className="px-6 py-10 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <h1 className="text-5xl md:text-6xl mb-6 lg:mb-0 font-serif">
              Frequently asked questions
            </h1>
          </div>

          <div className="lg:w-2/3">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-medium text-blue-500"
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
                      className="mt-4 pl-6 text-lg text-gray-600 font-serif"
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
  );
};

export default FAQs;