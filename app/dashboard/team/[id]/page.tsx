"use client"

import type React from "react"
import type { TeamMember, Task, Project } from "@/types/dashboard"
import { UserAvatar } from "@/components/shared/user-avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Calendar, Clock, Edit, FileText, Mail, MapPin, MessageSquare, Phone, Star } from "lucide-react"
import Link from "next/link"
import { TaskCard } from "@/components/shared/task-card"
import { ProjectCard } from "@/components/shared/project-card"

// Mock data for demonstration
const mockTeamMember: TeamMember = {
  id: "1",
  name: "Sarah Chen",
  email: "sarah@example.com",
  role: "Creative Director",
  status: "online",
  bio: "Experienced creative director with a passion for user-centered design. Over 8 years of experience in leading design teams and creating impactful digital experiences.",
  skills: ["UI/UX Design", "Brand Strategy", "Design Systems", "Team Leadership", "User Research"],
  projects: ["E-Commerce Redesign", "Healthcare Dashboard", "Mobile Banking App"],
  joinDate: "Jan 15, 2023",
  contactInfo: {
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA",
    socialMedia: {
      linkedin: "linkedin.com/in/sarahchen",
      twitter: "twitter.com/sarahchen",
      github: "github.com/sarahchen",
    },
  },
  performance: {
    tasksCompleted: 124,
    hoursLogged: 1840,
    projectsContributed: 12,
    rating: 4.8,
  },
}

// Mock tasks assigned to this team member
const mockTasks: Task[] = [
  {
    id: "1",
    title: "Finalize Homepage Design",
    description: "Complete the homepage design with all stakeholder feedback incorporated",
    projectId: "1",
    projectName: "E-Commerce Redesign",
    assignee: mockTeamMember,
    dueDate: "Tomorrow",
    status: "in-progress",
    priority: "high",
    tags: ["Design", "Homepage"],
  },
  {
    id: "7",
    title: "User Onboarding Flow",
    description: "Design and implement the user onboarding experience",
    projectId: "3",
    projectName: "Healthcare Dashboard",
    assignee: mockTeamMember,
    dueDate: "Mar 22, 2025",
    status: "review",
    priority: "medium",
    tags: ["UX", "Onboarding"],
  },
]

// Mock projects this team member is part of
const mockProjects: Project[] = [
  {
    id: "1",
    name: "E-Commerce Redesign",
    description: "Redesign the e-commerce platform with improved UX and mobile responsiveness",
    client: "FashionForward Inc.",
    progress: 75,
    startDate: "Jan 15, 2025",
    dueDate: "Mar 15, 2025",
    status: "on-track",
    teamSize: 4,
    teamMembers: [mockTeamMember],
    tags: ["Design", "Frontend", "E-commerce"],
  },
  {
    id: "3",
    name: "Healthcare Dashboard",
    description: "Create an analytics dashboard for healthcare providers",
    client: "MediCare Network",
    progress: 60,
    startDate: "Feb 1, 2025",
    dueDate: "Mar 28, 2025",
    status: "on-track",
    teamSize: 5,
    teamMembers: [mockTeamMember],
    tags: ["Dashboard", "Healthcare", "Data Visualization"],
  },
]

export default function TeamMemberDetailPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the team member details based on the ID
  // For this example, we're using mock data

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <UserAvatar user={mockTeamMember} size="lg" />
          <div>
            <h1 className="text-3xl font-bold">{mockTeamMember.name}</h1>
            <p className="text-muted-foreground">{mockTeamMember.role}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/messages?user=${mockTeamMember.id}`}>
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Link>
          </Button>
          <Button>
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href={`mailto:${mockTeamMember.email}`} className="text-sm hover:underline">
                  {mockTeamMember.email}
                </a>
              </div>
              {mockTeamMember.contactInfo?.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <a href={`tel:${mockTeamMember.contactInfo.phone}`} className="text-sm hover:underline">
                    {mockTeamMember.contactInfo.phone}
                  </a>
                </div>
              )}
              {mockTeamMember.contactInfo?.address && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{mockTeamMember.contactInfo.address}</span>
                </div>
              )}
              {mockTeamMember.joinDate && (
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Joined {mockTeamMember.joinDate}</span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mockTeamMember.skills?.map((skill, index) => (
                  <div key={index} className="px-2 py-1 bg-muted text-sm rounded-md flex items-center">
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockTeamMember.performance && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Tasks Completed</p>
                      <p className="text-xl font-bold">{mockTeamMember.performance.tasksCompleted}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Hours Logged</p>
                      <p className="text-xl font-bold">{mockTeamMember.performance.hoursLogged}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Projects</p>
                      <p className="text-xl font-bold">{mockTeamMember.performance.projectsContributed}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <div className="flex items-center">
                        <p className="text-xl font-bold mr-1">{mockTeamMember.performance.rating}</p>
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={`/dashboard/team/${mockTeamMember.id}/performance`}>
                        <BarChart className="h-4 w-4 mr-2" />
                        View Detailed Stats
                      </Link>
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{mockTeamMember.bio}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="tasks">
            <TabsList className="mb-4">
              <TabsTrigger value="tasks">
                <CheckSquare className="h-4 w-4 mr-2" />
                Assigned Tasks
              </TabsTrigger>
              <TabsTrigger value="projects">
                <FileText className="h-4 w-4 mr-2" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="activity">
                <Clock className="h-4 w-4 mr-2" />
                Recent Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tasks" className="space-y-4">
              {mockTasks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-6 text-center">
                    <p className="text-muted-foreground">No tasks assigned currently</p>
                  </CardContent>
                </Card>
              )}
              <div className="text-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/dashboard/tasks?assignee=${mockTeamMember.id}`}>View All Tasks</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              {mockProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-6 text-center">
                    <p className="text-muted-foreground">Not assigned to any projects</p>
                  </CardContent>
                </Card>
              )}
              <div className="text-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/dashboard/projects?team=${mockTeamMember.id}`}>View All Projects</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardContent className="py-6">
                  <div className="space-y-6">
                    {[
                      {
                        action: "completed task",
                        target: "API Integration",
                        time: "2 hours ago",
                        project: "E-Commerce Redesign",
                      },
                      {
                        action: "commented on",
                        target: "User Onboarding Flow",
                        time: "Yesterday at 4:30 PM",
                        project: "Healthcare Dashboard",
                      },
                      {
                        action: "uploaded",
                        target: "Design Assets",
                        time: "Yesterday at 2:15 PM",
                        project: "Healthcare Dashboard",
                      },
                      {
                        action: "created task",
                        target: "Mobile Responsive Testing",
                        time: "Mar 5, 2025",
                        project: "E-Commerce Redesign",
                      },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          {mockTeamMember.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>
                        <div className="flex-1">
                          <p>
                            <span className="font-medium">{mockTeamMember.name}</span>{" "}
                            <span className="text-muted-foreground">{activity.action}</span>{" "}
                            <span className="font-medium">{activity.target}</span>
                          </p>
                          <div className="flex items-center mt-1">
                            <p className="text-sm text-muted-foreground">{activity.time}</p>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <p className="text-sm text-muted-foreground">{activity.project}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="text-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/dashboard/activity?user=${mockTeamMember.id}`}>View All Activity</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function CheckSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )
}

