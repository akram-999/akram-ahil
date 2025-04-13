'use client';

import { MoveRight, Download } from "lucide-react";
import Image from "next/image";
import './Hero.css';
import { motion } from "framer-motion";

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const imageAnimation = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  const socialLinkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      scale: 1.1, 
      color: "#ffffff",
      transition: { duration: 0.2 }
    }
  };

  const handleDownloadCV = () => {
    // The path to your CV file in the public directory
    const cvUrl = '/Akram-Ahil-Resume.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Akram-Ahil-Resume.pdf');
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black px-4 sm:px-8 lg:px-16 py-20">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with circular overlay */}
          <motion.div 
            className="relative"
            variants={imageAnimation}
          >
            <div className="relative w-[400px] h-[400px] mx-auto mb-28">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Image
                  src="/IMG.jpg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                />
              </motion.div>

              {/* Rotating circle overlay - No styling changes */}
              <motion.div 
                className="absolute inset-0 border-2 border-[#9FE870] rounded-full"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 0.7,
                  rotate: 360 
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
          >
            <motion.div 
              className="flex items-center gap-2"
              variants={fadeInUp}
            >
              <motion.span 
                className="text-[#9FE870]"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  transition: { 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut" 
                  }
                }}
              >
                👋
              </motion.span>
              <span className="text-white text-xl">Hey! It&apos;s me Akram Ahil.</span>
            </motion.div>

            <motion.h1 className="text-white space-y-2" variants={staggerContainer}>
              <motion.span 
                className="flex text-7xl font-light"
                variants={fadeInUp}
              >
                <motion.span 
                  className="text-[#9FE870]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  creative developer
                </motion.span>
              </motion.span>
              <motion.span 
                className="block text-7xl font-light"
                variants={fadeInUp}
                transition={{ delay: 0.7 }}
              >
                & digital designer
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-400 text-lg max-w-xl"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
            >
              I&apos;m a Full Stack Developer skilled in React, Next.js, and the MERN stack, focused on building clean, responsive web apps.
              I also design visuals using Photoshop and Illustrator, blending tech and creativity to deliver impactful digital experiences.
            </motion.p>

            <motion.button 
              onClick={handleDownloadCV}
              className="bg-white text-black px-8 py-3 rounded-full 
                hover:bg-[#9FE870] transition-all duration-300 flex items-center gap-2"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              $ npm install Resume
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Download className="w-5 h-5 ml-2" />
              </motion.span>
            </motion.button>

            <motion.div 
              className="flex gap-6 pt-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                variants={socialLinkVariants}
                whileHover="hover"
              >
                LINKEDIN <span className="text-lg">↗</span>
              </motion.a>
              <motion.a 
                href="https://github.com/akram-999" 
                className="text-gray-400 hover:text-white transition-colors"
                variants={socialLinkVariants}
                whileHover="hover"
              >
                GITHUB <span className="text-lg">↗</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                variants={socialLinkVariants}
                whileHover="hover"
              >
                INSTAGRAM <span className="text-lg">↗</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                variants={socialLinkVariants}
                whileHover="hover"
              >
                GMAIL <span className="text-lg">↗</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
