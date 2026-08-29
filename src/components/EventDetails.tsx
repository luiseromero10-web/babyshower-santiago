'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, Gift, HeartHandshake } from 'lucide-react';

export function EventDetails() {
  const details = [
    {
      icon: Calendar,
      title: 'Fecha y Hora',
      highlight: 'Sábado, 26 de Septiembre de 2026',
      description: 'Recepción y bienvenida a partir de las 3:00 PM.',
      badge: '¡Día Especial!',
      gradient: 'from-sky-500/10 to-blue-500/10',
      border: 'border-sky-200',
      iconColor: 'text-sky-600',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      highlight: 'Salón Social 2, Conjunto Navarra',
      description: 'Carrera 8 # 170-52, Bogotá, Colombia. Parqueadero de visitantes disponible.',
      badge: 'Fácil Acceso',
      gradient: 'from-emerald-500/10 to-teal-500/10',
      border: 'border-emerald-200',
      iconColor: 'text-emerald-600',
    },
    {
      icon: Gift,
      title: 'Regalos y Detalles',
      highlight: 'Elección Libre y Abierta',
      description: 'Tu presencia es nuestro mayor tesoro. Cualquier detalle que desees traer para la llegada de Santiago es completamente libre y bienvenido con todo nuestro amor.',
      badge: 'Con Mucho Cariño',
      gradient: 'from-amber-500/10 to-yellow-500/10',
      border: 'border-amber-200',
      iconColor: 'text-amber-600',
    },
    {
      icon: HeartHandshake,
      title: 'Celebración & Sorpresas',
      highlight: 'Tarde Mágica e Inolvidable',
      description: 'Tendremos dinámicas, mesa de dulces, momentos especiales y fotografías para recordar.',
      badge: 'Momentos Felices',
      gradient: 'from-indigo-500/10 to-purple-500/10',
      border: 'border-indigo-200',
      iconColor: 'text-indigo-600',
    },
  ];

  return (
    <section
      id="event-details"
      className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#f8fafc] via-sky-50/40 to-slate-50 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-900 text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Detalles del Evento</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Todo lo que necesitas saber
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-3 font-light">
            Queremos que disfrutes cada instante de este momento inolvidable para nuestra familia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border ${item.border} shadow-md hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.border} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xs uppercase tracking-widest font-semibold text-slate-500">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-serif font-bold text-slate-900 mt-1">
                      {item.highlight}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 font-light mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
