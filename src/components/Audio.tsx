import { motion } from 'framer-motion'
import {
  AudioLines,
  Church,
  Gauge,
  Mic,
  Radio,
  RadioTower,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'

const audioServices = [
  {
    icon: SlidersHorizontal,
    title: 'Configuración de mezcladoras analógicas',
    description: 'Dejamos cada canal bien ajustado para voces claras y música balanceada.',
  },
  {
    icon: Church,
    title: 'Optimización de sonido en iglesias',
    description: 'Mejoramos inteligibilidad para que el mensaje se escuche limpio en todo el salón.',
  },
  {
    icon: RadioTower,
    title: 'Soporte para transmisiones en vivo',
    description: 'Ajustamos señal y niveles para streaming estable y sin saturación.',
  },
  {
    icon: Mic,
    title: 'Ajuste de audio para eventos',
    description: 'Calibración rápida para conferencias, actividades y presentaciones.',
  },
  {
    icon: AudioLines,
    title: 'Diagnóstico de problemas de sonido',
    description: 'Detectamos ruido, acoples o pérdida de señal con una revisión clara y directa.',
  },
]

const processSteps = [
  { icon: Gauge, title: 'Diagnóstico', text: 'Medimos niveles, ruido y puntos críticos del sistema.' },
  { icon: SlidersHorizontal, title: 'Ajuste', text: 'Corregimos ganancia, ecualización y mezcla según el espacio.' },
  { icon: Radio, title: 'Prueba en vivo', text: 'Validamos en tiempo real para dejar todo listo para transmitir.' },
]

function Audio() {
  return (
    <section id="audio" className="section-shell pb-10 pt-8 md:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 shadow-soft sm:p-8"
      >
        <div className="pointer-events-none absolute -right-16 top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-44 w-44 rounded-full bg-sky-300/10 blur-3xl" />

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Audio y sonido</p>
        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
          Soporte de audio para iglesias, eventos y transmisión
        </h2>
        <p className="mt-2 text-sm font-semibold text-cyan-100 sm:text-base">
          Sonido claro, sin fallas, listo para transmitir.
        </p>
        <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
          En ByteWorks CR esta área es clave: no hablamos complicado, te explicamos simple y dejamos tu audio sonando como debe.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audioServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="rounded-2xl border border-cyan-200/15 bg-slate-950/65 p-5 shadow-lg shadow-slate-950/50 transition-all duration-300 hover:border-cyan-300/35"
            >
              <service.icon className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-4 text-base font-bold text-white sm:text-lg">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{service.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl border border-cyan-200/20 bg-slate-900/70 p-5 sm:grid-cols-3 sm:p-6">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              className="rounded-xl border border-white/10 bg-slate-950/55 p-4"
            >
              <step.icon className="h-6 w-6 text-cyan-300" />
              <h4 className="mt-3 text-sm font-bold uppercase tracking-wide text-white">{step.title}</h4>
              <p className="mt-2 text-sm text-slate-300">{step.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-200/20 bg-slate-900/70 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-cyan-300" />
            <h3 className="text-lg font-bold text-white">Caso real: antes vs después</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Una iglesia nos contactó por voces opacas y ruido constante en transmisión.
            <span className="font-semibold text-white"> Antes:</span> micrófonos con baja claridad y picos molestos.
            <span className="font-semibold text-white"> Después:</span> ecualización simple, ganancia correcta y mezcla limpia para salón y streaming.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Audio
