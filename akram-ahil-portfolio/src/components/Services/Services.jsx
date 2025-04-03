"use client";

import React, { useState } from "react";
import { ChevronDown ,Code, Palette, Layers } from "lucide-react";
import "./Services.css";



export default function Services() {
  const [activeService, setActiveService] = useState('development');

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

  return (
    <div className="services-section bg-black px-4 py-20 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-[#9FE870]">
            <span className="text-2xl">✧</span>
            <span className="uppercase tracking-wider">Speciality</span>
          </div>

          <h2 className="text-4xl lg:text-6xl text-white font-light leading-tight">
            Areas of Expertise
          </h2>

          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-item ${activeService === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="service-header">
                  <div className="flex items-center gap-3">
                    {service.icon}
                    <span className="text-xl">{service.title}</span>
                  </div>
                  <div className="rot">
                  <ChevronDown className="w-5 h-5" />
                  </div>
                  
                 
                </div>
                <div className="service-content">
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/dev.jpg" // Make sure to add this image to your public folder
            alt="Development workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
