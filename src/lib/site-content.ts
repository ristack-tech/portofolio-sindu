/**
 * Konten statis portfolio Sindu Aditya - full hardcode, tanpa database/admin panel.
 * Edit langsung di sini kalau ada perubahan konten.
 */

export const SITE = {
  fullName: 'Sindu Aditya Janadi',
  heroBadge: 'BACKEND ENGINEER · TECHNICAL PROJECT LEAD',
  heroSubhead:
    'Saya backend engineer yang merancang arsitektur, memimpin tim, dan mengirim produk dari sketsa sampai live di produksi - ERP manufaktur, fleet IoT, sampai sistem multi-tenant yang dipakai tim operasional setiap hari.',
  location: 'SEMARANG, INDONESIA',

  aboutHeading: 'Backend engineer yang memimpin',
  aboutHeadingAccent: 'dari sketsa sampai live di produksi.',
  aboutParagraphs: [
    'Perjalanan saya dimulai dari SMK Rekayasa Perangkat Lunak, lalu berlanjut ke bangku kuliah Teknik Informatika sambil terus cari pengalaman nyata lewat magang, organisasi, dan proyek klien. Dari situ saya belajar bahwa kode yang sekadar jalan belum tentu kode yang benar, harus dipikirkan sampai ke arsitektur dan skalanya.',
    'Sejak 2022 saya magang sebagai Laravel developer, lalu terus memimpin tim di HMTI UDINUS dan Klora, sampai akhirnya mengawal delivery produk nyata di Bengkel Koding dan RISTACK. Dua yang paling saya banggakan: ERP modular untuk lini produksi manufaktur, dan sistem fleet IoT dengan MQTT yang dipakai tim operasional setiap hari.',
    'Backend saya pilih karena di sanalah keputusan arsitektur menentukan apakah produk benar-benar bisa jalan atau cuma jadi demo. Sekarang saya terbuka untuk peran backend engineer, technical project lead, atau system designer di tim yang serius mengirim produk ke produksi.',
  ],

  contactHeading: 'Punya masalah operasional',
  contactHeadingAccent: 'yang butuh dipecahkan?',
  contactIntro:
    'Terbuka untuk peran backend engineer, technical project lead, atau system designer - freelance, part-time, atau full-time. Kalau kamu punya masalah nyata yang perlu diterjemahkan jadi sistem yang jalan, ayo ngobrol.',
  contactStatusText: 'TERSEDIA UNTUK KOLABORASI BARU',

  email: 'nduujanadi51@gmail.com',
  whatsapp: '6289535945245', // format internasional tanpa "+", untuk link wa.me
  whatsappDisplay: '+62 895-3594-55245',
  socialLinkedin: 'https://linkedin.com/in/sinduadityajanadi',
  socialGithub: 'https://github.com/Sinduaditya',

  seoDefaultTitle: 'Sindu Aditya - Backend Engineer & Technical Project Lead',
  seoDefaultDescription:
    'Backend engineer & technical project lead yang merancang arsitektur, memimpin tim, dan mengirim produk dari sketsa sampai live di produksi - fleet IoT, ERP manufaktur, dan platform multi-tenant.',
}

export interface SiteStat {
  value: string
  label: string
}

export const STATS: SiteStat[] = [
  { value: '4+', label: 'PRODUK DI PRODUKSI' },
  { value: '1+', label: 'TAHUN MERANCANG SISTEM' },
  { value: '55', label: 'ORANG DIPIMPIN' },
]

export interface SkillGroup {
  category: string
  items: string[]
}

