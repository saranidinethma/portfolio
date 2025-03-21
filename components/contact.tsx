"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }
  
  return (
    <motion.div 
      ref={sectionRef}
      style={{ opacity, y }}
      className="timeline pl-16"
    >
      <div className="timeline-icon bg-primary text-primary-foreground">
        <Mail size={16} />
      </div>
      
      <motion.h2 
        className="section-heading text-primary"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-primary">Get In Touch</h3>
          <p className="text-muted-foreground mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor, 
            sit amet mollis erat placerat suscipit. Nulla lobortis et libero sit amet congue.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-muted border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-muted border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-muted border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} className="ml-2" />
                </>
              )}
            </button>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-secondary/20 border border-secondary rounded-md text-secondary"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-primary">Connect With Me</h3>
          <p className="text-muted-foreground mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ante tortor, 
            sit amet mollis erat placerat suscipit.
          </p>
          
          <div className="space-y-4">
            <a 
              href="#" 
              className="flex items-center p-4 bg-card rounded-lg hover:bg-muted transition-colors"
            >
              <Github className="w-6 h-6 mr-3 text-primary" />
              <span>github.com/username</span>
            </a>
            
            <a 
              href="#" 
              className="flex items-center p-4 bg-card rounded-lg hover:bg-muted transition-colors"
            >
              <Linkedin className="w-6 h-6 mr-3 text-primary" />
              <span>linkedin.com/in/username</span>
            </a>
            
            <a 
              href="#" 
              className="flex items-center p-4 bg-card rounded-lg hover:bg-muted transition-colors"
            >
              <Twitter className="w-6 h-6 mr-3 text-primary" />
              <span>twitter.com/username</span>
            </a>
            
            <a 
              href="mailto:email@example.com" 
              className="flex items-center p-4 bg-card rounded-lg hover:bg-muted transition-colors"
            >
              <Mail className="w-6 h-6 mr-3 text-primary" />
              <span>email@example.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}