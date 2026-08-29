import React from 'react';
import { ParallaxHero } from '@/components/ParallaxHero';
import { CountdownTimer } from '@/components/CountdownTimer';
import { EventDetails } from '@/components/EventDetails';
import { LocationCard } from '@/components/LocationCard';
import { RsvpSection } from '@/components/RsvpSection';
import { Heart, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-200 selection:text-sky-950">
      {/* Hero Section with Watercolor Parallax */}
      <ParallaxHero />

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Event Details Grid */}
      <EventDetails />

      {/* Location, Interactive Map & Calendar Sync */}
      <LocationCard />

      {/* RSVP Autocomplete & Form */}
      <RsvpSection />

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-slate-400 text-center text-xs border-t border-slate-800 space-y-4">
        <div className="flex items-center justify-center gap-2 text-amber-200 font-serif text-sm">
          <span>Santiago</span>
          <span>•</span>
          <span>Angie & Luis</span>
        </div>
        <p className="flex items-center justify-center gap-1">
          Hecho con <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> para celebrar una nueva vida.
        </p>
        <p className="text-slate-600 text-[11px]">
          Sábado, 26 de Septiembre de 2026 • Bogotá, Colombia
        </p>
        <div className="pt-2">
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-[11px] transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Acceso Organizadores</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
