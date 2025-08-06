// File: app/chat/layout.tsx
import '../globals.css'; // Adjust path if needed

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-black text-white">
      {/* You can wrap with nav, sidebar, etc. */}
      {children}
    </section>
  );
}
