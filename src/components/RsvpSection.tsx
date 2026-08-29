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
  Sparkles,
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
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#0EA5E9', '#10B981', '#F59E0B', '#38BDF8', '#FEF08A'],
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
    <section
      id="rsvp-section"
      className="relative py-20 md:py-28 px-4 bg-gradient-to-b from-slate-50 via-sky-50/60 to-white overflow-hidden"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Confirmación de Asistencia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            ¿Nos acompañas a celebrar?
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-2 font-light max-w-md mx-auto">
            Por favor busca tu nombre completo en la lista para registrar tu asistencia y la de tus acompañantes.
          </p>
        </motion.div>

        <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-sky-200/80 shadow-2xl p-6 sm:p-10 relative">
          {!selectedGuest ? (
            <div className="space-y-6">
              <label className="block text-xs uppercase tracking-widest font-semibold text-slate-700">
                Escribe tu Nombre o Familia
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
                    className="w-full px-5 py-4 pl-12 rounded-2xl bg-slate-50 border border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none text-slate-800 text-base placeholder:text-slate-400 transition-all"
                  />
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  {searching && (
                    <Loader2 className="w-5 h-5 text-sky-600 animate-spin absolute right-4 top-1/2 transform -translate-y-1/2" />
                  )}
                </div>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-xl max-h-64 overflow-y-auto divide-y divide-slate-100 scrollbar-thin"
                    >
                      {results.length > 0 ? (
                        results.map((guest) => (
                          <button
                            key={guest.id}
                            type="button"
                            onClick={() => handleSelectGuest(guest)}
                            className="w-full text-left px-5 py-3.5 hover:bg-sky-50 flex items-center justify-between text-slate-800 text-sm font-medium transition-colors"
                          >
                            <span>{guest.nombre_completo}</span>
                            <span className="text-xs text-sky-600 font-normal">
                              Seleccionar →
                            </span>
                          </button>
                        ))
                      ) : (
                        <div className="p-5 text-center">
                          <p className="text-sm text-slate-500">
                            No encontramos "{searchTerm}" en la lista.
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              setNewGuestName(searchTerm);
                              setShowAddGuest(true);
                              setDropdownOpen(false);
                            }}
                            className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-100 text-sky-800 text-xs font-semibold hover:bg-sky-200 transition-colors"
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
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-sky-700 underline font-medium transition-colors"
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
                    className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider font-semibold text-sky-900">
                        Registrar Nuevo Invitado
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowAddGuest(false)}
                        className="text-xs text-slate-400 hover:text-slate-600"
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sky-300 focus:ring-2 focus:ring-sky-400 outline-none text-slate-800 text-sm"
                    />
                    <button
                      type="submit"
                      disabled={addingGuest || !newGuestName.trim()}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-700 text-white font-medium text-xs uppercase tracking-wider hover:bg-sky-800 transition-colors disabled:opacity-60"
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
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-100 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                    {selectedGuest.nombre_completo.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block">
                      Invitado Seleccionado
                    </span>
                    <p className="text-base font-semibold text-slate-900">
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
                  className="text-xs text-sky-700 hover:text-sky-900 underline font-medium px-2 py-1"
                >
                  Cambiar
                </button>
              </div>

              {loadingGuestData ? (
                <div className="py-12 flex flex-col items-center justify-center text-slate-500 gap-3">
                  <Loader2 className="w-8 h-8 text-sky-600 animate-spin" />
                  <span className="text-sm font-light">Cargando tus datos...</span>
                </div>
              ) : submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-slate-900">
                      {attending
                        ? '¡Gracias por confirmar tu asistencia!'
                        : 'Gracias por avisarnos'}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto font-light">
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
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs uppercase tracking-wider transition-colors"
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
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-medium text-xs uppercase tracking-wider transition-colors"
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Confirmar por otro invitado</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <label className="block text-xs uppercase tracking-widest font-semibold text-slate-700">
                      ¿Nos acompañarás a celebrar?
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setAttending(true)}
                        className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                          attending === true
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-950 shadow-md font-semibold'
                            : 'border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-6 h-6 ${
                            attending === true
                              ? 'text-emerald-600'
                              : 'text-slate-400'
                          }`}
                        />
                        <span className="text-sm">¡Sí, asistiré!</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAttending(false)}
                        className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                          attending === false
                            ? 'border-rose-500 bg-rose-50 text-rose-950 shadow-md font-semibold'
                            : 'border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <XCircle
                          className={`w-6 h-6 ${
                            attending === false
                              ? 'text-rose-500'
                              : 'text-slate-400'
                          }`}
                        />
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
                          <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200">
                            <label className="block text-xs uppercase tracking-wider font-semibold text-sky-900 mb-1">
                              Adultos Adicionales
                            </label>
                            <p className="text-[11px] text-slate-500 mb-3">
                              Sin incluirte a ti ({selectedGuest.nombre_completo})
                            </p>
                            <div className="flex items-center justify-between">
                              <button
                                type="button"
                                onClick={() =>
                                  setAdults((prev) => Math.max(0, prev - 1))
                                }
                                className="w-10 h-10 rounded-xl bg-white border border-sky-300 text-sky-800 flex items-center justify-center hover:bg-sky-100 transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-2xl font-serif font-bold text-slate-900">
                                {adults}
                              </span>
                              <button
                                type="button"
                                onClick={() => setAdults((prev) => prev + 1)}
                                className="w-10 h-10 rounded-xl bg-white border border-sky-300 text-sky-800 flex items-center justify-center hover:bg-sky-100 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                            <label className="block text-xs uppercase tracking-wider font-semibold text-emerald-900 mb-1">
                              Niños / Niñas Adicionales
                            </label>
                            <p className="text-[11px] text-slate-500 mb-3">
                              Para cálculo logístico de comida y espacios
                            </p>
                            <div className="flex items-center justify-between">
                              <button
                                type="button"
                                onClick={() =>
                                  setChildrenCount((prev) =>
                                    Math.max(0, prev - 1)
                                  )
                                }
                                className="w-10 h-10 rounded-xl bg-white border border-emerald-300 text-emerald-800 flex items-center justify-center hover:bg-emerald-100 transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-2xl font-serif font-bold text-slate-900">
                                {childrenCount}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  setChildrenCount((prev) => prev + 1)
                                }
                                className="w-10 h-10 rounded-xl bg-white border border-emerald-300 text-emerald-800 flex items-center justify-center hover:bg-emerald-100 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-100 text-center text-xs text-slate-700 font-medium">
                          Total en tu grupo: <strong>{1 + adults} adulto(s)</strong>{' '}
                          {childrenCount > 0 && (
                            <>
                              {' '}
                              y <strong>{childrenCount} niño(s)</strong>
                            </>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-widest font-semibold text-slate-700 mb-2">
                            Restricciones Alimentarias / Alergias u Observaciones
                          </label>
                          <textarea
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="¿Tienes alguna alergia, dieta especial o mensaje para los papás?"
                            className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 outline-none text-slate-800 text-sm placeholder:text-slate-400 transition-all"
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
                          <label className="block text-xs uppercase tracking-widest font-semibold text-slate-700 mb-2">
                            Déjales un mensaje de cariño a Angie, Luis y Santiago
                          </label>
                          <textarea
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Tus palabras de bendición para este día tan especial..."
                            className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-300 focus:border-rose-400 focus:ring-4 focus:ring-rose-100 outline-none text-slate-800 text-sm placeholder:text-slate-400 transition-all"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={submitting || attending === null}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-700 to-emerald-700 hover:from-sky-700 hover:to-emerald-800 text-white font-semibold text-sm uppercase tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Guardando respuesta...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Confirmación</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
