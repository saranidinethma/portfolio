"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Code } from 'lucide-react'

interface Skill {
  category: string
  items: {
    name: string
    level: number
  }[]
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
  
  const skills: Skill[] = [
    {
      category: "Frontend",
      items: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "TypeScript", level: 70 },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "GraphQL", level: 60 },
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 75 },
        { name: "CI/CD", level: 60 },
      ]
    }
  ]
  
  return (
    <motion.div 
      ref={sectionRef}
      style={{ opacity, y }}
      className="timeline pl-16"
    >
      <div className="timeline-icon bg-secondary text-secondary-foreground">
        <Code size={16} />
      </div>
      
      <motion.h2 
        className="section-heading text-secondary"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + groupIndex * 0.1 }}
            className="bg-card rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-secondary">{skillGroup.category}</h3>
            <div className="space-y-4">
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 + skillIndex * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}