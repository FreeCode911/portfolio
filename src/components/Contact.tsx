import { Mail, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass p-10 sm:p-14 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-violetx-500/25 blur-[100px]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-violetx-300">
                <Mail className="h-3.5 w-3.5" />
                Let's connect
              </div>
              <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl text-slate-50 tracking-tight">
                Want to work together <br className="hidden sm:block" />
                or just say hi?
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-slate-400 leading-relaxed">
                The fastest way to reach me is through Discord or any of my social links
                below. I'm always open to new ideas and collaborations.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://discord.gg/5qbfgzjx7V"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-violetx-500 text-ink-950 font-semibold hover:shadow-lg hover:shadow-violetx-500/30 transition-all hover:-translate-y-0.5"
                >
                  Join my Discord <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#links"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass text-slate-200 font-semibold hover:bg-white/5 transition-colors"
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
