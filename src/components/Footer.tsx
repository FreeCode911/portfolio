import { Github, Youtube, MessageCircle, ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-emerald-500 font-display font-extrabold text-[#06060b] text-xs">
              LYK
            </span>
            <div>
              <div className="font-display font-bold text-white/80 text-sm">LegendYt4k</div>
              <div className="text-[11px] text-white/30">Founder · LYK Cloud</div>
            </div>
          </div>

          {/* Right: Socials + back-to-top */}
          <div className="flex items-center gap-2.5">
            <FooterIcon href="https://github.com/FreeCode911" label="GitHub">
              <Github className="h-[15px] w-[15px]" />
            </FooterIcon>
            <FooterIcon href="https://www.youtube.com/channel/UCUkds2ZRG5N2UeR0uqWZ6DA" label="YouTube">
              <Youtube className="h-[15px] w-[15px]" />
            </FooterIcon>
            <FooterIcon href="https://discord.gg/5qbfgzjx7V" label="Discord">
              <MessageCircle className="h-[15px] w-[15px]" />
            </FooterIcon>

            <div className="w-px h-5 bg-white/[0.06] mx-1" />

            <a
              href="#top"
              aria-label="Back to top"
              className="grid place-items-center h-9 w-9 rounded-lg border border-white/[0.06] text-white/30 hover:text-emerald-300 hover:border-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <ArrowUp className="h-[15px] w-[15px]" />
            </a>
          </div>
        </div>

        <div className="mt-7 pt-5 border-t border-white/[0.04] text-center text-[11px] text-white/20 font-mono">
          © {new Date().getFullYear()} LegendYt4k · ShiftAPI Pvt Ltd
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid place-items-center h-9 w-9 rounded-lg border border-white/[0.06] text-white/30 hover:text-emerald-300 hover:border-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
