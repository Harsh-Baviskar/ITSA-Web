import { useState, useRef, useEffect } from 'react';
import BranchedMenu from './BranchedMenu';
import { itsaMenuItems } from '../../data/navigationData';

export default function Navbar({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleSelect = (value) => {
    setIsMenuOpen(false);
    if (onNavigate) {
      onNavigate(value);
    } else {
      const element = document.getElementById(value);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl bg-neutral-900/75 backdrop-blur-xl border border-neutral-800/80 shadow-2xl shadow-cyan-950/20">
        
        {/* ITSA Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            <span>IT</span>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-neutral-900"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg tracking-wider text-white group-hover:text-cyan-400 transition-colors">
              ITSA
            </span>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase -mt-1 font-medium">
              Student's Association
            </span>
          </div>
        </a>

        {/* Quick Nav for Desktop */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#domains" className="hover:text-cyan-400 transition-colors">Domains</a>
          <a href="#events" className="hover:text-cyan-400 transition-colors">Events</a>
          <a href="#team" className="hover:text-cyan-400 transition-colors">Council</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>

        {/* Branched Menu Trigger & Action */}
        <div className="flex items-center gap-3 relative" ref={menuRef}>
          {/* Menu Drawer Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-xl border border-neutral-700/80 bg-neutral-800/80 hover:bg-neutral-800 hover:border-cyan-500/60 text-neutral-200 transition-all cursor-pointer shadow-sm"
            aria-label="Toggle Tree Menu"
          >
            <div className="flex flex-col gap-1 w-4">
              <span className={`h-0.5 bg-cyan-400 rounded-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 bg-neutral-300 rounded-full transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 bg-cyan-400 rounded-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
            <span className="hidden sm:inline">Directory</span>
          </button>

          {/* Join CTA */}
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all cursor-pointer"
          >
            Join ITSA
          </a>

          {/* Branched Menu Dropdown Card */}
          {isMenuOpen && (
            <div className="absolute right-0 top-14 w-72 p-5 rounded-2xl bg-neutral-900/95 backdrop-blur-2xl border border-neutral-700/80 shadow-2xl shadow-cyan-950/40 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-neutral-800">
                <span className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                  Navigation Tree
                </span>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Interactive
                </span>
              </div>
              <BranchedMenu
                items={itsaMenuItems}
                defaultOpen={[0, 1]}
                defaultActive="about"
                onSelect={(val) => handleSelect(val)}
                color="#e5e5e5"
                accentColor="#38bdf8"
                lineColor="#3f3f46"
                width={260}
                rowHeight={34}
                indent={36}
                trunk={14}
                radius={10}
                lineWidth={1.5}
                fontSize={13}
              />
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
