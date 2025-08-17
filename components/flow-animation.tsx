"use client"
import type React from "react"

export default function FlowAnimation(): React.JSX.Element {
  // Simplified particle timings
  const fwd = [0, 0.6, 1.2]
  const back = [0.3, 0.9, 1.5]

  return (
    <div className="p-8 bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Data Flow Architecture</h3>
        <p className="text-sm text-white/60">Real-time bidirectional communication pipeline</p>
      </div>

      <div className="relative w-full min-h-[300px] md:min-h-[360px]" style={{ aspectRatio: "16 / 7" }}>
        <svg
          viewBox="0 0 1120 490"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full"
          aria-labelledby="vutrium-flow-title"
          role="img"
        >
          <title id="vutrium-flow-title">
            Vutrium data flow: DLL injection into Rocket League via injector, in-process SDK, and bidirectional
            communication with client.
          </title>

          {/* ====== DEFS ====== */}
          <defs>
            {/* Node fills - simplified */}
            <radialGradient id="node-purple" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.02" />
            </radialGradient>
            <radialGradient id="node-blue" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.03" />
            </radialGradient>
            <radialGradient id="node-green" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.03" />
            </radialGradient>

            {/* Stroke gradients */}
            <linearGradient id="g-purple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="g-blue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="g-green" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            {/* Simplified glow */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Arrowheads */}
            <marker
              id="a-purple"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#g-purple)" />
            </marker>
            <marker id="a-blue" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#g-blue)" />
            </marker>
            <marker id="a-green" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#g-green)" />
            </marker>
          </defs>

          {/* ====== BACKGROUND ====== */}
          <rect x="0" y="0" width="100%" height="100%" fill="transparent" />

          {/* ====== NODES ====== */}

          {/* Injector */}
          <g className="hover:scale-[1.02] transition-transform duration-300">
            <rect
              x="80"
              y="180"
              width="210"
              height="120"
              rx="20"
              fill="url(#node-purple)"
              stroke="url(#g-purple)"
              strokeWidth="2"
              filter="url(#glow)"
            />

            {/* Icon: DLL chip */}
            <g transform="translate(185,220)" opacity="0.95">
              <rect x="-16" y="-12" width="32" height="24" rx="6" fill="#8b5cf6" opacity="0.15" />
              <rect x="-16" y="-12" width="32" height="24" rx="6" fill="none" stroke="url(#g-purple)" strokeWidth="2" />
              {/* pins */}
              <g fill="#8b5cf6" opacity="0.4">
                <rect x="-10" y="13" width="6" height="3" rx="1.5" />
                <rect x="-2" y="13" width="6" height="3" rx="1.5" />
                <rect x="6" y="13" width="6" height="3" rx="1.5" />
              </g>
              <text x="0" y="3" textAnchor="middle" fontSize="10" fontWeight="700" fill="#c084fc">
                DLL
              </text>
            </g>
            <text x="185" y="262" textAnchor="middle" fontSize="18" fontWeight="600" fill="white">
              Injector
            </text>
            <text x="185" y="282" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.6)">
              Vutrium.exe
            </text>
          </g>

          {/* Rocket League */}
          <g className="hover:scale-[1.01] transition-transform duration-300">
            <rect
              x="360"
              y="130"
              width="360"
              height="220"
              rx="26"
              fill="url(#node-blue)"
              stroke="url(#g-blue)"
              strokeWidth="2.5"
              filter="url(#glow)"
            />

            <g transform="translate(540,175)" opacity="0.9">
              <circle r="24" fill="none" stroke="url(#g-blue)" strokeWidth="3" />
              <circle r="14" fill="none" stroke="url(#g-blue)" strokeWidth="2" opacity="0.6" />
              <circle r="6" fill="#60a5fa" />
            </g>

            <text x="540" y="228" textAnchor="middle" fontSize="22" fontWeight="700" fill="white">
              Rocket League
            </text>
            <text x="540" y="248" textAnchor="middle" fontSize="13" fill="rgba(255,255,255,0.6)">
              Game Process
            </text>

            {/* SDK badge */}
            <g transform="translate(540,292)">
              <rect x="-95" y="-14" width="190" height="28" rx="14" fill="rgba(34,211,238,0.12)" />
              <rect
                x="-95"
                y="-14"
                width="190"
                height="28"
                rx="14"
                fill="none"
                stroke="rgba(34,211,238,0.3)"
                strokeWidth="1"
              />
              <text x="0" y="6" textAnchor="middle" fontSize="12" fill="#67e8f9">
                Vutrium SDK (In-Process)
              </text>
            </g>
          </g>

          {/* Client */}
          <g className="hover:scale-[1.02] transition-transform duration-300">
            <rect
              x="820"
              y="180"
              width="210"
              height="120"
              rx="20"
              fill="url(#node-green)"
              stroke="url(#g-green)"
              strokeWidth="2"
              filter="url(#glow)"
            />
            <g transform="translate(925,211)" opacity="0.9">
              <rect x="-14" y="-14" width="28" height="28" rx="6" fill="none" stroke="url(#g-green)" strokeWidth="2" />
              <rect x="-6" y="-6" width="28" height="28" rx="6" fill="none" stroke="url(#g-green)" strokeWidth="2" />
              <rect x="2" y="2" width="28" height="28" rx="6" fill="#22d3ee" opacity="0.15" />
            </g>
            <text x="925" y="258" textAnchor="middle" fontSize="18" fontWeight="600" fill="white">
              Client
            </text>
            <text x="925" y="278" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.6)">
              AI / Nexto / Tools
            </text>
          </g>

          {/* ====== FLOW PATHS ====== */}

          {/* Injector -> RL (shorter, left-to-right) */}
          <path
            id="p-inject"
            d="M 290 232 C 305 228 315 226 325 226 C 330 226 335 226 365 226"
            fill="none"
            stroke="url(#g-purple)"
            strokeWidth="3"
            strokeDasharray="8 12"
            markerEnd="url(#a-purple)"
            opacity="0.85"
          >
            <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.5s" repeatCount="indefinite" />
          </path>

          {/* RL -> Client (Game State) */}
          <path
            id="p-forward"
            d="M 705 195 C 745 180 795 180 825 205"
            fill="none"
            stroke="url(#g-blue)"
            strokeWidth="3"
            markerEnd="url(#a-blue)"
            opacity="0.8"
          />
          <path
            id="p-forward-dash"
            d="M 705 195 C 745 180 795 180 825 205"
            fill="none"
            stroke="url(#g-blue)"
            strokeWidth="2"
            strokeDasharray="10 15"
            opacity="0.6"
          >
            <animate attributeName="stroke-dashoffset" values="0;25" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Client -> RL (Control Input) */}
          <path
            id="p-back"
            d="M 825 277 C 820 300 770 285 705 265"
            fill="none"
            stroke="url(#g-green)"
            strokeWidth="3"
            markerEnd="url(#a-green)"
            opacity="0.8"
          />
          <path
            id="p-back-dash"
            d="M 825 277 C 820 300 770 285 705 265"
            fill="none"
            stroke="url(#g-green)"
            strokeWidth="2"
            strokeDasharray="10 15"
            opacity="0.6"
          >
            <animate attributeName="stroke-dashoffset" values="25;0" dur="2s" repeatCount="indefinite" />
          </path>

          {/* ====== FLOW PARTICLES ====== */}
          <g filter="url(#glow)">
            <circle r="5" fill="#e879f9">
              <animateMotion dur="2s" repeatCount="indefinite" rotate="auto">
                <mpath href="#p-inject" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
            </circle>

            {fwd.map((t, i) => (
              <circle key={`fwd-${i}`} r="4" fill="#60a5fa">
                <animateMotion dur="2s" begin={`${t}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href="#p-forward" />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin={`${t}s`} repeatCount="indefinite" />
              </circle>
            ))}

            {back.map((t, i) => (
              <circle key={`back-${i}`} r="4" fill="#34d399">
                <animateMotion dur="2s" begin={`${t}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href="#p-back" />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin={`${t}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>

          {/* ====== LABELS NEAR PATHS ====== */}
          <g fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.7)">
            <text x="305" y="212">
              DLL Injection
            </text>
            <text x="750" y="175">
              Game State
            </text>
            <text x="720" y="305">
              Control Input
            </text>
          </g>
        </svg>

        {/* Reduced motion support */}
        <style jsx>{`
          @media (prefers-reduced-motion: reduce) {
            svg animate,
            svg animateMotion,
            svg animateTransform {
              animation: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  )
}
