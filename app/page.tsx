"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import BackgroundElements from "@/components/background-elements"


export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue
        
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <main className="min-h-screen animated-bg relative overflow-hidden">
      <BackgroundElements />
      <Navbar activeSection={activeSection} />
      
      <div className="container mx-auto px-4 py-16">
        <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="projects" className="py-20">
          <Projects />
        </section>
        
        <section id="skills" className="py-20">
          <Skills />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>
    </main>
  )
}