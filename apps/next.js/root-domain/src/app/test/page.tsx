import Link from 'next/link';
import { ArrowRight, Globe, Lock, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HeroCard from '@/components/ui/herocard';

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='border-b'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <Link href='/' className='flex items-center gap-2'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='text-purple-600'
            >
              <path
                d='M16 8C12.6863 8 10 10.6863 10 14C10 17.3137 12.6863 20 16 20C19.3137 20 22 17.3137 22 14C22 10.6863 19.3137 8 16 8ZM16 18C13.7909 18 12 16.2091 12 14C12 11.7909 13.7909 10 16 10C18.2091 10 20 11.7909 20 14C20 16.2091 18.2091 18 16 18Z'
                fill='currentColor'
              />
              <path
                d='M16 20C12.6863 20 10 22.6863 10 26H22C22 22.6863 19.3137 20 16 20Z'
                fill='currentColor'
              />
              <path
                d='M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28Z'
                fill='currentColor'
              />
            </svg>
            <span className='font-bold text-xl'>clerk</span>
          </Link>
          <nav className='flex items-center gap-6'>
            <Link
              href='/'
              className='text-sm font-medium hover:text-purple-600 transition-colors'
            >
              Home
            </Link>
            <Link
              href='/sign-in'
              className='text-sm font-medium hover:text-purple-600 transition-colors'
            >
              Sign In
            </Link>
            <Button asChild>
              <Link href='/sign-up'>Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className='flex-1 container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold tracking-tight mb-3'>
              Root Domain Homepage
            </h1>
            <p className='text-xl text-muted-foreground'>
              Authentication across different domains
            </p>
          </div>

          <HeroCard title='Did I make this right?' subject='Maybe'>
            <p>
              Your <span className='font-semibold'>Primary</span> domain or in
              this case <span className='font-semibold'>Root</span> domain is
              where the authentication state lives, and satellite domains are
              able to securely read that state from the primary domain, enabling
              a seamless authentication flow across domains. This example
              repository was created to demonstrate just that.
            </p>

            <div className='bg-slate-50 p-4 rounded-lg border border-slate-100'>
              <p className='text-sm'>
                If you're trying this out locally, attempt to access the
                satellite domain on // Dynamically render the url here from
                environment variables
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
            </div>

            <div className='flex flex-col sm:flex-row gap-4 items-start'>
              <div className='bg-purple-50 p-4 rounded-lg border border-purple-100 flex-1'>
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
                  you'll see that you're redirected to authenticate on the{' '}
                  <Link
                    href='#'
                    className='text-purple-600 font-medium hover:underline'
                  >
                    Root Domain
                  </Link>{' '}
                  and then redirected back to the Satellite domain after
                  successfully completing the sign-in flow.
                </p>
              </div>

              <div className='bg-slate-50 p-4 rounded-lg border border-slate-100 flex-1'>
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
              </div>
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
                      <Server className='h-5 w-5 text-purple-600' />
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

      <footer className='border-t py-6'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-sm text-muted-foreground'>
              © 2025: Satellite Domain example using Next.js & Clerk!
            </div>
            <div className='flex gap-6'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Terms of Service
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
