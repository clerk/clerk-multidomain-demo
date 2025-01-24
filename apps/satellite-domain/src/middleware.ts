import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);
const options = {
  isSatellite: true,
  // signInUrl: 'https://primary.dev/sign-in',
  // Or, in development:
  signInUrl: 'http://localhost:3000/sign-in',
  signUpUrl: 'http://localhost:3000/sign-up',
  // domain: 'https://primary.dev',
  // Or, in development:
  domain: 'http://localhost:3000',
};
export default clerkMiddleware(async(auth, request) => {
  if (!isPublicRoute(request)) {
   await auth().protect();
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
