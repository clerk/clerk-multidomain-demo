import { Card } from '@repo/ui/card';

export default function Home() {
  return (
    <div>
      <h1 className='flex justify-center text-2xl m-2 font-bold'>
        Satellite Domain Homepage
      </h1>
      <h2 className='flex justify-center text-2xl m-2 font-semi-bold'>
        Authentication across different domains
      </h2>

      <Card >
        <p>You've successfully authenticated across domains!</p>
        <p>
          Take a moment to look into the cookies that are applied to this site.
          You&apos;ll see multiple &apos;__client_uat&apos; &
          &apos;__session&apos; JWTs stored inside of your cookies. Some of
          these JWTs have suffixes applied to the end of them. These suffixes
          are used to differentiate what client/session is valid on each
          respective satellite domain. Additionally, the specific
          &apos;__session&apos; JWT is refreshed every 60 seconds to have the
          authenticate state persist while there is activity on the page.
        </p>
      </Card>
    </div>
  );
}
