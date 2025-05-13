export default function Footer() {
  return (
    <footer className='fixed bottom-0 container flex flex-row justify-center py-4 font-bold'>
      <div>
        <p className='text-lg'>
          {new Date().getFullYear()}: Satellite Domain example using Next.js &
          Clerk!
        </p>
        <nav className='container mx-auto flex flex-row justify-between'>
          <a href='https://clerk.com/legal/privacy'>Privacy Policy</a>
          <a href='https://clerk.com/legal/terms'>Terms of Service</a>
          <a href='https://clerk.com/contact'>Contact</a>
        </nav>
      </div>
    </footer>
  );
}
