"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, Users, ClipboardList, MessageSquare, BarChart, Settings, LogOut, DollarSign } from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    label: "User Management",
    icon: Users,
    href: "/admin/dashboard/users",
  },
  {
    label: "Contest Oversight",
    icon: ClipboardList,
    href: "/admin/dashboard/contests",
  },
  {
    label: "Dispute Resolution",
    icon: MessageSquare,
    href: "/admin/dashboard/disputes",
  },
  {
    label: "Analytics",
    icon: BarChart,
    href: "/admin/dashboard/analytics",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/dashboard/settings",
  },
  {
    label: "Payments Management",
    icon: DollarSign,
    href: "/admin/dashboard/payments",
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-white lg:block dark:bg-gray-800/40 w-64">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link className="flex items-center gap-2 font-semibold" href="/dashboard/admin">
            <LayoutDashboard className="h-6 w-6" />
            <span>Admin Dashboard</span>
          </Link>
        </div>
        <ScrollArea className="flex-1">
          <div className="space-y-1 p-2">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={pathname === route.href ? "secondary" : "ghost"}
                className={cn("w-full justify-start", pathname === route.href ? "bg-gray-200 dark:bg-gray-700" : "")}
                asChild
              >
                <Link href={route.href}>
                  <route.icon className="mr-2 h-4 w-4" />
                  {route.label}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t p-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/auth/logout">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

