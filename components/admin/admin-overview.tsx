import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy, AlertTriangle, DollarSign } from "lucide-react"

const overviewItems = [
  { title: "Total Users", value: "1,234", change: "+21 this week", icon: Users },
  { title: "Active Contests", value: "56", change: "+3 from yesterday", icon: Trophy },
  { title: "Pending Disputes", value: "5", change: "-2 from last week", icon: AlertTriangle },
  { title: "Total Platform Revenue", value: "$45,231", change: "+12.5% this month", icon: DollarSign },
]

export function AdminOverview() {
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

