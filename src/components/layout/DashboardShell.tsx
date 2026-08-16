"use client"

import { useState } from "react"
import { Sidebar, type DashboardSection } from "./Sidebar"
import { Header } from "./Header"
import { FeedSection } from "@/components/feed/FeedSection"
import { TrendingSection } from "@/components/feed/TrendingSection"
import { FavoritesSection } from "@/components/feed/FavoritesSection"
import { PreferencesPanel } from "@/components/settings/PreferencesPanel"

const sectionTitles: Record<DashboardSection, string> = {
  feed: "Your feed",
  trending: "Trending now",
  favorites: "Favorites",
  settings: "Settings",
}

export function DashboardShell() {
  const [activeSection, setActiveSection] = useState<DashboardSection>("feed")

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} onSelectSection={setActiveSection} />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 px-6 py-6">
          <h1 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-semibold">
            {sectionTitles[activeSection]}
          </h1>
          {activeSection === "feed" && <FeedSection />}
          {activeSection === "trending" && <TrendingSection />}
          {activeSection === "favorites" && <FavoritesSection />}
          {activeSection === "settings" && <PreferencesPanel />}
        </main>
      </div>
    </div>
  )
}
