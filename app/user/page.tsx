import { Overview } from "@/components/user/overview"
import { RecentSubmissions } from "@/components/user/recent-submissions"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <Overview />
      <RecentSubmissions />
    </div>
  )
}
