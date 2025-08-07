import '@/styles/globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import { Toaster } from 'sonner';
import { Inter } from 'next/font/google';

// Load the Inter font from Google.  Using a font loader via next/font ensures
// the correct @font-face rules are injected at build time without blocking
// rendering.  Inter is a clean, modern typeface that matches the feel of
// premium Framer templates and elevates the overall UI polish.
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'MyOS AI',
  description: 'Your personal operating system with AI assistance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Apply the Inter font to the root HTML element and set up a rich
          gradient backdrop.  The gradient transitions from a deep blue to
          near‑black, providing depth and visual interest reminiscent of
          high‑end Framer templates. */}
      <body
        className={
          `${inter.className} bg-gradient-to-br from-[#08101f] via-[#0c1730] to-[#02070f] text-foreground min-h-screen flex`
        }
      >
        <Toaster richColors />
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="flex-1 p-6 overflow-y-auto bg-transparent">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}