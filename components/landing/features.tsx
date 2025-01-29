import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, DollarSign, Zap } from "lucide-react"

const features = [
  {
    title: "Diverse Contests",
    description: "Participate in a wide range of contests across various creative fields.",
    icon: Trophy,
  },
  {
    title: "Global Community",
    description: "Connect with talented individuals from around the world.",
    icon: Users,
  },
  {
    title: "Exciting Prizes",
    description: "Win cash prizes and gain recognition for your outstanding work.",
    icon: DollarSign,
  },
  {
    title: "Boost Your Skills",
    description: "Challenge yourself and improve your skills with each contest.",
    icon: Zap,
  },
]

export function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Platform
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover the benefits of participating in our contests and joining our creative community.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-indigo-600" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

