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
import { Sparkles, Heart, ChevronDown, Calendar, MapPin, ArrowDown } from 'lucide-react';

export function ParallaxHero() {
  const { scrollY } = useScroll();

  // Multi-layer parallax scroll transforms
  const yBalloons = useTransform(scrollY, [0, 600], [0, -70]);
  const yAnimals = useTransform(scrollY, [0, 600], [0, -120]);
  const yArch = useTransform(scrollY, [0, 600], [0, 40]);
  const opacityHero = useTransform(scrollY, [0, 450], [1, 0.15]);
  const scaleHero = useTransform(scrollY, [0, 450], [1, 0.96]);

  const scrollToNext = () => {
    const el = document.getElementById('countdown-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    }
  };

  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-[#eaf4fe] via-[#f1f7ff] to-[#f8fbff] px-3 sm:px-6 pt-6 pb-20 md:pb-12 toile-pattern-bg">
      <FloatingSparkles />

      {/* Layer 1: Top Balloon Garlands (Framing left and right corners) */}
      <motion.div
        style={{ y: yBalloons }}
        className="pointer-events-none absolute -top-12 -left-12 sm:-top-8 sm:-left-6 w-48 sm:w-72 md:w-80 lg:w-96 z-10 opacity-95"
      >
        <ToileBalloonGarland side="left" className="w-full h-auto drop-shadow-md" />
      </motion.div>

      <motion.div
        style={{ y: yBalloons }}
        className="pointer-events-none absolute -top-12 -right-12 sm:-top-8 sm:-right-6 w-48 sm:w-72 md:w-80 lg:w-96 z-10 opacity-95"
      >
        <ToileBalloonGarland side="right" className="w-full h-auto drop-shadow-md" />
      </motion.div>

      {/* Layer 2: Architectural Stage Arches (Backdrop mimicking the decor photo) */}
      <motion.div
        style={{ y: yArch }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 opacity-80"
      >
        {/* Outer Grand Blue Arch */}
        <div className="w-[340px] sm:w-[540px] md:w-[720px] lg:w-[860px] h-[520px] sm:h-[650px] md:h-[780px] rounded-t-[180px] sm:rounded-t-[300px] border-[14px] sm:border-[22px] border-sky-200/70 bg-gradient-to-b from-sky-100/50 via-white/40 to-transparent shadow-2xl relative flex items-center justify-center">
          {/* Inner Layer Arch with fluted texture simulation */}
          <div className="w-[88%] h-[92%] rounded-t-[150px] sm:rounded-t-[260px] border-[6px] border-dashed border-sky-300/40 bg-white/30 backdrop-blur-[2px]" />
        </div>
      </motion.div>

      {/* Layer 3: Toile Characters - Desktop & Tablet Left/Right Stage Cutouts */}
      {/* Left Character: Toile Giraffe & Crescent Moon */}
      <motion.div
        style={{ y: yAnimals }}
        className="hidden md:flex flex-col items-center absolute bottom-4 lg:bottom-8 left-2 lg:left-12 z-20 pointer-events-none animate-float-slow"
      >
        <div className="relative">
          <ToileGiraffe className="w-48 lg:w-64 h-auto drop-shadow-xl" />
          <div className="absolute -bottom-6 -left-4 lg:-left-8">
            <ToileCrescentMoon className="w-32 lg:w-44 h-auto drop-shadow-md" />
          </div>
        </div>
      </motion.div>

      {/* Right Character: Toile Leopard Cub & Royal Ribbon Crest */}
      <motion.div
        style={{ y: yAnimals }}
        className="hidden md:flex flex-col items-center absolute bottom-4 lg:bottom-8 right-2 lg:right-12 z-20 pointer-events-none animate-float-slow"
      >
        <div className="relative">
          <div className="absolute -top-12 right-0 transform rotate-6">
            <ToileRoyalCrest title="Baby" name="Santiago" className="scale-90" />
          </div>
          <ToileLeopardCub className="w-48 lg:w-64 h-auto drop-shadow-xl" />
        </div>
      </motion.div>

      {/* Center Main Stage / Invitation Content */}
      <motion.div
        style={{ opacity: opacityHero, scale: scaleHero }}
        className="relative z-20 max-w-xl md:max-w-2xl w-full text-center mx-auto my-auto pt-6 sm:pt-10"
      >
        {/* Elegant Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-sky-300 shadow-sm text-sky-900 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-4"
        >
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
          <span>¡La dulce espera de un príncipe!</span>
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
        </motion.div>

        {/* Glowing Neon Script Effect "It's a Boy / Baby Santiago" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="my-2"
        >
          <span className="inline-block text-2xl sm:text-3xl md:text-4xl font-script text-sky-600 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)] animate-pulse-glow">
            Baby Shower en honor a
          </span>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight text-slate-900 mt-1 mb-2">
            <span className="bg-gradient-to-r from-sky-950 via-blue-900 to-sky-800 bg-clip-text text-transparent drop-shadow-sm">
              Santiago
            </span>
          </h1>
        </motion.div>

        {/* Mobile Animals Showcase (Visible on Mobile Only so the user sees the breathtaking Toile characters) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="md:hidden flex items-end justify-center gap-3 my-3 px-2"
        >
          <div className="relative flex-1 flex justify-center">
            <ToileGiraffe className="w-32 h-auto drop-shadow-lg" />
          </div>
          <div className="relative flex-1 flex justify-center">
            <ToileLeopardCub className="w-32 h-auto drop-shadow-lg" />
          </div>
        </motion.div>

        {/* Parents Names & Invitation Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="space-y-4 px-2"
        >
          <div className="flex items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl font-script text-amber-700">
            <span>Angie</span>
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>Luis</span>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-lg mx-auto font-light leading-relaxed">
            Te invitamos a compartir con nosotros una tarde mágica e inolvidable para celebrar la llegada de nuestro amado bebé.
          </p>

          {/* Event Quick Info Card */}
          <div className="pt-2">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-6 py-3.5 rounded-3xl shadow-xl border border-sky-400/40">
              <div className="flex items-center gap-2 text-sky-200 text-xs sm:text-sm font-medium">
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Sábado, 26 de Septiembre 2026 • 3:00 PM</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-amber-300" />
              <div className="flex items-center gap-2 text-amber-200 text-xs sm:text-sm font-medium">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Salón Social 2 • Conjunto Navarra</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-3 flex items-center justify-center gap-3">
            <button
              onClick={scrollToRsvp}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 hover:from-blue-800 hover:to-sky-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Confirmar Asistencia
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* UNMISTAKABLE MOBILE & DESKTOP SCROLL INDICATOR */}
      <div className="w-full z-30 flex flex-col items-center justify-center pt-6">
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border-2 border-sky-300 shadow-lg text-sky-900 transition-all transform hover:scale-105 active:scale-95 animate-bounce-scroll"
        >
          <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-widest text-sky-800">
            <span>Desliza para ver la invitación</span>
            <ArrowDown className="w-4 h-4 text-sky-600 group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="text-[10px] text-slate-500 font-light hidden sm:inline">
            (Cuenta regresiva, mapa, ubicación y confirmación)
          </span>
        </button>
      </div>
    </section>
  );
}
