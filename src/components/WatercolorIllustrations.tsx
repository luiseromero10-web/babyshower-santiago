'use client';

import React from 'react';

/**
 * Balloon Garland - Soft 3D spheres framing top corners
 */
export function ToileBalloonGarland({ className = '', side = 'left' }: { className?: string; side?: 'left' | 'right' }) {
  return (
    <svg
      width="140"
      height="170"
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${side === 'left' ? 'animate-balloon-left' : 'animate-balloon-right'}`}
    >
      <defs>
        <radialGradient id={`bgBlueSoft_${side}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#BAE6FD" />
          <stop offset="80%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#38BDF8" />
        </radialGradient>
        <radialGradient id={`bgDustyBlue_${side}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
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
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.75" />
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
          <ellipse cx="50" cy="40" rx="9" ry="4.5" fill="#FFFFFF" opacity="0.7" transform="rotate(-30 50 40)" />
          <ellipse cx="100" cy="70" rx="7" ry="3.5" fill="#FFFFFF" opacity="0.8" transform="rotate(-30 100 70)" />
        </g>
      ) : (
        <g>
          <circle cx="140" cy="50" r="40" fill={`url(#bgDustyBlue_${side})`} />
          <circle cx="90" cy="80" r="34" fill={`url(#bgPearl_${side})`} />
          <circle cx="155" cy="115" r="32" fill={`url(#bgBlueSoft_${side})`} />
          <circle cx="105" cy="140" r="28" fill={`url(#bgBubble_${side})`} stroke="#BAE6FD" strokeWidth="1" />
          <circle cx="150" cy="180" r="24" fill={`url(#bgPearl_${side})`} />
          <circle cx="110" cy="195" r="20" fill={`url(#bgDustyBlue_${side})`} />
          <ellipse cx="130" cy="40" rx="9" ry="4.5" fill="#FFFFFF" opacity="0.7" transform="rotate(-30 130 40)" />
          <ellipse cx="80" cy="70" rx="7" ry="3.5" fill="#FFFFFF" opacity="0.8" transform="rotate(-30 80 70)" />
        </g>
      )}
    </svg>
  );
}

/**
 * Beautiful Toile Baby Giraffe
 */
export function ToileGiraffe({ width = 160, height = 240, className = '' }: { width?: number | string; height?: number | string; className?: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern id="toilePatternGiraffe" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M18 4 Q22 14 32 18 Q22 22 18 32 Q14 22 4 18 Q14 14 18 4 Z" fill="#2563EB" opacity="0.3" />
          <circle cx="18" cy="18" r="2.5" fill="#1D4ED8" opacity="0.45" />
        </pattern>
        <filter id="shadowGiraffe" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.15" />
        </filter>
      </defs>

      <g filter="url(#shadowGiraffe)">
        {/* White Border Silhouette */}
        <path
          d="M 85 350 L 90 240 Q 85 210 100 175 L 130 80 Q 135 52 158 42 Q 178 35 188 46 Q 198 58 190 72 Q 178 85 162 90 L 144 165 Q 158 195 162 225 L 172 350 L 162 352 L 152 260 L 135 260 L 124 352 L 110 352 L 116 252 L 100 352 Z"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Body Base */}
        <path
          d="M 85 350 L 90 240 Q 85 210 100 175 L 130 80 Q 135 52 158 42 Q 178 35 188 46 Q 198 58 190 72 Q 178 85 162 90 L 144 165 Q 158 195 162 225 L 172 350 L 162 352 L 152 260 L 135 260 L 124 352 L 110 352 L 116 252 L 100 352 Z"
          fill="#F0F7FF"
          stroke="#1E40AF"
          strokeWidth="2.2"
        />

        {/* Toile Pattern */}
        <path
          d="M 85 350 L 90 240 Q 85 210 100 175 L 130 80 Q 135 52 158 42 Q 178 35 188 46 Q 198 58 190 72 Q 178 85 162 90 L 144 165 Q 158 195 162 225 L 172 350 L 162 352 L 152 260 L 135 260 L 124 352 L 110 352 L 116 252 L 100 352 Z"
          fill="url(#toilePatternGiraffe)"
        />

        {/* Mane */}
        <path
          d="M 130 80 Q 123 95 128 110 Q 120 125 126 140 Q 118 155 124 170"
          stroke="#1D4ED8"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Horns */}
        <line x1="162" y1="42" x2="164" y2="25" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="164" cy="24" r="3" fill="#1D4ED8" />
        <line x1="172" y1="40" x2="176" y2="23" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="176" cy="22" r="3" fill="#1D4ED8" />

        {/* Eye */}
        <ellipse cx="174" cy="54" rx="4" ry="5" fill="#0F172A" />
        <circle cx="175.5" cy="52" r="1.8" fill="#FFFFFF" />

        {/* Ear */}
        <path d="M 155 44 Q 142 40 146 52 Q 154 54 160 48 Z" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="1.5" />

        {/* Botanical Leaves at Base */}
        <path d="M 70 352 Q 85 320 115 335 Q 90 350 70 352 Z" fill="#93C5FD" opacity="0.8" />
        <path d="M 125 352 Q 150 310 185 330 Q 155 348 125 352 Z" fill="#60A5FA" opacity="0.75" />
      </g>
    </svg>
  );
}

