import type { ReactElement } from "react";

// Inline SVG brand marks. Unlike a typical icon-font approach, every icon
// here carries its OWN official brand color baked into the path (not
// currentColor) — per design brief: never flatten these to monochrome.
// className should therefore only ever set size (h-_/w-_), never color.

export const TechIcon = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, ReactElement> = {
    java: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#f89820"
          d="M8.85 18.4s-.9.55.65.7c1.9.25 2.9.2 5-.2 0 0 .55.35 1.3.6-4.65 2-10.55-.1-6.95-1.1m-.55-2.5s-1 .75.6.9c2.1.2 3.75.25 6.6-.3 0 0 .35.4.95.6-5.6 1.65-11.85.15-8.15-1.2M14.85 12s1.15 1-.65 1.8c-3.5 1.5-7.85.8-9.4-.1 0 0 .55.5 1.6.7 4.05.8 8.4-.5 8.45-2.4M9.6 9.85s-2.4 1.45-.5 2c2.9.85 5.85.9 8.95.1 0 0 .55.55 1.45.85-5.8 1.7-13.6-.05-9.9-2.95M19.4 17.05s.9.75-1 1.35c-3.65 1.1-9.3 1.45-12.7.1-.7-.3.6-.85 1-1 .4-.15.55-.15.55-.15-.65-.45-4.25.9-1.85 1.3 6.65 1.05 12.1.45 13.4-1.3.2-.25.6-.6.6-.6m-9.65-8c-1.65 1.05-1.1 2.7-.05 3.6.95.85.85 1.2.85 1.2-.3.3-.6.65-.6.65 1.3-.3 2.4-1.45 2.05-2.5-.3-1-1.7-1.6-2.25-2.95m6.7-.85c.6 1.5-1.9 3.1-1.9 3.1s2.05-.45 2.55-1.85c.45-1.2-.65-2.05-.65-1.25m-4 .2c-1.55-.15-1.5 1.3-.5 1.65.95.35 2.1.55 2.1.55s-1.2-.3-1.6-2.2"
        />
        <path
          fill="#5382a1"
          d="M9.95 2.5s-1.4 1.4.4 3.15c2.5 2.5.65 4.5.65 4.5s1.6-.9 2.45-2.3c.95-1.6.4-3.6-.5-4.5-.9-.9-.5-1.5-1-2.5-.55-1.1-1-2.35-1-2.35s-.65 1.9-1.05 3.5c-.4 1.6-.45 2.5-.45 2.5"
        />
      </svg>
    ),
    python: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#3776ab"
          d="M11.9.6c-1 0-2 .1-2.9.3-2.6.5-3 1.5-3 3.4v2.5h6v.8H4c-2 0-3.7 1.2-4.3 3.4-.7 2.6-.7 4.2 0 6.7.5 1.9 1.7 3.3 3.6 3.3h2.3v-3c0-2.2 1.9-4.2 4.2-4.2h4.6c1.9 0 3.5-1.6 3.5-3.5V4.3c0-1.8-1.6-3.2-3.5-3.5C13.5.6 12.6.6 11.9.6zM8.3 2.5a1 1 0 110 2 1 1 0 010-2z"
        />
        <path
          fill="#ffd43b"
          d="M12.1 23.4c1 0 2-.1 2.9-.3 2.6-.5 3-1.5 3-3.4v-2.5h-6v-.8h8.9c2 0 3.7-1.2 4.3-3.4.7-2.6.7-4.2 0-6.7-.5-1.9-1.7-3.3-3.6-3.3h-2.3v3c0 2.2-1.9 4.2-4.2 4.2H10.5c-1.9 0-3.5 1.6-3.5 3.5v5.9c0 1.8 1.6 3.2 3.5 3.5 1.5.2 2.4.3 1.6.3zm3.6-1.9a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" fill="#f7df1e" />
        <path
          fill="#000"
          d="M22.03 18.6c-.18-1.13-.92-2.08-3.12-2.97-.76-.34-1.6-.58-1.85-1.14-.09-.34-.1-.53-.04-.74.16-.7.96-.92 1.6-.72.4.13.78.45 1.01.96 1.07-.7 1.07-.7 1.83-1.16-.27-.42-.42-.6-.6-.78-.65-.73-1.52-1.1-2.94-1.07-.25.03-.5.06-.74.13-.71.18-1.39.55-1.79 1.05-1.2 1.34-.85 3.7.6 4.66 1.44 1.04 3.54 1.27 3.8 2.24.25 1.18-.87 1.56-1.98 1.42-.82-.18-1.27-.59-1.77-1.34l-1.84 1.06c.21.48.45.69.81 1.1 1.74 1.76 6.08 1.67 6.86-1 .03-.1.25-.73.08-1.7l.06.08zm-8.55-6.81h-2.28c0 1.96-.01 3.91-.01 5.88 0 1.25.07 2.4-.14 2.75-.34.74-1.22.65-1.62.5-.41-.2-.62-.49-.86-.91-.07-.12-.12-.22-.14-.22l-1.84 1.13c.31.64.77 1.19 1.34 1.55.86.54 2.04.71 3.27.43.79-.23 1.48-.7 1.85-1.44.52-.95.41-2.1.4-3.39.02-2.08 0-4.16 0-6.27l-.01-.01z"
        />
      </svg>
    ),
    c: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#a8b9cc"
          d="M16.5 8c-1.5-2.5-4-4-7-4C4.7 4 1 7.6 1 12s3.7 8 8.5 8c3 0 5.5-1.5 7-4l-3.5-2c-.7 1.2-1.9 2-3.5 2-2.5 0-4.5-2-4.5-4s2-4 4.5-4c1.6 0 2.8.8 3.5 2l3.5-2zM23 9h-1.5V7.5H20V9h-1.5v1.5H20V12h1.5v-1.5H23V9z"
        />
      </svg>
    ),
    react: (
      <svg viewBox="-11.5 -10.23 23 20.46" className={className} aria-hidden="true">
        <circle r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="2" fill="#3178c6" />
        <path
          fill="#fff"
          d="M12.1 18.7v-2.2H8.9v2.2h3.2zM13 11.1H9.9v1.8h1.6v6.7h1.9v-6.7h1.6v-1.8zm6.4 0c-1.9 0-3.1 1-3.1 2.5 0 1.3.8 1.9 2.2 2.5 1 .4 1.4.7 1.4 1.2 0 .5-.4.8-1.1.8-.8 0-1.4-.4-1.8-1l-1.5 1c.6 1.1 1.7 1.7 3.3 1.7 1.9 0 3.2-1 3.2-2.6 0-1.4-.8-2-2.2-2.6-1.1-.5-1.5-.7-1.5-1.2 0-.4.3-.7.9-.7.6 0 1 .3 1.4.8l1.4-1c-.6-.9-1.5-1.4-2.6-1.4z"
        />
      </svg>
    ),
    html5: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#e34f26"
          d="M1.5 0h21l-1.9 21.6L12 24l-8.6-2.4L1.5 0zm16.2 5.4H6.3l.2 2.7h10.9l-.3 3.2H8.7l.3 2.7h7.8l-.4 3.9-4.4 1.2-4.4-1.2-.3-3.1H4.6l.5 5.3 6.9 1.9 6.9-1.9 1-10.7H6.1l-.2-2.3h11.6l.2-1.6z"
        />
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#1572b6"
          d="M1.5 0h21l-1.9 21.6L12 24l-8.6-2.4L1.5 0zm17.1 4.5H5.4l.5 5.4h9.8l-.4 4-3.3 1-3.3-1-.2-2.3H5.7l.4 4.4 5.9 1.9 5.9-1.9 1-10.8H6L5.9 6h12.4l.3-1.5z"
        />
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#06b6d4"
          d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.1-1.8 3.5-1.5.75.17 1.3.66 1.9 1.2.97.93 2.1 2 4.6 2 2.7 0 4.3-1.3 5-4-1 1.3-2.1 1.8-3.5 1.5-.75-.17-1.3-.66-1.9-1.2-.97-.93-2.1-2-4.6-2zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.1-1.8 3.5-1.5.75.17 1.3.65 1.9 1.2.97.93 2.1 2 4.6 2 2.7 0 4.3-1.3 5-4-1 1.3-2.1 1.8-3.5 1.5-.75-.17-1.3-.65-1.9-1.2-.97-.93-2.1-2-4.6-2z"
        />
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#5fa04e"
          d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm5.7 16.6c0 1.5-1.4 2.4-3.4 2.4-1.7 0-3-.6-3.6-1.8l1.5-.9c.3.6 1 1 1.9 1 1 0 1.6-.4 1.6-1 0-.6-.7-.8-1.8-1.1-1.5-.4-3-1-3-2.7 0-1.5 1.3-2.4 3.1-2.4 1.5 0 2.6.5 3.3 1.6l-1.4.9c-.4-.5-.9-.8-1.7-.8-.8 0-1.3.4-1.3.9 0 .6.7.8 1.7 1.1 1.6.5 3.1 1 3.1 2.8zM9 8.8H7.4v6.4h-1.6V8.8H4.2V7.4H9v1.4z"
        />
      </svg>
    ),
    express: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#ffffff"
          d="M.2 16.5c0-3.3 2.1-5.6 5.2-5.6 3 0 4.8 2.1 4.8 5.3v.7H2.2c.2 1.7 1.4 2.8 3.2 2.8 1.2 0 2.1-.4 2.9-1.3l1.4 1.3c-1 1.2-2.5 1.9-4.4 1.9C2.3 21.6.2 19.5.2 16.5zm2-1h6c-.1-1.5-1.1-2.6-2.8-2.6-1.6 0-2.9 1.1-3.2 2.6zM23.8 21.3h-2.5l-2.7-3.8-2.7 3.8h-2.4l3.9-5.3-3.7-5h2.5l2.5 3.5 2.5-3.5h2.4l-3.7 5 3.9 5.3z"
        />
      </svg>
    ),
    api: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#34d399" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.5 8 12 11.8 4.5 8 12 4.2zM4 9.7l7 3.5v7.1l-7-3.5V9.7zm9 10.6v-7.1l7-3.5v7.1l-7 3.5z" />
      </svg>
    ),
    postgresql: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#336791"
          d="M17.1 0c-1.7 0-3.5.5-5 1.4C9.4-.2 5.8-.4 3.4 1.5 1 3.4.3 6.9 1.5 10.2c-.6 1-.9 2.2-.7 3.5.4 3 3 5.4 6 5.7 1 2.4 3.3 4.1 6 4.1.4 0 .8 0 1.2-.1.5.5 1.1.6 1.7.6.9 0 1.7-.4 2.1-1.2.3-.5.4-1.1.3-1.7 1.7-1.4 2.7-3.5 2.7-5.8v-.4c1.4-.9 2.2-2.5 2.2-4.2 0-1.1-.4-2.1-1-3 .3-1.4 0-3-.9-4.2C19.7.7 18.4 0 17.1 0z"
        />
      </svg>
    ),
    mysql: (
      <svg viewBox="0 0 32 24" className={className} aria-hidden="true">
        <text x="0" y="18" fill="#00758f" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="bold">
          my
        </text>
        <text x="13" y="18" fill="#f29111" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="bold" fontStyle="italic">
          SQL
        </text>
      </svg>
    ),
    supabase: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <defs>
          <linearGradient id="supaGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#249361" />
            <stop offset="100%" stopColor="#3ecf8e" />
          </linearGradient>
        </defs>
        <path fill="url(#supaGrad)" d="M13.3 23.4c-.5.6-1.5.3-1.5-.5V14.5H4.2c-1.3 0-2-1.5-1.1-2.5L10.7.6c.5-.6 1.5-.3 1.5.5v8.4h7.6c1.3 0 2 1.5 1.1 2.5l-7.6 11.4z" />
      </svg>
    ),
    git: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#f05033"
          d="M23.5 10.7L13.3.5c-.7-.7-1.7-.7-2.4 0L8.7 2.7l2.7 2.7c.7-.3 1.6-.1 2.2.5.6.6.8 1.5.5 2.2l2.7 2.6c.7-.2 1.6 0 2.2.5.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.6-.6-.8-1.6-.4-2.3l-2.5-2.5v6.5c.2.1.4.2.5.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.2-.2.4-.3.7-.4V9.6c-.2-.1-.5-.2-.7-.4-.6-.6-.8-1.5-.5-2.2L8.1 4.2.5 11.8c-.7.7-.7 1.7 0 2.4l10.2 10.2c.7.7 1.7.7 2.4 0l10.4-10.4c.7-.7.7-1.7 0-2.4l-.1-.1z"
        />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#ffffff"
          d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.1-.5.1-1.2.1-1.9v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .4 0 .8.1 1.2C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z"
        />
      </svg>
    ),
    vscode: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#007acc"
          d="M17 1.6L7.5 9.8 2.4 6 .5 7l4.7 5-4.7 5 1.9 1 5.1-3.8L17 22.4l5.5-2.6V4.2L17 1.6zm0 4.4l-6.4 6 6.4 6V6z"
        />
      </svg>
    ),
    vite: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <defs>
          <linearGradient id="viteGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#41d1ff" />
            <stop offset="100%" stopColor="#bd34fe" />
          </linearGradient>
          <linearGradient id="viteGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffea83" />
            <stop offset="100%" stopColor="#ffdd35" />
          </linearGradient>
        </defs>
        <path fill="url(#viteGrad1)" d="M23.6 3.5l-11 19.7c-.2.4-.8.4-1 0L.5 3.5c-.2-.5.2-1 .7-1l11 1.9 11-1.9c.5 0 .9.5.4 1z" />
        <path fill="url(#viteGrad2)" d="M16.2 1.1L9.4 2.3 8.8 7l6.8-4.6c.3-.2.7.4.6.7z" />
      </svg>
    ),
    ml: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="5" r="2.3" fill="#34d399" />
        <circle cx="5" cy="12" r="2.3" fill="#a78bfa" />
        <circle cx="19" cy="12" r="2.3" fill="#fbbf24" />
        <circle cx="12" cy="19" r="2.3" fill="#34d399" />
        <path d="M12 7.3v9.4M7.3 12h9.4" stroke="#5d6170" strokeWidth="1.3" fill="none" />
      </svg>
    ),
    data: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#34d399" d="M4 20V10h3v10H4z" />
        <path fill="#a78bfa" d="M10.5 20V4h3v16h-3z" />
        <path fill="#fbbf24" d="M17 20v-7h3v7h-3z" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#60a5fa" d="M3 3v18h18v-2H5V3H3zm14.5 3l-4 4-2.5-2.5L6 12.5 7.5 14l4-4 2.5 2.5L19 7l-1.5-1z" />
      </svg>
    ),
    stats: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#f472b6" d="M5 18v-7h2v7H5zm6 0V6h2v12h-2zm6 0v-4h2v4h-2z" />
      </svg>
    ),
    // ── Newly added technologies ──────────────────────────────
    aws: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#ff9900"
          d="M6.8 13.4c0 .3 0 .5.1.6.1.1.2.3.3.4l.1.1c0 .1-.1.2-.2.3l-.6.4c-.1 0-.2.1-.3.1-.1 0-.2 0-.3-.1-.1-.1-.3-.3-.4-.4-.1-.2-.2-.3-.3-.5-.7.8-1.6 1.2-2.6 1.2-.8 0-1.4-.2-1.8-.7-.5-.4-.7-1-.7-1.8 0-.8.3-1.4.8-1.9.6-.5 1.3-.7 2.2-.7.3 0 .6 0 1 .1.3 0 .7.1 1 .2v-.6c0-.6-.1-1.1-.4-1.3-.3-.3-.7-.4-1.3-.4-.3 0-.6 0-.9.1-.3.1-.6.1-.9.3-.1.1-.2.1-.3.1-.1 0-.1 0-.1-.2v-.5c0-.1 0-.2 0-.3.1-.1.1-.1.2-.2.3-.2.7-.3 1.1-.4.4-.1.8-.2 1.3-.2 1 0 1.7.2 2.2.7.4.5.7 1.1.7 2.1v2.8zm-3.6 1.4c.3 0 .6-.1.9-.2.3-.1.6-.3.8-.6.1-.2.2-.3.3-.5.1-.2.1-.4.1-.7v-.3c-.3-.1-.5-.1-.8-.2-.3 0-.5-.1-.8-.1-.6 0-1 .1-1.3.3-.3.2-.4.5-.4 1 0 .4.1.6.3.8.2.2.5.3.9.3zm7.2.9c-.1 0-.2 0-.3-.1-.1-.1-.1-.2-.2-.3L7.7 7.7c0-.1-.1-.2-.1-.3 0-.1.1-.2.2-.2h.9c.1 0 .2 0 .3.1.1.1.1.2.1.3l1.4 5.7 1.3-5.7c0-.1.1-.2.1-.3.1-.1.2-.1.3-.1h.7c.1 0 .2 0 .3.1.1.1.1.2.1.3l1.3 5.8 1.5-5.8c0-.1.1-.2.1-.3.1-.1.2-.1.3-.1h.8c.1 0 .2.1.2.2v.2l-.1.2-2 6.6c0 .1-.1.2-.2.3-.1.1-.2.1-.3.1h-.8c-.1 0-.2 0-.3-.1-.1-.1-.1-.2-.1-.3l-1.3-5.6-1.3 5.6c0 .1-.1.2-.1.3-.1.1-.2.1-.3.1h-.7zm11.6.2c-.4 0-.9-.1-1.3-.2-.4-.1-.7-.3-1-.4-.2-.1-.3-.3-.3-.4v-.5c0-.2.1-.2.2-.2h.1l.2.1c.3.1.6.3.9.3.3.1.6.1 1 .1.5 0 .9-.1 1.2-.3.3-.2.4-.4.4-.7 0-.2-.1-.4-.2-.5-.2-.1-.4-.3-.9-.4l-1.2-.4c-.6-.2-1.1-.5-1.4-.9-.3-.3-.4-.7-.4-1.1 0-.3.1-.6.2-.9.1-.2.3-.5.6-.6.2-.2.5-.3.9-.4.3-.1.7-.2 1.1-.2.2 0 .4 0 .6.1.2 0 .4.1.6.1.2 0 .3.1.5.1.1.1.3.1.4.2.1.1.2.1.2.2.1.1.1.2.1.3v.5c0 .2-.1.2-.2.2-.1 0-.2 0-.4-.1-.5-.2-1.1-.3-1.7-.3-.5 0-.8.1-1.1.2-.3.2-.4.4-.4.7 0 .2.1.4.3.5.2.2.5.3 1 .5l1.2.4c.6.2 1 .5 1.3.8.3.3.4.7.4 1.1 0 .4-.1.6-.2.9-.1.3-.3.5-.6.7-.2.2-.5.3-.9.4-.3.1-.7.2-1.2.2z"
        />
        <path
          fill="#ff9900"
          d="M21.6 18.9c-2.4 1.8-5.9 2.7-8.9 2.7-4.2 0-8-1.6-10.9-4.1-.2-.2 0-.4.2-.3 3.1 1.8 7 2.9 11 2.9 2.7 0 5.7-.6 8.4-1.7.4-.2.7.2.2.5z"
        />
        <path
          fill="#ff9900"
          d="M22.6 17.7c-.3-.4-2-.2-2.7-.1-.2 0-.2-.2-.1-.3.9-.6 2.3-.4 2.5-.2.2.2-.1 1.6-.9 2.3-.1.1-.3 0-.2-.1.2-.5.6-1.6.4-1.6z"
        />
      </svg>
    ),
    mongodb: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#47a248"
          d="M12.6 23.7s-.2-1.4-.4-1.4c-1.7-.1-3.3-.7-4.6-1.7-2.2-1.6-3.5-4.1-3.6-6.8C3.8 9.3 6 5.4 9.5 3.2c.8-.5 1.7-.9 2.6-1.1.1 0 .2.1.2.2-.1 1.4-.2 2.8-.1 4.2.1 2 .5 3.9 1.3 5.8.5 1.2 1.1 2.4 1.7 3.5.4.8.7 1.6.8 2.5.2 1.4.1 2.8-.2 4.2-.1.4-.2.9-.4 1.3-.1.1-.2 0-.3-.1zm.7-15.4c-.1-1.3-.1-2.6.1-3.9 0-.1.1-.2.2-.1 1.2.7 2.3 1.6 3.1 2.7 1.5 2 2.3 4.4 2.3 6.9 0 2.6-.9 5.1-2.5 7.1-.5.6-1 1.1-1.6 1.6-.1.1-.2 0-.2-.1.2-.7.3-1.4.3-2.1.1-1.3-.1-2.6-.5-3.8-.4-1.2-1-2.3-1.5-3.4-.6-1.5-1-3-1-4.6 0-.1.1-.2.2-.2.4-.1.8-.1 1.1-.1z"
        />
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#2496ed"
          d="M22.3 9.2c-.5-.3-1.6-.5-2.5-.3-.1-.9-.6-1.6-1.4-2.2l-.3-.2-.2.3c-.4.5-.5 1.3-.5 1.9-.1.5.1 1 .3 1.4-.4.2-1 .4-1.5.4H1.3l-.1.4c-.1 1.3.1 2.6.8 3.7.8 1.3 2 2 3.6 2.3 1.9.3 3.9.1 5.6-.6 2.4-.9 4.2-2.6 5.2-5 1.4.1 2.7-.2 3.5-1.2.1-.1.2-.2.3-.4l.1-.2-.2-.1z"
        />
        <path fill="#2496ed" d="M3.3 10.6h2.1V8.7H3.3zm2.7 0h2.1V8.7H6zm2.7 0h2.1V8.7H8.7zm2.7 0h2.1V8.7h-2.1zM6 8h2.1V6.1H6zm2.7 0h2.1V6.1H8.7zm2.7 0h2.1V6.1h-2.1zm0-2.6h2.1V3.5h-2.1zM8.7 10.6h2.1V8.7H8.7z" />
      </svg>
    ),
    fastapi: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#009688" />
        <path fill="#ffffff" d="M13 2.2l-8.4 9.3h6.4l-1.5 10.3L19 11.6h-6.3L13 2.2z" />
      </svg>
    ),
    jwt: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#000000" />
        <path fill="#fb015b" d="M4 12.2l3.2-6.4h2l-3.2 6.4 3.2 6.4h-2L4 12.2z" />
        <path fill="#fb015b" d="M11.2 5.8h1.6v12.8h-1.6z" />
        <path fill="#fb015b" d="M20 12.2l-3.2 6.4h-2l3.2-6.4-3.2-6.4h2L20 12.2z" />
      </svg>
    ),
    googleoauth: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#4285f4"
          d="M23.5 12.3c0-.8-.1-1.6-.2-2.4H12v4.5h6.5c-.3 1.5-1.2 2.8-2.5 3.6v3h4.3c2.5-2.3 3.2-5.7 3.2-8.7z"
        />
        <path
          fill="#34a853"
          d="M12 24c3.2 0 6-1 8-2.8l-4.3-3c-1.1.8-2.5 1.3-3.7 1.3-3 0-5.5-2-6.4-4.7H1.2v3.1C3.1 21.4 7.2 24 12 24z"
        />
        <path
          fill="#fbbc05"
          d="M5.6 14.8c-.2-.7-.4-1.4-.4-2.2 0-.8.1-1.5.4-2.2V7.3H1.2C.4 9 0 10.7 0 12.6s.4 3.6 1.2 5.3l4.4-3.1z"
        />
        <path
          fill="#ea4335"
          d="M12 4.8c1.6 0 3.1.6 4.3 1.6l3.8-3.7C18 1 15.2 0 12 0 7.2 0 3.1 2.6 1.2 6.3l4.4 3.1c.9-2.7 3.4-4.6 6.4-4.6z"
        />
      </svg>
    ),
    leetcode: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#ffa116"
          d="M16.1 22.3c-1 1-2.3 1.6-3.7 1.6-1.4 0-2.8-.5-3.8-1.5l-4.2-4c-2-1.9-2.1-5.1-.1-7.1l5.5-5.8c1-1 2.4-1.6 3.8-1.6h.1c1.4 0 2.7.5 3.7 1.5l2.2 2.1c.5.5.5 1.3 0 1.8-.5.5-1.3.5-1.8 0L15.6 7.2c-.5-.5-1.3-.8-2-.8-.8 0-1.5.3-2 .8L6 13c-1 1-1 2.6.1 3.6l4.2 4c.5.5 1.2.8 2 .8.7 0 1.4-.3 2-.8l2.2-2.3c.5-.5 1.3-.5 1.8 0 .5.5.5 1.3 0 1.8l-2.2 2.2z"
        />
        <path
          fill="#b3b3b3"
          d="M9.6 14.7c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3h10.7c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3H9.6zM12.7.7l3-.7-2.3 6.8-2.9.6L12.7.7z"
        />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#0a66c2" />
        <path
          fill="#ffffff"
          d="M7.1 9.6H4.4V19h2.7V9.6zM5.7 5c-.9 0-1.5.6-1.5 1.4 0 .8.6 1.4 1.5 1.4.9 0 1.5-.6 1.5-1.4C7.2 5.6 6.6 5 5.7 5zm5.4 4.6H8.5V19h2.6v-5.2c0-1.4.7-2.2 1.9-2.2 1.1 0 1.6.8 1.6 2.2V19h2.6v-5.7c0-2.6-1.4-3.9-3.3-3.9-1.5 0-2.2.8-2.6 1.4V9.6z"
        />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#34d399" />
        <path fill="#08090d" d="M4 7.5v9c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5v-9l-8 5-8-5z" />
        <path fill="#08090d" d="M4 6.5l8 5 8-5c0-.8-.7-1.5-1.5-1.5h-13C4.7 5 4 5.7 4 6.5z" />
      </svg>
    ),
    // ── New icons ────────────────────────────────────────────────
    nextjs: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#000000" />
        <path fill="#ffffff" d="M7 8.5h2v4.8l5.4-4.8H16L10.5 14 16 19.5h-1.7L7 11.8V8.5z" />
      </svg>
    ),
    bootstrap: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#7952b3" />
        <path
          fill="#ffffff"
          d="M6.5 6h5.2c1.3 0 2.3.3 3 .9.7.6 1 1.4 1 2.4 0 .7-.2 1.3-.5 1.8-.3.4-.8.8-1.4 1 .8.2 1.4.6 1.9 1.1.4.6.7 1.3.7 2.1 0 .7-.2 1.3-.5 1.8s-.8 1-1.4 1.3c-.4.2-.9.3-1.5.4-.6.1-1.4.1-2.4.1H6.5V6zm2.2 5.1h2.7c.7 0 1.2-.2 1.6-.5.3-.3.5-.7.5-1.3 0-.5-.2-.9-.5-1.2-.4-.3-.9-.4-1.6-.4H8.7V11zm0 5.3h3c.7 0 1.3-.2 1.7-.5.4-.3.6-.8.6-1.4s-.2-1-.6-1.3c-.4-.3-1-.5-1.7-.5H8.7V16.3z"
        />
      </svg>
    ),
    postman: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#ff6c37" />
        <path
          fill="#ffffff"
          d="M16 8.5c-.9-.9-2.2-1.5-3.5-1.5-2.8 0-5 2.2-5 5s2.2 5 5 5c1.8 0 3.3-.9 4.2-2.3l-1.3-.7c-.6 1-1.7 1.5-2.9 1.5-1.9 0-3.5-1.6-3.5-3.5S10.6 8.5 12.5 8.5c.9 0 1.8.4 2.4 1L12.5 12l4 .5-1-4-1 .8-.5-1.8z"
        />
      </svg>
    ),
    npm: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#cb3837" />
        <path fill="#ffffff" d="M3 7.5h18v9H12V15H9v1.5H3v-9zm2 1.5v6h2v-4.5h1.5V15H12V9h3v4.5H16.5V9H19v6h-5.5V10.5H12v4.5H5z" />
      </svg>
    ),
    gcp: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#4285f4" d="M12 6l-4 2.3V12l4 2.3 4-2.3V8.3L12 6z" />
        <path fill="#ea4335" d="M8 8.3L3.5 11 3.5 16.5 8 19.2 12 16.9V12L8 8.3z" />
        <path fill="#34a853" d="M16 8.3L12 12v4.9l4 2.3 4.5-2.7V11L16 8.3z" />
        <path fill="#fbbc05" d="M8 19.2L12 21.9l4-2.7-4-2.3-4 2.3z" />
        <path fill="#4285f4" d="M12 2L7.5 4.7 12 7.4l4.5-2.7L12 2z" />
        <path fill="#ea4335" d="M3.5 11L7.5 4.7 8 8.3 3.5 11z" />
        <path fill="#34a853" d="M20.5 11L16.5 4.7 16 8.3l4.5 2.7z" />
      </svg>
    ),
    dsa: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="15" width="3.5" height="7" rx="1" fill="#34d399" />
        <rect x="7.5" y="10" width="3.5" height="12" rx="1" fill="#6ee7b7" />
        <rect x="13" y="6" width="3.5" height="16" rx="1" fill="#34d399" />
        <rect x="18.5" y="3" width="3.5" height="19" rx="1" fill="#a78bfa" />
        <path d="M3.75 12 L9.25 8 L14.75 5 L20.25 3" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    oop: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="2" width="20" height="6" rx="2" fill="#1e1e2e" stroke="#60a5fa" strokeWidth="1.3" />
        <text x="4" y="6.5" fontSize="3.8" fill="#60a5fa" fontFamily="monospace" fontWeight="bold">class</text>
        <rect x="2" y="10" width="9" height="5.5" rx="2" fill="#1e1e2e" stroke="#34d399" strokeWidth="1.2" />
        <text x="3.5" y="14" fontSize="3.2" fill="#34d399" fontFamily="monospace">fields</text>
        <rect x="13" y="10" width="9" height="5.5" rx="2" fill="#1e1e2e" stroke="#a78bfa" strokeWidth="1.2" />
        <text x="14" y="14" fontSize="3.2" fill="#a78bfa" fontFamily="monospace">methods</text>
        <line x1="6.5" y1="8" x2="6.5" y2="10" stroke="#60a5fa" strokeWidth="1.2" />
        <line x1="17.5" y1="8" x2="17.5" y2="10" stroke="#60a5fa" strokeWidth="1.2" />
        <rect x="7" y="17.5" width="10" height="5" rx="2" fill="#1e1e2e" stroke="#fbbf24" strokeWidth="1.2" />
        <text x="8.5" y="21" fontSize="3.2" fill="#fbbf24" fontFamily="monospace">extends</text>
        <line x1="12" y1="15.5" x2="12" y2="17.5" stroke="#fbbf24" strokeWidth="1.2" />
      </svg>
    ),
    dbms: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="#336791" />
        <path d="M3 5v3.5c0 1.7 4 3 9 3s9-1.3 9-3V5" fill="#336791" opacity="0.9" />
        <path d="M3 8.5v3.5c0 1.7 4 3 9 3s9-1.3 9-3V8.5" fill="#336791" opacity="0.75" />
        <path d="M3 12v3.5c0 1.7 4 3 9 3s9-1.3 9-3V12" fill="#336791" opacity="0.6" />
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="none" stroke="#5da0c7" strokeWidth="1" />
      </svg>
    ),
    os: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="1" y="2" width="22" height="16" rx="2" fill="#0d1117" stroke="#6272a4" strokeWidth="1.2" />
        <rect x="1" y="2" width="22" height="4.5" rx="2" fill="#21262d" />
        <circle cx="4.5" cy="4.3" r="1" fill="#ff5555" />
        <circle cx="7.5" cy="4.3" r="1" fill="#f1fa8c" />
        <circle cx="10.5" cy="4.3" r="1" fill="#50fa7b" />
        <rect x="3" y="8.5" width="8" height="1.2" rx="0.6" fill="#50fa7b" opacity="0.8" />
        <rect x="3" y="11" width="12" height="1.2" rx="0.6" fill="#8be9fd" opacity="0.7" />
        <rect x="3" y="13.5" width="6" height="1.2" rx="0.6" fill="#ff79c6" opacity="0.7" />
        <rect x="6" y="19" width="12" height="3" rx="1" fill="#21262d" stroke="#6272a4" strokeWidth="0.8" />
      </svg>
    ),
    networks: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="4.5" r="2.5" fill="#60a5fa" />
        <circle cx="4" cy="18" r="2.5" fill="#34d399" />
        <circle cx="20" cy="18" r="2.5" fill="#a78bfa" />
        <circle cx="12" cy="18" r="2.5" fill="#fbbf24" />
        <line x1="12" y1="7" x2="12" y2="15.5" stroke="#60a5fa" strokeWidth="1.2" />
        <line x1="12" y1="7" x2="5.5" y2="15.8" stroke="#34d399" strokeWidth="1.2" />
        <line x1="12" y1="7" x2="18.5" y2="15.8" stroke="#a78bfa" strokeWidth="1.2" />
        <path d="M6.5 18 Q12 14 17.5 18" stroke="#5d6170" strokeWidth="1" fill="none" strokeDasharray="2 1" />
      </svg>
    ),
  };

  const Icon = icons[name];
  if (!Icon) return null;
  return Icon;
};
