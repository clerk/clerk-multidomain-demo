<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/light-logo.png">
      <img alt="Clerk Logo for light background" src="./public/dark-logo.png" height="64">
    </picture>
  </a>
  <br />
</p>
<div align="center">
  <h1>
    Satellite domain demo using Turborepo with Clerk, Next.js, and React
  </h1>
  <a href="https://www.npmjs.com/package/@clerk/clerk-js">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@clerk/clerk-js" />
  </a>
  <a href="https://discord.com/invite/b5rXHjAg7A">
    <img alt="Discord" src="https://img.shields.io/discord/856971667393609759?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <a href="https://twitter.com/clerkdev">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40clerkdev&style=social&url=https%3A%2F%2Ftwitter.com%2Fclerkdev" />
  </a>
  <br />
  <br />
  <img alt="Clerk Hero Image" src="./public/hero.png">
</div>

## Introduction

Clerk is a developer-first authentication and user management solution. It provides pre-built React components and hooks for sign-in, sign-up, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be dropped into any React or Next.js application.

This demo can be used as a reference for how to implement Clerk authentication to persist across different domains using Turborepo, Clerk, Next.js, and React.

## Live production examples

### Next.js apps

- [Root domain](https://clerk-multidomain-root.com/)
- [Satellite domain](https://clerk-multidomain-satellite.com/)

### React apps

- [Root domain](https://react.clerk-multidomain-root.com/)
- [Satellite domain](https://react.clerk-multidomain-satellite.com/)

## Running the example repository

To run the example locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-nextjs-app-quickstart).

1. Go to the [Clerk Dashboard](https://dashboard.clerk.com?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-nextjs-app-quickstart) and create an application.

1. This example uses Turborepo and pnpm. In the root of the app, run `pnpm install` to install the required dependencies for all applications.

1. Ensure the `allowedRedirectOrigin` prop on the root domain's `<ClerkProvider/>` matches the port your satellite domain is running on.

1. Set the required Clerk environment variables as shown in the `.env.example` files:
   - **Next.js apps**: [root-domain/.env.example](/apps/next.js/root-domain/.env.example) and [satellite-domain/.env.example](/apps/next.js/satellite-domain/.env.example)
   - **React apps**: [root-domain/.env.example](/apps/react/root-domain/.env.example) and [satellite-domain/.env.example](/apps/react/satellite-domain/.env.example)

1. **Running the applications**: You can run the applications using the following commands from the root directory:
   - `pnpm dev:nextjs` - Runs only the Next.js applications (ports 3000 and 3001)
   - `pnpm dev:react` - Runs only the React applications (ports 3002 and 3003)
   - `pnpm dev` - Runs all applications (Next.js and React apps) simultaneously

   > [!NOTE]
   > **Default ports:**
   >
   > - Next.js root domain: `http://localhost:3000`
   > - Next.js satellite domain: `http://localhost:3001`
   > - React root domain: `http://localhost:3002`
   > - React satellite domain: `http://localhost:3003`

## End-to-End Testing

This repository includes e2e tests using [Playwright](https://playwright.dev/) to verify the multi-domain authentication flows between root and satellite domains.

### Test Structure

The e2e tests are organized by framework and include:

- **Next.js tests**: Located in `apps/next.js/root-domain/e2e/`
- **React tests**: Located in `apps/react/root-domain/e2e/`

Each test suite includes:

- `global.setup.ts` - Global setup including Clerk authentication configuration
- `multidomain.spec.ts` - Multi-domain authentication flow tests
- `app.spec.ts` - Basic application functionality tests

### Running Tests

You'll need a test user account and have either `username + password` or `email + password` authentication enabled in your Clerk Dashboard. This example is configured to use email and password authentication, but you can modify it to use username and password instead with minor changes to the test files.

Before running e2e tests, ensure you have:

1. **Environment variables set** for test authentication:

   ```bash
   E2E_CLERK_USER_USERNAME=your-test-user-username
   E2E_CLERK_USER_EMAIL=your-test-user-email
   E2E_CLERK_USER_PASSWORD=your-test-user-password
   ```

2. **Run tests for specific frameworks**:

   ```bash
   # Run Next.js e2e tests only
   pnpm e2e:nextjs

   # Run React e2e tests only
   pnpm e2e:react
   ```

The tests will automatically:

- Start both root and satellite domain applications
- Run authentication flows across domains
- Verify proper redirection and state persistence
- Test both public and protected routes

> [!NOTE]
> The e2e tests use the `@clerk/testing` package for reliable authentication testing and will create test user sessions as needed. [Learn more here.](https://clerk.com/docs/testing/playwright/overview)

### Troubleshooting

**Issue: "Executable doesn't exist" error when running e2e tests**

If you encounter an error like:

```
Error: browserType.launch: Executable doesn't exist at /path/to/playwright/chromium
```

This means Playwright browser binaries are not installed. Run:

```bash
# Install browsers for all e2e test suites
pnpm e2e:install:browsers
```

This typically happens on fresh installations or after updating Playwright versions.

## Learn more

Check out the following resources:

- [Satellite domains: Authentication across different domains](https://clerk.com/docs/advanced-usage/satellite-domains#how-to-add-satellite-domains)
- [Clerk Documentation](https://clerk.com/docs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-nextjs-app-quickstart)
- [Next.js Documentation](https://nextjs.org/docs)
- [Turbo Repos](https://turbo.build/repo/docs)

## Found an issue or want to leave feedback

Feel free to create a support thread on our [Discord](https://clerk.com/discord). Our support team will be happy to assist you in the `#support` channel.

## Connect with us

You can discuss ideas, ask questions, and meet others from the community in our [Discord](https://discord.com/invite/b5rXHjAg7A).

If you prefer, you can also find support through our [Twitter](https://twitter.com/ClerkDev), or you can [email](mailto:support@clerk.dev) us!
