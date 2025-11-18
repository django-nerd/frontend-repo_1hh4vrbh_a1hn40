import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-pink-600' : 'text-slate-700 hover:text-pink-600'
    }`

  return (
    <header className="w-full fixed top-0 left-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 shadow-md" />
            <span className="font-semibold tracking-tight text-slate-800">Scooply</span>
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/products" className={linkClasses}>Flavors</NavLink>
            <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-pink-600">About</a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-white/60"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur supports-backdrop-blur:backdrop-blur-md border-t border-slate-200">
          <div className="px-4 py-3 space-y-2">
            <NavLink to="/" className={linkClasses} onClick={() => setOpen(false)}>Home</NavLink>
            <div />
            <NavLink to="/products" className={linkClasses} onClick={() => setOpen(false)}>Flavors</NavLink>
            <a href="#about" className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-pink-600" onClick={() => setOpen(false)}>About</a>
          </div>
        </div>
      )}
    </header>
  )
}
