import { MoveRight } from "lucide-react";
import Image from "next/image";
import './Hero.css';

export default function Hero() {
  return (
    <div className="min-h-screen bg-black px-4 sm:px-8 lg:px-16 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with circular overlay */}
          <div className="relative">
            <div className="relative w-[400px] h-[400px] mx-auto mb-28">
              <Image
                src="/IMG.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-full object-cover"
              />
              {/* Rotating circle overlay */}
              
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
          <div className="flex items-center gap-2 ">
          <span className="text-[#9FE870]">👋</span>
          <span className="text-white text-xl">Hey! It's me Akram.</span>
        </div>

            <h1 className="text-white space-y-2">
              
              <span className="flex text-7xl font-light ">
                <span className="block px-1 font-light">A</span>
                <span className="text-[#9FE870]">creative developer</span>
              </span>
              <span className="block text-7xl font-light">& digital designer</span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-xl">
              I collaborate with brands globally to design impactful, mission-focused 
              websites that drive results and achieve business goals.
            </p>

            <button className="bg-white text-black px-8 py-3 rounded-full 
              hover:bg-[#9FE870] transition-all duration-300 flex items-center gap-2">
              $ npm install Resume
              {/* <MoveRight className="w-5 h-5" /> */}
            </button>

            <div className="flex gap-6 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LINKEDIN <span className="text-xs">↗</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GITHUB <span className="text-xs">↗</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                INSTAGRAM <span className="text-xs">↗</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GMAIL <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
