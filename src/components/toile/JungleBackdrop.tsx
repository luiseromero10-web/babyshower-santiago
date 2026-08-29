'use client';

import React, { useEffect, useState } from 'react';

interface DriftLeaf {
  key: number;
  left: number;
  width: number;
  duration: number;
  delay: number;
}

/**
 * Selva vectorial de fondo en tres profundidades + hojas que caen.
 * Se monta como primer hijo de #invite y cubre, con position:absolute,
 * toda la altura acumulada de sus hermanos (hero, countdown, detalles, cierre).
 */
export function JungleBackdrop() {
  const [leaves, setLeaves] = useState<DriftLeaf[] | null>(null);

  useEffect(() => {
    setLeaves(
      Array.from({ length: 9 }, (_, i) => ({
        key: i,
        left: 4 + Math.random() * 92,
        width: 14 + Math.random() * 20,
        duration: 17 + Math.random() * 16,
        delay: -(Math.random() * 26),
      }))
    );
  }, []);

  return (
    <div className="jungle" aria-hidden="true">
      <svg className="j-far" style={{ left: '-4%', top: '2%', width: '34vw', maxWidth: 420 }} viewBox="0 0 300 340">
        <g className="sway" style={{ animationDelay: '-2s' }}><use href="#s-monstera" x={10} y={60} width={200} height={230} /></g>
        <g className="sway" style={{ animationDelay: '-6s' }}><use href="#s-palm" x={150} y={20} width={120} height={300} /></g>
      </svg>
      <svg className="j-far" style={{ right: '-4%', top: '6%', width: '32vw', maxWidth: 400 }} viewBox="0 0 300 340">
        <g transform="translate(300,0) scale(-1,1)">
          <g className="sway" style={{ animationDelay: '-4s' }}><use href="#s-monstera" x={10} y={70} width={190} height={218} /></g>
          <g className="sway" style={{ animationDelay: '-8s' }}><use href="#s-fern" x={170} y={30} width={100} height={290} /></g>
        </g>
      </svg>

      <svg className="j-mid" style={{ right: '6%', top: '9%', width: '15vw', maxWidth: 170 }} viewBox="0 0 200 220">
        <g style={{ animation: 'frond 12s ease-in-out infinite', transformOrigin: '50% 50%' }}>
          <use href="#s-moon" width={200} height={220} />
        </g>
      </svg>

      <svg className="j-mid" style={{ left: '-6%', bottom: '-2%', width: '38vw', maxWidth: 460 }} viewBox="0 0 340 330">
        <g className="sway" style={{ animationDelay: '-1s' }}><use href="#s-palm" x={0} y={20} width={130} height={320} /></g>
        <g className="sway" style={{ animationDelay: '-5s' }}><use href="#s-monstera" x={110} y={105} width={190} height={220} /></g>
        <g className="sway" style={{ animationDelay: '-3s' }}><use href="#s-fern" x={240} y={70} width={95} height={265} /></g>
      </svg>
      <svg className="j-mid" style={{ right: '-6%', bottom: '-2%', width: '38vw', maxWidth: 460 }} viewBox="0 0 340 330">
        <g transform="translate(340,0) scale(-1,1)">
          <g className="sway" style={{ animationDelay: '-2.6s' }}><use href="#s-palm" x={0} y={30} width={126} height={310} /></g>
          <g className="sway" style={{ animationDelay: '-7s' }}><use href="#s-monstera" x={105} y={115} width={180} height={208} /></g>
          <g className="sway" style={{ animationDelay: '-4.4s' }}><use href="#s-fern" x={235} y={85} width={92} height={252} /></g>
        </g>
      </svg>

      {leaves?.map((leaf) => (
        <svg
          key={leaf.key}
          className="drift"
          viewBox="0 0 90 260"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.width}px`,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
          }}
        >
          <use href="#s-fern" width={90} height={260} />
        </svg>
      ))}
    </div>
  );
}
