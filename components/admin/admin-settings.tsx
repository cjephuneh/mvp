/* eslint-disable-next-line react/no-unescaped-entities */



"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
// import { toast } from "@/components/ui/use-toast"

export function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: "Contest Platform",
    adminEmail: "admin@contestplatform.com",
    allowNewRegistrations: true,
    requireEmailVerification: true,
    contestApprovalRequired: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string) => {
    setSettings((prev) => ({ ...prev, [name]: !prev[name as keyof typeof settings] }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the settings to your backend
    console.log("Settings saved:", settings)
    // toast({
    //   title: "Settings Updated",
    //   description: "Your admin settings have been successfully updated.",
    // })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Platform Settings</CardTitle>
          <CardDescription>Manage your platform's global settings here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input id="siteName" name="siteName" value={settings.siteName} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="adminEmail">Admin Email</Label>
            <Input
              id="adminEmail"
              name="adminEmail"
              type="email"
              value={settings.adminEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="allowNewRegistrations"
              checked={settings.allowNewRegistrations}
              onCheckedChange={() => handleCheckboxChange("allowNewRegistrations")}
            />
            <Label htmlFor="allowNewRegistrations">Allow New Registrations</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="requireEmailVerification"
              checked={settings.requireEmailVerification}
              onCheckedChange={() => handleCheckboxChange("requireEmailVerification")}
            />
            <Label htmlFor="requireEmailVerification">Require Email Verification</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="contestApprovalRequired"
              checked={settings.contestApprovalRequired}
              onCheckedChange={() => handleCheckboxChange("contestApprovalRequired")}
            />
            <Label htmlFor="contestApprovalRequired">Contest Approval Required</Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Save Settings</Button>
        </CardFooter>
      </Card>
    </form>
  )
}

