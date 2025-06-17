'use client';

import { Button } from '@repo/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavbarLinks = ({ userId }: { userId: string }) => {
  const path = usePathname();

  const navbarLinks = [];
  if (!userId) {
    navbarLinks.push({ name: 'Sign In', link: '/sign-in' });
    navbarLinks.push({ name: 'Sign Up', link: '/sign-up' });
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
