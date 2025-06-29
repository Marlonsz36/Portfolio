"use client"

import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { useRef } from "react"

interface Achievement {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

interface AchievementsProps {
  achievements: Achievement[]
}

export function Achievements({ achievements }: AchievementsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--card-background-from)] to-[var(--card-background-to)] bg-clip-text text-transparent transition-colors duration-300">
            Logros
          </h2>
          <p className="text-xl text-[var(--title-text)] max-w-2xl mx-auto transition-colors duration-300">
            Resultados medibles que demuestran el impacto de mi trabajo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              ref={ref}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-[var(--cards-background)] backdrop-blur-sm border-[var(--cards-border)] p-6 hover:border-[var(--cards-border-hover)] transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4`}
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--card-title)] mb-2 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-[var(--card-description)] text-sm transition-colors duration-300">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
