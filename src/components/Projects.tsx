import { ArrowUpRight, Globe, Bot, Cloud, Music, Play, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

interface Project {
  name: string;
  tagline: string;
  desc: string;
  url?: string;
  meta: string;
  icon: typeof Globe;
  gradient: string;
  iconBg: string;
  featured?: boolean;
  tags?: string[];
}

const projects: Project[] = [
  {
    name: 'LYK Cloud',
    tagline: 'Parent Company',
    desc: 'The parent company behind ShiftAPI and PicGenV. Powering AI services, Discord bots, and developer tools under one roof.',
    url: 'https://shiftapi.lol',
    meta: 'Founder',
    icon: Cloud,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/5',
    iconBg: 'from-emerald-500/20 to-teal-500/15 text-emerald-300',
    featured: true,
    tags: ['AI', 'Cloud', 'Infrastructure'],
  },
  {
    name: 'ShiftAPI',
    tagline: 'All-in-One AI API',
    desc: '14+ AI models through a single endpoint — text generation (GPT-4.1, Llama, DeepSeek, Grok), image generation (Flux, Kling), and utility services.',
    url: 'https://shiftapi.lol',
    meta: 'Creator',
    icon: Globe,
    gradient: 'from-violet-500/20 via-purple-500/10 to-fuchsia-500/5',
    iconBg: 'from-violet-500/20 to-purple-500/15 text-violet-300',
    featured: true,
    tags: ['API', '14+ Models', 'AI'],
  },
  {
    name: 'PicGenV',
    tagline: 'AI Generation Bot',
    desc: 'Discord bot for AI image and video generation with multiple models. Invite it to your server and start creating instantly.',
    url: 'https://discord.com/oauth2/authorize?client_id=1345227880271183903',
    meta: 'Creator',
    icon: Bot,
    gradient: 'from-pink-500/20 via-rose-500/10 to-red-500/5',
    iconBg: 'from-pink-500/20 to-rose-500/15 text-pink-300',
    featured: true,
    tags: ['Discord', 'Image', 'Video'],
  },
  {
    name: 'iSound',
    tagline: 'Music Bot',
    desc: 'A powerful Discord music bot with multi-server support, high-quality audio streaming, and intuitive controls for production-ready music playback.',
    url: 'https://github.com/FreeCode911',
    meta: 'Creator',
    icon: Music,
    gradient: 'from-amber-500/20 via-orange-500/10 to-yellow-500/5',
    iconBg: 'from-amber-500/20 to-orange-500/15 text-amber-300',
    tags: ['Discord', 'Music', 'Streaming'],
  },
  {
    name: 'LegendYt4k',
    tagline: 'YouTube Channel',
    desc: 'My YouTube channel where I share builds, projects, tutorials, and creative content.',
    url: 'https://www.youtube.com/channel/UCUkds2ZRG5N2UeR0uqWZ6DA',
    meta: 'Creator',
    icon: Play,
    gradient: 'from-red-500/20 via-red-400/10 to-orange-500/5',
    iconBg: 'from-red-500/20 to-red-400/15 text-red-300',
    tags: ['Content', 'Tutorials'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      {/* Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/70">
              Projects
            </div>
            <h2 className="mt-4 sm:mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              Things I've built
            </h2>
            <p className="mt-5 text-lg text-white/35 leading-relaxed max-w-2xl">
              Products and projects I own and maintain. Each one is live and ready for you to check out.
            </p>
          </div>
        </Reveal>

        {/* Project grid — featured large, rest in grid */}
        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Featured: LYK Cloud spans 2 cols on lg */}
          {projects.slice(0, 1).map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <ProjectCard project={p} large />
            </Reveal>
          ))}

          {/* Rest in grid */}
          {projects.slice(1).map((p, i) => (
            <Reveal key={p.name} delay={(i + 1) * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex flex-col h-full overflow-hidden rounded-2xl glass-card border border-white/[0.06] hover:border-white/[0.12] transition-all duration-400 hover-lift hover:shadow-2xl hover:shadow-black/40 ${
        large ? 'md:col-span-2 lg:col-span-1 p-7 sm:p-8' : 'p-6 sm:p-7'
      }`}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      />

      <div className="relative flex flex-col h-full">
        {/* Icon + Arrow */}
        <div className="flex items-start justify-between mb-5">
          <div
            className={`grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br ${project.iconBg} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
          >
            <project.icon className="h-5 w-5" />
          </div>
          <span className="grid place-items-center h-8 w-8 rounded-lg border border-white/[0.08] text-white/30 group-hover:text-emerald-300 group-hover:border-emerald-500/20 transition-all duration-300">
            <ExternalLink className="h-3.5 w-3.5" />
          </span>
        </div>

        {/* Title + tagline */}
        <div>
          <h3 className="font-display font-bold text-xl text-white group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <div className="mt-1 text-xs font-mono text-emerald-400/70">{project.tagline}</div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-white/35 leading-relaxed flex-1">{project.desc}</p>

        {/* Tags */}
        {project.tags && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-medium text-white/40 border border-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between">
          <span className="text-xs text-white/30 font-medium">{project.meta}</span>
          <span className="text-xs font-medium text-emerald-400/60 group-hover:text-emerald-300 transition-colors">
            Visit →
          </span>
        </div>
      </div>
    </a>
  );
}
