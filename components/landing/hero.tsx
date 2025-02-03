import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-none shadow-xl">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
                  Turn Your Startup Idea Into Reality—In Just 72 Hours
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Founders list projects. Developers build them. No long-term contracts, no high costs—just real
                  proof-of-concept results, fast.
                </p>
                <div className="space-x-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/launch-hackathon">Launch Your Hackathon</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/find-project">Find a Project to Build</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/Designer.jpeg?height=400&width=600"
                  alt="Startup Illustration"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-2xl font-bold text-blue-600">72 Hours</p>
                  <p className="text-gray-600">From Idea to MVP</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

