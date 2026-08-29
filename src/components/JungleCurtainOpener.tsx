'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface JungleCurtainOpenerProps {
  onOpen?: () => void;
}

export function JungleCurtainOpener({ onOpen }: JungleCurtainOpenerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if user has already opened the invitation in this session
    const hasOpened = sessionStorage.getItem('invitation_opened');
    if (hasOpened === 'true') {
      setIsOpen(true);
    }
  }, []);

  const handleOpen = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#38BDF8', '#F59E0B', '#10B981', '#3B82F6', '#FEF3C7'],
      });
    } catch {
      // Ignore if confetti is blocked
    }

    setIsOpen(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('invitation_opened', 'true');
    }
    if (onOpen) onOpen();
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="jungle-curtain-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.4 } }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-slate-950/80 backdrop-blur-md"
        >
          {/* Left Jungle Curtain Leaf Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '-105%', transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } }}
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0a192f] via-[#0f2847] to-[#133e5c] border-r-2 border-amber-400/40 shadow-2xl flex items-center justify-end overflow-hidden"
          >
            {/* Foliage Artwork Backdrop */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none scale-125">
              <Image
                src="/images/jungle-foliage-frame.jpg"
                alt="Jungle Foliage"
                fill
                className="object-cover object-left"
                priority
              />
            </div>
            {/* Decorative Gold Leaf Silhouette */}
            <div className="relative z-10 pr-4 opacity-75">
              <svg width="80" height="200" viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90 20 Q30 70 80 120 Q20 170 70 230" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="80" cy="120" r="4" fill="#FDE68A" />
              </svg>
            </div>
          </motion.div>

          {/* Right Jungle Curtain Leaf Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '105%', transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } }}
            className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#0a192f] via-[#0f2847] to-[#133e5c] border-l-2 border-amber-400/40 shadow-2xl flex items-center justify-start overflow-hidden"
          >
            {/* Foliage Artwork Backdrop */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none scale-125">
              <Image
                src="/images/jungle-foliage-frame.jpg"
                alt="Jungle Foliage"
                fill
                className="object-cover object-right"
                priority
              />
            </div>
            {/* Decorative Gold Leaf Silhouette */}
            <div className="relative z-10 pl-4 opacity-75">
              <svg width="80" height="200" viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20 Q70 70 20 120 Q80 170 30 230" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="20" cy="120" r="4" fill="#FDE68A" />
              </svg>
            </div>
          </motion.div>

          {/* Center Golden Wax Seal & Call to Action */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.1 } }}
            exit={{ scale: 1.25, opacity: 0, transition: { duration: 0.5 } }}
            className="relative z-30 flex flex-col items-center justify-center p-6 text-center max-w-sm mx-auto"
          >
            {/* Golden Wax Seal Stamp */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-5 drop-shadow-[0_0_35px_rgba(245,158,11,0.5)]">
              <Image
                src="/images/golden-jungle-seal.jpg"
                alt="Sello Dorado Baby Santiago"
                fill
                className="object-contain rounded-full animate-float-slow"
                priority
              />
            </div>

            {/* Title & Invitation Header */}
            <div className="space-y-1.5 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-[11px] uppercase tracking-widest font-semibold backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-amber-400 animate-spin-slow" />
                <span>Invitación Especial</span>
                <Sparkles className="w-3 h-3 text-amber-400 animate-spin-slow" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white tracking-tight drop-shadow-md">
                Baby Santiago
              </h2>
              <p className="text-xs sm:text-sm text-sky-200/90 font-light font-sans">
                Angie &amp; Luis te invitan a celebrar
              </p>
            </div>

            {/* Glowing Golden "Abrir Invitación" Button */}
            <button
              onClick={handleOpen}
              className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:shadow-[0_0_35px_rgba(245,158,11,0.9)] transform hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2 cursor-pointer"
            >
              <span>Abrir Invitación</span>
              <Sparkles className="w-4 h-4 text-slate-900 group-hover:rotate-45 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
