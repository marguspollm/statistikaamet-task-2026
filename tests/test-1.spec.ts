import { expect, test } from "@playwright/test";
import { questionsData } from "../src/data/questions";

test("leht avaneb", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#root")).toBeVisible();
  await expect(page).toHaveTitle(/statistikaamet-task-2026/);
});

test("küsimus", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Alusta" }).click();
  await expect(page.getByText("Küsimus nr.")).toBeVisible();
});

test("vastab küsimus õige", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Alusta" }).click();
  await expect(page.getByText("Küsimus nr.")).toBeVisible();

  await page.getByText("Tallinn").click();
  await expect(page.getByRole("img", { name: "success" })).toBeVisible();
});

test("vastab küsimus vale", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Alusta" }).click();
  await expect(page.getByText("Küsimus nr.")).toBeVisible();

  await page.getByText("Tartu").click();
  await expect(page.getByRole("img", { name: "wrong" })).toBeVisible();
});

test("lõpp tulemus kõik õiged", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Alusta" }).click();
  for (let i = 0; i < 6; i++) {
    const question = questionsData[i];
    const correctAnswer =
      question.answers.find(answer => answer.id === question.correct)?.text ||
      "";
    await page.getByText(correctAnswer).click();
    if (i < 5) {
      await expect(page.getByRole("img", { name: "success" })).toBeVisible();
      await page.getByRole("button", { name: "Järgmine küsimus" }).click();
    } else {
      await page.getByRole("button", { name: "Lõpeta küsimustik" }).click();
    }
  }

  await expect(page.getByText("Tulemus: 6/6")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Alusta uuesti" }),
  ).toBeVisible();
});

test("lõpp tulemus kõik valed", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Alusta" }).click();
  for (let i = 0; i < 6; i++) {
    const question = questionsData[i];
    const wrongAnswer =
      question.answers.find(answer => answer.id != question.correct)?.text ||
      "";
    await page.getByText(wrongAnswer).click();
    if (i < 5) {
      await expect(page.getByRole("img", { name: "wrong" })).toBeVisible();
      await page.getByRole("button", { name: "Järgmine küsimus" }).click();
    } else {
      await page.getByRole("button", { name: "Lõpeta küsimustik" }).click();
    }
  }

  await expect(page.getByText("Tulemus: 0/6")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Alusta uuesti" }),
  ).toBeVisible();
});
