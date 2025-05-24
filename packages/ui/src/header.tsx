import { type JSX } from "react"
import { Button } from "./button";

export function Navbar({ userId }: { userId: string | null, }) {
  if (userId) {
    return (
      <div className='flex grow justify-end ml-2 gap-4 p-4'>
        <a href='/' className='font-bold'>
          <Button variant="link" size="sm">
            Home
          </Button>
        </a>
        <a className='font-bold' href='/dashboard'>
          <Button variant="link" size="sm">
            Dashboard
          </Button>
        </a>
      </div>
    );
  }

  return (
    <div className='flex grow justify-end ml-2 gap-4 p-4'>
      <a href='/' className='font-bold'>
        <Button variant="link" size="sm">
          Home
        </Button>
      </a>
      <a href='/sign-in'>
        <Button variant="link" size="sm" className="mr-4">
          <h1 className='font-bold'>Sign In</h1>
        </Button>
      </a>

      <a href='/sign-up'>
        <Button size="sm">
          <h1 className='font-bold'>Sign Up</h1>
        </Button>
      </a>
    </div>
  );
}

export function Header({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="border-b flex justify-center w-full">
      <header className='flex items-center justify-between p-2 container'>
        {children}
      </header>
    </div>
  );

}

