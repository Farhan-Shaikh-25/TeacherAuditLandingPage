import React from 'react'

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-[#EBEFEF] border border-slate-100 rounded-3xl p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-[#A1FCE0] text-[#066851] p-3 rounded-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#1A2522] mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard