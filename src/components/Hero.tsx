import { Github, Youtube, MessageCircle, ArrowUpRight, Sparkles, Music2, ShieldCheck, ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 -right-24 h-[30rem] w-[30rem] rounded-full bg-violetx-500/25 blur-[130px] animate-pulse-glow" />
      <div className="absolute top-1/3 -left-28 h-[24rem] w-[24rem] rounded-full bg-accent-500/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-violetx-300/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 w-full pt-28 pb-20 lg:pt-24">
        <div className="grid lg:grid-cols-[1fr_420px] items-center gap-14 xl:gap-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-violetx-300">
              <Sparkles className="h-3.5 w-3.5" />
              Developer · Creator · Builder
            </div>

            <h1 className="mt-6 font-display font-extrabold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-slate-50">
              Hi, I'm <span className="text-gradient">LegendYt4k</span>
              <br className="hidden sm:block" />
              <span className="font-serif italic text-fuchsia-200 text-4xl sm:text-5xl lg:text-6xl"> they call me LYK</span>
            </h1>

            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
              I build things on the web and beyond — from APIs and Discord bots to creative
              tools. Owner of <span className="text-slate-200 font-medium">ShiftAPI</span> and
              <span className="text-slate-200 font-medium"> PicGenV</span>, and the voice behind
              the <span className="text-slate-200 font-medium">LegendYt4k</span> YouTube channel.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-violetx-500 text-ink-950 font-semibold hover:shadow-lg hover:shadow-violetx-500/30 transition-all hover:-translate-y-0.5"
              >
                View my work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#links"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass text-slate-200 font-semibold hover:bg-white/5 transition-colors"
              >
                All links
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <SocialIcon href="https://github.com/FreeCode911" label="GitHub">
                <Github className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/channel/UCUkds2ZRG5N2UeR0uqWZ6DA" label="YouTube">
                <Youtube className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://discord.gg/5qbfgzjx7V" label="Discord">
                <MessageCircle className="h-5 w-5" />
              </SocialIcon>
            </div>
          </div>

          <ProfilePreview />
        </div>
      </div>

      <a href="#about" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-slate-500 hover:text-violetx-300 transition-colors" aria-label="Scroll down">
        <div className="h-10 w-6 rounded-full border-2 border-current flex justify-center pt-1.5">
          <span className="h-2 w-1 rounded-full bg-current animate-bounce" />
        </div>
      </a>
    </section>
  );
}

function ProfilePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="absolute -inset-5 rounded-[2rem] bg-violetx-500/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111318] shadow-2xl shadow-black/50">
        <div className="profile-banner relative h-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111318]" />
          <span className="profile-rose rose-one">✦</span>
          <span className="profile-rose rose-two">✦</span>
          <span className="profile-rose rose-three">✦</span>
        </div>

        <div className="relative px-6 pb-6">
          <div className="-mt-14 flex items-end justify-between">
            <div className="profile-avatar-wrap">
              <div className="profile-avatar">
                <span className="avatar-stars">✦</span>
                <span className="avatar-mark">LYK</span>
              </div>
              <span className="online-dot" />
            </div>
            <a href="https://discord.gg/5qbfgzjx7V" target="_blank" rel="noreferrer" className="mb-2 rounded-lg bg-[#5865f2] px-4 py-2 text-sm font-semibold text-white hover:bg-[#6975f5] transition-colors">
              Message
            </a>
          </div>

          <div className="mt-3">
            <h2 className="font-serif italic text-3xl font-semibold tracking-wide text-slate-100">LYK</h2>
            <p className="mt-1 text-xs text-slate-400">legendyt4k · lyk</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="profile-pill"><ShieldCheck className="h-3 w-3 text-accent-300" /> DEV</span>
            <span className="profile-pill"><Music2 className="h-3 w-3 text-violetx-300" /> iSound</span>
          </div>

          <div className="mt-5 space-y-2 border-t border-white/5 pt-4 text-xs leading-relaxed text-slate-300">
            <p>Website: <a href="https://shiftapi.lol" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://shiftapi.lol/</a></p>
            <p>Owner : iSound</p>
            <p>Owner : PicGenV</p>
            <p>Owner : ShiftAPI Pvt Ltd</p>
            <p>YouTube: LegendYt4k</p>
          </div>

          <a href="#projects" className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-violetx-300 hover:text-violetx-200 transition-colors">
            Explore my projects <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid place-items-center h-11 w-11 rounded-xl glass purple-glow text-slate-300 hover:text-accent-300 hover:border-violetx-400/50 transition-all hover:-translate-y-0.5">
      {children}
    </a>
  );
}
