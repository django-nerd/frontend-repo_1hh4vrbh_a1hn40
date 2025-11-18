import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus("Thanks! We'll be in touch soon.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/40">
      <Navbar />
      <div className="pt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact</h1>
          <p className="mt-3 text-slate-600">Questions, collaborations, or wholesale? Send us a note.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input required className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#03bfa4] focus:ring-[#03bfa4]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#03bfa4] focus:ring-[#03bfa4]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="5" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-[#03bfa4] focus:ring-[#03bfa4]"></textarea>
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-[#03bfa4] px-6 py-3 text-white font-medium shadow-lg shadow-emerald-400/20 hover:shadow-emerald-400/30 transition">Send message</button>
            {status && <p className="text-emerald-700 font-medium">{status}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
