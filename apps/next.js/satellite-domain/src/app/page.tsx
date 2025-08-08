import Link from "next/link";
import { ArrowRight, Globe, Server } from "lucide-react";
import { Button } from "@repo/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  HeroCard,
} from "@repo/ui/card";

export default function HomePage() {
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
            {process.env.NODE_ENV === "development" && (
              <Card variant="gray">
                <p className="text-sm">
                  Test the authentication flow by accessing the protected
                  dashboard route at{" "}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded text-gray-700">
                    {process.env.NEXT_PUBLIC_CLERK_DOMAIN}/dashboard
                  </code>{" "}
                  without logging in. You&apos;ll be redirected to the Primary
                  domain&apos;s sign-in page at{" "}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded text-gray-700">
                    {process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
                  </code>{" "}
                  and then back to the Satellite domain after successful
                  authentication.
                </p>
              </Card>
            )}

            {process.env.NODE_ENV !== "development" && (
              <div className="flex flex-col sm:flex-row gap-2 items-start">
                <Card variant="gray">
                  <h3 className="font-medium mb-2  text-black-800">
                    Production Environment
                  </h3>
                  <p className="text-sm">
                    To see how this works in a production environment, head over
                    to the{" "}
                    <Link
                      href="https://clerk-multidomain-satellite.com/"
                      className="text-gray-600 font-medium hover:text-purple-600"
                    >
                      Satellite Domain
                    </Link>{" "}
                    and try to access the dashboard page. Since this is a
                    protected route defined in{" "}
                    <Link
                      href="https://clerk.com/docs/references/nextjs/clerk-middleware"
                      className="text-gray-600 font-medium hover:text-purple-600"
                    >
                      clerkMiddleware
                    </Link>{" "}
                    you&apos;ll see that you&apos;re redirected to authenticate
                    on the{" "}
                    <Link
                      href={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_URL}/sign-in`}
                      className="text-gray-600 font-medium hover:text-purple-600"
                    >
                      Root Domain
                    </Link>{" "}
                    and then redirected back to the Satellite domain after
                    successfully completing the sign-in flow.
                  </p>
                </Card>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2 items-start">
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
            </div>
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
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Server className="h-5 w-5 text-gray-600" />
                      Root Domain
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      The Root Domain is where authentication state is stored
                      and managed. Users sign in here first.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link
                        href={
                          process.env.NEXT_PUBLIC_ROOT_DOMAIN_URL ??
                          "/next-public-root-domain-url-missing"
                        }
                      >
                        Visit Root Domain
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-purple-200 shadow-sm relative">
                  <CardHeader className="pb-2 bg-gray-100 border-b border-purple-100">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-gray-600" />
                      Satellite Domain
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      Satellite domains securely read authentication state from
                      the Root Domain without requiring re-authentication.
                    </p>
                  </CardContent>
                  <CardFooter className="bg-gray-100 border-t border-purple-100 p-0 h-14 absolute bottom-0 left-0 right-0">
                    <div className="w-full flex items-center justify-center gap-2 py-1 text-sm font-medium text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                      You are currently on this domain
                    </div>
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
                <ol className="space-y-3 list-decimal list-inside text-sm text-muted-foreground">
                  <li>
                    Ensure you have the Enhanced Authentication add-on to
                    incorporate Satellite domains into your production instance.
                  </li>
                  <li>
                    Follow our instructions in the documentation linked below on
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
                    <h4 className="font-medium mb-2">Next.js Example</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete Next.js implementation with middleware and domain
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
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">React Example</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      React implementation with React Router and Clerk context
                      providers.
                    </p>
                    <Button variant="default" size="sm">
                      View Example
                    </Button>
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
