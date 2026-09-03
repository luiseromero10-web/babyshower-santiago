'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarPlus, Check, Copy } from 'lucide-react';

export function LocationCard() {
  const [copied, setCopied] = useState(false);

  const address = 'Carrera 8 # 170-52, Salón Social 2, Conjunto Navarra, Bogotá, Colombia';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const gCalTitle = encodeURIComponent('Baby Shower de Santiago (Angie & Luis)');
  const gCalDetails = encodeURIComponent('¡Acompáñanos a celebrar la dulce espera de Santiago! Salón Social 2, Conjunto Navarra.');
  const gCalLocation = encodeURIComponent('Carrera 8 # 170-52, Salón Social 2, Conjunto Navarra, Bogotá');
  const gCalDates = '20260926T200000Z/20260927T010000Z';
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gCalTitle}&dates=${gCalDates}&details=${gCalDetails}&location=${gCalLocation}`;

  return (
    <section id="location-section" className="section">
      <div className="sec-head">
        <div className="k">Ubicación y logística</div>
        <h2>¿Cómo llegar al evento?</h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="panel lg:col-span-5 flex flex-col justify-between gap-8 p-7 sm:p-9"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-toile-navy">
              <MapPin className="w-5 h-5 text-toile-ink shrink-0" />
              <span className="font-display text-lg tracking-wide">Conjunto Residencial Navarra</span>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[.3em] text-toile-sky font-medium mb-2 pl-[.3em]">
                Dirección exacta
              </p>
              <p className="text-sm text-toile-navySoft font-light leading-relaxed tracking-wide">
                Carrera 8 # 170-52
                <br />
                <strong className="text-toile-navy font-medium">Salón Social 2</strong>
                <br />
                Bogotá, Colombia
              </p>
            </div>

            <button
              onClick={copyToClipboard}
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-toile-porcelain2 hover:bg-toile-mist border border-toile-powder text-[11px] uppercase tracking-[.2em] font-medium text-toile-navySoft transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-toile-ink" />
                  <span>¡Dirección copiada!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-toile-ink" />
                  <span>Copiar dirección</span>
                </>
              )}
            </button>
          </div>

          <div className="space-y-3 pt-6 border-t border-toile-mist">
            <p className="text-[9px] uppercase tracking-[.3em] text-toile-sky font-semibold pl-[.3em]">
              Recordatorio
            </p>

            <div>
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-toile-navy hover:bg-toile-navySoft text-white font-medium text-[11px] transition-colors"
              >
                <CalendarPlus className="w-4 h-4" />
                <span>Google Calendar</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 h-[340px] lg:h-auto min-h-[320px] rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] border border-toile-powder relative bg-toile-porcelain2"
        >
          <iframe
            title="Mapa de Ubicación Conjunto Navarra"
            src="https://maps.google.com/maps?q=Carrera%208%20%23%20170-52%2C%20Bogota&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 absolute inset-0"
            style={{ filter: 'saturate(.55) hue-rotate(-8deg)' }}
            loading="lazy"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
