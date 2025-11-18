import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/40">
      <Navbar />
      <div className="pt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">About us</h1>
          <p className="mt-4 text-slate-600 text-lg">Scooply is a minimalist ice cream studio crafting small-batch flavors with real fruit, fair-trade cocoa, and creative pairings. We believe design and taste can be one experience.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/70 ring-1 ring-slate-200 p-5">
              <h3 className="font-semibold text-slate-900">Our sourcing</h3>
              <p className="text-slate-600 mt-2 text-sm">We partner with local farms and trusted growers. Seasonal menus keep things fresh and sustainable.</p>
            </div>
            <div className="rounded-2xl bg-white/70 ring-1 ring-slate-200 p-5">
              <h3 className="font-semibold text-slate-900">Our craft</h3>
              <p className="text-slate-600 mt-2 text-sm">Slow-churned, ultra-creamy textures with modern techniques. Expect classics and playful limited drops.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
