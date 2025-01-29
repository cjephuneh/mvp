import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, FileCheck, DollarSign } from "lucide-react"

const overviewItems = [
  { title: "Active Contests", value: "5", change: "+2 from last week", icon: Trophy },
  { title: "Pending Feedback", value: "3", change: "-1 from yesterday", icon: Users },
  { title: "Won Contests", value: "12", change: "+3 from last month", icon: FileCheck },
  { title: "Total Earnings", value: "$4,231.89", change: "+20.1% from last month", icon: DollarSign },
]

export function Overview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {overviewItems.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

