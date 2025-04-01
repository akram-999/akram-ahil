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
            <div className="relative w-[400px] h-[400px] mx-auto">
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
            <h1 className="text-white space-y-2">
              <span className="block text-6xl font-light">A</span>
              <span className="block text-7xl font-light">
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
              My Resume
              <MoveRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
