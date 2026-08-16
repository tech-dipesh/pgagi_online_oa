"use client"

import { Rss, TrendingUp, Star, Settings } from "lucide-react"

export type DashboardSection = "feed" | "trending" | "favorites" | "settings"

const navItems: { section: DashboardSection; label: string; icon: typeof Rss }[] = [
  { section: "feed", label: "Feed", icon: Rss },
  { section: "trending", label: "Trending", icon: TrendingUp },
  { section: "favorites", label: "Favorites", icon: Star },
  { section: "settings", label: "Settings", icon: Settings },
]

type SidebarProps = {
  activeSection: DashboardSection
  onSelectSection: (section: DashboardSection) => void
}

export function Sidebar({ activeSection, onSelectSection }: SidebarProps) {
  return (
    <aside className="hidden w-56 shrink-0 flex-col gap-1 border-r border-line bg-surface p-4 md:flex">
      <div className="mb-6 px-2">
        <span className=" text-xl font-semibold">Signal</span>
      </div>
      {navItems.map(({ section, label, icon: Icon }) => {
        const isActive = section === activeSection
        return (
          <button
            key={section}
            type="button"
            onClick={() => onSelectSection(section)}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
              isActive
                ? "bg-canvas font-medium text-ink"
                : "text-ink-muted hover:bg-canvas"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        )
      })}
    </aside>
  )
}
