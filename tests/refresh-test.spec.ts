import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Alusta" }).click();
  await expect(page.getByText("Küsimus nr.")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Järgmine küsimus" }),
  ).toBeDisabled();
});

test("refresh pärast alustamist", async ({ page }) => {
  await page.reload();
  await expect(page.getByText("Küsimus nr.")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Järgmine küsimus" }),
  ).toBeDisabled();
});

test("refresh pärast õiget vastust", async ({ page }) => {
  await page.getByText("Tallinn").click();
  await expect(page.getByRole("img", { name: "success" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Järgmine küsimus" }),
  ).toBeEnabled();

  await page.reload();
  await expect(page.getByRole("img", { name: "success" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Järgmine küsimus" }),
  ).toBeEnabled();
});

test("refresh pärast valet vastust", async ({ page }) => {
  await page.getByText("Tartu").click();
  await expect(page.getByRole("img", { name: "success" })).toBeVisible();
  await expect(page.getByRole("img", { name: "wrong" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Järgmine küsimus" }),
  ).toBeEnabled();

  await page.reload();
  await expect(page.getByRole("img", { name: "success" })).toBeVisible();
  await expect(page.getByRole("img", { name: "wrong" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Järgmine küsimus" }),
  ).toBeEnabled();
});

test("refresh pärast lõpp tulemust", async ({ page }) => {
  for (let i = 1; i < 7; i++) {
    await page.getByTestId("answer-option").first().click();

    await page.getByRole("button").click();
    if (i == 6) {
      await page.getByRole("button").click();
    }
  }
  await page.reload();
  await expect(page.getByRole("button", { name: "Alusta" })).toBeVisible();
});
