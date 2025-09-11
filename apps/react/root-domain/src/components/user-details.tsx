import { useSession, useUser } from "@clerk/clerk-react";
import { UserDetails as UserDetailsComponent } from "@repo/ui/user-details";

export function UserDetails() {
  const { isLoaded, user } = useUser();
  const { session } = useSession();

  return (
    <UserDetailsComponent isLoaded={isLoaded} user={user} session={session} />
  );
}
