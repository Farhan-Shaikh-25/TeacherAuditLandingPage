import React from 'react'

export default function PageHeader({ badge, title, description }) {
  return (
    <div className="text-center mb-12">
      {badge && (
        <span className="bg-[#EBEFEF] text-[#066851] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}