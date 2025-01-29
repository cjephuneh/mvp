"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, User, Trophy, FileUp, MessageSquare, Award, Settings } from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/user",
  },
  {
    label: "Profile",
    icon: User,
    href: "/user/dashboard/profile",
  },
  {
    label: "Contests",
    icon: Trophy,
    href: "/user/dashboard/contests",
  },
  {
    label: "Submissions",
    icon: FileUp,
    href: "/user/dashboard/submissions",
  },
  {
    label: "Feedback",
    icon: MessageSquare,
    href: "/user/dashboard/feedback",
  },
  {
    label: "Results",
    icon: Award,
    href: "/user/dashboard/results",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/user/dashboard/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-white lg:block dark:bg-gray-800/40 w-64">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Trophy className="h-6 w-6" />
            <span>Contest Platform</span>
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
      </div>
    </div>
  )
}

