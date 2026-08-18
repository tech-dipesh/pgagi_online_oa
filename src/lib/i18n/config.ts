import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import { en } from "./locales/en"
import { es } from "./locales/es"
import { hi } from "./locales/hi"

export const supportedLanguages = ["en", "es", "hi"] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      hi: { translation: hi },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  })
}

export default i18next
