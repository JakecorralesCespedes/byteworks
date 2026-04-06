import { Instagram, Linkedin, Youtube } from 'lucide-react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950/95">
      <div className="section-shell flex flex-col items-start justify-between gap-4 py-8 text-sm text-slate-300 md:flex-row md:items-center">
        <div>
          <p className="text-base font-bold text-white">ByteWorks CR</p>
          <p className="mt-1">© {year} ByteWorks CR. Tecnología y audio con resultados.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 p-2 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-300"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 p-2 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 p-2 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-300"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
