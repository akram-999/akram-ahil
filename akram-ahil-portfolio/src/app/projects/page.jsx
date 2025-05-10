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
      languages: ["React.js","TailwindCSS", "Node.js", "MongoDB","Express.js"],
      github: "https://github.com/akram-999/notes-app"
    },
    {
      title: "DBSYS SERVICES",
      category: "Development",
      year: "2025",
      image: "/projects/dbsys.png",
      languages: ["React.js", "TailwindCSS", "Node.js"],
      github: "https://github.com/akram-999/dbsys-services"
    },
    {
      title: "BLOG APP",
      category: "Development",
      year: "2025",
      image: "/projects/blog-app.png",
      languages: ["React.js", "TailwindCSS", "Node.js","MongoDB","Express.js"],
      github: "https://github.com/akram-999/blog-app"
    },
    {
      title: "Hisko",
      category: "Design",
      year: "2025",
      image: "/projects/logo1.png",
      languages: ["Illustrator"],
    },
    {
      title: "ASTRA DEV TEAM",
      category: "Design",
      year: "2025",
      image: "/projects/logo2.png",
      languages: [ "Illustrator"],
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
              className="rounded-2xl md:rounded-3xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-800 group flex flex-col justify-between"
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
                  className="p-7 w-full h-full  "
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.1 }}
                />
                {/* GitHub Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow transition-colors z-10"
                    title="View on GitHub"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </motion.div>
              <div className="p-4 md:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <motion.h3 
                    className="text-lg md:text-2xl font-semibold mb-1 md:mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div 
                    className="flex justify-between items-center text-gray-400 text-sm md:text-base mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                    
                  </motion.div>
                  {/* Languages Used */}
                  {project.languages && project.languages.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.languages.map((lang, i) => (
                        <span
                          key={lang + i}
                          className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded-full border border-gray-700"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  )}
                  
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
