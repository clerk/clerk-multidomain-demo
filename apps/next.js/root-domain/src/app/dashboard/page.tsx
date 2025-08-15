import Link from "next/link";
import { Card, HeroCard } from "@repo/ui/card";
import { UserDetails } from "./details";

export default function DashboardPage() {
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
            title="Root Domain Dashboard"
            subject="The Root Domain handles authentication for all domains"
          >
            <div className="flex flex-col sm:flex-row gap-2 items-start">
              <Card variant="gray">
                <h3 className="font-medium mb-2  text-black-800">
                  Testing the Satellite domain feature:
                </h3>
                <p>
                  This is a protected route on the Root Domain. If you&apos;re
                  able to access this page that means you have a valid session!
                  We encourage you to sign out using our{" "}
                  <Link
                    href="https://clerk.com/docs/components/user/user-button"
                    className="text-gray-600 font-medium hover:text-purple-600 underline"
                  >
                    UserButton
                  </Link>{" "}
                  in the top right corner and follow the instructions on the
                  homepage to test how this feature works!
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
