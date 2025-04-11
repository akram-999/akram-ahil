'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create word animation variants
  const wordVariants = {
    hidden: { 
      opacity: 0.3, 
      color: "#4a4a4a",
      y: 20
    },
    visible: {
      opacity: 1,
      color: "#ffffff",
      y: 0
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-black text-white flex flex-col justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="text-[#4ADE80]">✦</span>
          <h2 className="text-[#4ADE80] text-lg font-medium tracking-wide">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            {["I'm", "Devraj", "Chatribin,", "with", "over", "4+", "years", "of", "experience", "in", "design", "&", "development"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2 text-gray-500"
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.05,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, amount: 0.6 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-6">
          <motion.p className="text-lg md:text-xl leading-relaxed">
            {["with", "strong", "focus", "on", "producing", "high", "quality", "&", "impactful", "digital", "experiences.", "I", "have", "worked", "with", "some", "of", "the", "most", "innovative", "industry", "leaders", "to", "help", "build", "their", "top-notch", "products."].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-1 text-gray-500"
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + (i * 0.03),
                  ease: "easeOut"
                }}
                viewport={{ once: true, amount: 0.4 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About; 