"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Images } from "lucide-react"
import { techIconsMap } from "@/components/tech-icons"

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  gradient: string
  production?: boolean
  productionLink: string
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
}

interface ProjectsProps {
  activeProfile: string
  projects: Project[]
  onOpenCarousel: (project: Project) => void
}

export function Projects({ activeProfile, projects, onOpenCarousel }: ProjectsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section className="py-20 px-6" id="proyectos">
      <div className="container mx-auto">
        <div ref={ref}>
        <motion.div
          
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--card-background-from)] to-[var(--card-background-to)] bg-clip-text text-transparent transition-colors duration-300">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-[var(--title-text)] max-w-2xl mx-auto transition-colors duration-300">
            {activeProfile === "frontend"
              ? "Una selección de mis trabajos más impactantes y tecnológicamente avanzados"
              : "Proyectos de análisis de datos y machine learning con resultados medibles"}
          </p>
        </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
   
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              style={{ perspective: "1000px" }}
              className="group"
            >
              <Card className="bg-[var(--cards-background)] backdrop-blur-sm border-[var(--cards-border)] overflow-hidden hover:border-[var(--cards-border-hover)] transition-all duration-300 h-full flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0">
                    <img
                      src={project.image }
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-300"
                    />
                  </div>
                  <motion.div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div

                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => onOpenCarousel(project)}
                      >
                        <Images className="w-4 h-4" />
                      </Button>
                    </div>
                    {project.production && <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={() => window.open(project.productionLink, "_blank", "noopener,noreferrer")}>
                      <ExternalLink  className="w-4 h-4" />
                    </Button>}
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[var(--card-title)] mb-3 group-hover:text-[var(--card-group-hover)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[var(--card-description)] mb-4 text-sm leading-relaxed transition-colors duration-300 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-[var(--card-tech-background)] text-[var(--card-tech-text)] border-[var(--card-tech-color)] text-xs transition-colors duration-300 flex items-center gap-1"
                      >
                        {techIconsMap[tech] && (
                          <div className={`w-3 h-3 ${techIconsMap[tech].color}`}>
                            {React.createElement(techIconsMap[tech].icon)}
                          </div>
                        )}
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
