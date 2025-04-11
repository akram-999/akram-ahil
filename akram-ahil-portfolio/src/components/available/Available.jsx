'use client';

import React, { useRef } from 'react';
import './Available.css';
import { MoveRight } from 'lucide-react';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Available() {
  const sectionRef = useRef(null);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      backgroundColor: "#9FE870",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <div ref={sectionRef} className="available-section">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="available-content text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Available badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-[#1A2718] text-[#9FE870] 
              px-4 py-2 rounded-full mb-8"
            variants={fadeInUpVariants}
            custom={0}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.span 
              className="w-2 h-2 bg-[#9FE870] rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.span>
            <span className="text-sm">Available for work</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl text-white font-light 
              max-w-4xl mx-auto mb-12 leading-tight"
            variants={fadeInUpVariants}
            custom={1}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              Let's create your
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              next big idea.
            </motion.span>
          </motion.h2>

          {/* Contact button */}
          <Link href="/contact">
            <motion.button 
              className="bg-white text-black px-8 py-3 rounded-full 
                transition-all duration-300 inline-flex items-center gap-2 pointer"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              whileInView={{ 
                opacity: [0, 1], 
                y: [20, 0] 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Contact Me
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <MoveRight size={18} />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
