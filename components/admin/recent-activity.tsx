import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentActivities = [
  { id: 1, action: "New User Registration", details: "John Doe (Designer)", timestamp: "2023-06-15 14:30" },
  { id: 2, action: "Contest Created", details: "Mobile App UI Design", timestamp: "2023-06-15 13:45" },
  { id: 3, action: "Dispute Resolved", details: "Logo Design Contest #1234", timestamp: "2023-06-15 11:20" },
  { id: 4, action: "Payment Released", details: "Website Redesign Contest #5678", timestamp: "2023-06-15 10:15" },
]



export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Action</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentActivities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{activity.action}</TableCell>
                <TableCell>{activity.details}</TableCell>
                <TableCell>{activity.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

