'use client';

import React from 'react';

/**
 * Balloon Garland - Soft 3D spheres framing top corners
 */
export function ToileBalloonGarland({ className = '', side = 'left' }: { className?: string; side?: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '120px', height: '150px' }}
      className={`${className} ${side === 'left' ? 'animate-balloon-left' : 'animate-balloon-right'}`}
    >
      <defs>
        <radialGradient id={`bgBlueSoft_${side}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#BAE6FD" />
          <stop offset="80%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </radialGradient>
        <radialGradient id={`bgDustyBlue_${side}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#93C5FD" />
          <stop offset="85%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </radialGradient>
        <radialGradient id={`bgPearl_${side}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </radialGradient>
        <radialGradient id={`bgBubble_${side}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
        </radialGradient>
      </defs>

      {side === 'left' ? (
        <g>
          <circle cx="60" cy="50" r="40" fill={`url(#bgBlueSoft_${side})`} />
          <circle cx="110" cy="80" r="34" fill={`url(#bgPearl_${side})`} />
          <circle cx="45" cy="115" r="32" fill={`url(#bgDustyBlue_${side})`} />
          <circle cx="95" cy="140" r="28" fill={`url(#bgBubble_${side})`} stroke="#BAE6FD" strokeWidth="2" />
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
          <circle cx="105" cy="140" r="28" fill={`url(#bgBubble_${side})`} stroke="#BAE6FD" strokeWidth="2" />
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
 * Beautiful Toile Baby Giraffe - High-Contrast Pure Vector Artwork (Zero Filter/Pattern Dependency)
 */
export function ToileGiraffe({ width = 140, height = 200, className = '' }: { width?: number; height?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 240 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${width}px`, height: `${height}px`, display: 'block' }}
      className={className}
    >
      <g>
        {/* Crisp White Outer Silhouette Plate */}
        <path
          d="M 85 350 L 90 240 Q 85 210 100 175 L 130 80 Q 135 52 158 42 Q 178 35 188 46 Q 198 58 190 72 Q 178 85 162 90 L 144 165 Q 158 195 162 225 L 172 350 L 162 352 L 152 260 L 135 260 L 124 352 L 110 352 L 116 252 L 100 352 Z"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="10"
          strokeLinejoin="round"
        />

        {/* Body Base Fill with soft sky blue tone */}
        <path
          d="M 85 350 L 90 240 Q 85 210 100 175 L 130 80 Q 135 52 158 42 Q 178 35 188 46 Q 198 58 190 72 Q 178 85 162 90 L 144 165 Q 158 195 162 225 L 172 350 L 162 352 L 152 260 L 135 260 L 124 352 L 110 352 L 116 252 L 100 352 Z"
          fill="#E0F2FE"
          stroke="#1E3A8A"
          strokeWidth="3.5"
        />

        {/* Toile Floral Motifs (Direct vector damask stars) */}
        {/* Neck Floral Ornaments */}
        <path d="M 148 105 Q 153 115 160 118 Q 153 121 148 131 Q 143 121 136 118 Q 143 115 148 105 Z" fill="#1D4ED8" />
        <circle cx="148" cy="118" r="2.5" fill="#1E3A8A" />

        <path d="M 140 145 Q 145 155 152 158 Q 145 161 140 171 Q 135 161 128 158 Q 135 155 140 145 Z" fill="#2563EB" />
        <circle cx="140" cy="158" r="2.5" fill="#1E3A8A" />

        <path d="M 132 185 Q 137 195 144 198 Q 137 201 132 211 Q 127 201 120 198 Q 127 195 132 185 Z" fill="#1D4ED8" />
        <circle cx="132" cy="198" r="2.5" fill="#1E3A8A" />

        {/* Body Floral Medallions */}
        <circle cx="142" cy="235" r="9" fill="#1D4ED8" />
        <circle cx="142" cy="235" r="5" fill="#DBEAFE" />
        <circle cx="142" cy="235" r="2" fill="#1E3A8A" />

        <circle cx="118" cy="265" r="8" fill="#2563EB" />
        <circle cx="118" cy="265" r="4" fill="#DBEAFE" />

        <circle cx="152" cy="285" r="8" fill="#1D4ED8" />
        <circle cx="152" cy="285" r="4" fill="#DBEAFE" />

        <circle cx="110" cy="305" r="6" fill="#2563EB" />

        {/* Giraffe Mane */}
        <path
          d="M 130 80 Q 120 95 127 110 Q 118 125 125 140 Q 116 155 123 170"
          stroke="#1E3A8A"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Horns */}
        <line x1="162" y1="42" x2="164" y2="24" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round" />
        <circle cx="164" cy="22" r="5" fill="#1D4ED8" />
        <line x1="172" y1="40" x2="176" y2="22" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round" />
        <circle cx="176" cy="20" r="5" fill="#1D4ED8" />

        {/* Sweet Expressive Eye */}
        <ellipse cx="174" cy="54" rx="6" ry="7" fill="#0F172A" />
        <circle cx="176.5" cy="52" r="2.5" fill="#FFFFFF" />
        <path d="M 168 47 Q 174 43 181 47" stroke="#1E3A8A" strokeWidth="2.5" fill="none" />

        {/* Ear */}
        <path d="M 155 44 Q 138 38 144 54 Q 154 56 160 48 Z" fill="#93C5FD" stroke="#1E3A8A" strokeWidth="2.5" />

        {/* Hooves */}
        <rect x="96" y="344" width="10" height="8" rx="2" fill="#1E3A8A" />
        <rect x="120" y="344" width="10" height="8" rx="2" fill="#1E3A8A" />
        <rect x="162" y="342" width="10" height="8" rx="2" fill="#1E3A8A" />

        {/* Botanical Foliage at Base */}
        <path d="M 60 352 Q 80 305 115 330 Q 85 350 60 352 Z" fill="#60A5FA" stroke="#1E3A8A" strokeWidth="2" />
        <path d="M 125 352 Q 155 295 195 325 Q 160 348 125 352 Z" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="2" />
      </g>
    </svg>
  );
}

/**
 * Charming Toile Baby Leopard Cub - High-Contrast Pure Vector Artwork (Zero Filter/Pattern Dependency)
 */
export function ToileLeopardCub({ width = 140, height = 175, className = '' }: { width?: number; height?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 260 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${width}px`, height: `${height}px`, display: 'block' }}
      className={className}
    >
      <g>
        {/* Crisp White Outer Cutout */}
        <g stroke="#FFFFFF" strokeWidth="10" strokeLinejoin="round">
          <ellipse cx="130" cy="180" rx="55" ry="68" fill="#FFFFFF" />
          <circle cx="130" cy="85" r="48" fill="#FFFFFF" />
        </g>

        {/* Body Base */}
        <ellipse cx="130" cy="180" rx="55" ry="68" fill="#E0F2FE" stroke="#1E3A8A" strokeWidth="3.5" />
        
        {/* Tail */}
        <path
          d="M 172 210 Q 225 190 220 120 Q 212 98 196 110 Q 200 145 165 175"
          fill="#E0F2FE"
          stroke="#1E3A8A"
          strokeWidth="3.5"
        />

        {/* Front Legs & Paws */}
        <path
          d="M 94 150 L 94 252 Q 94 266 116 266 Q 132 266 128 252 L 122 150 Z"
          fill="#FFFFFF"
          stroke="#1E3A8A"
          strokeWidth="2.5"
        />
        <path
          d="M 138 150 L 132 252 Q 132 266 154 266 Q 172 266 168 252 L 162 150 Z"
          fill="#FFFFFF"
          stroke="#1E3A8A"
          strokeWidth="2.5"
        />

        {/* Toile Leopard Rosettes (Direct vector floral clusters) */}
        {/* Left Side Rosettes */}
        <circle cx="105" cy="175" r="6" fill="#1D4ED8" />
        <circle cx="105" cy="175" r="3" fill="#E0F2FE" />
        <path d="M 100 170 C 98 165 110 162 112 168" stroke="#1E3A8A" strokeWidth="1.5" fill="none" />

        <circle cx="115" cy="205" r="7" fill="#2563EB" />
        <circle cx="115" cy="205" r="3.5" fill="#E0F2FE" />

        {/* Center & Right Rosettes */}
        <circle cx="150" cy="175" r="7" fill="#1D4ED8" />
        <circle cx="150" cy="175" r="3.5" fill="#E0F2FE" />
        <path d="M 145 170 C 143 165 155 162 157 168" stroke="#1E3A8A" strokeWidth="1.5" fill="none" />

        <circle cx="145" cy="210" r="6" fill="#2563EB" />
        <circle cx="145" cy="210" r="3" fill="#E0F2FE" />

        {/* Head */}
        <circle cx="130" cy="85" r="48" fill="#FFFFFF" stroke="#1E3A8A" strokeWidth="3.5" />
        
        {/* Head Rosette on forehead */}
        <circle cx="130" cy="60" r="5" fill="#1D4ED8" />
        <circle cx="130" cy="60" r="2.5" fill="#FFFFFF" />

        {/* Ears */}
        <path d="M 88 56 Q 72 26 94 30 Q 110 40 102 64 Z" fill="#93C5FD" stroke="#1E3A8A" strokeWidth="3" />
        <path d="M 172 56 Q 188 26 166 30 Q 150 40 158 64 Z" fill="#93C5FD" stroke="#1E3A8A" strokeWidth="3" />

        {/* Big Bright Expressive Eyes */}
        <ellipse cx="108" cy="81" rx="12" ry="14" fill="#0F172A" />
        <ellipse cx="108" cy="81" rx="9" ry="11" fill="#1E3A8A" />
        <circle cx="111.5" cy="77" r="4" fill="#FFFFFF" />
        <circle cx="105" cy="87" r="2" fill="#FFFFFF" />

        <ellipse cx="152" cy="81" rx="12" ry="14" fill="#0F172A" />
        <ellipse cx="152" cy="81" rx="9" ry="11" fill="#1E3A8A" />
        <circle cx="155.5" cy="77" r="4" fill="#FFFFFF" />
        <circle cx="149" cy="87" r="2" fill="#FFFFFF" />

        {/* Cute Nose & Smile */}
        <path d="M 124 98 L 136 98 L 130 106 Z" fill="#2563EB" stroke="#1E3A8A" strokeWidth="1.5" />
        <path d="M 130 106 L 130 114 Q 120 118 116 114 M 130 114 Q 140 118 144 114" stroke="#1E3A8A" strokeWidth="2.5" fill="none" />
        <line x1="106" y1="110" x2="76" y2="106" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="106" y1="116" x2="80" y2="122" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="154" y1="110" x2="184" y2="106" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="154" y1="116" x2="180" y2="122" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />

        {/* Paw Details */}
        <line x1="105" y1="256" x2="105" y2="264" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
        <line x1="115" y1="256" x2="115" y2="264" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
        <line x1="145" y1="256" x2="145" y2="264" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
        <line x1="155" y1="256" x2="155" y2="264" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />

        {/* Foliage */}
        <path d="M 50 255 Q 70 195 102 222 Q 78 250 50 255 Z" fill="#60A5FA" stroke="#1E3A8A" strokeWidth="2" />
        <path d="M 170 255 Q 200 200 220 228 Q 192 255 170 255 Z" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="2" />
      </g>
    </svg>
  );
}

/**
 * Crescent Moon with Clouds - Pure Vector Artwork
 */
export function ToileCrescentMoon({ width = 90, height = 90, className = '' }: { width?: number; height?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${width}px`, height: `${height}px`, display: 'block' }}
      className={className}
    >
      <g>
        {/* Moon Base */}
        <path
          d="M 130 25 C 75 25 35 68 35 125 C 35 170 65 195 110 195 C 78 170 70 132 82 92 C 94 54 116 35 130 25 Z"
          fill="#DBEAFE"
          stroke="#1E3A8A"
          strokeWidth="3.5"
        />
        {/* Moon Floral Damask */}
        <circle cx="85" cy="115" r="6" fill="#1D4ED8" />
        <circle cx="100" cy="75" r="5" fill="#2563EB" />
        <circle cx="75" cy="155" r="5" fill="#1D4ED8" />

        {/* Clouds at base */}
        <path
          d="M 28 170 C 20 170 12 162 16 150 C 20 138 36 135 48 142 C 56 126 84 126 92 142 C 104 138 120 150 116 166 C 116 174 108 182 100 182 L 28 182 Z"
          fill="#FFFFFF"
          stroke="#1E3A8A"
          strokeWidth="2.5"
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
      <div className="relative bg-white/95 backdrop-blur-md rounded-[1.8rem] border-2 border-sky-400 shadow-xl px-5 py-3 text-center max-w-[210px] w-full">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <svg width="56" height="26" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 20 Q 30 5 15 25 Q 35 30 50 25 Q 65 30 85 25 Q 70 5 50 20 Z" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="2.5" />
            <circle cx="50" cy="22" r="5" fill="#1D4ED8" />
            <path d="M 45 26 Q 35 45 25 45 M 55 26 Q 65 45 75 45" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <span className="block text-[10px] uppercase tracking-[0.25em] font-serif text-sky-900 font-bold mt-1.5">
          {title}
        </span>
        <h2 className="text-2xl font-script text-sky-950 tracking-wide font-bold">
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
      <div className="absolute top-1/4 left-1/6 w-2.5 h-2.5 rounded-full bg-sky-400 opacity-80 animate-ping" />
      <div className="absolute top-1/3 right-1/5 w-3 h-3 rounded-full bg-amber-400 opacity-75 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 rounded-full bg-blue-500 opacity-70 animate-bounce" />
    </div>
  );
}
