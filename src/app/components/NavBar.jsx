'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='relative mx-2 md:mx-10 mt-4 z-50'>

      <div className='flex justify-between items-center rounded-3xl shadow-md shadow-slate-100/80 border border-slate-100 py-3 px-6 bg-white'>
          
          <div className='font-black text-[#1A2522] tracking-tight text-lg flex flex-1'>
              <Link href="/">Teacher Audit</Link>
          </div>
          
          <div className='hidden md:flex md:gap-6 md:font-medium md:text-slate-500 md:text-sm'>
              <Link href="/about" className="hover:text-[#066851] transition-colors">About App</Link>
              <Link href="/features" className="hover:text-[#066851] transition-colors">Features</Link>
              <Link href="/contact" className="hover:text-[#066851] transition-colors">Contact</Link>
          </div>
          
          <div className='flex flex-1 justify-end items-center gap-4'>
              <Link href="mailto:farhanshaikh25.fs@gmail.com" className='hidden sm:block text-xs font-semibold bg-[#EBEFEF] text-[#1A2522] px-3 py-1.5 rounded-full cursor-pointer hover:bg-slate-200 transition-all'>
                  Help?
              </Link>

              <button 
                onClick={() => setIsOpen(!isOpen)}
                className='md:hidden p-2 text-slate-600 hover:text-[#066851] focus:outline-none'
                aria-label="Toggle Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
          </div>
      </div>

      {isOpen && (
        <div className='absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-slate-100 rounded-2xl shadow-xl md:hidden flex flex-col gap-4 text-center font-medium text-slate-600 animate-in fade-in slide-in-from-top-2 duration-200'>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#066851] py-2 border-b border-slate-50">About App</Link>
            <Link href="/features" onClick={() => setIsOpen(false)} className="hover:text-[#066851] py-2 border-b border-slate-50">Features</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#066851] py-2">Contact</Link>
            <Link href="mailto:farhanshaikh25.fs@gmail.com" className='sm:hidden text-xs font-semibold bg-[#EBEFEF] text-[#1A2522] py-2.5 rounded-xl cursor-pointer'>
                Help?
            </Link>
        </div>
      )}
    </nav>
  )
}

export default NavBar