import { motion } from 'framer-motion'
import { Award, CheckCircle2 } from 'lucide-react'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <div id="certificacoes" className="rounded-xl border border-gray-700/50 bg-surface p-6 md:p-8 flex flex-col gap-6 h-fit">
      <div className="flex items-center gap-3">
        <Award className="text-primary" size={28} aria-hidden="true" />
        <h3 className="text-xl font-display font-semibold text-white">Certificações Oficiais</h3>
      </div>
      <p className="text-sm text-gray-400">
        Credenciais ativas, auditadas por conselhos de emergência e baseadas em diretrizes da NFPA e Defesa
        Civil.
      </p>

      <ul className="flex flex-col gap-3">
        {certifications.map((cert, index) => (
          <motion.li
            key={cert.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex items-start gap-3 rounded-lg bg-background/60 p-3 hover:bg-background transition-colors"
          >
            <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">{cert.title}</span>
              <span className="text-xs uppercase tracking-wide text-gray-400">{cert.standard}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
