import { type JSX } from "react"


export default function Header({ children}: {children: React.ReactNode}): JSX.Element {
    return (
      <header className='flex items-center justify-between p-2 container'>      
        {children}
      </header>
    );
 
}
