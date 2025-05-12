"use client";

import { useState } from "react";
import type { Task } from "@/types/dashboard";
import { TaskCard } from "@/components/shared/task-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, SortAsc, SortDesc } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for demonstration
const mockTasks: Task[] = [
  {
    id: "1",
    title: "Finalize Homepage Design",
    description:
      "Complete the homepage design with all stakeholder feedback incorporated",
    projectId: "1",
    projectName: "E-Commerce Redesign",
    assignee: {
      id: "1",
      name: "Sarah Chen",
      email: "sarah@example.com",
      role: "Creative Director",
      status: "active",
    },
    dueDate: "Tomorrow",
    status: "in-progress",
    priority: "high",
    tags: ["Design", "Homepage"],
  },
  {
    id: "2",
    title: "User Authentication Flow",
    description:
      "Implement secure authentication with multi-factor authentication",
    projectId: "2",
    projectName: "Mobile Banking App",
    assignee: {
      id: "6",
      name: "Robert Johnson",
      email: "robert@example.com",
      role: "Security Specialist",
      status: "away",
    },
    dueDate: "Mar 12, 2025",
    status: "todo",
    priority: "medium",
    tags: ["Security", "Authentication"],
  },
  {
    id: "3",
    title: "Data Visualization Components",
    description: "Create reusable chart components for the analytics dashboard",
    projectId: "3",
    projectName: "Healthcare Dashboard",
    assignee: {
      id: "8",
      name: "James Wilson",
      email: "james@example.com",
      role: "Data Scientist",
      status: "active",
    },
    dueDate: "Mar 15, 2025",
    status: "in-progress",
    priority: "medium",
    tags: ["Data", "Visualization"],
  },
  {
    id: "4",
    title: "Payment Gateway Integration",
    description:
      "Integrate with Stripe and PayPal for secure payment processing",
    projectId: "1",
    projectName: "E-Commerce Redesign",
    assignee: {
      id: "4",
      name: "David Kim",
      email: "david@example.com",
      role: "Backend Engineer",
      status: "offline",
    },
    dueDate: "Mar 20, 2025",
    status: "todo",
    priority: "high",
    tags: ["Backend", "Payments"],
  },
  {
    id: "5",
    title: "Mobile Responsive Testing",
    description:
      "Test the application on various mobile devices and screen sizes",
    projectId: "1",
    projectName: "E-Commerce Redesign",
    assignee: {
      id: "3",
      name: "Emily Wong",
      email: "emily@example.com",
      role: "UX Designer",
      status: "away",
    },
    dueDate: "Mar 18, 2025",
    status: "todo",
    priority: "medium",
    tags: ["Testing", "Mobile"],
  },
  {
    id: "6",
    title: "API Documentation",
    description: "Create comprehensive documentation for all API endpoints",
    projectId: "2",
    projectName: "Mobile Banking App",
    assignee: {
      id: "2",
      name: "Michael Rodriguez",
      email: "michael@example.com",
      role: "Lead Developer",
      status: "active",
    },
    dueDate: "Mar 25, 2025",
    status: "todo",
    priority: "low",
    tags: ["Documentation", "API"],
  },
  {
    id: "7",
    title: "User Onboarding Flow",
    description: "Design and implement the user onboarding experience",
    projectId: "3",
    projectName: "Healthcare Dashboard",
    assignee: {
      id: "1",
      name: "Sarah Chen",
      email: "sarah@example.com",
      role: "Creative Director",
      status: "active",
    },
    dueDate: "Mar 22, 2025",
    status: "review",
    priority: "medium",
    tags: ["UX", "Onboarding"],
  },
  {
    id: "8",
    title: "Performance Optimization",
    description: "Optimize application performance and loading times",
    projectId: "1",
    projectName: "E-Commerce Redesign",
    assignee: {
      id: "2",
      name: "Michael Rodriguez",
      email: "michael@example.com",
      role: "Lead Developer",
      status: "active",
    },
    dueDate: "Mar 28, 2025",
    status: "todo",
    priority: "high",
    tags: ["Performance", "Optimization"],
  },
  {
    id: "9",
    title: "Database Schema Design",
    description:
      "Design the database schema for efficient data storage and retrieval",
    projectId: "2",
    projectName: "Mobile Banking App",
    assignee: {
      id: "4",
      name: "David Kim",
      email: "david@example.com",
      role: "Backend Engineer",
      status: "offline",
    },
    dueDate: "Mar 10, 2025",
    status: "completed",
    priority: "high",
    tags: ["Database", "Architecture"],
  },
  {
    id: "10",
    title: "Unit Test Coverage",
    description:
      "Increase unit test coverage to at least 80% for core components",
    projectId: "3",
    projectName: "Healthcare Dashboard",
    assignee: {
      id: "7",
      name: "Lisa Wang",
      email: "lisa@example.com",
      role: "QA Engineer",
      status: "offline",
    },
    dueDate: "Mar 30, 2025",
    status: "in-progress",
    priority: "medium",
    tags: ["Testing", "Quality"],
  },
];

