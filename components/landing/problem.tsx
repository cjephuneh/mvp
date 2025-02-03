import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Great Ideas Deserve to Be Built
            <span className="block text-2xl md:text-3xl mt-2 text-gray-400">
              But Time and Resources Are Limited
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">The Challenge</h3>
                <p className="text-gray-400">
                  Every founder has game-changing ideas, but few have the bandwidth or funding to bring them to life. 
                  Hiring developers is expensive, long-term contracts are risky, and securing technical talent in the 
                  early stages can feel impossible.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Our Solution</h3>
                <p className="text-gray-400">
                  We connect startup founders with skilled developers through competitive virtual hackathons. 
                  In just three days, your idea transforms into a proof-of-concept—ready for investor pitches, 
                  user testing, or early adoption.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">For Everyone</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">For Founders</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Launch without hiring a full-time team
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Validate ideas before major investment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      Access top talent affordably
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">For Developers</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      Get paid for building MVPs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      Expand your portfolio
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      Win rewards and recognition
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}