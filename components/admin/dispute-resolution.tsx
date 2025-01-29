"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const disputes = [
  {
    id: 1,
    contest: "Mobile App UI Design",
    client: "TechCorp",
    developer: "John Doe",
    status: "Open",
    date: "2023-06-15",
  },
  {
    id: 2,
    contest: "Logo Design",
    client: "NewVenture",
    developer: "Jane Smith",
    status: "Resolved",
    date: "2023-06-10",
  },
  {
    id: 3,
    contest: "E-commerce Website",
    client: "ShopOnline",
    developer: "Bob Johnson",
    status: "Under Review",
    date: "2023-06-14",
  },
  {
    id: 4,
    contest: "Marketing Campaign",
    client: "BrandBoost",
    developer: "Alice Brown",
    status: "Open",
    date: "2023-06-13",
  },
  {
    id: 5,
    contest: "Product Packaging",
    client: "EcoGoods",
    developer: "Charlie Davis",
    status: "Resolved",
    date: "2023-06-11",
  },
]

export function DisputeResolution() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredDisputes = disputes.filter(
    (dispute) =>
      (dispute.contest.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dispute.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dispute.developer.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "All" || dispute.status === statusFilter),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dispute List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <Label htmlFor="search">Search</Label>
            <Input
              id="search"
              placeholder="Search disputes..."
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
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="Under Review">Under Review</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Contest</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Developer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell>{dispute.contest}</TableCell>
                <TableCell>{dispute.client}</TableCell>
                <TableCell>{dispute.developer}</TableCell>
                <TableCell>{dispute.status}</TableCell>
                <TableCell>{dispute.date}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    Review
                  </Button>
                  <Button variant="secondary" size="sm">
                    Resolve
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

