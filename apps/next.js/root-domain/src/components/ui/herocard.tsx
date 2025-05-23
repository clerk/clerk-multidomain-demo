import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, Lock } from 'lucide-react';
import Link from 'next/link';
export default function HeroCard({
  title,
  subject,
  children,
}: {
  title: string;
  subject: string;
  children: React.ReactNode;
}) {
  return (
    <Card className='mb-12 border-purple-100 shadow-lg'>
      <CardHeader className='bg-gradient-to-r from-purple-50 to-purple-100 rounded-t-lg'>
        <CardTitle className='flex items-center gap-2 text-purple-800'>
          <Lock className='h-5 w-5' />
          {title}
        </CardTitle>
        <CardDescription>{subject}</CardDescription>
      </CardHeader>
      <CardContent className='pt-6 space-y-4'>{children}</CardContent>
    </Card>
  );
}
