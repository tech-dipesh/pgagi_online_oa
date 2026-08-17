"use client"

import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDebouncedValue } from "@/hooks/useDebouncedValue"
import { useAppDispatch } from "@/lib/store/hooks"
import { setSearchTerm } from "@/lib/store/feedSlice"

export function SearchBar() {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState("")
  const debouncedValue = useDebouncedValue(inputValue, 300)

  useEffect(() => {
    dispatch(setSearchTerm(debouncedValue))
  }, [debouncedValue, dispatch])

  return (
    <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2">
      <Search size={16} className="text-ink-muted" />
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder={t("search.placeholder")}
        className="w-full bg-transparent text-sm outline-none placeholder:text-ink-muted"
      />
    </div>
  )
}
