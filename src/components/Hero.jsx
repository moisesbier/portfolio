const WHATSAPP_URL =
  'https://wa.me/5551999819035?text=Olá,%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #010408 0%, #020c1a 50%, #010810 100%)' }}
    >
      {/* Galaxy: faint blue glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 70%)' }}
      />

      {/* Galaxy: barely-visible deep space clouds */}
      <div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-800/8 rounded-full blur-3xl pointer-events-none"
        style={{ animation: 'blob-float 18s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-900/6 rounded-full blur-3xl pointer-events-none"
        style={{ animation: 'blob-float-alt 24s ease-in-out infinite 3s' }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl pointer-events-none"
        style={{ animation: 'blob-float 30s ease-in-out infinite 7s' }}
      />

      {/* Particles */}
      <Particles />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponível para novos projetos
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Sites e landing pages que{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            atraem clientes e fazem seu negócio crescer
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Crio sites profissionais e landing pages que transmitem confiança, aparecem bem no Google
          e transformam visitantes em clientes para o seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Falar sobre meu projeto
          </a>
          <a
            href="#servicos"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-medium px-6 py-4 rounded-xl text-base transition-all duration-200"
          >
            Ver o que faço
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <GlassStat value="2+" label="anos de experiência" />
          <GlassStat value="10+" label="sistemas entregues" />
          <GlassStat value="100%" label="foco em resultado" />
        </div>
      </div>
    </section>
  )
}

function CodeWindow() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute -inset-3 bg-blue-600/15 blur-2xl rounded-3xl pointer-events-none" />
      <div className="relative bg-slate-900/80 backdrop-blur border border-white/10 rounded-2xl overflow-hidden shadow-2xl text-left">
        <div className="flex items-center gap-1.5 px-5 py-3 border-b border-white/10 bg-black/30">
          <span className="w-3 h-3 rounded-full bg-rose-500" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="ml-4 text-slate-500 text-xs font-mono">sistema.tsx</span>
          <span className="ml-auto text-slate-600 text-xs font-mono">● Sem erros</span>
        </div>

        <div className="px-5 py-4 font-mono text-sm leading-7">
          <CodeLine n="1">
            <T c="text-violet-400">const</T> <T c="text-blue-300">sistema</T>{' '}
            <T c="text-slate-500">=</T> <T c="text-slate-300">{'{'}</T>
          </CodeLine>
          <CodeLine n="2">
            <span className="pl-5">
              <T c="text-sky-300">retrabalho</T>
              <T c="text-slate-500">: </T>
              <T c="text-rose-400">false</T>
              <T c="text-slate-500">,</T>
            </span>
          </CodeLine>
          <CodeLine n="3">
            <span className="pl-5">
              <T c="text-sky-300">produtividade</T>
              <T c="text-slate-500">: </T>
              <T c="text-amber-300">"máxima"</T>
              <T c="text-slate-500">,</T>
            </span>
          </CodeLine>
          <CodeLine n="4">
            <span className="pl-5">
              <T c="text-sky-300">resultado</T>
              <T c="text-slate-500">: </T>
              <T c="text-emerald-400">true</T>
              <T c="text-slate-500">,</T>
            </span>
          </CodeLine>
          <CodeLine n="5">
            <T c="text-slate-300">{'}'}</T>
          </CodeLine>
          <CodeLine n="6">
            <span className="opacity-0">_</span>
          </CodeLine>
          <CodeLine n="7">
            <T c="text-violet-400">export default</T>{' '}
            <T c="text-yellow-300">resolver</T>
            <T c="text-slate-500">(</T>
            <T c="text-blue-300">seuNegocio</T>
            <T c="text-slate-500">)</T>
          </CodeLine>
        </div>

        <div className="flex items-center justify-between px-5 py-2.5 border-t border-white/10 bg-black/20">
          <span className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Build successful
          </span>
          <span className="text-xs font-mono text-slate-600">TypeScript · React · Node.js</span>
        </div>
      </div>
    </div>
  )
}

function T({ c, children }) {
  return <span className={c}>{children}</span>
}

