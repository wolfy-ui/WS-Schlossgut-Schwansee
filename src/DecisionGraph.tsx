import React, { useState } from 'react';

export function DecisionGraph() {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <svg viewBox="0 0 600 200" className="w-full max-w-3xl mx-auto mb-6 h-40">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#94A3B8', stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: '#64748B', stopOpacity: 0.1 }} />
        </linearGradient>
        <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: '#94A3B8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#64748B', stopOpacity: 1 }} />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <rect x="0" y="0" width="600" height="200" fill="url(#bgGradient)" rx="20" />

      <g className="connections">
        {[
          "M300,100 L180,60", "M300,100 L420,60",
          "M300,100 L180,140", "M300,100 L420,140",
          "M180,60 L120,80", "M180,60 L240,40",
          "M420,60 L360,40", "M420,60 L480,80",
          "M180,140 L120,120", "M180,140 L240,160",
          "M420,140 L360,160", "M420,140 L480,120"
        ].map((path, i) => (
          <path 
            key={i}
            d={path} 
            stroke="#94A3B8"
            strokeWidth="2"
            strokeDasharray="4,4"
            className="animate-pulse"
          />
        ))}
      </g>

      <g className="nodes" filter="url(#glow)">
        {[
          { cx: 300, cy: 100, r: 15, label: "Entscheidung" },
          { cx: 180, cy: 60, r: 12, label: "Daten" },
          { cx: 420, cy: 60, r: 12, label: "Team" },
          { cx: 180, cy: 140, r: 12, label: "Zeit" },
          { cx: 420, cy: 140, r: 12, label: "Ressourcen" },
          { cx: 120, cy: 80, r: 8 }, { cx: 240, cy: 40, r: 8 },
          { cx: 360, cy: 40, r: 8 }, { cx: 480, cy: 80, r: 8 },
          { cx: 120, cy: 120, r: 8 }, { cx: 240, cy: 160, r: 8 },
          { cx: 360, cy: 160, r: 8 }, { cx: 480, cy: 120, r: 8 }
        ].map((node, i) => (
          <g 
            key={i}
            onMouseEnter={() => setHoveredNode(i)}
            onMouseLeave={() => setHoveredNode(null)}
            className="transition-transform duration-300 cursor-pointer"
            transform={hoveredNode === i ? "scale(1.2)" : "scale(1)"}
          >
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="url(#nodeGradient)"
              className="transition-all duration-300"
              style={{
                filter: hoveredNode === i ? "brightness(1.2)" : "none"
              }}
            />
            {node.label && (
              <text
                x={node.cx}
                y={node.cy + node.r + 15}
                textAnchor="middle"
                fill="#475569"
                className="text-xs font-medium"
              >
                {node.label}
              </text>
            )}
          </g>
        ))}
      </g>

      <circle
        cx="300"
        cy="100"
        r="25"
        fill="none"
        stroke="#94A3B8"
        strokeWidth="2"
        opacity="0.5"
        className="animate-ping"
      />
    </svg>
  );
}