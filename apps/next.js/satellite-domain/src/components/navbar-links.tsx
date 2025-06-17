'use client';

import { env } from '@/env';
import { useUser } from '@clerk/nextjs';
import { Button } from '@repo/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavbarLinks = ({ userId }: { userId: string }) => {
  const { user, isLoaded } = useUser()
  const path = usePathname();
  const navbarLinks = [];

  if (!isLoaded) return null
  console.log('USERID FROM CLIENT', user?.id)

  if (!userId) {
    const signInUrl = new URL(env.NEXT_PUBLIC_CLERK_SIGN_IN_URL);
    const signUpUrl = new URL(env.NEXT_PUBLIC_CLERK_SIGN_UP_URL);
    signInUrl.searchParams.set('redirect_url', env.NEXT_PUBLIC_CLERK_DOMAIN);
    signUpUrl.searchParams.set('redirect_url', env.NEXT_PUBLIC_CLERK_DOMAIN);

    navbarLinks.push({
      name: 'Sign In',
      // Redirect URL to be concatenized if the auth flow is initiated on a Satellites public route.
      link: signInUrl,
    });
    navbarLinks.push({
      name: 'Sign Up',
      link: signUpUrl,
    });
  }
  if (userId && path === '/')
    navbarLinks.push({ name: 'Dashboard', link: '/dashboard' });
  if (userId && path !== '/') navbarLinks.push({ name: 'Home', link: '/' });

  return (
    <>
      {navbarLinks.map((item, index) => (
        <Link key={index} href={item.link}>
          <Button variant='link' size='sm' className='mr-4'>
            <h1 className='font-bold'>{item.name}</h1>
          </Button>
        </Link>
      ))}
    </>
  );
};
