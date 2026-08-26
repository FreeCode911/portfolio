import { Github, Youtube, MessageCircle, Globe, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

interface LinkItem {
  label: string;
  handle: string;
  desc: string;
  url: string;
  icon: typeof Github;
  gradient: string;
  iconColor: string;
  large?: boolean;
}

const links: LinkItem[] = [
  {
    label: 'GitHub',
    handle: '@FreeCode911',
    desc: 'My code, projects, and open-source work — everything I build in public.',
    url: 'https://github.com/FreeCode911',
    icon: Github,
    gradient: 'from-slate-500/20 to-gray-500/10',
    iconColor: 'text-slate-300',
    large: true,
  },
  {
    label: 'YouTube',
    handle: 'LegendYt4k',
    desc: 'Builds, projects, and creative content.',
    url: 'https://www.youtube.com/channel/UCUkds2ZRG5N2UeR0uqWZ6DA',
    icon: Youtube,
    gradient: 'from-red-500/20 to-red-400/10',
    iconColor: 'text-red-300',
  },
  {
    label: 'Discord',
    handle: 'discord.gg/5qbfgzjx7V',
    desc: 'Join the community, hang out, and get help.',
    url: 'https://discord.gg/5qbfgzjx7V',
    icon: MessageCircle,
    gradient: 'from-indigo-500/20 to-blue-500/10',
    iconColor: 'text-indigo-300',
  },
  {
    label: 'ShiftAPI',
    handle: 'shiftapi.lol',
    desc: 'All-in-one AI API with 14+ models.',
    url: 'https://shiftapi.lol',
    icon: Globe,
    gradient: 'from-emerald-500/20 to-teal-500/10',
    iconColor: 'text-emerald-300',
  },
];

export function Links() {
  return (
    <section id="links" className="relative py-28 sm:py-36">
      {/* Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/70">
              Links
            </div>
            <h2 className="mt-4 sm:mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              Find me online
            </h2>
            <p className="mt-5 text-lg text-white/35 leading-relaxed max-w-2xl">
              All the places I hang out and share my work. Come say hi.
            </p>
          </div>
        </Reveal>

        {/* Bento grid */}
        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* GitHub — large card */}
          {links.slice(0, 1).map((l, i) => (
            <Reveal key={l.label} delay={i * 80}>
              <LinkCard link={l} large />
            </Reveal>
          ))}

          {/* Rest */}
          {links.slice(1).map((l, i) => (
            <Reveal key={l.label} delay={(i + 1) * 80}>
              <LinkCard link={l} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkCard({ link, large }: { link: LinkItem; large?: boolean }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex flex-col h-full overflow-hidden rounded-2xl glass-card border border-white/[0.06] hover:border-white/[0.12] transition-all duration-400 hover-lift hover:shadow-2xl hover:shadow-black/40 ${
        large ? 'sm:col-span-2 lg:col-span-1 p-7 sm:p-8' : 'p-5 sm:p-6'
      }`}
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      />

      <div className="relative flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3.5">
            <div className="grid place-items-center h-11 w-11 rounded-xl bg-white/[0.04] text-white/60 group-hover:scale-110 transition-transform duration-500">
              <link.icon className={`h-5 w-5 ${link.iconColor}`} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white/90">{link.label}</h3>
              <div className="text-xs font-mono text-emerald-400/60">{link.handle}</div>
            </div>
          </div>
          <ArrowUpRight className="h-4 w-4 text-white/20 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>

        <p className="mt-4 text-sm text-white/35 leading-relaxed flex-1">{link.desc}</p>
      </div>
    </a>
  );
}
