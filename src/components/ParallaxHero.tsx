'use client';

import React from 'react';

export function ParallaxHero() {
  const scrollToNext = () => {
    const el = document.getElementById('countdown-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <article className="arch">
        <div className="badge"><i /><span>La dulce espera</span><i /></div>
        <div className="script-line">Baby Shower en honor a</div>
        <h1 className="name"><em>Santiago</em></h1>

        <div className="rule">
          <i />
          <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
            <g fill="none" stroke="#A2C0DC" strokeWidth="1.5">
              <circle cx="12" cy="12" r="2.4" />
              <ellipse cx="12" cy="5.4" rx="2.5" ry="4" />
              <ellipse cx="12" cy="18.6" rx="2.5" ry="4" />
              <ellipse cx="5.4" cy="12" rx="4" ry="2.5" />
              <ellipse cx="18.6" cy="12" rx="4" ry="2.5" />
            </g>
          </svg>
          <i />
        </div>

        <svg className="scene" viewBox="0 0 460 168" aria-hidden="true">
          <g className="sway" style={{ animationDelay: '-3s', transformOrigin: '32px 164px' }}>
            <use href="#s-palm" x={2} y={8} width={62} height={156} />
          </g>
          <use href="#s-giraffe" x={56} y={1} width={70} height={164} />
          <use href="#s-leopard" x={186} y={66} width={87} height={98} />
          <g className="sway" style={{ animationDelay: '-6s', transformOrigin: '352px 164px' }}>
            <use href="#s-monstera" x={298} y={40} width={105} height={125} />
          </g>
          <g className="sway" style={{ animationDelay: '-1.5s', transformOrigin: '420px 164px' }}>
            <use href="#s-fern" x={396} y={18} width={50} height={146} />
          </g>
          <path d="M10 165 H450" stroke="#BDD4E7" strokeWidth="1.2" strokeLinecap="round" />
        </svg>

        <div className="parents">Angie <span>&#10084;</span> Luis</div>
        <p className="blurb">
          Nos hace inmensamente felices invitarte a celebrar la llegada de nuestro pequeño príncipe.
        </p>

        <dl className="datastrip">
          <div>
            <dt>Cuándo</dt>
            <dd>Sáb 26 · Sep 2026<br />3:00 PM</dd>
          </div>
          <div>
            <dt>Dónde</dt>
            <dd>Salón Social 2<br />Conjunto Navarra</dd>
          </div>
        </dl>

        <button className="cta" onClick={scrollToRsvp} type="button">
          Confirmar asistencia
        </button>
      </article>

      <button className="scroll-cue" onClick={scrollToNext} type="button" aria-label="Ver más detalles">
        <span>Desliza</span>
        <i />
      </button>
    </section>
  );
}
