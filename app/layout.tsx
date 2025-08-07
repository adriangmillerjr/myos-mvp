import '@/styles/globals.css'
import Sidebar from '@/components/layout/Sidebar'
import Topbar from '@/components/layout/Topbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-black text-white">
        <Sidebar />
        <div className="flex flex-col flex-1 min-h-screen">
          <Topbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}