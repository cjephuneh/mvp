import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Contest Platform</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/contests"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contests
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              How It Works
            </Link>
            <Button asChild variant="ghost" className="ml-4">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild className="ml-4">
              <Link href="/auth/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

