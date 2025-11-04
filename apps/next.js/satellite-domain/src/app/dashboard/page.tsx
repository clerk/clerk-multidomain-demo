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
                Take a moment to look into the cookies that are applied to this
                site. You&apos;ll see multiple{" "}
                <span className="font-semibold">&apos;__client_uat&apos;</span>{" "}
                & <span className="font-semibold">&apos;__session&apos;</span>{" "}
                JWTs stored inside of your cookies. Some of these JWTs have
                suffixes applied to the end of them. These suffixes are used to
                differentiate what client/session is valid on each respective
                Satellite domain. Additionally, the specific
                <span className="font-semibold">
                  {" "}
                  &apos;__session&apos;
                </span>{" "}
                JWT is refreshed every{" "}
                <span className="font-semibold">60 seconds</span> to have the
                authentication state persist while there is activity on the
                page.{" "}
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
                  ClerkMiddleware!
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
