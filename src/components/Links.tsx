import { Github, Youtube, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/About';

interface LinkItem {
  label: string;
  handle: string;
  desc: string;
  url: string;
  icon: typeof Github;
  color: string;
}

const links: LinkItem[] = [
  {
    label: 'GitHub',
    handle: '@FreeCode911',
    desc: 'My code, projects, and open-source work.',
    url: 'https://github.com/FreeCode911',
    icon: Github,
    color: 'hover:border-slate-400/50',
  },
  {
    label: 'YouTube',
    handle: 'LegendYt4k',
    desc: 'My channel — builds, projects, and content.',
    url: 'https://www.youtube.com/channel/UCUkds2ZRG5N2UeR0uqWZ6DA',
    icon: Youtube,
    color: 'hover:border-red-400/50',
  },
  {
    label: 'Discord',
    handle: 'discord.gg/5qbfgzjx7V',
    desc: 'Join my Discord community and hang out.',
    url: 'https://discord.gg/5qbfgzjx7V',
    icon: MessageCircle,
    color: 'hover:border-indigo-400/50',
  },
];

export function Links() {
  return (
    <section id="links" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Links" title="Find me online" />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            All the places I hang out and share my work. Come say hi.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 90}>
              <a
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className={`group flex h-full items-start gap-4 rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 ${l.color}`}
              >
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-white/5 text-slate-200 group-hover:scale-110 transition-transform">
                  <l.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold text-slate-100">{l.label}</h3>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-violetx-300 transition-colors" />
                  </div>
                  <div className="mt-0.5 text-xs font-mono text-violetx-400 truncate">{l.handle}</div>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{l.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
