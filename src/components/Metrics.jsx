import { motion } from 'framer-motion'
import { Flame, Activity, Award, Shield } from 'lucide-react'
import { metrics } from '../data/content'

const icons = { Flame, Activity, Award, Shield }

export default function Metrics() {
  return (
    <section className="border-y border-gray-700/50 bg-surface/40 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = icons[metric.icon]
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl border border-gray-700/50 bg-surface p-6 flex flex-col gap-3 hover:border-primary/50 transition-colors"
              >
                <Icon className="text-primary" size={28} aria-hidden="true" />
                <span className="text-4xl font-display font-bold text-white">{metric.value}</span>
                <span className="text-sm text-gray-400">{metric.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
