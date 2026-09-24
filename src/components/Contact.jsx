import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { requestTypes, contactInfo } from '../data/content'
import { LinkedinIcon, InstagramIcon, WhatsappIcon } from './SocialIcons'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contato" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-gray-700/50 bg-surface p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Posto de Comando &amp; Comunicação
              </span>
              <h2 className="text-3xl font-display font-semibold uppercase text-white leading-tight">
                Precisa de consultoria, treinamento ou uma palestra técnica?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Entre em contato direto para planejamentos preventivos, laudos ou eventos de capacitação.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] p-4 shadow-[0_0_24px_rgba(37,211,102,0.25)] transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                <WhatsappIcon className="text-white shrink-0" size={24} />
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-white/80">Fale agora pelo WhatsApp</span>
                  <span className="text-sm font-semibold text-white">Resposta rápida e direta</span>
                </div>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 rounded-lg bg-background p-3 hover:bg-gray-800 transition-colors"
              >
                <Mail className="text-gray-400 shrink-0" size={20} aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-gray-400">E-mail</span>
                  <span className="text-sm font-medium text-white">{contactInfo.email}</span>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-lg bg-background p-3">
                <MapPin className="text-gray-400 shrink-0" size={20} aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wide text-gray-400">Região de Atuação</span>
                  <span className="text-sm font-medium text-white">{contactInfo.region}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-background border border-gray-700/50 text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-background border border-gray-700/50 text-[#E1306C] hover:border-[#E1306C] transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  className="rounded-lg bg-background border border-gray-700/50 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="voce@empresa.com.br"
                  className="rounded-lg bg-background border border-gray-700/50 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="tipo" className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Tipo de Solicitação
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  className="rounded-lg bg-background border border-gray-700/50 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                >
                  {requestTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  required
                  placeholder="Descreva brevemente o escopo ou objetivo do contato..."
                  className="rounded-lg bg-background border border-gray-700/50 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-hover px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(220,38,38,0.35)] transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Enviar Solicitação
                <Send size={18} />
              </button>

              {submitted && (
                <div
                  role="status"
                  className="flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/40 px-4 py-3 text-sm text-white"
                >
                  <CheckCircle2 className="text-primary shrink-0" size={18} aria-hidden="true" />
                  Solicitação recebida com sucesso. Retorno em breve.
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
