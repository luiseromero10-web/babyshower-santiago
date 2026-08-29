'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function CountdownTimer() {
  const targetDate = new Date('2026-09-26T15:00:00-05:00').getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateCountdown = () => {
      const difference = targetDate - Date.now();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
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
    <section id="cuenta" className="section">
      <div className="sec-head">
        <div className="k">Falta poco</div>
        <h2>La cuenta regresiva</h2>
      </div>

      <div className="count">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="tile"
          >
            <b>{mounted ? String(unit.value).padStart(2, '0') : '--'}</b>
            <span>{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
