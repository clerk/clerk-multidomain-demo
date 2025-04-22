import Card from '@repo/ui/card';
export default function DashboardPage() {
  return (
    <div className='flex min-h-screen flex-col items-center text-wrap p-24'>
      <Card
        className={
          'flex flex-col p-4 justify-center gap-4 bg-purple-200 rounded-md border-black border-2'
        }
        title={` This is a protected Dashboard Page for your Satellite domain!`}
      >
        <h3>
          {' '}
          Users won't be able to access this page unless they've authenticated
          from the root domain first.
        </h3>
        <h3>
          Note: If attempting to access this page without being signed in, a
          user will be redirected to the sign-in page on the root domain then
          get redirected back since this route is protected by ClerkMiddleware!
        </h3>
      </Card>
    </div>
  );
}
