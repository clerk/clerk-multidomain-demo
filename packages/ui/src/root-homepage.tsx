import { ArrowRight } from "lucide-react";
import { Card, HeroCard } from "./card";
import { getLink, type LinkComponentType } from "./link-wrapper";
import { TabDomainToggle } from "./tab-domain-toggle";
export type { LinkComponentType };

export function RootHomePage({
  LinkComponent,
  isDevelopment,
  satelliteDomainUrl,
  isNextJs = true,
}: {
  LinkComponent: LinkComponentType;
  isDevelopment: boolean;
  satelliteDomainUrl: string;
  isNextJs?: boolean;
}) {
  // create link component using the component passed
  const Link = getLink(LinkComponent);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">
              Clerk Root Domain Demo
            </h1>
            <p className="text-xl text-muted-foreground">
              Authentication across different domains
            </p>
          </div>

          <HeroCard
            title="Root Domain Homepage"
            subject="The Root Domain handles authentication for all domains"
          >
            <p>
              Your <span className="font-semibold">Primary</span> domain or in
              this case <span className="font-semibold">Root</span> domain is
              where the authentication state lives, and Satellite domains are
              able to securely read that state from the Root Domain, enabling a
              seamless authentication flow across domains. This example
              repository was created to demonstrate just that.
            </p>

            {isDevelopment && (
              <Card variant="gray">
                <h3 className="font-medium mb-2  text-black-800">
                  Development Environment
                </h3>
                <p className="text-sm">
                  Test the authentication flow by accessing the protected
                  dashboard route on our satellite domain at{" "}
                  <Link
                    href={`${satelliteDomainUrl}/dashboard`}
                    className="text-gray-600 font-medium hover:text-purple-600 underline"
                  >
                    {satelliteDomainUrl}/dashboard
                  </Link>{" "}
                  without logging in. You&apos;ll be redirected to Root Domain
                  to authenticate and then back to the Satellite domain after
                  successful authentication.
                </p>
              </Card>
            )}

            {!isDevelopment && (
              <Card variant="gray">
                <h3 className="font-medium mb-2  text-black-800">
                  Production Environment
                </h3>
                <p className="text-sm">
                  To see how this works in a production environment, head over
                  to the{" "}
                  <Link
                    href={satelliteDomainUrl ?? ""}
                    className="text-gray-600 font-medium hover:text-purple-600 underline"
                  >
                    Satellite Domain
                  </Link>{" "}
                  and try to access the dashboard route. Since the route is
                  protected with{" "}
                  {isNextJs ? (
                    <Link
                      href="https://clerk.com/docs/references/nextjs/clerk-middleware"
                      className="text-gray-600 font-medium hover:text-purple-600 underline"
                    >
                      clerkMiddleware
                    </Link>
                  ) : (
                    <Link
                      href="https://github.com/clerk/clerk-multidomain-demo/blob/main/apps/react/root-domain/src/components/ProtectedRoute.tsx"
                      className="text-gray-600 font-medium hover:text-purple-600 underline"
                    >
                      Clerk
                    </Link>
                  )}{" "}
                  you&apos;ll see that you&apos;re redirected to authenticate on
                  the Root Domain and then redirected back to the Satellite
                  domain after successfully completing the sign-in flow.
                </p>
              </Card>
            )}

            <Card variant="gray">
              <h3 className="font-medium mb-2">How It Works</h3>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2">
                  <ArrowRight className="h-4 w-4 text-gray-600 shrink-0 mt-0.5" />
                  <span>Root Domain initiates the authentication state</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="h-4 w-4 text-gray-600 shrink-0 mt-0.5" />
                  <span>
                    Satellite domains read state securely from the Primary
                  </span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="h-4 w-4 text-gray-600 shrink-0 mt-0.5" />
                  <span>Seamless redirection between domains</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="h-4 w-4 text-gray-600 shrink-0 mt-0.5" />
                  <span>Protected by clerkMiddleware</span>
                </li>
              </ul>
            </Card>
          </HeroCard>
          <TabDomainToggle
            rootDomainUrl=""
            satelliteDomainUrl={satelliteDomainUrl}
            LinkComponent={LinkComponent}
          />
        </div>
      </main>
    </div>
  );
}
