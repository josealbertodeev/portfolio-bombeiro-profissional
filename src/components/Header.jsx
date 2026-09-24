import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import emblema from '../assets/emblema.png'
import { navLinks } from '../data/content'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3">
          <img src={emblema} alt="Emblema J. Alberto" className="h-9 w-9 object-contain" />
          <span className="font-display text-sm md:text-base uppercase tracking-wide text-white">
            J. Alberto <span className="text-gray-400 font-normal">| Bombeiro &amp; Especialista em Segurança</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-hover px-5 py-2.5 text-sm font-semibold text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Falar Conosco
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-surface transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden border-t border-gray-700/50 bg-background px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-hover px-5 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            Falar Conosco
          </a>
        </nav>
      )}
    </header>
  )
}
