"use client"

import type { TaskDetail, User, TaskComment, TaskHistory } from "@/types/dashboard"
import { TaskDetailView } from "@/components/dashboard/task-detail-view"
import { useState } from "react"

// Mock data for demonstration
const mockUsers: User[] = [
  { id: "1", name: "Sarah Chen", email: "sarah@example.com", role: "Creative Director", status: "online" },\
  { id: "2\", name: \"Michael Rodriguez\", email: \"michael@example.com\", role: \"Lead Developer  },
  { id: "2", name: "Michael Rodriguez", email: "michael@example.com", role: "Lead Developer", status: "online" },
  { id: "3", name: "Emily Wong", email: "emily@example.com", role: "UX Designer", status: "away" },
  { id: "4", name: "David Kim", email: "david@example.com", role: "Backend Engineer", status: "offline" }
]

const mockCurrentUser: User = {
  id: "0",
  name: "John Doe",
  email: "john@example.com",
  role: "Project Manager",
  status: "online",
}

const mockComments: TaskComment[] = [
  {
    id: "1",
    user: mockUsers[0],
    content: "I've started working on the design. Will share the initial mockups by tomorrow.",
    timestamp: "2025-03-05T10:30:00",
  },
  {
    id: "2",
    user: mockCurrentUser,
    content: "Sounds good! Make sure to incorporate the feedback from our last client meeting.",
    timestamp: "2025-03-05T11:15:00",
  },
  {
    id: "3",
    user: mockUsers[0],
    content: "Will do. I'm focusing on the mobile-first approach as discussed.",
    timestamp: "2025-03-05T11:45:00",
  },
]

const mockHistory: TaskHistory[] = [
  {
    id: "1",
    user: mockCurrentUser,
    action: "created this task",
    timestamp: "2025-03-01T09:00:00",
  },
  {
    id: "2",
    user: mockCurrentUser,
    action: "assigned this task to Sarah Chen",
    timestamp: "2025-03-01T09:05:00",
  },
  {
    id: "3",
    user: mockUsers[0],
    action: "changed the status from 'todo' to 'in-progress'",
    timestamp: "2025-03-03T14:20:00",
  },
  {
    id: "4",
    user: mockCurrentUser,
    action: "changed the priority from 'medium' to 'high'",
    timestamp: "2025-03-04T11:30:00",
    details: "Due to client request and upcoming deadline",
  },
]

const mockTaskDetail: TaskDetail = {
  id: "1",
  title: "Finalize Homepage Design",
  description:
    "Complete the homepage design with all stakeholder feedback incorporated. Focus on mobile responsiveness and user experience. The design should align with the brand guidelines and improve conversion rates.",
  projectId: "1",
  projectName: "E-Commerce Redesign",
  assignee: mockUsers[0],
  dueDate: "Tomorrow",
  status: "in-progress",
  priority: "high",
  tags: ["Design", "Homepage"],
  comments: mockComments,
  history: mockHistory,
  subtasks: [
    {
      id: "1-1",
      title: "Create mobile wireframes",
      completed: true,
    },
    {
      id: "1-2",
      title: "Design desktop layout",
      completed: true,
    },
    {
      id: "1-3",
      title: "Incorporate client feedback",
      completed: false,
    },
    {
      id: "1-4",
      title: "Prepare assets for development",
      completed: false,
    },
  ],
  timeTracking: {
    estimated: 480, // 8 hours
    spent: 300, // 5 hours
  },
  attachments: [
    {
      id: "1",
      name: "homepage-wireframe-v1.pdf",
      url: "#",
      type: "application/pdf",
      size: "2.4 MB",
      uploadedBy: mockUsers[0],
      uploadedAt: "2025-03-03T15:30:00",
    },
    {
      id: "2",
      name: "client-feedback.docx",
      url: "#",
      type: "application/docx",
      size: "1.2 MB",
      uploadedBy: mockCurrentUser,
      uploadedAt: "2025-03-04T10:15:00",
    },
  ],
}

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the task details based on the ID
  // For this example, we're using mock data

  const [task, setTask] = useState<TaskDetail>(mockTaskDetail)

  const handleAddComment = (content: string) => {
    const newComment: TaskComment = {
      id: `new-${Date.now()}`,
      user: mockCurrentUser,
      content,
      timestamp: new Date().toISOString(),
    }

    setTask((prev) => ({
      ...prev,
      comments: [...prev.comments, newComment],
    }))
  }

  const handleUpdateTask = (updatedTask: Partial<TaskDetail>) => {
    setTask((prev) => ({
      ...prev,
      ...updatedTask,
    }))
  }

  return (
    <div className="p-6">
      <TaskDetailView
        task={task}
        currentUser={mockCurrentUser}
        onAddComment={handleAddComment}
        onUpdateTask={handleUpdateTask}
      />
    </div>
  )
}

