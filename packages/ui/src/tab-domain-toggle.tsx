import { Tabs, TabsList, TabsContent } from "./tabs";
import { TabsTrigger } from "./tabs";
import { Card } from "./card";
import { CardHeader } from "./card";
import { CardTitle } from "./card";
import { Globe, Server } from "lucide-react";
import { CardContent } from "./card";
import { CardFooter } from "./card";
import { Button } from "./button";
import { getLink, LinkComponentType } from "./link-wrapper";
import { cn } from "../lib/utils";

export const TabDomainToggle = ({
  isSatelliteDomain = false,
  rootDomainUrl,
  satelliteDomainUrl,
  LinkComponent,
}: {
  isSatelliteDomain?: boolean;
  rootDomainUrl: string;
  satelliteDomainUrl: string;
  LinkComponent: LinkComponentType;
}) => {
  const Link = getLink(LinkComponent);
  return (
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
          {/* Root Domain Card */}
          <Card className={!isSatelliteDomain ? "shadow-sm relative" : ""}>
            <CardHeader
              className={cn(
                "pb-2",
                !isSatelliteDomain && "bg-gray-100 border-b border-purple-100",
              )}
            >
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-gray-600" />
                Root Domain
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                The Root Domain is where authentication state is stored and
                managed. Users sign in here first.
              </p>
            </CardContent>
            {!isSatelliteDomain ? (
              <CardFooter className="bg-gray-100 border-t border-purple-100 p-0 h-14 absolute bottom-0 left-0 right-0">
                <div className="w-full flex items-center justify-center gap-2 py-1 text-sm font-medium text-gray-700">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                  You are currently on this domain
                </div>
              </CardFooter>
            ) : (
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={rootDomainUrl ?? ""}>Visit Root Domain</Link>
                </Button>
              </CardFooter>
            )}
          </Card>

          {/* Satellite Domain Card */}
          <Card className={isSatelliteDomain ? "shadow-sm relative" : ""}>
            <CardHeader
              className={cn(
                "pb-2",
                isSatelliteDomain && "bg-gray-100 border-b border-purple-100",
              )}
            >
              <CardTitle className="text-lg flex items-center gap-2">
                <Server className="h-5 w-5 text-gray-600" />
                Satellite Domain
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Satellite domains securely read authentication state from the
                Root Domain without requiring re-authentication.
              </p>
            </CardContent>
            {isSatelliteDomain ? (
              <CardFooter className="bg-gray-100 border-t border-purple-100 p-0 h-14 absolute bottom-0 left-0 right-0">
                <div className="w-full flex items-center justify-center gap-2 py-1 text-sm font-medium text-gray-700">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                  You are currently on this domain
                </div>
              </CardFooter>
            ) : (
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={satelliteDomainUrl ?? ""}>
                    Visit Satellite Domain
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="setup" className="p-6 border rounded-b-lg shadow-xs">
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
              to incorporate Satellite domains into your production instance.
            </li>
            <li>
              Follow our instructions in the documentation link below on how to
              set this up.
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
              <h4 className="font-medium mb-2">See this app repository</h4>
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
  );
};
