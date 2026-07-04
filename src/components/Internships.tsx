import { Reveal } from "./Reveal";
import { internships } from "../data/content";

export function Internships() {
  return (
    <section id="internships" className="relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">
            04 · Internships
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Experience earned outside the classroom.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-mint via-border to-transparent sm:block" />
          <div className="space-y-10">
            {internships.map((job, i) => (
              <Reveal key={job.role} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <div className="relative flex gap-4 sm:gap-6 sm:pl-2">
                  <div className="relative hidden sm:block">
                    <span className="absolute left-0 top-1.5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-mint/40 bg-surface">
                      <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_2px_rgba(52,211,153,0.6)]" />
                    </span>
                  </div>

                  <div className="group min-w-0 flex-1 rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-mint/30 hover:shadow-xl hover:shadow-mint/5 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-text">{job.role}</h3>
                        <p className="mt-1 text-sm font-medium text-mint-soft">{job.company}</p>
                      </div>
                      <span className="rounded-full border border-border-hover bg-bg/60 px-3 py-1 font-mono text-xs text-muted">
                        {job.duration}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-muted-dim">{job.location}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{job.description}</p>

                    <ul className="mt-4 space-y-2">
                      {job.contributions.map((c) => (
                        <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-text/85">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mint" />
                          {c}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-bg/50 px-2.5 py-1 font-mono text-[11px] text-muted-dim"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