/**
 * Charming Toile Baby Leopard Cub
 */
export function ToileLeopardCub({ width = 160, height = 200, className = '' }: { width?: number | string; height?: number | string; className?: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 260 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern id="toilePatternLeopard" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="4.5" fill="#3B82F6" opacity="0.4" />
          <path d="M 14 15 C 13 10 23 8 25 13" stroke="#1D4ED8" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M 25 15 C 29 18 28 25 23 27" stroke="#1D4ED8" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M 14 23 C 11 20 13 16 16 15" stroke="#1D4ED8" strokeWidth="1.5" fill="none" opacity="0.7" />
        </pattern>
        <filter id="shadowCub" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.15" />
        </filter>
      </defs>

      <g filter="url(#shadowCub)">
        {/* White Base Cutout */}
        <g stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round">
          <ellipse cx="130" cy="180" rx="55" ry="68" fill="#FFFFFF" />
          <circle cx="130" cy="85" r="48" fill="#FFFFFF" />
        </g>

        {/* Body */}
        <ellipse cx="130" cy="180" rx="55" ry="68" fill="#F0F7FF" stroke="#1E40AF" strokeWidth="2.2" />
        
        {/* Tail */}
        <path
          d="M 172 210 Q 215 190 210 130 Q 205 110 194 120 Q 196 145 165 175"
          fill="#F0F7FF"
          stroke="#1E40AF"
          strokeWidth="2"
        />

        {/* Paws */}
        <path
          d="M 98 150 L 98 250 Q 98 262 116 262 Q 130 262 126 250 L 122 150 Z"
          fill="#FFFFFF"
          stroke="#1E40AF"
          strokeWidth="1.5"
        />
        <path
          d="M 138 150 L 134 250 Q 134 262 152 262 Q 168 262 164 250 L 160 150 Z"
          fill="#FFFFFF"
          stroke="#1E40AF"
          strokeWidth="1.5"
        />

        {/* Toile Pattern */}
        <ellipse cx="130" cy="180" rx="53" ry="66" fill="url(#toilePatternLeopard)" />

        {/* Head */}
        <circle cx="130" cy="85" r="48" fill="#FFFFFF" stroke="#1E40AF" strokeWidth="2.2" />
        <circle cx="130" cy="85" r="47" fill="url(#toilePatternLeopard)" />

        {/* Ears */}
        <path d="M 90 60 Q 78 33 96 37 Q 110 45 102 65 Z" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="1.5" />
        <path d="M 170 60 Q 182 33 164 37 Q 150 45 158 65 Z" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="1.5" />

        {/* Eyes */}
        <ellipse cx="108" cy="81" rx="9" ry="11" fill="#0F172A" />
        <ellipse cx="108" cy="81" rx="7" ry="9" fill="#1E3A8A" />
        <circle cx="110.5" cy="78" r="3" fill="#FFFFFF" />
        <circle cx="105" cy="85" r="1.5" fill="#FFFFFF" />

        <ellipse cx="152" cy="81" rx="9" ry="11" fill="#0F172A" />
        <ellipse cx="152" cy="81" rx="7" ry="9" fill="#1E3A8A" />
        <circle cx="154.5" cy="78" r="3" fill="#FFFFFF" />
        <circle cx="149" cy="85" r="1.5" fill="#FFFFFF" />

        {/* Nose & Whiskers */}
        <path d="M 126 99 L 134 99 L 130 105 Z" fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" />
        <path d="M 130 105 L 130 111 Q 123 114 119 111 M 130 111 Q 137 114 141 111" stroke="#1E40AF" strokeWidth="1.5" fill="none" />
        <line x1="110" y1="109" x2="84" y2="105" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="110" y1="113" x2="88" y2="117" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="150" y1="109" x2="176" y2="105" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="150" y1="113" x2="172" y2="117" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" />

        {/* Foliage */}
        <path d="M 60 255 Q 75 205 102 228 Q 82 250 60 255 Z" fill="#93C5FD" opacity="0.8" />
        <path d="M 170 255 Q 192 212 208 235 Q 185 255 170 255 Z" fill="#60A5FA" opacity="0.8" />
      </g>
    </svg>
  );
}

/**
 * Crescent Moon with Clouds
 */
export function ToileCrescentMoon({ width = 110, height = 110, className = '' }: { width?: number | string; height?: number | string; className?: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
      </defs>
      <g>
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
    <div className={`relative flex flex-col items-center justify-center p-2 ${className}`}>
      <div className="relative bg-white/95 backdrop-blur-md rounded-[1.5rem] border-2 border-sky-300 shadow-md px-5 py-3 text-center max-w-[200px] w-full">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <svg width="48" height="22" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 20 Q 30 5 15 25 Q 35 30 50 25 Q 65 30 85 25 Q 70 5 50 20 Z" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2" />
            <circle cx="50" cy="22" r="5" fill="#2563EB" />
            <path d="M 45 26 Q 35 45 25 45 M 55 26 Q 65 45 75 45" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <span className="block text-[9px] uppercase tracking-[0.2em] font-serif text-sky-800 font-bold mt-1">
          {title}
        </span>
        <h2 className="text-xl font-script text-sky-900 tracking-wide">
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
