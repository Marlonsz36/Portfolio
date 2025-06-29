"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { Github, Linkedin, FileText, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // Si el tema actual es "system", necesitamos determinar qué tema está activo
    if (theme === "system") {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(isDarkMode ? "light" : "dark")
    } else if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  // Función para determinar qué icono mostrar
  const getCurrentTheme = () => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return theme
  }
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/CV_Marlon_Segarra.pdf";  // Ruta relativa desde /public
    link.download = "CV_Marlon_Segarra.pdf";          // Nombre del archivo al guardar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-[var(--header-background)] dark:bg-[var(--header-border)] backdrop-blur-lg border-b  transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-[var(--text-gradient-from)] to-[var(--text-gradient-to)] bg-clip-text text-transparent transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Marlon Segarra
        </motion.h1>
        <div className="flex gap-4 items-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-[var(--header-text)] hover:bg-[var(--header-text-hover)] transition-colors duration-300"
              suppressHydrationWarning
            >
              {mounted && getCurrentTheme() === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              className="text-[var(--header-text)] hover:bg-[var(--header-hover)]  transition-colors duration-300"
              onClick={handleDownload}
            >
              <FileText className="w-4 h-4 mr-2" />
              CV
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              className="text-[var(--header-text)] hover:bg-[var(--header-hover)] transition-colors duration-300"
              onClick={() => window.open("https://linkedin.com/in/marlon-segarra-zambrano-48a76b172", "_blank","noopener,noreferrer")}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              className="text-[var(--header-text)] hover:bg-[var(--header-hover)] transition-colors duration-300"
              onClick={() => window.open("https://github.com/Marlonsz36", "_blank","noopener,noreferrer")}
            >
              <Github className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
