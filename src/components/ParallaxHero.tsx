'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ToileBalloonGarland,
  ToileGiraffe,
  ToileLeopardCub,
  ToileCrescentMoon,
  ToileRoyalCrest,
  FloatingSparkles,
} from './WatercolorIllustrations';
import { Sparkles, Heart, Calendar, MapPin, ArrowDown } from 'lucide-react';

export function ParallaxHero() {
  const { scrollY } = useScroll();

  const yBalloons = useTransform(scrollY, [0, 500], [0, -30]);
  const yAnimals = useTransform(scrollY, [0, 500], [0, -50]);

  const scrollToNext = () => {
    const el = document.getElementById('countdown-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-[#eaf4fe] via-[#f1f7ff] to-[#f8fbff] px-4 pt-3 pb-16 md:pb-8 toile-pattern-bg">
      <FloatingSparkles />

      {/* Decorative Corner Balloons */}
      <motion.div
        style={{ y: yBalloons }}
        className="pointer-events-none absolute -top-4 -left-4 sm:top-0 sm:left-0 z-10 opacity-90"
      >
        <ToileBalloonGarland side="left" className="w-24 sm:w-28 md:w-36 h-auto drop-shadow-sm" />
      </motion.div>

      <motion.div
        style={{ y: yBalloons }}
        className="pointer-events-none absolute -top-4 -right-4 sm:top-0 sm:right-0 z-10 opacity-90"
      >
        <ToileBalloonGarland side="right" className="w-24 sm:w-28 md:w-36 h-auto drop-shadow-sm" />
      </motion.div>

      {/* Background Arch Silhouette */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 opacity-60">
        <div className="w-[94%] max-w-2xl h-[92%] rounded-t-[140px] sm:rounded-t-[220px] border-[6px] sm:border-[10px] border-sky-200/60 bg-gradient-to-b from-sky-100/40 via-white/50 to-transparent" />
      </div>

      {/* Desktop Flanking Characters */}
      {/* Left Character: Giraffe & Moon */}
      <motion.div
        style={{ y: yAnimals }}
        className="hidden lg:flex flex-col items-center absolute bottom-12 left-6 xl:left-14 z-10 pointer-events-none"
      >
        <div className="relative">
          <ToileGiraffe width={180} height={270} className="drop-shadow-lg" />
          <div className="absolute -bottom-4 -left-4">
            <ToileCrescentMoon width={110} height={110} className="drop-shadow-md" />
          </div>
        </div>
      </motion.div>

      {/* Right Character: Leopard Cub & Crest */}
      <motion.div
        style={{ y: yAnimals }}
        className="hidden lg:flex flex-col items-center absolute bottom-12 right-6 xl:right-14 z-10 pointer-events-none"
      >
        <div className="relative">
          <div className="absolute -top-8 right-0 transform rotate-3">
            <ToileRoyalCrest title="Baby" name="Santiago" />
          </div>
          <ToileLeopardCub width={180} height={220} className="drop-shadow-lg" />
        </div>
      </motion.div>

      {/* Center Main Invitation Content */}
      <div className="relative z-20 max-w-lg w-full text-center mx-auto my-auto flex flex-col items-center justify-center py-2">
        {/* Subtitle Pill */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-sky-300 shadow-sm text-sky-900 font-semibold text-[11px] sm:text-xs uppercase tracking-widest mb-1">
          <Sparkles className="w-3 h-3 text-amber-500 animate-spin-slow" />
          <span>¡La dulce espera de un príncipe!</span>
          <Sparkles className="w-3 h-3 text-amber-500 animate-spin-slow" />
        </div>

        {/* Title */}
        <div className="mb-1">
          <span className="block text-xl sm:text-2xl font-script text-sky-600 drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
            Baby Shower en honor a
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-slate-900 mt-0.5 mb-1">
            <span className="bg-gradient-to-r from-sky-950 via-blue-900 to-sky-800 bg-clip-text text-transparent drop-shadow-sm">
              Santiago
            </span>
          </h1>
        </div>

        {/* Mobile Animals Row */}
        <div className="flex lg:hidden items-end justify-center gap-2 my-2 w-full px-2">
          <div className="flex justify-center">
            <ToileGiraffe width={110} height={160} className="drop-shadow-md" />
          </div>
          <div className="flex justify-center">
            <ToileLeopardCub width={110} height={135} className="drop-shadow-md" />
          </div>
        </div>

        {/* Parents & Message */}
        <div className="space-y-2 px-2 w-full flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-script text-amber-700">
            <span>Angie</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            <span>Luis</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto font-light leading-relaxed">
            Te invitamos a compartir con nosotros una tarde mágica para celebrar la llegada de nuestro amado bebé.
          </p>

          {/* Quick Date / Location badge */}
          <div className="pt-0.5">
            <div className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-4 py-2 rounded-2xl shadow-md border border-sky-400/30 text-xs">
              <div className="flex items-center gap-1 text-sky-200 font-medium">
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                <span>Sáb, 26 de Septiembre 2026 • 3:00 PM</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-amber-300" />
              <div className="flex items-center gap-1 text-amber-200 font-medium">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Salón Social 2 • Conjunto Navarra</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-1.5 flex items-center justify-center w-full">
            <button
              onClick={scrollToRsvp}
              className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 hover:from-blue-800 hover:to-sky-700 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Confirmar Asistencia
            </button>
          </div>
        </div>
      </div>

      {/* Centered Scroll Down Indicator */}
      <div className="w-full z-30 flex items-center justify-center pt-2 pb-1">
        <button
          onClick={scrollToNext}
          className="group flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-white/95 hover:bg-white backdrop-blur-md border-2 border-sky-300 shadow-md text-sky-900 transition-all transform hover:scale-105 active:scale-95 animate-bounce-scroll"
        >
          <span className="font-bold text-[11px] sm:text-xs uppercase tracking-widest text-sky-800">
            Desliza para ver la invitación
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-sky-600 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
