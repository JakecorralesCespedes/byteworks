import { motion } from 'framer-motion'
import { MonitorCheck, Network, Star, Volume2 } from 'lucide-react'

const cases = [
  {
    icon: MonitorCheck,
    title: 'PC lenta',
    problem: 'Tardaba 5 min para iniciar.',
    result: 'Ahora inicia en 25 segundos.',
  },
  {
    icon: Network,
    title: 'Red inestable',
    problem: 'Cortes durante cobros y videollamadas.',
    result: 'Cobertura estable y sin caídas.',
  },
  {
    icon: Volume2,
    title: 'Audio con ruido',
    problem: 'Acoples y voz opaca en transmisión.',
    result: 'Audio limpio y claro para sala y streaming.',
  },
]

const testimonials = [
  {
    name: 'Daniel M.',
    role: 'Estudiante',
    initials: 'DM',
    quote:
      'Mi laptop estaba lentísima y en un día quedó lista para clases y diseño. Me explicaron todo sin enredos.',
  },
  {
    name: 'Ministerio Luz Viva',
    role: 'Iglesia',
    initials: 'LV',
    quote:
      'Teníamos problemas de sonido cada Sabado. ByteWorks CR ajustó todo y ahora se escucha claro en vivo y en transmisión.',
  },
  {
    name: 'Comercial Nativa',
    role: 'Negocio pequeño',
    initials: 'CN',
    quote:
      'Nos estabilizaron red y equipos, y desde entonces trabajamos sin interrupciones. Atención rápida y profesional.',
  },
]

function About() {
  return (
    <section id="nosotros" className="section-shell pb-10 pt-8 md:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Sobre nosotros</p>
        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Experiencia real, soluciones claras</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          ByteWorks CR nace de años resolviendo problemas reales: computadoras lentas, redes inestables y audio que no rinde como debería.
          Combinamos soporte de computación y soporte para audio y sonido con un enfoque práctico, cercano y fácil de entender.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-amber-200/20 bg-amber-400/10 px-5 py-4"
      >
        <div className="flex items-center gap-1 text-amber-300">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="text-sm font-semibold text-amber-100">Valoración 5.0 basada en resultados reales y recomendaciones directas.</p>
      </motion.div>

      <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Casos reales</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cases.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="glass-card border-cyan-200/20"
          >
            <item.icon className="h-7 w-7 text-cyan-300" />
            <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">
              <span className="font-semibold text-rose-200">Problema:</span> {item.problem}
            </p>
            <p className="mt-1 text-sm text-slate-200">
              <span className="font-semibold text-emerald-200">Resultado:</span> {item.result}
            </p>
          </motion.article>
        ))}
      </div>

      <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Testimonios</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.role}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            className="rounded-2xl border border-white/10 bg-slate-900/75 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/40 bg-cyan-400/10 text-sm font-bold text-cyan-200">
                {testimonial.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{testimonial.name}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-cyan-300">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-200">“{testimonial.quote}”</p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}

export default About
