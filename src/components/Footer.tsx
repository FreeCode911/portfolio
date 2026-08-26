import { Github, Youtube, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-accent-400 to-violetx-500 font-display font-extrabold text-ink-950 text-xs">
              LYK
            </span>
            <div>
              <div className="font-display font-semibold text-slate-200 text-sm">LegendYt4k</div>
              <div className="text-xs text-slate-500">Developer · Creator · Builder</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FooterIcon href="https://github.com/FreeCode911" label="GitHub">
              <Github className="h-4.5 w-4.5" />
            </FooterIcon>
            <FooterIcon href="https://www.youtube.com/channel/UCUkds2ZRG5N2UeR0uqWZ6DA" label="YouTube">
              <Youtube className="h-4.5 w-4.5" />
            </FooterIcon>
            <FooterIcon href="https://discord.gg/5qbfgzjx7V" label="Discord">
              <MessageCircle className="h-4.5 w-4.5" />
            </FooterIcon>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} LegendYt4k (LYK). ShiftAPI Pvt Ltd. All rights reserved.
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
      className="grid place-items-center h-10 w-10 rounded-lg border border-white/10 text-slate-400 hover:text-violetx-300 hover:border-violetx-400/50 transition-colors"
    >
      {children}
    </a>
  );
}
