'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { LogIn, LogOut, UserCircle2 } from 'lucide-react';

/**
 * Topbar component displays user authentication controls and branding.
 * When a user is logged in, their email is shown with a sign out button.
 * When not authenticated, a sign in link is presented.
 */
export default function Topbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Fetch current user on mount
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user);
    });
    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header
      className="flex items-center justify-between px-6 py-4 border-b border-white/10"
      style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(12, 22, 36, 0.6)' }}
    >
      <div className="text-xl font-semibold tracking-wide">
        {/* Placeholder for topbar title or logo if needed */}
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <UserCircle2 size={20} />
              <span className="hidden sm:inline-block max-w-[200px] truncate">
                {user.email}
              </span>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1 text-sm text-red-400 hover:text-red-500 transition-colors"
            >
              <LogOut size={18} />
              <span>Sign out</span>
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-1 text-sm text-primary-500 hover:text-primary-400 transition-colors"
          >
            <LogIn size={18} />
            <span>Sign in</span>
          </Link>
        )}
      </div>
    </header>
  );
}