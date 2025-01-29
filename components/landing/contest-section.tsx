import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredContests = [
  {
    title: "Mobile App UI Design",
    description: "Create an innovative UI for a new fitness tracking app.",
    prize: "$2000",
    deadline: "2023-07-15",
  },
  {
    title: "Logo Design Challenge",
    description: "Design a modern logo for an eco-friendly tech startup.",
    prize: "$1000",
    deadline: "2023-07-10",
  },
  {
    title: "Web Development Contest",
    description: "Build a responsive website for a local non-profit organization.",
    prize: "$3000",
    deadline: "2023-07-20",
  },
]

export function ContestSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contests</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Contests
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Check out our latest contests and start competing today!
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredContests.map((contest, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{contest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{contest.description}</p>
                  <p className="mt-2 font-semibold">Prize: {contest.prize}</p>
                  <p className="text-sm text-gray-500">Deadline: {contest.deadline}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/auth/register">Enter Contest</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link href="/contests">View All Contests</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

