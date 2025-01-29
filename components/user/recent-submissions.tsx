import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentSubmissions = [
  { id: 1, contest: "Mobile App UI Design", date: "2023-11-15", status: "Under Review" },
  { id: 2, contest: "E-commerce Website", date: "2023-11-10", status: "Accepted" },
  { id: 3, contest: "Logo Design", date: "2023-11-05", status: "Rejected" },
]

export function RecentSubmissions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Submissions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Contest</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentSubmissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell className="font-medium">{submission.contest}</TableCell>
                <TableCell>{submission.date}</TableCell>
                <TableCell>{submission.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

