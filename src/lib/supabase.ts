import { createClient } from '@supabase/supabase-js';
import {
  Invitado,
  Confirmacion,
  InvitadoConConfirmacion,
  EstadisticasLogistica,
} from '@/types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'babyshower_santiago',
  },
});

export async function searchInvitados(query: string): Promise<Invitado[]> {
  try {
    let req = supabase
      .from('invitados')
      .select('*')
      .order('nombre_completo', { ascending: true });

    if (query && query.trim().length > 0) {
      req = req.ilike('nombre_completo', `%${query.trim()}%`).limit(15);
    } else {
      req = req.limit(20);
    }

    const { data, error } = await req;
    if (error) {
      console.error('Error buscando invitados:', error);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error('Error inesperado buscando invitados:', err);
    return [];
  }
}

export async function getConfirmacionByInvitadoId(
  invitadoId: string
): Promise<Confirmacion | null> {
  try {
    const { data, error } = await supabase
      .from('confirmaciones')
      .select('*')
      .eq('invitado_id', invitadoId)
      .maybeSingle();

    if (error) {
      console.error('Error obteniendo confirmación:', error);
      return null;
    }
    return data;
  } catch (err) {
    console.error('Error inesperado obteniendo confirmación:', err);
    return null;
  }
}

export async function upsertConfirmacion(
  conf: Partial<Confirmacion> & { invitado_id: string }
): Promise<Confirmacion> {
  const { data, error } = await supabase
    .from('confirmaciones')
    .upsert(
      {
        invitado_id: conf.invitado_id,
        asiste: conf.asiste ?? true,
        adultos_adicionales: conf.adultos_adicionales ?? 0,
        ninos_adicionales: conf.ninos_adicionales ?? 0,
        observaciones: conf.observaciones ?? '',
        fecha_confirmacion: new Date().toISOString(),
      },
      { onConflict: 'invitado_id' }
    )
    .select()
    .single();

  if (error) {
    console.error('Error al guardar confirmación:', error);
    throw error;
  }
  return data;
}

export async function addInvitado(nombreCompleto: string): Promise<Invitado> {
  const { data, error } = await supabase
    .from('invitados')
    .insert({
      nombre_completo: nombreCompleto.trim(),
    })
    .select()
    .single();

  if (error) {
    console.error('Error agregando invitado:', error);
    throw error;
  }
  return data;
}

export async function deleteInvitado(invitadoId: string): Promise<void> {
  const { error } = await supabase
    .from('invitados')
    .delete()
    .eq('id', invitadoId);

  if (error) {
    console.error('Error eliminando invitado:', error);
    throw error;
  }
}

export async function getInvitadosConConfirmacion(): Promise<
  InvitadoConConfirmacion[]
> {
  try {
    const { data: invitados, error: errorInv } = await supabase
      .from('invitados')
      .select('*')
      .order('nombre_completo', { ascending: true });

    if (errorInv) throw errorInv;

    const { data: confirmaciones, error: errorConf } = await supabase
      .from('confirmaciones')
      .select('*');

    if (errorConf) throw errorConf;

    const confMap = new Map<string, Confirmacion>();
    (confirmaciones || []).forEach((c) => {
      confMap.set(c.invitado_id, c);
    });

    return (invitados || []).map((inv) => ({
      ...inv,
      confirmacion: confMap.get(inv.id) || null,
    }));
  } catch (err) {
    console.error('Error obteniendo invitados con confirmación:', err);
    return [];
  }
}

export async function getEstadisticas(): Promise<EstadisticasLogistica> {
  try {
    const list = await getInvitadosConConfirmacion();
    let total_invitados = list.length;
    let confirmados_si = 0;
    let confirmados_no = 0;
    let pendientes = 0;
    let total_adultos = 0;
    let total_ninos = 0;

    list.forEach((item) => {
      if (!item.confirmacion) {
        pendientes++;
      } else if (item.confirmacion.asiste) {
        confirmados_si++;
        total_adultos += 1 + (item.confirmacion.adultos_adicionales || 0);
        total_ninos += item.confirmacion.ninos_adicionales || 0;
      } else {
        confirmados_no++;
      }
    });

    return {
      total_invitados,
      confirmados_si,
      confirmados_no,
      pendientes,
      total_adultos,
      total_ninos,
      total_asistentes_reales: total_adultos + total_ninos,
    };
  } catch (err) {
    console.error('Error calculando estadísticas:', err);
    return {
      total_invitados: 0,
      confirmados_si: 0,
      confirmados_no: 0,
      pendientes: 0,
      total_adultos: 0,
      total_ninos: 0,
      total_asistentes_reales: 0,
    };
  }
}
