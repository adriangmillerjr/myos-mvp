/*
 * Root layout for the MyOS MVP application. This component defines
 * the global layout structure, including a top bar and sidebar.
 * It is marked as a client component to allow interactive state (e.g. sidebar collapse).
 */

'use client';

import { ReactNode, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed((prev) => !prev);
  return (
    <html lang="en">
      <body className="min-h-screen flex bg-background text-foreground">
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} />
        <div className="flex-1 flex flex-col">
          {/* Topbar */}
          <Topbar onToggleSidebar={toggleSidebar} />
          {/* Main content */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}