import { useState, useEffect } from 'react'

const WHATSAPP_URL =
  'https://wa.me/5551999819035?text=Olá,%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Moisés{' '}
            </span>
            <span className="text-blue-500">Bier</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Falar no WhatsApp
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-gray-600 hover:text-gray-900'
                : 'text-white/80 hover:text-white'
            }`}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 bg-slate-950/98 backdrop-blur-md">
            <nav className="flex flex-col gap-1 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all text-center mt-3"
              >
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
