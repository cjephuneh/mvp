import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const mockContests = [
  { id: 1, title: "Mobile App UI Design", prize: "$1000", deadline: "2023-12-31", entries: 15 },
  { id: 2, title: "E-commerce Website Development", prize: "$2000", deadline: "2024-01-15", entries: 8 },
  { id: 3, title: "Logo Design for Tech Startup", prize: "$500", deadline: "2023-12-20", entries: 25 },
]

export function ContestList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {mockContests.map((contest) => (
        <Card key={contest.id}>
          <CardHeader>
            <CardTitle>{contest.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Prize: {contest.prize}</p>
            <p>Deadline: {contest.deadline}</p>
            <p>Entries: {contest.entries}</p>
          </CardContent>
          <CardFooter>
            <Button>View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

