import Link from 'next/link';
import { ArrowRight, Globe, Server } from 'lucide-react';
import { Button } from '@repo/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@repo/ui/tabs';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  HeroCard,
} from '@repo/ui/card';
import { env } from '@/env';

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-1 container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold tracking-tight mb-3'>
              Clerk Root Domain Demo
            </h1>
            <p className='text-xl text-muted-foreground'>
              Authentication across different domains
            </p>
          </div>

          <HeroCard
            title='Root Domain Homepage'
            subject='The Root Domain handles authentication for all domains'
          >
            <p>
              Your <span className='font-semibold'>Root</span> domain is where
              the authentication flow will take place. Once the authentication
              flow is completed, Satellite Domains will set a suffixed JWT to
              share the authenticated state between the Root Domain and other
              Satellite Domains configured in your Clerk dashboard, enabling a
              seamless authentication flow across domains. This example
              repository was created to demonstrate just that.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 items-start'>
              <Card variant='gray'>
                <h3 className='font-medium mb-2 text-gray-800 mt-2 underline'>
                  Try the feature!
                </h3>
                <p className='text-sm'>
                  To see how this works, head over to the{' '}
                  <Link
                    href={`${env.NEXT_PUBLIC_SATELLITE_DOMAIN_URL}/dashboard`}
                    className='text-gray-600 font-medium hover:underline hover:text-purple-600'
                  >
                    Satellite Domain
                  </Link>{' '}
                  . This will redirect you to a protected page on the Satellite
                  Domain. Since the dashboard route is protected by{' '}
                  <Link
                    href='https://clerk.com/docs/references/nextjs/clerk-middleware'
                    className='text-gray-600 font-medium hover:underline  hover:text-purple-600'
                  >
                    clerkMiddleware
                  </Link>{' '}
                  you&apos;ll see that you&apos;re redirected to authenticate on
                  the Root Domain to authenticate. In the URL, you&apos;ll
                  notice a{' '}
                  <code className='bg-slate-100 px-1.5 py-0.5 rounded text-gray-700'>
                    redirect_url
                  </code>{' '}
                  is set to send you back to the Satellite Domain once the flow
                  is successfully completed.
                </p>
              </Card>

              <Card variant='gray'>
                <h3 className='font-medium mb-2'>How It Works</h3>
                <ul className='text-sm space-y-2'>
                  <li className='flex gap-2'>
                    <ArrowRight className='h-4 w-4 text-gray-600 shrink-0 mt-0.5' />
                    <span>Root Domain handles authenticating the user.</span>
                  </li>
                  <li className='flex gap-2'>
                    <ArrowRight className='h-4 w-4 text-gray-600 shrink-0 mt-0.5' />
                    <span>
                      Satellite Domains set a session JWT cookie for each valid
                      domain.
                    </span>
                  </li>
                  <li className='flex gap-2'>
                    <ArrowRight className='h-4 w-4 text-gray-600 shrink-0 mt-0.5' />
                    <span>Seamless redirection between domains.</span>
                  </li>
                  <li className='flex gap-2'>
                    <ArrowRight className='h-4 w-4 text-gray-600 shrink-0 mt-0.5' />
                    <span>Protected by clerkMiddleware.</span>
                  </li>
                </ul>
              </Card>
            </div>
          </HeroCard>
          <Tabs defaultValue='overview' className='mb-12'>
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='setup'>Get Started</TabsTrigger>
              <TabsTrigger value='examples'>Examples</TabsTrigger>
            </TabsList>
            <TabsContent
              value='overview'
              className='p-6 border rounded-b-lg shadow-xs'
            >
              <div className='grid md:grid-cols-2 gap-6'>
                <Card className='border-purple-200 shadow-sm relative'>
                  <CardHeader className='pb-2 border-b border-gray-100'>
                    <CardTitle className='text-lg flex items-center gap-2'>
                      <Globe className='h-5 w-5 text-gray-600' />
                      Root Domain
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='pt-4'>
                    <p className='text-sm text-muted-foreground mb-3'>
                      The Root domain is where authentication flow takes place.
                      Users will be redirected from the Satellite to sign up or
                      sign in here.
                    </p>
                  </CardContent>
                  <CardFooter className='bg-gray-100 border-t border-gray-200 p-0 h-14 absolute bottom-0 left-0 right-0'>
                    <div className='w-full flex items-center justify-center gap-2 py-1 text-sm font-medium text-gray-700'>
                      <span className='inline-block w-2 h-2 rounded-full bg-green-500'></span>
                      You are currently on this domain
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className='pb-2'>
                    <CardTitle className='text-lg flex items-center gap-2'>
                      <Server className='h-5 w-5 text-gray-600' />
                      Satellite Domain
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='pt-4'>
                    <p className='text-sm text-muted-foreground mb-3'>
                      Satellite Domains will set a session JWT scoped to that
                      specific domain once the auth flow from the Root Domain is
                      completed.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className='w-full'>
                      <Link href={env.NEXT_PUBLIC_SATELLITE_DOMAIN_URL}>
                        Visit Satellite Domain
                      </Link>
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
                <ol className='space-y-3 list-decimal list-inside text-sm text-muted-foreground '>
                  <li>
                    Ensure you have the{' '}
                    <Link
                      href='https://clerk.com/pricing'
                      className='text-purple-600 font-medium hover:underline'
                    >
                      Enhanced Authentication add-on
                    </Link>{' '}
                    to incorporate Satellite Domains into your production
                    instance.
                  </li>
                  <li>
                    Follow our instructions in the documentation linked below on
                    how to set this up.
                  </li>
                </ol>
                <div className='pt-4'>
                  <Link
                    href='https://clerk.com/docs/advanced-usage/satellite-domains'
                    target='_blank'
                  >
                    <Button>View Full Documentation</Button>
                  </Link>
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
                    <Link
                      href='https://github.com/clerk/clerk-multidomain-demo/'
                      target='_blank'
                    >
                      <Button variant='default' size='sm'>
                        View Example
                      </Button>
                    </Link>
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
