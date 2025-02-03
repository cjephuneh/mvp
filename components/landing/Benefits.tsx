import React from 'react';
import { CheckCircle, Zap, Globe, DollarSign } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Get a working proof-of-concept in just 72 hours"
    },
    {
      icon: CheckCircle,
      title: "No Long-Term Contracts",
      description: "Work with developers only when needed"
    },
    {
      icon: DollarSign,
      title: "Fair, Transparent Pricing",
      description: "You control the prize, developers compete for the best solution"
    },
    {
      icon: Globe,
      title: "Global Talent Pool",
      description: "Work with developers passionate about building real-world solutions"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Why Choose Us?
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          A Smarter, Faster Path to MVP Development
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}