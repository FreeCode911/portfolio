import { Star, ExternalLink, Code2, GitFork } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

interface Repo {
  name: string;
  description: string;
  url: string;
  language: string | null;
  stars: number;
  topics: string[];
  gradient: string;
  iconColor: string;
}

const repos: Repo[] = [
  {
    name: 'AnoUpload',
    description: 'Anonymous file uploader using GitHub cloud storage. Upload anything without signing up.',
    url: 'https://github.com/FreeCode911/AnoUpload',
    language: 'HTML',
    stars: 6,
    topics: ['upload', 'cloud', 'storage'],
    gradient: 'from-emerald-500/15 to-teal-500/8',
    iconColor: 'text-emerald-300',
  },
  {
    name: 'TopPast',
    description: 'Anonymous PastBin using GitHub cloud storage. Share code snippets with anyone.',
    url: 'https://github.com/FreeCode911/TopPast',
    language: 'HTML',
    stars: 2,
    topics: ['pastbin', 'cloud', 'storage'],
    gradient: 'from-violet-500/15 to-purple-500/8',
    iconColor: 'text-violet-300',
  },
  {
    name: 'PyVeger',
    description: 'Self-hosted Python server management panel — run, monitor, and control bots/scripts with file editor, live logs, and Discord control.',
    url: 'https://github.com/FreeCode911/PyVeger',
    language: 'Python',
    stars: 1,
    topics: ['python', 'panel', 'hosting'],
    gradient: 'from-amber-500/15 to-orange-500/8',
    iconColor: 'text-amber-300',
  },
  {
    name: 'DomainForge',
    description: 'Create, manage, and organize subdomains directly from your Discord server.',
    url: 'https://github.com/FreeCode911/DomainForge',
    language: 'Python',
    stars: 0,
    topics: ['discord', 'subdomains', 'dns'],
    gradient: 'from-pink-500/15 to-rose-500/8',
    iconColor: 'text-pink-300',
  },
  {
    name: 'Minolink',
    description: 'Node.js and MongoDB-based URL shortener that creates easy-to-share short links.',
    url: 'https://github.com/FreeCode911/Minolink',
    language: 'JavaScript',
    stars: 1,
    topics: ['url-shortener', 'nodejs', 'mongodb'],
    gradient: 'from-sky-500/15 to-blue-500/8',
    iconColor: 'text-sky-300',
  },
  {
    name: 'YAUploader',
    description: 'Automate YouTube video uploads with zero manual work. Set it and forget it.',
    url: 'https://github.com/FreeCode911/YAUploader',
    language: 'JavaScript',
    stars: 1,
    topics: ['youtube', 'automation', 'upload'],
    gradient: 'from-red-500/15 to-red-400/8',
    iconColor: 'text-red-300',
  },
  {
    name: 'PteroServerBot',
    description: 'Discord bot for managing Pterodactyl Panel servers with auth, server creation, and built-in resource templates.',
    url: 'https://github.com/FreeCode911/PteroServerBot',
    language: 'Python',
    stars: 0,
    topics: ['discord', 'pterodactyl', 'server'],
    gradient: 'from-teal-500/15 to-cyan-500/8',
    iconColor: 'text-teal-300',
  },
];

const languageColors: Record<string, string> = {
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-400',
  Python: 'bg-green-400',
  HTML: 'bg-orange-400',
  EJS: 'bg-orange-300',
};

export function Repos() {
  return (
    <section id="repos" className="relative py-28 sm:py-36">
      {/* Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300/70">
              <Code2 className="h-3 w-3" />
              Open Source
            </div>
            <h2 className="mt-4 sm:mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              Public repositories
            </h2>
            <p className="mt-5 text-lg text-white/35 leading-relaxed max-w-2xl">
              Open-source projects and tools I've built and shared with the community.
            </p>
          </div>
        </Reveal>

        {/* Repos grid */}
        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {repos.map((repo, i) => (
            <Reveal key={repo.name} delay={Math.min(i * 60, 400)}>
              <RepoCard repo={repo} />
            </Reveal>
          ))}
        </div>

        {/* View all link */}
        <Reveal delay={500}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/FreeCode911?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-sm font-medium text-white/50 hover:text-emerald-300 hover:border-emerald-500/20 transition-all duration-300"
            >
              View all repositories
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl glass-card border border-white/[0.06] hover:border-white/[0.12] p-4 sm:p-5 transition-all duration-400 hover-lift hover:shadow-2xl hover:shadow-black/40"
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${repo.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      />

      <div className="relative flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display font-bold text-[15px] text-white/90 group-hover:text-white truncate">
            {repo.name}
          </h3>
          <ExternalLink className="h-3.5 w-3.5 text-white/20 group-hover:text-emerald-300 transition-colors shrink-0 ml-2" />
        </div>

        {/* Description */}
        <p className="text-[13px] text-white/35 leading-relaxed flex-1 line-clamp-3">
          {repo.description}
        </p>

        {/* Footer: language + stars */}
        <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {repo.language && (
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-2 h-2 rounded-full ${languageColors[repo.language] || 'bg-gray-400'}`}
                />
                <span className="text-[11px] text-white/40">{repo.language}</span>
              </div>
            )}
          </div>
          {repo.stars > 0 && (
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-amber-400/60 fill-amber-400/60" />
              <span className="text-[11px] text-white/40">{repo.stars}</span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
