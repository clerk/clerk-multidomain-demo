import { defineConfig, devices } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_URL = process.env.VITE_ROOT_DOMAIN_URL || "http://localhost:3002";
const SATELLITE_URL =
  process.env.VITE_SATELLITE_DOMAIN_URL || "http://localhost:3003";

export default defineConfig({
  testDir: path.join(__dirname, "e2e"),
  outputDir: "test-results/",
  webServer: [
    {
      // React root app (Vite)
      command: "pnpm dev",
      url: ROOT_URL,
      reuseExistingServer: !process.env.CI,
    },
    {
      // React satellite app (Vite)
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
      testIgnore: /.*authenticated\.spec\.ts/,
      dependencies: ["global setup"],
    },
    {
      name: "chromium-authenticated",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.clerk/user.json",
      },
      testMatch: /.*authenticated\.spec\.ts/,
      dependencies: ["global setup"],
    },
  ],
});
