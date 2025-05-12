import type { User } from "./user";

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "on-track" | "at-risk" | "delayed" | "completed";
  client?: string;
  teamSize?: number;
  teamMembers: string[];
  tasks: Task[];
  progress: number;
  dueDate: string;
  priority: "high" | "medium" | "low";
}

export interface Task {
  id: string;
  title: string;
  description: string;
  projectName: string;
  assignee: User;
  dueDate: string;
  priority: "high" | "medium" | "low";
  status: "todo" | "in-progress" | "review" | "completed";
  projectId: string;
  tags: string[];
}

export interface Message {
  id: string;
  sender: User;
  recipient: User;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: Array<{
    name: string;
    url: string;
    type: string;
  }>;
}

export interface Notification {
  id: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

export interface TaskBoard {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
}

export interface TaskList {
  id: string;
  name: string;
  tasks: Task[];
}

export interface TaskDetail extends Task {
  comments: TaskComment[];
  subtasks: Subtask[];
  attachments: Array<{
    id: string;
    name: string;
    url: string;
    type: string;
    size: string;
    uploadedBy: User;
    uploadedAt: string;
  }>;
  timeSpent?: number;
}

export interface Subtask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface ProjectDetail extends Project {
  client: string;
  teamSize: number;
}

export interface TeamMember extends User {
  bio?: string;
  skills?: string[];
  projects?: string[];
  joinDate?: string;
  contactInfo?: {
    phone?: string;
    address?: string;
    socialMedia?: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
  };
  performance?: {
    tasksCompleted: number;
    hoursLogged: number;
    projectsContributed: number;
    rating: number;
  };
}

export interface DashboardStats {
  totalProjects: number;
  teamMembers: number;
  hoursLogged: number;
  completedTasks: number;
  projectsThisMonth: number;
  pendingInvitations: number;
  hoursThisWeek: number;
  completionRate: number;
}

export interface ActivityItem {
  id: string;
  user: User;
  action: string;
  target: string;
  time: string;
  project: string;
  projectId: string;
}

export interface Deadline {
  id: string;
  task: string;
  project: string;
  projectId: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
}

export interface TaskComment {
  id: string;
  user: User;
  content: string;
  timestamp: string;
}

export interface TaskHistory {
  id: string;
  user: User;
  action: string;
  details?: string;
  timestamp: string;
}
