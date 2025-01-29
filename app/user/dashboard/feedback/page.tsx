import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const feedbackItems = [
  {
    id: 1,
    contest: "Mobile App UI Design",
    feedback: "Great design, but needs more contrast",
    receivedOn: "2023-11-16",
  },
  {
    id: 2,
    contest: "E-commerce Website",
    feedback: "Excellent work! Minor tweaks needed in checkout flow",
    receivedOn: "2023-11-12",
  },
  {
    id: 3,
    contest: "Logo Design",
    feedback: "The concept is good, but try a different color scheme",
    receivedOn: "2023-11-07",
  },
]

export default function FeedbackPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Feedback</h2>
      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contest</TableHead>
                <TableHead>Feedback</TableHead>
                <TableHead>Received On</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feedbackItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.contest}</TableCell>
                  <TableCell>{item.feedback}</TableCell>
                  <TableCell>{item.receivedOn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

