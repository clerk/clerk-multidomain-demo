import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);
const options = {
  isSatellite:
    process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE === 'true' ? true : false,
  // Or, in development:
  //isSatellite: true
  signInUrl: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
  signUpUrl: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
  // Or, in development:
  // signInUrl: 'http://localhost:3000/sign-in',
  // signUpUrl: 'http://localhost:3000/sign-up',
  domain: process.env.NEXT_PUBLIC_CLERK_DOMAIN,
  // Or, in development:

  // domain: 'http://localhost:3000',
};
export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
