import test, { expect } from "@playwright/test";
import { questionsData } from "../src/data/questions";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Alusta" }).click();
});

test("kuvatakse lõpptulemus ja vastused, kui valitud kõik õiged vastused", async ({
  page,
}) => {
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
  await expect(page.getByText("Super, tunned Eestimaad läbi ja lõhki"));
  await expect(
    page.getByRole("button", { name: "Alusta uuesti" }),
  ).toBeVisible();
});

test("kuvatakse lõpptulemus ja vastused, kui valitud kõik valed vastused", async ({
  page,
}) => {
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
    page.getByText("Ära pead norgu lase, proovi uuesti"),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Alusta uuesti" }),
  ).toBeVisible();
});
