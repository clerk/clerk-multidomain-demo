import Link from "next/link";
import {
  SatelliteHomePage,
  type LinkComponentType,
} from "@repo/ui/satellite-homepage";

export default function HomePage() {
  return (
    <SatelliteHomePage
      LinkComponent={Link as LinkComponentType}
      isDevelopment={process.env.NODE_ENV === "development"}
      rootDomainUrl={
        process.env.NEXT_PUBLIC_ROOT_DOMAIN_URL ??
        "/next-public-root-domain-url-missing"
      }
      clerkDomain={process.env.NEXT_PUBLIC_CLERK_DOMAIN ?? ""}
      clerkSignInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? ""}
    />
  );
}
