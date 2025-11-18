export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-slate-900 font-semibold">Scooply</h3>
            <p className="text-slate-600 text-sm mt-1 max-w-md">We craft minimalist ice cream with maximal flavor. Made fresh daily with real ingredients.</p>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Scooply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
