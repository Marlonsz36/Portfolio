"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, BarChart } from "lucide-react"
import { techIconsFrontend, techIconsDataScience } from "@/components/tech-icons"

interface HeroProps {
  activeProfile: string
  setActiveProfile: (profile: string) => void
}

export function Hero({ activeProfile, setActiveProfile }: HeroProps) {
  return (
    <>
      {/* Profile Selector */}
      <div className="container mx-auto pt-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <Tabs
            defaultValue="frontend"
            value={activeProfile}
            onValueChange={setActiveProfile}
            className="w-full max-w-md"
          >
            <TabsList className="grid grid-cols-2 w-full bg-[var(--hero-tab)] backdrop-blur-sm">
              <TabsTrigger
                value="frontend"
                className="data-[state=active]:bg-[var(--tab-back)] data-[state=active]:text-[var(--tab-text)] transition-all duration-300"
              >
                <Code className="w-4 h-4 mr-2" />
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="datascience"
                className="data-[state=active]:bg-[var(--tab-back)] data-[state=active]:text-[var(--tab-text)] transition-all duration-300"
              >
                <BarChart className="w-4 h-4 mr-2" />
                Ciencia de Datos
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Badge className="mb-4 bg-gradient-to-r from-[var(--badge-from)] to-[var(--badge-to)] text-white border-0 transition-colors duration-300">
                  {activeProfile === "frontend" ? "Frontend Developer" : "Data Scientist"}
                </Badge>
              </motion.div>

              <motion.h1
                className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--title-hero-from)] via-[var(--title-hero-via)] to-[var(--title-hero-to)]  bg-clip-text text-transparent transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Marlon
                <br />
                <span className="bg-gradient-to-r from-[var(--title2-hero-from)] to-[var(--title2-hero-to)] bg-clip-text text-transparent transition-colors duration-300">
                  Segarra
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-[var(--description-hero)] mb-8 leading-relaxed transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {activeProfile === "frontend"
                  ? "Frontend Developer especializado en crear experiencias digitales excepcionales con tecnologías modernas y frameworks de vanguardia."
                  : "Data Scientist enfocado en transformar datos en insights accionables mediante análisis avanzado, machine learning y visualización de datos."}
              </motion.p>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  size="lg"
                  onClick={() =>
                    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gradient-to-r from-[var(--button-hero-from)] to-[var(--button-hero-to)] hover:from-[var(--button-hero-hover-from)] hover:to-[var(--button-hero-hover-from)] text-white border-0 transition-colors duration-300"
                >
                  Ver Proyectos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="border-[var(--button2-hero-border)] text-[var(--button2-hero-text)] hover:bg-[var(--button2-hero-hover)] dark:border-white/20 dark:text-white dark:hover:bg-white/10 transition-colors duration-300"
                >
                  Contactar
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Profile Image Placeholder */}
              <div className="relative w-80 h-80 mx-auto">
                <motion.div
                  className={`absolute inset-0 ${
                    activeProfile === "frontend"
                      ? "bg-gradient-to-r from-[var(--text-gradient-from)] to-[var(--text-gradient-to)]"
                      : "bg-gradient-to-r from-[var(--text-gradient-from)] to-[var(--text-gradient-to)]"
                  } rounded-full blur-xl opacity-30 transition-colors duration-300`}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                <div className="relative w-full h-full bg-gradient-to-br from-[var(--gradient-from-circle)] via-[var(--gradient-via-circle)] to-[var(--gradient-to-circle)] rounded-full flex items-center justify-center border-2 border-border transition-colors duration-300">
                  <span className="text-6xl font-bold text-foreground transition-colors duration-300">
                    <img src="/Portfolio/images/perfil.jpeg" alt="perfil" className="w-80 h-80 rounded-full object-cover" />
                  </span>
                </div>
              </div>

              {/* Floating Tech Icons */}
              {(activeProfile === "frontend" ? techIconsFrontend : techIconsDataScience).map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`absolute w-12 h-12 bg-[var(--icon-background)] backdrop-blur-sm rounded-full flex items-center justify-center border border-[var(--icon-border)] ${tech.color} transition-colors duration-300`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    delay: tech.delay,
                    y: {
                      duration: 2 + index * 0.1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    top: `${20 + (index % 3) * 30}%`,
                    left: `${10 + (index % 4) * 25}%`,
                  }}
                >
                  {React.createElement(tech.icon, { className: "w-6 h-6" })}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
