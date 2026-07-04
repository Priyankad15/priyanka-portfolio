import { useState } from "react";
import { motion } from "framer-motion";

type MockupKind = "map" | "dashboard" | "social";
type Accent = "mint" | "violet" | "amber";

const ACCENT_HEX: Record<Accent, string> = {
  mint: "#34d399",
  violet: "#a78bfa",
  amber: "#fbbf24",
};

/** Abstract UI illustration standing in for a live screenshot. */
function AbstractUI({ kind, accent }: { kind: MockupKind; accent: Accent }) {
  const stroke = ACCENT_HEX[accent];
  const soft =
    accent === "mint"
      ? "rgba(52,211,153,0.18)"
      : accent === "violet"
        ? "rgba(167,139,250,0.18)"
        : "rgba(251,191,36,0.18)";

  if (kind === "map") {
    return (
      <svg viewBox="0 0 400 240" className="h-full w-full">
        <rect width="400" height="240" fill="#0f1117" />
        <rect x="24" y="24" width="220" height="22" rx="11" fill="#171a23" stroke="#21242d" />
        <circle cx="36" cy="35" r="3" fill={stroke} />
        <rect x="46" y="31" width="110" height="8" rx="4" fill="#2c3039" />
        <rect x="256" y="24" width="64" height="22" rx="11" fill={soft} stroke={stroke} strokeWidth="1" />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={24 + i * 60}
            y="64"
            width="52"
            height="36"
            rx="8"
            fill="#171a23"
            stroke={i === 1 ? stroke : "#21242d"}
            strokeWidth={i === 1 ? 1.5 : 1}
          />
        ))}
        <rect x="24" y="116" width="352" height="100" rx="10" fill="#13151c" stroke="#21242d" />
        <path d="M24 170 L120 150 L200 178 L290 140 L376 165" stroke="#21242d" strokeWidth="1.5" fill="none" />
        {[
          [90, 152],
          [180, 168],
          [260, 145],
          [320, 175],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill={i === 2 ? stroke : "#2c3039"} />
            <circle cx={x} cy={y} r="10" fill="none" stroke={i === 2 ? stroke : "#2c3039"} strokeWidth="1" opacity="0.5" />
          </g>
        ))}
      </svg>
    );
  }

  if (kind === "social") {
    return (
      <svg viewBox="0 0 400 240" className="h-full w-full">
        <rect width="400" height="240" fill="#0f1117" />
        {/* Top stat strip */}
        <rect x="24" y="22" width="352" height="48" rx="10" fill="#171a23" stroke="#21242d" />
        {[
          ["+24%", 0],
          ["1.2k", 1],
          ["8.4k", 2],
          ["94", 3],
        ].map(([val, i]) => (
          <text
            key={i as number}
            x={42 + (i as number) * 86}
            y="50"
            fontFamily="monospace"
            fontSize="13"
            fontWeight="700"
            fill={i === 0 ? stroke : "#cfd2da"}
          >
            {val}
          </text>
        ))}
        {/* Chat bubble (AI assistant) */}
        <rect x="24" y="84" width="190" height="56" rx="12" fill={soft} stroke={stroke} strokeWidth="1" />
        <rect x="38" y="98" width="120" height="7" rx="3" fill={stroke} opacity="0.7" />
        <rect x="38" y="112" width="150" height="7" rx="3" fill={stroke} opacity="0.4" />
        <rect x="232" y="92" width="144" height="44" rx="12" fill="#171a23" stroke="#21242d" />
        <rect x="246" y="104" width="100" height="6" rx="3" fill="#2c3039" />
        <rect x="246" y="116" width="70" height="6" rx="3" fill="#2c3039" />
        {/* Hashtag / caption suggestion chips */}
        {["#growth", "#reels", "#aiwriter"].map((tag, i) => (
          <g key={tag}>
            <rect x={24 + i * 86} y="152" width="78" height="24" rx="12" fill="#171a23" stroke={i === 0 ? stroke : "#21242d"} strokeWidth={i === 0 ? 1.5 : 1} />
            <text x={34 + i * 86} y="168" fontFamily="monospace" fontSize="10" fill={i === 0 ? stroke : "#8b8f9c"}>
              {tag}
            </text>
          </g>
        ))}
        {/* Engagement chart */}
        <rect x="24" y="188" width="352" height="32" rx="8" fill="#13151c" stroke="#21242d" />
        <path
          d="M30 208 L80 198 L130 212 L180 192 L230 206 L280 188 L330 200 L370 195"
          stroke={stroke}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full">
      <rect width="400" height="240" fill="#0f1117" />
      <rect x="0" y="0" width="84" height="240" fill="#13151c" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="18" y={28 + i * 36} width="48" height="10" rx="3" fill={i === 1 ? stroke : "#2c3039"} opacity={i === 1 ? 1 : 0.6} />
      ))}
      <rect x="100" y="20" width="180" height="14" rx="4" fill="#2c3039" />
      <circle cx="362" cy="27" r="12" fill={soft} stroke={stroke} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={100 + i * 96} y="54" width="84" height="70" rx="10" fill="#171a23" stroke={i === 1 ? stroke : "#21242d"} strokeWidth={i === 1 ? 1.5 : 1} />
          <rect x={112 + i * 96} y="66" width="40" height="8" rx="3" fill="#2c3039" />
          <rect x={112 + i * 96} y="98" width={36 - i * 4} height="6" rx="3" fill={i === 1 ? stroke : "#2c3039"} />
        </g>
      ))}
      <rect x="100" y="138" width="276" height="82" rx="10" fill="#13151c" stroke="#21242d" />
      {[40, 65, 30, 80, 55, 70].map((h, i) => (
        <rect key={i} x={116 + i * 40} y={210 - h} width="20" height={h} rx="3" fill={i === 3 ? stroke : "#2c3039"} opacity={i === 3 ? 1 : 0.7} />
      ))}
    </svg>
  );
}

