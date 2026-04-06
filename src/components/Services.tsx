import {
  Cpu,
  Network,
  ServerCog,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Cpu,
    title: 'Optimización de computadoras',
    description: 'Mejoramos rendimiento, arranque y estabilidad para que trabajes sin bloqueos.',
  },
  {
    icon: ShieldCheck,
    title: 'Mantenimiento preventivo',
    description: 'Limpieza interna, actualización de software y revisión para evitar fallas inesperadas.',
  },
  {
    icon: Wrench,
    title: 'Reparación de equipos',
    description: 'Diagnóstico rápido y solución práctica en computadoras de hogar, estudio y negocio.',
  },
  {
    icon: Network,
    title: 'Instalación de redes',
    description: 'Diseñamos redes estables para casas, oficinas y pequeños negocios.',
  },
  {
    icon: ServerCog,
    title: 'Configuración de servidores',
    description: 'Montaje y configuración inicial para compartir archivos y servicios críticos.',
  },
]

function Services() {
  return (
    <section id="servicios" className="section-shell pb-10 pt-8 md:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Tecnología</p>
        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Servicios técnicos que sí resuelven</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base md:text-lg">
          En ByteWorks CR trabajamos con soluciones claras, tiempos realistas y enfoque en resultados.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="gradient-border group relative overflow-hidden p-6 shadow-xl shadow-slate-950/35 transition-all duration-300 hover:shadow-cyan-900/30"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl" />
              <div className="relative z-10 inline-flex rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-3">
                <service.icon className="h-9 w-9 text-cyan-300" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{service.description}</p>
              <a
                href="https://wa.me/50687308869"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center rounded-xl border border-cyan-300/35 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-200 transition-all duration-300 hover:bg-cyan-300/10"
              >
                Solicitar servicio
              </a>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Services
