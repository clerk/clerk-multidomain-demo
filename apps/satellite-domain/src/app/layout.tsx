import type { Metadata } from 'next';
import { ClerkProvider, UserButton } from '@clerk/nextjs';
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
  // Variables that can be used for the props on the ClerkProvider.
  // const primarySignInUrl = 'http://localhost:3000/sign-in';
  // const primarySignUpUrl = 'http://localhost:3000/sign-up';
  // const domain = 'http://localhost:3000';

  return (
    <ClerkProvider
    // These props need to be set on the ClerkProvider if you're not using environment variables.
    // isSatellite
    // domain={domain}
    // signInUrl={primarySignInUrl}
    // signUpUrl={primarySignUpUrl}
    >
      <html lang='en'>
        <body className='flex flex-col items-center'>
          <Header>
            <h1>
              <Image src={clerkLogo} alt='Clerk' height={30} />
            </h1>

            {userId ? <SignedInNavbar /> : <SignedOutNavbar />}
            <UserButton />
          </Header>
          <main className='container'>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
