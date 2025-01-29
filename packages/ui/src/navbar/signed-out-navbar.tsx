export default function SignedOutNavbar ()  {
    return (
        <div className='flex grow justify-end ml-2 gap-4 p-4'>
        <a href='/' className='font-bold'>Home</a>
        <a href='/sign-in'>
        <h1 className='font-bold'>Sign In</h1>
        </a>

        <a href='/sign-up'>
        <h1 className='font-bold'>Sign Up</h1>
        </a>
       </div>
    )
}