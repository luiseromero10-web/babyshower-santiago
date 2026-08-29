'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  WatercolorMonstera,
  WatercolorPalm,
  BabyElephantIllustration,
  BabyGiraffeIllustration,
  FloatingSparkles,
} from './WatercolorIllustrations';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';

export function ParallaxHero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const yLeavesFar = useTransform(scrollY, [0, 500], [0, -90]);
  const yLeavesClose = useTransform(scrollY, [0, 500], [0, -180]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0.2]);

  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 via-[#f0f9ff] to-[#f8fafc] px-4 py-16">
      <motion.div
        style={{ y: yBg }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70"
      >
        <div className="w-[320px] h-[320px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-sky-200/50 via-emerald-100/40 to-amber-100/50 blur-3xl transform scale-110" />
      </motion.div>

      <FloatingSparkles />

      <motion.div
        style={{ y: yLeavesFar }}
        className="pointer-events-none absolute -top-10 -left-10 md:top-6 md:left-6 opacity-60 transition-transform duration-700"
      >
        <WatercolorMonstera className="w-36 h-36 md:w-56 md:h-56 transform -rotate-12" />
      </motion.div>
      <motion.div
        style={{ y: yLeavesFar }}
        className="pointer-events-none absolute -top-10 -right-10 md:top-8 md:right-8 opacity-60 transition-transform duration-700"
      >
        <WatercolorPalm className="w-36 h-36 md:w-56 md:h-56 transform rotate-45 scale-x-[-1]" />
      </motion.div>

      <motion.div
        style={{ y: yLeavesClose }}
        className="hidden lg:block absolute bottom-12 left-10 pointer-events-none z-10 opacity-90"
      >
        <div className="relative">
          <WatercolorPalm className="w-44 h-44 transform -rotate-30 opacity-75" />
          <div className="absolute -bottom-4 left-6">
            <BabyElephantIllustration className="w-36 h-36 drop-shadow-md" />
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yLeavesClose }}
        className="hidden lg:block absolute bottom-12 right-10 pointer-events-none z-10 opacity-90"
      >
        <div className="relative">
          <WatercolorMonstera className="w-44 h-44 transform rotate-30 opacity-75" />
          <div className="absolute -bottom-2 right-4">
            <BabyGiraffeIllustration className="w-36 h-36 drop-shadow-md" />
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-20 max-w-2xl w-full text-center mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-sky-200/80 shadow-sm text-emerald-800 font-medium text-xs md:text-sm uppercase tracking-widest mb-6"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Nos llena de amor anunciar</span>
          <Sparkles className="w-4 h-4 text-amber-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mb-4"
        >
          <span className="block text-sm md:text-base font-serif tracking-[0.3em] uppercase text-sky-800/85 mb-2 font-semibold">
            Baby Shower en honor a
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight text-slate-900">
            <span className="bg-gradient-to-r from-slate-900 via-sky-900 to-emerald-950 bg-clip-text text-transparent drop-shadow-sm">
              Santiago
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:hidden flex justify-center items-center my-4"
        >
          <BabyElephantIllustration className="w-32 h-32 drop-shadow-sm" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl font-script text-amber-600">
            <span>Angie</span>
            <Heart className="w-5 h-5 text-rose-400 fill-rose-400 animate-pulse" />
            <span>Luis</span>
          </div>

          <p className="text-sm md:text-base text-slate-600 max-w-lg mx-auto font-light leading-relaxed px-4">
            Acompáñanos a celebrar la dulce espera de nuestro pequeño explorador y compartir una tarde mágica llena de amor y bendiciones.
          </p>

          <div className="pt-2">
            <div className="inline-block bg-gradient-to-r from-slate-900 to-sky-950 text-white px-6 py-3 rounded-2xl shadow-lg border border-sky-300/30">
              <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-0.5">
                Sábado, 26 de Septiembre de 2026
              </p>
              <p className="text-sm font-medium text-amber-200">
                Salón Social 2 • Conjunto Navarra
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={scrollToRsvp}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-600 via-sky-700 to-emerald-700 hover:from-sky-700 hover:to-emerald-800 text-white font-medium shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wider uppercase"
            >
              Confirmar Asistencia
            </button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-sky-700/60 cursor-pointer hidden md:flex flex-col items-center gap-1"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">
          Ver Detalles
        </span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
