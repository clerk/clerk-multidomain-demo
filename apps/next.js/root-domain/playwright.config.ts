import { defineConfig, devices } from "@playwright/test";
import path from "path";

// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000;

// Root and satellite URLs can be overridden via env for CI
const ROOT_URL =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN_URL || `http://localhost:${PORT}`;
const SATELLITE_URL =
  process.env.NEXT_PUBLIC_SATELLITE_DOMAIN_URL || "http://localhost:3001";

// Reference: https://playwright.dev/docs/test-configuration
export default defineConfig({
  testDir: path.join(__dirname, "e2e"),
  outputDir: "test-results/",
  webServer: [
    {
      // Root domain app
      command: "pnpm dev",
      url: ROOT_URL,
      reuseExistingServer: !process.env.CI,
    },
    {
      // Satellite domain app
      command: "pnpm dev",
      url: SATELLITE_URL,
      reuseExistingServer: !process.env.CI,
      cwd: path.join(__dirname, "../satellite-domain"),
    },
  ],

  use: {
    baseURL: ROOT_URL,
    trace: "retry-with-trace",
  },
  projects: [
    {
      name: "global setup",
      testMatch: /global\.setup\.ts/,
    },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      // Run all tests except the authenticated-only spec in this project
      testIgnore: /.*authenticated\.spec\.ts/,
      dependencies: ["global setup"],
    },
    {
      name: "chromium-authenticated",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.clerk/user.json",
      },
      // Only run the authenticated spec in this project
      testMatch: /.*authenticated\.spec\.ts/,
      dependencies: ["global setup"],
    },
  ],
});
