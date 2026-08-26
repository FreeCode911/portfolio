import { Code2, Server, Bot, Rocket } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const stats = [
  { value: '3+', label: 'Projects shipped' },
  { value: '2', label: 'Products owned' },
  { value: '1', label: 'YouTube channel' },
  { value: '∞', label: 'Ideas in queue' },
];

const focus = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Building clean, functional interfaces and tools that people actually use.',
  },
  {
    icon: Server,
    title: 'APIs & Backends',
    desc: 'Designing reliable services like ShiftAPI that power other apps.',
  },
  {
    icon: Bot,
    title: 'Discord Bots',
    desc: 'Crafting bots and community tools, including PicGenV.',
  },
  {
    icon: Rocket,
    title: 'Content Creation',
    desc: 'Sharing builds and tutorials on the LegendYt4k YouTube channel.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A bit about me"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 max-w-3xl text-lg text-slate-400 leading-relaxed">
            I'm <span className="text-slate-200 font-medium">LegendYt4k</span> — most people
            online know me as <span className="text-accent-300 font-medium">LYK</span>. I spend
            my time building APIs, Discord bots, and creative web tools, and I run the
            LegendYt4k YouTube channel where I share what I make. I'm the owner of
            ShiftAPI and PicGenV, both part of ShiftAPI Pvt Ltd.
          </p>
        </Reveal>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="glass rounded-2xl p-6 hover:border-violetx-400/40 transition-colors">
                <div className="font-display font-extrabold text-4xl text-gradient">
                  {s.value}
                </div>
                <div className="mt-1.5 text-sm text-slate-400">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Focus cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {focus.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group h-full glass rounded-2xl p-6 hover:border-violetx-400/50 hover:-translate-y-1 transition-all duration-300">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-violetx-500/20 to-accent-500/20 text-accent-300 group-hover:from-violetx-500/30 group-hover:to-accent-500/30 transition-colors">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-lg text-slate-100">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <div className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-violetx-400">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-slate-50 tracking-tight">
        {title}
      </h2>
    </div>
  );
}
