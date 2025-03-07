import Card from '@repo/ui/card';
export default function Home() {
  return (
    <>
      <h1 className='flex justify-center text-2xl m-2 font-bold'>
        Satellite Domain Homepage
      </h1>
      <h2 className='flex justify-center text-2xl m-2 font-semi-bold'>
        Authentication across different domains
      </h2>

      <br />
      <Card
        className={
          'flex flex-col p-4 justify-center bg-purple-200 rounded-md font-semibold'
        }
        title={`Congratulations, if you're seeing
      this text then that means you've successfully authenticated across
      domains!`}
        children={`Take a moment to look into the cookies that are applied to this site.
          You'll see multiple __client_uat & __session JWTs stored inside of
          your cookies. Some of these JWTs have suffixes applied to the end of
          them. These suffixes are used to differentiate what session is valid
          on each respective satellite domain. Additionally, the specific
          __session JWT is refreshed every 60 seconds to have the authenticate
          state persist while there is activity on the page.`}
        href={'https://clerk.com/docs/advanced-usage/satellite-domains'}
      />
    </>
  );
}
