import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for a single contest (in a real app, this would come from a database or API)
const contestData = {
  id: 1,
  title: "Mobile App UI Design",
  category: "Design",
  prize: "$2000",
  deadline: "2023-07-15",
  entries: 24,
  description:
    "Create an innovative UI for a new fitness tracking app that motivates users to achieve their health goals. The app should include features for tracking workouts, monitoring nutrition, and setting personalized fitness targets.",
  requirements: [
    "Design a user-friendly and visually appealing interface",
    "Include screens for user onboarding, dashboard, workout tracking, and progress visualization",
    "Ensure the design is responsive and works well on both iOS and Android devices",
    "Use a modern color scheme that promotes energy and motivation",
    "Submit your design in Figma or Sketch format",
  ],
  clientName: "FitTech Solutions",
  submissionFormat: "Figma or Sketch file",
  additionalInfo:
    "The winning design will be implemented in our upcoming fitness app. The designer will be credited in the app and may be considered for future projects.",
}

export default function ContestPage({ }: { params: { id: string } }) {
  // In a real app, you would fetch the contest data based on the ID
  // For this example, we'll use the mock data
  const contest = contestData

  if (!contest) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10">
      <Link href="/contests" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Contests
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{contest.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Category:</p>
              <p>{contest.category}</p>
            </div>
            <div>
              <p className="font-semibold">Prize:</p>
              <p>{contest.prize}</p>
            </div>
            <div>
              <p className="font-semibold">Deadline:</p>
              <p>{contest.deadline}</p>
            </div>
            <div>
              <p className="font-semibold">Current Entries:</p>
              <p>{contest.entries}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p>{contest.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Requirements</h3>
            <ul className="list-disc pl-5">
              {contest.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
            <p>
              <span className="font-semibold">Client:</span> {contest.clientName}
            </p>
            <p>
              <span className="font-semibold">Submission Format:</span> {contest.submissionFormat}
            </p>
            <p>{contest.additionalInfo}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit Entry</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

