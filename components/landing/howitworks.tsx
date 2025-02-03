import React from 'react';
import { FileCode, Rocket, Trophy } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileCode,
      title: "1. Founders List a Project",
      description: "Submit your startup idea with key requirements and prize amount",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "2. Developers Compete to Build",
      description: "Talented developers have 72 hours to create a working proof-of-concept",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Trophy,
      title: "3. Best MVP Wins",
      description: "The top project is selected, and the winning developer gets paid",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          How It Works
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          Simple, Fast, and Built for Innovation
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full bg-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all">
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${step.gradient} p-4 flex items-center justify-center`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}