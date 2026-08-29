'use client';

import React, { useState, useEffect } from 'react';
import {
  getInvitadosConConfirmacion,
  addInvitado,
  deleteInvitado,
  getEstadisticas,
  upsertConfirmacion,
} from '@/lib/supabase';
import { InvitadoConConfirmacion, EstadisticasLogistica } from '@/types/database';
import {
  Users,
  UserCheck,
  UserX,
  Clock,
  Download,
  Plus,
  Trash2,
  Edit2,
  Search,
  RefreshCw,
  Loader2,
  Baby,
  ShieldCheck,
  X,
} from 'lucide-react';

export function AdminDashboard() {
  const [guests, setGuests] = useState<InvitadoConConfirmacion[]>([]);
  const [stats, setStats] = useState<EstadisticasLogistica | null>(null);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<'todos' | 'asisten' | 'no_asisten' | 'pendientes'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const [newName, setNewName] = useState('');
  const [adding, setAdding] = useState(false);

  const [editingGuest, setEditingGuest] = useState<InvitadoConConfirmacion | null>(null);
  const [editAsiste, setEditAsiste] = useState<boolean>(true);
  const [editAdults, setEditAdults] = useState<number>(0);
  const [editNinos, setEditNinos] = useState<number>(0);
  const [editObs, setEditObs] = useState<string>('');
  const [savingEdit, setSavingEdit] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [data, statsData] = await Promise.all([
        getInvitadosConConfirmacion(),
        getEstadisticas(),
      ]);
      setGuests(data);
      setStats(statsData);
    } catch (err) {
      console.error('Error cargando datos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddGuest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    setAdding(true);
    try {
      await addInvitado(newName.trim());
      setNewName('');
      await fetchData();
    } catch (err) {
      console.error('Error agregando invitado:', err);
      alert('Hubo un error al agregar.');
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (invitadoId: string, nombre: string) => {
    if (confirm(`¿Estás seguro de eliminar a "${nombre}"? Esto también borrará su confirmación.`)) {
      try {
        await deleteInvitado(invitadoId);
        await fetchData();
      } catch (err) {
        console.error(err);
        alert('Error al eliminar invitado.');
      }
    }
  };

  const openEdit = (item: InvitadoConConfirmacion) => {
    setEditingGuest(item);
    setEditAsiste(item.confirmacion ? item.confirmacion.asiste : true);
    setEditAdults(item.confirmacion ? item.confirmacion.adultos_adicionales : 0);
    setEditNinos(item.confirmacion ? item.confirmacion.ninos_adicionales : 0);
    setEditObs(item.confirmacion ? item.confirmacion.observaciones || '' : '');
  };

  const saveEdit = async () => {
    if (!editingGuest) return;
    setSavingEdit(true);
    try {
      await upsertConfirmacion({
        invitado_id: editingGuest.id,
        asiste: editAsiste,
        adultos_adicionales: editAsiste ? editAdults : 0,
        ninos_adicionales: editAsiste ? editNinos : 0,
        observaciones: editObs,
      });
      setEditingGuest(null);
      await fetchData();
    } catch (err) {
      console.error(err);
      alert('Error al guardar cambios.');
    } finally {
      setSavingEdit(false);
    }
  };

  const exportCsv = () => {
    if (!guests.length) return;
    const headers = [
      'Nombre Completo',
      'Estado',
      'Adultos Adicionales',
      'Niños Adicionales',
      'Total Asistentes',
      'Observaciones / Alergias',
      'Fecha Confirmación',
    ];
    const rows = guests.map((mod) => {
      let estado = 'Pendiente';
      let adultos = 0;
      let ninos = 0;
      let total = 0;
      let obs = '';
      let fecha = 'N/A';

      if (mod.confirmacion) {
        estado = mod.confirmacion.asiste ? 'Asiste' : 'No Asiste';
        if (mod.confirmacion.asiste) {
          adultos = mod.confirmacion.adultos_adicionales || 0;
          ninos = mod.confirmacion.ninos_adicionales || 0;
          total = 1 + adultos + ninos;
        }
        obs = mod.confirmacion.observaciones || '';
        fecha = new Date(mod.confirmacion.fecha_confirmacion).toLocaleString();
      }

      return [
        `"${mod.nombre_completo}"`,
        `"${estado}"`,
        adultos,
        ninos,
        total,
        `"${obs.replace(/"/g, '""')}"`,
        `"${fecha}"`,
      ].join(',');
    });

    const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute(
      'download',
      `BabyShower_Santiago_Invitados_${new Date().toISOString().split('T')[0]}.csv`
    );
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const filteredGuests = guests.filter((g) => {
    const matchesSearch = g.nombre_completo.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (filterStatus === 'asisten') return g.confirmacion?.asiste === true;
    if (filterStatus === 'no_asisten') return g.confirmacion?.asiste === false;
    if (filterStatus === 'pendientes') return !g.confirmacion;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-semibold uppercase tracking-widest mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Panel de Control y Logística</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Baby Shower Santiago • Angie y Luis
            </h1>
            <p className="text-sm text-slate-500">
              Gestión de invitados, confirmaciones y resumen logístico en tiempo real.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-medium shadow-sm transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Actualizar</span>
            </button>
            <button
              onClick={exportCsv}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-md transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Exportar Excel / CSV</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-[11px] uppercase tracking-wider">Invitados</span>
              <Users className="w-4.5 h-4.5 text-sky-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              {stats ? stats.total_invitados : '-'}
            </p>
            <span className="text-[11px] text-slate-400">Registrados en lista</span>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 shadow-sm">
            <div className="flex items-center justify-between text-emerald-700">
              <span className="text-[11px] uppercase tracking-wider font-semibold">Asisten</span>
              <UserCheck className="w-4.5 h-4.5 text-emerald-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-emerald-950 mt-2">
              {stats ? stats.confirmados_si : '-'}
            </p>
            <span className="text-[11px] text-emerald-600/85">Titulares confirmados</span>
          </div>

          <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200 shadow-sm">
            <div className="flex items-center justify-between text-rose-700">
              <span className="text-[11px] uppercase tracking-wider font-semibold">No Asisten</span>
              <UserX className="w-4.5 h-4.5 text-rose-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-rose-950 mt-2">
              {stats ? stats.confirmados_no : '-'}
            </p>
            <span className="text-[11px] text-rose-600/85">No pueden ir</span>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 shadow-sm">
            <div className="flex items-center justify-between text-amber-800">
              <span className="text-[11px] uppercase tracking-wider font-semibold">Pendientes</span>
              <Clock className="w-4.5 h-4.5 text-amber-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-amber-950 mt-2">
              {stats ? stats.pendientes : '-'}
            </p>
            <span className="text-[11px] text-amber-700/85">Sin respuesta</span>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-900 via-slate-900 to-slate-950 text-white shadow-md">
            <div className="flex items-center justify-between text-sky-200">
              <span className="text-[11px] uppercase tracking-wider font-semibold">Total Comensales</span>
              <Users className="w-4.5 h-4.5 text-amber-300" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-2">
              {stats ? stats.total_asistentes_reales : '-'}
            </p>
            <span className="text-[11px] text-sky-200/85">Titul. + Adult. + Niños</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-sm">
            <div className="flex items-center justify-between text-sky-700">
              <span className="text-[11px] uppercase tracking-wider font-semibold">Niños Total</span>
              <Baby className="w-4.5 h-4.5 text-sky-600" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              {stats ? stats.total_ninos : '-'}
            </p>
            <span className="text-[11px] text-slate-500">Confirmados logística</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h2 className="text-sm uppercase tracking-widest font-semibold text-slate-800 mb-4">
            Módulo A • Agregar nuevo invitado a la lista
          </h2>
          <form onSubmit={handleAddGuest} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              required
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Nombre y Apellido del invitado o familia"
              className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-sm text-slate-800"
            />
            <button
              type="submit"
              disabled={adding || !newName.trim()}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs uppercase tracking-wider font-semibold transition-colors disabled:opacity-50"
            >
              {adding ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
              <span>Agregar Invitado</span>
            </button>
          </form>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-sm uppercase tracking-widest font-semibold text-slate-800">
                Módulo C • Lista y Control de Asistencia
              </h2>
              <p className="text-xs text-slate-500">
                Mostrando {filteredGuests.length} de {guests.length} invitados
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filtrar por nombre..."
                  className="pl-9 pr-4 py-1.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-sky-200"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>

              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                {([
                  { key: 'todos', label: 'Todos' },
                  { key: 'asisten', label: 'Asisten' },
                  { key: 'no_asisten', label: 'No Asisten' },
                  { key: 'pendientes', label: 'Pendientes' },
                ] as const).map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setFilterStatus(tab.key)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                      filterStatus === tab.key
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/80 text-slate-700 uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 font-semibold">Invitado / Familia</th>
                  <th className="px-4 py-3 font-semibold">Estado</th>
                  <th className="px-4 py-3 font-semibold text-center">Adultos</th>
                  <th className="px-4 py-3 font-semibold text-center">Niños</th>
                  <th className="px-4 py-3 font-semibold text-center">Total</th>
                  <th className="px-4 py-3 font-semibold">Observaciones / Alergias</th>
                  <th className="px-4 py-3 font-semibold text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredGuests.length > 0 ? (
                  filteredGuests.map((g) => {
                    const conf = g.confirmacion;
                    let statusBadge = (
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        Pendiente
                      </span>
                    );

                    if (conf) {
                      if (conf.asiste) {
                        statusBadge = (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                            ✓ Asiste
                          </span>
                        );
                      } else {
                        statusBadge = (
                          <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-semibold">
                            ✗ No Asiste
                          </span>
                        );
                      }
                    }

                    const adultsTotal =
                      conf && conf.asiste ? 1 + (conf.adultos_adicionales || 0) : 0;
                    const ninosTotal =
                      conf && conf.asiste ? conf.ninos_adicionales || 0 : 0;
                    const grandTotal = adultsTotal + ninosTotal;

                    return (
                      <tr key={g.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-3.5 font-medium text-slate-900">
                          {g.nombre_completo}
                        </td>
                        <td className="px-4 py-3.5">{statusBadge}</td>
                        <td className="px-4 py-3.5 text-center text-slate-600">
                          {adultsTotal > 0 ? adultsTotal : '-'}
                        </td>
                        <td className="px-4 py-3.5 text-center text-slate-600">
                          {ninosTotal > 0 ? ninosTotal : '-'}
                        </td>
                        <td className="px-4 py-3.5 text-center font-bold text-slate-900">
                          {grandTotal > 0 ? grandTotal : '-'}
                        </td>
                        <td className="px-4 py-3.5 text-slate-600 max-w-xs truncate">
                          {conf?.observaciones || '-'}
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => openEdit(g)}
                              className="p-1.5 rounded-lg hover:bg-sky-100 text-sky-700 transition-colors"
                              title="Editar Confirmación"
                            >
                              <Edit2 className="w-4.5 h-4.5" />
                            </button>
                            <button
                              onClick={() => handleDelete(g.id, g.nombre_completo)}
                              className="p-1.5 rounded-lg hover:bg-rose-100 text-rose-600 transition-colors"
                              title="Eliminar"
                            >
                              <Trash2 className="w-4.5 h-4.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className="py-10 text-center text-slate-400">
                      No se encontraron invitados con estos filtros.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {editingGuest && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    Editar Confirmación
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {editingGuest.nombre_completo}
                  </h3>
                </div>
                <button
                  onClick={() => setEditingGuest(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setEditAsiste(true)}
                    className={`px-4 py-2 rounded-xl border text-xs font-semibold ${
                      editAsiste
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-slate-50 text-slate-700'
                    }`}
                  >
                    ✓ Sí Asiste
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditAsiste(false)}
                    className={`px-4 py-2 rounded-xl border text-xs font-semibold ${
                      !editAsiste
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-slate-50 text-slate-700'
                    }`}
                  >
                    ✗ No Asiste
                  </button>
                </div>

                {editAsiste && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-600 block mb-1">
                        Adultos Adic.
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={editAdults}
                        onChange={(e) => setEditAdults(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-600 block mb-1">
                        Niños Adic.
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={editNinos}
                        onChange={(e) => setEditNinos(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-xs text-slate-600 block mb-1">
                    Observaciones / Alergias
                  </label>
                  <textarea
                    rows={2}
                    value={editObs}
                    onChange={(e) => setEditObs(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setEditingGuest(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={saveEdit}
                  disabled={savingEdit}
                  className="px-5 py-2 rounded-xl bg-sky-700 text-white text-xs font-semibold"
                >
                  {savingEdit ? 'Guardando...' : 'Guardar Cambios'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
