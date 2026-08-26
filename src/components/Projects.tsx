import { ArrowUpRight, Globe, Bot, Building2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/About';

interface Project {
  name: string;
  tagline: string;
  desc: string;
  url?: string;
  meta: string;
  icon: typeof Globe;
  accent: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: 'ShiftAPI',
    tagline: 'shiftapi.lol',
    desc: 'A web API service powering apps and integrations. Built and operated under ShiftAPI Pvt Ltd.',
    url: 'https://shiftapi.lol',
    meta: 'Owner · ShiftAPI Pvt Ltd',
    icon: Globe,
    accent: 'from-violetx-500/25 to-accent-500/20 text-violetx-300',
    featured: true,
  },
  {
    name: 'PicGenV',
    tagline: 'Discord Bot',
    desc: 'A Discord bot for image generation. Invite it to your server and start creating.',
    url: 'https://discord.com/oauth2/authorize?client_id=1345227880271183903',
    meta: 'Owner · PicGenV',
    icon: Bot,
    accent: 'from-accent-500/25 to-violetx-500/20 text-accent-300',
    featured: true,
  },
  {
    name: 'LegendYt4k',
    tagline: 'YouTube Channel',
    desc: 'My YouTube channel where I share builds, projects, and creative content.',
    url: 'https://www.youtube.com/channel/UCUkds2ZRG5N2UeR0uqWZ6DA',
    meta: 'Creator',
    icon: Building2,
    accent: 'from-amber-500/20 to-accent-500/20 text-amber-300',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Projects" title="Things I've built" />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            A selection of products and projects I own and maintain. Each one is live and
            ready for you to check out.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={`group relative block h-full overflow-hidden rounded-2xl glass p-7 hover:border-violetx-400/50 transition-all duration-300 hover:-translate-y-1 ${
        project.featured ? 'lg:row-span-1' : ''
      }`}
    >
      <div className={`grid place-items-center h-14 w-14 rounded-xl bg-gradient-to-br ${project.accent} mb-5 transition-transform group-hover:scale-110`}>
        <project.icon className="h-7 w-7" />
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-xl text-slate-100 group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <div className="mt-0.5 text-xs font-mono text-accent-400">{project.tagline}</div>
        </div>
        <span className="grid place-items-center h-9 w-9 rounded-lg border border-white/10 text-slate-400 group-hover:text-violetx-300 group-hover:border-violetx-400/50 transition-colors">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <p className="mt-4 text-sm text-slate-400 leading-relaxed">{project.desc}</p>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-slate-500">{project.meta}</span>
        {project.url && (
          <span className="text-xs font-medium text-violetx-400 group-hover:text-violetx-300">
            Visit →
          </span>
        )}
      </div>
    </a>
  );
}
