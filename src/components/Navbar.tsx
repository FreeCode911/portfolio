import { useEffect, useState } from 'react';
import { Menu, X, Github, Youtube } from 'lucide-react';

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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-accent-400 to-violetx-500 font-display font-extrabold text-ink-950 text-sm transition-transform group-hover:scale-105">
            LYK
          </span>
          <span className="font-display font-semibold tracking-tight text-slate-100 hidden sm:block">
            LegendYt4k
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/FreeCode911"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent-500 to-violetx-500 text-ink-950 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <button
          className="md:hidden grid place-items-center h-10 w-10 rounded-lg text-slate-200 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="px-5 pb-4 pt-1 flex flex-col gap-1 glass">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/FreeCode911"
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-accent-500 to-violetx-500 text-ink-950 text-sm font-semibold"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.youtube.com/channel/UCUkds2ZRG5N2UeR0uqWZ6DA"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/10 text-slate-200 text-sm font-semibold hover:bg-white/5"
          >
            <Youtube className="h-4 w-4" /> YouTube
          </a>
        </div>
      </div>
    </header>
  );
}
