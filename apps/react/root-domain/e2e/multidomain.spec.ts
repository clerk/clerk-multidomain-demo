import { clerk, setupClerkTestingToken } from "@clerk/testing/playwright";
import { test, expect } from "@playwright/test";

const satelliteUrl =
  process.env.VITE_SATELLITE_DOMAIN_URL || "http://localhost:3003";
const rootUrl = process.env.VITE_ROOT_DOMAIN_URL || "http://localhost:3002";

test.describe("React multi-domain behavior (signed-out)", () => {
  test.beforeEach(async ({ page }) => {
    await setupClerkTestingToken({ page });
  });

  test("clicking Sign In in satellite takes user to root domain sign-in", async ({
    page,
  }) => {
    await page.goto(satelliteUrl);
    await page.getByRole("button", { name: "Sign In" }).click();
    const url = new URL(page.url());
    expect(url.origin).toBe(rootUrl);
    expect(url.pathname).toBe("/sign-in");
    await expect(page.locator(".cl-signIn-root").first()).toBeVisible();
  });

  test("navigating to satellite protected route redirects to root domain sign-in and back to satellite after auth", async ({
    page,
  }) => {
    // Ensure fully signed-out at Root before initiating the satellite flow
    await page.goto(rootUrl);
    await clerk.signOut({ page });

    // Navigate to satellite protected route — should redirect to Root /sign-in
    await page.goto(`${satelliteUrl}/dashboard`);
    await page.waitForURL(new RegExp(`${rootUrl}/sign-in`), { timeout: 15000 });
    await expect(page.locator(".cl-signIn-root").first()).toBeVisible();
    // make sure we're on root domain sign-in page
    const currentUrl = new URL(page.url());
    expect(currentUrl.origin).toBe(rootUrl);
    expect(currentUrl.pathname).toBe("/sign-in");

    // Complete sign-in on Root
    await page
      .locator("input[name=identifier]")
      .fill(process.env.E2E_CLERK_USER_USERNAME!);
    await page.getByRole("button", { name: "Continue", exact: true }).click();
    await page
      .locator("input[name=password]")
      .fill(process.env.E2E_CLERK_USER_PASSWORD!);
    await page.getByRole("button", { name: "Continue", exact: true }).click();

    // Should return back to the original Satellite path (/dashboard)
    await page.waitForURL(`${satelliteUrl}/dashboard*`, { timeout: 20000 });
    await expect(
      page.getByRole("heading", { name: /Clerk Satellite Domain Demo/i })
    ).toBeVisible();
    const afterSignInCurrentUrl = new URL(page.url());
    expect(afterSignInCurrentUrl.origin).toBe(satelliteUrl);
    expect(afterSignInCurrentUrl.pathname).toBe("/dashboard");
  });
});
