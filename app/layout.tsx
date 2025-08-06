// app/layout.tsx

import './globals.css'; // optional: only if you plan to use global styles

export const metadata = {
  title: 'MyOS – Your Life, Powered by AI',
  description: 'Your personalized operating system for clarity, automation, and execution.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
