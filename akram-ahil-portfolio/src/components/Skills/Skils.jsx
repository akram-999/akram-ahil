import React from 'react'
import './Skills.css'

export default function Skils() {
  const skills = [
    { name: 'Node.js', icon: '/skils/nodejs.svg' },
    { name: 'mongodb', icon: '/skils/mongodb.svg' },
    { name: 'photoshop', icon: '/skils/photoshop.svg' },
    { name: 'react', icon: '/skils/react.svg' },
    { name: 'next', icon: '/skils/nextjs.svg' },
    { name: 'postgre', icon: '/skils/postgre.svg' },
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
    // Add more skills as needed

    // Add any other skills you want to show
  ]

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-track">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
          {/* Duplicate items for seamless loop */}
          {skills.map((skill, index) => (
            <div key={`duplicate-${index}`} className="skill-item">
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
