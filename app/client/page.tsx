"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Briefcase, Users, DollarSign } from "lucide-react"
import { ActivityModal } from "@/components/client/activity-modal"
import { SubmissionModal } from "@/components/client/submission-modal"

const recentActivities = [
  {
    title: "New submission for 'AI-powered Chat Interface'",
    time: "2 hours ago",
    details:
      "A new design has been submitted for your 'AI-powered Chat Interface' contest. The submission includes a modern UI design with intuitive user flow and advanced NLP integration concepts.",
  },
  {
    title: "Contest 'E-commerce Mobile App' ended",
    time: "1 day ago",
    details:
      "Your contest 'E-commerce Mobile App' has officially ended. You received a total of 15 submissions. Please review the submissions and select a winner within the next 7 days.",
  },
  {
    title: "You selected a winner for 'Blockchain Wallet Design'",
    time: "3 days ago",
    details:
      "You have selected the winning design for your 'Blockchain Wallet Design' contest. The winner has been notified and the funds have been released from escrow. Don't forget to leave a review for the winner!",
  },
]

const recentSubmissions = [
  {
    title: "Modern UI Design for 'AI-powered Chat Interface'",
    designer: "Alice Johnson",
    time: "2 hours ago",
    preview: "/placeholder.svg?height=300&width=400",
    description:
      "This design focuses on creating an intuitive and visually appealing interface for the AI-powered chat. It features a clean, minimalist design with subtle animations to enhance user experience.",
  },
  {
    title: "Mobile App Prototype for 'E-commerce Mobile App'",
    designer: "Bob Smith",
    time: "1 day ago",
    preview: "/placeholder.svg?height=300&width=400",
    description:
      "This prototype demonstrates a seamless shopping experience on mobile devices. It includes features like easy product browsing, a smart search function, and a streamlined checkout process.",
  },
  {
    title: "Dashboard Layout for 'Data Visualization Dashboard'",
    designer: "Charlie Brown",
    time: "3 days ago",
    preview: "/placeholder.svg?height=300&width=400",
    description:
      "This dashboard layout provides a comprehensive view of complex datasets. It includes customizable charts, filters, and an intuitive navigation system to explore data effortlessly.",
  },
]

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Welcome back, Contest Holder!</h1>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Contests</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">+10 in the last 24 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.6</div>
            <p className="text-xs text-muted-foreground">Based on 15 reviews</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Escrow Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,000</div>
            <p className="text-xs text-muted-foreground">Available for contests</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {recentActivities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div>
              <h3 className="font-medium">{activity.title}</h3>
              <p className="text-sm text-muted-foreground">{activity.time}</p>
            </div>
            <ActivityModal activity={activity} />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Recent Submissions</h2>
      <div className="space-y-4">
        {recentSubmissions.map((submission, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <div>
              <h3 className="font-medium">{submission.title}</h3>
              <p className="text-sm text-muted-foreground">by {submission.designer}</p>
              <p className="text-sm text-muted-foreground">{submission.time}</p>
            </div>
            <SubmissionModal submission={submission} />
          </div>
        ))}
      </div>
    </div>
  )
}

