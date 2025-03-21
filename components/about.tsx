"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { User } from 'lucide-react'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
  
  return (
    <motion.div 
      ref={sectionRef}
      style={{ opacity, y }}
      className="timeline pl-16"
    >
      <div className="timeline-icon bg-primary text-primary-foreground">
        <User size={16} />
      </div>
      
      <motion.h2 
        className="section-heading text-secondary"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-secondary mb-6">
          At [Your Business/Brand Name], we are passionate about transforming ideas into powerful digital solutions. Founded by Sarani Dinethma, a dedicated full-stack developer and second-year Computer Science undergraduate at the Informatics Institute of Technology (partnered with the University of Westminster, UK), we specialize in crafting innovative software solutions tailored to modern needs.
          </p>
          
          <div className="bg-card rounded-lg p-6">
            <p className="mb-4">
            With expertise in the MERN stack, Java, Python, Spring Boot, and Flutter, we build dynamic web and mobile applications that solve real-world challenges. Our strong foundation in data structures, algorithms, and Object-Oriented Programming (OOP) enables us to develop scalable, efficient, and high-performance applications.
            </p>
            <p>
            Beyond technical skills, we value collaboration, leadership, and adaptability—believing that great technology is built through teamwork and creativity. Whether it’s a startup idea, a business transformation, or a personal project, we are excited to bring your vision to life.

Let’s create something extraordinary together!
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-card rounded-lg p-6">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent imperdiet ante tortor, sit amet mollis erat placerat
              suscipit. Nulla lobortis et libero sit amet congue. Donec quis
              odio at augue imperdiet posuere. Sed ullamcorper hendrerit
              auctor. In laoreet arcu maximus fringilla ornare. Sed quam
              leo, maximus a sodales scelerisque, lacinia vitae tortor.
              Aenean tincidunt porttitor pulvinar. Aliquam fermentum
              consequat orci, sed euismod diam posuere ut. Vestibulum
              ante massa, rutrum eu enim consequat, tincidunt tincidunt
              eros.
            </p>
          </div>
          
          <motion.div 
            className="absolute -bottom-20 -left-20 w-40 h-40 opacity-80"
            animate={{ 
              rotate: [0, 360],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg 
              width="160" 
              height="160" 
              viewBox="0 0 160 160" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M80,30 C100,50 110,50 130,30 C110,10 100,10 80,30 Z" 
                stroke="url(#gradient)" 
                strokeWidth="2" 
                fill="none" 
              />
              <path 
                d="M30,80 C50,100 50,110 30,130 C10,110 10,100 30,80 Z" 
                stroke="url(#gradient)" 
                strokeWidth="2" 
                fill="none" 
              />
              <path 
                d="M130,80 C110,100 110,110 130,130 C150,110 150,100 130,80 Z" 
                stroke="url(#gradient)" 
                strokeWidth="2" 
                fill="none" 
              />
              <path 
                d="M80,130 C60,110 50,110 30,130 C50,150 60,150 80,130 Z" 
                stroke="url(#gradient)" 
                strokeWidth="2" 
                fill="none" 
              />
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(135, 73%, 55%)" />
                  <stop offset="100%" stopColor="hsl(45, 100%, 65%)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}