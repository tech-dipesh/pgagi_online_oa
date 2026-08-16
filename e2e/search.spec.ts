import { test, expect } from "@playwright/test"

test("searching filters the feed to matching cards", async ({ page }) => {
  await page.goto("/")
  await page.getByPlaceholder("Search news, movies, posts").fill("mario")
  await expect(page.getByText("The Super Mario Galaxy Movie")).toBeVisible()
  await expect(page.getByText("Toy Story 5")).not.toBeVisible()
})
