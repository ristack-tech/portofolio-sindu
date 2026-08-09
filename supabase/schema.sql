-- ============================================================
-- Supabase Schema — Sindu Aditya Portfolio
-- ============================================================
-- 8 tabel + Row Level Security + indexes
-- Jalankan SATU KALI di Supabase SQL Editor (New Query → Run)
-- Urutan: schema.sql → seed.sql → verify.sql (opsional)
-- ============================================================

-- ============================================================
-- EXTENSION (untuk gen_random_uuid())
-- ============================================================
create extension if not exists "pgcrypto";

-- ============================================================
-- TABLE: site_settings (singleton, 1 row)
-- ============================================================
create table if not exists site_settings (
  id int primary key default 1,
  full_name text not null default 'Sindu Aditya Janadi',
  role_tagline text default 'Backend Engineer & Technical Project Lead',
  hero_badge text default 'BACKEND ENGINEER · TECHNICAL PROJECT LEAD',
  hero_subhead text default 'Saya backend engineer yang merancang arsitektur, memimpin tim, dan mengirim produk dari sketsa sampai live di produksi — ERP manufaktur, fleet IoT, sampai sistem multi-tenant yang dipakai tim operasional setiap hari.',
  hero_photo_url text default '/hero-photo.jpg',
  about_heading text default 'Backend engineer yang memimpin',
  about_heading_accent text default 'dari sketsa sampai live di produksi.',
  about_photo_url text default '/about-photo.jpg',
  about_paragraph_1 text,
  about_paragraph_2 text,
  about_paragraph_3 text,
  contact_heading text default 'Punya masalah operasional',
  contact_heading_accent text default 'yang butuh dipecahkan?',
  contact_intro text,
  contact_email text default 'nduujanadi51@gmail.com',
  contact_location text default 'Semarang, Indonesia',
  contact_status_text text default 'TERSEDIA UNTUK KOLABORASI BARU',
  social_linkedin text default 'https://linkedin.com/in/sinduaditya',
  social_github text default 'https://github.com/sinduadityajanadi',
  social_twitter text,
  seo_default_title text default 'Sindu Aditya — Backend Engineer & Technical Project Lead',
  seo_default_description text default 'Backend engineer & technical project lead. I design business solutions that deliver impact — ERP manufacturing, fleet IoT, and multi-tenant systems shipped to production.',
  updated_at timestamptz default now(),
  constraint only_one_row check (id = 1)
);

insert into site_settings (id) values (1) on conflict do nothing;

-- ============================================================
-- TABLE: site_stats (Hero stats)
-- ============================================================
create table if not exists site_stats (
  id uuid primary key default gen_random_uuid(),
  value text not null,
  label text not null,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- ============================================================
-- TABLE: skill_categories + skills
-- ============================================================
create table if not exists skill_categories (
  id uuid primary key default gen_random_uuid(),
  category text not null unique,
  sort_order int default 0
);

create table if not exists skills (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references skill_categories(id) on delete cascade,
  name text not null,
  sort_order int default 0
);

create index if not exists skills_category_idx on skills (category_id, sort_order);

-- ============================================================
-- TABLE: projects + project_details (1-to-1)
-- ============================================================
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  client text,
  description text,
  problem text,
  outcome text,
  role text,
  year int,
  tags text[] default '{}',
  cover_initial text,
  cover_image_url text default '/project-default.jpg',
  sort_order int default 0,
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists project_details (
  project_id uuid primary key references projects(id) on delete cascade,
  problem_full text,
  role_full text,
  solution text,
  features text[] default '{}',
  tech_stack text[] default '{}',
  outcome_full text,
  updated_at timestamptz default now()
);

create index if not exists projects_published_sort_idx on projects (published, sort_order);
create index if not exists projects_slug_idx on projects (slug);

-- ============================================================
-- TABLE: experiences
-- ============================================================
create table if not exists experiences (
  id uuid primary key default gen_random_uuid(),
  role text not null,
  company text not null,
  period text not null,
  location text,
  summary text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create index if not exists experiences_sort_idx on experiences (sort_order);

-- ============================================================
-- TABLE: contact_messages (inbox dari form publik)
-- ============================================================
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  read boolean default false,
  created_at timestamptz default now()
);

create index if not exists contact_unread_idx on contact_messages (read, created_at desc);

-- ============================================================
-- ROW LEVEL SECURITY (aktifkan di semua tabel)
-- ============================================================
alter table site_settings enable row level security;
alter table site_stats enable row level security;
alter table skill_categories enable row level security;
alter table skills enable row level security;
alter table projects enable row level security;
alter table project_details enable row level security;
alter table experiences enable row level security;
alter table contact_messages enable row level security;

-- ============================================================
-- PUBLIC READ POLICIES (anon boleh SELECT)
-- ============================================================
drop policy if exists "public read site_settings" on site_settings;
create policy "public read site_settings" on site_settings for select using (true);

drop policy if exists "public read site_stats" on site_stats;
create policy "public read site_stats" on site_stats for select using (true);

drop policy if exists "public read skill_categories" on skill_categories;
create policy "public read skill_categories" on skill_categories for select using (true);

drop policy if exists "public read skills" on skills;
create policy "public read skills" on skills for select using (true);

drop policy if exists "public read projects" on projects;
create policy "public read projects" on projects for select using (published = true);

drop policy if exists "public read project_details" on project_details;
create policy "public read project_details" on project_details for select using (
  exists (select 1 from projects p where p.id = project_details.project_id and p.published = true)
);

drop policy if exists "public read experiences" on experiences;
create policy "public read experiences" on experiences for select using (true);

-- ============================================================
-- ADMIN WRITE POLICIES (authenticated boleh ALL operations)
-- ============================================================
drop policy if exists "admin write site_settings" on site_settings;
create policy "admin write site_settings" on site_settings for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "admin write site_stats" on site_stats;
create policy "admin write site_stats" on site_stats for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "admin write skill_categories" on skill_categories;
create policy "admin write skill_categories" on skill_categories for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "admin write skills" on skills;
create policy "admin write skills" on skills for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "admin write projects" on projects;
create policy "admin write projects" on projects for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "admin write project_details" on project_details;
create policy "admin write project_details" on project_details for all
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "admin write experiences" on experiences;
create policy "admin write experiences" for all
  on experiences using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- ============================================================
-- CONTACT FORM POLICIES
-- ============================================================
-- anon boleh INSERT (form submit publik)
drop policy if exists "anon insert contact" on contact_messages;
create policy "anon insert contact" on contact_messages for insert
  with check (true);

-- authenticated boleh SELECT (admin inbox)
drop policy if exists "admin read contact" on contact_messages;
create policy "admin read contact" on contact_messages for select
  using (auth.role() = 'authenticated');

-- authenticated boleh UPDATE (mark as read)
drop policy if exists "admin update contact" on contact_messages;
create policy "admin update contact" on contact_messages for update
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- authenticated boleh DELETE (hapus pesan)
drop policy if exists "admin delete contact" on contact_messages;
create policy "admin delete contact" on contact_messages for delete
  using (auth.role() = 'authenticated');