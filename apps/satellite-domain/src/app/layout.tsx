import type { Metadata } from 'next';
import { ClerkProvider, UserButton, SignedIn } from '@clerk/nextjs';
import Header from '@repo/ui/header';
import Footer from '@repo/ui/footer';
import SignedInNavbar from '@repo/ui/signedinnavbar';
import SignedOutNavbar from '@repo/ui/signedoutnavbar';
import './globals.css';
import clerkLogo from '@/assets/clerk-logo.png';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Satellite Next App',
  description: 'Clerk Satellite domain with Next JS',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='flex flex-col items-center justify-center'>
          <Header>
            <h1>
              <Image src={clerkLogo} alt='Clerk' height={30} />
            </h1>

            {userId ? <SignedInNavbar /> : <SignedOutNavbar />}
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
