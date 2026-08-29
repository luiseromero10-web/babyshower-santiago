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

  const yBalloons = useTransform(scrollY, [0, 500], [0, -40]);
  const yAnimals = useTransform(scrollY, [0, 500], [0, -80]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0.2]);

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
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-[#eaf4fe] via-[#f1f7ff] to-[#f8fbff] px-4 py-8 md:py-12 toile-pattern-bg">
      <FloatingSparkles />

      {/* Decorative Corner Balloons - strictly bounded size */}
      <motion.div
        style={{ y: yBalloons }}
        className="pointer-events-none absolute -top-4 -left-4 sm:top-0 sm:left-0 z-10 opacity-90"
      >
        <ToileBalloonGarland side="left" className="w-24 sm:w-32 md:w-44 h-auto drop-shadow-md" />
      </motion.div>

      <motion.div
        style={{ y: yBalloons }}
        className="pointer-events-none absolute -top-4 -right-4 sm:top-0 sm:right-0 z-10 opacity-90"
      >
        <ToileBalloonGarland side="right" className="w-24 sm:w-32 md:w-44 h-auto drop-shadow-md" />
      </motion.div>

      {/* Background Arch Silhouette */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 opacity-70">
        <div className="w-[90%] max-w-2xl h-[85%] rounded-t-[140px] sm:rounded-t-[220px] border-[8px] sm:border-[14px] border-sky-200/60 bg-gradient-to-b from-sky-100/40 via-white/50 to-transparent shadow-inner" />
      </div>

      {/* Desktop Flanking Characters */}
      {/* Left Character: Giraffe & Moon */}
      <motion.div
        style={{ y: yAnimals }}
        className="hidden lg:flex flex-col items-center absolute bottom-6 left-6 xl:left-14 z-10 pointer-events-none"
      >
        <div className="relative">
          <ToileGiraffe className="w-44 xl:w-52 h-auto drop-shadow-xl" />
          <div className="absolute -bottom-4 -left-6">
            <ToileCrescentMoon className="w-28 xl:w-32 h-auto drop-shadow-md" />
          </div>
        </div>
      </motion.div>

      {/* Right Character: Leopard Cub & Crest */}
      <motion.div
        style={{ y: yAnimals }}
        className="hidden lg:flex flex-col items-center absolute bottom-6 right-6 xl:right-14 z-10 pointer-events-none"
      >
        <div className="relative">
          <div className="absolute -top-10 right-0 transform rotate-3">
            <ToileRoyalCrest title="Baby" name="Santiago" />
          </div>
          <ToileLeopardCub className="w-44 xl:w-52 h-auto drop-shadow-xl" />
        </div>
      </motion.div>

      {/* Center Main Invitation Card */}
      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-20 max-w-xl w-full text-center mx-auto my-auto pt-2 sm:pt-4"
      >
        {/* Subtitle Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-300 shadow-sm text-sky-900 font-semibold text-xs uppercase tracking-widest mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
          <span>¡La dulce espera de un príncipe!</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2"
        >
          <span className="block text-xl sm:text-2xl md:text-3xl font-script text-sky-600 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
            Baby Shower en honor a
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-slate-900 mt-1 mb-2">
            <span className="bg-gradient-to-r from-sky-950 via-blue-900 to-sky-800 bg-clip-text text-transparent drop-shadow-sm">
              Santiago
            </span>
          </h1>
        </motion.div>

        {/* Mobile Animals Row (Responsive for small screens) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:hidden flex items-end justify-center gap-4 my-2 px-4"
        >
          <div className="flex-1 flex justify-center max-w-[140px]">
            <ToileGiraffe className="w-full h-auto drop-shadow-md" />
          </div>
          <div className="flex-1 flex justify-center max-w-[140px]">
            <ToileLeopardCub className="w-full h-auto drop-shadow-md" />
          </div>
        </motion.div>

        {/* Parents & Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-3 px-2"
        >
          <div className="flex items-center justify-center gap-3 text-2xl sm:text-3xl font-script text-amber-700">
            <span>Angie</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            <span>Luis</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-light leading-relaxed">
            Te invitamos a compartir con nosotros una tarde mágica para celebrar la llegada de nuestro amado bebé.
          </p>

          {/* Quick Date / Location badge */}
          <div className="pt-1">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-5 py-3 rounded-2xl shadow-lg border border-sky-400/40">
              <div className="flex items-center gap-1.5 text-sky-200 text-xs sm:text-sm font-medium">
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Sáb, 26 de Septiembre 2026 • 3:00 PM</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-amber-300" />
              <div className="flex items-center gap-1.5 text-amber-200 text-xs sm:text-sm font-medium">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Salón Social 2 • Conjunto Navarra</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex items-center justify-center">
            <button
              onClick={scrollToRsvp}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 hover:from-blue-800 hover:to-sky-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Confirmar Asistencia
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Prominent Scroll Down Button */}
      <div className="w-full z-30 flex flex-col items-center justify-center pt-4">
        <button
          onClick={scrollToNext}
          className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/95 hover:bg-white backdrop-blur-md border-2 border-sky-300 shadow-md text-sky-900 transition-all transform hover:scale-105 active:scale-95 animate-bounce-scroll"
        >
          <span className="font-bold text-xs uppercase tracking-widest text-sky-800">
            Desliza para ver la invitación
          </span>
          <ArrowDown className="w-4 h-4 text-sky-600 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
