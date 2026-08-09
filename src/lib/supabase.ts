/**
 * Supabase client + helpers untuk portfolio Sindu Aditya.
 *
 * Dua client:
 * - getSupabase()      → anon key (NEXT_PUBLIC_SUPABASE_ANON_KEY), RLS enforce
 * - getSupabaseAdmin() → service_role key (SUPABASE_SERVICE_ROLE_KEY), bypass RLS
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// ============================================================
// CLIENT INSTANCES (singleton, lazy init)
// ============================================================

let _anon: SupabaseClient | null = null;
let _admin: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_anon) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      throw new Error(
        "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in env."
      );
    }
    _anon = createClient(url, key, {
      auth: { persistSession: false },
    });
  }
  return _anon;
}

export function getSupabaseAdmin(): SupabaseClient {
  if (!_admin) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      throw new Error(
        "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in env."
      );
    }
    _admin = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return _admin;
}

// ============================================================
// TYPES — match schema in supabase/schema.sql
// ============================================================

export interface SiteSettings {
  id: number;
  full_name: string;
  role_tagline: string;
  hero_badge: string;
  hero_subhead: string;
  hero_photo_url: string | null;
  about_heading: string;
  about_heading_accent: string;
  about_photo_url: string | null;
  about_paragraph_1: string | null;
  about_paragraph_2: string | null;
  about_paragraph_3: string | null;
  contact_heading: string;
  contact_heading_accent: string;
  contact_intro: string | null;
  contact_email: string;
  contact_location: string;
  contact_status_text: string;
  social_linkedin: string | null;
  social_github: string | null;
  social_twitter: string | null;
  seo_default_title: string;
  seo_default_description: string;
  updated_at: string;
}

export interface SiteStat {
  id: string;
  value: string;
  label: string;
  sort_order: number;
  created_at: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  sort_order: number;
  skills?: Skill[];
}

export interface Skill {
  id: string;
  category_id: string;
  name: string;
  sort_order: number;
}

export interface SkillGrouped {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string | null;
  description: string | null;
  problem: string | null;
  outcome: string | null;
  role: string | null;
  year: number | null;
  tags: string[];
  cover_initial: string | null;
  cover_image_url: string | null;
  sort_order: number;
  published: boolean;
  created_at: string;
  updated_at: string;
  project_details?: ProjectDetail | ProjectDetail[];
}

export interface ProjectDetail {
  project_id: string;
  problem_full: string | null;
  role_full: string | null;
  solution: string | null;
  features: string[];
  tech_stack: string[];
  outcome_full: string | null;
  updated_at: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string | null;
  summary: string | null;
  sort_order: number;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  read: boolean;
  created_at: string;
}

// ============================================================
// READ HELPERS (pakai anon client, RLS enforce)
// Dipanggil dari frontmatter .astro saat build
// ============================================================

export async function getSiteSettings(): Promise<SiteSettings> {
  const { data, error } = await getSupabase()
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();
  if (error) throw error;
  return data as SiteSettings;
}

export async function getSiteStats(): Promise<SiteStat[]> {
  const { data, error } = await getSupabase()
    .from("site_stats")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as SiteStat[];
}

export async function getSkillsGrouped(): Promise<SkillGrouped[]> {
  const { data, error } = await getSupabase()
    .from("skill_categories")
    .select("id, category, sort_order, skills(id, name, sort_order)")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return ((data ?? []) as Array<SkillCategory>).map((c) => ({
    category: c.category,
    items: ((c.skills ?? []) as Skill[])
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((s) => s.name),
  }));
}

export async function getExperiences(): Promise<Experience[]> {
  const { data, error } = await getSupabase()
    .from("experiences")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as Experience[];
}

export async function getPublishedProjects(): Promise<Project[]> {
  const { data, error } = await getSupabase()
    .from("projects")
    .select("*, project_details(*)")
    .eq("published", true)
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as Project[];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await getSupabase()
    .from("projects")
    .select("*, project_details(*)")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error) throw error;
  return (data as Project | null) ?? null;
}

export async function getAllPublishedSlugs(): Promise<string[]> {
  const { data, error } = await getSupabase()
    .from("projects")
    .select("slug")
    .eq("published", true);
  if (error) throw error;
  return (data ?? []).map((p: { slug: string }) => p.slug);
}

// ============================================================
// ADMIN READ HELPERS (untuk /admin/* pages)
// ============================================================

export async function adminGetAllProjects(): Promise<Project[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("projects")
    .select("*, project_details(*)")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as Project[];
}

export async function adminGetProjectById(id: string): Promise<Project | null> {
  const { data, error } = await getSupabaseAdmin()
    .from("projects")
    .select("*, project_details(*)")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return (data as Project | null) ?? null;
}

export async function adminGetMessages(): Promise<ContactMessage[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as ContactMessage[];
}

// ============================================================
// ADMIN WRITE HELPERS (untuk /api/admin/* endpoints)
// Pattern: selalu return { data, error } untuk caller handling
// ============================================================

export async function adminUpdateSiteSettings(
  payload: Partial<SiteSettings>
): Promise<{ data: SiteSettings | null; error: string | null }> {
  const { data, error } = await getSupabaseAdmin()
    .from("site_settings")
    .update(payload)
    .eq("id", 1)
    .select()
    .single();
  if (error) return { data: null, error: error.message };
  return { data: data as SiteSettings, error: null };
}

// --- site_stats ---

export async function adminCreateStat(
  payload: Omit<SiteStat, "id" | "created_at">
): Promise<{ data: SiteStat | null; error: string | null }> {
  const { data, error } = await getSupabaseAdmin()
    .from("site_stats")
    .insert(payload)
    .select()
    .single();
  if (error) return { data: null, error: error.message };
  return { data: data as SiteStat, error: null };
}

export async function adminDeleteStat(
  id: string
): Promise<{ error: string | null }> {
  const { error } = await getSupabaseAdmin()
    .from("site_stats")
    .delete()
    .eq("id", id);
  if (error) return { error: error.message };
  return { error: null };
}

// --- skill_categories + skills ---

export async function adminCreateSkillCategory(
  category: string,
  sort_order = 0
): Promise<{ data: SkillCategory | null; error: string | null }> {
  const { data, error } = await getSupabaseAdmin()
    .from("skill_categories")
    .insert({ category, sort_order })
    .select()
    .single();
  if (error) return { data: null, error: error.message };
  return { data: data as SkillCategory, error: null };
}

export async function adminUpdateSkillCategory(
  id: string,
  payload: { category?: string; sort_order?: number }
): Promise<{ error: string | null }> {
  const { error } = await getSupabaseAdmin()
    .from("skill_categories")
    .update(payload)
    .eq("id", id);
  if (error) return { error: error.message };
  return { error: null };
}

export async function adminDeleteSkillCategory(
  id: string
): Promise<{ error: string | null }> {
  // CASCADE: skills ikut terhapus otomatis
  const { error } = await getSupabaseAdmin()
    .from("skill_categories")
    .delete()
    .eq("id", id);
  if (error) return { error: error.message };
  return { error: null };
}

export async function adminCreateSkill(
  category_id: string,
  name: string,
  sort_order = 0
): Promise<{ data: Skill | null; error: string | null }> {
  const { data, error } = await getSupabaseAdmin()
    .from("skills")
    .insert({ category_id, name, sort_order })
    .select()
    .single();
  if (error) return { data: null, error: error.message };
  return { data: data as Skill, error: null };
}

export async function adminDeleteSkill(
  id: string
): Promise<{ error: string | null }> {
  const { error } = await getSupabaseAdmin()
    .from("skills")
    .delete()
    .eq("id", id);
  if (error) return { error: error.message };
  return { error: null };
}

// --- experiences ---

export async function adminCreateExperience(
  payload: Omit<Experience, "id" | "created_at">
): Promise<{ data: Experience | null; error: string | null }> {
  const { data, error } = await getSupabaseAdmin()
    .from("experiences")
    .insert(payload)
    .select()
    .single();
  if (error) return { data: null, error: error.message };
  return { data: data as Experience, error: null };
}

export async function adminUpdateExperience(
  id: string,
  payload: Partial<Omit<Experience, "id" | "created_at">>
): Promise<{ data: Experience | null; error: string | null }> {
  const { data, error } = await getSupabaseAdmin()
    .from("experiences")
    .update(payload)
    .eq("id", id)
    .select()
    .single();
  if (error) return { data: null, error: error.message };
  return { data: data as Experience, error: null };
}

export async function adminDeleteExperience(
  id: string
): Promise<{ error: string | null }> {
  const { error } = await getSupabaseAdmin()
    .from("experiences")
    .delete()
    .eq("id", id);
  if (error) return { error: error.message };
  return { error: null };
}

// --- projects + project_details (nested 1-to-1) ---

export interface ProjectPayload {
  slug: string;
  title: string;
  client?: string | null;
  description?: string | null;
  problem?: string | null;
  outcome?: string | null;
  role?: string | null;
  year?: number | null;
  tags?: string[];
  cover_initial?: string | null;
  cover_image_url?: string | null;
  sort_order?: number;
  published?: boolean;
}

export interface ProjectDetailsPayload {
  problem_full?: string | null;
  role_full?: string | null;
  solution?: string | null;
  features?: string[];
  tech_stack?: string[];
  outcome_full?: string | null;
}

export async function adminCreateProject(
  project: ProjectPayload,
  details: ProjectDetailsPayload = {}
): Promise<{ data: Project | null; error: string | null }> {
  const supabase = getSupabaseAdmin();

  const { data: projectRow, error } = await supabase
    .from("projects")
    .insert(project)
    .select()
    .single();
  if (error || !projectRow) {
    return { data: null, error: error?.message ?? "Insert project failed" };
  }

  // Insert nested project_details (1-to-1)
  const { error: detailError } = await supabase
    .from("project_details")
    .insert({ project_id: projectRow.id, ...details });
  if (detailError) {
    // Rollback project insert kalau details gagal (best effort)
    await supabase.from("projects").delete().eq("id", projectRow.id);
    return { data: null, error: detailError.message };
  }

  return { data: projectRow as Project, error: null };
}

export async function adminUpdateProject(
  id: string,
  project: ProjectPayload,
  details: ProjectDetailsPayload = {}
): Promise<{ data: Project | null; error: string | null }> {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("projects")
    .update(project)
    .eq("id", id)
    .select()
    .single();
  if (error) return { data: null, error: error.message };

  // Upsert project_details (1-to-1)
  const { error: detailError } = await supabase
    .from("project_details")
    .upsert({ project_id: id, ...details });
  if (detailError) return { data: null, error: detailError.message };

  return { data: data as Project, error: null };
}

export async function adminDeleteProject(
  id: string
): Promise<{ error: string | null }> {
  // CASCADE: project_details ikut terhapus otomatis (FK)
  const { error } = await getSupabaseAdmin()
    .from("projects")
    .delete()
    .eq("id", id);
  if (error) return { error: error.message };
  return { error: null };
}

// --- contact_messages ---

export async function adminMarkMessageRead(
  id: string,
  read: boolean
): Promise<{ error: string | null }> {
  const { error } = await getSupabaseAdmin()
    .from("contact_messages")
    .update({ read })
    .eq("id", id);
  if (error) return { error: error.message };
  return { error: null };
}

export async function adminDeleteMessage(
  id: string
): Promise<{ error: string | null }> {
  const { error } = await getSupabaseAdmin()
    .from("contact_messages")
    .delete()
    .eq("id", id);
  if (error) return { error: error.message };
  return { error: null };
}

// ============================================================
// PUBLIC WRITE: contact form submission (anon allowed via RLS)
// ============================================================

export async function submitContactMessage(payload: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}): Promise<{ error: string | null }> {
  const { error } = await getSupabase()
    .from("contact_messages")
    .insert({
      name: payload.name,
      email: payload.email,
      subject: payload.subject ?? null,
      message: payload.message,
      read: false,
    });
  if (error) return { error: error.message };
  return { error: null };
}

// ============================================================
// VERCEL DEPLOY HOOK — trigger rebuild setelah admin write
// ============================================================

/**
 * Hit Vercel Deploy Hook URL untuk trigger rebuild otomatis.
 * Dipanggil dari API handlers setelah write berhasil.
 * Kalau URL tidak di-set (development), no-op.
 */
