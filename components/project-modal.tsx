"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink } from 'lucide-react'
import Image from "next/image"

interface ProjectDetails {
  overview: string
  features: string[]
  technologies: string[]
  link?: string
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  details: ProjectDetails
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-video">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover rounded-t-lg"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm text-foreground rounded-full p-2 hover:bg-background/70 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-accent">{project.title}</h2>
            <p className="text-muted-foreground mb-6">{project.description}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-muted-foreground">{project.details.overview}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {project.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.details.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.details.link && (
                <div>
                  <a
                    href={project.details.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Visit Project
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}