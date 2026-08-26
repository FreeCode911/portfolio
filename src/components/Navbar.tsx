import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Links', href: '#links' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-card shadow-xl shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-emerald-500 font-display font-extrabold text-[#06060b] text-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            LYK
          </span>
          <span className="font-display font-bold tracking-tight text-white/90 text-sm hidden sm:block">
            LegendYt4k
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/FreeCode911"
            target="_blank"
            rel="noreferrer"
            className="ml-3 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 text-[#06060b] text-sm font-bold hover:bg-emerald-400 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden grid place-items-center h-10 w-10 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="px-6 pb-5 pt-2 flex flex-col gap-1 glass-card border-t border-white/[0.06]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.04] rounded-xl transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="https://github.com/FreeCode911"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-500 text-[#06060b] text-sm font-bold hover:bg-emerald-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