export function BrowserMockup({
  url,
  kind,
  accent,
  status = "live",
  allowEmbed = false,
}: {
  url: string;
  kind: MockupKind;
  accent: Accent;
  status?: "live" | "in-progress";
  allowEmbed?: boolean;
}) {
  const [hover, setHover] = useState(false);
  // We optimistically try the real site in an iframe when allowEmbed is true.
  // Most production sites send X-Frame-Options / CSP frame-ancestors that
  // silently block embedding — there's no reliable load-error event for
  // that case, so we also race a short timer and fall back to the
  // illustrated preview if the iframe hasn't visibly mounted content.
  const [embedFailed, setEmbedFailed] = useState(!allowEmbed);
  const displayUrl = url.replace(/^https?:\/\//, "");
  const accentHex = ACCENT_HEX[accent];

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-border bg-surface"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center gap-3 border-b border-border bg-card/80 px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-md bg-bg/70 px-3 py-1">
          <span className="relative flex h-1.5 w-1.5">
            {status === "live" && (
              <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-mint opacity-75" />
            )}
            <span className={`h-1.5 w-1.5 rounded-full ${status === "live" ? "bg-mint" : "bg-amber-400"}`} />
          </span>
          <span className="truncate font-mono text-[11px] text-muted-dim">{displayUrl}</span>
        </div>
        <span
          className={`hidden font-mono text-[10px] uppercase tracking-wide sm:inline ${
            status === "live" ? "text-mint-soft" : "text-amber-300"
          }`}
        >
          {status === "live" ? "live" : "in progress"}
        </span>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${displayUrl} live preview in a new tab`}
        className="relative block aspect-[16/10] cursor-pointer overflow-hidden"
      >
        {allowEmbed && !embedFailed ? (
          <iframe
            src={url}
            title={`${displayUrl} live preview`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            onError={() => setEmbedFailed(true)}
            className="pointer-events-none h-full w-full border-0"
          />
        ) : (
          <motion.div
            animate={{ scale: hover ? 1.07 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            <AbstractUI kind={kind} accent={accent} />
          </motion.div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
          style={{ boxShadow: `inset 0 0 0 2px ${accentHex}` }}
        />
        {/* Live Preview hover overlay */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-bg/55 backdrop-blur-[2px] transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <span
            className="flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide backdrop-blur-sm"
            style={{ borderColor: `${accentHex}66`, color: accentHex, backgroundColor: "rgba(8,9,13,0.7)" }}
          >
            Live Preview
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
}
