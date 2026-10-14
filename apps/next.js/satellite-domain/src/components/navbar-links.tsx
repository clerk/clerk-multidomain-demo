"use client";

import { SignInButton, Show } from "@clerk/nextjs";
import { Button } from "@repo/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarLinks = () => {
  const path = usePathname();

  return (
    <>
      <Show when="signed-out">
        <SignInButton mode="redirect">
          <Button variant="link" size="sm" className="mr-4">
            <h1 className="font-bold">Sign In</h1>
          </Button>
        </SignInButton>
      </Show>
      <Show when="signed-in">
        {path === "/" && (
          <Link href="/dashboard">
            <Button variant="link" size="sm" className="mr-4">
              <h1 className="font-bold">Dashboard</h1>
            </Button>
          </Link>
        )}
        {path !== "/" && (
          <Link href="/">
            <Button variant="link" size="sm" className="mr-4">
              <h1 className="font-bold">Home</h1>
            </Button>
          </Link>
        )}
      </Show>
    </>
  );
};
