"use client"

import { useState, useEffect } from "react"
import type { Message, User } from "@/types/dashboard"
import { ChatInterface } from "@/components/dashboard/chat-interface"
import { UserAvatar } from "@/components/shared/user-avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data for demonstration
const mockUsers: User[] = [
  { id: "1", name: "Sarah Chen", email: "sarah@example.com", role: "Creative Director", status: "online" },
  { id: "2", name: "Michael Rodriguez", email: "michael@example.com", role: "Lead Developer", status: "online" },
  { id: "3", name: "Emily Wong", email: "emily@example.com", role: "UX Designer", status: "away" },
  { id: "4", name: "David Kim", email: "david@example.com", role: "Backend Engineer", status: "offline" },
  { id: "5", name: "Jessica Lee", email: "jessica@example.com", role: "Mobile Developer", status: "online" },
  { id: "6", name: "Robert Johnson", email: "robert@example.com", role: "Security Specialist", status: "away" },
  { id: "7", name: "Lisa Wang", email: "lisa@example.com", role: "QA Engineer", status: "offline" },
  { id: "8", name: "James Wilson", email: "james@example.com", role: "Data Scientist", status: "online" },
]

const mockCurrentUser: User = {
  id: "0",
  name: "John Doe",
  email: "john@example.com",
  role: "Project Manager",
  status: "online",
}

const generateMockMessages = (userId: string): Message[] => {
  const user = mockUsers.find((u) => u.id === userId)
  if (!user) return []

  const baseMessages = [
    {
      id: "1",
      sender: user,
      recipient: mockCurrentUser,
      content: `Hi John, I wanted to discuss the latest updates on the project.`,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
      read: true,
    },
    {
      id: "2",
      sender: mockCurrentUser,
      recipient: user,
      content: `Hey ${user.name}, sure thing! What's on your mind?`,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.9).toISOString(), // 1.9 hours ago
      read: true,
    },
    {
      id: "3",
      sender: user,
      recipient: mockCurrentUser,
      content: `I've been working on the ${user.id === "1" || user.id === "3" ? "design mockups" : user.id === "2" || user.id === "4" ? "backend integration" : "feature implementation"} and wanted to get your feedback.`,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.8).toISOString(), // 1.8 hours ago
      read: true,
    },
  ]

  // Add some user-specific messages
  if (user.id === "1") {
    baseMessages.push(
      {
        id: "4",
        sender: user,
        recipient: mockCurrentUser,
        content: "I've attached the latest design files for your review.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.7).toISOString(),
        read: true,
        attachments: [
          {
            name: "homepage-design-v2.fig",
            url: "#",
            type: "application/figma",
          },
        ],
      },
      {
        id: "5",
        sender: mockCurrentUser,
        recipient: user,
        content:
          "These look great! I especially like the new navigation layout. Let's discuss this in our next meeting.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5).toISOString(),
        read: true,
      },
    )
  } else if (user.id === "2") {
    baseMessages.push(
      {
        id: "4",
        sender: mockCurrentUser,
        recipient: user,
        content: "How's the API integration coming along?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.7).toISOString(),
        read: true,
      },
      {
        id: "5",
        sender: user,
        recipient: mockCurrentUser,
        content:
          "It's going well. I've completed about 70% of the endpoints. Should be ready for testing by the end of the week.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.6).toISOString(),
        read: true,
      },
      {
        id: "6",
        sender: mockCurrentUser,
        recipient: user,
        content: "That's great progress! Let me know if you need any help with the documentation.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5).toISOString(),
        read: true,
      },
    )
  }

  return baseMessages
}

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    // Set the first user as selected by default
    if (mockUsers.length > 0 && !selectedUser) {
      setSelectedUser(mockUsers[0])
      setMessages(generateMockMessages(mockUsers[0].id))
    }
  }, [selectedUser])

  const handleSelectUser = (user: User) => {
    setSelectedUser(user)
    setMessages(generateMockMessages(user.id))
  }

  const handleSendMessage = (content: string) => {
    if (!selectedUser) return

    const newMessage: Message = {
      id: `new-${Date.now()}`,
      sender: mockCurrentUser,
      recipient: selectedUser,
      content,
      timestamp: new Date().toISOString(),
      read: false,
    }

    setMessages((prev) => [...prev, newMessage])
  }

  const filteredUsers = mockUsers.filter((user) => {
    if (!searchQuery) return true

    const query = searchQuery.toLowerCase()
    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
    )
  })

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Messages</h1>
        <p className="text-muted-foreground">Chat with your team members</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 border rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search contacts..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="h-[calc(100vh-16rem)] overflow-y-auto">
            {filteredUsers.map((user) => (
              <button
                key={user.id}
                className={cn(
                  "w-full flex items-center p-3 hover:bg-muted/50 transition-colors",
                  selectedUser?.id === user.id && "bg-muted",
                )}
                onClick={() => handleSelectUser(user)}
              >
                <UserAvatar user={user} className="mr-3" />
                <div className="text-left">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.role}</p>
                </div>
              </button>
            ))}

            {filteredUsers.length === 0 && (
              <div className="p-4 text-center text-muted-foreground">
                <p>No contacts found</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              New Message
            </Button>
          </div>
        </div>

        <div className="md:col-span-3">
          {selectedUser ? (
            <ChatInterface
              messages={messages}
              currentUser={mockCurrentUser}
              recipient={selectedUser}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <div className="flex items-center justify-center h-[calc(100vh-12rem)] border rounded-lg">
              <div className="text-center">
                <p className="text-muted-foreground">Select a contact to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

