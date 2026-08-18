"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Sidebar, type DashboardSection } from "./Sidebar"
import { Header } from "./Header"
import { FeedSection } from "@/components/feed/FeedSection"
import { TrendingSection } from "@/components/feed/TrendingSection"
import { FavoritesSection } from "@/components/feed/FavoritesSection"
import { PreferencesPanel } from "@/components/settings/PreferencesPanel"
import { ProfilePanel } from "@/components/settings/ProfilePanel"
import { useLiveFeed } from "@/hooks/useLiveFeed"

export function DashboardShell() {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState<DashboardSection>("feed")
  useLiveFeed()

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} onSelectSection={setActiveSection} />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 px-6 py-6">
          <h1 className="mb-4 font-display text-2xl font-semibold">
            {t(`section.${activeSection}`)}
          </h1>
          {activeSection === "feed" && <FeedSection />}
          {activeSection === "trending" && <TrendingSection />}
          {activeSection === "favorites" && <FavoritesSection />}
          {activeSection === "settings" && (
            <div className="flex flex-col gap-6">
              <PreferencesPanel />
              <ProfilePanel />
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
