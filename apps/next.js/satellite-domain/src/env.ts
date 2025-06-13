import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1),
    CLERK_IS_SATELLITE: z
      .string()
      .transform((s) => s === 'true' || Number(s) === 1),
    CLERK_DOMAIN: z.string().min(1),
    CLERK_SIGN_IN_URL: z.string().min(1),
    CLERK_SIGN_UP_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
    NEXT_PUBLIC_ROOT_DOMAIN_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_DOMAIN: z.string().min(1),
  },
  runtimeEnv: {
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SIGN_IN_URL: process.env.CLERK_SIGN_IN_URL,
    CLERK_SIGN_UP_URL: process.env.CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_DOMAIN: process.env.NEXT_PUBLIC_CLERK_DOMAIN,

    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_ROOT_DOMAIN_URL: process.env.NEXT_PUBLIC_ROOT_DOMAIN_URL,
    CLERK_IS_SATELLITE: process.env.CLERK_IS_SATELLITE,
    CLERK_DOMAIN: process.env.CLERK_DOMAIN,
  },
});
