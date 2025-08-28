import { clerk, clerkSetup } from "@clerk/testing/playwright";
import { test as setup } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

setup.describe.configure({ mode: "serial" });

setup("global setup", async () => {
  await clerkSetup();
  if (
    !process.env.E2E_CLERK_USER_USERNAME ||
    !process.env.E2E_CLERK_USER_PASSWORD
  ) {
    throw new Error(
      "Please provide E2E_CLERK_USER_USERNAME and E2E_CLERK_USER_PASSWORD environment variables."
    );
  }
  if (!process.env.VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error(
      "Please provide VITE_CLERK_SIGN_IN_URL environment variable."
    );
  }
});

const authFile = path.join(__dirname, "../playwright/.clerk/user.json");

setup("authenticate", async ({ page }) => {
  page.setDefaultTimeout(60000); // Increase timeout for CI

  // Debug: Check if the app is responding
  console.log("Attempting to navigate to root domain...");
  await page.goto("/");

  // Check if page loaded properly
  console.log("Page title:", await page.title());
  console.log("Page URL:", page.url());

  await clerk.signIn({
    page,
    signInParams: {
      strategy: "password",
      identifier: process.env.E2E_CLERK_USER_USERNAME!,
      password: process.env.E2E_CLERK_USER_PASSWORD!,
    },
  });
  await page.goto("/dashboard");
  await page.waitForSelector("h1:has-text('Clerk Root Domain Demo')");
  await page.context().storageState({ path: authFile });
});
