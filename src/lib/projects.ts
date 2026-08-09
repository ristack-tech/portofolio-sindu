export interface ProjectDetail {
  slug: string
  title: string
  client: string
  description: string
  problem: string
  outcome: string
  tags: string[]
  year: string
  role: string
  role_long: string
  solution: string
  features: string[]
  techStack: string[]
  prototype?: boolean
  problemHeading: string
  roleHeading: string
  solutionHeading: string
  featuresHeading: string
  outcomeHeading: string
  metaTitleSuffix: string
  metaDescription: string
}

export const projects: ProjectDetail[] = [
  {
    slug: 'suite-aplikasi-bisnis',
    title: 'Suite Aplikasi Bisnis Modular',
    client: 'PT. Lims Yanwo Indonesia',
    description: 'ERP modular berbasis Laravel untuk lini produksi manufaktur — empat modul inti yang saling terintegrasi untuk menggantikan workflow kertas.',
    problem: 'Lini produksi PT. Lims Yanwo masih jalan di atas kertas dan spreadsheet — Quality Control, pencatatan barang masuk, absensi, dan payroll semuanya terpisah-pisah. Tidak ada single source of truth, sehingga data sering tidak sinkron dan butuh rekap manual berulang setiap akhir periode.',
    outcome: 'ERP modular 4-modul (QC, Inventory, Absensi, Payroll) yang dipakai tim operasional setiap hari.',
    tags: ['LARAVEL', 'MULTI-MODUL', 'ERP'],
    year: '2025',
    role: 'Full-Stack Engineer & PM',
    role_long: 'Project manager sekaligus full-stack engineer — memimpin discovery kebutuhan dengan tim operasional, merancang arsitektur modular, mengembangkan backend dan frontend, mengoordinasikan deployment dan rollout.',
    solution: 'Sistem ERP modular berbasis Laravel dengan empat modul inti: Quality Control (grading hasil produksi), Pencatatan Barang Masuk Mentah, Absensi, dan Penggajian. Setiap modul berdiri sendiri tapi saling terhubung lewat database terpusat. Arsitektur mengikuti proses bisnis nyata di lapangan — bukan asumsi developer.',
    features: [
      'Modul Quality Control (Grading) dengan input hasil produksi per batch',
      'Pencatatan Barang Masuk Mentah dengan tracking supplier',
      'Modul Absensi dengan validasi shift kerja',
      'Modul Penggajian yang otomatis menghitung dari data absensi dan grade QC',
      'Dashboard operasional untuk supervisor lini',
      'Laporan periodik yang menggantikan rekap manual',
    ],
    techStack: ['Laravel', 'MySQL', 'Tailwind CSS', 'MVC', 'Multi-modul'],
    problemHeading: 'Workflow kertas dan spreadsheet yang tidak terhubung.',
    roleHeading: 'Full-stack engineer sekaligus project manager.',
    solutionHeading: 'ERP modular yang mengikuti proses bisnis nyata.',
    featuresHeading: 'Empat modul yang saling terintegrasi.',
    outcomeHeading: 'Sistem yang dipakai tim operasional setiap hari.',
    metaTitleSuffix: 'Modular ERP for Manufacturing',
    metaDescription: 'ERP modular 4-modul (Quality Control, Inventory, Absensi, Payroll) untuk lini produksi manufaktur PT. Lims Yanwo. Laravel + multi-modul + workflow bisnis nyata.',
  },
  {
    slug: 'fleettrack',
    title: 'FleetTrack',
    client: 'Lab IoT Nexa',
    description: 'Backend untuk sistem fleet management berbasis IoT — menjembatani sensor kendaraan dengan dashboard real-time lewat protokol MQTT.',
    problem: 'Sensor armada IoT (GPS, accelerometer, telemetry mesin) menghasilkan data real-time dalam volume besar — data harus sampai ke dashboard dengan latensi rendah, stabil, dan tidak hilang. Solusi REST synchronous tradisional tidak cukup untuk menangani streaming telemetry dari banyak device sekaligus.',
    outcome: 'Backend MQTT-based yang menjembatani hardware dengan dashboard — siap untuk armada dalam skala harian.',
    tags: ['LARAVEL', 'MQTT', 'IOT'],
    year: '2025',
    role: 'Backend Engineer',
    role_long: 'Research assistant di Lab IoT Nexa — bertanggung jawab merancang infrastruktur backend dan struktur database, mengimplementasikan message broker, menyusun alur sistem untuk menangani aliran data sensor secara berkelanjutan.',
    solution: 'Backend Laravel dengan arsitektur modular yang mengintegrasikan protokol MQTT (Mosquitto) sebagai message broker. Sensor publish telemetry ke broker, backend subscribe dan memproses event, hasilnya di-push ke dashboard lewat WebSocket. Database dirancang untuk time-series telemetry — ringan untuk write, efisien untuk query rentang waktu.',
    features: [
      'MQTT message broker (Mosquitto) untuk komunikasi sensor real-time',
      'Backend Laravel modular yang subscribe topic per-armada',
      'Time-series database schema untuk telemetry (GPS, mesin, sensor lain)',
      'WebSocket push ke dashboard untuk update real-time',
      'Arsitektur event-driven yang stabil untuk banyak device bersamaan',
      'API untuk integrasi dengan sistem operasional klien',
    ],
    techStack: ['Laravel', 'MQTT (Mosquitto)', 'WebSockets', 'MySQL', 'REST API', 'Event-driven'],
    problemHeading: 'Streaming telemetry real-time dari banyak device.',
    roleHeading: 'Backend engineer dengan fokus arsitektur event-driven.',
    solutionHeading: 'MQTT message broker + backend modular.',
    featuresHeading: 'Arsitektur yang stabil untuk streaming skala harian.',
    outcomeHeading: 'Latensi rendah, scalable, dan siap ekspansi sensor.',
    metaTitleSuffix: 'Fleet IoT MQTT Backend',
    metaDescription: 'Backend MQTT-based untuk sistem fleet management IoT — pelacakan armada real-time dengan sensor GPS, accelerometer, dan telemetry mesin. Event-driven architecture dengan Laravel + Mosquitto.',
  },
  {
    slug: 'top-fik',
    title: 'TOP FIK',
    client: 'Bengkel Koding',
    description: 'Platform sistem informasi akademik multi-tenant — satu basis kode yang melayani banyak fakultas dengan kebutuhan berbeda.',
    problem: 'Sistem informasi akademik melayani banyak fakultas, masing-masing dengan requirement berbeda (kurikulum, jadwal, struktur organisasi, alur approval). Membangun sistem terpisah per fakultas akan butuh tim besar dan biaya tinggi; satu sistem monolitik tanpa isolasi akan cepat jadi kusut.',
    outcome: 'Platform multi-tenant yang skalabel — diorkestrasi lintas tim backend, frontend, dan mobile.',
    tags: ['LARAVEL', 'MULTI-TENANT', 'PM'],
    year: '2025',
    role: 'Project Manager & Backend',
    role_long: 'Project manager dan backend engineer — mengoordinasikan tim backend, frontend, mobile, dan pihak eksternal. Merancang arsitektur multi-tenant, memimpin discovery kebutuhan lintas fakultas, dan mengawal delivery dari sketsa sampai deployment.',
    solution: 'Arsitektur multi-tenant di atas Laravel — setiap fakultas adalah tenant dengan data terisolasi, konfigurasi sendiri, tapi berjalan di satu basis kode. Skema database dirancang untuk mendukung kebutuhan yang dinamis tanpa perubahan struktur per tenant. Ekstraksi data otomatis untuk laporan periodik.',
    features: [
      'Arsitektur multi-tenant dengan isolasi data per fakultas',
      'Konfigurasi per-tenant (kurikulum, jadwal, alur approval)',
      'Modul akademik: KRS, KHS, jadwal, presensi',
      'Ekstraksi data otomatis untuk laporan periodik',
      'REST API untuk integrasi dengan mobile & sistem eksternal',
      'Optimasi legacy code dari sistem monolitik sebelumnya',
    ],
    techStack: ['Laravel', 'MySQL', 'Multi-tenant architecture', 'REST API', 'Tailwind CSS'],
    problemHeading: 'Satu kode, banyak fakultas, requirement berbeda.',
    roleHeading: 'PM + backend engineer yang mengorkestrasi banyak tim.',
    solutionHeading: 'Arsitektur multi-tenant dengan isolasi data.',
    featuresHeading: 'Satu deployment, banyak tenant.',
    outcomeHeading: 'Platform yang menyatukan banyak fakultas.',
    metaTitleSuffix: 'Multi-Tenant Academic System',
    metaDescription: 'Platform sistem informasi akademik multi-tenant — satu basis kode melayani banyak fakultas dengan kebutuhan berbeda. Laravel + arsitektur tenant-isolated + REST API.',
  },
  {
    slug: 'klora',
    title: 'Klora',
    client: 'ECOTHON 2024 — Finalis Top 10 ASEAN',
    description: 'Prototype platform daur ulang web + mobile yang saya dan tim rancang selama kompetisi ECOTHON 2024 — penjadwalan penjemputan, estimasi nilai barang, dan konversi poin.',
    problem: 'Pengelolaan sampah masih manual — tidak ada cara mudah bagi rumah tangga menjadwalkan penjemputan barang bekas, tidak ada transparansi estimasi nilai, dan tidak ada insentif untuk partisipasi. Bank sampah konvensional punya proses yang panjang dan tidak scalable.',
    outcome: 'Prototype platform daur ulang web + mobile yang dirancang selama kompetisi — masuk 10 besar ASEAN.',
    tags: ['REACT NATIVE', 'APPWRITE', 'BAAAS'],
    year: '2024',
    role: 'Core Team Lead',
    role_long: 'Core team lead sekaligus backend engineer — memimpin tim kecil dari discovery sampai demo akhir, merancang arsitektur backend, mengembangkan aplikasi mobile React Native, dan mengkoordinasikan integrasi dengan Backend-as-a-Service.',
    solution: 'Prototype platform daur ulang end-to-end: web untuk admin/operator, mobile (React Native) untuk pengguna. Backend menggunakan AppWrite sebagai BaaS — cepat dideploy, skala otomatis, dan tidak perlu maintain server. Logika bisnis mencakup estimasi nilai barang, penjadwalan penjemputan oleh kurir, dan konversi barang jadi poin yang bisa ditukar.',
    features: [
      'Aplikasi mobile (React Native) untuk pengguna akhir',
      'Estimasi nilai barang bekas berdasarkan kategori & kondisi',
      'Penjadwalan penjemputan oleh kurir dengan notifikasi',
      'Sistem poin yang bisa ditukar dengan reward',
      'Dashboard web untuk admin/operator bank sampah',
      'Backend AppWrite (BaaS) untuk skalabilitas & kecepatan iterasi',
    ],
    techStack: ['React Native', 'AppWrite (BaaS)', 'Tailwind CSS', 'REST API', 'Firebase Auth'],
    prototype: true,
    problemHeading: 'Daur ulang tanpa insentif, tanpa transparansi, tanpa jadwal.',
    roleHeading: 'Core team lead — memimpin tim kecil dari nol sampai demo.',
    solutionHeading: 'Prototype platform dengan penjadwalan & poin reward.',
    featuresHeading: 'Apa yang dirancang di dalam prototype.',
    outcomeHeading: 'Top 10 ASEAN, blueprint bukan deployment.',
    metaTitleSuffix: 'Recycling Prototype, ASEAN Top 10 ECOTHON',
    metaDescription: 'Prototype platform daur ulang web + mobile yang dirancang selama kompetisi ECOTHON 2024 — penjadwalan penjemputan, estimasi nilai, dan konversi poin. Finalis Top 10 ASEAN.',
  },
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug)
}