export async function triggerVercelDeploy(): Promise<{
  ok: boolean;
  error: string | null;
}> {
  const url = process.env.VERCEL_DEPLOY_HOOK_URL;
  if (!url) {
    return { ok: false, error: "VERCEL_DEPLOY_HOOK_URL not set (dev mode)" };
  }
  try {
    const res = await fetch(url, { method: "POST" });
    if (!res.ok) {
      return { ok: false, error: `Deploy hook returned ${res.status}` };
    }
    return { ok: true, error: null };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return { ok: false, error: msg };
  }
}

// ============================================================
// ADMIN STORAGE HELPERS (Supabase Storage bucket: 'portfolio')
// ============================================================

export async function adminUploadFile(
  path: string,
  file: File
): Promise<{ url: string | null; error: string | null }> {
  const ext = (file.name.split('.').pop() ?? 'jpg').toLowerCase()
  const fullPath = `${path}.${ext}`
  const { error } = await getSupabaseAdmin()
    .storage
    .from('portfolio')
    .upload(fullPath, file, { upsert: true, contentType: file.type })
  if (error) return { url: null, error: error.message }
  const { data } = getSupabaseAdmin().storage.from('portfolio').getPublicUrl(fullPath)
  return { url: data.publicUrl, error: null }
}

export async function adminDeleteFile(path: string): Promise<void> {
  await getSupabaseAdmin().storage.from('portfolio').remove([path])
}

export async function adminUpdateSkill(
  id: string,
  payload: { name?: string; sort_order?: number }
): Promise<{ error: string | null }> {
  const { error } = await getSupabaseAdmin()
    .from('skills')
    .update(payload)
    .eq('id', id)
  if (error) return { error: error.message }
  return { error: null }
}