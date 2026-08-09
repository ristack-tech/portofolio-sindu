-- ============================================================
-- Supabase Seed Data — Sindu Aditya Portfolio
-- ============================================================
-- Jalankan SETELAH schema.sql sukses.
-- SQL Editor → New query → paste seluruh file ini → Run
-- ============================================================

-- ============================================================
-- SEED: site_settings (update paragraphs + intro)
-- ============================================================
update site_settings set
  about_paragraph_1 = 'Perjalanan saya mulai dari SMK Rekayasa Perangkat Lunak, lalu mendalami cybersecurity dasar di Infradigital Foundation — di situ saya pertama kali sadar: backend yang tidak aman sama saja bohong. Mindset itu yang saya bawa sampai sekarang, sambil terus memimpin tim dan membangun produk di HIMTI UDINUS, magang Laravel, sampai akhirnya memimpin delivery di Bengkel Koding dan RISTACK.',
  about_paragraph_2 = 'Sejak 2022 saya magang sebagai Laravel developer, lalu memimpin tim untuk produk yang dipakai tim operasional setiap hari — ERP modular untuk lini produksi manufaktur dan sistem fleet IoT dengan MQTT. Backend saya pilih karena di sanalah keputusan arsitektur menentukan apakah produk benar-benar bisa jalan atau cuma jadi demo. Dan karena latar belakang cybersecurity itu, setiap sistem yang saya bangun bukan cuma jalan, tapi juga aman.',
  about_paragraph_3 = 'Sekarang saya terbuka untuk peran backend engineer, technical project lead, atau system designer di tim yang serius mengirim produk ke produksi.',
  contact_intro = 'Terbuka untuk peran backend engineer, technical project lead, atau system designer — freelance, part-time, atau full-time. Kalau kamu punya masalah nyata yang perlu diterjemahkan jadi sistem yang jalan, ayo ngobrol.'
where id = 1;

-- ============================================================
-- SEED: site_stats
-- ============================================================
insert into site_stats (value, label, sort_order) values
  ('4+', 'PRODUK DI PRODUKSI', 1),
  ('5+', 'TAHUN MERANCANG SISTEM', 2),
  ('55', 'ORANG DIPIMPIN', 3);

-- ============================================================
-- SEED: skill_categories + skills (5 categories, 17 skills)
-- ============================================================
do $$
declare
  cat_backend uuid;
  cat_framework uuid;
  cat_database uuid;
  cat_iot uuid;
  cat_security uuid;
begin
  insert into skill_categories (category, sort_order)
    values ('Backend & Bahasa', 1) returning id into cat_backend;
  insert into skill_categories (category, sort_order)
    values ('Framework & Library', 2) returning id into cat_framework;
  insert into skill_categories (category, sort_order)
    values ('Database & Storage', 3) returning id into cat_database;
  insert into skill_categories (category, sort_order)
    values ('IoT & Realtime', 4) returning id into cat_iot;
  insert into skill_categories (category, sort_order)
    values ('Security & Defense', 5) returning id into cat_security;

  insert into skills (category_id, name, sort_order) values
    (cat_backend, 'PHP', 1),
    (cat_backend, 'JavaScript (Node.js)', 2),
    (cat_backend, 'Python', 3),
    (cat_backend, 'SQL', 4);

  insert into skills (category_id, name, sort_order) values
    (cat_framework, 'Laravel', 1),
    (cat_framework, 'Express', 2),
    (cat_framework, 'React', 3),
    (cat_framework, 'React Native', 4),
    (cat_framework, 'Tailwind CSS', 5);

  insert into skills (category_id, name, sort_order) values
    (cat_database, 'MySQL', 1),
    (cat_database, 'PostgreSQL', 2),
    (cat_database, 'Supabase', 3),
    (cat_database, 'Firebase', 4),
    (cat_database, 'AppWrite', 5);

  insert into skills (category_id, name, sort_order) values
    (cat_iot, 'MQTT (Mosquitto)', 1),
    (cat_iot, 'WebSockets', 2),
    (cat_iot, 'Pipeline sensor', 3);

  insert into skills (category_id, name, sort_order) values
    (cat_security, 'Web Pentesting', 1),
    (cat_security, 'Kali Linux', 2),
    (cat_security, 'Red/Blue Team mindset', 3),
    (cat_security, 'Secure Coding', 4);
end $$;

