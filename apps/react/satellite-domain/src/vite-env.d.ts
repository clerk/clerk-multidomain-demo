/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLERK_PUBLISHABLE_KEY: string
  readonly VITE_ALLOWED_REDIRECT_ORIGINS: string
  readonly VITE_CLERK_SIGN_IN_URL: string
  readonly VITE_SATELLITE_DOMAIN_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.png' {
  const value: string
  export default value
}
