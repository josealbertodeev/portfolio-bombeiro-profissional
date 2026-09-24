import { motion } from 'framer-motion'
import { ChevronRight, Award } from 'lucide-react'
import retrato from '../assets/retrato-hero.jpg'

export default function Hero() {
  return (
    <section id="sobre" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="inline-flex self-start items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Socorrista Certificado em Emergências
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold uppercase leading-tight text-white">
            Dedicação, Precisão Tática e <span className="text-primary">Liderança</span> em Segurança da Vida
          </h1>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Mais de 8 anos de atuação em combate a incêndios, resgate técnico, mitigação de riscos e
            instrução de segurança comunitária, com foco absoluto na preservação da vida.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-hover px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(220,38,38,0.35)] transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Solicitar Consultoria
              <ChevronRight size={18} />
            </a>
            <a
              href="#certificacoes"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700/50 hover:border-gray-500 px-6 py-3 text-sm font-semibold text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Ver Certificações
              <Award size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-gray-700/50 bg-surface shadow-2xl">
            <img
              src={retrato}
              alt="Retrato profissional de J. Alberto, bombeiro e especialista em resgate"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-lg bg-surface/95 backdrop-blur-md border border-gray-700/50 px-4 py-3">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">J. Alberto</span>
                <span className="text-xs uppercase tracking-wide text-gray-400">Credenciado Nível Avançado</span>
              </div>
              <span className="text-xs font-mono text-gray-400 bg-background px-2 py-1 rounded">REF. JA-402</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
