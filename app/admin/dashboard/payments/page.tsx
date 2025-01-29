"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const transactions = [
  { id: 1, contestId: "C001", amount: 2500, status: "Pending", date: "2023-06-15" },
  { id: 2, contestId: "C002", amount: 1800, status: "Completed", date: "2023-06-14" },
  { id: 3, contestId: "C003", amount: 3000, status: "Failed", date: "2023-06-13" },
  { id: 4, contestId: "C004", amount: 2200, status: "Pending", date: "2023-06-12" },
  { id: 5, contestId: "C005", amount: 1500, status: "Completed", date: "2023-06-11" },
]

export default function PaymentManagement() {
  return (
    <div className="p-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Payment Management
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Transaction Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <div className="text-center">
                <p className="text-2xl font-bold">
                  ${transactions.reduce((sum, t) => sum + t.amount, 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total Transaction Volume</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{transactions.filter((t) => t.status === "Pending").length}</p>
                <p className="text-sm text-muted-foreground">Pending Transactions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{transactions.filter((t) => t.status === "Failed").length}</p>
                <p className="text-sm text-muted-foreground">Failed Transactions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contest ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.contestId}</TableCell>
                    <TableCell>${transaction.amount}</TableCell>
                    <TableCell>
                      <Badge
                                             >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <Button size="sm">View Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

