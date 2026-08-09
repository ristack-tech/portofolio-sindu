import { getExperiences, adminCreateExperience, adminDeleteExperience } from '@/lib/supabase'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import ConfirmButton from '@/components/admin/ConfirmButton'

export default async function AdminExperiencesPage() {
  const experiences = await getExperiences().catch(() => [])

  async function createExperience(formData: FormData) {
    'use server'
    const role = formData.get('role') as string
    const company = formData.get('company') as string
    const period = formData.get('period') as string
    const location = formData.get('location') as string
    const summary = formData.get('summary') as string
    const sort_order = parseInt(formData.get('sort_order') as string) || 0
    await adminCreateExperience({ role, company, period, location: location || null, summary: summary || null, sort_order })
    redirect('/admin/experiences')
  }

  async function deleteExperience(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await adminDeleteExperience(id)
    redirect('/admin/experiences')
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-4xl font-extrabold mb-1">EXPERIENCE</h1>
        <p className="font-mono text-xs text-[#727785]">{experiences.length} entri</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form tambah */}
        <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
          <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b-[2px] border-black">TAMBAH EXPERIENCE</h2>
          <form action={createExperience} className="space-y-4">
            <Field label="ROLE / POSISI" name="role" required />
            <Field label="PERUSAHAAN" name="company" required />
            <Field label="PERIODE" name="period" placeholder="2023 — 2025" required />
            <Field label="LOKASI" name="location" placeholder="Jakarta, ID" />
            <div>
              <label className="font-mono text-xs font-bold tracking-widest block mb-2">SUMMARY</label>
              <textarea
                name="summary"
                rows={3}
                className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none transition-colors resize-y"
              />
            </div>
            <Field label="URUTAN" name="sort_order" type="number" placeholder="0" />
            <button type="submit" className="font-mono text-sm font-bold bg-[#0058be] text-white px-6 py-3 border-[4px] border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              SIMPAN
            </button>
          </form>
        </div>

        {/* Daftar experience */}
        <div className="space-y-4">
          {experiences.length === 0 ? (
            <div className="bg-white border-[4px] border-black p-8 text-center shadow-[4px_4px_0_0_#000]">
              <p className="font-body text-[#727785]">Belum ada experience.</p>
            </div>
          ) : experiences.map((exp) => (
            <div key={exp.id} className="bg-white border-[4px] border-black p-5 shadow-[4px_4px_0_0_#000]">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="font-display text-lg font-bold">{exp.role}</p>
                  <p className="font-mono text-sm text-[#0058be] font-bold">{exp.company}</p>
                  <p className="font-mono text-xs text-[#727785] mt-1">{exp.period}{exp.location ? ` · ${exp.location}` : ''}</p>
                  {exp.summary && <p className="font-body text-sm text-[#1a1c1c] mt-2">{exp.summary}</p>}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Link href={`/admin/experiences/${exp.id}`} className="font-mono text-xs font-bold text-[#0058be] border-[2px] border-[#0058be] px-3 py-1 hover:bg-[#d8e2ff] transition-colors">
                    EDIT
                  </Link>
                  <form action={deleteExperience}>
                    <input type="hidden" name="id" value={exp.id} />
                    <ConfirmButton message="Hapus experience ini?" className="font-mono text-xs font-bold text-[#ba1a1a] border-[2px] border-[#ba1a1a] px-3 py-1 hover:bg-[#ffdad6] transition-colors">
                      HAPUS
                    </ConfirmButton>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Field({ label, name, placeholder, type = 'text', required }: {
  label: string; name: string; placeholder?: string; type?: string; required?: boolean
}) {
  return (
    <div>
      <label className="font-mono text-xs font-bold tracking-widest block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none transition-colors"
      />
    </div>
  )
}
