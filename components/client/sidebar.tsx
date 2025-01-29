
import { Home, PlusCircle, List, Trophy, Star, Settings, LogOut, DollarSign } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import type React from "react" // Import React

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/client" },
    { icon: PlusCircle, label: "Create Contest", href: "/client/dashboard/createcontest" },
    { icon: List, label: "Active Contests", href: "/client/dashboard/activecontests" },
    { icon: Trophy, label: "Winner Selection", href: "/client/dashboard/winnerselections" },
    { icon: Star, label: "Past Contests", href: "/client/dashboard/pastcontests" },
    { icon: DollarSign, label: "Escrow", href: "/client/dashboard/escrow" },
    { icon: Settings, label: "Settings", href: "/client/dashboard/settings" },
  ]

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b px-6 py-4">
        <h2 className="text-2xl font-bold text-primary">ContestCraft</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="mt-auto border-t p-4">
        <SidebarMenuButton asChild className="w-full justify-start text-destructive">
          <button className="flex items-center gap-3">
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </button>
        </SidebarMenuButton>
      </div>
      <SidebarRail />
    </Sidebar>
  )
}

