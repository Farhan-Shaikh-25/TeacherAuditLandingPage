import React from 'react'

export default function InputField({ label, name, type = 'text', required = false, placeholder = '', value, onChange }) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-xs font-bold text-slate-500 mb-2">{label}</label>
      <input 
        type={type} 
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-[#EBEFEF] border-none rounded-xl p-3 text-sm text-[#1A2522] focus:outline-none focus:ring-2 focus:ring-[#066851]/30 transition-all"
      />
    </div>
  )
}