"use client"

import type { ReactNode } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "@/lib/store"
import { ThemeSync } from "@/components/theme/ThemeSync"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeSync />
        {children}
      </PersistGate>
    </Provider>
  )
}
