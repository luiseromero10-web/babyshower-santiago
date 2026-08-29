'use client';

import React from 'react';

/**
 * Balloon Garland - Elegant corner cluster with gentle sway
 */
export function ToileBalloonGarland({ className = 'w-36 h-auto', side = 'left' }: { className?: string; side?: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={`${className} ${side === 'left' ? 'animate-balloon-left' : 'animate-balloon-right'}`}
    >
      <defs>
        <radialGradient id={`bgBlueSoft_${side}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#BAE6FD" />
          <stop offset="80%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#38BDF8" />
        </radialGradient>
        <radialGradient id={`bgDustyBlue_${side}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="35%" stopColor="#93C5FD" />
          <stop offset="85%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </radialGradient>
        <radialGradient id={`bgPearl_${side}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </radialGradient>
        <radialGradient id={`bgBubble_${side}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      {side === 'left' ? (
        <g>
          <circle cx="60" cy="50" r="40" fill={`url(#bgBlueSoft_${side})`} />
          <circle cx="110" cy="80" r="34" fill={`url(#bgPearl_${side})`} />
          <circle cx="45" cy="115" r="32" fill={`url(#bgDustyBlue_${side})`} />
          <circle cx="95" cy="140" r="28" fill={`url(#bgBubble_${side})`} stroke="#BAE6FD" strokeWidth="1" />
          <circle cx="50" cy="180" r="24" fill={`url(#bgPearl_${side})`} />
          <circle cx="90" cy="195" r="20" fill={`url(#bgBlueSoft_${side})`} />
          {/* Highlights */}
          <ellipse cx="50" cy="40" rx="9" ry="4.5" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 50 40)" />
          <ellipse cx="100" cy="70" rx="7" ry="3.5" fill="#FFFFFF" opacity="0.7" transform="rotate(-30 100 70)" />
          <ellipse cx="38" cy="105" rx="7" ry="3.5" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 38 105)" />
        </g>
      ) : (
        <g>
          <circle cx="140" cy="50" r="40" fill={`url(#bgDustyBlue_${side})`} />
          <circle cx="90" cy="80" r="34" fill={`url(#bgPearl_${side})`} />
          <circle cx="155" cy="115" r="32" fill={`url(#bgBlueSoft_${side})`} />
          <circle cx="105" cy="140" r="28" fill={`url(#bgBubble_${side})`} stroke="#BAE6FD" strokeWidth="1" />
          <circle cx="150" cy="180" r="24" fill={`url(#bgPearl_${side})`} />
          <circle cx="110" cy="195" r="20" fill={`url(#bgDustyBlue_${side})`} />
          {/* Highlights */}
          <ellipse cx="130" cy="40" rx="9" ry="4.5" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 130 40)" />
          <ellipse cx="80" cy="70" rx="7" ry="3.5" fill="#FFFFFF" opacity="0.7" transform="rotate(-30 80 70)" />
          <ellipse cx="145" cy="105" rx="7" ry="3.5" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 145 105)" />
        </g>
      )}
    </svg>
  );
}

/**
 * Elegant Toile de Jouy Baby Giraffe
 */
