import { useInView } from '../hooks/useInView'

const WHATSAPP_URL =
  'https://wa.me/5551999819035?text=Olá,%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.'

const corporateProjects = [
  {
    tag: 'Saúde / SaaS',
    title: 'Plataforma de Gestão de Planos de Saúde',
    description:
      'Sistema completo para gestão de planos corporativos de saúde. Contempla módulos de cadastro de beneficiários, controle de cobranças, emissão de relatórios e painel gerencial para administradores da operadora — centralizando processos que antes eram realizados de forma manual e descentralizada.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Mendix'],
  },
  {
    tag: 'Totem / Autoatendimento',
    title: 'Totem de Autoatendimento do Paciente',
    description:
      'Sistema embarcado em tablet instalado nas unidades de atendimento presencial. O paciente confirma sua consulta diretamente no totem e aguarda ser chamado, eliminando filas no balcão. O sistema é integrado com outras plataformas da operadora para sincronizar dados de agendamento e status de atendimento em tempo real.',
    tech: ['React', 'Mendix', 'REST API', 'Integrações'],
  },
  {
    tag: 'Saúde / Checkin',
    title: 'Sistema de Checkin para Exames',
    description:
      'Solução completa de checkin presencial para realização de exames médicos. O paciente chega à unidade, confirma seu agendamento, responde um questionário pré-exame, registra uma foto, informa acompanhante e recebe uma senha de atendimento. Do outro lado, uma tela de gestão acompanha em tempo real os pacientes que realizaram checkin, os em atendimento e os já finalizados — dando total visibilidade à equipe da unidade.',
    tech: ['React', 'Node.js', 'Mendix', 'REST API', 'Integrações'],
  },
]

const publicSites = [
  {
    title: 'Curso de Francês Online',
    description: 'Site para professor particular de francês com foco em captação de alunos, apresentação da metodologia e contato direto.',
    type: 'Site institucional',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://aulascursodefrances.com.br/',
    preview: '/previews/frances.png',
  },
  {
    title: 'Bier Barber',
    description: 'Landing page para barbearia com apresentação de serviços, galeria e call-to-action para agendamento.',
    type: 'Landing page',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://bier-barber.vercel.app/',
    preview: '/previews/bier-barber.png',
  },
  {
    title: 'Bier Burger',
    description: 'Site com cardápio digital, identidade visual forte e pedidos pelo WhatsApp para hamburgueria artesanal.',
    type: 'Site + Cardápio',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://bier-burger.vercel.app/',
    preview: '/previews/bier-burger.png',
  },
]

export default function Projects() {
  const [sectionRef, inView] = useInView()
  const [sitesRef, sitesInView] = useInView()

  return (
    <section id="projetos" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Corporate projects ── */}
        <div ref={sectionRef}>
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="inline-flex items-center gap-3 text-blue-600 text-sm font-semibold uppercase tracking-widest">
              <span className="w-8 h-px bg-blue-200" />
              Experiência comprovada
              <span className="w-8 h-px bg-blue-200" />
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Projetos em empresas reais
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Mais de 2 anos desenvolvendo sistemas críticos em uma grande operadora de saúde.
              Problemas reais, soluções que funcionam em produção.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {corporateProjects.map((project, i) => (
              <CorporateCard key={i} {...project} inView={inView} delay={i * 120} />
            ))}
          </div>

          <p
            className={`mt-6 text-center text-sm text-gray-400 italic transition-all duration-700 delay-500 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Alguns projetos são apresentados de forma resumida por envolverem contexto corporativo e informações internas.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="my-20 flex items-center gap-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-300 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
            projetos públicos
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* ── Public sites ── */}
        <div ref={sitesRef}>
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              sitesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="inline-flex items-center gap-3 text-blue-600 text-sm font-semibold uppercase tracking-widest">
              <span className="w-8 h-px bg-blue-200" />
              Sites em destaque
              <span className="w-8 h-px bg-blue-200" />
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Sites e landing pages que entreguei
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Projetos que você pode acessar agora mesmo — do design à publicação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicSites.map((site, i) => (
              <SiteCard key={i} {...site} inView={sitesInView} delay={i * 150} />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className={`mt-16 transition-all duration-700 ${
            sitesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Seu projeto pode ser o próximo
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Compartilhe o desafio que você tem em mente e vamos conversar sobre como posso ajudar.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25"
            >
              Conversar sobre meu projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function CorporateCard({ tag, title, description, tech, inView, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay + 150}ms` }}
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-700 hover:shadow-md hover:border-gray-200 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="flex">
        {/* Accent bar */}
        <div className="w-1 shrink-0 bg-linear-to-b from-blue-400 to-indigo-500" />

        <div className="flex-1 px-7 py-6">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-md mb-3">
            {tag}
          </span>
          <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
          {tech && (
            <div className="flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <span key={t} className="bg-gray-50 text-gray-500 text-xs font-medium px-2.5 py-1 rounded-lg border border-gray-100">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function SiteCard({ title, description, type, tech, url, preview, inView, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay + 150}ms` }}
      className={`group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Preview image */}
      <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: '16/10' }}>
        <img
          src={preview}
          alt={`Preview do site ${title}`}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-gray-900 leading-snug">{title}</h3>
          <span className="shrink-0 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md whitespace-nowrap">
            {type}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{description}</p>

        {tech && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.map((t) => (
              <span key={t} className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>
        )}

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 hover:shadow-md hover:shadow-blue-500/30"
        >
          Ver site
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}