-- ============================================================
-- SEED: experiences (9 entries, urut terbaru → terlama)
-- ============================================================
insert into experiences (role, company, period, location, summary, sort_order) values
  ('Project Manager & Backend Developer', 'Bengkel Koding', 'Agustus 2025 — Sekarang', 'Yogyakarta',
   'Memimpin delivery TOP FIK (sistem informasi akademik multi-tenant) — merancang database, mengoordinasikan tim backend/frontend/mobile.', 1),
  ('Project Manager & Full-Stack Developer', 'RISTACK', 'November 2025 — Sekarang', 'Remote',
   'Memimpin aplikasi bisnis internal end-to-end, menjadi penghubung klien dan mengoordinasikan tim teknis.', 2),
  ('Teaching Assistant — Laravel & MVC', 'Universitas Dian Nuswantoro', 'Februari 2025 — Juni 2025', 'Semarang',
   'Mengampu praktikum Laravel untuk 30+ mahasiswa, mengevaluasi proyek akhir dan standar full-stack.', 3),
  ('Research Assistant — Backend IoT', 'Lab IoT Nexa', 'Februari 2025 — Juni 2025', 'Semarang',
   'Membangun infrastruktur backend FleetTrack — MQTT pipeline untuk data sensor armada real-time.', 4),
  ('Core Team Lead', 'Klora', 'Maret 2024 — Januari 2025', 'Indonesia',
   'Merancang & membangun prototype platform daur ulang web + mobile dari nol selama kompetisi ECOTHON 2024 — finalis Top 10 ASEAN.', 5),
  ('Project Manager — Semnasti 2024', 'HIMTI UDINUS', 'Agustus 2024 — Agustus 2025', 'Semarang',
   'Memimpin tim 55 orang untuk acara nasional 550+ peserta di MG Setos Hotel — partnership dengan 4U Security.', 6),
  ('Laravel Developer', 'PT Sinergi Inovasi Tekno', 'November 2023 — Februari 2024', 'Remote',
   'Mengerjakan dua proyek paralel (company profile + aplikasi manajemen surat) di tim remote, Clean Code & MVC.', 7),
  ('Laravel Developer', 'PT Dian Nuswantoro Teknologi & Informasi', 'Januari 2022 — April 2022', 'Semarang',
   'Implementasi fitur CRUD dengan arsitektur MVC, membangun fondasi Clean Code untuk aplikasi yang maintainable.', 8),
  ('Cyber Security Student', 'Infradigital Foundation', 'Agustus 2021 — November 2021', 'Remote',
   'Belajar dasar cybersecurity dan pentesting pakai Kali Linux — identifikasi celah keamanan, respon serangan, dan mindset Red/Blue Team. Fondasi awal yang sekarang saya bawa ke setiap produk: kalau aplikasi yang saya bangun tidak aman, sama saja bohong.', 9);

-- ============================================================
-- SEED: projects + project_details (4 projects)
-- ============================================================
do $$
declare
  p_suite uuid;
  p_fleettrack uuid;
  p_topfik uuid;
  p_klora uuid;
