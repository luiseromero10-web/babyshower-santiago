'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { WatercolorMonstera, WatercolorPalm } from './WatercolorIllustrations';

export function CountdownTimer() {
  const targetDate = new Date('2026-09-26T15:00:00-05:00').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isEventPassed: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEventPassed: false,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isEventPassed: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isEventPassed: false,
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-12 md:py-20 px-4 bg-white/60 backdrop-blur-md overflow-hidden">
      <div className="absolute -top-10 left-0 pointer-events-none opacity-40">
        <WatercolorMonstera className="w-28 h-28 transform -rotate-45" />
      </div>
      <div className="absolute -bottom-10 right-0 pointer-events-none opacity-40">
        <WatercolorPalm className="w-28 h-28 transform rotate-180" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/70 text-sky-800 text-xs uppercase tracking-widest font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-sky-600" />
            <span>Cuenta Regresiva</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 tracking-tight">
            Cada segundo nos acerca a conocerte
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-2 font-light">
            26 de Septiembre de 2026 • 3:00 PM
          </p>
        </motion.div>

        {mounted ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white via-sky-50/50 to-white p-5 md:p-6 rounded-3xl border border-sky-200/80 shadow-md group-hover:shadow-lg group-hover:border-sky-300 transition-all duration-300">
                  <span className="block text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="block text-[11px] sm:text-xs uppercase tracking-widest text-sky-700/80 font-semibold mt-2">
                    {unit.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto animate-pulse">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-slate-100 h-28 rounded-3xl" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