type SortOption = "dueDate" | "priority" | "status" | "project";
type SortDirection = "asc" | "desc";

export default function TasksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("dueDate");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const filterTasks = (tasks: Task[], status: string | null, query: string) => {
    return tasks.filter((task) => {
      // Filter by status if specified
      if (status && status !== "all") {
        if (status !== task.status) return false;
      }

      // Filter by search query
      if (query) {
        const lowercaseQuery = query.toLowerCase();
        return (
          task.title.toLowerCase().includes(lowercaseQuery) ||
          task.description.toLowerCase().includes(lowercaseQuery) ||
          task.projectName.toLowerCase().includes(lowercaseQuery) ||
          task.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
        );
      }

      return true;
    });
  };

  const sortTasks = (
    tasks: Task[],
    sortBy: SortOption,
    direction: SortDirection
  ) => {
    return [...tasks].sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "dueDate":
          comparison =
            new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
          break;
        case "priority":
          const priorityOrder = { high: 0, medium: 1, low: 2 };
          comparison = priorityOrder[a.priority] - priorityOrder[b.priority];
          break;
        case "status":
          const statusOrder = {
            todo: 0,
            "in-progress": 1,
            review: 2,
            completed: 3,
          };
          comparison = statusOrder[a.status] - statusOrder[b.status];
          break;
        case "project":
          comparison = a.projectName.localeCompare(b.projectName);
          break;
      }

      return direction === "asc" ? comparison : -comparison;
    });
  };

  const toggleSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <Button asChild>
          <Link href="/dashboard/tasks/new">
            <Plus className="h-4 w-4 mr-2" />
            New Task
          </Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tasks..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => {}}>All Tasks</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>My Tasks</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>
                High Priority
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>Due Soon</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                {sortDirection === "asc" ? (
                  <SortAsc className="h-4 w-4" />
                ) : (
                  <SortDesc className="h-4 w-4" />
                )}
                Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSortBy("dueDate")}>
                By Due Date{" "}
                {sortBy === "dueDate" && (sortDirection === "asc" ? "↑" : "↓")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("priority")}>
                By Priority{" "}
                {sortBy === "priority" && (sortDirection === "asc" ? "↑" : "↓")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("status")}>
                By Status{" "}
                {sortBy === "status" && (sortDirection === "asc" ? "↑" : "↓")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("project")}>
                By Project{" "}
                {sortBy === "project" && (sortDirection === "asc" ? "↑" : "↓")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={toggleSortDirection}>
                {sortDirection === "asc" ? "Ascending ↑" : "Descending ↓"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="todo">To Do</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortTasks(
              filterTasks(mockTasks, null, searchQuery),
              sortBy,
              sortDirection
            ).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="todo" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortTasks(
              filterTasks(mockTasks, "todo", searchQuery),
              sortBy,
              sortDirection
            ).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortTasks(
              filterTasks(mockTasks, "in-progress", searchQuery),
              sortBy,
              sortDirection
            ).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="review" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortTasks(
              filterTasks(mockTasks, "review", searchQuery),
              sortBy,
              sortDirection
            ).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortTasks(
              filterTasks(mockTasks, "completed", searchQuery),
              sortBy,
              sortDirection
            ).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
