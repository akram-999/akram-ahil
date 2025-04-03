"use client";
import React, { useState } from 'react';

export default function Page() {
  const [activeFilter, setActiveFilter] = useState('All');
  const projects = [
    {
      title: "Aora",
      category: "Development",
      year: "2024",
      image: "https://devrajchatribin.com/_next/image?url=%2Fprojects%2Faora.webp&w=1200&q=100", 
    },
    {
      title: "Code Screenshot",
      category: "Development",
      year: "2024",
      image: "https://devrajchatribin.com/_next/image?url=%2Fprojects%2Fcodescreenshot.webp&w=1200&q=100", 
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


  return (
    <main className="min-h-screen p-8 m-20">
      {/* Header Section */}
      <div className="mb-12">
      <div className="flex items-center gap-2 text-[#9FE870]">
            <span className="text-2xl">✧</span>
            <span className="uppercase tracking-wider">MY WORK</span>
          </div>
        <h1 className="text-5xl font-bold mb-8">
          Creating next level digital products
        </h1>
        
        {/* Filter Tabs */}
        <div className="flex items-center gap-4 mb-12">
        {['All', 'Development', 'Design'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === filter 
                ? 'bg-gray-800 text-white' 
                : 'hover:bg-gray-800 text-gray-400'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="rounded-3xl overflow-hidden bg-gray-900 cursor-pointer transition-transform hover:scale-[0.98]"
          >
            <div className="relative aspect-[4/3]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <div className="flex justify-between items-center text-gray-400">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
