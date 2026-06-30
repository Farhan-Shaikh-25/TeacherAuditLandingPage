import React from 'react'

export default function HeroSection() {
  return (
    <section className="bg-white text-[#1A2522] min-h-[80vh] flex flex-col justify-center items-center px-6 py-16 text-center">
      <span className="bg-[#EBEFEF] text-[#066851] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
        Available for Android & Windows
      </span>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight mb-6">
        Track your academic and personal hours with <span className="underline decoration-[#A1FCE0] decoration-8 underline-offset-4">Teacher Audit</span>
      </h1>

      <p className="text-slate-500 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        Log teaching hours, monitor deficits, manage allocations, and back up your data to the cloud all in one place built for educators.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
        
        <a href='/api/download/android' className="bg-[#066851] hover:bg-[#005A43] text-white font-medium px-8 py-3.5 rounded-xl transition-all shadow-md shadow-[#066851]/10 w-full sm:w-auto">
          Download For Android
        </a>

        <a href='/api/download/windows' className="bg-[#066851] hover:bg-[#005A43] text-white font-medium px-8 py-3.5 rounded-xl transition-all shadow-md shadow-[#066851]/10 w-full sm:w-auto">
          Download For Windows
        </a>
        
        <a href='https://github.com/Farhan-Shaikh-25/TeacherAudit' target='_blank' className="bg-[#EBEFEF] hover:bg-slate-200 text-[#1A2522] font-medium px-8 py-3.5 rounded-xl transition-all w-full sm:w-auto">
          View Github Repo
        </a>
      </div>

      <div className="mt-16 w-full max-w-md bg-[#A1FCE0] p-6 rounded-3xl text-left shadow-xl shadow-teal-100/50">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold opacity-80 uppercase tracking-wider">Academic Hours Today</p>
          <span className="bg-[#FFC58D] text-xs font-bold px-2 py-0.5 rounded-md text-amber-900">-6.7h Deficit</span>
        </div>
        <p className="text-5xl font-black mb-1">0.0h</p>
        <p className="text-xs opacity-60">Target remaining: 6.67 hrs</p>
      </div>
    </section>
  )
}