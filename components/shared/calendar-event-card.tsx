import type { CalendarEvent } from "@/types/dashboard"
import { Clock, MapPin, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { format, isToday, isTomorrow } from "date-fns"
import { UserAvatar } from "./user-avatar"

export interface CalendarEventCardProps {
  event: CalendarEvent
  className?: string
  compact?: boolean
}

export function CalendarEventCard({ event, className, compact = false }: CalendarEventCardProps) {
  const startDate = new Date(event.start)
  const endDate = new Date(event.end)

  const formatTime = (date: Date) => {
    return format(date, "h:mm a")
  }

  const formatDate = (date: Date) => {
    if (isToday(date)) return "Today"
    if (isTomorrow(date)) return "Tomorrow"
    return format(date, "MMM d, yyyy")
  }

  const getEventDuration = () => {
    if (event.allDay) return "All day"
    return `${formatTime(startDate)} - ${formatTime(endDate)}`
  }

  const getEventTypeColor = () => {
    if (event.projectId) return "bg-blue-500"
    if (event.title.toLowerCase().includes("meeting")) return "bg-purple-500"
    if (event.title.toLowerCase().includes("deadline")) return "bg-red-500"
    return "bg-green-500"
  }

  if (compact) {
    return (
      <div className={cn("flex items-center p-2 rounded-md hover:bg-muted/50", className)}>
        <div className={cn("w-1 h-full min-h-[2rem] rounded-full mr-3", getEventTypeColor())} />
        <div className="flex-1 min-w-0">
          <h4 className="font-medium truncate">{event.title}</h4>
          <p className="text-xs text-muted-foreground">{getEventDuration()}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("border rounded-lg overflow-hidden", className)}>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className={cn("w-2 h-2 rounded-full mr-2", getEventTypeColor())} />
          <h3 className="font-medium">{event.title}</h3>
        </div>

        {event.description && <p className="text-sm text-muted-foreground mb-4">{event.description}</p>}

        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <div>
              <div>{formatDate(startDate)}</div>
              <div className="text-muted-foreground">{getEventDuration()}</div>
            </div>
          </div>

          {event.location && (
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{event.location}</span>
            </div>
          )}

          {event.projectId && (
            <div className="flex items-center text-sm">
              <span className="text-muted-foreground mr-2">Project:</span>
              <span className="font-medium">{event.projectName}</span>
            </div>
          )}
        </div>
      </div>

      {event.attendees.length > 0 && (
        <div className="px-4 py-3 bg-muted/50 border-t">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground mr-2">Attendees:</span>
            <div className="flex -space-x-2">
              {event.attendees.slice(0, 3).map((attendee, index) => (
                <UserAvatar
                  key={index}
                  user={attendee}
                  showStatus={false}
                  size="sm"
                  className="border-2 border-background"
                />
              ))}
              {event.attendees.length > 3 && (
                <div className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                  +{event.attendees.length - 3}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

