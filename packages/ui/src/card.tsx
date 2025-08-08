import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-xs",
  {
    variants: {
      variant: {
        slate: ["bg-slate-50 border-slate-100 p-4"],
        purple: ["bg-purple-50 p-4 border-purple-100"],
        gray: ["bg-gray-50 p-4 border-gray-100"],
      },
    },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({
          variant,
          className,
        }),
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export function HeroCard({
  title,
  subject,
  children,
}: {
  title: string;
  subject: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="mb-12 border-gray-200 shadow-lg">
      <CardHeader className="bg-linear-to-r from-gray-100 to-gray-200 rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-black-800">
          <ShieldCheck className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>{subject}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">{children}</CardContent>
    </Card>
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
