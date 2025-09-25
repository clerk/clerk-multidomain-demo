import { SignUp } from "@clerk/react-router";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
}
