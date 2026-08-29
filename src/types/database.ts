export interface Invitado {
  id: string;
  nombre_completo: string;
  creado_en: string;
}

export interface Confirmacion {
  id: string;
  invitado_id: string;
  asiste: boolean;
  adultos_adicionales: number;
  ninos_adicionales: number;
  observaciones: string | null;
  fecha_confirmacion: string;
}

export interface InvitadoConConfirmacion {
  id: string;
  nombre_completo: string;
  creado_en: string;
  confirmacion: Confirmacion | null;
}

export interface EstadisticasLogistica {
  total_invitados: number;
  confirmados_si: number;
  confirmados_no: number;
  pendientes: number;
  total_adultos: number;
  total_ninos: number;
  total_asistentes_reales: number;
}

export interface RsvpFormData {
  invitado_id: string;
  asiste: boolean;
  adultos_adicionales: number;
  ninos_adicionales: number;
  observaciones: string;
}
