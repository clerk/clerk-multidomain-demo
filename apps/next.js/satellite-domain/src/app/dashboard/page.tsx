import Card from '@repo/ui/card';
export default function DashboardPage() {
  return (
    <div className='flex min-h-screen flex-col items-center text-wrap p-24'>
      <Card
        title={` This is a protected Dashboard Page for your Satellite domain!`}
      >
        <h3>
          Users won&apos;t be able to access this page unless they&apos;ve
          authenticated from the root domain first.
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
