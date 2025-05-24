import { type JSX } from "react"
import { Button } from "./button";

export function Navbar({ userId }: { userId: string | null, }) {
  console.log('test', userId)
  if (userId) {
    return (
      <div className='flex grow justify-end ml-2 gap-4 p-4'>
        <a href='/' className='font-bold'>
          <Button variant="link">
            Home
          </Button>
        </a>
        <a className='font-bold' href='/dashboard'>
          Dashboar
        </a>
      </div>
    );
  }

  return (
    <div className='flex grow justify-end ml-2 gap-4 p-4'>
      <a href='/' className='font-bold'>
        <Button variant="link">
          Home
        </Button>
      </a>
      <a href='/sign-in'>
        <Button variant="link" className="mr-4">
          <h1 className='font-bold'>Sign In</h1>
        </Button>
      </a>

      <a href='/sign-up'>
        <Button>
          <h1 className='font-bold'>Sign Up</h1>
        </Button>
      </a>
    </div>
  );
}

export function Header({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <header className='flex items-center justify-between p-2 container'>
      {children}
    </header>
  );

}
//
//
// <header className='border-b'>
//   <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
//     <Link href='/' className='flex items-center gap-2'>
//       <svg
//         width='32'
//         height='32'
//         viewBox='0 0 32 32'
//         fill='none'
//         xmlns='http://www.w3.org/2000/svg'
//         className='text-purple-600'
//       >
//         <path
//           d='M16 8C12.6863 8 10 10.6863 10 14C10 17.3137 12.6863 20 16 20C19.3137 20 22 17.3137 22 14C22 10.6863 19.3137 8 16 8ZM16 18C13.7909 18 12 16.2091 12 14C12 11.7909 13.7909 10 16 10C18.2091 10 20 11.7909 20 14C20 16.2091 18.2091 18 16 18Z'
//           fill='currentColor'
//         />
//         <path
//           d='M16 20C12.6863 20 10 22.6863 10 26H22C22 22.6863 19.3137 20 16 20Z'
//           fill='currentColor'
//         />
//         <path
//           d='M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z'
//           fill='currentColor'
//         />
//       </svg>
//       <span className='font-bold text-xl'>clerk</span>
//     </Link>
//     <nav className='flex items-center gap-6'>
//       <Link
//         href='/'
//         className='text-sm font-medium hover:text-purple-600 transition-colors'
//       >
//         Home
//       </Link>
//       <Link
//         href='/sign-in'
//         className='text-sm font-medium hover:text-purple-600 transition-colors'
//       >
//         Sign In
//       </Link>
//       <Button asChild>
//         <Link href='/sign-up'>Sign Up</Link>
//       </Button>
//     </nav>
//   </div>
// </header>
//
//
