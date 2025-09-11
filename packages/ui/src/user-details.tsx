// Generic interfaces that match Clerk's UserResource and SessionResource types
// This keeps the UI package framework-agnostic while ensuring type safety
export interface EmailAddress {
  id: string;
  emailAddress: string;
}

export interface UserResource {
  id: string;
  firstName: string | null;
  lastName: string | null;
  emailAddresses: EmailAddress[];
  primaryEmailAddressId: string | null;
}

export interface SessionResource {
  id: string;
  lastActiveAt: Date;
  expireAt: Date;
}

export const UserDetails = ({
  isLoaded,
  user,
  session,
}: {
  isLoaded: boolean;
  user: UserResource | null | undefined;
  session: SessionResource | null | undefined;
}) => {
  return (
    <div
      className="bg-gray-100 overflow-hidden rounded-lg border-purple-100 shadow-lg"
      style={{ boxShadow: `0px 20px 24px -4px rgba(16, 24, 40, 0.08)` }}
    >
      <div className="flex justify-between items-center p-8">
        <h3 className="text-xl font-semibold  text-black-800 underline">
          User & Session Details
        </h3>
      </div>
      {isLoaded && user && session ? (
        <div className="pb-6 max-h-96">
          <dl className="px-8">
            <div className="py-2">
              <dt className="text-sm font-semibold">User ID</dt>
              <dd className="mt-1 text-sm text-gray-600">{user.id}</dd>
            </div>
            {user.firstName && (
              <div className="py-2">
                <dt className="text-sm font-semibold">Name</dt>
                <dd className="mt-1 text-sm text-gray-600">
                  {user.firstName} {user.lastName}
                </dd>
              </div>
            )}
            <div className="py-2">
              <dt className="text-sm font-semibold">Email addresses</dt>
              <dd className="mt-1 text-sm text-gray-600">
                {user.emailAddresses.map((email) => (
                  <div key={email.id} className="flex gap-2 mb-1">
                    {email.emailAddress}
                    {user.primaryEmailAddressId === email.id && (
                      <span className="text-xs bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
                        Primary
                      </span>
                    )}
                  </div>
                ))}
              </dd>
            </div>
          </dl>
          <div className="pb-6 max-h-96">
            <dl>
              <div className="px-8 py-2">
                <dt className="text-sm font-semibold">Session ID</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2 flex gap-2">
                  {session.id}
                </dd>
              </div>
              <div className="px-8 py-2">
                <dt className="text-sm font-semibold mb-1">Last Active</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  {session.lastActiveAt.toLocaleString()}
                </dd>
              </div>
              <div className="px-8 py-2">
                <dt className="text-sm font-semibold mb-1">Expiry</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  {session.expireAt.toLocaleString()}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <div className="text-gray-700 px-4 py-5">
          Loading user & session data...
        </div>
      )}
    </div>
  );
};
