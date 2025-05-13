import { type JSX } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className={twMerge(
        'flex flex-col p-4 justify-center gap-4 bg-purple-200 rounded-md border-black border-2'
      )}
    >
      <h2 className='font-medium'>{title}</h2>
      {children}
    </div>
  );
}
