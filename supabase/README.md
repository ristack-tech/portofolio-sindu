# Supabase — Pintu Masuk

Folder ini berisi SQL + template env untuk setup Supabase sebagai backend portofolio.

## Isi Folder

| File | Fungsi |
|---|---|
| `schema.sql` | CREATE TABLE (8 tabel) + Row Level Security + indexes. **Jalankan 1x.** |
| `seed.sql` | INSERT data awal (settings, stats, skills, experiences, projects). **Jalankan setelah schema.sql.** |
| `verify.sql` | Test RLS + cek row counts + cek relasi. **Jalankan setelah seed.sql untuk verifikasi.** |
| `reset.sql` | DROP semua tabel. ⚠️ Hapus semua data. **Hanya kalau mau mulai ulang.** |
| `.env.example` | Template env vars untuk `.env` lokal. Aman di-commit. |

## Env Vars (Sesuaikan dengan `.env` lokal Anda)

Catatan penting: di Astro, env var yang dipakai di client **WAJIB** prefix `PUBLIC_`. Env var tanpa prefix hanya tersedia di server-side (build time & SSR routes).

| Nama env | Aman untuk client? | Sumber |
|---|---|---|
| `SUPABASE_URL` | (alias — sama dengan `PUBLIC_SUPABASE_URL`) | Supabase → Settings → API → Project URL |
| `SUPABASE_ANON_KEY` | (alias — sama dengan `PUBLIC_SUPABASE_ANON_KEY`) | Supabase → Settings → API → anon public |
| `SUPABASE_SERVICE_ROLE_KEY` | ❌ Server-side only (JANGAN prefix `PUBLIC_`) | Supabase → Settings → API → service_role |
| `PUBLIC_SUPABASE_URL` | ✅ Ya (RLS tetap enforce) | (sama dengan `SUPABASE_URL`) |
| `PUBLIC_SUPABASE_ANON_KEY` | ✅ Ya (RLS tetap enforce) | (sama dengan `SUPABASE_ANON_KEY`) |
| `VERCEL_DEPLOY_HOOK_URL` | ❌ Server-side only | Vercel → Settings → Git → Deploy Hooks |

**Setup `.env` lokal** (di root repo, bukan di folder ini):

```bash
PUBLIC_SUPABASE_URL=https://olcwqaxaeapcrrbfcidv.supabase.co
PUBLIC_SUPABASE_ANON_KEY=sb_publishable_yr2iVnTiwU6mmnEEMjiO9A_JnO-fBaQ
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VERCEL_DEPLOY_HOOK_URL=  # kosong dulu, isi setelah Vercel setup
```

(Gunakan URL & key Anda sendiri — contoh di atas hanya untuk referensi.)

## Quick Start

1. Buka https://supabase.com/dashboard → pastikan project `sinduaditya-porto` **Active**
2. Sidebar → **SQL Editor** → **New query** → copy-paste `schema.sql` → **Run**
   - Harusnya: "Success. No rows returned"
3. SQL Editor → **New query** (tab baru) → copy-paste `seed.sql` → **Run**
4. SQL Editor → **New query** → copy-paste `verify.sql` → **Run** untuk cek hasil
5. Sidebar → **Authentication** → **Users** → **Add user** → **Create new user**:
   - Email: email pribadi Anda
   - Password: generate strong (min 12 char)
   - **Auto Confirm User: ON**
6. Buat `.env` di root repo (lihat section di atas) → `npm run dev` → cek homepage pakai data Supabase

Detail lengkap + troubleshooting lihat **`docs/SUPABASE_SETUP.md`**.

## Tabel (8)

- `site_settings` — Hero/About/Contact text, SEO default, social links, **foto Hero + foto About**
- `site_stats` — Hero stats
- `skill_categories` + `skills` — Skills section
- `projects` + `project_details` — Portfolio projects (dengan **foto cover**)
- `experiences` — Experience timeline
- `contact_messages` — Contact form inbox

## Urutan Eksekusi SQL

1. `schema.sql` — bikin 8 tabel + RLS
2. `seed.sql` — isi data awal
3. `verify.sql` — cek row counts + RLS bekerja
4. (Opsional, kalau perlu reset) `reset.sql` — hapus semua, lalu re-run schema + seed

## ⚠️ Jangan Edit Sembarangan

- Schema = single source of truth untuk struktur database
- Edit hanya kalau menambah entity baru atau refactor besar
- Kalau salah edit, jalankan `reset.sql` lalu re-run `schema.sql` + `seed.sql`
- File `.env` JANGAN di-commit (sudah di `.gitignore`)