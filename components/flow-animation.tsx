"use client"
import type React from "react"

export default function FlowAnimation(): React.JSX.Element {
  return (
    <div className="card p-8 bg-gradient-to-br from-purple-950/20 to-black/40 backdrop-blur-xl">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Data Flow Architecture</h3>
        <p className="text-sm text-white/60">Real-time bidirectional communication pipeline</p>
      </div>

      <div className="relative w-full min-h-[220px]" style={{ aspectRatio: "9 / 4" }}>
        <svg
          viewBox="0 0 900 400"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full"
          aria-labelledby="vutrium-flow-title"
          role="img"
        >
          <title id="vutrium-flow-title">
            Vutrium data flow: DLL injection into Rocket League, in-process SDK, bidirectional data with client
          </title>

          <defs>
            {/* Gradients */}
            <linearGradient id="purple-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e879f9" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>

            <linearGradient id="blue-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            <linearGradient id="green-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            {/* Animated gradient for paths */}
            <linearGradient id="animated-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e879f9">
                <animate
                  attributeName="stop-color"
                  values="#e879f9;#60a5fa;#e879f9"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#a855f7">
                <animate
                  attributeName="stop-color"
                  values="#a855f7;#3b82f6;#a855f7"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#7c3aed">
                <animate
                  attributeName="stop-color"
                  values="#7c3aed;#1e40af;#7c3aed"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Filters */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="softBlur" />
              <feMerge>
                <feMergeNode in="softBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Arrow markers */}
            <marker
              id="arrow-purple"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#purple-gradient)" />
            </marker>

            <marker
              id="arrow-blue"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#blue-gradient)" />
            </marker>

            <marker
              id="arrow-green"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="url(#green-gradient)" />
            </marker>

            {/* No background pattern to avoid faint lines */}
          </defs>

          {/* Background removed to eliminate faint white lines */}

          {/* Main Components */}

          {/* Injector */}
          <g className="hover:scale-105 transition-transform duration-300" style={{ transformOrigin: "140px 200px" }}>
            <rect
              x="40"
              y="140"
              width="200"
              height="120"
              rx="20"
              fill="rgba(139, 92, 246, 0.1)"
              stroke="url(#purple-gradient)"
              strokeWidth="2"
              filter="url(#soft-glow)"
            />
            <rect x="40" y="140" width="200" height="120" rx="20" fill="rgba(139, 92, 246, 0.05)" />

            {/* Icon */}
            <circle cx="140" cy="180" r="20" fill="url(#purple-gradient)" opacity="0.2" />
            <path
              d="M 130 180 L 150 180 M 140 170 L 140 190"
              stroke="url(#purple-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <text x="140" y="220" textAnchor="middle" fontSize="18" fontWeight="600" fill="white">
              Injector
            </text>
            <text x="140" y="240" textAnchor="middle" fontSize="13" fill="rgba(255,255,255,0.5)">
              Vutrium.exe
            </text>
          </g>

          {/* Rocket League */}
          <g className="hover:scale-105 transition-transform duration-300" style={{ transformOrigin: "450px 200px" }}>
            <rect
              x="320"
              y="100"
              width="260"
              height="200"
              rx="20"
              fill="rgba(59, 130, 246, 0.1)"
              stroke="url(#blue-gradient)"
              strokeWidth="2"
              filter="url(#soft-glow)"
            />
            <rect x="320" y="100" width="260" height="200" rx="20" fill="rgba(59, 130, 246, 0.05)" />

            {/* Icon */}
            <circle cx="450" cy="160" r="25" fill="url(#blue-gradient)" opacity="0.2" />
            <circle cx="450" cy="160" r="15" fill="none" stroke="url(#blue-gradient)" strokeWidth="3" />
            <circle cx="450" cy="160" r="5" fill="url(#blue-gradient)" />

            <text x="450" y="210" textAnchor="middle" fontSize="20" fontWeight="600" fill="white">
              Rocket League
            </text>
            <text x="450" y="230" textAnchor="middle" fontSize="13" fill="rgba(255,255,255,0.5)">
              Game Process
            </text>

            {/* SDK Badge */}
            <rect
              x="365"
              y="250"
              width="170"
              height="30"
              rx="15"
              fill="rgba(16, 185, 129, 0.2)"
              stroke="rgba(16, 185, 129, 0.5)"
              strokeWidth="1"
            />
            <text x="450" y="269" textAnchor="middle" fontSize="12" fill="#10b981">
              Vutrium SDK (In-Process)
            </text>
          </g>

          {/* Client */}
          <g className="hover:scale-105 transition-transform duration-300" style={{ transformOrigin: "760px 200px" }}>
            <rect
              x="660"
              y="140"
              width="200"
              height="120"
              rx="20"
              fill="rgba(16, 185, 129, 0.1)"
              stroke="url(#green-gradient)"
              strokeWidth="2"
              filter="url(#soft-glow)"
            />
            <rect x="660" y="140" width="200" height="120" rx="20" fill="rgba(16, 185, 129, 0.05)" />

            {/* Icon */}
            <rect x="750" y="170" width="20" height="20" rx="4" fill="url(#green-gradient)" opacity="0.3" />
            <rect
              x="745"
              y="165"
              width="20"
              height="20"
              rx="4"
              fill="none"
              stroke="url(#green-gradient)"
              strokeWidth="2"
            />
            <rect
              x="755"
              y="175"
              width="20"
              height="20"
              rx="4"
              fill="none"
              stroke="url(#green-gradient)"
              strokeWidth="2"
            />

            <text x="760" y="220" textAnchor="middle" fontSize="18" fontWeight="600" fill="white">
              Client
            </text>
            <text x="760" y="240" textAnchor="middle" fontSize="13" fill="rgba(255,255,255,0.5)">
              AI / Nexto / Tools
            </text>
          </g>

          {/* Animated Paths */}

          {/* Injection Path */}
          <path
            id="inject-path"
            d="M 240 200 Q 280 200 320 200"
            fill="none"
            stroke="url(#animated-gradient)"
            strokeWidth="3"
            strokeDasharray="5 5"
            markerEnd="url(#arrow-purple)"
            opacity="0.8"
          >
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="0.5s" repeatCount="indefinite" />
          </path>

          {/* Data Flow Paths */}
          <path
            id="data-forward"
            d="M 580 160 Q 620 160 660 180"
            fill="none"
            stroke="url(#blue-gradient)"
            strokeWidth="2.5"
            markerEnd="url(#arrow-blue)"
            opacity="0.7"
          />

          <path
            id="data-back"
            d="M 660 220 Q 620 240 580 240"
            fill="none"
            stroke="url(#green-gradient)"
            strokeWidth="2.5"
            markerEnd="url(#arrow-green)"
            opacity="0.7"
          />

          {/* Animated Particles */}
          <g filter="url(#glow)">
            {/* Injection particles */}
            <circle r="4" fill="#e879f9">
              <animateMotion dur="2s" repeatCount="indefinite">
                <mpath href="#inject-path" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Data forward particles */}
            {[0, 0.5, 1].map((delay, i) => (
              <circle key={`fwd-${i}`} r="3" fill="#60a5fa">
                <animateMotion dur="1.5s" begin={`${delay}s`} repeatCount="indefinite">
                  <mpath href="#data-forward" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="1.5s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            {/* Data back particles */}
            {[0.25, 0.75, 1.25].map((delay, i) => (
              <circle key={`bck-${i}`} r="3" fill="#34d399">
                <animateMotion dur="1.5s" begin={`${delay}s`} repeatCount="indefinite">
                  <mpath href="#data-back" />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="1.5s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>

          {/* Labels */}
          <g className="text-labels">
            <text x="280" y="185" fontSize="11" fontWeight="500" fill="rgba(255,255,255,0.6)">
              DLL Injection
            </text>
            <text x="620" y="155" fontSize="11" fontWeight="500" fill="rgba(255,255,255,0.6)">
              Game State
            </text>
            <text x="620" y="255" fontSize="11" fontWeight="500" fill="rgba(255,255,255,0.6)">
              Control Input
            </text>
          </g>

          {/* Performance Metrics */}
          <g transform="translate(450, 340)">
            <rect
              x="-80"
              y="-15"
              width="160"
              height="30"
              rx="15"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <text x="0" y="5" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.5)">
              Latency: &lt;1ms • 120 Hz
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}
