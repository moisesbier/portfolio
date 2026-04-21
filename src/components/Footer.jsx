// [top%, left%, delay, duration]
const FOOTER_TINY = [
  [8,  15, 0.4, 10.1],[22, 42, 1.9, 9.3], [36, 68, 0.7, 11.4],
  [50, 23, 3.0, 8.7], [64, 81, 1.3, 10.8],[78, 47, 2.5, 9.6],
  [90, 11, 0.1, 11.2],[15, 90, 2.2, 8.4], [45, 55, 1.6, 10.5],
  [72, 33, 0.8, 9.9],
]

const FOOTER_SMALL = [
  [12, 38, 0.6, 6.2],[30, 70, 2.1, 7.0],[55, 14, 0.3, 5.8],
  [70, 59, 1.7, 6.7],[85, 82, 0.9, 7.3],[25, 6,  2.8, 5.5],
  [42, 92, 1.2, 6.9],[60, 48, 3.1, 6.4],[80, 25, 0.5, 7.1],
]

const FOOTER_DRIFT = [
  [18, 28, 0.8, 13.5],[48, 72, 2.4, 12.2],[75, 45, 1.1, 14.8],
  [30, 60, 3.0, 13.0],[88, 18, 0.3, 14.3],
]

const FOOTER_BRIGHT = [
  [20, 50, 0.5, 5.6],[55, 78, 1.8, 6.2],[82, 35, 1.0, 5.9],
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #030d18 0%, #010408 100%)' }}
    >
      {/* Galaxy: faint blue top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
      />

      {/* Galaxy: nebula blobs */}
      <div
        className="absolute top-0 left-1/4 w-64 h-64 bg-blue-900/8 rounded-full blur-3xl pointer-events-none"
        style={{ animation: 'blob-float 20s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-56 h-56 bg-indigo-900/6 rounded-full blur-3xl pointer-events-none"
        style={{ animation: 'blob-float-alt 24s ease-in-out infinite 3s' }}
      />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {FOOTER_TINY.map(([top, left, delay, duration], i) => (
          <span key={`ft${i}`} className="absolute rounded-full bg-white"
            style={{ top: `${top}%`, left: `${left}%`, width: '0.7px', height: '0.7px',
              animation: `particle-twinkle ${duration}s ease-in-out ${delay}s infinite` }} />
        ))}
        {FOOTER_SMALL.map(([top, left, delay, duration], i) => (
          <span key={`fs${i}`} className="absolute rounded-full bg-white"
            style={{ top: `${top}%`, left: `${left}%`, width: '1.2px', height: '1.2px',
              animation: `particle-twinkle ${duration}s ease-in-out ${delay}s infinite` }} />
        ))}
        {FOOTER_DRIFT.map(([top, left, delay, duration], i) => (
          <span key={`fd${i}`} className="absolute rounded-full bg-white/80"
            style={{ top: `${top}%`, left: `${left}%`, width: '1.8px', height: '1.8px',
              animation: `particle-drift ${duration}s ease-in-out ${delay}s infinite` }} />
        ))}
        {FOOTER_BRIGHT.map(([top, left, delay, duration], i) => (
          <span key={`fb${i}`} className="absolute rounded-full bg-white"
            style={{ top: `${top}%`, left: `${left}%`, width: '2px', height: '2px',
              animation: `particle-twinkle ${duration}s ease-in-out ${delay}s infinite`,
              boxShadow: '0 0 3px 1px rgba(147,197,253,0.5)' }} />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-2">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="text-white">Moisés </span>
              <span className="text-blue-400">Bier</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-56">
              Desenvolvimento de sistemas, sites e automações.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3">
            <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">Navegação</span>
            {[
              ['Serviços', '#servicos'],
              ['Projetos', '#projetos'],
              ['Sobre', '#sobre'],
              ['Contato', '#contato'],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                {label}
              </a>
            ))}
          </nav>

          {/* Contact + Social */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">Contato</span>
              <p className="text-slate-300 text-sm mt-1 mb-0.5">Vamos conversar</p>
              <a
                href="mailto:moisesfbier@gmail.com"
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
              >
                moisesfbier@gmail.com
              </a>
            </div>

            <div>
              <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">Redes sociais</span>
              <div className="flex items-center gap-4 mt-3">
                <SocialLink href="https://www.linkedin.com/in/moisesbier/" label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </SocialLink>
                <SocialLink href="https://github.com/moisesbier" label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </SocialLink>
                <SocialLink href="https://www.instagram.com/moises_bier/" label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </SocialLink>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Moisés Bier — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-200"
    >
      {children}
    </a>
  )
}
