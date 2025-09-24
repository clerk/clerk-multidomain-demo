import { Button } from "@repo/ui/button";
import { Link, useLocation } from "react-router-dom";

export const NavbarLinks = ({ userId }: { userId: string }) => {
  const location = useLocation();

  const navbarLinks = [];
  if (!userId) {
    navbarLinks.push({ name: "Sign In", link: "/sign-in" });
  }
  if (userId && location.pathname === "/")
    navbarLinks.push({ name: "Dashboard", link: "/dashboard" });
  if (userId && location.pathname !== "/")
    navbarLinks.push({ name: "Home", link: "/" });

  return (
    <>
      {navbarLinks.map((item, index) => (
        <Link key={index} to={item.link}>
          <Button variant="link" size="sm" className="mr-4">
            <h1 className="font-bold">{item.name}</h1>
          </Button>
        </Link>
      ))}
    </>
  );
};
