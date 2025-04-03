"use client";
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"


export default function Navbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    // { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Conatct', url: '/contact', icon: FileText }
  ]
  return (
    <div>
      <NavBar items={navItems} />
    </div>
  )
}
