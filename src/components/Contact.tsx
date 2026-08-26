import { MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl glass-card border border-white/[0.08] p-7 sm:p-10 lg:p-16 text-center">
            {/* Background orbs */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] orb-emerald rounded-full blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] orb-violet rounded-full blur-[100px]" />

            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')] bg-repeat bg-[128px_128px]" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-emerald-300/80">
                <Sparkles className="h-3.5 w-3.5" />
                Let's create something
              </div>

              <h2 className="mt-5 sm:mt-6 font-display font-bold text-2xl sm:text-3xl lg:text-5xl text-white tracking-tight leading-[1.1]">
                Want to work together
                <br />
                <span className="text-white/40">or just say hi?</span>
              </h2>

              <p className="mt-4 sm:mt-5 max-w-lg mx-auto text-white/35 leading-relaxed text-sm sm:text-base">
                The fastest way to reach me is through Discord. I'm always open to new ideas,
                collaborations, and interesting projects.
              </p>

              <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a
                  href="https://discord.gg/5qbfgzjx7V"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-500 text-[#06060b] font-bold text-sm tracking-wide hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Join my Discord
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#links"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-card text-white/70 font-semibold text-sm hover:text-white hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  All links
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
