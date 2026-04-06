import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#audio', label: 'Audio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="section-shell py-4 md:py-5">
        <div className="flex items-center justify-between gap-4">
          <a href="#inicio" className="inline-flex items-center gap-3" aria-label="Ir al inicio de ByteWorks CR">
            <img
              src="/byteworks-logo.svg"
              alt="Logo de ByteWorks CR"
              className="h-10 w-auto sm:h-11"
            />
          </a>

          <ul className="hidden items-center gap-7 text-sm font-semibold text-slate-200 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a className="relative pb-1 transition-all duration-300 hover:text-cyan-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 text-white transition-all duration-300 hover:bg-white/10 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.ul
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="mt-4 grid gap-2 rounded-2xl border border-white/10 bg-slate-900/95 p-3 md:hidden"
            >
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
