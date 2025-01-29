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
  
  interface ContestDetailsModalProps {
    contest: {
      id: number
      title: string
      description: string
      submissions: number
      daysLeft: number
      budget: string
    }
  }
  
  export function ContestDetailsModal({ contest }: ContestDetailsModalProps) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">View Details</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{contest.title}</DialogTitle>
            <DialogDescription>Contest ID: {contest.id}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>{contest.description}</p>
            <div className="flex justify-between items-center">
              <Badge variant="secondary">{contest.submissions} Submissions</Badge>
              <span className="text-sm text-muted-foreground">{contest.daysLeft} days left</span>
            </div>
            <p className="font-semibold">Budget: {contest.budget}</p>
          </div>
          <div className="flex justify-end">
            <Button>Manage Submissions</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  