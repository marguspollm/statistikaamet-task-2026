import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("avaneb alustamise leht", async ({ page }) => {
  await expect(page.locator("#root")).toBeVisible();
  await expect(page).toHaveTitle(/statistikaamet-task-2026/);
});

test("peale Alusta vajutamist avaneb esimene küsimus", async ({ page }) => {
  await page.getByRole("button", { name: "Alusta" }).click();
  await expect(page.getByText("Küsimus nr.")).toBeVisible();
});
