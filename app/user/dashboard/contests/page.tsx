import { ContestList } from "@/components/user/contest-list"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContestsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Contests</h2>
      <Card>
        <CardHeader>
          <CardTitle>Contest Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Add filters here</p>
        </CardContent>
      </Card>
      <ContestList />
    </div>
  )
}

