import Link from "next/link";
import { RootHomePage, type LinkComponentType } from "@repo/ui/root-homepage";

export default function HomePage() {
  return (
    <RootHomePage
      LinkComponent={Link as LinkComponentType}
      isDevelopment={process.env.NODE_ENV === "development"}
      satelliteDomainUrl={process.env.NEXT_PUBLIC_SATELLITE_DOMAIN_URL ?? ""}
    />
  );
}
