/*
 * Topbar component for MyOS. Contains a toggle button for collapsing the
 * sidebar and a placeholder for future actions such as profile or notifications.
 */

'use client';

import { MenuIcon } from 'lucide-react';

interface TopbarProps {
  onToggleSidebar: () => void;
}

export default function Topbar({ onToggleSidebar }: TopbarProps) {
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
      </div>
    </header>
  );
}