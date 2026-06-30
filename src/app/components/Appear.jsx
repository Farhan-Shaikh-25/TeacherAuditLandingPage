'use client'
import React, { useEffect, useRef, useState } from 'react'

function Appear({children}) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect( () => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          setActive(true)
          intersectionObserver.unobserve(entry.target)
        }
      })
    },{ 
        root: null,
        rootMargin: '0px 0px -30% 0px',
        threshold: 0
    })

    if(ref.current)
      intersectionObserver.observe(ref.current)
    
    return () => intersectionObserver.disconnect()
  },[])


  return (
    <div className={`transition-all duration-1000 ease-in-out ${
        active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
          ref={ref}>
    {children}
    </div>
  )
}

export default Appear