export function ToileGiraffe({ className = 'w-40 sm:w-52 md:w-60 h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <defs>
        <pattern id="toilePatternGiraffe" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M20 5 Q25 15 35 20 Q25 25 20 35 Q15 25 5 20 Q15 15 20 5 Z" fill="#2563EB" opacity="0.25" />
          <circle cx="20" cy="20" r="3" fill="#1D4ED8" opacity="0.35" />
        </pattern>
        <filter id="shadowGiraffe" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="2" dy="8" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter="url(#shadowGiraffe)">
        {/* White Base Silhouette Cutout */}
        <path
          d="M 90 380 L 95 270 Q 90 240 105 200 L 135 100 Q 140 70 165 60 Q 185 52 195 65 Q 205 78 198 92 Q 185 105 170 110 L 150 190 Q 165 220 170 250 L 180 380 L 170 382 L 160 290 L 142 290 L 130 382 L 115 382 L 122 280 L 105 382 Z"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Body Base & Color */}
        <path
          d="M 90 380 L 95 270 Q 90 240 105 200 L 135 100 Q 140 70 165 60 Q 185 52 195 65 Q 205 78 198 92 Q 185 105 170 110 L 150 190 Q 165 220 170 250 L 180 380 L 170 382 L 160 290 L 142 290 L 130 382 L 115 382 L 122 280 L 105 382 Z"
          fill="#EFF6FF"
          stroke="#1E40AF"
          strokeWidth="2"
        />

        {/* Toile Floral Overlay */}
        <path
          d="M 90 380 L 95 270 Q 90 240 105 200 L 135 100 Q 140 70 165 60 Q 185 52 195 65 Q 205 78 198 92 Q 185 105 170 110 L 150 190 Q 165 220 170 250 L 180 380 L 170 382 L 160 290 L 142 290 L 130 382 L 115 382 L 122 280 L 105 382 Z"
          fill="url(#toilePatternGiraffe)"
        />

        {/* Giraffe Mane */}
        <path
          d="M 135 100 Q 128 115 133 130 Q 125 145 131 160 Q 123 175 129 190"
          stroke="#1D4ED8"
          strokeWidth="4.5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Horns */}
        <line x1="170" y1="60" x2="172" y2="42" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="172" cy="40" r="3.5" fill="#1D4ED8" />
        <line x1="180" y1="58" x2="184" y2="40" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="184" cy="38" r="3.5" fill="#1D4ED8" />

        {/* Sweet Eye */}
        <ellipse cx="180" cy="72" rx="4.5" ry="5.5" fill="#0F172A" />
        <circle cx="181.5" cy="70" r="2" fill="#FFFFFF" />

        {/* Ear */}
        <path d="M 162 62 Q 148 58 152 70 Q 160 72 166 66 Z" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="1.5" />

        {/* Leaves at feet */}
        <path d="M 75 382 Q 90 350 120 365 Q 95 380 75 382 Z" fill="#93C5FD" opacity="0.7" />
        <path d="M 135 382 Q 160 340 195 360 Q 165 378 135 382 Z" fill="#60A5FA" opacity="0.6" />
      </g>
    </svg>
  );
}

/**
 * Charming Toile de Jouy Baby Leopard Cub
 */
export function ToileLeopardCub({ className = 'w-40 sm:w-52 md:w-60 h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <defs>
        <pattern id="toilePatternLeopard" x="0" y="0" width="45" height="45" patternUnits="userSpaceOnUse">
          <circle cx="22" cy="22" r="5" fill="#3B82F6" opacity="0.35" />
          <path d="M 15 17 C 14 12 25 10 27 15" stroke="#1D4ED8" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M 27 17 C 32 20 30 28 25 30" stroke="#1D4ED8" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M 15 26 C 12 23 14 18 17 17" stroke="#1D4ED8" strokeWidth="1.5" fill="none" opacity="0.6" />
        </pattern>
        <filter id="shadowCub" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="2" dy="8" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter="url(#shadowCub)">
        {/* White Base Silhouette Cutout */}
        <g stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round">
          <ellipse cx="130" cy="210" rx="58" ry="72" fill="#FFFFFF" />
          <circle cx="130" cy="110" r="52" fill="#FFFFFF" />
        </g>

        {/* Body Base */}
        <ellipse cx="130" cy="210" rx="58" ry="72" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="2" />
        {/* Tail */}
        <path
          d="M 175 240 Q 220 220 215 155 Q 210 135 198 145 Q 200 170 168 200"
          fill="#EFF6FF"
          stroke="#1E40AF"
          strokeWidth="2"
        />

        {/* Legs & Paws */}
        <path
          d="M 95 180 L 95 285 Q 95 300 115 300 Q 130 300 126 285 L 122 180 Z"
          fill="#FFFFFF"
          stroke="#1E40AF"
          strokeWidth="1.5"
        />
        <path
          d="M 138 180 L 134 285 Q 134 300 154 300 Q 172 300 168 285 L 164 180 Z"
          fill="#FFFFFF"
          stroke="#1E40AF"
          strokeWidth="1.5"
        />

        {/* Toile Rosettes Pattern */}
        <ellipse cx="130" cy="210" rx="56" ry="70" fill="url(#toilePatternLeopard)" />

        {/* Head */}
        <circle cx="130" cy="110" r="52" fill="#FFFFFF" stroke="#1E40AF" strokeWidth="2" />
        <circle cx="130" cy="110" r="51" fill="url(#toilePatternLeopard)" />

        {/* Ears */}
        <path d="M 88 85 Q 75 55 95 60 Q 110 68 102 90 Z" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="1.5" />
        <path d="M 172 85 Q 185 55 165 60 Q 150 68 158 90 Z" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="1.5" />

        {/* Sweet Eyes */}
        <ellipse cx="106" cy="106" rx="10" ry="12" fill="#0F172A" />
        <ellipse cx="106" cy="106" rx="8" ry="10" fill="#1E3A8A" />
        <circle cx="109" cy="102" r="3.5" fill="#FFFFFF" />
        <circle cx="103" cy="111" r="1.8" fill="#FFFFFF" />

        <ellipse cx="154" cy="106" rx="10" ry="12" fill="#0F172A" />
        <ellipse cx="154" cy="106" rx="8" ry="10" fill="#1E3A8A" />
        <circle cx="157" cy="102" r="3.5" fill="#FFFFFF" />
        <circle cx="151" cy="111" r="1.8" fill="#FFFFFF" />

        {/* Nose & Whiskers */}
        <path d="M 126 122 L 134 122 L 130 128 Z" fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" />
        <path d="M 130 128 L 130 134 Q 122 138 118 134 M 130 134 Q 138 138 142 134" stroke="#1E40AF" strokeWidth="1.5" fill="none" />
        <line x1="108" y1="132" x2="80" y2="128" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="108" y1="136" x2="84" y2="140" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="152" y1="132" x2="180" y2="128" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="152" y1="136" x2="176" y2="140" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" />

        {/* Foliage */}
        <path d="M 55 295 Q 70 240 100 265 Q 80 290 55 295 Z" fill="#93C5FD" opacity="0.75" />
        <path d="M 175 295 Q 200 250 215 275 Q 190 295 175 295 Z" fill="#60A5FA" opacity="0.75" />
      </g>
    </svg>
  );
}

