import React from 'react'

export default function MetricCard({ title, description, variant = 'gray' }) {
  const styles = {
    gray: 'bg-[#EBEFEF] border border-slate-100 p-8 rounded-3xl flex flex-col justify-center min-h-[200px]',
    teal: 'bg-[#A1FCE0] p-8 rounded-3xl shadow-xl shadow-teal-100/30'
  }

  return (
    <div className={styles[variant]}>
      <h3 className={`text-2xl font-black mb-2 ${variant === 'teal' ? 'text-[#1A2522]' : 'text-[#066851]'}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${variant === 'teal' ? 'text-slate-800' : 'text-slate-600'}`}>
        {description}
      </p>
    </div>
  )
}