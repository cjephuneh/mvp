"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const contests = [
  { id: 1, title: "Mobile App UI Design", client: "TechCorp", status: "Active", entries: 12, prize: "$1000" },
  { id: 2, title: "Logo Design for Startup", client: "NewVenture", status: "Completed", entries: 45, prize: "$500" },
  { id: 3, title: "E-commerce Website", client: "ShopOnline", status: "Active", entries: 8, prize: "$2000" },
  { id: 4, title: "Marketing Campaign", client: "BrandBoost", status: "Pending", entries: 0, prize: "$1500" },
  { id: 5, title: "Product Packaging Design", client: "EcoGoods", status: "Active", entries: 20, prize: "$800" },
]

export function ContestOversight() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredContests = contests.filter(
    (contest) =>
      contest.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "All" || contest.status === statusFilter),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contest List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <Label htmlFor="search">Search</Label>
            <Input
              id="search"
              placeholder="Search contests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="status-filter">Status</Label>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger id="status-filter">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Statuses</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Entries</TableHead>
              <TableHead>Prize</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContests.map((contest) => (
              <TableRow key={contest.id}>
                <TableCell>{contest.title}</TableCell>
                <TableCell>{contest.client}</TableCell>
                <TableCell>{contest.status}</TableCell>
                <TableCell>{contest.entries}</TableCell>
                <TableCell>{contest.prize}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    View
                  </Button>
                  <Button variant="destructive" size="sm">
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

