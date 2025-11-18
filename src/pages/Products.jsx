import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ALL_PRODUCTS = [
  { id: 1, name: 'Strawberry Silk', price: 5.5, type: 'Fruit', dairy: 'Dairy', tags: ['Seasonal'], img: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Vanilla Beam', price: 5.0, type: 'Classic', dairy: 'Dairy', tags: ['Classic'], img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Matcha Cloud', price: 6.0, type: 'Tea', dairy: 'Dairy', tags: ['New'], img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Mango Lassi', price: 5.8, type: 'Fruit', dairy: 'Yogurt', tags: ['Tropical'], img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Dark Chocolate', price: 5.2, type: 'Chocolate', dairy: 'Dairy', tags: ['Classic'], img: 'https://images.unsplash.com/photo-1532678465554-94846274c297?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Coconut Snow', price: 5.7, type: 'Tropical', dairy: 'Vegan', tags: ['Vegan'], img: 'https://images.unsplash.com/photo-1511910849309-0dffb4a6d8f0?q=80&w=1200&auto=format&fit=crop' },
  { id: 7, name: 'Pistachio Velvet', price: 6.2, type: 'Nut', dairy: 'Dairy', tags: ['Premium'], img: 'https://images.unsplash.com/photo-1504376379689-9aa6b6a3a259?q=80&w=1200&auto=format&fit=crop' },
  { id: 8, name: 'Salted Caramel', price: 5.6, type: 'Caramel', dairy: 'Dairy', tags: ['Popular'], img: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?q=80&w=1200&auto=format&fit=crop' }
]

const unique = (arr) => [...new Set(arr)]

export default function Products() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')
  const [dairy, setDairy] = useState('All')
  const [price, setPrice] = useState([0, 7])

  const types = useMemo(() => ['All', ...unique(ALL_PRODUCTS.map(p => p.type))], [])
  const dairyOpts = useMemo(() => ['All', ...unique(ALL_PRODUCTS.map(p => p.dairy))], [])

  const filtered = useMemo(() => {
    return ALL_PRODUCTS.filter(p => {
      const matchQuery = p.name.toLowerCase().includes(query.toLowerCase())
      const matchType = type === 'All' || p.type === type
      const matchDairy = dairy === 'All' || p.dairy === dairy
      const matchPrice = p.price >= price[0] && p.price <= price[1]
      return matchQuery && matchType && matchDairy && matchPrice
    })
  }, [query, type, dairy, price])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/40">
      <Navbar />
      <div className="pt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">All flavors</h1>
          <p className="text-slate-600 mt-1">Filter by style, dairy base, and price to find your perfect scoop.</p>
        </div>

        <div className="grid lg:grid-cols-[280px,1fr] gap-8">
          <aside className="h-max sticky top-20 space-y-6 rounded-2xl bg-white/70 backdrop-blur ring-1 ring-slate-200 p-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Search</label>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Try ‘Matcha’"
                className="w-full rounded-lg border-slate-300 focus:border-[#03bfa4] focus:ring-[#03bfa4]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Type</label>
              <select value={type} onChange={e => setType(e.target.value)} className="w-full rounded-lg border-slate-300 focus:border-[#03bfa4] focus:ring-[#03bfa4]">
                {types.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Dairy</label>
              <select value={dairy} onChange={e => setDairy(e.target.value)} className="w-full rounded-lg border-slate-300 focus:border-[#03bfa4] focus:ring-[#03bfa4]">
                {dairyOpts.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Price</label>
              <div className="flex items-center gap-3">
                <input type="range" min="0" max="7" step="0.1" value={price[0]} onChange={e => setPrice([parseFloat(e.target.value), price[1]])} className="w-full accent-[#03bfa4]" />
                <input type="range" min="0" max="7" step="0.1" value={price[1]} onChange={e => setPrice([price[0], parseFloat(e.target.value)])} className="w-full accent-[#03bfa4]" />
              </div>
              <p className="text-sm text-slate-600 mt-1">${price[0].toFixed(1)} — ${price[1].toFixed(1)}</p>
            </div>
          </aside>

          <main className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <div key={p.id} className="group rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                    <span className="text-slate-800 font-medium">${p.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{p.type} • {p.dairy}</p>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-slate-600">No flavors match your filters.</p>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
