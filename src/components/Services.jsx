import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Sistemas Sob Medida',
    description:
      'Desenvolvimento de sistemas internos, painéis administrativos e plataformas customizadas para o seu negócio. Sem template, sem limitação.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Sites Profissionais',
    description:
      'Sites institucionais e corporativos com design moderno, carregamento rápido e foco em transmitir credibilidade para seus clientes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Landing Pages de Alta Conversão',
    description:
      'Páginas focadas em converter visitantes em leads e clientes. Estrutura persuasiva, copy estratégico e elementos de confiança.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Integrações com APIs',
    description:
      'Conexão entre sistemas, ERPs, CRMs, gateways de pagamento e qualquer serviço externo. Seus dados fluindo onde precisam.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Automação de Processos',
    description:
      'Elimine tarefas manuais e repetitivas. Automatize fluxos de trabalho, envio de relatórios, sincronização de dados e muito mais.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Manutenção e Evolução',
    description:
      'Já tem um sistema mas precisa melhorar? Assumo projetos existentes, corrijo bugs e evoluo funcionalidades com segurança.',
  },
]

export default function Services() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="servicos" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-flex items-center gap-3 text-blue-600 text-sm font-semibold uppercase tracking-widest">
            <span className="w-8 h-px bg-blue-200" />
            O que eu faço
            <span className="w-8 h-px bg-blue-200" />
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Soluções que geram resultado
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Desenvolvimento de sites e landing pages focados em atrair clientes e gerar resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} inView={inView} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description, inView, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay + 150}ms` }}
      className={`group bg-white border border-gray-100 hover:border-blue-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-gray-900 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
