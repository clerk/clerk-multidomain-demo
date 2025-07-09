import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App.tsx";
import { env } from "./env";

const publishableKey = env.VITE_CLERK_PUBLISHABLE_KEY;
const signInUrl = env.VITE_CLERK_SIGN_IN_URL;
const signUpUrl = env.VITE_CLERK_SIGN_UP_URL;

if (!publishableKey) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={publishableKey}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
