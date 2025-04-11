'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const statusVariants = {
    hidden: { opacity: 0, height: 0, margin: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      marginTop: 16, 
      marginBottom: 16,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      margin: 0,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div 
      className="m-28  text-white p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="flex items-center gap-2 text-[#7DFA79]"
        variants={itemVariants}
      >
        <motion.span 
          className="text-2xl"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          ✧
        </motion.span>
        <span className="uppercase tracking-wider">CONNECT WITH ME</span>
      </motion.div>
      
      <motion.h1 
        className="text-6xl font-bold mb-16"
        variants={itemVariants}
      >
        Let&apos;s start a project<br />together
      </motion.h1>
      
      <motion.div 
        className="flex gap-16"
        variants={containerVariants}
      >
        {/* Contact Form */}
        <motion.div 
          className="flex-1"
          variants={fadeInUpVariants}
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            {status.message && (
              <motion.div 
                className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-800/50 text-green-200' : 'bg-red-800/50 text-red-200'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {status.message}
              </motion.div>
            )}
            
            <motion.div variants={itemVariants}>
              <label className="block mb-2">Full Name</label>
              <motion.input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-3"
                required
                whileFocus={{ borderColor: "#7DFA79", transition: { duration: 0.2 } }}
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label className="block mb-2">Email</label>
              <motion.input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-3"
                required
                whileFocus={{ borderColor: "#7DFA79", transition: { duration: 0.2 } }}
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label className="block mb-2">Message</label>
              <motion.textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-3 h-32"
                required
                whileFocus={{ borderColor: "#7DFA79", transition: { duration: 0.2 } }}
              />
            </motion.div>
            
            <motion.button 
              type="submit"
              disabled={isSubmitting}
              className={`bg-white text-black px-8 py-3 rounded-full font-medium transition-opacity ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </motion.button>
          </form>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          className="flex-1"
          variants={fadeInUpVariants}
          custom={1}
        >
          <motion.div 
            className="bg-[#1A1A1A] p-6 rounded-2xl"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-[#253526] text-[#7DFA79] px-4 py-2 rounded-full mb-6"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.span 
                className="w-2 h-2 bg-[#7DFA79] rounded-full"
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
              Available for work
            </motion.div>
            
            <motion.div 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              My inbox is always open. Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I&apos;ll get back to you.
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              {/* Add other social icons as needed */}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}