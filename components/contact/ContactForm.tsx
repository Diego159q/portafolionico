"use client";

import { useActionState, useState } from "react";
import { CONTACT_CONTENT } from "./contact-content";
import { Button } from "@/components/ui/Button";
import { submitContactForm, type ContactState } from "@/app/actions/contact";
import { whatsappUrl } from "@/components/content/site-content";

const initialState: ContactState = { ok: false };

/**
 * Formulario de contacto (client component). Envía el mensaje mediante un
 * Server Action (`app/actions/contact.ts`) que lo inserta en Supabase.
 * Fallback: si el envío falla (p. ej. Supabase aún no configurado), muestra
 * enlaces directos a WhatsApp y email con el mensaje precargado para que
 * ningún visitante se quede sin poder contactar.
 */
export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const success = state.ok;

  if (success) {
    return (
      <p
        role="status"
        className="border border-on-tertiary-container px-margin-mobile py-margin-mobile font-body text-body-md text-on-tertiary-container"
      >
        {state.message}
      </p>
    );
  }

  const fallbackMessage = `${message}\n\n— ${name} (${email})`;
  const whatsappFallback = whatsappUrl(fallbackMessage);
  const mailtoFallback = `mailto:${CONTACT_CONTENT.email}?subject=Contacto%20desde%20portafolio&body=${encodeURIComponent(fallbackMessage)}`;

  return (
    <form action={formAction} className="flex flex-col gap-margin-mobile">
      <div className="flex flex-col gap-unit">
        <label
          htmlFor="contact-name"
          className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant"
        >
          {CONTACT_CONTENT.form.nameLabel}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-outline-variant bg-surface-container-low px-unit py-3 font-body text-body-md text-on-background outline-none transition-colors focus-visible:border-on-tertiary-container"
          placeholder={CONTACT_CONTENT.form.nameLabel}
        />
      </div>

      <div className="flex flex-col gap-unit">
        <label
          htmlFor="contact-email"
          className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant"
        >
          {CONTACT_CONTENT.form.emailLabel}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-outline-variant bg-surface-container-low px-unit py-3 font-body text-body-md text-on-background outline-none transition-colors focus-visible:border-on-tertiary-container"
          placeholder={CONTACT_CONTENT.form.emailLabel}
        />
      </div>

      <div className="flex flex-col gap-unit">
        <label
          htmlFor="contact-message"
          className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant"
        >
          {CONTACT_CONTENT.form.messageLabel}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none border border-outline-variant bg-surface-container-low px-unit py-3 font-body text-body-md text-on-background outline-none transition-colors focus-visible:border-on-tertiary-container"
          placeholder={CONTACT_CONTENT.form.messageLabel}
        />
      </div>

      <div className="flex flex-col gap-unit">
        <Button type="submit" variant="secondary" size="lg" disabled={isPending}>
          {isPending ? "Enviando…" : CONTACT_CONTENT.form.submitLabel}
        </Button>
        {state.message && !state.ok ? (
          <div role="alert" className="flex flex-col gap-unit">
            <p className="font-body text-body-md text-on-tertiary-container">
              {state.message}
            </p>
            <p className="font-body text-body-md text-on-surface-variant">
              También puedes escribirme directo por:
            </p>
            <div className="flex flex-wrap gap-unit">
              <a
                href={whatsappFallback}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-on-tertiary-container px-4 py-2 font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-tertiary-container transition-colors hover:bg-on-tertiary-container hover:text-background"
              >
                WhatsApp ↗
              </a>
              <a
                href={mailtoFallback}
                className="border border-outline-variant px-4 py-2 font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:text-on-background"
              >
                Email ↗
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </form>
  );
}
