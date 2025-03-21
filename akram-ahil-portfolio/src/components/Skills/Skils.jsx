import React from 'react'
import './Skills.css' // You'll need to create this CSS file

export default function Skils() {
  const skills = [
    { name: 'Node.js', icon: '/skils/nodejs.svg', position: { top: '10%', left: '15%' } },
    { name: 'mongodb', icon: '/skils/mongodb.svg', position: { top: '5%', left: '35%' } },
    { name: 'photoshop', icon: '/skils/photoshop.svg', position: { top: '20%', left: '45%' } },
    { name: 'react', icon: '/skils/react.svg', position: { top: '55%', left: '25%' } },
    { name: 'next', icon: '/skils/nextjs.svg', position: { top: '30%', left: '75%' } },
    { name: 'postgre', icon: '/skils/postgre.svg', position: { top: '45%', left: '85%' } },
    { name: 'mysql', icon: '/skils/mysql.svg', position: { top: '40%', left: '65%' } },
    { name: 'docker', icon: '/skils/docker.svg', position: { top: '70%', left: '65%' } },
    { name: 'express', icon: '/skils/express.svg', position: { top: '10%', left: '55%' } },
    { name: 'wordpress', icon: '/skils/wordpress.svg', position: { top: '55%', left: '45%' } },
    { name: 'javascript', icon: '/skils/javascript.svg', position: { top: '60%', left: '75%' } },
    { name: 'laravel', icon: '/skils/laravel.svg', position: { top: '45%', left: '55%' } },
    { name: 'git', icon: '/skils/git.svg', position: { top: '15%', left: '65%' } },
    { name: 'illustrator', icon: '/skils/illustrator.svg', position: { top: '20%', left: '25%' } },
    { name: 'ccs3', icon: '/skils/css3.svg', position: { top: '45%', left: '15%' } },
    { name: 'jwt', icon: '/skils/jwt.svg', position: { top: '75%', left: '15%' } },
    { name: 'html', icon: '/skils/html5.svg', position: { top: '70%', left: '35%' } },
    { name: 'ansible', icon: '/skils/ansible.svg', position: { top: '15%', left: '85%' } },
    { name: 'figma', icon: '/skils/figma.svg', position: { top: '40%', left: '35%' } },
    // Add more skills as needed
  ]

  return (
    <section className="skills-container">
      <h1 className='text-5xl font-sans text-center'>My Skills</h1>
      <div className="skills-wrapper">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-icon"
            style={{
              position: 'absolute',
              top: skill.position.top,
              left: skill.position.left
            }}
          >
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
      </div>
    </section>
  )
}
