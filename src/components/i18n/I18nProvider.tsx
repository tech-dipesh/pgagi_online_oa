"use client"

import { useEffect, type ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import i18next from "@/lib/i18n/config"
import { useAppSelector } from "@/lib/store/hooks"

export function I18nProvider({ children }: { children: ReactNode }) {
  const language = useAppSelector((state) => state.preferences.language)

  useEffect(() => {
    i18next.changeLanguage(language)
  }, [language])

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}
