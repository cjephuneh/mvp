"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

const contests = [
  {
    id: 1,
    title: "Modern E-commerce Website Design",
    description: "Design a sleek and user-friendly e-commerce website for a fashion brand.",
    prize: 2000,
    deadline: "2023-07-15",
    category: "Web Design",
  },
  {
    id: 2,
    title: "Mobile App UI for Fitness Tracking",
    description: "Create an intuitive and engaging UI for a new fitness tracking mobile app.",
    prize: 1500,
    deadline: "2023-07-20",
    category: "Mobile Design",
  },
  {
    id: 3,
    title: "Logo Design for Tech Startup",
    description: "Design a modern and memorable logo for an AI-focused tech startup.",
    prize: 1000,
    deadline: "2023-07-10",
    category: "Logo Design",
  },
  {
    id: 4,
    title: "Dashboard UI for Data Analytics Platform",
    description: "Design a comprehensive dashboard UI for a data analytics SaaS platform.",
    prize: 2500,
    deadline: "2023-07-25",
    category: "Web Design",
  },
  {
    id: 5,
    title: "Illustration Set for Children's Book",
    description: "Create a set of whimsical illustrations for a new children's book about space exploration.",
    prize: 1800,
    deadline: "2023-07-30",
    category: "Illustration",
  },
]

export default function ContestsPage() {
  const [prizeRange, setPrizeRange] = useState([0, 3000])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredContests = contests.filter(
    (contest) =>
      contest.prize >= prizeRange[0] &&
      contest.prize <= prizeRange[1] &&
      (selectedCategory ? contest.category === selectedCategory : true),
  )

  return (
    <div>
        <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Find Contests</h1>

        <Card>
          <CardHeader>
            <CardTitle>Filter Contests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Prize Range</Label>
              <Slider min={0} max={3000} step={100} value={prizeRange} onValueChange={setPrizeRange} />
              <div className="flex justify-between text-sm text-gray-500">
                <span>${prizeRange[0]}</span>
                <span>${prizeRange[1]}</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <div className="flex flex-wrap gap-2">
                {["Web Design", "Mobile Design", "Logo Design", "Illustration"].map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredContests.map((contest) => (
            <motion.div
              key={contest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{contest.title}</CardTitle>
                  <CardDescription>{contest.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{contest.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <Badge variant="secondary">${contest.prize}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      {contest.deadline}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
        <Footer />
    </div>
  )
}

