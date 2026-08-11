import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente Supabase (adapter del portafolio).
 * Seguridad: usa la URL y la anon key desde variables de entorno (nunca
 * hardcodeadas). La anon key solo permite operaciones permitidas por RLS
 * (p.ej. insert en contact_messages y select en sections_content).
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function createSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    // Sin configuración: no romper la app (dev/build sin Supabase).
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}

/** Instancia compartida (cached). Puede ser null si faltan las env vars. */
export const supabase: SupabaseClient | null = createSupabase();

/** Tipado de lo que insertamos desde el formulario de contacto. */
export interface ContactMessagePayload {
  name: string;
  email: string;
  message: string;
}

/**
 * Inserta un mensaje del formulario en la tabla contact_messages (RLS: insert).
 * Devuelve { error } o null. Preparado para ser llamado desde un Server Action
 * o un handler, no desde el cliente directo si se prefiere ocultar lógica.
 */
export async function insertContactMessage(payload: ContactMessagePayload) {
  if (!supabase) {
    return { error: new Error("Supabase no configurado") };
  }
  const { error } = await supabase
    .from("contact_messages")
    .insert(payload);
  return { error };
}

/**
 * Carga el payload JSON de una sección guardada en la tabla `sections_content`.
 * Devuelve `null` si no hay configuración, no existe la fila, o falla la lectura
 * (RLS: select público). El consumidor debe hacer fallback a su archivo local.
 */
export async function getSectionContent<TPayload>(
  section: string,
): Promise<TPayload | null> {
  if (!supabase) {
    return null;
  }
  const { data, error } = await supabase
    .from("sections_content")
    .select("payload")
    .eq("section", section)
    .maybeSingle();

  if (error || !data) {
    return null;
  }
  return (data as { payload: TPayload }).payload;
}