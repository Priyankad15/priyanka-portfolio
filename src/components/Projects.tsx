import { Reveal } from "./Reveal";
import { projects, type Project } from "../data/content";
import { BrowserMockup } from "./BrowserMockup";

const ACCENT_CLASSES: Record<
  Project["accent"],
  { border: string; shadow: string; text: string; bg: string; dot: string; ring: string }
> = {
  mint: {
    border: "hover:border-mint/40",
    shadow: "hover:shadow-mint/10",
    text: "text-mint-soft",
    bg: "bg-mint text-bg",
    dot: "bg-mint",
    ring: "rgba(52,211,153,0.25)",
  },
  violet: {
    border: "hover:border-[#a78bfa]/40",
    shadow: "hover:shadow-[#a78bfa]/10",
    text: "text-[#c4b5fd]",
    bg: "bg-[#a78bfa] text-bg",
    dot: "bg-[#a78bfa]",
    ring: "rgba(167,139,250,0.25)",
  },
  amber: {
    border: "hover:border-amber-400/40",
    shadow: "hover:shadow-amber-400/10",
    text: "text-amber-300",
    bg: "bg-amber-400 text-bg",
    dot: "bg-amber-400",
    ring: "rgba(251,191,36,0.25)",
  },
};

const TECH_VISIBLE_LIMIT = 4;

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">
            05 · Featured Work
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Products, not prototypes.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Full-stack builds where AI and data shape the actual product decisions — each one live,
            not a mockup.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-7 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => {
            const c = ACCENT_CLASSES[project.accent];
            const visibleTech = project.tech.slice(0, TECH_VISIBLE_LIMIT);
            const extraTech = project.tech.length - visibleTech.length;

            return (
              <Reveal
                key={project.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.08}
              >
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card/60 p-1.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                    project.featured ? "border-mint/30" : "border-border"
                  } ${c.border} ${c.shadow}`}
                >
                  {/* Persistent subtle glow for the featured/personal project, hover glow for all */}
                  <div
                    className={`pointer-events-none absolute -inset-px -z-10 rounded-2xl blur-xl transition-opacity duration-500 group-hover:opacity-100 [background:conic-gradient(from_180deg_at_50%_50%,transparent,var(--glow-color),transparent_60%)] ${
                      project.featured ? "opacity-40" : "opacity-0"
                    }`}
                    style={{ "--glow-color": c.ring } as React.CSSProperties}
                  />

                  {project.featured && (
                    <span className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-mint/30 bg-bg/85 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-mint-soft backdrop-blur-sm">
                      ⭐ Personal Project
                    </span>
                  )}

                  <BrowserMockup
                    url={project.liveUrl}
                    kind={project.mockup}
                    accent={project.accent}
                    status={project.status}
                    allowEmbed={project.allowEmbed}
                  />

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-2.5">
                      <h3 className="font-display text-[1.05rem] font-semibold leading-snug text-text">
                        {project.title}
                      </h3>
                      <span
                        className={`flex shrink-0 items-center gap-1.5 rounded-full border border-border-hover bg-bg/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide ${c.text}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                        {project.status === "live" ? "Live" : "In Progress"}
                      </span>
                    </div>
                    <p className={`mt-1 font-mono text-[10px] tracking-wide ${c.text}`}>{project.tagline}</p>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted">{project.description}</p>

                    <ul className="mt-3 space-y-1.5">
                      {project.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex gap-2 text-[12.5px] leading-relaxed text-text/85">
                          <span className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${c.dot}`} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {project.summary && (
                      <p className="mt-3 text-[12px] italic leading-relaxed text-muted-dim">
                        {project.summary}
                      </p>
                    )}

                    {/* Compact tech badges with overflow counter */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {visibleTech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-bg/50 px-1.5 py-0.5 font-mono text-[9px] text-muted-dim"
                        >
                          {t}
                        </span>
                      ))}
                      {extraTech > 0 && (
                        <span className="rounded-md border border-border bg-bg/50 px-1.5 py-0.5 font-mono text-[9px] text-muted-dim">
                          +{extraTech} more
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex gap-2.5 pt-1">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex-1 rounded-xl px-3.5 py-2.5 text-center text-[13px] font-semibold transition-transform hover:-translate-y-0.5 ${c.bg}`}
                      >
                        View Live Project ↗
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-xl border border-border-hover bg-card px-3.5 py-2.5 text-center text-[13px] font-semibold text-text transition-colors hover:border-mint/40 hover:text-mint"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
