"use client"

import type { CalendarEvent } from "@/types/dashboard"
import { CalendarEventCard } from "@/components/shared/calendar-event-card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { useState } from "react"
import { format, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns"
import Link from "next/link"

export interface CalendarViewProps {
  events: CalendarEvent[]
  className?: string
}

export function CalendarView({ events, className }: CalendarViewProps) {
  const [date, setDate] = useState<Date>(new Date())
  const [view, setView] = useState<"month" | "day" | "agenda">("month")

  const eventsForDate = (date: Date) => {
    return events.filter((event) => {
      const eventStart = new Date(event.start)
      return isSameDay(eventStart, date)
    })
  }

  const eventsForMonth = () => {
    const start = startOfMonth(date)
    const end = endOfMonth(date)
    const days = eachDayOfInterval({ start, end })

    return days.map((day) => ({
      date: day,
      events: eventsForDate(day),
    }))
  }

  const todayEvents = eventsForDate(new Date())

  const renderMonthView = () => {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{format(date, "MMMM yyyy")}</h2>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => newDate && setDate(newDate)}
          className="rounded-md border"
          modifiers={{
            hasEvent: (date) =>
              events.some((event) => {
                const eventStart = new Date(event.start)
                return isSameDay(eventStart, date)
              }),
          }}
          modifiersClassNames={{
            hasEvent: "bg-primary/10 font-bold text-primary",
          }}
        />
      </div>
    )
  }

  const renderDayView = () => {
    const dayEvents = eventsForDate(date)

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{format(date, "EEEE, MMMM d, yyyy")}</h2>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDate((prev) => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDate((prev) => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {dayEvents.length > 0 ? (
            dayEvents.map((event, index) => <CalendarEventCard key={index} event={event} />)
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No events scheduled for this day</p>
              <Button className="mt-4" asChild>
                <Link href="/dashboard/calendar/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderAgendaView = () => {
    const upcomingEvents = [...events]
      .filter((event) => new Date(event.start) >= new Date())
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
      .slice(0, 10)

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Upcoming Events</h2>

        <div className="space-y-4">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => <CalendarEventCard key={index} event={event} />)
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No upcoming events</p>
              <Button className="mt-4" asChild>
                <Link href="/dashboard/calendar/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Calendar</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant={view === "month" ? "default" : "outline"} size="sm" onClick={() => setView("month")}>
                    Month
                  </Button>
                  <Button variant={view === "day" ? "default" : "outline"} size="sm" onClick={() => setView("day")}>
                    Day
                  </Button>
                  <Button
                    variant={view === "agenda" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setView("agenda")}
                  >
                    Agenda
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {view === "month" && renderMonthView()}
              {view === "day" && renderDayView()}
              {view === "agenda" && renderAgendaView()}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Today's Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {todayEvents.length > 0 ? (
                  todayEvents.map((event, index) => <CalendarEventCard key={index} event={event} compact />)
                ) : (
                  <p className="text-center text-muted-foreground py-4">No events today</p>
                )}
              </div>

              <Button className="w-full mt-4" asChild>
                <Link href="/dashboard/calendar/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