function CodeLine({ n, children }) {
  return (
    <div className="flex gap-4 items-start">
      <span className="text-slate-700 select-none w-4 text-right shrink-0 text-xs mt-1">{n}</span>
      <span className="text-slate-300">{children}</span>
    </div>
  )
}

function GlassStat({ value, label }) {
  return (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-6 py-4 min-w-28">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className="text-slate-400 text-xs mt-0.5 whitespace-nowrap">{label}</span>
    </div>
  )
}

// [top%, left%, delay, duration]
const TINY_STARS = [
  [4, 17, 0, 10.2],   [9, 44, 2.1, 9.5],   [14, 71, 0.8, 11.3],  [19, 6, 3.4, 8.8],
  [23, 83, 1.6, 12.1],[28, 31, 0.3, 9.7],  [33, 58, 2.9, 10.6],  [38, 14, 1.2, 8.3],
  [43, 91, 0.6, 11.8],[48, 47, 3.1, 9.1],  [53, 22, 1.9, 10.9],  [58, 69, 0.4, 8.6],
  [63, 36, 2.7, 12.2],[68, 80, 1.1, 9.4],  [73, 9,  3.8, 10.3],  [78, 53, 0.9, 11.1],
  [83, 27, 2.3, 8.9], [88, 74, 1.7, 10.7], [93, 41, 0.2, 9.8],   [97, 62, 3.5, 11.6],
]

// [top%, left%, delay, duration]
const SMALL_STARS = [
  [7, 38, 0.5, 6.4],  [16, 62, 1.8, 7.2],  [26, 19, 0.1, 5.9],  [34, 76, 2.6, 6.8],
  [44, 8,  1.3, 7.5], [52, 55, 0.7, 6.1],  [61, 32, 3.0, 7.8],  [69, 88, 1.5, 5.7],
  [76, 45, 2.2, 6.6], [84, 13, 0.9, 7.1],  [91, 67, 1.1, 6.3],  [39, 50, 3.3, 5.5],
  [57, 25, 0.4, 7.4], [74, 72, 2.8, 6.0],  [89, 89, 1.6, 7.3],
]

// [top%, left%, delay, duration] — slow drift
const DRIFT_STARS = [
  [11, 29, 0.6, 14.2],[31, 64, 2.3, 12.8],[51, 41, 0.1, 15.5],
  [66, 17, 3.2, 13.1],[81, 78, 1.4, 14.7],[21, 90, 2.7, 12.4],
  [46, 3,  0.9, 15.0],
]

// [top%, left%, delay, duration] — bright accent
const BRIGHT_STARS = [
  [18, 52, 0.3, 5.8],[42, 24, 1.9, 6.5],[67, 68, 0.8, 5.2],
  [85, 38, 2.5, 6.1],[37, 83, 1.2, 5.6],
]

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {TINY_STARS.map(([top, left, delay, duration], i) => (
        <span key={`t${i}`} className="absolute rounded-full bg-white"
          style={{ top: `${top}%`, left: `${left}%`, width: '0.7px', height: '0.7px',
            animation: `particle-twinkle ${duration}s ease-in-out ${delay}s infinite` }} />
      ))}
      {SMALL_STARS.map(([top, left, delay, duration], i) => (
        <span key={`s${i}`} className="absolute rounded-full bg-white"
          style={{ top: `${top}%`, left: `${left}%`, width: '1.2px', height: '1.2px',
            animation: `particle-twinkle ${duration}s ease-in-out ${delay}s infinite` }} />
      ))}
      {DRIFT_STARS.map(([top, left, delay, duration], i) => (
        <span key={`d${i}`} className="absolute rounded-full bg-white/80"
          style={{ top: `${top}%`, left: `${left}%`, width: '1.8px', height: '1.8px',
            animation: `particle-drift ${duration}s ease-in-out ${delay}s infinite` }} />
      ))}
      {BRIGHT_STARS.map(([top, left, delay, duration], i) => (
        <span key={`b${i}`} className="absolute rounded-full bg-white"
          style={{ top: `${top}%`, left: `${left}%`, width: '2.5px', height: '2.5px',
            animation: `particle-twinkle ${duration}s ease-in-out ${delay}s infinite`,
            boxShadow: '0 0 4px 1px rgba(147,197,253,0.6)' }} />
      ))}
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
