// app/profile/page.tsx
'use client';

import { useEffect, useState } from 'react';
import ProfileTabs from '../../components/Tabs/ProfileTabs';
import { supabase } from '../../lib/supabase';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Profile</h1>
      <p className="mb-6 text-accent-4 max-w-prose">
        Manage your personal information, vision and other aspects of your life.
      </p>
      {user ? <ProfileTabs user={user} /> : <p>Please sign in to edit your profile.</p>}
    </div>
  );
}