begin
  -- ==========================================================
  -- 1. Suite Aplikasi Bisnis Modular
  -- ==========================================================
  insert into projects (slug, title, client, description, problem, outcome, role, year, tags, cover_initial, cover_image_url, sort_order)
  values ('suite-aplikasi-bisnis', 'Suite Aplikasi Bisnis Modular', 'PT. Lims Yanwo Indonesia',
    'ERP modular 4-modul (QC, Inventory, Absensi, Payroll) untuk lini produksi manufaktur.',
    'Lini produksi masih jalan di atas kertas dan spreadsheet — QC, inventory, absensi, payroll terpisah-pisah.',
    'ERP modular 4-modul yang dipakai tim operasional setiap hari.',
    'Full-Stack Engineer & PM', 2025,
    array['LARAVEL','MULTI-MODUL','ERP'], 'S', '/project-suite.jpg', 1)
  returning id into p_suite;

  insert into project_details (project_id, problem_full, role_full, solution, features, tech_stack, outcome_full) values
  (p_suite,
   'Lini produksi PT. Lims Yanwo masih jalan di atas kertas dan spreadsheet — Quality Control, pencatatan barang masuk, absensi, dan payroll semuanya terpisah-pisah. Tidak ada single source of truth, sehingga data sering tidak sinkron dan butuh rekap manual berulang setiap akhir periode.',
   'Project manager sekaligus full-stack engineer — memimpin discovery kebutuhan dengan tim operasional, merancang arsitektur modular, mengembangkan backend dan frontend, mengoordinasikan deployment dan rollout.',
   'Sistem ERP modular berbasis Laravel dengan empat modul inti: Quality Control (Grading hasil produksi), Pencatatan Barang Masuk Mentah, Absensi, dan Penggajian. Setiap modul berdiri sendiri tapi saling terhubung lewat database terpusat. Arsitektur mengikuti proses bisnis nyata di lapangan — bukan asumsi developer.',
   array['Modul Quality Control (Grading) dengan input hasil produksi per batch','Pencatatan Barang Masuk Mentah dengan tracking supplier','Modul Absensi dengan validasi shift kerja','Modul Penggajian yang otomatis menghitung dari data absensi dan grade QC','Dashboard operasional untuk supervisor lini','Laporan periodik yang menggantikan rekap manual'],
   array['Laravel','MySQL','Tailwind CSS','MVC','Multi-modul'],
   'Sistem ERP modular yang dipakai tim operasional setiap hari — menggantikan workflow kertas dan spreadsheet terpisah. Dirancang selaras dengan proses bisnis nyata di lapangan, sehingga diadopsi tanpa resistensi dari tim yang sudah terbiasa dengan workflow lama.'
  );

  -- ==========================================================
  -- 2. FleetTrack
  -- ==========================================================
  insert into projects (slug, title, client, description, problem, outcome, role, year, tags, cover_initial, cover_image_url, sort_order)
  values ('fleettrack', 'FleetTrack', 'Lab IoT Nexa',
    'Backend MQTT-based untuk sistem fleet management IoT — pelacakan armada real-time dengan sensor GPS, accelerometer, dan telemetry mesin.',
    'Sensor armada IoT menghasilkan data real-time yang harus sampai ke dashboard dengan latensi rendah dan stabil.',
    'Backend MQTT-based yang menjembatani hardware dengan dashboard — siap untuk armada dalam skala harian.',
    'Backend Engineer', 2025,
    array['LARAVEL','MQTT','IOT'], 'F', '/project-fleettrack.jpg', 2)
  returning id into p_fleettrack;

  insert into project_details (project_id, problem_full, role_full, solution, features, tech_stack, outcome_full) values
  (p_fleettrack,
   'Sensor armada IoT (GPS, accelerometer, telemetry mesin) menghasilkan data real-time dalam volume besar — data harus sampai ke dashboard dengan latensi rendah, stabil, dan tidak hilang. Solusi REST synchronous tradisional tidak cukup untuk menangani streaming telemetry dari banyak device sekaligus.',
   'Research assistant di Lab IoT Nexa — bertanggung jawab merancang infrastruktur backend dan struktur database, mengimplementasikan message broker, menyusun alur sistem untuk menangani aliran data sensor secara berkelanjutan.',
   'Backend Laravel dengan arsitektur modular yang mengintegrasikan protokol MQTT (Mosquitto) sebagai message broker. Sensor publish telemetry ke broker, backend subscribe dan memproses event, hasilnya di-push ke dashboard lewat WebSocket. Database dirancang untuk time-series telemetry — ringan untuk write, efisien untuk query rentang waktu.',
   array['MQTT message broker (Mosquitto) untuk komunikasi sensor real-time','Backend Laravel modular yang subscribe topic per-armada','Time-series database schema untuk telemetry (GPS, mesin, sensor lain)','WebSocket push ke dashboard untuk update real-time','Arsitektur event-driven yang stabil untuk banyak device bersamaan','API untuk integrasi dengan sistem operasional klien'],
   array['Laravel','MQTT (Mosquitto)','WebSockets','MySQL','REST API','Event-driven'],
   'Backend yang siap untuk armada dalam skala harian — sensor publish → broker → backend → dashboard dalam hitungan milidetik. Arsitektur modular memungkinkan ekspansi sensor baru (temperatur, bahan bakar, dsb) tanpa perubahan besar di backend.'
  );

  -- ==========================================================
  -- 3. TOP FIK
  -- ==========================================================
  insert into projects (slug, title, client, description, problem, outcome, role, year, tags, cover_initial, cover_image_url, sort_order)
  values ('top-fik', 'TOP FIK', 'Bengkel Koding',
    'Platform multi-tenant untuk sistem informasi akademik lintas fakultas.',
    'Sistem informasi akademik butuh melayani banyak fakultas dengan kebutuhan berbeda dari satu basis kode.',
    'Platform multi-tenant yang skalabel — diorkestrasi lintas tim backend, frontend, dan mobile.',
    'Project Manager & Backend', 2025,
    array['LARAVEL','MULTI-TENANT','PM'], 'T', '/project-topfik.jpg', 3)
  returning id into p_topfik;

  insert into project_details (project_id, problem_full, role_full, solution, features, tech_stack, outcome_full) values
  (p_topfik,
   'Sistem informasi akademik melayani banyak fakultas, masing-masing dengan requirement berbeda (kurikulum, jadwal, struktur organisasi, alur approval). Membangun sistem terpisah per fakultas akan butuh tim besar dan biaya tinggi; satu sistem monolitik tanpa isolasi akan cepat jadi kusut.',
   'Project manager dan backend engineer — mengoordinasikan tim backend, frontend, mobile, dan pihak eksternal. Merancang arsitektur multi-tenant, memimpin discovery kebutuhan lintas fakultas, dan mengawal delivery dari sketsa sampai deployment.',
   'Arsitektur multi-tenant di atas Laravel — setiap fakultas adalah tenant dengan data terisolasi, konfigurasi sendiri, tapi berjalan di satu basis kode. Skema database dirancang untuk mendukung kebutuhan yang dinamis tanpa perubahan struktur per tenant. Ekstraksi data otomatis untuk laporan periodik.',
   array['Arsitektur multi-tenant dengan isolasi data per fakultas','Konfigurasi per-tenant (kurikulum, jadwal, alur approval)','Modul akademik: KRS, KHS, jadwal, presensi','Ekstraksi data otomatis untuk laporan periodik','REST API untuk integrasi dengan mobile & sistem eksternal','Optimasi legacy code dari sistem monolitik sebelumnya'],
   array['Laravel','MySQL','Multi-tenant architecture','REST API','Tailwind CSS'],
   'Platform multi-tenant yang skalabel — diorkestrasi lintas tim backend, frontend, dan mobile. Satu deployment melayani banyak fakultas tanpa duplikasi kode, dengan ruang untuk konfigurasi kebutuhan masing-masing.'
  );

  -- ==========================================================
  -- 4. Klora
  -- ==========================================================
  insert into projects (slug, title, client, description, problem, outcome, role, year, tags, cover_initial, cover_image_url, sort_order)
  values ('klora', 'Klora', 'ECOTHON 2024 (Top 10 ASEAN)',
    'Prototype platform daur ulang web + mobile yang dirancang selama kompetisi ECOTHON 2024.',
    'Pengelolaan sampah masih manual — tidak ada cara mudah menjadwalkan penjemputan dan memberi insentif ke pengguna.',
    'Prototype platform daur ulang web + mobile yang dirancang selama kompetisi — masuk 10 besar ASEAN.',
    'Core Team Lead', 2024,
    array['REACT NATIVE','APPWRITE','BAAAS'], 'K', '/project-klora.jpg', 4)
  returning id into p_klora;

  insert into project_details (project_id, problem_full, role_full, solution, features, tech_stack, outcome_full) values
  (p_klora,
   'Pengelolaan sampah masih manual — tidak ada cara mudah bagi rumah tangga menjadwalkan penjemputan barang bekas, tidak ada transparansi estimasi nilai, dan tidak ada insentif untuk partisipasi. Bank sampah konvensional punya proses yang panjang dan tidak scalable.',
   'Core team lead sekaligus backend engineer — memimpin tim kecil dari discovery sampai demo akhir, merancang arsitektur backend, mengembangkan aplikasi mobile React Native, dan mengkoordinasikan integrasi dengan Backend-as-a-Service.',
   'Prototype platform daur ulang end-to-end: web untuk admin/operator, mobile (React Native) untuk pengguna. Backend menggunakan AppWrite sebagai BaaS — cepat dideploy, skala otomatis, dan tidak perlu maintain server. Logika bisnis mencakup estimasi nilai barang, penjadwalan penjemputan oleh kurir, dan konversi barang jadi poin yang bisa ditukar.',
   array['Aplikasi mobile (React Native) untuk pengguna akhir','Estimasi nilai barang bekas berdasarkan kategori & kondisi','Penjadwalan penjemputan oleh kurir dengan notifikasi','Sistem poin yang bisa ditukar dengan reward','Dashboard web untuk admin/operator bank sampah','Backend AppWrite (BaaS) untuk skalabilitas & kecepatan iterasi'],
   array['React Native','AppWrite (BaaS)','Tailwind CSS','REST API','Firebase Auth'],
   'Finalis Top 10 ECOTHON 2024 tingkat ASEAN — bukti bahwa ide daur ulang bisa diterjemahkan jadi blueprint produk yang usable. Dikembangkan dari nol selama masa kompetisi dengan fokus pada eksekusi end-to-end. Saat ini masih berupa prototype yang dibangun untuk lomba; belum dipakai luas di produksi.'
  );
end $$;