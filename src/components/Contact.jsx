import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const WHATSAPP_URL =
  'https://wa.me/5551999819035?text=Olá,%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sectionRef, inView] = useInView()

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.name}.\n\n${form.message}\n\nMeu email para retorno: ${form.email}`
    )
    window.open(`https://wa.me/5551999819035?text=${text}`, '_blank')
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contato" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-flex items-center gap-3 text-blue-600 text-sm font-semibold uppercase tracking-widest">
            <span className="w-8 h-px bg-blue-200" />
            Bora trabalhar juntos
            <span className="w-8 h-px bg-blue-200" />
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Conte seu desafio
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Não precisa ter tudo definido. Me conta o problema e juntos a gente encontra a melhor
            solução. Respondo rápido.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-5 gap-12 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: WhatsApp CTA + info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white border border-gray-100 hover:border-green-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                <WhatsAppIcon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg">WhatsApp</p>
                <p className="text-gray-500 text-sm mt-0.5">Resposta em até 1 hora</p>
                <p className="text-green-600 text-sm font-medium mt-1 group-hover:underline">
                  Clique para iniciar conversa →
                </p>
              </div>
            </a>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h4 className="text-gray-900 font-semibold mb-4">O que esperar?</h4>
              <ul className="flex flex-col gap-3">
                {[
                  'Retorno rápido e sem enrolação',
                  'Orçamento claro e detalhado',
                  'Proposta personalizada para seu caso',
                  'Sem compromisso na primeira conversa',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-xl">Mensagem enviada!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Você foi redirecionado para o WhatsApp. Retorno em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Seu nome
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="João Silva"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Seu e-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="joao@empresa.com"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      O que você precisa?
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Descreva brevemente seu projeto ou desafio. Quanto mais detalhes, melhor o orçamento..."
                      className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25 text-sm"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Enviar via WhatsApp
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Ao clicar, você será direcionado ao WhatsApp com sua mensagem preenchida.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
