export default function Home() {
  return (
    <>
      <h1 className='flex justify-center text-2xl m-2 font-bold'>
        Root Domain Homepage
      </h1>
      <br />
      <a
        target='_blank'
        href='https://clerk.com/docs/advanced-usage/satellite-domains'
      >
        <h2 className='flex justify-center text-lg font-semibold'>
          Authentication across different domains
        </h2>
      </a>
      <div className=' flex flex-col p-4 justify-center bg-purple-200 rounded-md '>
        <br />

        <p>
          Clerk supports sharing sessions across different domains by adding one
          or many satellite domains to an application. Your "Primary" domain or
          in this case "Root" domain is where the authentication state lives,
          and satellite domains are able to securely read that state from the
          primary domain, enabling a seamless authentication flow across
          domains. This example repository was created to demonstrate just that.
        </p>
        <br />
        <p>
          If you're trying this out locally, attempt to access the satellite
          domain on localhost:3001 without logging in and see what happens.
          Clerk will redirect you to the Primary domain set on localhost:3000 to
          authenticate you and redirect back to the Satellite once the
          authentication flow has successfully executed.
        </p>
        <br />
        <p>
          To see how this works in a production environment, head over to the
          <a
            target='_blank'
            href='https://clerk-multidomain-satellite.com/'
            className='underline hover:decoration-purple-500'
          >
            {' '}
            Satellite Domain
          </a>{' '}
          and try to access the page. Since the entire site is protected by
          <a
            target='_blank'
            href='https://clerk.com/docs/references/nextjs/clerk-middleware'
            className='underline hover:decoration-purple-500'
          >
            {' '}
            clerkMiddleware
          </a>{' '}
          you'll see that you're redirected to authenticate on the{' '}
          <a
            target='_blank'
            href='https://clerk-multidomain-root.com/'
            className='underline hover:decoration-purple-500'
          >
            Root Domain
          </a>{' '}
          and then redirected back to the Satellite domain after successfully
          completeing the sign-in flow.
        </p>
      </div>
    </>
  );
}
