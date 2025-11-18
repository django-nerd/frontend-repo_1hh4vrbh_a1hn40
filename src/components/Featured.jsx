import { motion } from 'framer-motion'

const featured = [
  { id: 1, name: 'Strawberry Silk', price: 5.5, tag: 'Seasonal', img: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Vanilla Beam', price: 5.0, tag: 'Classic', img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Matcha Cloud', price: 6.0, tag: 'New', img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop' },
]

export default function Featured() {
  return (
    <section id="featured" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Featured flavors</h2>
            <p className="mt-2 text-slate-600">Hand-picked this week by our scoop artists.</p>
          </div>
          <a href="/products" className="hidden sm:inline-flex rounded-full border border-slate-300 px-5 py-2 text-slate-700 hover:bg-white">See all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 hover:shadow-xl"
            }
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#03bfa4] font-medium">{item.tag}</p>
                  <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                </div>
                <span className="text-slate-800 font-medium">${item.price.toFixed(2)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
