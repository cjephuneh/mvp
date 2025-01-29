import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  
  interface ActivityModalProps {
    activity: {
      title: string
      time: string
      details: string
    }
  }
  
  export function ActivityModal({ activity }: ActivityModalProps) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">View</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{activity.title}</DialogTitle>
            <DialogDescription>{activity.time}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p>{activity.details}</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  