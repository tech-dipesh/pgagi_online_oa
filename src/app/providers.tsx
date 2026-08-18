"use client"

import type { ReactNode } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { SessionProvider } from "next-auth/react"
import { store, persistor } from "@/lib/store"
import { ThemeSync } from "@/components/theme/ThemeSync"
import { I18nProvider } from "@/components/i18n/I18nProvider"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nProvider>
            <ThemeSync />
            {children}
          </I18nProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  )
}
