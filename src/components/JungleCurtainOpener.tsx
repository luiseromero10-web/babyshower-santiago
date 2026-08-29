'use client';

import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { BalloonGarland } from '@/components/toile/BalloonGarland';

interface JungleCurtainOpenerProps {
  onOpen?: () => void;
}

function porcelainConfetti() {
  try {
    confetti({
      particleCount: 110,
      spread: 90,
      origin: { y: 0.5 },
      scalar: 0.9,
      colors: ['#FFFFFF', '#DCE9F5', '#BDD4E7', '#A2C0DC', '#6F9AC6', '#D6C1A0'],
    });
  } catch {
    // Ignore if confetti is blocked
  }
}

export function JungleCurtainOpener({ onOpen }: JungleCurtainOpenerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasOpened = sessionStorage.getItem('invitation_opened') === 'true';
    if (hasOpened) {
      setOpen(true);
      onOpen?.();
    } else {
      document.body.classList.add('locked');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = () => {
    setOpen(true);
    document.body.classList.remove('locked');
    sessionStorage.setItem('invitation_opened', 'true');
    setTimeout(porcelainConfetti, 480);
    onOpen?.();
  };

  if (!isMounted) return null;

  return (
    <div id="gate" className={open ? 'open' : ''}>
      <div className="leaf l" />
      <div className="leaf r" />

      <div className="gate-arch" />

      <BalloonGarland />

      {/* Follaje inferior */}
      <svg className="gate-flora a" viewBox="0 0 460 340" aria-hidden="true">
        <g className="sway" style={{ animationDelay: '-1.2s' }}><use href="#s-palm" x={8} y={35} width={122} height={305} /></g>
        <g className="sway" style={{ animationDelay: '-3.4s' }}><use href="#s-monstera" x={108} y={112} width={196} height={233} /></g>
        <g className="sway" style={{ animationDelay: '-5.1s' }}><use href="#s-fern" x={268} y={78} width={92} height={266} /></g>
      </svg>
      <svg className="gate-flora b" viewBox="0 0 460 340" aria-hidden="true">
        <g transform="translate(460,0) scale(-1,1)">
          <g className="sway" style={{ animationDelay: '-2.3s' }}><use href="#s-palm" x={12} y={50} width={116} height={290} /></g>
          <g className="sway" style={{ animationDelay: '-4.7s' }}><use href="#s-monstera" x={104} y={128} width={180} height={214} /></g>
          <g className="sway" style={{ animationDelay: '-6.2s' }}><use href="#s-fern" x={262} y={92} width={88} height={254} /></g>
        </g>
      </svg>

      <svg className="gate-animal giraffe" viewBox="0 0 170 400" aria-hidden="true"><use href="#s-giraffe" width={170} height={400} /></svg>
      <svg className="gate-animal leopard" viewBox="0 0 230 260" aria-hidden="true"><use href="#s-leopard" width={230} height={260} /></svg>

      <div className="gate-core">
        <div className="crest">
          <svg viewBox="0 0 340 322" style={{ overflow: 'visible' }} aria-hidden="true">
            <path
              d="M24 296
                 C24 250 24 172 24 146
                 C24 74 89 24 170 24
                 C251 24 316 74 316 146
                 C316 172 316 250 316 296
                 C282 308 254 296 224 301
                 C200 305 186 296 170 296
                 C154 296 140 305 116 301
                 C86 296 58 308 24 296 Z"
              fill="#FFFFFF" stroke="#3A6BA5" strokeWidth="2.2" strokeLinejoin="round"
            />
            <path
              d="M38 286
                 C38 248 38 172 38 147
                 C38 84 97 38 170 38
                 C243 38 302 84 302 147
                 C302 172 302 248 302 286
                 C272 296 248 286 222 290
                 C200 294 184 286 170 286
                 C156 286 140 294 118 290
                 C92 286 68 296 38 286 Z"
              fill="none" stroke="#BDD4E7" strokeWidth="1.3"
            />
            <g className="bow"><use href="#s-bow" x={84} y={-30} width={172} height={103} /></g>
          </svg>
          <div className="crest-text">
            <div className="crest-kicker">Baby Shower</div>
            <div className="crest-name">Santiago</div>
            <div className="crest-sub">Angie &amp; Luis</div>
            <svg className="crest-sprig" viewBox="0 0 120 26" aria-hidden="true">
              <g fill="none" stroke="#A2C0DC" strokeWidth="1.2" strokeLinecap="round">
                <path d="M12 13 H46 M74 13 H108" />
                <path d="M60 6 C55 10 55 16 60 20 C65 16 65 10 60 6 Z" />
                <path d="M52 13 C55 10 57 9 58 9 M68 13 C65 10 63 9 62 9" />
              </g>
            </svg>
            <div className="crest-date">26 · Sep · 2026</div>
          </div>
        </div>

        <button className="open-btn" onClick={handleOpen} type="button">
          Abrir la invitación
        </button>
        <div className="gate-hint">Toca para entrar a la selva</div>
      </div>
    </div>
  );
}
