import emblema from '../assets/emblema.png'
import { navLinks, contactInfo } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-700/50 bg-surface/40">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={emblema} alt="Emblema J. Alberto" className="h-8 w-8 object-contain" />
              <span className="font-display font-semibold uppercase text-white">J. Alberto</span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Pronto para atuar em resposta a emergências, planos de prevenção e consultoria técnica
              especializada com máximo rigor operacional.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-white">Navegação</span>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-white">Contato</span>
            <div className="flex flex-col gap-1 text-sm text-gray-400">
              <span>{contactInfo.email}</span>
              <span>{contactInfo.region}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-700/50 pt-6">
          <span className="text-xs text-gray-400">
            © {year} J. Alberto. Todos os direitos reservados.
          </span>
          <span className="text-xs text-gray-400">
            Este site não coleta dados além dos enviados voluntariamente via formulário de contato.
          </span>
        </div>
      </div>
    </footer>
  )
}
