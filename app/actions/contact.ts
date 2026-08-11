"use server";

import { insertContactMessage } from "@/lib/supabase";

export interface ContactState {
  ok: boolean;
  message?: string;
}

/**
 * Server Action del formulario de contacto.
 * Inserta el mensaje en Supabase (tabla contact_messages, RLS: insert anónimo).
 * Nunca expone la service_role key al cliente.
 */
export async function submitContactForm(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Completa todos los campos." };
  }

  const { error } = await insertContactMessage({ name, email, message });

  if (error) {
    return { ok: false, message: "No se pudo enviar. Intenta de nuevo." };
  }

  return { ok: true, message: "Mensaje recibido. Gracias por escribir." };
}