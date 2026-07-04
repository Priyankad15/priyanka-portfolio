import { Reveal } from "./Reveal";
import { education } from "../data/content";

export function Education() {
  return (
    <section id="education" className="relative px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">
            06 · Education
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Academic foundation.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} direction="up" delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-mint/30 hover:shadow-xl hover:shadow-mint/5">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-mint/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
                <h3 className="font-display text-lg font-semibold text-text">{edu.degree}</h3>
                <p className="mt-2 text-sm text-mint-soft">{edu.institution}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-mint/25 bg-mint/5 px-3 py-1 font-mono text-xs text-mint">
                    {edu.score}
                  </span>
                  <span className="font-mono text-xs text-muted-dim">{edu.duration}</span>
                </div>
                <p className="mt-3 text-xs text-muted-dim">{edu.location}</p>
              </div>
            </Reveal>
          ))}

          <Reveal direction="up" delay={0.16}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-border-hover p-7">
              <h3 className="font-display text-base font-semibold text-text">Core Focus Areas</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Data Structures",
                  "Algorithms",
                  "Machine Learning",
                  "Cloud Computing",
                  "Web Technologies",
                  "Database Systems",
                  "Software Engineering",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-bg/40 px-2.5 py-1 font-mono text-[11px] text-muted-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
