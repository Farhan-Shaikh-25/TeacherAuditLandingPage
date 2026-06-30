'use client'
import React, { useState } from 'react'
import FadeIn from '../components/FadeIn'
import PageHeader from '../components/PageHeader'
import InputField from '../components/InputField'
import TextAreaField from '../components/TextAreaField'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', topic: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    console.log(formData)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('success')
      setFormData({ name: '', email: '', topic: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white text-[#1A2522] min-h-screen py-16 px-6 max-w-4xl mx-auto">
      
      <FadeIn>
        <PageHeader 
          badge="Support & Inquiry"
          title="Get In Touch"
          description="Have feature suggestions, structural bug feedback, or deployment installation issues? Submit a message directly below."
        />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-1 space-y-6">
          <FadeIn>
            <div className="border border-slate-100 bg-[#EBEFEF]/40 p-6 rounded-2xl">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Direct Channel</h3>
              <p className="text-sm font-semibold text-[#066851]">farhanshaikh25.fs@gmail.com</p>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-2">
          <FadeIn>
            <form onSubmit={handleSubmit} className="space-y-5 border border-slate-100 p-8 rounded-3xl bg-white shadow-sm">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} required={true} />
                <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required={true} />
              </div>

              <InputField label="Message Focus / Topic" name="topic" value={formData.topic} onChange={handleChange} placeholder="e.g., Windows installation error" />
              
              <TextAreaField label="Detailed Description" name="message" value={formData.message} onChange={handleChange} required={true} />

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full sm:w-auto bg-[#066851] hover:bg-[#005A43] text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all shadow-md disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-[#066851] font-medium">Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-500 font-medium">Something went wrong. Try emailing me directly instead.</p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>

    </div>
  )
}