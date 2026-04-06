import { MessageCircleMore } from 'lucide-react'
import About from './components/About'
import Audio from './components/Audio'
import Contact from './components/Contact'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
        <div className="absolute left-[-10rem] top-[-12rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-orange-400/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <Services />
        <div className="section-divider" aria-hidden="true" />
        <Audio />
        <div className="section-divider" aria-hidden="true" />
        <About />
        <div className="section-divider" aria-hidden="true" />
        <Contact />
        <FinalCta />
      </main>
      <Footer />

      <a
        href="https://wa.me/50687308869"
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir a ByteWorks CR por WhatsApp"
        className="group fixed bottom-5 right-5 z-50 inline-flex animate-[pulse_2.6s_ease-in-out_infinite] items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/35 transition-all duration-300 hover:scale-105 hover:bg-emerald-400"
      >
        <span className="pointer-events-none absolute -top-11 right-0 whitespace-nowrap rounded-xl border border-white/15 bg-slate-900/95 px-3 py-1 text-xs font-semibold text-slate-100 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
          Escríbenos ahora
        </span>
        <MessageCircleMore size={18} />
        WhatsApp
      </a>
    </div>
  )
}

export default App
