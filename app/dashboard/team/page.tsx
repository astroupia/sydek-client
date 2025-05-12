"use client"

import { useState } from "react"
import type { User } from "@/types/dashboard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Filter, Mail } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data for demonstration
const mockTeamMembers: User[] = [
  { id: "1", name: "Sarah Chen", email: "sarah@example.com", role: "Creative Director", status: "online" },
  {
    id: "2",
    name: "Michael Rodriguez",
    email: "michael@example.com",
    role: "Lead Developer",
    status: "online",
  },
  { id: "3", name: "Emily Wong", email: "emily@example.com", role: "UX Designer", status: "away" },
  {
    id: "4",
    name: "David Kim",
    email: "david@example.com",
    role: "Backend Engineer",
    status: "offline",
  },
  {
    id: "5",
    name: "Jessica Lee",
    email: "jessica@example.com",
    role: "Mobile Developer",
    status: "online",
  },
  {
    id: "6",
    name: "Robert Johnson",
    email: "robert@example.com",
    role: "Security Specialist",
    status: "away",
  },
  { id: "7", name: "Lisa Wang", email: "lisa@example.com", role: "QA Engineer", status: "offline" },
  {
    id: "8",
    name: "James Wilson",
    email: "james@example.com",
    role: "Data Scientist",
    status: "online",
  },
]

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterRole, setFilterRole] = useState<string | null>(null)

  const filteredTeamMembers = mockTeamMembers.filter((member) => {
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      if (
        !member.name.toLowerCase().includes(query) &&
        !member.email.toLowerCase().includes(query) &&
        !member.role.toLowerCase().includes(query)
      ) {
        return false
      }
    }

    // Filter by role
    if (filterRole) {
      if (member.role !== filterRole) {
        return false
      }
    }

    return true
  })

  const roles = Array.from(new Set(mockTeamMembers.map((member) => member.role)))

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Team</h1>
        <Button asChild>
          <Link href="/dashboard/team/invite">
            <Plus className="h-4 w-4 mr-2" />
            Invite Member
          </Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search team members..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter by Role
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setFilterRole(null)}>All Roles</DropdownMenuItem>
            {roles.map((role) => (
              <DropdownMenuItem key={role} onClick={() => setFilterRole(role)}>
                {role}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tabs defaultValue="grid">
        <TabsList className="mb-6">
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTeamMembers.map((member) => (
              <Card key={member.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-2xl">
                        {member.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </div>
                      <span
                        className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-background ${
                          member.status === "online"
                            ? "bg-green-500"
                            : member.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                        }`}
                      ></span>
                    </div>
                    <h3 className="font-medium text-lg mb-1">{member.name}</h3>
                    <p className="text-muted-foreground mb-4">{member.role}</p>
                    <div className="flex gap-2 mb-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/team/${member.id}`}>View Profile</Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/messages?user=${member.id}`}>Message</Link>
                      </Button>
                    </div>
                    <div className="w-full flex flex-col gap-2 text-sm">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        <a href={`mailto:${member.email}`} className="hover:underline truncate">
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team members and their roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTeamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center mb-4 sm:mb-0">
                      <div className="relative mr-4">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          {member.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>
                        <span
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                            member.status === "online"
                              ? "bg-green-500"
                              : member.status === "away"
                                ? "bg-yellow-500"
                                : "bg-gray-500"
                          }`}
                        ></span>
                      </div>
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/dashboard/messages?user=${member.id}`}>Message</Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/team/${member.id}`}>View Profile</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

