import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { PastContestModal } from "@/components/client/past-contest-modal"

const pastContests = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    winner: "Alice Johnson",
    rating: 4.8,
    budget: "$2500",
    date: "2023-05-15",
    description:
      "A complete overhaul of our e-commerce website with a focus on improving user experience and increasing conversion rates.",
    totalSubmissions: 25,
    duration: "30 days",
  },
  {
    id: 2,
    title: "Mobile App UI/UX",
    winner: "Bob Smith",
    rating: 4.5,
    budget: "$3000",
    date: "2023-04-22",
    description:
      "Design of a user-friendly mobile app interface for our fitness tracking application, emphasizing ease of use and visual appeal.",
    totalSubmissions: 18,
    duration: "21 days",
  },
  {
    id: 3,
    title: "Logo Design for Tech Startup",
    winner: "Charlie Brown",
    rating: 4.9,
    budget: "$1500",
    date: "2023-03-10",
    description:
      "Creation of a modern and memorable logo for our AI-focused tech startup, conveying innovation and trustworthiness.",
    totalSubmissions: 40,
    duration: "14 days",
  },
]

export default function PastContests() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Past Contests</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pastContests.map((contest) => (
          <Card key={contest.id}>
            <CardHeader>
              <CardTitle>{contest.title}</CardTitle>
              <CardDescription>Winner: {contest.winner}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-1" />
                  <span>{contest.rating}</span>
                </div>
                <Badge variant="secondary">{contest.budget}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Completed on: {contest.date}</p>
              <div className="mt-4">
                <PastContestModal contest={contest} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

