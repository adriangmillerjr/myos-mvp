'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user);
    });
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        {user && (
          <p className="mt-2 text-sm text-foreground-muted">Welcome back, {user.email}</p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile card */}
        <div className="bg-background-light/60 rounded-lg border border-white/10 p-6 backdrop-blur-sm space-y-3 hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold">Profile Completion</h2>
          <p className="text-sm text-foreground-muted">
            Complete your profile to unlock all features.
          </p>
          <Link
            href="/profile"
            className="inline-block mt-2 text-primary-500 hover:text-primary-400 text-sm font-medium underline"
          >
            Go to Profile
          </Link>
        </div>
        {/* Chat card */}
        <div className="bg-background-light/60 rounded-lg border border-white/10 p-6 backdrop-blur-sm space-y-3 hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold">Start Chatting</h2>
          <p className="text-sm text-foreground-muted">
            Talk to your AI assistants.
          </p>
          <Link
            href="/chat"
            className="inline-block mt-2 text-primary-500 hover:text-primary-400 text-sm font-medium underline"
          >
            Open Chat
          </Link>
        </div>
        {/* Projects card */}
        <div className="bg-background-light/60 rounded-lg border border-white/10 p-6 backdrop-blur-sm space-y-3 hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold">Projects</h2>
          <p className="text-sm text-foreground-muted">
            Manage your tasks and goals.
          </p>
          {/* TODO: implement projects page */}
        </div>
      </div>
    </div>
  );
}