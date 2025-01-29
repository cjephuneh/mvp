/* eslint-disable react/no-unescaped-entities */


import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Unleash Your Creativity</span>
            <span className="block text-indigo-600">Win Amazing Contests</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Join our platform to showcase your skills, compete in exciting contests, and win great prizes. Whether
            you're a designer, developer, or creative professional, there's a contest for you!
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Button asChild size="lg">
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button asChild variant="outline" size="lg">
                <Link href="/contests">View Contests</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            className="w-full object-cover rounded-lg shadow-lg"
            src="/Designer.jpeg?height=400&width=600"
            alt="Contest illustration"
          />
        </div>
      </div>
    </div>
  )
}

