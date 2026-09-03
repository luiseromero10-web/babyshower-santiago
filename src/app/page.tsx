'use client';

import React, { useEffect, useState } from 'react';
import { JungleCurtainOpener } from '@/components/JungleCurtainOpener';
import { ParallaxHero } from '@/components/ParallaxHero';
import { CountdownTimer } from '@/components/CountdownTimer';
import { EventDetails } from '@/components/EventDetails';
import { LocationCard } from '@/components/LocationCard';
import { RsvpSection } from '@/components/RsvpSection';
import { JungleBackdrop } from '@/components/toile/JungleBackdrop';
import { Heart, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('invitation_opened') === 'true') {
      setRevealed(true);
    }
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-toile-porcelain">
      <JungleCurtainOpener onOpen={() => setRevealed(true)} />

      <div id="invite" className={revealed ? 'revealed' : ''}>
        <JungleBackdrop />

        <ParallaxHero />
        <CountdownTimer />
        <EventDetails />
        <LocationCard />
        <RsvpSection />

        <section className="closer">
          <svg width="58" height="58" viewBox="0 0 60 60" style={{ margin: '0 auto 22px' }} aria-hidden="true">
            <g fill="none" stroke="#A2C0DC" strokeWidth="1.4">
              <circle cx="30" cy="30" r="5" />
              <ellipse cx="30" cy="14" rx="6" ry="10" />
              <ellipse cx="30" cy="46" rx="6" ry="10" />
              <ellipse cx="14" cy="30" rx="10" ry="6" />
              <ellipse cx="46" cy="30" rx="10" ry="6" />
            </g>
          </svg>
          <p className="q">«Y de pronto, toda la selva contuvo el aliento para verte llegar.»</p>
          <div className="sig">Santiago</div>
        </section>
      </div>

      <footer className="py-12 px-4 bg-toile-porcelain2 text-toile-navySoft text-center text-xs border-t border-toile-powder space-y-4">
        <div className="flex items-center justify-center gap-2 text-toile-ink font-display text-base tracking-wide">
          <span>Santiago</span>
          <span className="text-toile-powder">•</span>
          <span>Angie &amp; Luis</span>
        </div>
        <p className="flex items-center justify-center gap-1.5">
          Hecho con <Heart className="w-3.5 h-3.5 text-toile-raffiaDeep fill-toile-raffiaDeep" /> para celebrar una nueva vida.
        </p>
        <p className="text-toile-sky text-[11px]">
          Sábado, 26 de Septiembre de 2026 • Salón Social 2, Conjunto Navarra, Bogotá
        </p>
      </footer>

      <nav className="quickbar">
        <button type="button" onClick={() => scrollTo('event-details')}>
          <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />Detalles</span>
        </button>
        <button type="button" onClick={() => scrollTo('location-section')}>
          <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />Mapa</span>
        </button>
        <button type="button" className="on" onClick={() => scrollTo('rsvp-section')}>
          <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" />Confirmar</span>
        </button>
      </nav>
    </main>
  );
}
