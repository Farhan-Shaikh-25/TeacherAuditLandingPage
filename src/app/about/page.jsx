import React from 'react'
import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'
import MetricCard from '../components/MetricCard'

export default function AboutPage() {
  return (
    <div className="bg-white text-[#1A2522] min-h-screen py-16 px-6 max-w-4xl mx-auto">
      
      <FadeIn>
        <PageHeader 
          badge="The Backstory"
          title="Why I Built Teacher Audit"
          description="A teacher I know asked me to help solve a problem they were dealing with every week"
        />
      </FadeIn>

      <div className="space-y-16">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-extrabold mb-4 tracking-tight">The Problem</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                A teacher I know told me they were struggling to keep track of their academic workload — lectures, extra classes, admin work — all spread across notebooks and random spreadsheets. There was no easy way to see if they were actually meeting their required hours or falling behind.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                So I built Teacher Audit to fix exactly that. A simple way to log hours, see where you stand against your targets, and stop guessing.
              </p>
            </div>
            
            <MetricCard 
              variant="gray"
              title="Built to Run Fully Offline"
              description="Teacher Audit stores everything locally using SQLite. There's no server sitting in between — your data stays on your device unless you choose to back it up to your own Google Drive."
            />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-[#A1FCE0] p-8 rounded-3xl shadow-xl shadow-teal-100/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="max-w-xl">
              <h3 className="text-xl font-bold mb-2">Open Source — Come Build With Me</h3>
              <p className="text-slate-800 text-sm leading-relaxed">
                The full code is up on GitHub. If you're a teacher with a feature idea, or a developer who wants to contribute, fix a bug, or just see how it's built — you're welcome to dive in. I'd genuinely love the help.
              </p>
            </div>
            <a 
              href="https://github.com/Farhan-Shaikh-25/TeacherAudit" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block bg-[#1A2522] hover:bg-black text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all whitespace-nowrap shrink-0"
            >
              Contribute on GitHub
            </a>
          </div>
        </FadeIn>
      </div>

    </div>
  )
}