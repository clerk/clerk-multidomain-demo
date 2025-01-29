export default function SignedInNavbar() {
    return (
        <div className='flex grow justify-end ml-2 gap-4 p-4'>
          <a href='/' className='font-bold'>
            Home
          </a>
          <a className='font-bold' href='/dashboard'>
            Dashboard
          </a>
        </div>
    )
}