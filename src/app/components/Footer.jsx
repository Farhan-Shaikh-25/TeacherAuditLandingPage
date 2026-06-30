import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center m-10 pt-6 border-t border-slate-100 gap-4'>
        <p className='text-sm font-bold text-[#1A2522]'>
          Mohammed Farhan Shaikh
        </p>
        
        <div className='flex flex-wrap gap-x-6 gap-y-2 justify-center text-xs font-semibold text-slate-400'>
            <a href="https://linkedin.com/in/mohammed-farhan-shaikh25" target="_blank" rel="noreferrer" className="hover:text-[#066851] transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/Farhan-Shaikh-25" target="_blank" rel="noreferrer" className="hover:text-[#066851] transition-colors">
              GitHub
            </a>
            <a href="https://portfolio-farhan-25.vercel.app" className="hover:text-[#066851] transition-colors"
            target='_blank'>
              Portfolio
            </a>
            <a href="mailto:farhanshaikh25.fs@gmail.com" className="hover:text-[#066851] transition-colors">
              Mail
            </a>
        </div>
    </div>
  )
}

export default Footer