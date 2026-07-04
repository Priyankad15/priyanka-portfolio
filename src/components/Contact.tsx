import { useState } from "react";
import { Reveal } from "./Reveal";
import { profile } from "../data/content";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/priyankad15",
    href: profile.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Priyankad15",
    href: profile.github,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.1-.5.1-1.2.1-1.9v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .4 0 .8.1 1.2C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: profile.location,
    href: undefined,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // No backend wired up — this simulates submission so the UI/UX can be
    // demoed; swap in a real endpoint (Formspree, EmailJS, etc.) later.
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  }

  return (
    <section id="contact" className="relative px-5 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">08 · Contact</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's build something worth shipping.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Open to internships, new-grad roles, and anything that needs a builder who cares about the details.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Contact cards */}
          <Reveal direction="left" className="space-y-3">
            {contactLinks.map((item) => {
              const Tag = item.href ? "a" : "div";
              return (
                <Tag
                  key={item.label}
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:translate-x-1.5 hover:border-mint/30 hover:bg-card-hover"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-mint/20 bg-mint/5 text-mint">
                    {item.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wide text-muted-dim">
                      {item.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-text">{item.value}</span>
                  </span>
                </Tag>
              );
            })}
          </Reveal>

          {/* Contact form */}
          <Reveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-muted-dim">
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted-dim focus:border-mint/50"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-muted-dim">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted-dim focus:border-mint/50"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-muted-dim">
                  Message
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about the role or project…"
                  className="w-full resize-none rounded-xl border border-border bg-bg/60 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted-dim focus:border-mint/50"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full rounded-xl bg-mint px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto sm:px-8"
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending…"}
                {status === "sent" && "Sent ✓ — thank you!"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
