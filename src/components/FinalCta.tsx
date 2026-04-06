import { motion } from 'framer-motion'
import { ArrowRightCircle } from 'lucide-react'

function FinalCta() {
  return (
    <section className="section-shell pt-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-2xl border border-cyan-200/25 bg-gradient-to-r from-cyan-500/20 via-slate-900 to-sky-500/20 p-7 shadow-soft sm:p-10"
      >
        <div className="pointer-events-none absolute -right-14 -top-12 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-sky-300/15 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Atención inmediata</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              ¿Listo para que tu equipo funcione como debe?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
              Escríbenos hoy y recibe una guía clara para resolver tu problema técnico o de audio.
            </p>
          </div>

          <a
            href="https://wa.me/50687308869"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-400"
          >
            Escribir por WhatsApp
            <ArrowRightCircle size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default FinalCta
