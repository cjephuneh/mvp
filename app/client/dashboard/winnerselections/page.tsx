"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const submissions = [
  {
    id: 1,
    title: "Modern UI Design",
    designer: "Alice Johnson",
    rating: 4.5,
    preview: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Minimalist Dashboard",
    designer: "Bob Smith",
    rating: 4.2,
    preview: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Colorful Mobile App",
    designer: "Charlie Brown",
    rating: 4.8,
    preview: "/placeholder.svg?height=200&width=300",
  },
]

export default function WinnerSelection() {
  const [selectedWinner, setSelectedWinner] = useState<number | null>(null)

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Winner Selection</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {submissions.map((submission) => (
          <Card key={submission.id}>
            <CardHeader>
              <CardTitle>{submission.title}</CardTitle>
              <CardDescription>{submission.designer}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={submission.preview || "/placeholder.svg"}
                alt={submission.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="flex items-center mt-2">
                <Star className="text-yellow-400 mr-1" />
                <span>{submission.rating}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">View Details</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{submission.title}</DialogTitle>
                    <DialogDescription>by {submission.designer}</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <img
                      src={submission.preview || "/placeholder.svg"}
                      alt={submission.title}
                      className="w-full h-60 object-cover rounded-md"
                    />
                    <div className="flex items-center justify-between">
                      <span>Rating: {submission.rating}</span>
                      <div>
                        <Button variant="outline" size="icon" className="mr-2">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Textarea placeholder="Leave a comment..." />
                  </div>
                  <DialogFooter>
                    <Button type="submit">Send Feedback</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button
                variant={selectedWinner === submission.id ? "default" : "secondary"}
                onClick={() => setSelectedWinner(submission.id)}
              >
                {selectedWinner === submission.id ? "Selected" : "Select Winner"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedWinner && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Finalize Winner</h2>
          <Card>
            <CardHeader>
              <CardTitle>Release Funds to Winner</CardTitle>
              <CardDescription>Confirm the winner and release the funds from escrow.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Selected Winner: {submissions.find((s) => s.id === selectedWinner)?.designer}</p>
              <p className="mt-2">Prize Amount: $2000</p>
            </CardContent>
            <CardFooter>
              <Button>Release Funds and Close Contest</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}

