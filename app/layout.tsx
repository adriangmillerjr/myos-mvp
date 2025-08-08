/*
 * Root layout for the MyOS MVP application. This component defines
 * the global layout structure, including a top bar and sidebar.
 * It is marked as a client component to allow interactive state (e.g. sidebar collapse).
 */

'use client';

import { ReactNode, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { supabase } from '../lib/supabase';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();
  const toggleSidebar = () => setCollapsed((prev) => !prev);

  useEffect(() => {
    // Listen for auth changes and set user accordingly
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    // If not logged in and not on login page, redirect to login
    if (!user && pathname !== '/login') {
      router.push('/login');
    }
  }, [user, pathname, router]);

  return (
    <html lang="en">
      <body className="min-h-screen flex bg-background text-foreground">
        {/* Sidebar: hide on login page */}
        {pathname !== '/login' && <Sidebar collapsed={collapsed} />}
        <div className="flex-1 flex flex-col">
          {/* Topbar: hide on login page */}
          {pathname !== '/login' && (
            <Topbar onToggleSidebar={toggleSidebar} user={user} />
          )}
          {/* Main content */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}