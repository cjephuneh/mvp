import React from 'react';
import { Rocket, Timer, Trophy,  Sparkles, Zap, Brain } from 'lucide-react';
import Navbar from '@/components/landing/navbar';
import HowItWorks from '@/components/landing/howitworks';
import ProblemSection from '@/components/landing/problem';
import Testimonials from '@/components/landing/testimonials';
import Benefits from '@/components/landing/Benefits';
import FinalCTA from '@/components/landing/call-to-action';
import Footer from '@/components/landing/footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Animated background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1a1a1a_0%,_#000_100%)] opacity-70" />
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative">
        <Navbar />
        
        {/* Hero Section */}
        <div className="relative min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center relative">
              {/* Floating elements */}
              <div className="absolute -left-4 top-0 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -right-4 bottom-0 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700" />
              
              <div className="inline-block">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow absolute -top-8 -left-8" />
                <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 leading-tight tracking-tight mt-10">
                  Turn Your Startup Idea
                  <br />
                  Into Reality
                  <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                    In Just 72 Hours
                  </span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Where visionary founders meet exceptional developers.
                <span className="block mt-2 text-gray-500">No contracts. No delays. Pure innovation.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(88,80,236,0.3)] flex items-center gap-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2">
                    Launch Your Vision
                    <Zap className="w-5 h-5 animate-pulse" />
                  </span>
                </button>
                
                <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-gray-800 text-white rounded-2xl font-semibold text-lg transition-all hover:bg-white/10 hover:border-gray-700 flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Build Something Amazing
                </button>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="mt-32 grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Timer,
                  title: "72-Hour Sprint",
                  description: "Transform ideas into working prototypes at lightning speed",
                  gradient: "from-cyan-500 to-blue-500"
                },
                {
                  icon: Trophy,
                  title: "Compete & Create",
                  description: "Join elite developers in building the next big thing",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: Rocket,
                  title: "Launch Fast",
                  description: "Skip the bureaucracy, start building immediately",
                  gradient: "from-orange-500 to-yellow-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all">
                    <div className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 flex items-center justify-center`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <ProblemSection />
        <HowItWorks />
        <Testimonials />
        <Benefits />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;