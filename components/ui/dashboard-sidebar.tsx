"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Calendar,
  Clock,
  FileText,
  Home,
  MessageSquare,
  Settings,
  Users,
  FolderKanban,
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean
}

export function DashboardSidebar({ className, collapsed = false, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Projects",
      href: "/dashboard/projects",
      icon: <FolderKanban className="h-5 w-5" />,
    },
    {
      title: "Team",
      href: "/dashboard/team",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Calendar",
      href: "/dashboard/calendar",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Time Tracking",
      href: "/dashboard/time-tracking",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: "Messages",
      href: "/dashboard/messages",
      icon: <MessageSquare className="h-5 w-5" />,
      badge: 3,
    },
    {
      title: "Reports",
      href: "/dashboard/reports",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Documents",
      href: "/dashboard/documents",
      icon: <FileText className="h-5 w-5" />,
    },
  ]

  const bottomNavItems = [
    {
      title: "Notifications",
      href: "/dashboard/notifications",
      icon: <Bell className="h-5 w-5" />,
      badge: 5,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: "Help & Support",
      href: "/dashboard/support",
      icon: <HelpCircle className="h-5 w-5" />,
    },
  ]

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-background border-r transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[240px]",
        className,
      )}
      {...props}
    >
      <div className="py-4 px-3 border-b flex items-center justify-between">
        {!collapsed && (
          <Link href="/dashboard" className="flex items-center">
            <span className="font-bold text-xl">Sydek</span>
          </Link>
        )}
        {collapsed && (
          <div className="mx-auto">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              S
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn("justify-start h-10", collapsed && "justify-center px-2")}
              asChild
            >
              <Link href={item.href}>
                {item.icon}
                {!collapsed && <span className="ml-2">{item.title}</span>}
                {!collapsed && item.badge && (
                  <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full h-5 min-w-[20px] flex items-center justify-center px-1">
                    {item.badge}
                  </span>
                )}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
      <div className="border-t py-2">
        <nav className="grid gap-1 px-2">
          {bottomNavItems.map((item, index) => (
            <Button
              key={index}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn("justify-start h-10", collapsed && "justify-center px-2")}
              asChild
            >
              <Link href={item.href}>
                {item.icon}
                {!collapsed && <span className="ml-2">{item.title}</span>}
                {!collapsed && item.badge && (
                  <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full h-5 min-w-[20px] flex items-center justify-center px-1">
                    {item.badge}
                  </span>
                )}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
      <div className="border-t p-2">
        <Button variant="ghost" className={cn("w-full justify-start h-10", collapsed && "justify-center px-2")}>
          <LogOut className="h-5 w-5" />
          {!collapsed && <span className="ml-2">Logout</span>}
        </Button>
      </div>
    </div>
  )
}

