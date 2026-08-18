import { SearchBar } from "@/components/search/SearchBar"
import { DarkModeToggle } from "@/components/theme/DarkModeToggle"
import { LanguageSwitcher } from "@/components/settings/LanguageSwitcher"
import { LiveIndicator } from "@/components/feed/LiveIndicator"
import { ProfileMenu } from "@/components/auth/ProfileMenu"

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-line bg-surface px-6 py-4">
      <div className="flex flex-1 items-center gap-4">
        <SearchBar />
        <LiveIndicator />
      </div>
      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <DarkModeToggle />
        <ProfileMenu />
      </div>
    </header>
  )
}
