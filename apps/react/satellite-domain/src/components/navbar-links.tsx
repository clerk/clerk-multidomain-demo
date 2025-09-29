import { Button } from "@repo/ui/button";
import { Link, useLocation } from "react-router-dom";
import { env } from "../env";

export const NavbarLinks = ({ userId }: { userId: string }) => {
  const location = useLocation();
  const navbarLinks = [];

  if (!userId) {
    const signInOrUpUrl = new URL(env.VITE_CLERK_SIGN_IN_URL);
    const protocol =
      import.meta.env.MODE === "development" ? "http://" : "https://";
    const redirectUrl = `${protocol}${env.VITE_CLERK_DOMAIN}`;

    signInOrUpUrl.searchParams.set("redirect_url", redirectUrl);
    signInOrUpUrl.searchParams.set("redirect_url", redirectUrl);

    navbarLinks.push({
      name: "Sign In",
      // Redirect URL to be concatenized if the auth flow is initiated on a Satellites public route.
      link: signInOrUpUrl,
    });
  }
  if (userId && location.pathname === "/")
    navbarLinks.push({ name: "Dashboard", link: "/dashboard" });
  if (userId && location.pathname !== "/")
    navbarLinks.push({ name: "Home", link: "/" });

  return (
    <>
      {navbarLinks.map((item, index) => (
        <Link key={index} to={item.link.toString()}>
          <Button variant="link" size="sm" className="mr-4">
            <h1 className="font-bold">{item.name}</h1>
          </Button>
        </Link>
      ))}
    </>
  );
};
