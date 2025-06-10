'use client';

import { Button } from '@repo/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavbarLinks = ({ userId }: { userId: string }) => {
  const path = usePathname();
  const navbarLinks = [];

  if (!userId) {
    navbarLinks.push({
      name: 'Sign In',
      // Redirect URL to be concatenized if the auth flow is initiated on a Satellites public route.
      link: `${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}?redirect_url=http%3A%2F%2Flocalhost%3A3001`,
    });
    navbarLinks.push({
      name: 'Sign Up',
      link: `${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}?redirect_url=http%3A%2F%2Flocalhost%3A3001`,
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
