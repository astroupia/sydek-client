import type { Task } from "@/types/dashboard"
import { UserAvatar } from "./user-avatar"
import { cn } from "@/lib/utils"
import { AlertCircle, Calendar, CheckCircle2, Timer } from "lucide-react"
import Link from "next/link"

export interface TaskCardProps {
  task: Task
  className?: string
}

export function TaskCard({ task, className }: TaskCardProps) {
  const priorityClasses = {
    high: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    medium: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    low: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  }

  const statusIcon = {
    todo: <AlertCircle className="h-4 w-4 text-amber-500" />,
    "in-progress": <Timer className="h-4 w-4 text-blue-500" />,
    review: <AlertCircle className="h-4 w-4 text-purple-500" />,
    completed: <CheckCircle2 className="h-4 w-4 text-green-500" />,
  }

  return (
    <Link
      href={`/dashboard/tasks/${task.id}`}
      className={cn("block border rounded-lg p-4 hover:bg-muted/50 transition-colors", className)}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={cn("text-xs px-2 py-0.5 rounded-full", priorityClasses[task.priority])}>
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
        <div className="flex items-center">{statusIcon[task.status]}</div>
      </div>

      <h3 className="font-medium mb-1">{task.title}</h3>

      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{task.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
          <span className="text-xs">{task.dueDate}</span>
        </div>

        {task.assignee ? (
          <UserAvatar user={task.assignee} size="sm" />
        ) : (
          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs">?</span>
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        {task.tags.map((tag, index) => (
          <span key={index} className="text-xs px-1.5 py-0.5 bg-muted rounded-sm">
            {tag}
          </span>
        ))}
        <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-sm">
          {task.projectName}
        </span>
      </div>
    </Link>
  )
}

