import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 flex items-center min-h-[86vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200 backdrop-blur"
            >
              Small-batch • Real fruit • Ultra creamy
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Summer scoops, made elegant
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-4 text-lg sm:text-xl text-slate-600"
            >
              A minimalist ice cream shop where flavor meets design. Explore seasonal picks and classics—all crafted to delight.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#featured" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 text-white font-medium shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 transition">Shop featured</a>
              <a href="/products" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-slate-700 hover:bg-white/70 transition">Browse all flavors</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
