'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, CalendarPlus, Download, Check, Copy } from 'lucide-react';

export function LocationCard() {
  const [copied, setCopied] = useState(false);

  const address = 'Carrera 8 # 170-52, Salón Social 2, Conjunto Navarra, Bogotá, Colombia';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Carrera+8+%23+170-52+Bogota';
  const wazeUrl = 'https://www.waze.com/ul?q=Carrera+8+%23+170-52+Bogota&navigate=yes';

  const gCalTitle = encodeURIComponent('Baby Shower de Santiago (Angie & Luis)');
  const gCalDetails = encodeURIComponent('¡Acompáñanos a celebrar la dulce espera de Santiago! Salón Social 2, Conjunto Navarra.');
  const gCalLocation = encodeURIComponent('Carrera 8 # 170-52, Salón Social 2, Conjunto Navarra, Bogotá');
  const gCalDates = '20260926T200000Z/20260927T010000Z';
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gCalTitle}&dates=${gCalDates}&details=${gCalDetails}&location=${gCalLocation}`;

  const downloadIcsFile = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Baby Shower Santiago//ES',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:Baby Shower de Santiago (Angie & Luis)',
      'DESCRIPTION:Celebración del Baby Shower de Santiago. Padres: Angie y Luis.',
      'LOCATION:Carrera 8 # 170-52\\, Salón Social 2\\, Conjunto Navarra\\, Bogotá\\, Colombia',
      'DTSTART:20260926T200000Z',
      'DTEND:20260927T010000Z',
      'STATUS:CONFIRMED',
      'BEGIN:VALARM',
      'TRIGGER:-PT24H',
      'ACTION:DISPLAY',
      'DESCRIPTION:Recordatorio: Baby Shower de Santiago mañana a las 3:00 PM',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Baby_Shower_Santiago.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="location-section"
      className="relative py-16 md:py-24 px-4 bg-white/70 backdrop-blur-md overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/80 text-sky-900 text-xs uppercase tracking-widest font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Ubicación y Logística</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            ¿Cómo llegar al evento?
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-2 font-light">
            Salón Social 2 • Conjunto Navarra (Carrera 8 # 170-52, Bogotá)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white shadow-xl border border-sky-300/20"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-amber-300 font-serif font-semibold text-lg">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Conjunto Residencial Navarra</span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-sky-200 font-medium mb-1">
                  Dirección Exacta
                </p>
                <p className="text-base text-slate-200 font-light leading-relaxed">
                  Carrera 8 # 170-52
                  <br />
                  <strong className="text-white font-medium">Salón Social 2</strong>
                  <br />
                  Bogotá, Colombia
                </p>
              </div>

              <button
                onClick={copyToClipboard}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs uppercase tracking-wider font-semibold text-sky-100 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">¡Dirección Copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-sky-300" />
                    <span>Copiar Dirección</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-8 space-y-3">
              <p className="text-xs uppercase tracking-widest text-sky-200/80 font-semibold mb-2">
                Navegación y Recordatorio
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-sky-600/30 hover:bg-sky-600/50 border border-sky-400/30 text-xs font-medium text-white transition-all text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-400/30 text-xs font-medium text-white transition-all text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Waze</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs transition-all shadow-md"
                >
                  <CalendarPlus className="w-4 h-4" />
                  <span>Google Calendar</span>
                </a>
                <button
                  onClick={downloadIcsFile}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-sky-300" />
                  <span>Guardar .ICS</span>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[380px] lg:h-auto min-h-[350px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative bg-slate-100"
          >
            <iframe
              title="Mapa de Ubicación Conjunto Navarra"
              src="https://maps.google.com/maps?q=Carrera%208%20%23%20170-52%2C%20Bogota&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
