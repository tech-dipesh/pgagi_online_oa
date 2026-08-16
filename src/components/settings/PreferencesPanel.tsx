"use client"

import type { ContentCategory } from "@/lib/mock-data/types"
import { categoryLabel, categoryVar } from "@/lib/content-style"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { toggleCategory } from "@/lib/store/preferencesSlice"

const allCategories: ContentCategory[] = ["technology", "sports", "finance", "entertainment", "social"]

export function PreferencesPanel() {
  const dispatch = useAppDispatch()
  const favoriteCategories = useAppSelector((state) => state.preferences.favoriteCategories)

  return (
    <div className="max-w-md rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
      <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold">Content preferences</h2>
      <p className="mt-1 text-sm text-ink-muted">
        Choose which categories show up in your feed and trending sections.
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {allCategories.map((category) => {
          const checked = favoriteCategories.includes(category)
          return (
            <label
              key={category}
              className="flex cursor-pointer items-center justify-between rounded-lg border border-[var(--color-line)] px-3 py-2"
            >
              <span className="flex items-center gap-2 text-sm">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: categoryVar(category) }}
                />
                {categoryLabel(category)}
              </span>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => dispatch(toggleCategory(category))}
                className="h-4 w-4"
              />
            </label>
          )
        })}
      </div>
    </div>
  )
}
