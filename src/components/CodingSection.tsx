import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { TechIcon } from "./TechIcon";
import {
  codingStats,
  dsaRoadmap,
  problemSolvingSkillCards,
  currentFocus,
  expertiseAreas,
  openForTags,
  codingSocialLinks,
  developerQuote,
  profile,
} from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, value: display } = useCountUp(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-mint/30 hover:bg-card-hover sm:p-6"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="font-display text-3xl font-semibold text-gradient-mint sm:text-4xl"
      >
        {display}
        {suffix}
      </div>
      <p className="mt-1.5 text-xs leading-snug text-muted sm:text-sm">{label}</p>
    </motion.div>
  );
}

function DsaTimeline() {
  return (
    <div className="flex flex-wrap gap-2.5 sm:gap-3">
      {dsaRoadmap.map((topic, i) => {
        const done = topic.status === "completed";
        return (
          <motion.div
            key={topic.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors duration-300 sm:text-[13px] ${
              done
                ? "border-mint/30 bg-mint/8 text-mint-soft"
                : "border-amber-400/25 bg-amber-400/5 text-amber-300"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${done ? "bg-mint" : "animate-pulse bg-amber-400"}`}
            />
            {topic.name}
          </motion.div>
        );
      })}
    </div>
  );
}

function SkillTriadCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {problemSolvingSkillCards.map((card, i) => (
        <Reveal key={card.title} direction="up" delay={i * 0.08}>
          <div className="h-full rounded-2xl border border-border bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint/30 hover:shadow-xl hover:shadow-mint/5">
            <span className="text-2xl">{card.icon}</span>
            <h4 className="mt-3 font-display text-base font-semibold text-text">{card.title}</h4>
            <ul className="mt-3 space-y-1.5">
              {card.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-muted">
                  <span className="h-1 w-1 flex-shrink-0 rounded-full bg-mint" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}


function CurrentFocusGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {currentFocus.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="rounded-xl border border-border bg-card/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-mint/25"
        >
          <p className="text-[13px] font-medium text-text/90">{item.label}</p>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-bg/80">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.progress}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.05 + 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-mint to-mint-soft"
            />
          </div>
          <p className="mt-1.5 font-mono text-[11px] text-muted-dim">{item.progress}%</p>
        </motion.div>
      ))}
    </div>
  );
}

function ExpertiseGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {expertiseAreas.map((area, i) => (
        <Reveal key={area.title} direction="up" delay={i * 0.06}>
          <div className="h-full rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-mint/30">
            <span className="text-xl">{area.icon}</span>
            <h4 className="mt-2.5 font-display text-sm font-semibold text-text">{area.title}</h4>
            <ul className="mt-2.5 space-y-1.5">
              {area.items.map((item) => (
                <li key={item} className="text-[12.5px] leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function ConnectAndOpenFor() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal direction="left">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-dim">Let's Connect</p>
        <div className="flex flex-wrap gap-3">
          {codingSocialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-2.5 rounded-xl border border-border bg-card/70 px-4 py-2.5 text-sm font-medium text-text/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-mint/30 hover:bg-card-hover"
            >
              <TechIcon name={link.icon} className="h-5 w-5" />
              {link.label}
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal direction="right">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-dim">Open For</p>
        <div className="flex flex-wrap gap-2.5">
          {openForTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-full border border-mint/25 bg-mint/5 px-3.5 py-1.5 text-xs font-medium text-mint-soft"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

function DeveloperQuote() {
  return (
    <Reveal direction="up">
      <div className="relative overflow-hidden rounded-2xl border border-mint/20 bg-card/60 px-6 py-10 text-center backdrop-blur-sm sm:px-12 sm:py-14">
        <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_80%_at_50%_0%,rgba(52,211,153,0.1),transparent)]" />
        <span className="font-display text-3xl text-mint/40 sm:text-4xl">“</span>
        <p className="mx-auto max-w-2xl font-display text-lg font-medium leading-snug text-text sm:text-2xl">
          {developerQuote}
        </p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-dim">
          — {profile.name}
        </p>
      </div>
    </Reveal>
  );
}

export function CodingSection() {
  return (
    <section id="coding" className="relative px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">
            03 · Problem Solving
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Competitive Programming &amp; Problem Solving
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Building strong analytical thinking and coding interview skills through consistent Data
            Structures &amp; Algorithms practice.
          </p>
        </Reveal>

        {/* Coding platform stats */}
        <Reveal direction="up" delay={0.05} className="mt-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {codingStats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 0.08} />
            ))}
          </div>
        </Reveal>

        {/* DSA roadmap */}
        <div className="mt-16">
          <Reveal direction="up">
            <h3 className="font-display text-xl font-semibold text-text">Problem Solving &amp; DSA Roadmap</h3>
            <p className="mt-1.5 text-sm text-muted">
              Topics practiced so far — mint marks what's solid, amber marks what's actively in progress.
            </p>
          </Reveal>
          <div className="mt-6">
            <DsaTimeline />
          </div>
        </div>

        {/* Key problem solving skill cards */}
        <div className="mt-16">
          <Reveal direction="up">
            <h3 className="font-display text-xl font-semibold text-text">Key Problem Solving Skills</h3>
          </Reveal>
          <div className="mt-6">
            <SkillTriadCards />
          </div>
        </div>


        {/* Current focus */}
        <div className="mt-16">
          <Reveal direction="up">
            <h3 className="font-display text-xl font-semibold text-text">Current Focus</h3>
          </Reveal>
          <div className="mt-6">
            <CurrentFocusGrid />
          </div>
        </div>

        {/* Expertise areas */}
        <div className="mt-16">
          <Reveal direction="up">
            <h3 className="font-display text-xl font-semibold text-text">Key Areas of Expertise</h3>
          </Reveal>
          <div className="mt-6">
            <ExpertiseGrid />
          </div>
        </div>

        {/* Connect + open for */}
        <div className="mt-16">
          <ConnectAndOpenFor />
        </div>

        {/* Quote */}
        <div className="mt-16">
          <DeveloperQuote />
        </div>
      </div>
    </section>
  );
}
