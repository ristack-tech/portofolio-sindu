import Link from 'next/link'
import { adminGetAllProjects, adminDeleteProject } from '@/lib/supabase'
import { redirect } from 'next/navigation'
import ConfirmButton from '@/components/admin/ConfirmButton'

export default async function AdminProjectsPage() {
  const projects = await adminGetAllProjects().catch(() => [])

  async function deleteProject(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await adminDeleteProject(id)
    redirect('/admin/projects')
  }

  return (
    <div>
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="font-display text-4xl font-extrabold mb-1">PROJECTS</h1>
          <p className="font-mono text-xs text-[#727785]">{projects.length} project terdaftar</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="font-mono text-sm font-bold bg-[#0058be] text-white px-6 py-3 border-[4px] border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
        >
          + TAMBAH PROJECT
        </Link>
      </div>

      <div className="bg-white border-[4px] border-black shadow-[4px_4px_0_0_#000]">
        {projects.length === 0 ? (
          <div className="p-8 text-center">
            <p className="font-body text-[#727785]">Belum ada project. Tambah project pertama kamu.</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b-[4px] border-black">
                <th className="text-left font-mono text-xs font-bold tracking-widest p-4">JUDUL</th>
                <th className="text-left font-mono text-xs font-bold tracking-widest p-4">CLIENT</th>
                <th className="text-left font-mono text-xs font-bold tracking-widest p-4">TAHUN</th>
                <th className="text-left font-mono text-xs font-bold tracking-widest p-4">STATUS</th>
                <th className="text-left font-mono text-xs font-bold tracking-widest p-4">AKSI</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => (
                <tr key={project.id} className={i < projects.length - 1 ? 'border-b-[2px] border-black' : ''}>
                  <td className="p-4 font-body font-medium">{project.title}</td>
                  <td className="p-4 font-mono text-xs text-[#727785]">{project.client ?? '—'}</td>
                  <td className="p-4 font-mono text-xs text-[#727785]">{project.year ?? '—'}</td>
                  <td className="p-4">
                    <span className={`font-mono text-xs px-2 py-1 border-[2px] ${project.published ? 'bg-[#d8e2ff] text-[#001a42] border-black' : 'bg-[#e8e8e8] text-[#727785] border-[#727785]'}`}>
                      {project.published ? 'PUBLISHED' : 'DRAFT'}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Link href={`/admin/projects/${project.id}`} className="font-mono text-xs font-bold text-[#0058be] hover:underline">
                        EDIT
                      </Link>
                      <form action={deleteProject}>
                        <input type="hidden" name="id" value={project.id} />
                        <ConfirmButton message="Hapus project ini?" className="font-mono text-xs font-bold text-[#ba1a1a] hover:underline">
                          HAPUS
                        </ConfirmButton>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
