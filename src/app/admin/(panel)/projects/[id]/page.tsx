import { adminGetProjectById, adminUpdateProject, adminDeleteProject, adminUploadFile } from '@/lib/supabase'
import { redirect, notFound } from 'next/navigation'
import type { ProjectDetail } from '@/lib/supabase'
import ConfirmButton from '@/components/admin/ConfirmButton'

type Props = { params: Promise<{ id: string }> }

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params
  const project = await adminGetProjectById(id)
  if (!project) notFound()

  const detail = Array.isArray(project.project_details)
    ? project.project_details[0]
    : project.project_details as ProjectDetail | undefined

  async function updateProject(formData: FormData) {
    'use server'
    const slug = formData.get('slug') as string
    const title = formData.get('title') as string
    const client = formData.get('client') as string
    const year = formData.get('year') as string
    const role = formData.get('role') as string
    const description = formData.get('description') as string
    const problem = formData.get('problem') as string
    const outcome = formData.get('outcome') as string
    const tagsRaw = formData.get('tags') as string
    const published = formData.get('published') === 'on'
    const cover_initial = (formData.get('cover_initial') as string) || null
    const tags = tagsRaw.split(',').map((t) => t.trim()).filter(Boolean)

    const problemFull = formData.get('problem_full') as string
    const roleFull = formData.get('role_full') as string
    const solution = formData.get('solution') as string
    const featuresRaw = formData.get('features') as string
    const techStackRaw = formData.get('tech_stack') as string
    const outcomeFull = formData.get('outcome_full') as string
    const features = featuresRaw.split('\n').map((f) => f.trim()).filter(Boolean)
    const techStack = techStackRaw.split(',').map((t) => t.trim()).filter(Boolean)

    let cover_image_url = project?.cover_image_url ?? null
    const coverFile = formData.get('cover_image') as File
    if (coverFile && coverFile.size > 0) {
      const { url } = await adminUploadFile(`projects/${id}-cover`, coverFile)
      if (url) cover_image_url = url
    }

    await adminUpdateProject(
      id,
      { slug, title, client, year: year ? parseInt(year) : null, role, description, problem, outcome, tags, cover_initial, cover_image_url, published },
      { problem_full: problemFull, role_full: roleFull, solution, features, tech_stack: techStack, outcome_full: outcomeFull }
    )
    redirect('/admin/projects')
  }

  async function deleteProject() {
    'use server'
    await adminDeleteProject(id)
    redirect('/admin/projects')
  }

  const existingCoverUrl = project.cover_image_url?.startsWith('http') ? project.cover_image_url : null

  const dv = {
    slug: project.slug,
    title: project.title,
    client: project.client ?? '',
    year: String(project.year ?? ''),
    role: project.role ?? '',
    description: project.description ?? '',
    problem: project.problem ?? '',
    outcome: project.outcome ?? '',
    tags: (project.tags ?? []).join(', '),
    published: String(project.published),
    cover_initial: project.cover_initial ?? '',
    problem_full: detail?.problem_full ?? '',
    role_full: detail?.role_full ?? '',
    solution: detail?.solution ?? '',
    features: (detail?.features ?? []).join('\n'),
    tech_stack: (detail?.tech_stack ?? []).join(', '),
    outcome_full: detail?.outcome_full ?? '',
  }

  return (
    <div>
      <div className="mb-8">
        <a href="/admin/projects" className="font-mono text-xs text-[#727785] hover:text-black transition-colors">← BACK</a>
        <h1 className="font-display text-4xl font-extrabold mt-2">EDIT PROJECT</h1>
        <p className="font-mono text-xs text-[#727785] mt-1">{project.title}</p>
      </div>

      <form action={updateProject} encType="multipart/form-data" className="space-y-8">
        <ProjectFormSections defaultValues={dv} existingCoverUrl={existingCoverUrl} />
        <div className="flex gap-4 flex-wrap">
          <button type="submit" className="font-mono text-sm font-bold bg-[#0058be] text-white px-8 py-4 border-[4px] border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
            SIMPAN PERUBAHAN
          </button>
          <a href="/admin/projects" className="font-mono text-sm font-bold bg-white text-black px-8 py-4 border-[4px] border-black hover:bg-[#f3f3f3] transition-colors">
            BATAL
          </a>
          <form action={deleteProject} className="ml-auto">
            <ConfirmButton message="Hapus project ini secara permanen?" className="font-mono text-sm font-bold bg-white text-[#ba1a1a] px-8 py-4 border-[4px] border-[#ba1a1a] hover:bg-[#ffdad6] transition-colors">
              HAPUS PROJECT
            </ConfirmButton>
          </form>
        </div>
      </form>
    </div>
  )
}

