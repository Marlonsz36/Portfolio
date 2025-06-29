"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { X, ExternalLink, Github } from "lucide-react"

interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

interface ProjectCarouselProps {
  isOpen: boolean
  onClose: () => void
  projectTitle: string
  images: ProjectImage[]
  projectUrl?: string
  githubUrl?: string
}

export function ProjectCarousel({
  isOpen,
  onClose,
  projectTitle,
  images,
  projectUrl,
  githubUrl,
}: ProjectCarouselProps) {  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="bg-white/95 dark:bg-black/95 backdrop-blur-lg border-slate-200 dark:border-white/20">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{projectTitle}</h3>
                  <div className="flex gap-2">
                    {projectUrl && (
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Proyecto
                      </Button>
                    )}
                    {githubUrl && (
                      <Button size="sm" variant="outline">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    )}
                    <Button size="sm" variant="ghost" onClick={onClose}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Carousel className="w-full">
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                          <img
                            src={image.src }
                            alt={image.alt}
                            className="w-full h-10/12 object-cover"
                          />
                          {image.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                              <p className="text-sm">{image.caption}</p>
                            </div>
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
