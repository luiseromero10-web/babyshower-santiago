'use client';

import React from 'react';
import { JungleCurtainOpener } from '@/components/JungleCurtainOpener';
import { ParallaxHero } from '@/components/ParallaxHero';
import { CountdownTimer } from '@/components/CountdownTimer';
import { EventDetails } from '@/components/EventDetails';
import { LocationCard } from '@/components/LocationCard';
import { RsvpSection } from '@/components/RsvpSection';
import { Heart, ShieldCheck, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#f6f9fe] text-slate-900 selection:bg-sky-200 selection:text-sky-950 pb-16 md:pb-0">
      {/* Interactive Jungle Opening Reveal Overlay */}
      <JungleCurtainOpener />

      {/* Hero Section with Realistic Watercolor Jungle & Safari Baby Animals */}
      <ParallaxHero />

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Event Details Grid (Customized, open gifts, no dress code) */}
      <EventDetails />

      {/* Location, Interactive Map & Calendar Sync */}
      <LocationCard />

      {/* RSVP Autocomplete & Form */}
      <RsvpSection />

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950 text-slate-400 text-center text-xs border-t border-slate-800 space-y-4">
        <div className="flex items-center justify-center gap-2 text-sky-200 font-serif text-sm">
          <span>Santiago</span>
          <span>•</span>
          <span>Angie & Luis</span>
        </div>
        <p className="flex items-center justify-center gap-1">
          Hecho con <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> para celebrar una nueva vida.
        </p>
        <p className="text-slate-500 text-[11px]">
          Sábado, 26 de Septiembre de 2026 • Salón Social 2, Conjunto Navarra, Bogotá
        </p>
        <div className="pt-2">
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-[11px] transition-colors border border-slate-800"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Acceso Organizadores</span>
          </Link>
        </div>
      </footer>

      {/* Sticky Quick-Action Bar for Mobile Devices */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-40">
        <div className="bg-slate-900/95 backdrop-blur-xl border border-sky-400/40 rounded-full shadow-2xl px-4 py-2.5 flex items-center justify-between">
          <button
            onClick={() => scrollTo('event-details')}
            className="flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-white px-2 py-1"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            <span>Detalles</span>
          </button>
          <button
            onClick={() => scrollTo('location-section')}
            className="flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-white px-2 py-1"
          >
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Mapa</span>
          </button>
          <button
            onClick={() => scrollTo('rsvp-section')}
            className="flex items-center gap-1 text-[11px] font-bold text-white bg-gradient-to-r from-blue-600 to-sky-500 px-3.5 py-1.5 rounded-full shadow-md active:scale-95 transition-transform"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            <span>Confirmar</span>
          </button>
        </div>
      </div>
    </main>
  );
}
