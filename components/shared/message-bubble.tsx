import type { Message } from "@/types/dashboard"
import { UserAvatar } from "./user-avatar"
import { cn } from "@/lib/utils"
import { format, isToday, isYesterday } from "date-fns"
import { Paperclip } from "lucide-react"

export interface MessageBubbleProps {
  message: Message
  isCurrentUser: boolean
  showAvatar?: boolean
  showTimestamp?: boolean
  className?: string
}

export function MessageBubble({
  message,
  isCurrentUser,
  showAvatar = true,
  showTimestamp = true,
  className,
}: MessageBubbleProps) {
  const timestamp = new Date(message.timestamp)

  const formatMessageTime = (date: Date) => {
    if (isToday(date)) return `Today at ${format(date, "h:mm a")}`
    if (isYesterday(date)) return `Yesterday at ${format(date, "h:mm a")}`
    return format(date, "MMM d, yyyy 'at' h:mm a")
  }

  return (
    <div className={cn("flex w-full max-w-full", isCurrentUser ? "justify-end" : "justify-start", className)}>
      {!isCurrentUser && showAvatar && (
        <div className="mr-2 flex-shrink-0">
          <UserAvatar user={message.sender} size="sm" />
        </div>
      )}

      <div className={cn("flex flex-col max-w-[80%]", isCurrentUser ? "items-end" : "items-start")}>
        {!isCurrentUser && showAvatar && (
          <span className="text-xs text-muted-foreground mb-1">{message.sender.name}</span>
        )}

        <div
          className={cn(
            "rounded-lg px-3 py-2 text-sm",
            isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted",
          )}
        >
          <div className="whitespace-pre-wrap break-words">{message.content}</div>

          {message.attachments && message.attachments.length > 0 && (
            <div className="mt-2 space-y-1">
              {message.attachments.map((attachment, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center rounded-md px-2 py-1 text-xs",
                    isCurrentUser ? "bg-primary-foreground/10" : "bg-background",
                  )}
                >
                  <Paperclip className="h-3 w-3 mr-1 flex-shrink-0" />
                  <span className="truncate">{attachment.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {showTimestamp && (
          <span className="text-xs text-muted-foreground mt-1">
            {formatMessageTime(timestamp)}
            {message.read && isCurrentUser && " • Read"}
          </span>
        )}
      </div>

      {isCurrentUser && showAvatar && (
        <div className="ml-2 flex-shrink-0">
          <UserAvatar user={message.sender} size="sm" />
        </div>
      )}
    </div>
  )
}

