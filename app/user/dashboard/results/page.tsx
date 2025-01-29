import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const results = [
  { id: 1, contest: "Mobile App UI Design", result: "Winner", prize: "$1000", awardedOn: "2023-11-20" },
  { id: 2, contest: "E-commerce Website", result: "Runner-up", prize: "$500", awardedOn: "2023-11-18" },
  { id: 3, contest: "Logo Design", result: "Participant", prize: "-", awardedOn: "-" },
]

export default function ResultsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Results</h2>
      <Card>
        <CardHeader>
          <CardTitle>Contest Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contest</TableHead>
                <TableHead>Result</TableHead>
                <TableHead>Prize</TableHead>
                <TableHead>Awarded On</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell className="font-medium">{result.contest}</TableCell>
                  <TableCell>{result.result}</TableCell>
                  <TableCell>{result.prize}</TableCell>
                  <TableCell>{result.awardedOn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

