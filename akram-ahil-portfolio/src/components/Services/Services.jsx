"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, Code, Palette, Layers } from "lucide-react";
import "./Services.css";
import { motion } from "framer-motion";

export default function Services() {
  const [activeService, setActiveService] = useState('development');
  const sectionRef = useRef(null);

  const services = [
    {
      id: 'development',
      icon: <Code className="w-6 h-6" />,
      title: 'Development',
      description: 'Building responsive websites. Providing the users an enriching experience that responds to any device and screen size.'
    },
    {
      id: 'ui-ux',
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with a focus on user experience and modern design principles.'
    },
    {
      id: 'branding',
      icon: <Layers className="w-6 h-6" />,
      title: 'Branding',
      description: 'Developing strong brand identities that communicate your values and connect with your target audience.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0.4, color: "#4a4a4a" },
    visible: { 
      opacity: 1, 
      color: "#ffffff",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div ref={sectionRef} className="services-section bg-black px-4 py-20 lg:px-20">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column */}
        <div className="space-y-8">
          <motion.div 
            className="flex items-center gap-2 text-[#9FE870]"
            variants={itemVariants}
          >
            <span className="text-2xl">✧</span>
            <span className="uppercase tracking-wider">Speciality</span>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-6xl text-white font-light leading-tight"
            variants={textVariants}
          >
            Areas of Expertise
          </motion.h2>

          <motion.div 
            className="space-y-4"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`service-item ${activeService === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service.id)}
                variants={itemVariants}
                custom={index}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
              >
                <div className="service-header">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {service.icon}
                    </motion.div>
                    <motion.span 
                      className="text-xl"
                      initial={{ opacity: 0.4, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {service.title}
                    </motion.span>
                  </div>
                  <div className="rot">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
                <div className="service-content">
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div 
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/dev.jpg"
            alt="Development workspace"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
