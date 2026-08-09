import { getSiteSettings, getSiteStats, adminUpdateSiteSettings, adminCreateStat, adminDeleteStat, adminUploadFile } from '@/lib/supabase'
import { redirect } from 'next/navigation'
import ConfirmButton from '@/components/admin/ConfirmButton'

export default async function AdminSettingsPage() {
  const [settings, stats] = await Promise.all([
    getSiteSettings().catch(() => null),
    getSiteStats().catch(() => []),
  ])

  async function updateSettings(formData: FormData) {
    'use server'
    const updates: Record<string, string | null> = {
      full_name: formData.get('full_name') as string,
      role_tagline: formData.get('role_tagline') as string,
      hero_badge: formData.get('hero_badge') as string,
      hero_subhead: formData.get('hero_subhead') as string,
      about_heading: formData.get('about_heading') as string,
      about_heading_accent: formData.get('about_heading_accent') as string,
      about_paragraph_1: (formData.get('about_paragraph_1') as string) || null,
      about_paragraph_2: (formData.get('about_paragraph_2') as string) || null,
      about_paragraph_3: (formData.get('about_paragraph_3') as string) || null,
      contact_heading: formData.get('contact_heading') as string,
      contact_heading_accent: formData.get('contact_heading_accent') as string,
      contact_intro: (formData.get('contact_intro') as string) || null,
      contact_email: formData.get('contact_email') as string,
      contact_location: formData.get('contact_location') as string,
      contact_status_text: formData.get('contact_status_text') as string,
      social_linkedin: (formData.get('social_linkedin') as string) || null,
      social_github: (formData.get('social_github') as string) || null,
      social_twitter: (formData.get('social_twitter') as string) || null,
      seo_default_title: formData.get('seo_default_title') as string,
      seo_default_description: formData.get('seo_default_description') as string,
    }

    const heroPhoto = formData.get('hero_photo') as File
    if (heroPhoto && heroPhoto.size > 0) {
      const { url } = await adminUploadFile('settings/hero', heroPhoto)
      if (url) updates.hero_photo_url = url
    }

    const aboutPhoto = formData.get('about_photo') as File
    if (aboutPhoto && aboutPhoto.size > 0) {
      const { url } = await adminUploadFile('settings/about', aboutPhoto)
      if (url) updates.about_photo_url = url
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await adminUpdateSiteSettings(updates as any)
    redirect('/admin/settings')
  }

  async function createStat(formData: FormData) {
    'use server'
    const value = formData.get('value') as string
    const label = formData.get('label') as string
    const sort_order = parseInt(formData.get('sort_order') as string) || 0
    await adminCreateStat({ value, label, sort_order })
    redirect('/admin/settings')
  }

  async function deleteStat(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await adminDeleteStat(id)
    redirect('/admin/settings')
  }

  if (!settings) {
    return (
      <div>
        <h1 className="font-display text-4xl font-extrabold mb-4">SETTINGS</h1>
        <p className="font-body text-[#ba1a1a]">Gagal memuat settings. Pastikan tabel site_settings sudah ada di Supabase.</p>
      </div>
    )
  }

  const s = settings
  const heroPhotoUrl = s.hero_photo_url?.startsWith('http') ? s.hero_photo_url : null
  const aboutPhotoUrl = s.about_photo_url?.startsWith('http') ? s.about_photo_url : null

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-4xl font-extrabold mb-1">SETTINGS</h1>
        <p className="font-mono text-xs text-[#727785]">Konten & metadata portfolio</p>
      </div>

      <form action={updateSettings} encType="multipart/form-data" className="space-y-8">
        {/* Hero */}
        <Section title="HERO">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Field label="NAMA LENGKAP" name="full_name" defaultValue={s.full_name} required />
            <Field label="ROLE TAGLINE" name="role_tagline" defaultValue={s.role_tagline} required />
            <Field label="HERO BADGE" name="hero_badge" defaultValue={s.hero_badge} />
            <Field label="HERO SUBHEAD" name="hero_subhead" defaultValue={s.hero_subhead} />
          </div>
          <div className="space-y-3">
            {heroPhotoUrl && (
              <div>
                <p className="font-mono text-xs text-[#727785] mb-2">Foto saat ini:</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={heroPhotoUrl} alt="Hero" className="h-32 border-[2px] border-black object-cover" />
              </div>
            )}
            <div>
              <label className="font-mono text-xs font-bold tracking-widest block mb-2">FOTO HERO (opsional, ganti jika ingin update)</label>
              <input type="file" name="hero_photo" accept="image/*" className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm file:font-mono file:text-xs file:font-bold file:mr-4 file:border-[2px] file:border-black file:px-3 file:py-1 file:bg-black file:text-white file:cursor-pointer" />
            </div>
          </div>
        </Section>

        {/* About */}
        <Section title="ABOUT">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Field label="HEADING" name="about_heading" defaultValue={s.about_heading} />
            <Field label="HEADING ACCENT" name="about_heading_accent" defaultValue={s.about_heading_accent} />
          </div>
          <div className="space-y-4 mb-6">
            <Textarea label="PARAGRAF 1" name="about_paragraph_1" defaultValue={s.about_paragraph_1 ?? ''} rows={3} />
            <Textarea label="PARAGRAF 2" name="about_paragraph_2" defaultValue={s.about_paragraph_2 ?? ''} rows={3} />
            <Textarea label="PARAGRAF 3" name="about_paragraph_3" defaultValue={s.about_paragraph_3 ?? ''} rows={3} />
          </div>
          <div className="space-y-3">
            {aboutPhotoUrl && (
              <div>
                <p className="font-mono text-xs text-[#727785] mb-2">Foto saat ini:</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={aboutPhotoUrl} alt="About" className="h-32 border-[2px] border-black object-cover" />
              </div>
            )}
            <div>
              <label className="font-mono text-xs font-bold tracking-widest block mb-2">FOTO ABOUT (opsional, ganti jika ingin update)</label>
              <input type="file" name="about_photo" accept="image/*" className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm file:font-mono file:text-xs file:font-bold file:mr-4 file:border-[2px] file:border-black file:px-3 file:py-1 file:bg-black file:text-white file:cursor-pointer" />
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section title="CONTACT">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Field label="HEADING" name="contact_heading" defaultValue={s.contact_heading} />
            <Field label="HEADING ACCENT" name="contact_heading_accent" defaultValue={s.contact_heading_accent} />
            <Field label="EMAIL" name="contact_email" type="email" defaultValue={s.contact_email} required />
            <Field label="LOKASI" name="contact_location" defaultValue={s.contact_location} />
            <Field label="STATUS TEXT" name="contact_status_text" defaultValue={s.contact_status_text} />
          </div>
          <Textarea label="INTRO KONTAK" name="contact_intro" defaultValue={s.contact_intro ?? ''} rows={2} />
        </Section>

        {/* Social */}
        <Section title="SOCIAL LINKS">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Field label="LINKEDIN URL" name="social_linkedin" defaultValue={s.social_linkedin ?? ''} />
            <Field label="GITHUB URL" name="social_github" defaultValue={s.social_github ?? ''} />
            <Field label="TWITTER URL" name="social_twitter" defaultValue={s.social_twitter ?? ''} />
          </div>
        </Section>

        {/* SEO */}
        <Section title="SEO DEFAULT">
          <div className="space-y-4">
            <Field label="DEFAULT TITLE" name="seo_default_title" defaultValue={s.seo_default_title} />
            <Textarea label="DEFAULT DESCRIPTION" name="seo_default_description" defaultValue={s.seo_default_description} rows={2} />
          </div>
        </Section>

        <div>
          <button type="submit" className="font-mono text-sm font-bold bg-[#0058be] text-white px-8 py-4 border-[4px] border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
            SIMPAN SETTINGS
          </button>
        </div>
      </form>

      {/* Hero Stats CRUD */}
      <div className="mt-10 bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
        <h2 className="font-display text-xl font-bold mb-4 pb-3 border-b-[2px] border-black">HERO STATS</h2>

        {stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => (
              <div key={stat.id} className="border-[2px] border-black p-4">
                <span className="font-display text-3xl font-extrabold block">{stat.value}</span>
                <span className="font-mono text-xs text-[#727785] block mt-1">{stat.label}</span>
                <form action={deleteStat} className="mt-2">
                  <input type="hidden" name="id" value={stat.id} />
                  <ConfirmButton message="Hapus stat ini?" className="font-mono text-xs text-[#ba1a1a] hover:underline">HAPUS</ConfirmButton>
                </form>
              </div>
            ))}
          </div>
        )}

        <form action={createStat} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="font-mono text-xs font-bold tracking-widest block mb-2">VALUE</label>
            <input name="value" placeholder="4+" required className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none" />
          </div>
          <div>
            <label className="font-mono text-xs font-bold tracking-widest block mb-2">LABEL</label>
            <input name="label" placeholder="TAHUN PENGALAMAN" required className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none" />
          </div>
          <div>
            <label className="font-mono text-xs font-bold tracking-widest block mb-2">URUTAN</label>
            <input name="sort_order" type="number" defaultValue="0" className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none" />
          </div>
          <div className="sm:col-span-3">
            <button type="submit" className="font-mono text-sm font-bold bg-[#0058be] text-white px-6 py-3 border-[4px] border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              TAMBAH STAT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
      <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b-[2px] border-black">{title}</h2>
      {children}
    </div>
  )
}

function Field({ label, name, defaultValue, type = 'text', required }: {
  label: string; name: string; defaultValue?: string; type?: string; required?: boolean
}) {
  return (
    <div>
      <label className="font-mono text-xs font-bold tracking-widest block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none transition-colors"
      />
    </div>
  )
}

function Textarea({ label, name, defaultValue, rows = 3 }: {
  label: string; name: string; defaultValue?: string; rows?: number
}) {
  return (
    <div>
      <label className="font-mono text-xs font-bold tracking-widest block mb-2">{label}</label>
      <textarea
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none transition-colors resize-y"
      />
    </div>
  )
}
