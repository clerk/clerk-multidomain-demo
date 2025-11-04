import { ArrowRight } from "lucide-react";
import { Card, HeroCard } from "./card";
import { getLink, type LinkComponentType } from "./link-wrapper";
import { TabDomainToggle } from "./tab-domain-toggle";

export type { LinkComponentType };

export function SatelliteHomePage({
  LinkComponent,
  isDevelopment,
  rootDomainUrl,
  clerkDomain,
  clerkSignInUrl,
  isNextJs = true,
}: {
  LinkComponent: LinkComponentType;
  isDevelopment: boolean;
  rootDomainUrl: string;
  clerkDomain: string;
  clerkSignInUrl: string;
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
              Clerk Satellite Domain Demo
            </h1>
            <p className="text-xl text-muted-foreground">
              Authentication across different domains
            </p>
          </div>

          <HeroCard
            title="Satellite Domain Homepage"
            subject="The authentication flow will always initiate from the Root Domain"
          >
            {isDevelopment && (
              <Card variant="gray">
                <h3 className="font-medium mb-2  text-black-800">
                  Development Environment
                </h3>
                <p className="text-sm">
                  Test the authentication flow by accessing the protected
                  dashboard route at{" "}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded text-gray-700">
                    {clerkDomain}/dashboard
                  </code>{" "}
                  without logging in. You&apos;ll be redirected to the Primary
                  domain&apos;s sign-in page at{" "}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded text-gray-700">
                    {clerkSignInUrl}
                  </code>{" "}
                  and then back to the Satellite domain after successful
                  authentication.
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
                    href="https://clerk-multidomain-satellite.com/"
                    className="text-gray-600 font-medium hover:text-purple-600 underline"
                  >
                    Satellite Domain
                  </Link>{" "}
                  and try to access the dashboard route. Since this is a
                  protected route defined with{" "}
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
                  the{" "}
                  <Link
                    href={`${rootDomainUrl}/sign-in`}
                    className="text-gray-600 font-medium hover:text-purple-600 underline"
                  >
                    Root Domain
                  </Link>{" "}
                  and then redirected back to the Satellite domain after
                  successfully completing the sign-in flow.
                </p>
              </Card>
            )}

            <Card variant="gray">
              <h3 className="font-medium mb-2">How It Works</h3>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2">
                  <ArrowRight className="h-4 w-4 text-gray-600 shrink-0 mt-0.5" />
                  <span>Root Domain stores authentication state</span>
                </li>
                <li className="flex gap-2">
                  <ArrowRight className="h-4 w-4 text-gray-600 shrink-0 mt-0.5" />
                  <span>Satellite domains read state securely</span>
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
            isSatelliteDomain={true}
            rootDomainUrl={rootDomainUrl}
            satelliteDomainUrl=""
            LinkComponent={LinkComponent}
          />
        </div>
      </main>
    </div>
  );
}
