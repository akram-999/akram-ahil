'use client';

import React from 'react'
import Image from 'next/image'
import './Skills.css'

export default function Skils() {
  const skills = [
    { name: 'Node.js', icon: '/skils/nodejs.svg' },
    { name: 'mongodb', icon: '/skils/mongodb.svg' },
    { name: 'photoshop', icon: '/skils/photoshop.svg' },
    { name: 'react', icon: '/skils/react.svg' },
    { name: 'next', icon: '/skils/nextjs.svg' },
    { name: 'postgre', icon: '/skils/Postgre.svg' },
    { name: 'mysql', icon: '/skils/mysql.svg' },
    { name: 'docker', icon: '/skils/docker.svg'},
    { name: 'express', icon: '/skils/express.svg' },
    { name: 'wordpress', icon: '/skils/wordpress.svg' },
    { name: 'javascript', icon: '/skils/javascript.svg'},
    { name: 'laravel', icon: '/skils/laravel.svg' },
    { name: 'git', icon: '/skils/git.svg' },
    { name: 'illustrator', icon: '/skils/illustrator.svg' },
    { name: 'ccs3', icon: '/skils/css3.svg' },
    { name: 'jwt', icon: '/skils/jwt.svg' },
    { name: 'html', icon: '/skils/html5.svg'},
    { name: 'ansible', icon: '/skils/ansible.svg'},
    { name: 'figma', icon: '/skils/figma.svg'},
    
  ]

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-track">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon-container">
                <Image 
                  src={skill.icon} 
                  alt={skill.name} 
                  width={24} 
                  height={24}
                  unoptimized={true}
                  onError={(e) => {
                    // Fall back to text if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
          
          {skills.map((skill, index) => (
            <div key={`duplicate-${index}`} className="skill-item">
              <div className="skill-icon-container">
                <Image 
                  src={skill.icon} 
                  alt={skill.name} 
                  width={24} 
                  height={24}
                  unoptimized={true}
                  onError={(e) => {
                    // Fall back to text if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
