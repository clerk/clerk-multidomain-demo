import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
export default async function Header() {
  const { userId } = await auth();
  if (!userId)
    return (
      <header className='flex items-center justify-between text-white p-2'>
        <Link href='/'>
          <h1 className='font-bold'>Clerk</h1>
        </Link>

        <div className='flex ml-auto items-center gap-4'>
         <Link href='/sign-in'>
         <h1 className='font-bold'>Sign In</h1>
         </Link>

         <Link href='/sign-up'>
         <h1 className='font-bold'>Sign Up</h1>
         </Link>
        </div>
      </header>
    );
  else {
    return (
      <header className='flex items-center justify-between text-white p-1'>
        <div>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  height: 50,
                  width: 50,
                },
              },
            }}
          />
        </div>
        <div className='flex gap-4 p-4'>
          <Link href='/' className='font-bold justify-self-end'>
            HomePage
          </Link>
          <Link className='font-bold' href='/dashboard'>
            Dashboard
          </Link>
        </div>
      </header>
    );
  }
}
