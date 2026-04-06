import { motion } from 'framer-motion'
import { MessageCircleHeart } from 'lucide-react'

function Contact() {
  return (
    <section id="contacto" className="section-shell pt-6 md:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-soft md:grid-cols-2 md:p-8"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Contacto</p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Respuesta rápida y sin rodeos</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            Cuéntanos tu caso y te orientamos. En ByteWorks CR buscamos solución rápida para tecnología y audio.
          </p>

          <a
            href="https://wa.me/50687308869"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02] hover:bg-emerald-400"
          >
            <MessageCircleHeart size={18} />
            Escribir por WhatsApp
          </a>
        </div>

        <form className="grid gap-3" onSubmit={(event) => event.preventDefault()}>
          <label className="text-sm font-semibold text-slate-200" htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu nombre"
            className="rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
          />

          <label className="text-sm font-semibold text-slate-200" htmlFor="email">
            Correo o WhatsApp
          </label>
          <input
            id="email"
            type="text"
            placeholder="tu@email.com / +506..."
            className="rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
          />

          <label className="text-sm font-semibold text-slate-200" htmlFor="message">
            ¿Qué necesitas?
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Ejemplo: mi audio se distorsiona en transmisión"
            className="rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
          />

          <button
            type="submit"
            className="mt-2 rounded-2xl border border-cyan-300/35 bg-cyan-400/15 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-400/25"
          >
            Enviar consulta
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default Contact
