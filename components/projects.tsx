"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Briefcase, ExternalLink } from 'lucide-react'
import Image from "next/image"
import ProjectModal from "./project-modal"

interface Project {
  id: number
  title: string
  description: string
  image: string
  details: {
    overview: string
    features: string[]
    technologies: string[]
    link?: string
  }
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description: "A modern web application with responsive design and interactive features",
      image: "/placeholder.svg?height=300&width=400",
      details: {
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla lobortis et libero sit amet congue. Donec quis odio at augue imperdiet posuere.",
        features: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla lobortis et libero sit amet congue. Donec quis odio at augue imperdiet posuere.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla lobortis et libero sit amet congue. Sed ullamcorper hendrerit auctor. In laoreet arcu maximus fringilla ornare. Sed quam leo, maximus a sodales scelerisque, lacinia vitae tortor."
        ],
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://example.com"
      }
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      description: "A mobile application for tracking personal finances and budgeting",
      image: "/placeholder.svg?height=300&width=400",
      details: {
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet mollis erat placerat suscipit.",
        features: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet mollis erat placerat suscipit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet mollis erat placerat suscipit.",
          "Nulla lobortis et libero sit amet congue. Donec quis odio at augue imperdiet posuere. Sed ullamcorper hendrerit auctor. In laoreet arcu maximus fringilla ornare. Sed quam leo, maximus a sodales scelerisque, lacinia vitae tortor."
        ],
        technologies: ["React Native", "Firebase", "Redux"],
        link: "https://example.com"
      }
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      description: "An e-commerce platform with advanced product filtering and search",
      image: "/placeholder.svg?height=300&width=400",
      details: {
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet mollis erat placerat suscipit. Nulla lobortis et libero sit amet congue. Donec quis odio at augue imperdiet posuere. Sed ullamcorper hendrerit auctor.",
        features: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet mollis erat placerat suscipit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor, sit amet mollis erat placerat suscipit.",
          "Nulla lobortis et libero sit amet congue. Donec quis odio at augue imperdiet posuere. Sed ullamcorper hendrerit auctor. In laoreet arcu maximus fringilla ornare. Sed quam leo, maximus a sodales scelerisque, lacinia vitae tortor."
        ],
        technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
        link: "https://example.com"
      }
    }
  ]
  
  return (
    <motion.div 
      ref={sectionRef}
      style={{ opacity, y }}
      className="timeline pl-16"
    >
      <div className="timeline-icon bg-accent text-accent-foreground">
        <Briefcase size={16} />
      </div>
      
      <motion.h2 
        className="section-heading text-accent"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      
      <div className="mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-accent"
        >
          Lorem ipsum dolor sit amet
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground"
        >
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante
            tortor, sit amet mollis erat placerat suscipit. Nulla lobortis et libero sit amet congue.
            Donec quis odio at augue imperdiet posuere.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante
            tortor, sit amet mollis erat placerat suscipit. Nulla lobortis et libero sit amet congue.
            Sed ullamcorper hendrerit auctor. In laoreet arcu maximus fringilla ornare. Sed quam leo, maximus a sodales
            scelerisque, lacinia vitae tortor.
          </li>
        </motion.ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-video mb-4 overflow-hidden rounded-md bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-accent">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex items-center text-accent">
              <span className="text-sm">Deploy link</span>
              <ExternalLink size={14} className="ml-1" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <h3 className="text-xl font-semibold mb-4 text-accent">Lorem ipsum dolor sit amet</h3>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor,
            sit amet mollis erat placerat suscipit. Nulla lobortis et libero sit amet congue. Donec
            quis odio at augue imperdiet posuere. Sed ullamcorper hendrerit auctor.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor,
            sit amet mollis erat placerat suscipit. Nulla lobortis et libero sit amet congue. Donec
            quis odio at augue imperdiet posuere. Sed ullamcorper hendrerit auctor. In laoreet
            arcu maximus fringilla ornare.
          </li>
          <li>
            Sed quam leo, maximus a sodales scelerisque, lacinia vitae tortor.
          </li>
        </ul>
      </motion.div>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.div>
  )
}