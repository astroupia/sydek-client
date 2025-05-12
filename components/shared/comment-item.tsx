import type { TaskComment } from "@/types/dashboard"
import { UserAvatar } from "./user-avatar"
import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"
import { Paperclip } from "lucide-react"

export interface CommentItemProps {
  comment: TaskComment
  className?: string
}

export function CommentItem({ comment, className }: CommentItemProps) {
  const timestamp = new Date(comment.timestamp)

  const formatCommentTime = (date: Date) => {
    const distance = formatDistanceToNow(date, { addSuffix: true })
    return distance
  }

  return (
    <div className={cn("flex space-x-3", className)}>
      <UserAvatar user={comment.user} size="sm" className="flex-shrink-0 mt-1" />

      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <span className="font-medium mr-2">{comment.user.name}</span>
          <span className="text-xs text-muted-foreground">{formatCommentTime(timestamp)}</span>
        </div>

        <div className="mt-1 text-sm whitespace-pre-wrap break-words">{comment.content}</div>

        {comment.attachments && comment.attachments.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {comment.attachments.map((attachment, index) => (
              <div key={index} className="flex items-center rounded-md border px-2 py-1 text-xs">
                <Paperclip className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="truncate">{attachment.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

