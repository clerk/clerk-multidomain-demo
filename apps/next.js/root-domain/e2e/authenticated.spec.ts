import { test, expect } from "@playwright/test";

test.describe("authenticated tests", () => {
  test("already signed in", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(
      page.getByRole("heading", { name: "Clerk Root Domain Demo" }),
    ).toBeVisible();
  });
});