function ProjectFormSections({ defaultValues, existingCoverUrl }: { defaultValues: Record<string, string>; existingCoverUrl: string | null }) {
  return (
    <>
      <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
        <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b-[2px] border-black">INFO DASAR</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="SLUG" name="slug" defaultValue={defaultValues.slug} required />
          <Field label="JUDUL" name="title" defaultValue={defaultValues.title} required />
          <Field label="CLIENT" name="client" defaultValue={defaultValues.client} />
          <Field label="TAHUN" name="year" type="number" defaultValue={defaultValues.year} />
          <Field label="ROLE" name="role" defaultValue={defaultValues.role} />
          <Field label="TAGS (pisah koma)" name="tags" defaultValue={defaultValues.tags} />
          <Field label="INISIAL COVER (1-2 huruf)" name="cover_initial" defaultValue={defaultValues.cover_initial} />
        </div>
        <div className="mt-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" name="published" defaultChecked={defaultValues.published === 'true'} className="w-5 h-5 border-[2px] border-black" />
            <span className="font-mono text-xs font-bold">PUBLISHED</span>
          </label>
        </div>
      </div>

      <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
        <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b-[2px] border-black">FOTO COVER</h2>
        {existingCoverUrl && (
          <div className="mb-4">
            <p className="font-mono text-xs text-[#727785] mb-2">Foto saat ini:</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={existingCoverUrl} alt="Cover" className="h-32 border-[2px] border-black object-cover" />
          </div>
        )}
        <div>
          <label className="font-mono text-xs font-bold tracking-widest block mb-2">GANTI FOTO (opsional — kosongkan untuk keep foto lama)</label>
          <input
            type="file"
            name="cover_image"
            accept="image/*"
            className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm file:font-mono file:text-xs file:font-bold file:mr-4 file:border-[2px] file:border-black file:px-3 file:py-1 file:bg-black file:text-white file:cursor-pointer"
          />
        </div>
      </div>

      <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
        <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b-[2px] border-black">KONTEN SINGKAT</h2>
        <div className="space-y-6">
          <Textarea label="DESKRIPSI SINGKAT" name="description" defaultValue={defaultValues.description} rows={2} />
          <Textarea label="MASALAH (singkat)" name="problem" defaultValue={defaultValues.problem} rows={2} />
          <Textarea label="HASIL (singkat)" name="outcome" defaultValue={defaultValues.outcome} rows={2} />
        </div>
      </div>

      <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
        <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b-[2px] border-black">KONTEN DETAIL</h2>
        <div className="space-y-6">
          <Textarea label="MASALAH (panjang)" name="problem_full" defaultValue={defaultValues.problem_full} rows={4} />
          <Textarea label="PERAN SAYA (panjang)" name="role_full" defaultValue={defaultValues.role_full} rows={3} />
          <Textarea label="SOLUSI" name="solution" defaultValue={defaultValues.solution} rows={4} />
          <Textarea label="FITUR (satu per baris)" name="features" defaultValue={defaultValues.features} rows={5} />
          <Field label="TECH STACK (pisah koma)" name="tech_stack" defaultValue={defaultValues.tech_stack} />
          <Textarea label="HASIL (panjang)" name="outcome_full" defaultValue={defaultValues.outcome_full} rows={3} />
        </div>
      </div>
    </>
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
        className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm text-[#1a1c1c] focus:border-[#0058be] focus:outline-none transition-colors"
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
        className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm text-[#1a1c1c] focus:border-[#0058be] focus:outline-none transition-colors resize-y"
      />
    </div>
  )
}
