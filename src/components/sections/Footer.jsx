export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950/90 py-12 px-4 sm:px-6 lg:px-8 text-neutral-500 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-bold text-sm">
            IT
          </div>
          <span className="font-heading font-bold text-white text-base">ITSA</span>
          <span className="text-xs text-neutral-500">
            • Information Technology Student's Association
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-neutral-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#domains" className="hover:text-cyan-400 transition-colors">Domains</a>
          <a href="#events" className="hover:text-cyan-400 transition-colors">Events</a>
          <a href="#team" className="hover:text-cyan-400 transition-colors">Council</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        <div className="text-xs text-neutral-500">
          © {new Date().getFullYear()} ITSA. Built by the ITSA Tech Team.
        </div>
      </div>
    </footer>
  );
}
