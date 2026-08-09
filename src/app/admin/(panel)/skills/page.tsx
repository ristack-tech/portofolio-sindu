import { getSupabaseAdmin } from '@/lib/supabase'
import type { SkillCategory, Skill } from '@/lib/supabase'
import {
  adminCreateSkillCategory, adminUpdateSkillCategory, adminDeleteSkillCategory,
  adminCreateSkill, adminUpdateSkill, adminDeleteSkill,
} from '@/lib/supabase'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import ConfirmButton from '@/components/admin/ConfirmButton'

async function getSkillsWithItems(): Promise<SkillCategory[]> {
  const { data, error } = await getSupabaseAdmin()
    .from('skill_categories')
    .select('id, category, sort_order, skills(id, name, sort_order)')
    .order('sort_order', { ascending: true })
  if (error) return []
  return (data ?? []) as SkillCategory[]
}

type Props = { searchParams: Promise<{ editCat?: string; editSkill?: string }> }

export default async function AdminSkillsPage({ searchParams }: Props) {
  const { editCat, editSkill } = await searchParams
  const categories = await getSkillsWithItems()

  async function createCategory(formData: FormData) {
    'use server'
    const category = formData.get('category') as string
    const sort_order = parseInt(formData.get('sort_order') as string) || 0
    await adminCreateSkillCategory(category, sort_order)
    redirect('/admin/skills')
  }

  async function updateCategory(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    const category = formData.get('category') as string
    const sort_order = parseInt(formData.get('sort_order') as string) || 0
    await adminUpdateSkillCategory(id, { category, sort_order })
    redirect('/admin/skills')
  }

  async function deleteCategory(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await adminDeleteSkillCategory(id)
    redirect('/admin/skills')
  }

  async function createSkill(formData: FormData) {
    'use server'
    const category_id = formData.get('category_id') as string
    const name = formData.get('name') as string
    const sort_order = parseInt(formData.get('sort_order') as string) || 0
    await adminCreateSkill(category_id, name, sort_order)
    redirect('/admin/skills')
  }

  async function updateSkill(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    const name = formData.get('name') as string
    await adminUpdateSkill(id, { name })
    redirect('/admin/skills')
  }

  async function deleteSkill(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await adminDeleteSkill(id)
    redirect('/admin/skills')
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-4xl font-extrabold mb-1">SKILLS</h1>
        <p className="font-mono text-xs text-[#727785]">{categories.length} kategori</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Tambah Kategori */}
        <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000]">
          <h2 className="font-display text-lg font-bold mb-4 pb-2 border-b-[2px] border-black">TAMBAH KATEGORI</h2>
          <form action={createCategory} className="space-y-4">
            <div>
              <label className="font-mono text-xs font-bold tracking-widest block mb-2">NAMA KATEGORI</label>
              <input name="category" required className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="font-mono text-xs font-bold tracking-widest block mb-2">URUTAN</label>
              <input name="sort_order" type="number" defaultValue="0" className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none transition-colors" />
            </div>
            <button type="submit" className="font-mono text-sm font-bold bg-[#0058be] text-white px-6 py-3 border-[4px] border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
              TAMBAH
            </button>
          </form>
        </div>

        {/* Tambah Skill */}
        <div className="bg-white border-[4px] border-black p-6 shadow-[4px_4px_0_0_#000] lg:col-span-2">
          <h2 className="font-display text-lg font-bold mb-4 pb-2 border-b-[2px] border-black">TAMBAH SKILL</h2>
          <form action={createSkill} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="font-mono text-xs font-bold tracking-widest block mb-2">KATEGORI</label>
              <select name="category_id" required className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none transition-colors">
                <option value="">-- pilih --</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-mono text-xs font-bold tracking-widest block mb-2">NAMA SKILL</label>
              <input name="name" required className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="font-mono text-xs font-bold tracking-widest block mb-2">URUTAN</label>
              <input name="sort_order" type="number" defaultValue="0" className="w-full bg-[#f9f9f9] border-[2px] border-black p-3 font-body text-sm focus:border-[#0058be] focus:outline-none transition-colors" />
            </div>
            <div className="sm:col-span-3">
              <button type="submit" className="font-mono text-sm font-bold bg-[#0058be] text-white px-6 py-3 border-[4px] border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                TAMBAH SKILL
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Daftar kategori + skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.length === 0 ? (
          <div className="col-span-full bg-white border-[4px] border-black p-8 text-center shadow-[4px_4px_0_0_#000]">
            <p className="font-body text-[#727785]">Belum ada kategori skill.</p>
          </div>
        ) : categories.map((cat) => (
          <div key={cat.id} className="bg-white border-[4px] border-black shadow-[4px_4px_0_0_#000]">
            {editCat === cat.id ? (
              /* Edit category form */
              <form action={updateCategory} className="p-4 space-y-3 border-b-[2px] border-black">
                <input type="hidden" name="id" value={cat.id} />
                <input
                  name="category"
                  defaultValue={cat.category}
                  required
                  className="w-full bg-[#f9f9f9] border-[2px] border-black p-2 font-display text-sm font-bold focus:border-[#0058be] focus:outline-none"
                />
                <input
                  name="sort_order"
                  type="number"
                  defaultValue={cat.sort_order}
                  className="w-full bg-[#f9f9f9] border-[2px] border-black p-2 font-body text-sm focus:border-[#0058be] focus:outline-none"
                />
                <div className="flex gap-2">
                  <button type="submit" className="font-mono text-xs font-bold bg-[#0058be] text-white px-3 py-1 border-[2px] border-black">SIMPAN</button>
                  <Link href="/admin/skills" className="font-mono text-xs font-bold text-[#727785] px-3 py-1 border-[2px] border-[#727785] hover:bg-[#f3f3f3]">BATAL</Link>
                </div>
              </form>
            ) : (
              <div className="flex justify-between items-center p-4 border-b-[2px] border-black">
                <h3 className="font-display text-base font-bold">{cat.category}</h3>
                <div className="flex gap-2">
                  <Link href={`/admin/skills?editCat=${cat.id}`} className="font-mono text-xs font-bold text-[#0058be] hover:underline">
                    EDIT
                  </Link>
                  <form action={deleteCategory}>
                    <input type="hidden" name="id" value={cat.id} />
                    <ConfirmButton message={`Hapus kategori "${cat.category}" dan semua skillnya?`} className="font-mono text-xs font-bold text-[#ba1a1a] hover:underline">
                      HAPUS
                    </ConfirmButton>
                  </form>
                </div>
              </div>
            )}

            <div className="p-4 space-y-2">
              {((cat.skills ?? []) as Skill[]).sort((a, b) => a.sort_order - b.sort_order).map((skill) => (
                <div key={skill.id}>
                  {editSkill === skill.id ? (
                    <form action={updateSkill} className="flex gap-2">
                      <input type="hidden" name="id" value={skill.id} />
                      <input
                        name="name"
                        defaultValue={skill.name}
                        required
                        className="flex-1 bg-[#f9f9f9] border-[2px] border-black px-2 py-1 font-mono text-xs focus:border-[#0058be] focus:outline-none"
                      />
                      <button type="submit" className="font-mono text-xs font-bold bg-[#0058be] text-white px-2 py-1 border-[2px] border-black">✓</button>
                      <Link href="/admin/skills" className="font-mono text-xs px-2 py-1 border-[2px] border-[#727785] text-[#727785]">×</Link>
                    </form>
                  ) : (
                    <div className="flex justify-between items-center gap-2">
                      <span className="font-mono text-xs border-[2px] border-black px-2 py-1">{skill.name}</span>
                      <div className="flex gap-1">
                        <Link href={`/admin/skills?editSkill=${skill.id}`} className="font-mono text-xs text-[#0058be] hover:underline">edit</Link>
                        <form action={deleteSkill}>
                          <input type="hidden" name="id" value={skill.id} />
                          <button type="submit" className="font-mono text-xs text-[#ba1a1a] hover:underline ml-1">×</button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {((cat.skills ?? []) as Skill[]).length === 0 && (
                <p className="font-mono text-xs text-[#727785]">Belum ada skill.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
