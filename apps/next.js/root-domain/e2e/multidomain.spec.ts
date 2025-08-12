import { setupClerkTestingToken } from "@clerk/testing/playwright";
import { test, expect } from "@playwright/test";

const satelliteUrl =
  process.env.NEXT_PUBLIC_SATELLITE_DOMAIN_URL || "http://localhost:3001";
const rootUrl =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN_URL || "http://localhost:3000";

test.describe("Next.js multi-domain behavior (signed-out)", () => {
  test.beforeEach(async ({ page }) => {
    await setupClerkTestingToken({ page });
  });

  test("clicking Sign In in satellite takes user to root domain sign-in", async ({
    page,
  }) => {
    // Go to satellite homepage
    await page.goto(satelliteUrl);

    // Click the Sign In button rendered by <SignInButton mode=redirect>
    await page.getByRole("button", { name: "Sign In" }).click();

    // Expect to be on root domain sign-in page
    const currentUrl = new URL(page.url());
    expect(currentUrl.origin).toBe(rootUrl);
    expect(currentUrl.pathname).toBe("/sign-in");
    await expect(page.locator(".cl-signIn-root").first()).toBeVisible();
  });

  test("navigating to satellite protected route redirects to root domain sign-in", async ({
    page,
  }) => {
    // Go directly to satellite protected dashboard
    await page.goto(`${satelliteUrl}/dashboard`);

    // Expect redirect to root domain sign-in
    const currentUrl2 = new URL(page.url());
    expect(currentUrl2.origin).toBe(rootUrl);
    expect(currentUrl2.pathname).toBe("/sign-in");
    await expect(page.locator(".cl-signIn-root").first()).toBeVisible();
  });
});
