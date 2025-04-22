import type { Metadata } from 'next';
import { ClerkProvider, UserButton } from '@clerk/nextjs';
import Header from '@repo/ui/header';
import SignedInNavbar from '@repo/ui/signedinnavbar';
import SignedOutNavbar from '@repo/ui/signedoutnavbar';
import './globals.css';
import clerkLogo from '@/assets/clerk-logo.png';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Footer from '@repo/ui/footer';

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
  //Variables used to assign SignIn and SignUp urls for the respective props on the ClerkProvider.
  // const primarySignInUrl = '/sign-in';
  // const primarySignUpUrl = '/sign-up';

  return (
    <ClerkProvider
      //These props are only utilized if you're not using the environment variable approach. This is set to redirect users to the respective SignIn and SignUp flows.
      // signInUrl={primarySignInUrl}
      // signUpUrl={primarySignUpUrl}
      allowedRedirectOrigins={[
        process.env.NEXT_PUBLIC_ALLOWED_REDIRECT_ORIGIN ?? '',
      ]}
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
