import Timeline from './Timeline'
import Certifications from './Certifications'

export default function TrajectorySection() {
  return (
    <section className="py-24 bg-surface/40 border-y border-gray-700/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Histórico Operacional
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold uppercase text-white">
            Trajetória e Certificações
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Timeline />
          </div>
          <div className="lg:col-span-5">
            <Certifications />
          </div>
        </div>
      </div>
    </section>
  )
}
