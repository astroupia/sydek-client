"use client"
import type { CalendarEvent, User } from "@/types/dashboard"
import { CalendarView } from "@/components/dashboard/calendar-view"

// Mock data for demonstration
const mockUsers: User[] = [
  { id: "1", name: "Sarah Chen", email: "sarah@example.com", role: "Creative Director", status: "online" },
  { id: "2", name: "Michael Rodriguez", email: "michael@example.com", role: "Lead Developer", status: "online" },
  { id: "3", name: "Emily Wong", email: "emily@example.com", role: "UX Designer", status: "away" },
  { id: "4", name: "David Kim", email: "david@example.com", role: "Backend Engineer", status: "offline" },
]

const mockEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Team Standup",
    description: "Daily team standup meeting to discuss progress and blockers",
    start: "2025-03-10T09:00:00",
    end: "2025-03-10T09:30:00",
    allDay: false,
    location: "Conference Room A",
    attendees: [mockUsers[0], mockUsers[1], mockUsers[2], mockUsers[3]],
  },
  {
    id: "2",
    title: "Client Meeting",
    description: "Meeting with FashionForward Inc. to review progress on the e-commerce redesign",
    start: "2025-03-10T14:00:00",
    end: "2025-03-10T15:30:00",
    allDay: false,
    location: "Virtual - Zoom",
    attendees: [mockUsers[0], mockUsers[2]],
    projectId: "1",
    projectName: "E-Commerce Redesign",
  },
  {
    id: "3",
    title: "Design Review",
    description: "Review the latest design mockups for the healthcare dashboard",
    start: "2025-03-11T11:00:00",
    end: "2025-03-11T12:00:00",
    allDay: false,
    location: "Design Lab",
    attendees: [mockUsers[0], mockUsers[2]],
    projectId: "3",
    projectName: "Healthcare Dashboard",
  },
  {
    id: "4",
    title: "API Integration Planning",
    description: "Plan the integration with third-party payment APIs",
    start: "2025-03-12T10:00:00",
    end: "2025-03-12T11:30:00",
    allDay: false,
    location: "Conference Room B",
    attendees: [mockUsers[1], mockUsers[3]],
    projectId: "1",
    projectName: "E-Commerce Redesign",
  },
  {
    id: "5",
    title: "Security Audit",
    description: "Conduct security audit for the mobile banking app",
    start: "2025-03-15T09:00:00",
    end: "2025-03-15T17:00:00",
    allDay: true,
    attendees: [mockUsers[1], mockUsers[3]],
    projectId: "2",
    projectName: "Mobile Banking App",
  },
  {
    id: "6",
    title: "Sprint Planning",
    description: "Plan the next two-week sprint for all active projects",
    start: "2025-03-17T13:00:00",
    end: "2025-03-17T15:00:00",
    allDay: false,
    location: "Main Conference Room",
    attendees: mockUsers,
  },
  {
    id: "7",
    title: "Product Demo",
    description: "Demo the latest features to the stakeholders",
    start: "2025-03-20T15:00:00",
    end: "2025-03-20T16:00:00",
    allDay: false,
    location: "Virtual - Teams",
    attendees: mockUsers,
    projectId: "3",
    projectName: "Healthcare Dashboard",
  },
]

export default function CalendarPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Calendar</h1>
        <p className="text-muted-foreground">Manage your schedule and events</p>
      </div>

      <CalendarView events={mockEvents} />
    </div>
  )
}

