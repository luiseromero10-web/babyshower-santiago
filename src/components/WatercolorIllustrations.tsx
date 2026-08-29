'use client';

import React from 'react';

/**
 * Balloon Garland / Arch with soft 3D spheres, translucency and glossy sheen
 */
export function ToileBalloonGarland({ className = '', side = 'left' }: { className?: string; side?: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 300 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${side === 'left' ? 'animate-balloon-left' : 'animate-balloon-right'}`}
    >
      <defs>
        {/* Soft Blue Balloon 1 */}
        <radialGradient id="balloonBlueSoft" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="25%" stopColor="#BAE6FD" />
          <stop offset="75%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#38BDF8" />
        </radialGradient>
        {/* Dusty Sky Blue Balloon */}
        <radialGradient id="balloonDustyBlue" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#93C5FD" />
          <stop offset="80%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </radialGradient>
        {/* White Pearl Balloon */}
        <radialGradient id="balloonPearl" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F8FAFC" />
          <stop offset="85%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </radialGradient>
        {/* Translucent Bubble */}
        <radialGradient id="balloonBubble" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#E0F2FE" stopOpacity="0.3" />
          <stop offset="85%" stopColor="#BAE6FD" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.7" />
        </radialGradient>
        <filter id="balloonShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.12" />
        </filter>
      </defs>

      <g filter="url(#balloonShadow)">
        {side === 'left' ? (
          <>
            <circle cx="120" cy="80" r="65" fill="url(#balloonBlueSoft)" />
            <circle cx="70" cy="170" r="55" fill="url(#balloonPearl)" />
            <circle cx="160" cy="180" r="60" fill="url(#balloonDustyBlue)" />
            <circle cx="90" cy="270" r="58" fill="url(#balloonBlueSoft)" />
            <circle cx="180" cy="280" r="48" fill="url(#balloonBubble)" stroke="#BAE6FD" strokeWidth="1.5" />
            <circle cx="110" cy="370" r="52" fill="url(#balloonPearl)" />
            <circle cx="170" cy="380" r="45" fill="url(#balloonDustyBlue)" />
            <circle cx="60" cy="420" r="38" fill="url(#balloonBlueSoft)" />
            {/* Glossy reflections */}
            <ellipse cx="105" cy="65" rx="14" ry="7" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 105 65)" />
            <ellipse cx="55" cy="155" rx="12" ry="6" fill="#FFFFFF" opacity="0.7" transform="rotate(-30 55 155)" />
            <ellipse cx="145" cy="165" rx="14" ry="7" fill="#FFFFFF" opacity="0.5" transform="rotate(-30 145 165)" />
            <ellipse cx="75" cy="255" rx="12" ry="6" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 75 255)" />
          </>
        ) : (
          <>
            <circle cx="180" cy="80" r="65" fill="url(#balloonDustyBlue)" />
            <circle cx="230" cy="170" r="55" fill="url(#balloonPearl)" />
            <circle cx="140" cy="180" r="60" fill="url(#balloonBlueSoft)" />
            <circle cx="210" cy="270" r="58" fill="url(#balloonDustyBlue)" />
            <circle cx="120" cy="280" r="48" fill="url(#balloonBubble)" stroke="#BAE6FD" strokeWidth="1.5" />
            <circle cx="190" cy="370" r="52" fill="url(#balloonPearl)" />
            <circle cx="130" cy="380" r="45" fill="url(#balloonBlueSoft)" />
            <circle cx="240" cy="420" r="38" fill="url(#balloonDustyBlue)" />
            {/* Glossy reflections */}
            <ellipse cx="165" cy="65" rx="14" ry="7" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 165 65)" />
            <ellipse cx="215" cy="155" rx="12" ry="6" fill="#FFFFFF" opacity="0.7" transform="rotate(-30 215 155)" />
            <ellipse cx="125" cy="165" rx="14" ry="7" fill="#FFFFFF" opacity="0.5" transform="rotate(-30 125 165)" />
            <ellipse cx="195" cy="255" rx="12" ry="6" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 195 255)" />
          </>
        )}
      </g>
    </svg>
  );
}

/**
 * Elegant Toile de Jouy Baby Giraffe standing tall with blue floral porcelain pattern
 */
export function ToileGiraffe({ className = 'w-64 h-96' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 540" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <pattern id="toileFloralBlue" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* Porcelain blue floral etched damask motif */}
          <path d="M40 10 C35 25 25 35 10 40 C25 45 35 55 40 70 C45 55 55 45 70 40 C55 35 45 25 40 10 Z" fill="#3B82F6" opacity="0.25" />
          <circle cx="40" cy="40" r="5" fill="#1D4ED8" opacity="0.4" />
          <path d="M20 20 Q30 30 20 40 Q10 30 20 20 Z" fill="#2563EB" opacity="0.3" />
          <path d="M60 20 Q50 30 60 40 Q70 30 60 20 Z" fill="#2563EB" opacity="0.3" />
          <path d="M20 60 Q30 50 20 40 Q10 50 20 60 Z" fill="#2563EB" opacity="0.3" />
          <path d="M60 60 Q50 50 60 40 Q70 50 60 60 Z" fill="#2563EB" opacity="0.3" />
        </pattern>
        <filter id="toileCutoutShadow" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="3" dy="12" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#toileCutoutShadow)">
        {/* Silhouette Base with white outline cutout effect */}
        <g stroke="#FFFFFF" strokeWidth="8" strokeLinejoin="round">
          {/* Main Giraffe Body */}
          <path
            d="M 120 500 
               L 125 360 
               Q 120 330 140 280 
               L 180 140 
               Q 185 100 220 85 
               Q 245 75 260 90 
               Q 275 105 265 125 
               Q 250 145 230 150 
               L 205 260 
               Q 225 300 230 340 
               L 245 500 
               L 230 505 
               L 215 390 
               L 190 390 
               L 175 505 
               L 155 505 
               L 165 370 
               L 140 505 
               Z"
            fill="#F8FAFC"
          />
        </g>

        {/* Giraffe Body Filled with Porcelain Pattern */}
        <path
          d="M 120 500 
             L 125 360 
             Q 120 330 140 280 
             L 180 140 
             Q 185 100 220 85 
             Q 245 75 260 90 
             Q 275 105 265 125 
             Q 250 145 230 150 
             L 205 260 
             Q 225 300 230 340 
             L 245 500 
             L 230 505 
             L 215 390 
             L 190 390 
             L 175 505 
             L 155 505 
             L 165 370 
             L 140 505 
             Z"
          fill="#EFF6FF"
          stroke="#1E40AF"
          strokeWidth="2.5"
        />

        {/* Overlay Toile Floral Etching */}
        <path
          d="M 120 500 
             L 125 360 
             Q 120 330 140 280 
             L 180 140 
             Q 185 100 220 85 
             Q 245 75 260 90 
             Q 275 105 265 125 
             Q 250 145 230 150 
             L 205 260 
             Q 225 300 230 340 
             L 245 500 
             L 230 505 
             L 215 390 
             L 190 390 
             L 175 505 
             L 155 505 
             L 165 370 
             L 140 505 
             Z"
          fill="url(#toileFloralBlue)"
        />

        {/* Giraffe Mane & Spots in Toile Blue */}
        {/* Mane */}
        <path
          d="M 180 140 Q 170 160 178 180 Q 168 200 176 220 Q 166 240 174 260"
          stroke="#1D4ED8"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Horns / Ossicones */}
        <line x1="225" y1="85" x2="228" y2="60" stroke="#1E40AF" strokeWidth="4" strokeLinecap="round" />
        <circle cx="228" cy="58" r="4.5" fill="#1D4ED8" />
        <line x1="238" y1="83" x2="243" y2="58" stroke="#1E40AF" strokeWidth="4" strokeLinecap="round" />
        <circle cx="243" cy="56" r="4.5" fill="#1D4ED8" />

        {/* Sweet Giraffe Eye & Eyelashes */}
        <ellipse cx="238" cy="100" rx="6" ry="7" fill="#0F172A" />
        <circle cx="240" cy="98" r="2.5" fill="#FFFFFF" />
        <path d="M 233 93 Q 238 89 246 92" stroke="#1E3A8A" strokeWidth="1.5" fill="none" />

        {/* Ears */}
        <path d="M 215 88 Q 195 85 200 100 Q 210 102 220 95 Z" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="1.5" />

        {/* Soft Toile Botanical Leaves at Feet */}
        <path d="M 100 505 Q 120 460 160 480 Q 130 500 100 505 Z" fill="#93C5FD" opacity="0.6" />
        <path d="M 180 505 Q 210 450 260 475 Q 220 495 180 505 Z" fill="#60A5FA" opacity="0.5" />
      </g>
    </svg>
  );
}

/**
 * Charming Toile de Jouy Baby Leopard Cub sitting with big cute eyes and porcelain blue patterns
 */
export function ToileLeopardCub({ className = 'w-64 h-80' }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 420" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <pattern id="toileLeopardRosettes" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          {/* Toile floral rosettes */}
          <circle cx="30" cy="30" r="7" fill="#3B82F6" opacity="0.3" />
          <path d="M 22 24 C 20 18 35 15 38 22" stroke="#1D4ED8" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 38 25 C 44 28 42 38 35 40" stroke="#1D4ED8" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 22 36 C 18 32 20 25 24 24" stroke="#1D4ED8" strokeWidth="2" fill="none" opacity="0.6" />
        </pattern>
        <filter id="cubShadow" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="3" dy="12" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#cubShadow)">
        {/* White Outline Silhouette */}
        <g stroke="#FFFFFF" strokeWidth="8" strokeLinejoin="round">
          {/* Main Body */}
          <ellipse cx="170" cy="270" rx="75" ry="95" fill="#F8FAFC" />
          {/* Head */}
          <circle cx="170" cy="140" r="68" fill="#F8FAFC" />
        </g>

        {/* Body Base */}
        <ellipse cx="170" cy="270" rx="75" ry="95" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="2.5" />
        {/* Tail curler */}
        <path
          d="M 230 310 Q 290 280 280 200 Q 275 170 260 185 Q 260 220 220 260"
          fill="#EFF6FF"
          stroke="#1E40AF"
          strokeWidth="2.5"
        />

        {/* Paws */}
        {/* Left Front Leg & Paw */}
        <path
          d="M 125 230 L 125 365 Q 125 385 150 385 Q 170 385 165 365 L 160 230 Z"
          fill="#F8FAFC"
          stroke="#1E40AF"
          strokeWidth="2"
        />
        {/* Right Front Leg & Paw */}
        <path
          d="M 180 230 L 175 365 Q 175 385 200 385 Q 225 385 220 365 L 215 230 Z"
          fill="#F8FAFC"
          stroke="#1E40AF"
          strokeWidth="2"
        />

        {/* Overlay Toile Floral Rosettes on Body */}
        <ellipse cx="170" cy="270" rx="73" ry="93" fill="url(#toileLeopardRosettes)" />

        {/* Head */}
        <circle cx="170" cy="140" r="68" fill="#F8FAFC" stroke="#1E40AF" strokeWidth="2.5" />
        <circle cx="170" cy="140" r="67" fill="url(#toileLeopardRosettes)" />

        {/* Ears with Toile accents */}
        <path d="M 115 105 Q 100 65 125 70 Q 145 80 135 110 Z" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2" />
        <path d="M 120 100 Q 110 75 125 80 Z" fill="#93C5FD" />
        <path d="M 225 105 Q 240 65 215 70 Q 195 80 205 110 Z" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2" />
        <path d="M 220 100 Q 230 75 215 80 Z" fill="#93C5FD" />

        {/* Large Sweet Expressive Eyes */}
        <ellipse cx="138" cy="135" rx="14" ry="17" fill="#0F172A" />
        <ellipse cx="138" cy="135" rx="11" ry="14" fill="#1E3A8A" />
        <circle cx="142" cy="130" r="5" fill="#FFFFFF" />
        <circle cx="134" cy="142" r="2.5" fill="#FFFFFF" />

        <ellipse cx="202" cy="135" rx="14" ry="17" fill="#0F172A" />
        <ellipse cx="202" cy="135" rx="11" ry="14" fill="#1E3A8A" />
        <circle cx="206" cy="130" r="5" fill="#FFFFFF" />
        <circle cx="198" cy="142" r="2.5" fill="#FFFFFF" />

        {/* Cute Nose and Whiskers Area */}
        <path d="M 165 155 L 175 155 L 170 162 Z" fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" />
        <path d="M 170 162 L 170 170 Q 160 175 155 170 M 170 170 Q 180 175 185 170" stroke="#1E40AF" strokeWidth="2" fill="none" />

        {/* Whiskers */}
        <line x1="140" y1="168" x2="105" y2="162" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="140" y1="173" x2="110" y2="178" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="200" y1="168" x2="235" y2="162" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="200" y1="173" x2="230" y2="178" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />

        {/* Surrounding Porcelain Blue Jungle Botanicals */}
        <path d="M 70 380 Q 90 310 130 340 Q 100 375 70 380 Z" fill="#93C5FD" stroke="#1E40AF" strokeWidth="1.5" opacity="0.8" />
        <path d="M 230 380 Q 260 320 280 355 Q 250 380 230 380 Z" fill="#60A5FA" stroke="#1E40AF" strokeWidth="1.5" opacity="0.8" />
      </g>
    </svg>
  );
}

/**
 * Crescent Moon with Clouds and Toile Blue Pattern
 */
export function ToileCrescentMoon({ className = 'w-48 h-48' }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <filter id="moonShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.2" />
        </filter>
      </defs>
      <g filter="url(#moonShadow)">
        {/* Crescent Moon */}
        <path
          d="M 170 30 C 100 30 50 85 50 160 C 50 215 85 250 140 250 C 100 220 90 170 105 120 C 120 70 150 45 170 30 Z"
          fill="url(#moonGrad)"
          stroke="#1E40AF"
          strokeWidth="2.5"
        />
        {/* Cloud at Base */}
        <path
          d="M 40 220 C 30 220 20 210 25 195 C 30 180 50 175 65 185 C 75 165 110 165 120 185 C 135 180 155 195 150 215 C 150 225 140 235 130 235 L 40 235 Z"
          fill="#FFFFFF"
          stroke="#93C5FD"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

/**
 * Royal French Ribbon Bow and Crest Frame ("Baby Santiago")
 */
export function ToileRoyalCrest({ title = 'Baby', name = 'Santiago', className = '' }: { title?: string; name?: string; className?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-center p-6 md:p-8 ${className}`}>
      {/* Decorative French Shield Border */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-[2.5rem] border-2 border-sky-300 shadow-xl px-8 py-6 text-center max-w-sm w-full">
        {/* Ribbon Bow on Top */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <svg width="80" height="40" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 20 Q 30 5 15 25 Q 35 30 50 25 Q 65 30 85 25 Q 70 5 50 20 Z" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2" />
            <circle cx="50" cy="22" r="6" fill="#2563EB" />
            <path d="M 45 26 Q 35 45 25 45 M 55 26 Q 65 45 75 45" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Text Content */}
        <span className="block text-xs uppercase tracking-[0.25em] font-serif text-sky-800 font-bold mt-2">
          {title}
        </span>
        <h2 className="text-3xl sm:text-4xl font-script text-sky-900 tracking-wide mt-0.5">
          {name}
        </h2>
      </div>
    </div>
  );
}

/**
 * Floating Sparkles in blue and gold
 */
export function FloatingSparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/6 w-2.5 h-2.5 rounded-full bg-sky-300 opacity-70 animate-ping" />
      <div className="absolute top-1/3 right-1/5 w-3 h-3 rounded-full bg-amber-300 opacity-60 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-blue-400 opacity-60 animate-bounce" />
      <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-sky-200 opacity-75 animate-ping" />
    </div>
  );
}
