export interface ProjectItem {
  slug: string
  title: string
  client: string | null
  description: string | null
  problem: string | null
  outcome: string | null
  role: string | null
  year: number | null
  tags: string[]
  cover_initial: string | null
  cover_image_url: string | null
  problem_full: string | null
  role_full: string | null
  solution: string | null
  features: string[]
  tech_stack: string[]
  outcome_full: string | null
}

export const projects: ProjectItem[] = [
  {
    slug: 'fik-apps',
    title: 'FIK-Apps',
    client: 'Bengkel Koding',
    description:
      'Platform sistem informasi akademik multi-tenant - satu basis kode yang melayani banyak program studi di bawah satu fakultas dengan kebutuhan berbeda.',
    problem:
      'Sistem informasi akademik melayani banyak program studi, masing-masing dengan requirement berbeda (kurikulum, jadwal bimbingan, alur approval). Membangun sistem terpisah per prodi akan butuh tim besar dan biaya tinggi; satu sistem monolitik tanpa isolasi data akan cepat jadi kusut dan rawan bug lintas-tenant.',
    outcome:
      'Platform multi-tenant yang skalabel, dipimpin bersama tim 15 orang lintas divisi backend, frontend, dan mobile.',
    role: 'Project Manager & Backend Developer',
    year: 2025,
    tags: ['LARAVEL', 'MULTI-TENANT', 'PM'],
    cover_initial: 'F',
    cover_image_url: null,
    problem_full:
      'Sistem informasi akademik melayani banyak program studi di bawah satu fakultas, masing-masing dengan requirement berbeda (kurikulum, jadwal, struktur organisasi, alur approval). Membangun sistem terpisah per prodi akan butuh tim besar dan biaya tinggi; satu sistem monolitik tanpa isolasi data yang benar akan cepat jadi kusut dan rawan bug lintas-tenant.',
    role_full:
      'Project manager dan backend engineer - mengoordinasikan tim backend, frontend, dan mobile lintas divisi (15 orang). Merancang arsitektur multi-tenant, memimpin discovery kebutuhan lintas prodi, dan mengawal delivery dari sketsa sampai deployment produksi.',
    solution:
      'Arsitektur multi-tenant row-level (shared-schema) di atas Laravel dan Next.js - setiap program studi adalah tenant dengan data terisolasi lewat global scope, tapi berjalan di satu basis kode. Skema database dirancang untuk mendukung kebutuhan yang dinamis tanpa perubahan struktur per tenant, lengkap dengan workflow approval lintas-prodi untuk konten tingkat fakultas.',
    features: [
      'Arsitektur multi-tenant row-level dengan isolasi data per program studi',
      'Modul Tugas Akhir: pengajuan judul, plotting dosen pembimbing, logbook bimbingan, sidang',
      'Modul Kerja Praktek dan Bimbingan Karir',
      'CMS multi-level: landing tingkat fakultas dan landing per program studi',
      'Dashboard Early Warning System untuk monitoring mahasiswa berisiko',
      'Workflow approval lintas-prodi untuk validasi konten fakultas',
      'Migrasi server VPS-ke-VPS dengan zero-downtime',
    ],
    tech_stack: ['Laravel', 'Next.js', 'MySQL', 'Multi-tenant architecture', 'REST API'],
    outcome_full:
      'Platform yang menyatukan banyak program studi dalam satu sistem yang skalabel, dipimpin bersama tim 15 orang lintas divisi dari backend, frontend, sampai mobile - dari discovery kebutuhan sampai deployment produksi.',
  },
  {
    slug: 'suite-aplikasi-bisnis',
    title: 'Suite Aplikasi Bisnis Modular',
    client: 'PT. Lims Yanwo Indonesia',
    description:
      'ERP modular berbasis Laravel untuk lini produksi manufaktur - empat modul inti yang saling terintegrasi untuk menggantikan workflow kertas.',
    problem:
      'Lini produksi PT. Lims Yanwo masih jalan di atas kertas dan spreadsheet - Quality Control, pencatatan barang masuk, absensi, dan payroll semuanya terpisah-pisah. Tidak ada single source of truth, sehingga data sering tidak sinkron dan butuh rekap manual berulang setiap akhir periode.',
    outcome: 'ERP modular 4-modul (QC, Inventory, Absensi, Payroll) yang dipakai tim operasional setiap hari.',
    role: 'Full-Stack Developer & Project Manager',
    year: 2025,
    tags: ['LARAVEL', 'MULTI-MODUL', 'ERP'],
    cover_initial: 'S',
    cover_image_url: null,
    problem_full:
      'Lini produksi PT. Lims Yanwo masih jalan di atas kertas dan spreadsheet - Quality Control, pencatatan barang masuk, absensi, dan payroll semuanya terpisah-pisah. Tidak ada single source of truth, sehingga data sering tidak sinkron dan butuh rekap manual berulang setiap akhir periode.',
    role_full:
      'Project manager sekaligus full-stack engineer - memimpin discovery kebutuhan dengan tim operasional, merancang arsitektur modular, mengembangkan backend dan frontend, mengoordinasikan deployment dan rollout.',
    solution:
      'Sistem ERP modular berbasis Laravel dengan empat modul inti: Quality Control (Grading hasil produksi), Pencatatan Barang Masuk Mentah, Absensi, dan Penggajian. Setiap modul berdiri sendiri tapi saling terhubung lewat database terpusat. Arsitektur mengikuti proses bisnis nyata di lapangan - bukan asumsi developer.',
    features: [
      'Modul Quality Control (Grading) dengan input hasil produksi per batch',
      'Pencatatan Barang Masuk Mentah dengan tracking supplier',
      'Modul Absensi dengan validasi shift kerja',
      'Modul Penggajian yang otomatis menghitung dari data absensi dan grade QC',
      'Dashboard operasional untuk supervisor lini',
      'Laporan periodik yang menggantikan rekap manual',
    ],
    tech_stack: ['Laravel', 'MySQL', 'Tailwind CSS', 'MVC', 'Multi-modul'],
    outcome_full:
      'Sistem ERP modular yang dipakai tim operasional setiap hari untuk menggantikan workflow kertas - dari perancangan alur bisnis sampai deployment produksi via cPanel dan aaPanel.',
  },
  {
    slug: 'fleettrack',
    title: 'FleetTrack',
    client: 'Lab IoT Nexa',
    description:
      'Backend untuk sistem fleet management berbasis IoT - menjembatani sensor kendaraan dengan dashboard real-time lewat protokol MQTT.',
    problem:
      'Sensor armada IoT (GPS, accelerometer, telemetry mesin) menghasilkan data real-time dalam volume besar - data harus sampai ke dashboard dengan latensi rendah, stabil, dan tidak hilang. Solusi REST synchronous tradisional tidak cukup untuk menangani streaming telemetry dari banyak device sekaligus.',
    outcome: 'Backend MQTT-based yang menjembatani hardware dengan dashboard - siap untuk armada dalam skala harian.',
    role: 'Backend Engineer',
    year: 2025,
    tags: ['LARAVEL', 'MQTT', 'IOT'],
    cover_initial: 'F',
    cover_image_url: null,
    problem_full:
      'Sensor armada IoT (GPS, accelerometer, telemetry mesin) menghasilkan data real-time dalam volume besar - data harus sampai ke dashboard dengan latensi rendah, stabil, dan tidak hilang. Solusi REST synchronous tradisional tidak cukup untuk menangani streaming telemetry dari banyak device sekaligus.',
    role_full:
      'Research assistant di Lab IoT Nexa - bertanggung jawab merancang infrastruktur backend dan struktur database, mengimplementasikan message broker, menyusun alur sistem untuk menangani aliran data sensor secara berkelanjutan.',
    solution:
      'Backend Laravel dengan arsitektur modular yang mengintegrasikan protokol MQTT (Mosquitto) sebagai message broker. Sensor publish telemetry ke broker, backend subscribe dan memproses event, hasilnya di-push ke dashboard lewat WebSocket (Laravel Reverb). Database dirancang untuk time-series telemetry - ringan untuk write, efisien untuk query rentang waktu.',
    features: [
      'MQTT message broker (Mosquitto) untuk komunikasi sensor real-time',
      'Backend Laravel modular yang subscribe topic per-armada',
      'Time-series database schema untuk telemetry (GPS, mesin, sensor lain)',
      'WebSocket push (Laravel Reverb) ke dashboard untuk update real-time',
      'Arsitektur event-driven yang stabil untuk banyak device bersamaan',
      'API untuk integrasi dengan sistem operasional klien',
    ],
    tech_stack: ['Laravel', 'MQTT (Mosquitto)', 'Laravel Reverb', 'WebSockets', 'MySQL', 'REST API'],
    outcome_full:
      'Backend MQTT-based yang menjembatani hardware dengan dashboard operasional - latensi rendah, stabil, dan siap diperluas untuk armada dalam skala harian.',
  },
  {
    slug: 'klora',
    title: 'Klora',
    client: 'ECOTHON 2024 - Finalis Top 10 ASEAN',
    description:
      'Prototype platform daur ulang web + mobile yang saya dan tim rancang selama kompetisi ECOTHON 2024 - penjadwalan penjemputan, estimasi nilai barang, dan konversi poin.',
    problem:
      'Pengelolaan sampah masih manual - tidak ada cara mudah bagi rumah tangga menjadwalkan penjemputan barang bekas, tidak ada transparansi estimasi nilai, dan tidak ada insentif untuk partisipasi. Bank sampah konvensional punya proses yang panjang dan tidak scalable.',
    outcome: 'Finalis Top 10 ECOTHON 2024 tingkat ASEAN dan Juara 2 IT FEST 2024 Universitas IPB.',
    role: 'Core Team Lead',
    year: 2024,
    tags: ['REACT NATIVE', 'APPWRITE', 'BAAS'],
    cover_initial: 'K',
    cover_image_url: null,
    problem_full:
      'Pengelolaan sampah masih manual - tidak ada cara mudah bagi rumah tangga menjadwalkan penjemputan barang bekas, tidak ada transparansi estimasi nilai, dan tidak ada insentif untuk partisipasi. Bank sampah konvensional punya proses yang panjang dan tidak scalable.',
    role_full:
      'Core team lead sekaligus backend engineer - memimpin tim 5 orang dari discovery sampai demo akhir, merancang arsitektur backend dan mobile, mengembangkan aplikasi mobile React Native, dan mengoordinasikan integrasi dengan Backend-as-a-Service (AppWrite).',
    solution:
      'Prototype platform daur ulang end-to-end: web untuk admin/operator, mobile (React Native) untuk pengguna. Backend menggunakan AppWrite sebagai BaaS - cepat dideploy, skala otomatis, dan tidak perlu maintain server. Logika bisnis mencakup estimasi nilai barang, penjadwalan penjemputan oleh kurir, dan konversi barang jadi poin yang bisa ditukar.',
    features: [
      'Aplikasi mobile (React Native) untuk pengguna akhir',
      'Estimasi nilai barang bekas berdasarkan kategori & kondisi',
      'Penjadwalan penjemputan oleh kurir dengan notifikasi',
      'Sistem poin yang bisa ditukar dengan reward',
      'Dashboard web untuk admin/operator bank sampah',
      'Backend AppWrite (BaaS) untuk skalabilitas & kecepatan iterasi',
    ],
    tech_stack: ['React Native', 'React JS', 'AppWrite (BaaS)', 'Tailwind CSS', 'REST API'],
    outcome_full:
      'Memimpin tim 5 orang membangun prototype yang menembus Top 10 ASEAN di ECOTHON 2024, dan meraih Juara 2 Software Development Competition di IT FEST 2024 Universitas IPB dengan versi mobile-nya.',
  },
  {
    slug: 'dolanrek',
    title: 'DolanRek',
    client: null,
    description: 'Platform wisata Jawa Timur berbasis web yang memudahkan pengguna menemukan dan mengeksplorasi destinasi wisata.',
    problem:
      'Informasi destinasi wisata Jawa Timur tersebar di banyak sumber yang tidak terstruktur, menyulitkan wisatawan menemukan dan membandingkan pilihan dalam satu tempat.',
    outcome: 'Platform eksplorasi wisata dengan tampilan responsif dan pengalaman pengguna yang optimal.',
    role: 'Frontend Developer',
    year: 2023,
    tags: ['REACT', 'TAILWIND', 'FRONTEND'],
    cover_initial: 'D',
    cover_image_url: null,
    problem_full:
      'Informasi destinasi wisata Jawa Timur tersebar di banyak sumber yang tidak terstruktur, menyulitkan wisatawan menemukan dan membandingkan pilihan destinasi dalam satu tempat.',
    role_full:
      'Frontend developer - membangun UI/UX untuk eksplorasi destinasi wisata dengan fokus pada responsive design dan pengalaman pengguna.',
    solution:
      'Website React dengan Tailwind CSS yang menyajikan katalog destinasi wisata Jawa Timur, dirancang responsif untuk mobile dan desktop.',
    features: [
      'Katalog destinasi wisata Jawa Timur',
      'Tampilan responsif untuk semua ukuran layar',
      'Navigasi eksplorasi yang sederhana dan cepat',
    ],
    tech_stack: ['React JS', 'Tailwind CSS'],
    outcome_full: null,
  },
]

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug)
}
