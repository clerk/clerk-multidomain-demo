import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    VITE_ALLOWED_REDIRECT_ORIGINS: z.string().min(1),
    VITE_CLERK_SIGN_IN_URL: z.string().min(1),
    VITE_SATELLITE_DOMAIN_URL: z.string().min(1),
  },
  runtimeEnv: import.meta.env,
});
