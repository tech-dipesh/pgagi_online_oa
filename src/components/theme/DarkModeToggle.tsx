"use client"

import { Moon, Sun } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { setDarkMode } from "@/lib/store/preferencesSlice"

export function DarkModeToggle() {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector((state) => state.preferences.darkMode)

  return (
    <button
      type="button"
      onClick={() => dispatch(setDarkMode(!darkMode))}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted hover:text-ink" 
    >
      {darkMode ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
