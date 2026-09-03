'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  searchInvitados,
  getConfirmacionByInvitadoId,
  upsertConfirmacion,
  addInvitado,
} from '@/lib/supabase';
import { Invitado, Confirmacion } from '@/types/database';
import {
  Search,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  Send,
  Loader2,
  UserCheck,
  UserPlus,
  RefreshCw,
} from 'lucide-react';

export function RsvpSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Invitado[]>([]);
  const [searching, setSearching] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedGuest, setSelectedGuest] = useState<Invitado | null>(null);
  const [loadingGuestData, setLoadingGuestData] = useState(false);

  const [attending, setAttending] = useState<boolean | null>(null);
  const [adults, setAdults] = useState<number>(0);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [notes, setNotes] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [existingConfirmation, setExistingConfirmation] = useState<Confirmacion | null>(null);

  const [showAddGuest, setShowAddGuest] = useState(false);
  const [newGuestName, setNewGuestName] = useState('');
  const [addingGuest, setAddingGuest] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchTerm.trim().length > 0) {
        setSearching(true);
        try {
          const res = await searchInvitados(searchTerm);
          setResults(res);
          setDropdownOpen(true);
        } catch (err) {
          console.error(err);
        } finally {
          setSearching(false);
        }
      } else {
        setResults([]);
        setDropdownOpen(false);
      }
    }, 280);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSelectGuest = async (guest: Invitado) => {
    setSelectedGuest(guest);
    setSearchTerm('');
    setDropdownOpen(false);
    setLoadingGuestData(true);
    setSubmitted(false);

    try {
      const conf = await getConfirmacionByInvitadoId(guest.id);
      if (conf) {
        setExistingConfirmation(conf);
        setAttending(conf.asiste);
        setAdults(conf.adultos_adicionales || 0);
        setChildrenCount(conf.ninos_adicionales || 0);
        setNotes(conf.observaciones || '');
      } else {
        setExistingConfirmation(null);
        setAttending(true);
        setAdults(0);
        setChildrenCount(0);
        setNotes('');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingGuestData(false);
    }
  };

  const handleAddNewGuest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGuestName.trim()) return;

    setAddingGuest(true);
    try {
      const created = await addInvitado(newGuestName.trim());
      setShowAddGuest(false);
      setNewGuestName('');
      handleSelectGuest(created);
    } catch (err) {
      console.error('Error registrando invitado:', err);
      alert('Hubo un error al agregar el invitado.');
    } finally {
      setAddingGuest(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGuest || attending === null) return;

    setSubmitting(true);
    try {
      const conf = await upsertConfirmacion({
        invitado_id: selectedGuest.id,
        asiste: attending,
        adultos_adicionales: attending ? adults : 0,
        ninos_adicionales: attending ? childrenCount : 0,
        observaciones: notes,
      });

      setExistingConfirmation(conf);
      setSubmitted(true);

      if (attending) {
        confetti({
          particleCount: 110,
          spread: 90,
          origin: { y: 0.6 },
          scalar: 0.9,
          colors: ['#FFFFFF', '#DCE9F5', '#BDD4E7', '#A2C0DC', '#6F9AC6', '#D6C1A0'],
        });
      }
    } catch (err) {
      console.error('Error guardando confirmación:', err);
      alert('Ocurrió un error al guardar tu respuesta.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="rsvp-section" className="section">
      <div className="sec-head">
        <div className="k">Confirmación de asistencia</div>
        <h2>¿Nos acompañas a celebrar?</h2>
        <p className="mt-3 text-xs text-toile-navySoft font-light tracking-wide max-w-md mx-auto">
          Busca tu nombre completo en la lista para registrar tu asistencia y la de tus acompañantes.
        </p>
      </div>

      <div className="max-w-2xl mx-auto rounded-[2rem] bg-white border border-toile-powder shadow-[var(--shadow-lift)] p-6 sm:p-10 relative">
        {!selectedGuest ? (
          <div className="space-y-6">
            <label className="block text-[10px] uppercase tracking-[.3em] font-medium text-toile-navySoft pl-[.3em]">
              Escribe tu nombre o familia
            </label>

            <div ref={searchContainerRef} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => {
                    if (searchTerm.trim().length > 0) setDropdownOpen(true);
                  }}
                  placeholder="Ej. Juan Pérez, Familia Gómez..."
                  className="w-full px-5 py-4 pl-12 rounded-2xl bg-toile-porcelain2 border border-toile-powder focus:border-toile-ink focus:ring-4 focus:ring-toile-mist outline-none text-toile-navy text-base placeholder:text-toile-sky/70 transition-all"
                />
                <Search className="w-5 h-5 text-toile-sky absolute left-4 top-1/2 -translate-y-1/2" />
                {searching && (
                  <Loader2 className="w-5 h-5 text-toile-ink animate-spin absolute right-4 top-1/2 -translate-y-1/2" />
                )}
              </div>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl border border-toile-powder shadow-[var(--shadow-lift)] max-h-64 overflow-y-auto divide-y divide-toile-mist"
                  >
                    {results.length > 0 ? (
                      results.map((guest) => (
                        <button
                          key={guest.id}
                          type="button"
                          onClick={() => handleSelectGuest(guest)}
                          className="w-full text-left px-5 py-3.5 hover:bg-toile-porcelain2 flex items-center justify-between text-toile-navy text-sm font-medium transition-colors"
                        >
                          <span>{guest.nombre_completo}</span>
                          <span className="text-xs text-toile-ink font-normal">Seleccionar →</span>
                        </button>
                      ))
                    ) : (
                      <div className="p-5 text-center">
                        <p className="text-sm text-toile-navySoft">
                          No encontramos &quot;{searchTerm}&quot; en la lista.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setNewGuestName(searchTerm);
                            setShowAddGuest(true);
                            setDropdownOpen(false);
                          }}
                          className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-toile-porcelain2 text-toile-ink text-xs font-medium hover:bg-toile-mist transition-colors"
                        >
                          <UserPlus className="w-3.5 h-3.5" />
                          <span>Registrarme como nuevo invitado</span>
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!showAddGuest && (
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setShowAddGuest(true)}
                  className="inline-flex items-center gap-1 text-xs text-toile-navySoft hover:text-toile-ink underline font-medium transition-colors"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>¿No estás en la lista? Haz clic aquí para registrarte</span>
                </button>
              </div>
            )}

            <AnimatePresence>
              {showAddGuest && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={handleAddNewGuest}
                  className="p-5 rounded-2xl bg-toile-porcelain2 border border-toile-powder space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[.2em] font-semibold text-toile-navy">
                      Registrar nuevo invitado
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowAddGuest(false)}
                      className="text-xs text-toile-sky hover:text-toile-navySoft"
                    >
                      Cancelar
                    </button>
                  </div>
                  <input
                    type="text"
                    required
                    value={newGuestName}
                    onChange={(e) => setNewGuestName(e.target.value)}
                    placeholder="Ingresa tu nombre y apellido completo"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-toile-powder focus:ring-2 focus:ring-toile-mist outline-none text-toile-navy text-sm"
                  />
                  <button
                    type="submit"
                    disabled={addingGuest || !newGuestName.trim()}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-toile-ink text-white font-medium text-xs uppercase tracking-[.2em] hover:bg-toile-inkDeep transition-colors disabled:opacity-60"
                  >
                    {addingGuest ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Guardando...</span>
                      </>
                    ) : (
                      <span>Continuar con mi confirmación</span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-toile-porcelain2 border border-toile-mist">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-toile-ink text-white flex items-center justify-center font-display text-base">
                  {selectedGuest.nombre_completo.charAt(0).toUpperCase()}
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[.25em] text-toile-sky font-semibold block">
                    Invitado seleccionado
                  </span>
                  <p className="text-base font-medium text-toile-navy">
                    {selectedGuest.nombre_completo}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedGuest(null);
                  setSubmitted(false);
                }}
                className="text-xs text-toile-ink hover:text-toile-inkDeep underline font-medium px-2 py-1"
              >
                Cambiar
              </button>
            </div>

            {loadingGuestData ? (
              <div className="py-12 flex flex-col items-center justify-center text-toile-navySoft gap-3">
                <Loader2 className="w-8 h-8 text-toile-ink animate-spin" />
                <span className="text-sm font-light">Cargando tus datos...</span>
              </div>
            ) : submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-toile-mist text-toile-ink mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-medium text-toile-navy">
                    {attending
                      ? '¡Gracias por confirmar tu asistencia!'
                      : 'Gracias por avisarnos'}
                  </h3>
                  <p className="text-sm text-toile-navySoft max-w-md mx-auto font-light leading-relaxed">
                    {attending
                      ? `Hemos registrado tu asistencia (${1 + adults} adultos ${
                          childrenCount > 0 ? `y ${childrenCount} niños` : ''
                        }). ¡Nos vemos el 26 de septiembre!`
                      : 'Lamentamos que no puedas acompañarnos físicamente, pero sabemos que tu corazón estará con Santiago, Angie y Luis.'}
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-toile-porcelain2 hover:bg-toile-mist text-toile-navySoft font-medium text-[11px] uppercase tracking-[.2em] transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Modificar mi respuesta</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedGuest(null);
                      setSubmitted(false);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-toile-ink hover:bg-toile-inkDeep text-white font-medium text-[11px] uppercase tracking-[.2em] transition-colors"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Confirmar por otro invitado</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-[10px] uppercase tracking-[.3em] font-medium text-toile-navySoft pl-[.3em]">
                    ¿Nos acompañarás a celebrar?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setAttending(true)}
                      className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${
                        attending === true
                          ? 'border-toile-ink bg-toile-mist text-toile-navy font-medium'
                          : 'border-toile-powder bg-toile-porcelain2 hover:bg-toile-mist/60 text-toile-navySoft'
                      }`}
                    >
                      <CheckCircle2 className={`w-6 h-6 ${attending === true ? 'text-toile-ink' : 'text-toile-sky'}`} />
                      <span className="text-sm">¡Sí, asistiré!</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAttending(false)}
                      className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${
                        attending === false
                          ? 'border-toile-raffiaDeep bg-[#F7F1E8] text-toile-navy font-medium'
                          : 'border-toile-powder bg-toile-porcelain2 hover:bg-toile-mist/60 text-toile-navySoft'
                      }`}
                    >
                      <XCircle className={`w-6 h-6 ${attending === false ? 'text-toile-raffiaDeep' : 'text-toile-sky'}`} />
                      <span className="text-sm">No podré ir</span>
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {attending === true && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-6 pt-2"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl bg-toile-porcelain2 border border-toile-powder">
                          <label className="block text-[10px] uppercase tracking-[.2em] font-medium text-toile-navy mb-1">
                            Adultos adicionales
                          </label>
                          <p className="text-[11px] text-toile-navySoft mb-3">
                            Sin incluirte a ti ({selectedGuest.nombre_completo})
                          </p>
                          <div className="flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() => setAdults((prev) => Math.max(0, prev - 1))}
                              className="w-10 h-10 rounded-xl bg-white border border-toile-powder text-toile-ink flex items-center justify-center hover:bg-toile-mist transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-display text-2xl font-medium text-toile-navy">{adults}</span>
                            <button
                              type="button"
                              onClick={() => setAdults((prev) => prev + 1)}
                              className="w-10 h-10 rounded-xl bg-white border border-toile-powder text-toile-ink flex items-center justify-center hover:bg-toile-mist transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-toile-porcelain2 border border-toile-powder">
                          <label className="block text-[10px] uppercase tracking-[.2em] font-medium text-toile-navy mb-1">
                            Niños / niñas adicionales
                          </label>
                          <p className="text-[11px] text-toile-navySoft mb-3">
                            Para cálculo logístico de comida y espacios
                          </p>
                          <div className="flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() => setChildrenCount((prev) => Math.max(0, prev - 1))}
                              className="w-10 h-10 rounded-xl bg-white border border-toile-powder text-toile-ink flex items-center justify-center hover:bg-toile-mist transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-display text-2xl font-medium text-toile-navy">{childrenCount}</span>
                            <button
                              type="button"
                              onClick={() => setChildrenCount((prev) => prev + 1)}
                              className="w-10 h-10 rounded-xl bg-white border border-toile-powder text-toile-ink flex items-center justify-center hover:bg-toile-mist transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-toile-porcelain2 text-center text-xs text-toile-navySoft font-medium">
                        Total en tu grupo: <strong className="text-toile-navy">{1 + adults} adulto(s)</strong>
                        {childrenCount > 0 && (
                          <>
                            {' '}y <strong className="text-toile-navy">{childrenCount} niño(s)</strong>
                          </>
                        )}
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[.3em] font-medium text-toile-navySoft mb-2 pl-[.3em]">
                          Observaciones
                        </label>
                        <textarea
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="¿Algún mensaje para los papás?"
                          className="w-full p-4 rounded-2xl bg-toile-porcelain2 border border-toile-powder focus:border-toile-ink focus:ring-4 focus:ring-toile-mist outline-none text-toile-navy text-sm placeholder:text-toile-sky/70 transition-all"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {attending === false && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 pt-2"
                    >
                      <div>
                        <label className="block text-[10px] uppercase tracking-[.3em] font-medium text-toile-navySoft mb-2 pl-[.3em]">
                          Déjales un mensaje de cariño a Angie, Luis y Santiago
                        </label>
                        <textarea
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Tus palabras de bendición para este día tan especial..."
                          className="w-full p-4 rounded-2xl bg-toile-porcelain2 border border-toile-powder focus:border-toile-raffiaDeep focus:ring-4 focus:ring-[#F7F1E8] outline-none text-toile-navy text-sm placeholder:text-toile-sky/70 transition-all"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={submitting || attending === null}
                  className="w-full py-4 rounded-full bg-gradient-to-b from-toile-ink to-toile-inkDeep hover:brightness-105 text-white font-medium text-[11px] uppercase tracking-[.3em] shadow-[var(--shadow-soft)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Guardando respuesta...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar confirmación</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
