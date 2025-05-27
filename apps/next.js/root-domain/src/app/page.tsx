import Link from 'next/link';
import { ArrowRight, Globe, SatelliteDish } from 'lucide-react';
import { Button } from '@repo/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@repo/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, HeroCard } from '@repo/ui/card';

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>

      <main className='flex-1 container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold tracking-tight mb-3'>
              Clerk Satellite Domain Demo
            </h1>
            <p className='text-xl text-muted-foreground'>
              Authentication across different domains
            </p>
          </div>

          <HeroCard title='Root Domain Homepage' subject='The root domain handles authentication for all domains'>
            <p>
              Your <span className='font-semibold'>Primary</span> domain or in
              this case <span className='font-semibold'>Root</span> domain is
              where the authentication state lives, and satellite domains are
              able to securely read that state from the primary domain, enabling
              a seamless authentication flow across domains. This example
              repository was created to demonstrate just that.
            </p>

            <Card variant="slate">
              <p className='text-sm'>
                If you&apos;re trying this out locally, attempt to access the
                satellite domain on
                {/*  TODO: Dynamically render the url here from environment variables */}
                <code className='bg-slate-100 px-1.5 py-0.5 rounded text-purple-700'>
                  localhost:3001
                </code>{' '}
                without logging in and see what happens. Clerk will redirect you
                to the Primary domain set on{' '}
                <code className='bg-slate-100 px-1.5 py-0.5 rounded text-purple-700'>
                  localhost:3000
                </code>{' '}
                to authenticate you and redirect back to the Satellite once the
                authentication flow has successfully executed.
              </p>
            </Card>

            <div className='flex flex-col sm:flex-row gap-4 items-start'>
              <Card variant="purple">
                <h3 className='font-medium mb-2 text-purple-800'>
                  Production Environment
                </h3>
                <p className='text-sm'>
                  To see how this works in a production environment, head over
                  to the{' '}
                  <Link
                    href='#'
                    className='text-purple-600 font-medium hover:underline'
                  >
                    Satellite Domain
                  </Link>{' '}
                  and try to access the page. Since the entire site is protected
                  by{' '}
                  <Link
                    href='#'
                    className='text-purple-600 font-medium hover:underline'
                  >
                    clerkMiddleware
                  </Link>{' '}
                  you&apos;ll see that you&apos;re redirected to authenticate on the{' '}
                  <Link
                    href='#'
                    className='text-purple-600 font-medium hover:underline'
                  >
                    Root Domain
                  </Link>{' '}
                  and then redirected back to the Satellite domain after
                  successfully completing the sign-in flow.
                </p>
              </Card>

              <Card variant="slate">
                <h3 className='font-medium mb-2'>How It Works</h3>
                <ul className='text-sm space-y-2'>
                  <li className='flex gap-2'>
                    <ArrowRight className='h-4 w-4 text-purple-600 shrink-0 mt-0.5' />
                    <span>Primary domain stores authentication state</span>
                  </li>
                  <li className='flex gap-2'>
                    <ArrowRight className='h-4 w-4 text-purple-600 shrink-0 mt-0.5' />
                    <span>Satellite domains read state securely</span>
                  </li>
                  <li className='flex gap-2'>
                    <ArrowRight className='h-4 w-4 text-purple-600 shrink-0 mt-0.5' />
                    <span>Seamless redirection between domains</span>
                  </li>
                  <li className='flex gap-2'>
                    <ArrowRight className='h-4 w-4 text-purple-600 shrink-0 mt-0.5' />
                    <span>Protected by clerkMiddleware</span>
                  </li>
                </ul>
              </Card>
            </div>
          </HeroCard>
          <Tabs defaultValue='overview' className='mb-12'>
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='setup'>Setup Guide</TabsTrigger>
              <TabsTrigger value='examples'>Examples</TabsTrigger>
            </TabsList>
            <TabsContent
              value='overview'
              className='p-6 border rounded-b-lg shadow-xs'
            >
              <div className='grid md:grid-cols-2 gap-6'>
                <Card>
                  <CardHeader className='pb-2'>
                    <CardTitle className='text-lg flex items-center gap-2'>
                      <Globe className='h-5 w-5 text-purple-600' />
                      Primary Domain
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>
                      The primary domain is where authentication state is stored
                      and managed. Users sign in here first.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant='outline' size='sm' className='w-full'>
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className='pb-2'>
                    <CardTitle className='text-lg flex items-center gap-2'>
                      <SatelliteDish className='h-5 w-5 text-purple-600' />
                      Satellite Domain
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>
                      Satellite domains securely read authentication state from
                      the primary domain without requiring re-authentication.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant='outline' size='sm' className='w-full'>
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value='setup'
              className='p-6 border rounded-b-lg shadow-xs'
            >
              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>
                  Setting up Multi-Domain Authentication
                </h3>
                <ol className='space-y-3 list-decimal list-inside'>
                  <li>Configure your Primary domain in the Clerk Dashboard</li>
                  <li>Add and verify your Satellite domains</li>
                  <li>Set up cross-domain session sharing</li>
                  <li>Implement clerkMiddleware in your application</li>
                  <li>Test the authentication flow across domains</li>
                </ol>
                <div className='pt-4'>
                  <Button>View Full Documentation</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value='examples'
              className='p-6 border rounded-b-lg shadow-xs'
            >
              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>Example Implementations</h3>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div className='border rounded-lg p-4'>
                    <h4 className='font-medium mb-2'>Next.js Example</h4>
                    <p className='text-sm text-muted-foreground mb-4'>
                      Complete Next.js implementation with middleware and domain
                      configuration.
                    </p>
                    <Button variant='outline' size='sm'>
                      View Example
                    </Button>
                  </div>
                  <div className='border rounded-lg p-4'>
                    <h4 className='font-medium mb-2'>React Example</h4>
                    <p className='text-sm text-muted-foreground mb-4'>
                      React implementation with React Router and Clerk context
                      providers.
                    </p>
                    <Button variant='outline' size='sm'>
                      View Example
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

    </div>
  );
}
