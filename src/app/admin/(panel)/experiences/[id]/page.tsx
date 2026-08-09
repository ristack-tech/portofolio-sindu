import { getSupabaseAdmin, adminUpdateExperience, adminDeleteExperience } from '@/lib/supabase'
import type { Experience } from '@/lib/supabase'
import { notFound, redirect } from 'next/navigation'
import ConfirmButton from '@/components/admin/ConfirmButton'

type Props = { params: Promise<{ id: string }> }

export default async function EditExperiencePage({ params }: Props) {
  const { id } = await params
  const { data, error } = await getSupabaseAdmin()
    .from('experiences')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) notFound()
  const exp = data as Experience

  async function updateExperience(formData: FormData) {
    'use server'
    const role = formData.get('role') as string
    const company = formData.get('company') as string
    const period = formData.get('period') as string
    const location = formData.get('location') as string
    const summary = formData.get('summary') as string
    const sort_order = parseInt(formData.get('sort_order') as string) || 0
    await adminUpdateExperience(id, {
      role, company, period,
      location: location || null,
      summary: summary || null,
      sort_order,
    })
    redirect('/admin/experiences')
  }

  async function deleteExperience() {
    'use server'
    await adminDeleteExperience(id)
    redirect('/admin/experiences')
  }

  return (
    <div>
      <div className="mb-8">
        <a href="/admin/experiences" className="font-mono text-xs text-[#727785] hover:text-black transition-colors">← BACK</a>
        <h1 className="font-display text-4xl font-extrabold mt-2">EDIT EXPERIENCE</h1>
        <p className="font-mono text-xs text-[#727785] mt-1">{exp.role} — {exp.company}</p>
      </div>

      <div className="max-w-2xl">
        <form action={updateExperience} className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000] space-y-4">
          <Field label="ROLE / POSISI" name="role" defaultValue={exp.role} required />
          <Field label="PERUSAHAAN" name="company" defaultValue={exp.company} required />
          <Field label="PERIODE" name="period" defaultValue={exp.period} required />
          <Field label="LOKASI" name="location" defaultValue={exp.location ?? ''} />
          <div>
            <label className="font-mono text-xs font-bold tracking-widest block mb-2">SUMMARY</label>
            <textarea
              name="summary"
              defaultValue={exp.summary ?? ''}
              rows={4}
              className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none transition-colors resize-y"
            />
          </div>
          <Field label="URUTAN (sort_order)" name="sort_order" type="number" defaultValue={String(exp.sort_order)} />

          <div className="flex gap-4 flex-wrap pt-2">
            <button type="submit" className="font-mono text-sm font-bold bg-[#0058be] text-white px-8 py-4 border-[4px] border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              SIMPAN PERUBAHAN
            </button>
            <a href="/admin/experiences" className="font-mono text-sm font-bold bg-white text-black px-8 py-4 border-[4px] border-black hover:bg-[#f3f3f3] transition-colors">
              BATAL
            </a>
            <form action={deleteExperience} className="ml-auto">
              <ConfirmButton message="Hapus experience ini secara permanen?" className="font-mono text-sm font-bold bg-white text-[#ba1a1a] px-8 py-4 border-[4px] border-[#ba1a1a] hover:bg-[#ffdad6] transition-colors">
                HAPUS
              </ConfirmButton>
            </form>
          </div>
        </form>
      </div>
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
