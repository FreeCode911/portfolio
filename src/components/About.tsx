import { Code2, Server, Bot, Rocket, Zap, Globe, Cpu, Palette } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const stats = [
  { value: '14+', label: 'AI models', color: 'from-emerald-400 to-teal-300' },
  { value: '3', label: 'Products live', color: 'from-violet-400 to-purple-300' },
  { value: '1', label: 'YouTube channel', color: 'from-amber-400 to-orange-300' },
  { value: '∞', label: 'Ideas brewing', color: 'from-pink-400 to-rose-300' },
];

const focus = [
  {
    icon: Code2,
    title: 'Web & AI',
    desc: 'Building clean, AI-powered interfaces — from the LYK Cloud dashboard to creative web tools.',
    gradient: 'from-emerald-500/15 to-teal-500/10',
    iconColor: 'text-emerald-300',
  },
  {
    icon: Server,
    title: 'AI APIs',
    desc: 'Designing ShiftAPI — 14+ models for text, image, and utility services through one endpoint.',
    gradient: 'from-violet-500/15 to-purple-500/10',
    iconColor: 'text-violet-300',
  },
  {
    icon: Bot,
    title: 'Discord Bots',
    desc: 'Crafting PicGenV — AI image & video generation for Discord servers worldwide.',
    gradient: 'from-amber-500/15 to-orange-500/10',
    iconColor: 'text-amber-300',
  },
  {
    icon: Rocket,
    title: 'Content',
    desc: 'Sharing builds and tutorials on the LegendYt4k YouTube channel.',
    gradient: 'from-pink-500/15 to-rose-500/10',
    iconColor: 'text-pink-300',
  },
];

const tech = [
  { icon: Zap, label: 'TypeScript' },
  { icon: Globe, label: 'React' },
  { icon: Cpu, label: 'Node.js' },
  { icon: Palette, label: 'Tailwind' },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      {/* Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/70">
              About
            </div>
            <h2 className="mt-4 sm:mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              A bit about me
            </h2>
          </div>
        </Reveal>

        {/* Bio + Tech stack side by side */}
        <div className="mt-12 grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          <Reveal delay={80}>
            <p className="text-lg text-white/40 leading-relaxed max-w-2xl">
              I'm <span className="text-white/80 font-medium">LegendYt4k</span> — most people
              online know me as <span className="text-emerald-300/80 font-medium">LYK</span>. I
              spend my time building AI-powered APIs, Discord bots, and creative web tools. I'm the
              founder of <span className="text-white/80 font-medium">LYK Cloud</span>, creator of{' '}
              <span className="text-white/80 font-medium">ShiftAPI</span> — an all-in-one AI API
              with 14+ models — and{' '}
              <span className="text-white/80 font-medium">PicGenV</span>, a Discord bot for AI
              image and video generation.
            </p>
          </Reveal>

          {/* Tech stack chips */}
          <Reveal delay={160}>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <div
                  key={t.label}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card text-sm font-medium text-white/50 hover:text-white/80 hover:border-white/10 transition-all duration-300"
                >
                  <t.icon className="h-3.5 w-3.5 text-emerald-400/60" />
                  {t.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stats grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="glass-card-hover rounded-2xl p-5 sm:p-6 group cursor-default">
                <div className={`font-display font-extrabold text-4xl bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/40 font-medium">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Focus cards */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {focus.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="glass-card-hover rounded-2xl p-5 sm:p-6 group cursor-default h-full">
                <div
                  className={`grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br ${f.gradient} ${f.iconColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-white/90">{f.title}</h3>
                <p className="mt-2.5 text-sm text-white/35 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
