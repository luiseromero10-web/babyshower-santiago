'use client';

import React from 'react';
import { motion } from 'framer-motion';

const details = [
  {
    icon: 'ic-cal',
    title: 'Fecha y hora',
    lines: ['Sábado 26 de septiembre de 2026', 'a las 3:00 de la tarde'],
  },
  {
    icon: 'ic-pin',
    title: 'El lugar',
    lines: ['Salón Social 2, Conjunto Navarra', 'Carrera 8 # 170-52, Bogotá'],
  },
  {
    icon: 'ic-gift',
    title: 'Regalos',
    lines: ['El detalle que nazca de tu cariño y, si gustas, puedes incluir pañales.'],
  },
];

export function EventDetails() {
  return (
    <section id="event-details" className="section">
      <div className="sec-head">
        <div className="k">Los detalles</div>
        <h2>Todo lo que necesitas saber</h2>
      </div>

      <div className="cards">
        {details.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="card"
          >
            <svg width="46" height="46"><use href={`#${item.icon}`} width={46} height={46} /></svg>
            <h3>{item.title}</h3>
            <p>
              {item.lines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < item.lines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
