import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    VITE_CLERK_SIGN_IN_URL: z.string().min(1),
    VITE_ROOT_DOMAIN_URL: z.string().min(1),
    VITE_CLERK_DOMAIN: z.string().min(1),
    VITE_CLERK_IS_SATELLITE: z
      .string()
      .transform((s) => s === "true" || Number(s) === 1),
  },
  runtimeEnv: import.meta.env,
});
