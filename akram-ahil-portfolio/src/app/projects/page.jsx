"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
  const [activeFilter, setActiveFilter] = useState('All');
  const projects = [
    {
      title: "Notes App",
      category: "Development",
      year: "2024",
      image: "/projects/notes-app.png", 
    },
    {
      title: "DBSYS SERVICES",
      category: "Development",
      year: "2025",
      image: "/projects/dbsys.png", 
    },
    {
      title: "Code Screenshot",
      category: "Design",
      year: "2024",
      image: "https://devrajchatribin.com/_next/image?url=%2Fprojects%2Fcodescreenshot.webp&w=1200&q=100", 
    },
    {
      title: "Code Screenshot",
      category: "Design",
      year: "2024",
      image: "https://devrajchatribin.com/_next/image?url=%2Fprojects%2Fochidesign.webp&w=1200&q=100", 
    },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.category.includes(activeFilter);
  });

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };
  
  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: 30,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <main className="min-h-screen px-4 py-8 md:p-8 lg:m-20">
      {/* Header Section */}
      <motion.div 
        className="mt-12 md:mb-12"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <motion.div 
          className="flex items-center gap-2 text-[#9FE870] mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xl md:text-2xl inline-block">✧</span>
          <span className="uppercase tracking-wider text-sm md:text-base">MY WORK</span>
        </motion.div>
        
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Creating next level digital products
        </motion.h1>
        
        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap items-center gap-2 md:gap-4 mb-8 md:mb-12"
          variants={filterVariants}
        >
          {['All', 'Development', 'Design'].map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm md:text-base transition-colors ${
                activeFilter === filter 
                  ? 'bg-gray-800 text-white' 
                  : 'hover:bg-gray-800 text-gray-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.title + index}
              variants={projectVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="rounded-2xl md:rounded-3xl overflow-hidden bg-gray-900 cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="relative aspect-[4/3] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
              <div className="p-4 md:p-6">
                <motion.h3 
                  className="text-lg md:text-2xl font-semibold mb-1 md:mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.div 
                  className="flex justify-between items-center text-gray-400 text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
