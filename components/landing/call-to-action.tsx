/* eslint-disable react/no-unescaped-entities */


import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Turn Your Idea Into Reality—Start Today
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Your startup's first version is just 72 hours away. Join a community of founders and developers building the future, one MVP at a time.
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(88,80,236,0.3)] flex items-center gap-2 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Launch Your Hackathon
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}