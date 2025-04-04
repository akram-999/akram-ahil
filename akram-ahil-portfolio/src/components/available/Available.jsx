import React from 'react'
import './Available.css'
import { MoveRight } from 'lucide-react'
import Link from "next/link"

export default function Available() {
  return (
    <div className="available-section">
      <div className="container mx-auto px-4 py-20">
        <div className="available-content text-center">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 bg-[#1A2718] text-[#9FE870] 
            px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-[#9FE870] rounded-full animate-pulse"></span>
            <span className="text-sm">Available for work</span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-light 
            max-w-4xl mx-auto mb-12 leading-tight animate-slide-up">
            Let's create your
            <br />
            next big idea.
          </h2>

          {/* Contact button */}
          <Link href="/contact">
          <button className=" bg-white text-black px-8 py-3 rounded-full 
            hover:bg-[#9FE870] transition-all duration-300 inline-flex items-center gap-2 pointer">
            Contact Me
            
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
