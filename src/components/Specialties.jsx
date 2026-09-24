import { motion } from 'framer-motion'
import { Flame, Cable, FlaskConical, FileText } from 'lucide-react'
import { specialties } from '../data/content'

const icons = { Flame, Cable, FlaskConical, FileText }

export default function Specialties() {
  return (
    <section id="especialidades" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Disciplina Operacional &amp; Capacitação
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold uppercase text-white">
            Especialidades e Serviços
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Prontidão, precisão em cenários de risco iminente e conformidade com protocolos mundiais de
            salvamento e proteção civil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialties.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl border border-gray-700/50 bg-surface p-8 flex flex-col gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
