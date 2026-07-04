import { motion } from "framer-motion";
import { profile, heroIntro } from "../data/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* LEFT — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/5 px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-mint opacity-75" />
              <span className="h-2 w-2 rounded-full bg-mint" />
            </span>
            <span className="font-mono text-xs text-mint-soft">{profile.availability}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[11vw] font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient-mint">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-4 font-display text-lg font-medium text-text/90 sm:text-2xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 font-mono text-sm text-mint-soft/80"
          >
            {profile.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg"
          >
            {heroIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56 }}
            className="mt-9 flex flex-col flex-wrap items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden rounded-xl bg-mint px-6 py-3 text-center text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-xl border border-border-hover bg-card px-6 py-3 text-center text-sm font-semibold text-text transition-colors hover:border-mint/40 hover:text-mint sm:w-auto"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-xl px-6 py-3 text-center text-sm font-semibold text-muted transition-colors hover:text-text sm:w-auto"
            >
              Contact Me →
            </a>
          </motion.div>
        </div>

        {/* RIGHT — IDE-style status card (signature element) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-mint/10 blur-3xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-2xl shadow-black/40 backdrop-blur-sm"
          >
            {/* fake editor tab bar */}
            <div className="flex items-center gap-2 border-b border-border bg-card/60 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-muted-dim">profile.ts</span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-relaxed">
              <p className="text-muted-dim">// developer status</p>
              <p className="mt-1">
                <span className="text-[#ff79c6]">const</span>{" "}
                <span className="text-mint-soft">dev</span> = {"{"}
              </p>
              <p className="pl-4">
                name: <span className="text-mint">"{profile.name}"</span>,
              </p>
              <p className="pl-4">
                role: <span className="text-mint">"Full-Stack + AI"</span>,
              </p>
              <p className="pl-4">
                status: <span className="text-mint">"shipping"</span>,
              </p>
              <p>{"}"}</p>
            </div>
            <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
              {[
                { label: "Projects", value: "3+" },
                { label: "Internships", value: "2" },
                { label: "CGPA", value: "8.08" },
              ].map((stat) => (
                <div key={stat.label} className="px-3 py-4 text-center">
                  <div className="font-display text-xl font-semibold text-mint-soft">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-dim">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* floating chip */}
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -left-6 top-10 hidden rounded-xl border border-border bg-card px-3 py-2 font-mono text-[11px] text-mint-soft shadow-lg shadow-black/30 sm:block"
          >
            git push origin main ✓
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dim">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-mint to-transparent"
        />
      </motion.div>
    </section>
  );
}
