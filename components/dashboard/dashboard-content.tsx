"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  User,
  FolderPlus,
  Upload,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const quickActions = [
  {
    icon: User,
    label: "Update Profile",
    description: "Complete your company details",
    href: "/dashboard/profile",
  },
  {
    icon: FolderPlus,
    label: "Start a Project",
    description: "Submit a new project request",
    href: "/dashboard/projects",
  },
  {
    icon: Upload,
    label: "Upload Requirements",
    description: "Share documents with us",
    href: "/dashboard/documents",
  },
]

const requests = [
  {
    id: 1,
    title: "Voice AI Agent for Customer Support",
    status: "in-progress",
    date: "Jan 15, 2026",
    description: "Building conversational AI for tier-1 support calls",
  },
  {
    id: 2,
    title: "CRM Integration Automation",
    status: "review",
    date: "Jan 10, 2026",
    description: "Connecting Salesforce with internal systems",
  },
  {
    id: 3,
    title: "Analytics Dashboard MVP",
    status: "completed",
    date: "Dec 28, 2025",
    description: "Real-time metrics and reporting platform",
  },
  {
    id: 4,
    title: "Lead Qualification Bot",
    status: "pending",
    date: "Jan 20, 2026",
    description: "AI agent for inbound lead qualification",
  },
]

const statusConfig = {
  pending: {
    label: "Pending",
    icon: Clock,
    variant: "secondary" as const,
  },
  "in-progress": {
    label: "In Progress",
    icon: Loader2,
    variant: "default" as const,
  },
  review: {
    label: "In Review",
    icon: AlertCircle,
    variant: "outline" as const,
  },
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    variant: "secondary" as const,
  },
}

export function DashboardContent() {
  const profileCompletion = 65

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back, John</h1>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s an overview of your projects and account.
        </p>
      </div>

      {/* Profile Completion Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-primary/50 glow">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Complete Your Profile</CardTitle>
              <span className="text-2xl font-bold text-primary">{profileCompletion}%</span>
            </div>
            <CardDescription>
              A complete profile helps us deliver better results for your projects.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={profileCompletion} className="h-2" />
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Add company details to reach 100%
              </span>
              <Link href="/dashboard/profile">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Complete Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {quickActions.map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={action.href}>
                <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <action.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold">{action.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Requests Table */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Requests</h2>
          <Link href="/dashboard/projects">
            <Button variant="ghost" size="sm">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-medium text-muted-foreground">Project</th>
                    <th className="text-left p-4 font-medium text-muted-foreground hidden sm:table-cell">Date</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => {
                    const status = statusConfig[request.status as keyof typeof statusConfig]
                    return (
                      <tr key={request.id} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                        <td className="p-4">
                          <div>
                            <p className="font-medium">{request.title}</p>
                            <p className="text-sm text-muted-foreground mt-1 hidden md:block">
                              {request.description}
                            </p>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground hidden sm:table-cell">
                          {request.date}
                        </td>
                        <td className="p-4">
                          <Badge variant={status.variant} className="gap-1">
                            <status.icon className={`h-3 w-3 ${request.status === "in-progress" ? "animate-spin" : ""}`} />
                            {status.label}
                          </Badge>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
