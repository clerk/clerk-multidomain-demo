import type { Metadata } from "next";
import { ClerkProvider, UserButton, Show } from "@clerk/nextjs";
import "./globals.css";
import clerkLogo from "@/assets/clerk-logo.png";
import Image from "next/image";
import { Header, Navbar } from "@repo/ui/header";
import { Footer } from "@repo/ui/footer";
import Link from "next/link";
import { NavbarLinks } from "@/components/navbar-links";

export const metadata: Metadata = {
  title: "Clerk Multi Domain Satellite Domain",
  description: "Clerk Satellite domain app with Next JS",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
        <ClerkProvider>
          <Header>
            <Link href="/">
              <h1>
                <Image src={clerkLogo} alt="Clerk" height={30} />
              </h1>
            </Link>
            <Navbar>
              <NavbarLinks />
            </Navbar>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </Header>
          <main className="container">{children}</main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
