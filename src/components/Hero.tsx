import { ArrowUpRight, Github, Youtube, MessageCircle, Sparkles, Terminal } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function Hero() {
  const { ref: titleRef, visible: titleVisible } = useReveal();
  const { ref: subtitleRef, visible: subtitleVisible } = useReveal();
  const { ref: ctasRef, visible: ctasVisible } = useReveal();

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute -top-40 right-[5%] w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] orb-emerald rounded-full blur-[130px] opacity-60" />
      <div className="absolute top-1/4 -left-24 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] orb-violet rounded-full blur-[110px] opacity-50" />
      <div className="absolute bottom-10 right-[25%] w-[280px] h-[280px] orb-amber rounded-full blur-[90px] opacity-40" />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 w-full pt-28 sm:pt-32 pb-20 sm:pb-24 lg:pt-28">
        <div className="grid lg:grid-cols-[1fr_380px] items-center gap-12 lg:gap-16 xl:gap-24">
          {/* Left: Text */}
          <div className="max-w-3xl">
            {/* Availability badge */}
            <div
              ref={titleRef}
              className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card text-[11px] sm:text-xs font-medium tracking-wide text-emerald-300/80 transition-all duration-700 will-change-transform ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for collaboration
            </div>

            {/* Heading */}
            <div
              ref={subtitleRef}
              className={`mt-7 sm:mt-8 transition-all duration-700 delay-100 will-change-transform ${
                subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <h1 className="font-display font-extrabold tracking-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.05] text-white">
                Hi, I'm{' '}
                <span className="text-gradient-main">LegendYt4k</span>
              </h1>
              <p className="mt-2 font-display font-semibold text-lg sm:text-xl lg:text-2xl text-white/40 italic">
                but you can call me LYK
              </p>
            </div>

            {/* Description */}
            <p className="mt-6 sm:mt-7 text-base sm:text-lg text-white/40 leading-relaxed max-w-xl">
              Founder of <span className="text-white/75 font-medium">LYK Cloud</span> — building
              AI-powered APIs, creative Discord bots, and developer tools that actually ship. From{' '}
              <span className="text-emerald-300/70">ShiftAPI</span> (14+ AI models) to{' '}
              <span className="text-violet-300/70">PicGenV</span> (image & video generation).
            </p>

            {/* CTAs */}
            <div
              ref={ctasRef}
              className={`mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 transition-all duration-700 delay-200 will-change-transform ${
                ctasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-emerald-500 text-[#06060b] font-bold text-sm tracking-wide hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover-lift"
              >
                Explore projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl glass-card text-white/70 font-semibold text-sm hover:text-white hover:border-white/10 transition-all duration-300 hover-lift"
              >
                Get in touch
              </a>
            </div>

            {/* Social pills */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-2 sm:gap-2.5">
              <SocialPill href="https://github.com/FreeCode911" label="GitHub">
                <Github className="h-4 w-4" />
                <span className="text-xs font-medium hidden sm:inline">GitHub</span>
              </SocialPill>
              <SocialPill href="https://www.youtube.com/channel/UCUkds2ZRG5N2UeR0uqWZ6DA" label="YouTube">
                <Youtube className="h-4 w-4" />
                <span className="text-xs font-medium hidden sm:inline">YouTube</span>
              </SocialPill>
              <SocialPill href="https://discord.gg/5qbfgzjx7V" label="Discord">
                <MessageCircle className="h-4 w-4" />
                <span className="text-xs font-medium hidden sm:inline">Discord</span>
              </SocialPill>
            </div>
          </div>

          {/* Right: Code terminal */}
          <CodeTerminal />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/15 hover:text-emerald-400/50 transition-colors duration-500"
        aria-label="Scroll down"
      >
        <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-current/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </div>
      </a>
    </section>
  );
}

function SocialPill({
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
      className="group inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl glass-card text-white/40 hover:text-emerald-300 hover:border-emerald-500/15 transition-all duration-300 hover-lift"
    >
      {children}
    </a>
  );
}

function CodeTerminal() {
  return (
    <div className="relative hidden md:block">
      {/* Glow behind */}
      <div className="absolute -inset-8 rounded-3xl bg-emerald-500/[0.04] blur-3xl" />

      <div className="relative rounded-2xl overflow-hidden glass-card border border-white/[0.07] shadow-2xl shadow-black/40">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 border-b border-white/[0.05]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/[0.08]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/[0.08]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/[0.08]" />
          </div>
          <span className="ml-2.5 sm:ml-3 text-[10px] sm:text-[11px] font-mono text-white/25">lyk@cloud ~ $</span>
        </div>

        {/* Code */}
        <div className="p-4 sm:p-6 font-mono text-[12px] sm:text-sm leading-relaxed space-y-2.5 sm:space-y-3">
          <CodeLine prefix="$" accent>lyk --status</CodeLine>
          <CodeLine><span className="text-emerald-400/70">→</span> Founder of <span className="text-amber-300/80">LYK Cloud</span></CodeLine>
          <CodeLine><span className="text-emerald-400/70">→</span> Creator of <span className="text-violet-300/80">ShiftAPI</span></CodeLine>
          <CodeLine><span className="text-emerald-400/70">→</span> Creator of <span className="text-pink-300/80">PicGenV</span></CodeLine>

          <div className="h-px bg-white/[0.03] my-3 sm:my-4" />

          <CodeLine prefix="$" accent>shiftapi models --count</CodeLine>
          <CodeLine><span className="text-emerald-400/70">✓</span> 14+ models ready</CodeLine>
          <CodeLine><span className="text-emerald-400/70">✓</span> Text · Image · Video</CodeLine>

          <div className="h-px bg-white/[0.03] my-3 sm:my-4" />

          <CodeLine prefix="$" accent>picgenv --invite</CodeLine>
          <CodeLine><span className="text-emerald-400/70">✓</span> Bot online · <span className="text-white/50">pic-gen-v.vercel.app</span></CodeLine>

          <div className="flex items-center gap-1.5 mt-3 sm:mt-4">
            <span className="text-emerald-400/50">$</span>
            <span className="w-1.5 sm:w-2 h-3 sm:h-4 bg-emerald-400/50 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeLine({ children, prefix, accent }: { children: React.ReactNode; prefix?: string; accent?: boolean }) {
  return (
    <div className="flex items-start gap-2">
      {prefix && <span className={`font-bold ${accent ? 'text-emerald-400/60' : 'text-white/15'}`}>{prefix}</span>}
      <span className={accent ? 'text-white/70 font-medium' : 'text-white/40'}>{children}</span>
    </div>
  );
}
