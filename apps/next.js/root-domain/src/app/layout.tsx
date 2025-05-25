import type { Metadata } from 'next';
import { ClerkProvider, UserButton, SignedIn } from '@clerk/nextjs';
import './globals.css';
import { auth } from '@clerk/nextjs/server';
import clerkLogo from '@/assets/clerk-logo.png';
import Image from 'next/image';
import { Header, Navbar } from '@repo/ui/header'
import { Footer } from '@repo/ui/footer'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Root Domain Next App',
  description: 'Clerk Root domain with Next JS',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  if (!process.env.NEXT_PUBLIC_ALLOWED_REDIRECT_ORIGINS) {
    throw new Error(
      'You need to set valid allowedRedirectOrigins on the ClerkProvider'
    );
  }

  return (
    <ClerkProvider
      allowedRedirectOrigins={process.env.NEXT_PUBLIC_ALLOWED_REDIRECT_ORIGINS.split(
        ','
      )}
    >
      <html lang='en'>
        <body className='flex flex-col items-center'>
          <Header >
            <Link href="/">
              <h1>
                <Image src={clerkLogo} alt='Clerk' height={30} />
              </h1>
            </Link>
            <Navbar userId={userId} />

            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <main className='container'>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
