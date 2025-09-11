import { env } from "../env";
import { Link } from "react-router-dom";
import {
  SatelliteHomePage,
  type LinkComponentType,
} from "@repo/ui/satellite-homepage";

export default function HomePage() {
  return (
    <SatelliteHomePage
      LinkComponent={Link as LinkComponentType}
      isDevelopment={process.env.NODE_ENV === "development"}
      rootDomainUrl={env.VITE_ROOT_DOMAIN_URL}
      clerkDomain={env.VITE_CLERK_DOMAIN}
      clerkSignInUrl={env.VITE_CLERK_SIGN_IN_URL}
      isNextJs={false}
    />
  );
}
