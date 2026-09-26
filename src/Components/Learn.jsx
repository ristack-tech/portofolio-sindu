import HeaderStatic from './HeaderStatic'
import foto from '../foto.jpg'
import ContactSection from './ContactSection';
import Footer from './Footer';

const Learn = () => {
  return (
    <>

        <HeaderStatic />
        <main id="main">

            <div className="py-14 space-y-6 px-4 pb-24">
              <div className='space-y-4 max-w-3xl mx-auto'>
                <h1 className='font-display five-title font-semibold'>
                  How I became a Fullstack Developer: <span className="main-gradient">a full journey from zero to production.</span>
                </h1>
                <div className="flex gap-x-4 py-4 items-center">
                  <img src={foto} alt="Sindu Aditya"  className='h-14 w-14 object-cover rounded-xl'/>
                  <div className="">
                    <h4 className='text-xl'>Sindu Aditya Janadi</h4>
                    <p className='font-light'>September 2025 - 12 min read</p>
                  </div>
                </div>
              </div>

              
              <div className='mx-auto max-w-3xl space-y-12'>

                <div className='max-w-2xl space-y-2'>
                  <h3 className='four-title font-semibold tracking-tight'>
                    Latar Belakang
                  </h3>
                  <div className='text-xl font-light leading-8 whitespace-pre-line'>
                    I&apos;m Sindu Aditya Janadi, Fullstack Developer & Technical Project Lead at Bengkel Koding since September 2024.
                    I started diving deep into backend development because I saw how a well-built system can transform how an organization works.
                    <br />
                    <br />
                    At Bengkel Koding, I design and build multi-tenant SaaS platforms, IoT fleet management, and modular ERP systems used by dozens of organizations.
                    Beberapa proyek utama saya antara lain:
                    <br />
                    <br />
                    <span className="bh">FIK-Apps</span> — Platform multi-tenant SaaS untuk organisasi dengan isolasi data row-level.
                    <br />
                    <span className="bh">FleetTrack</span> — Sistem pemantauan armada IoT dengan real-time WebSocket dan time-series database.
                    <br />
                    <span className="bh">Suite Aplikasi Bisnis</span> — ERP modular yang terintegrasi untuk operasional bisnis end-to-end.
                    <br />
                    <span className="bh">Klora</span> — Aplikasi yang lolos seleksi ASEAN di ECOTHON 2024 untuk solusi sustainability.
                    <br />
                    <br />
                    Dalam perjalanan saya, saya selalu bertanya pada diri sendiri: <span className="bh">bagaimana membangun sistem yang benar-benar production-ready?</span>
                    Di sini saya akan berbagi apa yang saya pelajari, kesalahan yang saya buat, dan cara terbaik untuk kamu memulai.
                  </div>
                </div>

                <div className='max-w-2xl space-y-2'>
                  <h3 className='four-title font-semibold tracking-tight'>
                    Fondasi: PHP & Laravel
                  </h3>
                  <div className='text-xl font-light leading-8 whitespace-pre-line'>
                    If you want to become a fullstack developer, <span className="bh">the first foundation you need to master is backend programming languages.</span>
                    Saya memulai dengan <span className="bh">PHP</span> dan framework <span className="bh">Laravel</span>. Banyak yang meremehkan PHP, tapi kenyataannya PHP masih menguasai sebagian besar web di dunia.
                    <br />
                    <br />
                    Laravel memberikan struktur yang jelas untuk membangun aplikasi:
                    <ul className="gap-3.5 w-full grid grid-cols-2 my-4 text-white">
                        <li className="w-full bg-gray-800 text-center p-3 rounded-md">
                            MVC Architecture
                        </li>
                        <li className="w-full bg-gray-800 text-center p-3 rounded-md">
                          Eloquent ORM
                        </li>
                        <li className="w-full bg-gray-800 text-center p-3 rounded-md">
                          Blade Templating 
                        </li>
                        <li className="w-full bg-gray-800 text-center p-3 rounded-md">
                          Artisan CLI
                        </li>
                    </ul>

                    Dengan memahami konsep OOP, MVC, dan Clean Code, kamu akan memiliki fondasi yang kuat untuk membangun sistem apapun.
                  </div>
                </div>

                <div className='max-w-2xl space-y-2'>
                  <h3 className='four-title font-semibold tracking-tight'>
                    Database: MySQL & PostgreSQL
                  </h3>
                  <div className='text-xl font-light leading-8 whitespace-pre-line'>
                    A backend without a database is like a car without an engine. <span className="bh">Database design is the most critical skill</span> that a fullstack developer must master.
                    <br />
                    <br />
                    Saya bekerja dengan <span className="bh">MySQL</span> untuk sebagian besar aplikasi web dan <span className="bh">PostgreSQL</span> untuk kebutuhan yang lebih kompleks.
                    Beberapa konsep penting yang saya pelajari:
                    <br />
                    <br />
                    <span className="bh">Normalization</span> — Bagaimana mengorganisasi data untuk mengurangi redundancy.
                    <br />
                    <span className="bh">Migration</span> — Bagaimana mengelola perubahan struktur database secara version-controlled.
                    <br />
                    <span className="bh">Query Optimization</span> — Indexing, query planning, dan cara membuat query yang efisien.
                    <br />
                    <span className="bh">Multi-Tenancy</span> — Row-level isolation untuk memisahkan data per tenant dalam satu database.
                  </div>
                </div>

                <div className='max-w-2xl space-y-2'>
                  <h3 className='four-title font-semibold tracking-tight'>
                    Real-World: Multi-Tenant SaaS
                  </h3>
                  <div className='text-xl font-light leading-8 whitespace-pre-line'>
                    Salah satu tantangan terbesar yang saya hadapi adalah membangun <span className="bh">FIK-Apps</span>, platform multi-tenant SaaS.
                    <br />
                    <br />
                    Multi-tenant artinya satu aplikasi melayani banyak organisasi, tetapi data setiap organisasi harus <span className="bh">terisolasi</span> satu sama lain.
                    Ini bukan sekadar CRUD biasa — ini tentang arsitektur.
                    <br />
                    <br />
                    Saya menggunakan pendekatan <span className="bh">row-level tenancy</span> dengan tenant_id di setiap tabel. Setiap request harus memastikan user hanya mengakses data milik tenant-nya.
                    <br />
                    <br />
                    Tantangan lainnya adalah <span className="bh">role-based access control</span> — admin, manager, dan user biasa memiliki permission yang berbeda.
                    Laravel&apos;s Gate dan Policy membantu saya mengimplementasikan ini dengan elegan.
                  </div>
                </div>

                <div className='max-w-2xl space-y-2'>
                  <h3 className='four-title font-semibold tracking-tight'>
                    IoT & Real-Time Systems
                  </h3>
                  <div className='text-xl font-light leading-8 whitespace-pre-line'>
                    Proyek <span className="bh">FleetTrack</span> membawa saya ke dunia IoT — sesuatu yang sangat berbeda dari web development biasa.
                    <br />
                    <br />
                    FleetTrack memantau armada kendaraan secara real-time. Setiap kendaraan mengirim data GPS, kecepatan, dan status mesin melalui <span className="bh">MQTT</span>.
                    Saya menggunakan <span className="bh">Laravel Reverb</span> (WebSocket) untuk push data ke dashboard secara real-time.
                    <br />
                    <br />
                    Tantangan utama: <span className="bh">time-series data</span>. Data GPS yang masuk ribuan per menit tidak bisa ditangani dengan database biasa.
                    Saya harus memahami bagaimana mengelola data streaming dengan efisien.
                    <br />
                    <br />
                    The biggest lesson: <span className="bh">a fullstack developer must understand infrastructure.</span>
                    I had to configure VPS, set up Docker containers, and ensure stable production deployments.
                  </div>
                </div>

                <div className='max-w-2xl space-y-2'>
                  <h3 className='four-title font-semibold tracking-tight'>
                    ERP & Modular Systems
                  </h3>
                  <div className='text-xl font-light leading-8 whitespace-pre-line'>
                    <span className="bh">Suite Aplikasi Bisnis</span> adalah proyek paling ambisius saya — membangun ERP modular yang mencakup QC, Warehouse, Payroll, dan HRD.
                    <br />
                    <br />
                    Konsep kuncinya adalah <span className="bh">modularity</span>. Setiap modul harus bisa berdiri sendiri tapi juga terintegrasi dengan modul lain.
                    Ini mengajarkan saya tentang <span className="bh">separation of concerns</span> dan <span className="bh">interface design</span>.
                    <br />
                    <br />
                    Saya menerapkan pendekatan <span className="bh">Clean Architecture</span> — memisahkan business logic dari infrastructure.
                    Setiap modul memiliki service layer, repository pattern, dan DTO untuk memastikan kode tetap maintainable.
                  </div>
                </div>

                <div className='max-w-2xl space-y-2'>
                  <h3 className='four-title font-semibold tracking-tight'>
                    Membangun Proyek Sendiri
                  </h3>
                  <div className='text-xl font-light leading-8 whitespace-pre-line'>
                    I didn&apos;t just learn backend from tutorials. <span className="bh">I learned by building real projects.</span>
                    <br />
                    <br />
                    Mulai dari aplikasi sederhana sampai sistem enterprise — setiap proyek mengajarkan saya sesuatu yang baru.
                    <br />
                    <br />
                    <span className="bh">Klora</span> mengajarkan saya tentang sustainability tech dan bagaimana membangun aplikasi yang lolos seleksi internasional.
                    <br />
                    <span className="bh">DolanRek</span> mengajarkan saya tentang integrasi payment gateway dan real-time maps.
                    <br />
                    <span className="bh">Web E-Voting</span> mengajarkan saya tentang blockchain, enkripsi, dan keamanan data.
                    <br />
                    <br />
                    If you want to learn backend, <span className="bh">start building something.</span> It doesn&apos;t have to be perfect, just start.
                  </div>
                </div>

                <div className='max-w-2xl space-y-2'>
                  <h3 className='four-title font-semibold tracking-tight'>
                    DevOps & Deployment
                  </h3>
                  <div className='text-xl font-light leading-8 whitespace-pre-line'>
                    A backend developer doesn&apos;t just write code — you also need to know how to <span className="bh">deploy and maintain</span> that system.
                    <br />
                    <br />
                    Saya mempelajari:
                    <ul className="gap-3.5 w-full grid grid-cols-2 my-4 text-white">
                        <li className="w-full bg-gray-800 text-center p-3 rounded-md">
                            Docker Containerization
                        </li>
                        <li className="w-full bg-gray-800 text-center p-3 rounded-md">
                          Linux Server Management
                        </li>
                        <li className="w-full bg-gray-800 text-center p-3 rounded-md">
                          Nginx & Reverse Proxy 
                        </li>
                        <li className="w-full bg-gray-800 text-center p-3 rounded-md">
                          CI/CD Pipeline
                        </li>
                    </ul>

                    Pelajaran terbesar: <span className="bh">jangan takut dengan command line.</span> Sebagian besar server berjalan di Linux, jadi kamu harus nyaman bekerja di terminal.
                  </div>
                </div>

                <div className='max-w-2xl space-y-2'>
                  <h3 className='four-title font-semibold tracking-tight'>
                    Kesimpulan
                  </h3>
                  <div className='text-xl font-light leading-8 whitespace-pre-line'>
                    Backend development is not easy to learn, but I wouldn&apos;t say it&apos;s hard either. What you need is <span className="bh">patience, consistency, and the willingness to build something.</span>
                    <br />
                    <br />
                    Don&apos;t be afraid of errors. Don&apos;t be afraid of complex systems. Start small, learn the foundations, and build real projects.
                    <br />
                    <br />
                    Every bug you fix, every system you deploy, every architecture you design — it all adds to your experience.
                    <br />
                    <br />
                    If you ever need help or have questions, feel free to reach out via email or LinkedIn.
                    <br />
                    <br />
                    Cheers,
                    <br />
                    Sindu

                  </div>
                </div>

              </div>
              
            </div>

        </main>
        <ContactSection />
        <Footer />
    </>
  )
}

export default Learn
