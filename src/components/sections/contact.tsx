"use client"

import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, MessageSquare, Zap } from "lucide-react"
import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import { useTheme } from "../theme-provider"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const formRef = useRef<HTMLFormElement>({} as HTMLFormElement)
  const [sending, setSending] = useState(false)
  const { theme } = useTheme()
  
  const handleSend = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_kEY
      )
      .then(
        (result) => {
          toast.success('Correo enviado correctamente', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
            });
          formRef.current.reset()
        },
        (error) => {
          toast.error('Error al enviar correo', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
            });
          console.error(error)
        }
      )
      .finally(() => setSending(false))
  }

  return (
    <section className="py-20 px-6" id="contacto">
      <div className="container mx-auto max-w-2xl" ref={ref}>
        <motion.div
          
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--card-background-from)] to-[var(--card-background-to)] bg-clip-text text-transparent">
            Contáctame
          </h2>
          <p className="text-xl text-[var(--title-text)]">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-[var(--cards-background)] p-8">
            <form ref={formRef} onSubmit={handleSend} className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--contact-label)] mb-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Tu nombre</span>
                </div>
                <Input
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  className="bg-[var(--contact-placeholder-background)]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--contact-label)] mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Tu email</span>
                </div>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="Tu email"
                  className="bg-[var(--contact-placeholder-background)]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--contact-label)] mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">Tu mensaje</span>
                </div>
                <Textarea
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="Tu mensaje"
                  className="bg-[var(--contact-placeholder-background)]"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-[var(--button-hero-from)] to-[var(--button-hero-to)] text-white"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {sending ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  )
}
