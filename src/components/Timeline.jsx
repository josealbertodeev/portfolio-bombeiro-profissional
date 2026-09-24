import { motion } from 'framer-motion'
import { timeline } from '../data/content'

export default function Timeline() {
  return (
    <div id="trajetoria" className="relative">
      <div
        aria-hidden="true"
        className="absolute left-4 top-2 bottom-2 w-px bg-gray-700/50"
      />
      <div className="flex flex-col gap-8">
        {timeline.map((item, index) => (
          <motion.div
            key={item.period}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start gap-6 pl-0"
          >
            <div className="relative z-10 shrink-0 w-8 h-8 rounded-full bg-background border border-gray-700/50 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <div className="flex-1 rounded-xl border border-gray-700/50 bg-surface p-6">
              <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-2 py-1 rounded">
                  {item.period}
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold text-white">{item.role}</h3>
              <span className="text-sm text-accent font-medium">{item.org}</span>
              <p className="mt-2 text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
