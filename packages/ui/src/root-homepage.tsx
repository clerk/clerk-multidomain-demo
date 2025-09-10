import { ArrowRight, Globe, Server } from "lucide-react";
import { Button } from "./button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  HeroCard,
} from "./card";

export type LinkComponentType = React.ComponentType<{
  href?: string;
  to?: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}>;

type LinkProps = React.ComponentProps<LinkComponentType>;

// support either href or to prop, so next/link or react-router-dom/link can be used
function getLink(LinkComponent: LinkComponentType) {
  const WrappedLink = (props: LinkProps) => {
    const { href, to, ...restProps } = props;

    const url = href || to;
    const linkProps = {
      ...restProps,
      href: url,
      to: url,
    };

    return <LinkComponent {...linkProps} />;
  };

  WrappedLink.displayName = `repo-ui-link`;

  return WrappedLink;
}

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
                  and try to access the page. Since the entire site is protected
                  with{" "}
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
          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="setup">Get Started</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            <TabsContent
              value="overview"
              className="p-6 border rounded-b-lg shadow-xs"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-sm relative">
                  <CardHeader className="pb-2 bg-gray-100 border-b border-purple-100">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-gray-600" />
                      Root Domain
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      The Root Domain is where authentication state is stored
                      and managed. Users sign in here first.
                    </p>
                  </CardContent>
                  <CardFooter className="bg-gray-100 border-t border-purple-100 p-0 h-14 absolute bottom-0 left-0 right-0">
                    <div className="w-full flex items-center justify-center gap-2 py-1 text-sm font-medium text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                      You are currently on this domain
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Server className="h-5 w-5 text-gray-600" />
                      Satellite Domain
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      Satellite domains securely read authentication state from
                      the Root Domain without requiring re-authentication.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={satelliteDomainUrl ?? ""}>
                        Visit Satellite Domain
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="setup"
              className="p-6 border rounded-b-lg shadow-xs"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Setting up Multi-Domain Authentication
                </h3>
                <ol className="space-y-3 list-decimal list-inside text-sm text-muted-foreground ">
                  <li>
                    Ensure you have the{" "}
                    <Link
                      href="https://clerk.com/docs/pricing"
                      className="text-gray-600 font-medium hover:text-purple-600 underline"
                    >
                      Enhanced Authentication Add-on
                    </Link>{" "}
                    to incorporate Satellite domains into your production
                    instance.
                  </li>
                  <li>
                    Follow our instructions in the documentation link below on
                    how to set this up.
                  </li>
                </ol>
                <div className="pt-4">
                  <Link
                    href="https://clerk.com/docs/advanced-usage/satellite-domains"
                    target="_blank"
                  >
                    <Button>View Full Documentation</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="examples"
              className="p-6 border rounded-b-lg shadow-xs"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Example Implementations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">
                      See this app repository
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete Next.js and React (Vite) apps with all required
                      configuration.
                    </p>
                    <Link
                      href="https://github.com/clerk/clerk-multidomain-demo/"
                      target="_blank"
                    >
                      <Button variant="default" size="sm">
                        View Example
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
