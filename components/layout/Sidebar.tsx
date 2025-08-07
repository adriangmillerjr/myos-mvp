'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  return (
    <aside className={`bg-gray-900 text-white h-screen transition-all duration-300 ${open ? 'w-64' : 'w-16'}`}>
      <div className="p-4">
        <button onClick={() => setOpen(!open)} className="text-white">☰</button>
      </div>
      <nav className="flex flex-col gap-2 p-4">
        <Link href="/chat" className="hover:underline">Chat</Link>
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/profile" className="hover:underline">Profile</Link>
      </nav>
    </aside>
  )
}
