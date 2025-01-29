import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import { Badge } from "@/components/ui/badge"
  import { Star } from "lucide-react"
  
  interface PastContestModalProps {
    contest: {
      id: number
      title: string
      winner: string
      rating: number
      budget: string
      date: string
      description: string
      totalSubmissions: number
      duration: string
    }
  }
  
  export function PastContestModal({ contest }: PastContestModalProps) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">View Details</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{contest.title}</DialogTitle>
            <DialogDescription>Contest ID: {contest.id}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <p>{contest.description}</p>
            <div className="flex justify-between items-center">
              <Badge variant="secondary">Winner: {contest.winner}</Badge>
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1" />
                <span>{contest.rating}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Budget</p>
                <p className="font-semibold">{contest.budget}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completion Date</p>
                <p className="font-semibold">{contest.date}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Submissions</p>
                <p className="font-semibold">{contest.totalSubmissions}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-semibold">{contest.duration}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  