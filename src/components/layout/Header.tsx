"use client"

import { SearchBar } from "@/components/search/SearchBar"
import { DarkModeToggle } from "@/components/theme/DarkModeToggle"

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-line bg-surface px-6 py-4">
      <SearchBar />
      <div className="flex items-center gap-3">
        <DarkModeToggle />
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-tech font-mono text-xs font-medium text-white">
          DS
        </div>
      </div>
    </header>
  )
}
