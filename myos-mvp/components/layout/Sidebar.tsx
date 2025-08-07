'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LayoutDashboard, MessageCircle, User, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  const pathname = usePathname();

  return (
    <aside
      className={clsx(
        'transition-all duration-300 flex flex-col h-screen',
        open ? 'w-64' : 'w-16'
      )}
      style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(12, 22, 36, 0.6)', borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {open && <span className="text-lg font-semibold tracking-wide">MyOS AI</span>}
        <button
          onClick={toggle}
          className="p-2 rounded hover:bg-white/10 transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
      </div>
      <nav className="flex flex-col mt-2">
        {[
          { href: '/dashboard', label: 'Dashboard', Icon: LayoutDashboard },
          { href: '/chat', label: 'Chat', Icon: MessageCircle },
          { href: '/profile', label: 'Profile', Icon: User },
        ].map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'flex items-center gap-3 px-4 py-2 text-sm font-medium rounded transition-colors',
              pathname === href
                ? 'bg-primary-600 text-white'
                : 'hover:bg-white/10 text-white/80'
            )}
          >
            <Icon size={20} />
            {open && <span>{label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}