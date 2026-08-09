import type { SiteSettings, SiteStat } from '@/lib/supabase'

type Props = {
  settings: SiteSettings | null
  stats: SiteStat[]
}

export default function Hero({ settings, stats }: Props) {
  const badge = settings?.hero_badge ?? 'BACKEND ENGINEER · TECHNICAL PROJECT LEAD'
  const subhead = settings?.hero_subhead ?? 'Saya backend engineer yang merancang arsitektur, memimpin tim, dan mengirim produk dari sketsa sampai live di produksi — ERP manufaktur, fleet IoT, sampai sistem multi-tenant yang dipakai tim operasional setiap hari.'
  const photoUrl = settings?.hero_photo_url?.startsWith('http') ? settings.hero_photo_url : null
  const location = settings?.contact_location ?? 'SEMARANG, INDONESIA'

  return (
    <section className="hero-section min-h-screen flex items-center pt-20 border-b-[8px] border-black bg-white relative overflow-hidden">
      <div className="hero-deco-1 absolute top-32 right-12 w-24 h-24 border-[4px] border-black opacity-20" />
      <div className="hero-deco-2 absolute bottom-20 left-8 w-16 h-16 bg-[#0058be] opacity-10" />
      <div className="hero-deco-3 absolute top-1/2 right-1/4 w-2 h-32 bg-black opacity-5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="hero-badge">
              <span className="inline-block font-mono text-xs font-bold tracking-widest bg-black text-white px-4 py-2 mb-8">{badge}</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-8">
              <span className="hero-name-block">
                <span className="hero-name-text inline-block">DESIGN</span>
              </span><br/>
              <span className="hero-name-block">
                <span className="hero-name-text inline-block">BUSINESS SOLUTIONS</span>
              </span><br/>
              <span className="hero-name-block">
                <span className="hero-name-text text-[#0058be] inline-block">THAT DELIVER IMPACT.</span>
              </span>
            </h1>

            <p className="hero-desc font-body text-lg md:text-xl text-[#424754] max-w-xl mb-10 leading-relaxed">
              {subhead}
            </p>

            <div className="hero-buttons flex flex-wrap gap-4">
              <a href="#work" className="group relative inline-flex items-center gap-2 bg-[#0058be] text-white px-8 py-4 font-mono text-sm font-bold border-[4px] border-black shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
                LIHAT PRODUK
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-[#1a1c1c] px-8 py-4 font-mono text-sm font-bold border-[4px] border-black hover:bg-[#f3f3f3] hover:-translate-y-1 transition-all duration-200">
                HUBUNGI SAYA
              </a>
            </div>

            {stats.length > 0 && (
              <div className="hero-stats flex gap-8 mt-16 pt-8 border-t-[2px] border-black">
                {stats.map((stat) => (
                  <div key={stat.id} className="stat-item">
                    <span className="stat-value font-display text-4xl font-extrabold">{stat.value}</span>
                    <p className="font-mono text-xs text-[#727785] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 hero-avatar">
            <div className="relative">
              <div className="aspect-[3/4] bg-[#e8e8e8] border-[4px] border-black relative overflow-hidden">
                {photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photoUrl} alt="Sindu Aditya" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="avatar-inner absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-[#dadada] border-[4px] border-black rounded-full flex items-center justify-center mb-4">
                        <span className="font-display text-4xl font-extrabold text-[#727785]">SA</span>
                      </div>
                      <span className="font-mono text-xs text-[#727785]">{location.toUpperCase()}</span>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#0058be] border-t-[4px] border-l-[4px] border-black"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#dadada] border-[4px] border-black -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
