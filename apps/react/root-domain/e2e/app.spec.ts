import { clerk, setupClerkTestingToken } from "@clerk/testing/playwright";
import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.describe("main tests", () => {
  test("sign in", async ({ page }) => {
    await setupClerkTestingToken({ page });

    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/sign-in/);
    await page.waitForSelector(".cl-signIn-root", { state: "attached" });
    await page
      .locator("input[name=identifier]")
      .fill(process.env.E2E_CLERK_USER_EMAIL!);
    await page.getByRole("button", { name: "Continue", exact: true }).click();
    await page
      .locator("input[name=password]")
      .fill(process.env.E2E_CLERK_USER_PASSWORD!);
    await page.getByRole("button", { name: "Continue", exact: true }).click();
    await page.waitForURL("**/dashboard");
  });

  test("sign in using helper", async ({ page }) => {
    await page.goto("/");
    await clerk.signIn({
      page,
      signInParams: {
        strategy: "password",
        identifier: process.env.E2E_CLERK_USER_EMAIL!,
        password: process.env.E2E_CLERK_USER_PASSWORD!,
      },
    });
    await page.goto("/dashboard");
    await page.waitForSelector("h1:has-text('Clerk Root Domain Demo')");
  });

  test("sign out using helpers", async ({ page }) => {
    await page.goto("/");
    await clerk.signIn({
      page,
      signInParams: {
        strategy: "password",
        identifier: process.env.E2E_CLERK_USER_EMAIL!,
        password: process.env.E2E_CLERK_USER_PASSWORD!,
      },
    });
    await page.goto("/dashboard");
    await page.waitForSelector("h1:has-text('Clerk Root Domain Demo')");
    await clerk.signOut({ page });
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/sign-in/);
  });
});
