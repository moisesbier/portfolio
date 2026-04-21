import { useInView } from '../hooks/useInView'

const differentials = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Comunicação sem enrolação',
    description: 'Explico o que está sendo feito, por quê, e quando vai ficar pronto. Sem jargão técnico desnecessário.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Foco no resultado prático',
    description: 'O sistema tem que funcionar. O site tem que converter. Não entrego código bonito que não resolve problema.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Experiência com sistemas críticos',
    description: 'Trabalhei com sistemas de saúde que não podem falhar. Trago essa cultura de qualidade para cada projeto.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'Integração com qualquer sistema',
    description: 'APIs, webhooks, automações, ERPs. Conecto diferentes partes para que o seu negócio funcione como um todo.',
  },
]

const skills = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Docker', 'Git', 'Mendix', 'Automações']

export default function About() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="sobre" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-flex items-center gap-3 text-blue-600 text-sm font-semibold uppercase tracking-widest">
              <span className="w-8 h-px bg-blue-200" />
              Sobre mim
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Desenvolvedor que entende{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                o lado do negócio
              </span>
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-gray-500 leading-relaxed">
              <p>
                Tenho mais de 2 anos de experiência desenvolvendo sistemas em uma grande operadora de
                saúde, onde participei da construção e evolução de plataformas que atendem milhares de
                usuários diariamente.
              </p>
              <p>
                Não sou só um desenvolvedor que escreve código — sou alguém que entra no problema do
                negócio, entende o impacto real e entrega uma solução que funciona de verdade.
              </p>
              <p>
                Trabalhei com sistemas de autoatendimento, gestão de planos de saúde, agendamento de
                exames e integrações complexas. Isso me deu uma visão prática que vai além da teoria.
              </p>
              <p className="text-gray-900 font-medium">
                Hoje ofereço esse mesmo nível de comprometimento para empresas que precisam de
                tecnologia que funciona — seja um sistema do zero, uma landing page ou uma automação
                que vai economizar horas do seu time.
              </p>
            </div>

            <a
              href="https://wa.me/5551999819035?text=Olá,%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
            >
              Vamos conversar sobre seu projeto
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: differentials */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div id="diferenciais" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentials.map((diff) => (
                <DifferentialCard key={diff.title} {...diff} />
              ))}
            </div>

            <div className="mt-5 p-5 bg-gray-50 border border-gray-100 rounded-2xl">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
                Stack principal
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DifferentialCard({ icon, title, description }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 hover:border-blue-100 hover:shadow-md transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
        {icon}
      </div>
      <h4 className="text-gray-900 font-semibold text-sm mb-1.5">{title}</h4>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  )
}
