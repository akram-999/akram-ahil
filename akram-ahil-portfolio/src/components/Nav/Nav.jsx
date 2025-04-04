'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="w-full bg-black py-6 px-8 fixed top-0 z-50">
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative px-3 py-2 text-sm transition-colors
                ${pathname === link.path 
                  ? 'text-white before:absolute before:w-1.5 before:h-1.5 before:bg-[#7DFA79] before:rounded-full before:-left-2 before:top-1/2 before:-translate-y-1/2' 
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-400 hover:text-white"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800">
              <div className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-sm transition-colors
                      ${pathname === link.path 
                        ? 'text-white bg-gray-900' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-900'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}