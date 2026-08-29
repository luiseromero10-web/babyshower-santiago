'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart, Calendar, MapPin, ArrowDown } from 'lucide-react';

export function ParallaxHero() {
  const { scrollY } = useScroll();

  const yFoliage = useTransform(scrollY, [0, 500], [0, -35]);
  const yArtwork = useTransform(scrollY, [0, 500], [0, -20]);

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
      {/* Background Top Foliage Watercolor Arch */}
      <motion.div
        style={{ y: yFoliage }}
        className="pointer-events-none absolute top-0 inset-x-0 h-40 sm:h-52 md:h-64 z-0 opacity-80 mix-blend-multiply"
      >
        <Image
          src="/images/jungle-foliage-frame.jpg"
          alt="Jungle Watercolor Foliage Frame"
          fill
          className="object-cover object-top"
          priority
        />
      </motion.div>

      {/* Background Arch Silhouette Frame */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 opacity-70">
        <div className="w-[94%] max-w-2xl h-[92%] rounded-t-[140px] sm:rounded-t-[220px] border-[4px] sm:border-[8px] border-sky-200/70 bg-gradient-to-b from-white/80 via-white/60 to-white/90 shadow-sm" />
      </div>

      {/* Center Main Invitation Content */}
      <div className="relative z-20 max-w-lg w-full text-center mx-auto my-auto flex flex-col items-center justify-center py-2">
        {/* Subtitle Pill */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-sky-300 shadow-sm text-sky-900 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
          <span>¡La dulce espera de un príncipe!</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
        </div>

        {/* Title "Baby Shower en honor a Santiago" */}
        <div className="mb-1">
          <span className="block text-2xl sm:text-3xl font-script text-sky-600 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
            Baby Shower en honor a
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-slate-900 mt-0.5 mb-1">
            <span className="bg-gradient-to-r from-sky-950 via-blue-900 to-sky-800 bg-clip-text text-transparent drop-shadow-sm">
              Santiago
            </span>
          </h1>
        </div>

        {/* Realistic Watercolor Safari Baby Animals Showcase */}
        <motion.div
          style={{ y: yArtwork }}
          className="relative w-full max-w-[340px] sm:max-w-[400px] h-52 sm:h-64 my-1 flex items-center justify-center"
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border-2 border-sky-100 bg-white/60 backdrop-blur-sm group transform hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/images/safari-baby-animals.jpg"
              alt="Baby Elephant, Giraffe & Lion in Watercolor Jungle"
              fill
              className="object-contain p-1 animate-float-slow"
              priority
            />
          </div>
          {/* Subtle Golden Glow Overlay */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-400/20 via-amber-300/20 to-emerald-400/20 blur-sm pointer-events-none -z-10" />
        </motion.div>

        {/* Parents & Invitation Details */}
        <div className="space-y-2.5 px-2 w-full flex flex-col items-center mt-1">
          {/* Prominent, Large Angie & Luis typography */}
          <div className="flex items-center justify-center gap-3 text-3xl sm:text-4xl md:text-5xl font-script text-amber-700 font-bold drop-shadow-sm">
            <span>Angie</span>
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 fill-rose-500 animate-pulse" />
            <span>Luis</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto font-light leading-relaxed">
            Te invitamos a compartir con nosotros una tarde mágica para celebrar la llegada de nuestro amado bebé.
          </p>

          {/* Quick Date / Location badge */}
          <div className="pt-0.5">
            <div className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-5 py-2 rounded-2xl shadow-md border border-sky-400/30 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 text-sky-200 font-medium">
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                <span>Sáb, 26 de Septiembre 2026 • 3:00 PM</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-amber-300" />
              <div className="flex items-center gap-1.5 text-amber-200 font-medium">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Salón Social 2 • Conjunto Navarra</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-1 flex items-center justify-center w-full">
            <button
              onClick={scrollToRsvp}
              className="w-full sm:w-auto px-8 py-2.5 rounded-full bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 hover:from-blue-800 hover:to-sky-700 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-widest cursor-pointer"
            >
              Confirmar Asistencia
            </button>
          </div>
        </div>
      </div>

      {/* Prominent, Centered Scroll Down Indicator */}
      <div className="w-full z-30 flex items-center justify-center pt-2 pb-1">
        <button
          onClick={scrollToNext}
          className="group flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/95 hover:bg-white backdrop-blur-md border-2 border-sky-300 shadow-md text-sky-900 transition-all transform hover:scale-105 active:scale-95 animate-bounce-scroll cursor-pointer"
        >
          <span className="font-bold text-xs uppercase tracking-widest text-sky-800">
            Desliza para ver los detalles
          </span>
          <ArrowDown className="w-4 h-4 text-sky-600 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