/**
 * Crescent Moon with Clouds
 */
export function ToileCrescentMoon({ className = 'w-28 sm:w-36 h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <defs>
        <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <filter id="shadowMoon" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="6" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.15" />
        </filter>
      </defs>
      <g filter="url(#shadowMoon)">
        <path
          d="M 130 25 C 75 25 35 68 35 125 C 35 170 65 195 110 195 C 78 170 70 132 82 92 C 94 54 116 35 130 25 Z"
          fill="url(#moonGrad)"
          stroke="#1E40AF"
          strokeWidth="2"
        />
        <path
          d="M 28 170 C 20 170 12 162 16 150 C 20 138 36 135 48 142 C 56 126 84 126 92 142 C 104 138 120 150 116 166 C 116 174 108 182 100 182 L 28 182 Z"
          fill="#FFFFFF"
          stroke="#93C5FD"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

/**
 * Royal French Ribbon Bow and Crest Frame
 */
export function ToileRoyalCrest({ title = 'Baby', name = 'Santiago', className = '' }: { title?: string; name?: string; className?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-center p-3 ${className}`}>
      <div className="relative bg-white/95 backdrop-blur-md rounded-[2rem] border-2 border-sky-300 shadow-lg px-6 py-4 text-center max-w-[240px] w-full">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <svg width="60" height="28" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 20 Q 30 5 15 25 Q 35 30 50 25 Q 65 30 85 25 Q 70 5 50 20 Z" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2" />
            <circle cx="50" cy="22" r="5" fill="#2563EB" />
            <path d="M 45 26 Q 35 45 25 45 M 55 26 Q 65 45 75 45" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <span className="block text-[10px] uppercase tracking-[0.2em] font-serif text-sky-800 font-bold mt-1">
          {title}
        </span>
        <h2 className="text-2xl font-script text-sky-900 tracking-wide">
          {name}
        </h2>
      </div>
    </div>
  );
}

/**
 * Floating Sparkles
 */
export function FloatingSparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-sky-300 opacity-70 animate-ping" />
      <div className="absolute top-1/3 right-1/5 w-2.5 h-2.5 rounded-full bg-amber-300 opacity-60 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-blue-400 opacity-60 animate-bounce" />
    </div>
  );
}
