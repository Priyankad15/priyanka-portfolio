import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { skillGroups } from "../data/content";
import { TechIcon } from "./TechIcon";
import { useInView } from "../hooks/useInView";

function SkillCard({
  name,
  icon,
  level,
  index,
}: {
  name: string;
  icon: string;
  level: number;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col items-center gap-3 overflow-visible rounded-2xl border border-border bg-card/70 px-4 py-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-mint/40 hover:bg-card-hover hover:shadow-xl hover:shadow-mint/10"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.92 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-border-hover bg-bg px-2.5 py-1 font-mono text-[11px] text-mint-soft shadow-lg"
          >
            {level}% proficiency
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(60%_60%_at_50%_0%,rgba(52,211,153,0.14),transparent)]" />

      {/* Floating logo */}
      <motion.span
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3 + (index % 3) * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.15,
        }}
        className="flex h-10 w-10 items-center justify-center"
      >
        <TechIcon name={icon} className="h-8 w-8 drop-shadow-sm" />
      </motion.span>

      <span className="text-xs font-medium text-text/90">{name}</span>

      {/* Progress bar */}
      <div className="flex w-full flex-col gap-1.5">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg/80">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 0.9, delay: index * 0.04 + 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-linear-to-r from-mint to-mint-soft"
          />
        </div>
        <span className="font-mono text-[11px] text-mint-soft">{level}%</span>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">02 · Skills</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A technology ecosystem, not a buzzword list.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Tools I reach for across the stack — from interfaces to infrastructure to the data layer.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} direction="up" delay={gi * 0.05}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-dim">
                {group.emoji} {group.label}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {group.skills.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                    index={si}
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
