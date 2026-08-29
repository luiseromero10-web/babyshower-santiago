'use client';

import React from 'react';

export function WatercolorMonstera({ className = 'w-32 h-32' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="monsteraGrad1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#047857" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#064E3B" stopOpacity="0.65" />
        </radialGradient>
        <radialGradient id="monsteraGrad2" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
        </radialGradient>
        <filter id="watercolorBlur" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g filter="url(#watercolorBlur)">
        <path
          d="M100 180 C80 150 40 130 30 90 C20 50 60 20 100 20 C140 20 180 50 170 90 C160 130 120 150 100 180 Z"
          fill="url(#monsteraGrad1)"
        />
        <path
          d="M100 30 C75 50 50 80 45 110 C55 105 70 95 80 85 C65 95 55 115 50 135 C65 125 80 115 90 105"
          stroke="#065F46"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.5"
          fill="none"
        />
        <path
          d="M100 30 C125 50 150 80 155 110 C145 105 130 95 120 85 C135 95 145 115 150 135 C135 125 120 115 110 105"
          stroke="#065F46"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.5"
          fill="none"
        />
        <path
          d="M100 25 L100 185"
          stroke="#022c22"
          strokeWidth="4"
          strokeLinecap="round"
          strokeOpacity="0.4"
        />
        <circle cx="100" cy="100" r="60" fill="url(#monsteraGrad2)" style={{ mixBlendMode: 'overlay' }} />
      </g>
    </svg>
  );
}

export function WatercolorPalm({ className = 'w-32 h-32' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="palmGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <g>
        <path
          d="M100 190 Q110 100 170 40 Q130 70 100 190 Z"
          fill="url(#palmGrad)"
        />
        <path
          d="M100 190 Q90 100 30 40 Q70 70 100 190 Z"
          fill="url(#palmGrad)"
          opacity="0.85"
        />
        <path
          d="M100 190 Q100 80 100 20 Q115 60 100 190 Z"
          fill="url(#palmGrad)"
          opacity="0.9"
        />
        <path
          d="M100 190 Q120 120 185 90 Q140 115 100 190 Z"
          fill="url(#palmGrad)"
          opacity="0.75"
        />
        <path
          d="M100 190 Q80 120 15 90 Q60 115 100 190 Z"
          fill="url(#palmGrad)"
          opacity="0.75"
        />
      </g>
    </svg>
  );
}

export function BabyElephantIllustration({ className = 'w-40 h-40' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="eleBody" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="60%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#38BDF8" />
        </radialGradient>
        <radialGradient id="eleCheek" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDA4AF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FDA4AF" stopOpacity="0.0" />
        </radialGradient>
        <linearGradient id="eleCrown" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
      </defs>
      <g>
        <ellipse cx="70" cy="100" rx="35" ry="40" fill="#93C5FD" opacity="0.9" transform="rotate(-15 70 100)" />
        <ellipse cx="70" cy="100" rx="20" ry="25" fill="#BAE6FD" opacity="0.8" transform="rotate(-15 70 100)" />
        <circle cx="120" cy="125" r="45" fill="url(#eleBody)" />
        <circle cx="105" cy="95" r="38" fill="url(#eleBody)" />
        <path
          d="M125 100 C145 105 160 120 155 135 C150 145 138 142 140 132 C142 122 130 115 120 115"
          fill="url(#eleBody)"
        />
        <circle cx="118" cy="88" r="4.5" fill="#0F172A" />
        <circle cx="120" cy="86" r="1.5" fill="#FFFFFF" />
        <circle cx="112" cy="102" r="7" fill="url(#eleCheek)" />
        <rect x="95" y="150" width="16" height="25" rx="8" fill="#7DD3FC" />
        <rect x="125" y="150" width="16" height="25" rx="8" fill="#7DD3FC" />
        <path
          d="M95 58 L102 68 L110 56 L118 68 L125 58 L125 72 L95 72 Z"
          fill="url(#eleCrown)"
        />
        <circle cx="95" cy="58" r="2.5" fill="#FACC15" />
        <circle cx="110" cy="56" r="2.5" fill="#FACC15" />
        <circle cx="125" cy="58" r="2.5" fill="#FACC15" />
        <path
          d="M148 100 C155 90 162 92 165 96 C168 100 162 108 152 108"
          fill="#38BDF8"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}

export function BabyGiraffeIllustration({ className = 'w-40 h-40' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="girBody" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="80%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#EAB308" />
        </radialGradient>
      </defs>
      <g>
        <ellipse cx="100" cy="140" rx="35" ry="30" fill="url(#girBody)" />
        <path d="M92 135 L95 70 L110 70 L112 135 Z" fill="url(#girBody)" />
        <ellipse cx="103" cy="65" rx="20" ry="16" fill="url(#girBody)" />
        <ellipse cx="116" cy="67" rx="10" ry="8" fill="#FEF9C3" />
        <rect x="96" y="42" width="3" height="12" rx="1.5" fill="#CA8A04" />
        <circle cx="97.5" cy="42" r="3.5" fill="#A16207" />
        <rect x="107" y="42" width="3" height="12" rx="1.5" fill="#CA8A04" />
        <circle cx="108.5" cy="42" r="3.5" fill="#A16207" />
        <circle cx="108" cy="62" r="3.5" fill="#0F172A" />
        <circle cx="109" cy="60.5" r="1" fill="#FFFFFF" />
        <ellipse cx="118" cy="66" rx="1.5" ry="2" fill="#713F12" />
        <circle cx="98" cy="90" r="4.5" fill="#CA8A04" opacity="0.75" />
        <circle cx="104" cy="110" r="6" fill="#CA8A04" opacity="0.75" />
        <circle cx="85" cy="135" r="5" fill="#CA8A04" opacity="0.75" />
        <circle cx="115" cy="140" r="5.5" fill="#CA8A04" opacity="0.75" />
        <circle cx="105" cy="70" r="4.5" fill="#FDA4AF" opacity="0.7" />
      </g>
    </svg>
  );
}

export function GoldenRingFrame({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative flex items-center justify-center p-6 md:p-12 ${className}`}>
      <div className="absolute inset-0 rounded-full border border-amber-300/40 pointer-events-none transform scale-95" />
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/50 pointer-events-none animate-spin-slow" />
      <div className="absolute -top-4 -left-4 pointer-events-none opacity-80">
        <WatercolorMonstera className="w-20 h-20 md:w-28 md:h-28 transform -rotate-12" />
      </div>
      <div className="absolute -bottom-4 -right-4 pointer-events-none opacity-80">
        <WatercolorPalm className="w-20 h-20 md:w-28 md:h-28 transform rotate-45" />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export function FloatingSparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-amber-300 opacity-60 animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-sky-300 opacity-50 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-emerald-300 opacity-60 animate-bounce" />
    </div>
  );
}
