import React from 'react'

interface SimplifiedAnimatedNeuralNetworkProps {
  width?: number
  height?: number
  className?: string
}

export default function SimplifiedAnimatedNeuralNetwork({ width = 600, height = 400, className = '' }: SimplifiedAnimatedNeuralNetworkProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 400"
      className={className}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="100%" height="100%" fill="#1a202c" />

      {/* Neurons */}
      <circle cx="100" cy="150" r="30" fill="#4299e1" filter="url(#glow)">
        <animate attributeName="r" values="30;32;30" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="250" r="30" fill="#4299e1" filter="url(#glow)">
        <animate attributeName="r" values="30;32;30" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="500" cy="200" r="30" fill="#4299e1" filter="url(#glow)">
        <animate attributeName="r" values="30;32;30" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Connections */}
      {[150, 250].map((startY, i) => (
        <React.Fragment key={`connection-${i}`}>
          <line
            x1="100"
            y1={startY}
            x2="500"
            y2="200"
            stroke="#4299e1"
            strokeWidth="2"
            opacity="0.5"
          />
          <circle r="6" fill="#48bb78">
            <animateMotion
              dur={`${3 + Math.random() * 2}s`}
              repeatCount="indefinite"
            >
              <mpath xlinkHref={`#path-${i}`} />
            </animateMotion>
          </circle>
          <path
            id={`path-${i}`}
            d={`M100,${startY} L500,200`}
            stroke="transparent"
            fill="none"
          />
        </React.Fragment>
      ))}
    </svg>
  )
}