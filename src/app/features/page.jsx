import React from 'react'
import FeatureCard from '../components/FeatureCard'
import FadeIn from '../components/FadeIn'
import Appear from '../components/Appear'

function Features() {
  const FEATURES = [
    {
      title: "Smart Teaching Allocations",
      description: "Set up your programme, class, division and subject once. Every time you log a lecture, the room number fills itself in.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "See Your Deficit, Instantly",
      description: "A clear progress ring shows exactly how many hours you're short of your daily academic and personal targets — no manual math.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Backup to Your Own Drive",
      description: "One tap connects your Google account so your data syncs and stays safe across every device you use.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5 5 0 00-4.591-2.728A3.988 3.988 0 003 15z" />
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="bg-white py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-[#1A2522] tracking-tight mb-4">
          Built So You Don't Have to Think About It
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
          No spreadsheets, no manual tallying — just log your hours and let Teacher Audit do the rest.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <Appear key={index}>
            <FeatureCard 
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon}
            />
          </Appear>
        ))}
      </div>
    </section>
  )
}

export default Features