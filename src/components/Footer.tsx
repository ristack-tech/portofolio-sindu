export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="footer-logo font-display text-3xl font-extrabold">SA.</span>
            <p className="font-body text-[#727785] mt-2">Backend Engineer</p>
          </div>
          <div className="social-links flex flex-wrap gap-6">
            <a href="#" className="social-link font-mono text-xs font-bold text-[#727785] hover:text-white transition-colors">TWITTER</a>
            <a href="#" className="social-link font-mono text-xs font-bold text-[#727785] hover:text-white transition-colors">LINKEDIN</a>
            <a href="#" className="social-link font-mono text-xs font-bold text-[#727785] hover:text-white transition-colors">GITHUB</a>
            <a href="#" className="social-link font-mono text-xs font-bold text-[#727785] hover:text-white transition-colors">DRIBBBLE</a>
            <a href="#" className="social-link font-mono text-xs font-bold text-[#727785] hover:text-white transition-colors">INSTAGRAM</a>
          </div>
        </div>
        <div className="footer-bottom mt-12 pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-[#727785]">© 2026 Sindu Aditya. All rights reserved.</p>
          <p className="font-mono text-xs text-[#727785]">Build your system</p>
        </div>
      </div>
    </footer>
  )
}
