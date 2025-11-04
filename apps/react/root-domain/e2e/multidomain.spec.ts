import { clerk, setupClerkTestingToken } from "@clerk/testing/playwright";
import { test, expect, Page } from "@playwright/test";

// Environment & configuration
const satelliteUrl =
  process.env.VITE_SATELLITE_DOMAIN_URL || "http://localhost:3003";
const rootUrl = process.env.VITE_ROOT_DOMAIN_URL || "http://localhost:3002";

test.describe("React multi-domain behavior", () => {
  test.beforeEach(async ({ page }) => {
    await setupClerkTestingToken({ page });
    // start fresh every test case
    await signOutClerk({ page });
  });

  test.describe("Public routes", () => {
    test.describe("root domain", () => {
      test("can access home page of root domain without signing in", async ({
        page,
      }) => {
        const url = new URL(page.url());
        expect(url.origin).toBe(rootUrl);
        expect(url.pathname).toBe("/");
        await expect(page.getByText(/Clerk Root Domain Demo/)).toBeVisible();
      });
    });

    test.describe("satellite domain", () => {
      test("can access home page of satellite domain without signing in", async ({
        page,
      }) => {
        await page.goto(satelliteUrl);

        const url = new URL(page.url());
        expect(url.origin).toBe(satelliteUrl);
        expect(url.pathname).toBe("/");
        await expect(
          page.getByText(/Clerk Satellite Domain Demo/),
        ).toBeVisible();
      });
    });
  });

  test.describe("Auth flows and navigation", () => {
    test(`clicking Sign In in satellite takes user to root domain/sign-in, 
      then back to satellite after auth`, async ({ page }) => {
      await page.goto(satelliteUrl);
      await page.getByRole("button", { name: "Sign In" }).click();
      await page.waitForURL(new RegExp(`${rootUrl}/sign-in`));
      await expect(page.locator(".cl-signIn-root").first()).toBeVisible();

      await completeSignIn({ page });
      await page.waitForURL(new RegExp(`${satelliteUrl}/`));
      const finalUrl = new URL(page.url());
      expect(finalUrl.origin).toBe(satelliteUrl);
      expect(finalUrl.pathname).toBe("/");
    });

    test(`navigating to satellite protected route redirects to root 
      domain/sign-in and back to satellite after auth`, async ({ page }) => {
      // Navigate to satellite protected route — should redirect to Root /sign-in
      await page.goto(`${satelliteUrl}/dashboard`);
      await page.waitForURL(new RegExp(`${rootUrl}/sign-in`));
      await expect(page.locator(".cl-signIn-root").first()).toBeVisible();

      await completeSignIn({ page });

      // Should return back to the original Satellite path (/dashboard)
      await page.waitForURL(`${satelliteUrl}/dashboard`, { timeout: 3000 });
      await expect(
        page.getByRole("heading", { name: /Clerk Satellite Domain Demo/i }),
      ).toBeVisible();
    });

    test(`sign in on Root and navigate to Satellite root should be signed in`, async ({
      page,
    }) => {
      await page.goto(`${rootUrl}/sign-in`);
      // extra example with Clerk testing sign in helper
      await completeSignIn({ page });
      await page.goto(satelliteUrl);
      // dashboard link only renders when signed in
      await page.waitForSelector("h1:has-text('Dashboard')");
      // make sure we're still on satellite root / weren't redirected
      await page.waitForURL(new RegExp(`${satelliteUrl}/`));
    });
  });
});

// Complete sign-in with Clerk components
const completeSignIn = async ({ page }: { page: Page }) => {
  await page
    .locator("input[name=identifier]")
    .fill(process.env.E2E_CLERK_USER_EMAIL!);
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page
    .locator("input[name=password]")
    .fill(process.env.E2E_CLERK_USER_PASSWORD!);
  await page.getByRole("button", { name: "Continue", exact: true }).click();
};

// Ensure fully signed-out at Root
const signOutClerk = async ({ page }: { page: Page }) => {
  await page.goto(rootUrl);
  await clerk.signOut({ page });
};
