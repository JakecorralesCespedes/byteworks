import { motion } from 'framer-motion'

const stats = [
  { value: '+50', label: 'equipos optimizados' },
  { value: '+20', label: 'clientes satisfechos' },
]

function Hero() {
  return (
    <section id="inicio" className="section-shell pb-12 pt-10 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-sky-500/15 p-7 shadow-soft sm:p-10 md:p-12"
      >
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-white/10 bg-cyan-200/10 blur-2xl" />
        <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full border border-white/10 bg-sky-300/10 blur-2xl" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-10">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
              Soporte Técnico + Audio Profesional
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              ¿Tu computadora o sonido está fallando?
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
              Optimizamos tu equipo, redes y sistemas de audio para que todo funcione sin estrés.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/50687308869"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-400"
              >
                Escríbenos por WhatsApp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-slate-100 transition-all duration-300 hover:bg-white/15"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-8 grid max-w-md grid-cols-2 gap-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-cyan-200/20 bg-slate-950/60 p-4">
                  <p className="text-2xl font-extrabold text-cyan-200">{item.value}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto w-full max-w-md"
          >
            <img
              src="/tech-audio-illustration.svg"
              alt="Ilustracion de tecnologia y audio para ByteWorks CR"
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-2xl border border-cyan-200/20 bg-slate-950/60 p-2 shadow-2xl shadow-cyan-950/40"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
