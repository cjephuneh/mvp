import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import { Eye } from "lucide-react"
  
  interface SubmissionModalProps {
    submission: {
      title: string
      designer: string
      time: string
      preview: string
      description: string
    }
  }
  
  export function SubmissionModal({ submission }: SubmissionModalProps) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" /> View
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{submission.title}</DialogTitle>
            <DialogDescription>
              by {submission.designer} • {submission.time}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <img
              src={submission.preview || "/placeholder.svg"}
              alt={submission.title}
              className="w-full h-64 object-cover rounded-md"
            />
            <p>{submission.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  