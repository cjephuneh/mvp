"use client"

import { AppSidebar } from "@/components/client/sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import type React from "react" // Added import for React

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="bg-gradient-to-br from-indigo-50 to-white">{children}</SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}

