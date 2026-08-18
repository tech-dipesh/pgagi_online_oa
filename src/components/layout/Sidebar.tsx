"use client"

import { Rss, TrendingUp, Star, Settings } from "lucide-react"
import { useTranslation } from "react-i18next"

export type DashboardSection = "feed" | "trending" | "favorites" | "settings"

const navIcons: { section: DashboardSection; icon: typeof Rss }[] = [
  { section: "feed", icon: Rss },
  { section: "trending", icon: TrendingUp },
  { section: "favorites", icon: Star },
  { section: "settings", icon: Settings },
]

type SidebarProps = {
  activeSection: DashboardSection
  onSelectSection: (section: DashboardSection) => void
}

export function Sidebar({ activeSection, onSelectSection }: SidebarProps) {
  const { t } = useTranslation()

  return (
    <aside className="hidden w-56 shrink-0 flex-col gap-1 border-r border-line bg-surface p-4 md:flex">
      <div className="mb-6 px-2">
        <span className="font-display text-xl font-semibold">Signal</span>
      </div>
      {navIcons.map(({ section, icon: Icon }) => {
        const isActive = section === activeSection
        return (
          <button
            key={section}
            type="button"
            onClick={() => onSelectSection(section)}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors cursor-pointer ${
              isActive
                ? "bg-canvas font-medium text-ink"
                : "text-ink-muted hover:bg-canvas"
            }`}
          >
            <Icon size={18} />
            {t(`nav.${section}`)}
          </button>
        )
      })}
    </aside>
  )
}
