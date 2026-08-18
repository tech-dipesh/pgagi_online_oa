"use client"

import { supportedLanguages, type SupportedLanguage } from "@/lib/i18n/config"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { setLanguage } from "@/lib/store/preferencesSlice"

const languageLabels: Record<SupportedLanguage, string> = {
  en: "English",
  es: "Español",
  hi: "हिन्दी",
}

export function LanguageSwitcher() {
  const dispatch = useAppDispatch()
  const language = useAppSelector((state) => state.preferences.language)

  return (
    <select
      value={language}
      onChange={(event) => dispatch(setLanguage(event.target.value as SupportedLanguage))}
      aria-label="Choose language"
      className="rounded-lg border border-line bg-canvas px-2 py-1.5 text-sm cursor-pointer"
    >
      {supportedLanguages.map((code) => (
        <option key={code} value={code} className="cursor-pointer">
          {languageLabels[code]}
        </option>
      ))}
    </select>
  )
}
