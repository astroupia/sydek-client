import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Clock,
  Users,
  FileText,
  Plus,
  MoreHorizontal,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Total Projects",
            value: "12",
            icon: <FileText className="h-5 w-5 text-blue-500" />,
            change: "+2 this month",
            trend: "up",
          },
          {
            title: "Team Members",
            value: "8",
            icon: <Users className="h-5 w-5 text-green-500" />,
            change: "1 pending invitation",
            trend: "neutral",
          },
          {
            title: "Hours Logged",
            value: "164",
            icon: <Clock className="h-5 w-5 text-orange-500" />,
            change: "+22 this week",
            trend: "up",
          },
          {
            title: "Completed Tasks",
            value: "48",
            icon: <BarChart className="h-5 w-5 text-purple-500" />,
            change: "75% completion rate",
            trend: "up",
          },
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="p-2 bg-muted rounded-full">{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center mt-1">
                {stat.trend === "up" && (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                )}
                {stat.trend === "down" && (
                  <TrendingUp className="h-3 w-3 text-red-500 mr-1 rotate-180" />
                )}
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Projects Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>
                  Your active and recent projects
                </CardDescription>
              </div>
              <Button size="sm" asChild>
                <Link href="/dashboard/projects/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="active">
                <TabsList className="mb-4">
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                </TabsList>
                <TabsContent value="active">
                  <div className="space-y-4">
                    {[
                      {
                        name: "E-Commerce Redesign",
                        client: "FashionForward Inc.",
                        progress: 75,
                        dueDate: "Mar 15, 2025",
                        status: "on-track",
                      },
                      {
                        name: "Mobile Banking App",
                        client: "FirstSecure Bank",
                        progress: 40,
                        dueDate: "Apr 10, 2025",
                        status: "at-risk",
                      },
                      {
                        name: "Healthcare Dashboard",
                        client: "MediCare Network",
                        progress: 60,
                        dueDate: "Mar 28, 2025",
                        status: "on-track",
                      },
                    ].map((project, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center">
                          {project.status === "on-track" ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-amber-500 mr-3 flex-shrink-0" />
                          )}
                          <div>
                            <h3 className="font-medium">{project.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {project.client}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-sm font-medium">
                              {project.progress}%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Due {project.dueDate}
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/dashboard/projects/${index + 1}`}>
                              <MoreHorizontal className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/dashboard/projects">
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="completed">
                  <div className="p-4 text-center text-muted-foreground">
                    <p>You have 5 completed projects.</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      asChild
                    >
                      <Link href="/dashboard/projects?filter=completed">
                        View Completed Projects
                      </Link>
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="all">
                  <div className="p-4 text-center text-muted-foreground">
                    <p>You have 12 total projects.</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      asChild
                    >
                      <Link href="/dashboard/projects">View All Projects</Link>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    user: "Sarah Chen",
                    action: "added a new task",
                    target: "Mobile App Wireframes",
                    time: "2 hours ago",
                    project: "Mobile Banking App",
                  },
                  {
                    user: "Michael Rodriguez",
                    action: "completed",
                    target: "API Integration",
                    time: "4 hours ago",
                    project: "E-Commerce Redesign",
                  },
                  {
                    user: "Emily Wong",
                    action: "uploaded",
                    target: "Design Assets",
                    time: "Yesterday at 4:30 PM",
                    project: "Healthcare Dashboard",
                  },
                  {
                    user: "David Kim",
                    action: "commented on",
                    target: "Backend Architecture",
                    time: "Yesterday at 2:15 PM",
                    project: "E-Commerce Redesign",
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      {activity.user
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <p>
                        <span className="font-medium">{activity.user}</span>{" "}
                        <span className="text-muted-foreground">
                          {activity.action}
                        </span>{" "}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <div className="flex items-center mt-1">
                        <p className="text-sm text-muted-foreground">
                          {activity.time}
                        </p>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <p className="text-sm text-muted-foreground">
                          {activity.project}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/activity">
                    View All Activity
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Tasks due soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    task: "Finalize Homepage Design",
                    project: "E-Commerce Redesign",
                    dueDate: "Tomorrow",
                    priority: "high",
                  },
                  {
                    task: "User Authentication Flow",
                    project: "Mobile Banking App",
                    dueDate: "Mar 12, 2025",
                    priority: "medium",
                  },
                  {
                    task: "Data Visualization Components",
                    project: "Healthcare Dashboard",
                    dueDate: "Mar 15, 2025",
                    priority: "medium",
                  },
                ].map((deadline, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <h4 className="font-medium">{deadline.task}</h4>
                    <p className="text-sm text-muted-foreground">
                      {deadline.project}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center text-sm">
                        <Clock className="h-3 w-3 mr-1 text-secondary" />
                        <span className="text-secondary font-medium">
                          Due {deadline.dueDate}
                        </span>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          deadline.priority === "high"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                        }`}
                      >
                        {deadline.priority.charAt(0).toUpperCase() +
                          deadline.priority.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/tasks">
                    View All Tasks
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Your project collaborators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Sarah Chen",
                    role: "Creative Director",
                    status: "online",
                  },
                  {
                    name: "Michael Rodriguez",
                    role: "Lead Developer",
                    status: "online",
                  },
                  { name: "Emily Wong", role: "UX Designer", status: "away" },
                  {
                    name: "David Kim",
                    role: "Backend Engineer",
                    status: "offline",
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          {member.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>
                        <span
                          className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-background ${
                            member.status === "online"
                              ? "bg-green-500"
                              : member.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                          }`}
                        ></span>
                      </div>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        href={`/dashboard/messages?user=${member.name
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        Message
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/dashboard/team">
                    <Plus className="h-4 w-4 mr-2" />
                    Manage Team
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
