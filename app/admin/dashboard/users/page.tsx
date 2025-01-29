import { UserManagement } from "@/components/admin/user-management"

export default function UserManagementPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
      <UserManagement />
    </div>
  )
}

