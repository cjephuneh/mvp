import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContestDetailsModal } from "@/components/client/contest-details-modal"

const contests = [
  {
    id: 1,
    title: "AI-powered Chat Interface",
    description: "Design and implement an AI chatbot interface with natural language processing capabilities.",
    submissions: 12,
    daysLeft: 5,
    budget: "$2000",
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    description: "Create a user-friendly mobile app for an e-commerce platform with a focus on seamless checkout.",
    submissions: 8,
    daysLeft: 7,
    budget: "$2500",
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Develop an interactive dashboard to visualize complex datasets with customizable charts and filters.",
    submissions: 15,
    daysLeft: 3,
    budget: "$1800",
  },
]

export default function ActiveContests() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Active Contests</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contests.map((contest) => (
          <Card key={contest.id}>
            <CardHeader>
              <CardTitle>{contest.title}</CardTitle>
              <CardDescription>{contest.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge variant="secondary">{contest.submissions} Submissions</Badge>
                <span className="text-sm text-muted-foreground">{contest.daysLeft} days left</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="font-semibold">{contest.budget}</span>
              <ContestDetailsModal contest={contest} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

