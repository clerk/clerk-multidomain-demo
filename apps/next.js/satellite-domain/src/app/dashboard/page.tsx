import { Card, HeroCard } from "@repo/ui/card";
import { UserDetails } from "./details";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">
              Clerk Satellite Domain Demo
            </h1>
            <p className="text-xl text-muted-foreground">
              Authentication across different domains
            </p>
          </div>

          <HeroCard
            title="Satellite Domain Dashboard"
            subject="A protected route on your Satellite domain"
          >
            <Card variant="gray">
              <h3 className="font-medium mb-2">
                Congratulations, you&apos;ve successfully authenticated across
                domains!
              </h3>
              <p>
                Open your browser&apos;s developer tools and inspect the cookies
                for this site. Clerk uses{" "}
                <span className="font-semibold">__session</span> to store a
                short-lived session JWT and{" "}
                <span className="font-semibold">__client_uat</span> to help
                check whether the session is still valid. The session token
                expires after 60 seconds; while the page is active, Clerk
                refreshes it in the background before it expires. Check each
                cookie&apos;s Domain value to see where it is scoped. The local
                demo uses separate localhost ports, which share a cookie host.
              </p>
            </Card>

            <div className="flex flex-col sm:flex-row gap-2 items-start">
              <Card variant="gray">
                <h3 className="font-medium mb-2  text-black-800">
                  This is a protected dashboard page for your Satellite domain!
                </h3>
                <p>
                  Users won&apos;t be able to access this page unless
                  they&apos;ve authenticated from the root domain first.
                </p>

                <p>
                  <span className="font-semibold">Note:</span> If attempting to
                  access this page without being signed in, a user will be
                  redirected to the sign-in page on the Root Domain then get
                  redirected back since this route is protected by
                  clerkMiddleware().
                </p>
              </Card>
            </div>
            <UserDetails />
          </HeroCard>
        </div>
      </main>
    </div>
  );
}
