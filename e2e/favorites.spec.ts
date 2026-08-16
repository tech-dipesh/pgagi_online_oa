import { test, expect } from "@playwright/test"

test("starring a card moves it into the favorites section", async ({ page }) => {
  await page.goto("/")
  const firstStarButton = page.getByLabel("Add to favorites").first()
  await firstStarButton.click()
  await page.getByRole("button", { name: "Favorites" }).click()
  await expect(page.getByLabel("Remove from favorites")).toHaveCount(1)
})
