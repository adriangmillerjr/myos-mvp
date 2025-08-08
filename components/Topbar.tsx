/*
 * Topbar component for MyOS. Contains a toggle button for collapsing the
 * sidebar and a placeholder for future actions such as profile or notifications.
 */

'use client';

import { MenuIcon } from 'lucide-react';

import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';

interface TopbarProps {
  onToggleSidebar: () => void;
  user?: any;
}

export default function Topbar({ onToggleSidebar, user }: TopbarProps) {
  const router = useRouter();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };
  return (
    <header className="flex items-center justify-between h-16 px-4 border-b border-accent-2 bg-accent-1">
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-md hover:bg-accent-2 focus:outline-none"
      >
        <MenuIcon className="w-6 h-6" />
      </button>
      <div className="flex items-center gap-4">
        <span className="font-bold">MyOS</span>
        {user && (
          <button
            onClick={handleSignOut}
            className="text-sm bg-accent-3 text-background px-3 py-1 rounded-md hover:opacity-90"
          >
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
}