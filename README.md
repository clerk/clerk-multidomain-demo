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
    Satellite domain demo using Turborepo with Clerk and Next.js
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

This demo can be used as a reference for how to implement Clerk authentication to persist across different domains using Turborepo, Clerk, and Next.js.

## Live production examples

- [Root domain](https://clerk-multidomain-root.com/)
- [Satellite domain](https://clerk-multidomain-satellite.com/)

## Running the example repository

To run the example locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-nextjs-app-quickstart).

1. Go to the [Clerk Dashboard](https://dashboard.clerk.com?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-nextjs-app-quickstart) and create an Next.js application.

1. Inside of both the `root-domain` and `satellite-domain` directories, install the [`@clerk/nextjs`](https://www.npmjs.com/package/@clerk/nextjs) package.

1. This example uses Turborepo and pnpm. In the root of the app, run `pnpm install` to install the required dependencies for both the root and satellite domain applications.
    > [!NOTE]
    > If you'd like each app to run on a certain port, you can specify the port in the dev script in the `package.json` file like: `"dev": "turbo dev -p 5000"`.

1. Ensure the `allowedRedirectOrigin` prop on the root domain's `<ClerkProvider/>` matches the port your satellite domain is running on.

1. Set the required Clerk environment variables as shown in both the [root `env.example`](/apps/root-domain/.env.example) and [satellite `env.example`](/apps/satellite-domain/.env.example) files.

1. Run `pnpm dev` to launch the development server.

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
