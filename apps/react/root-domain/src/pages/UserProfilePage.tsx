import { UserProfile } from '@clerk/clerk-react';

export default function UserProfilePage() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <UserProfile />
    </div>
  );
}
