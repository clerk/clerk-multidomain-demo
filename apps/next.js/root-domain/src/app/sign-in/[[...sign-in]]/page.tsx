import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Suspense>
        <SignIn />
      </Suspense>
    </div>
  );
}
