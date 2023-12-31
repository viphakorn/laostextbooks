"use client"

import { ThemeProvider } from "next-themes"
import { useState, useEffect } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  // const [mounted, setMounted] = useState(false)

  // // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => setMounted(true), [])

  // if (!mounted) return children

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      {children}
    </ThemeProvider>
  )
}
