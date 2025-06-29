// src/RootLayout.tsx
import React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./index.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="marlon-portfolio-theme">
      {children}
    </ThemeProvider>
  )
}