export const SKILLS: SkillGroup[] = [
  { category: 'Backend & Bahasa', items: ['PHP', 'JavaScript (Node.js)', 'Python', 'SQL'] },
  { category: 'Framework & Library', items: ['Laravel', 'Express', 'React', 'React Native', 'Tailwind CSS'] },
  { category: 'Database & Storage', items: ['MySQL', 'PostgreSQL', 'Firebase', 'AppWrite'] },
  { category: 'IoT & Realtime', items: ['MQTT (Mosquitto)', 'WebSockets', 'Pipeline sensor'] },
]

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location: string | null
  summary: string | null
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'bengkel-koding',
    role: 'Project Manager & Backend Developer',
    company: 'Bengkel Koding',
    period: 'Agustus 2025 - Sekarang',
    location: 'Semarang',
    summary:
      'Memimpin siklus hidup produk FIK-Apps, platform akademik multi-tenant (Laravel + Next.js) dengan arsitektur row-level tenancy, bersama tim 15 orang lintas divisi backend, frontend, dan mobile.',
  },
  {
    id: 'ristack',
    role: 'Project Manager & Full-Stack Developer',
    company: 'RISTACK',
    period: 'November 2025 - Sekarang',
    location: 'Remote',
    summary: 'Memimpin pengembangan aplikasi bisnis internal berbasis Laravel dan menjadi penghubung utama antara tim teknis dengan klien.',
  },
  {
    id: 'lims-yanwo',
    role: 'Full-Stack Developer & Project Manager',
    company: 'PT. Lims Yanwo Indonesia - Suite Aplikasi Bisnis Modular',
    period: '2025',
    location: null,
    summary:
      'Merancang dan membangun sistem informasi bisnis modular berbasis Laravel yang mengadopsi konsep alur ERP untuk operasional harian perusahaan manufaktur, mencakup 4 modul inti: Quality Control (Grading), Pencatatan Barang Masuk Mentah, Absensi, dan Penggajian.',
  },
  {
    id: 'teaching-assistant',
    role: 'Teaching Assistant - Laravel & MVC',
    company: 'Universitas Dian Nuswantoro',
    period: 'Februari 2025 - Juni 2025',
    location: 'Semarang',
    summary: 'Mengampu praktikum Laravel dan MVC untuk 30+ mahasiswa per sesi, termasuk evaluasi proyek akhir praktikum.',
  },
  {
    id: 'research-assistant',
    role: 'Research Assistant - Backend IoT',
    company: 'Lab IoT Nexa',
    period: 'Februari 2025 - Juni 2025',
    location: 'Semarang',
    summary: 'Membangun infrastruktur backend FleetTrack - pipeline data sensor armada real-time lewat MQTT dan Laravel Reverb.',
  },
  {
    id: 'klora',
    role: 'Core Team Lead',
    company: 'Klora',
    period: 'Maret 2024 - Januari 2025',
    location: null,
    summary:
      'Memimpin tim 5 orang membangun platform manajemen sampah berbasis web & mobile (React Native) yang menembus Top 10 ECOTHON 2024 tingkat ASEAN dan Juara 2 IT FEST 2024 Universitas IPB. Merancang arsitektur backend dan mobile, mengimplementasikan AppWrite sebagai BaaS.',
  },
  {
    id: 'hmti',
    role: 'Project Manager (P1) Semnasti 2024, Staff & Committee',
    company: 'Himpunan Mahasiswa Teknik Informatika (HMTI) UDINUS',
    period: 'Agustus 2024 - Agustus 2025',
    location: 'Semarang',
    summary:
      'Memimpin 55 panitia menyelenggarakan seminar nasional "Semnasti 2024" dengan 550+ peserta, termasuk mengelola kemitraan strategis dengan kolaborator industri. Membangun Website Company Profile Himpunan menggunakan Laravel dan Tailwind CSS selama dua periode kepengurusan.',
  },
  {
    id: 'dncc',
    role: 'Divisi Web',
    company: 'Dian Nuswantoro Computer Club (DNCC)',
    period: 'November 2023 - Juli 2025',
    location: 'Semarang',
    summary: 'Membangun website pendaftaran lomba Dinacom 2024 menggunakan Laravel dan Tailwind CSS.',
  },
  {
    id: 'sinergi-inovasi-tekno',
    role: 'Laravel Developer',
    company: 'PT Sinergi Inovasi Tekno',
    period: 'November 2023 - Februari 2024',
    location: null,
    summary: 'Menyelesaikan 2 proyek paralel (company profile & aplikasi manajemen surat) dalam 3 bulan menggunakan Laravel, PHP, MySQL, dan Git dengan on-time delivery di lingkungan tim remote.',
  },
  {
    id: 'dntech',
    role: 'Laravel Developer',
    company: 'PT Dian Nuswantoro Teknologi & Informasi',
    period: 'Januari 2022 - April 2022',
    location: null,
    summary: 'Mengembangkan fitur web dengan Laravel, OOP, CRUD, REST API, dan standar Clean Code dalam lingkungan profesional.',
  },
  {
    id: 'infradigital',
    role: 'Cyber Security Student',
    company: 'Infradigital Foundation',
    period: 'Agustus 2021 - November 2021',
    location: 'Remote',
    summary: 'Mempelajari dasar identifikasi celah keamanan web dan pentesting dengan Kali Linux - fondasi mindset Red Team (offensive) dan Blue Team (defensive) yang saya bawa ke backend development sampai sekarang.',
  },
]
