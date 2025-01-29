import { Hero } from "@/components/landing/hero"
import { ContestSection } from "@/components/landing/contest-section"
import { Testimonials } from "@/components/landing/testimonials"
import { Footer } from "@/components/landing/footer"
import { Navbar } from "@/components/landing/navbar"
import { Features } from "@/components/landing/features"
import { CallToAction } from "@/components/landing/call-to-action"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ContestSection />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

