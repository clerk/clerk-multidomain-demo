import { env } from "../env";
import { Link } from "react-router-dom";
import { RootHomePage, type LinkComponentType } from "@repo/ui/root-homepage";

export default function HomePage() {
  return (
    <RootHomePage
      LinkComponent={Link as LinkComponentType}
      isDevelopment={process.env.NODE_ENV === "development"}
      satelliteDomainUrl={env.VITE_SATELLITE_DOMAIN_URL ?? ""}
      isNextJs={false}
    />
  );
}
