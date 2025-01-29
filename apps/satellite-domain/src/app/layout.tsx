import type { Metadata } from 'next';
import { ClerkProvider,} from '@clerk/nextjs';
import Navbar from '@/components/Header';
import './globals.css';


export const metadata: Metadata = {
  title: 'Satellite Next App',
  description: 'Clerk Satellite domain with Next JS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const primarySignInUrl = 'http://localhost:3000/sign-in';
  // const primarySignUpUrl = 'http://localhost:3000/sign-up';
  // const domain = 'http://localhost:3000';

  return (
    <ClerkProvider
    // These props need to be set on the ClerkProvider 
    // isSatellite
    // domain={domain}
    // signInUrl={primarySignInUrl}
    // signUpUrl={primarySignUpUrl}
    >
      <html lang='en'>
        <body>

          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
