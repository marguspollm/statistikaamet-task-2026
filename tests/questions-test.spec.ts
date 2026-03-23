import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Alusta" }).click();
  await expect(page.getByText("Küsimus nr.")).toBeVisible();
});

test("kuvatakse õige vastus, kui valitud õige vastus", async ({ page }) => {
  await page.getByText("Tallinn").click();
  await expect(page.getByRole("img", { name: "success" })).toBeVisible();
  await expect(page.getByRole("img", { name: "wrong" })).toBeHidden();
});

test("kuvatakse õige ja vale vastus, kui valitud vale vastus", async ({
  page,
}) => {
  await page.getByText("Tartu").click();
  await expect(page.getByRole("img", { name: "wrong" })).toBeVisible();
  await expect(page.getByRole("img", { name: "success" })).toBeVisible();
});
