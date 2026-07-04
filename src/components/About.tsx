import { Reveal } from "./Reveal";
import { aboutText, aboutStats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, value: display } = useCountUp(value);
  return (
    <Reveal direction="up" delay={delay} className="rounded-2xl border border-border bg-card p-6">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="font-display text-4xl font-semibold text-gradient-mint sm:text-5xl">
        {display}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">01 · About</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Engineer first, student by enrollment.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-5">
            {aboutText.map((para, i) => (
              <Reveal key={i} direction="up" delay={i * 0.08}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">{para}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {aboutStats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
