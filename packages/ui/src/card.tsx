import { type JSX } from 'react';

export default function Card({
  className,
  title,
  children,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={className}>
      <h2 className='font-medium'>{title}</h2>
      {children}
    </div>
  );
}
