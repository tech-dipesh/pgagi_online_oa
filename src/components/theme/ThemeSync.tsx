"use client"

import { useEffect } from "react"
import { useAppSelector } from "@/lib/store/hooks"

export function ThemeSync() {
  const darkMode = useAppSelector((state) => state.preferences.darkMode)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return null
}
