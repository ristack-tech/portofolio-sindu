import { adminCreateProject, adminUploadFile } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export default function NewProjectPage() {
  async function createProject(formData: FormData) {
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

    let cover_image_url: string | null = null
    const coverFile = formData.get('cover_image') as File
    if (coverFile && coverFile.size > 0) {
      const { url } = await adminUploadFile(`projects/${Date.now()}-cover`, coverFile)
      cover_image_url = url
    }

    await adminCreateProject(
      { slug, title, client, year: year ? parseInt(year) : null, role, description, problem, outcome, tags, cover_initial, cover_image_url, published },
      { problem_full: problemFull, role_full: roleFull, solution, features, tech_stack: techStack, outcome_full: outcomeFull }
    )
    redirect('/admin/projects')
  }

  return (
    <div>
      <div className="mb-8">
        <a href="/admin/projects" className="font-mono text-xs text-[#727785] hover:text-black transition-colors">← BACK</a>
        <h1 className="font-display text-4xl font-extrabold mt-2">TAMBAH PROJECT</h1>
      </div>

      <form action={createProject} encType="multipart/form-data" className="space-y-8">
        <ProjectFormFields />
        <div className="flex gap-4">
          <button type="submit" className="font-mono text-sm font-bold bg-[#0058be] text-white px-8 py-4 border-[4px] border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
            SIMPAN PROJECT
          </button>
          <a href="/admin/projects" className="font-mono text-sm font-bold bg-white text-black px-8 py-4 border-[4px] border-black hover:bg-[#f3f3f3] transition-colors">
            BATAL
          </a>
        </div>
      </form>
    </div>
  )
}

function ProjectFormFields({ defaultValues }: { defaultValues?: Record<string, string> }) {
  return (
    <>
      <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
        <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b-[2px] border-black">INFO DASAR</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="SLUG" name="slug" placeholder="fleettrack" defaultValue={defaultValues?.slug} required />
          <Field label="JUDUL" name="title" placeholder="FleetTrack" defaultValue={defaultValues?.title} required />
          <Field label="CLIENT" name="client" placeholder="Lab IoT Nexa" defaultValue={defaultValues?.client} />
          <Field label="TAHUN" name="year" type="number" placeholder="2025" defaultValue={defaultValues?.year} />
          <Field label="ROLE" name="role" placeholder="Backend Engineer" defaultValue={defaultValues?.role} />
          <Field label="TAGS (pisah koma)" name="tags" placeholder="LARAVEL, MQTT, IOT" defaultValue={defaultValues?.tags} />
          <Field label="INISIAL COVER (1-2 huruf)" name="cover_initial" placeholder="F" defaultValue={defaultValues?.cover_initial} />
        </div>
        <div className="mt-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" name="published" defaultChecked={defaultValues?.published === 'true'} className="w-5 h-5 border-[2px] border-black" />
            <span className="font-mono text-xs font-bold">PUBLISHED</span>
          </label>
        </div>
      </div>

      <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
        <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b-[2px] border-black">FOTO COVER</h2>
        <div>
          <label className="font-mono text-xs font-bold tracking-widest block mb-2">UPLOAD GAMBAR (opsional)</label>
          <input
            type="file"
            name="cover_image"
            accept="image/*"
            className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm file:font-mono file:text-xs file:font-bold file:mr-4 file:border-[2px] file:border-black file:px-3 file:py-1 file:bg-black file:text-white file:cursor-pointer"
          />
          <p className="font-mono text-xs text-[#727785] mt-2">Kalau tidak di-upload, akan tampil inisial cover sebagai placeholder.</p>
        </div>
      </div>

      <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
        <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b-[2px] border-black">KONTEN SINGKAT (untuk list)</h2>
        <div className="space-y-6">
          <Textarea label="DESKRIPSI SINGKAT" name="description" placeholder="ERP modular berbasis Laravel..." defaultValue={defaultValues?.description} rows={2} />
          <Textarea label="MASALAH (singkat)" name="problem" placeholder="Lini produksi masih jalan di atas kertas..." defaultValue={defaultValues?.problem} rows={2} />
          <Textarea label="HASIL (singkat)" name="outcome" placeholder="ERP modular 4-modul yang dipakai tim operasional setiap hari." defaultValue={defaultValues?.outcome} rows={2} />
        </div>
      </div>

      <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
        <h2 className="font-display text-xl font-bold mb-6 pb-3 border-b-[2px] border-black">KONTEN DETAIL (untuk halaman project)</h2>
        <div className="space-y-6">
          <Textarea label="MASALAH (panjang)" name="problem_full" placeholder="Penjelasan masalah lengkap..." defaultValue={defaultValues?.problem_full} rows={4} />
          <Textarea label="PERAN SAYA (panjang)" name="role_full" placeholder="Penjelasan peran lengkap..." defaultValue={defaultValues?.role_full} rows={3} />
          <Textarea label="SOLUSI" name="solution" placeholder="Penjelasan solusi lengkap..." defaultValue={defaultValues?.solution} rows={4} />
          <Textarea label="FITUR (satu per baris)" name="features" placeholder={"Fitur 1\nFitur 2\nFitur 3"} defaultValue={defaultValues?.features} rows={5} />
          <Field label="TECH STACK (pisah koma)" name="tech_stack" placeholder="Laravel, MySQL, MQTT" defaultValue={defaultValues?.tech_stack} />
          <Textarea label="HASIL (panjang)" name="outcome_full" placeholder="Penjelasan hasil lengkap..." defaultValue={defaultValues?.outcome_full} rows={3} />
        </div>
      </div>
    </>
  )
}

function Field({ label, name, placeholder, defaultValue, type = 'text', required }: {
  label: string; name: string; placeholder?: string; defaultValue?: string; type?: string; required?: boolean
}) {
  return (
    <div>
      <label className="font-mono text-xs font-bold tracking-widest block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm text-[#1a1c1c] focus:border-[#0058be] focus:outline-none transition-colors"
      />
    </div>
  )
}

function Textarea({ label, name, placeholder, defaultValue, rows = 3 }: {
  label: string; name: string; placeholder?: string; defaultValue?: string; rows?: number
}) {
  return (
    <div>
      <label className="font-mono text-xs font-bold tracking-widest block mb-2">{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={rows}
        className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm text-[#1a1c1c] focus:border-[#0058be] focus:outline-none transition-colors resize-y"
      />
    </div>
  )
}
