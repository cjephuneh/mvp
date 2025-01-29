import type { Metadata } from "next"
import { Inter } from "next/font/google"
// import "./../global.css"
import { Sidebar } from "@/components/user/sidebar"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Contest Platform",
  description: "Platform for design and development contests",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-gray-100 p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}

