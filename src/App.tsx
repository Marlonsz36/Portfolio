"use client"
import "./index.css"
import { useState } from "react"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Achievements } from "@/components/sections/achievements"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { ProjectCarousel } from "@/components/project-carousel"
import { projectsFrontend, projectsDataScience } from "@/data/projects"
import { achievementsFrontend, achievementsDataScience } from "@/data/achievements"

export default function Portfolio() {
  const [activeProfile, setActiveProfile] = useState("frontend")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)

  const openProjectCarousel = (project: any) => {
    setSelectedProject(project)
    setIsCarouselOpen(true)
  }

  const closeProjectCarousel = () => {
    setIsCarouselOpen(false)
    setSelectedProject(null)
  }

  const currentProjects = activeProfile === "frontend" ? projectsFrontend : projectsDataScience
  const currentAchievements = activeProfile === "frontend" ? achievementsFrontend : achievementsDataScience

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--gradient-from))] via-[hsl(var(--gradient-via))] to-[hsl(var(--gradient-to))] text-[hsl(var(--foreground))] transition-colors duration-300">
      <Header />

      <Hero activeProfile={activeProfile} setActiveProfile={setActiveProfile} />

      <Projects activeProfile={activeProfile} projects={currentProjects} onOpenCarousel={openProjectCarousel} />

      <Achievements achievements={currentAchievements} />

      <Contact />

      <Footer />

      {/* Project Carousel */}
      {selectedProject && (
        <ProjectCarousel
          isOpen={isCarouselOpen}
          onClose={closeProjectCarousel}
          projectTitle={selectedProject.title}
          images={selectedProject.images}
        />
      )}
    </div>
  )
}
