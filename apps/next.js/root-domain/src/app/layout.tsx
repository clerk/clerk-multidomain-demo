import type { Metadata } from "next";
import { ClerkProvider, UserButton, SignedIn } from "@clerk/nextjs";
import "./globals.css";
import clerkLogo from "@/assets/clerk-logo.png";
import Image from "next/image";
import { Header, Navbar } from "@repo/ui/header";
import { Footer } from "@repo/ui/footer";
import Link from "next/link";
import { NavbarLinks } from "@/components/navbar-links";

export const metadata: Metadata = {
  title: "Clerk Multi Domain Root App",
  description: "Clerk Root Domain with Next JS",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
      allowedRedirectOrigins={
        process.env.NEXT_PUBLIC_ALLOWED_REDIRECT_ORIGINS?.split(",") ?? []
      }
    >
      <html lang="en">
        <body className="flex flex-col items-center">
          <Header>
            <Link href="/">
              <h1>
                <Image src={clerkLogo} alt="Clerk" height={30} />
              </h1>
            </Link>
            <Navbar>
              <NavbarLinks />
            </Navbar>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <main className="container">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
