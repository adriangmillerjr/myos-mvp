/*
 * Sidebar component. Provides navigation between pages and a collapse toggle. When
 * collapsed, only icons are shown. When expanded, icons and labels are displayed.
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  MessageSquareIcon,
  UserIcon,
  MenuIcon,
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
}

export default function Sidebar({ collapsed }: SidebarProps) {
  const pathname = usePathname();
  const navItems = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: HomeIcon,
    },
    {
      href: '/chat',
      label: 'Chat',
      icon: MessageSquareIcon,
    },
    {
      href: '/profile',
      label: 'Profile',
      icon: UserIcon,
    },
  ];
  return (
    <aside
      className={`flex flex-col h-screen transition-all duration-300 bg-accent-1 text-foreground ${
        collapsed ? 'w-16' : 'w-56'
      }`}
    >
      <div className="flex items-center justify-center h-16 border-b border-accent-2">
        <MenuIcon className="w-6 h-6" />
      </div>
      <nav className="flex-1 py-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 ${
                isActive ? 'bg-accent-3 text-background' : 'hover:bg-accent-2'
              }`}
            >
              <Icon className="w-5 h-5" />
              {!collapsed && <span className="text-sm font-medium">{label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}