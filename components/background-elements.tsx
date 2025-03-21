"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Define the type for elements
type Element = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function BackgroundElements() {
  const [elements, setElements] = useState<Element[]>([])

  // Generate random positions for background elements after the component mounts
  useEffect(() => {
    const generatedElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
    
    setElements(generatedElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => {
        // Generate random movement values only once per element to ensure consistent animation
        const randomX = Math.random() * 100 - 50
        const randomY = Math.random() * 100 - 50

        return (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-primary/10"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
            animate={{
              x: [0, randomX, 0],
              y: [0, randomY, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}
