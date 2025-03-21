"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Lorem ipsum
        </motion.h1>
        <motion.p 
          className="text-muted-foreground text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet
          mollis erat placerat suscipit.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a 
            href="#projects" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View My Work
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 3a1 1 0 00-1 1v10.586l-3.293-3.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414L11 14.586V4a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="relative floating">
          <svg 
            width="400" 
            height="400" 
            viewBox="0 0 400 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <circle cx="200" cy="200" r="100" stroke="url(#gradient)" strokeWidth="2" />
            <path 
              d="M150,150 C180,120 220,120 250,150 C280,180 280,220 250,250 C220,280 180,280 150,250 C120,220 120,180 150,150 Z" 
              stroke="url(#gradient)" 
              strokeWidth="2" 
              fill="none" 
            />
            <path 
              d="M300,150 C320,170 320,230 300,250 C280,270 220,270 200,250 C180,230 180,170 200,150 C220,130 280,130 300,150 Z" 
              stroke="url(#gradient)" 
              strokeWidth="2" 
              fill="none" 
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(267, 100%, 65%)" />
                <stop offset="50%" stopColor="hsl(135, 73%, 55%)" />
                <stop offset="100%" stopColor="hsl(45, 100%, 65%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
    </div>
  )
}