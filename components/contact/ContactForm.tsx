"use client";

import { useActionState } from "react";
import { CONTACT_CONTENT } from "./contact-content";
import { Button } from "@/components/ui/Button";
import { submitContactForm, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { ok: false };

/**
 * Formulario de contacto (client component). Envía el mensaje mediante un
 * Server Action (`app/actions/contact.ts`) que lo inserta en Supabase.
 */
export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

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
          className="resize-none border border-outline-variant bg-surface-container-low px-unit py-3 font-body text-body-md text-on-background outline-none transition-colors focus-visible:border-on-tertiary-container"
          placeholder={CONTACT_CONTENT.form.messageLabel}
        />
      </div>

      <div className="flex flex-col gap-unit">
        <Button type="submit" variant="secondary" size="lg" disabled={isPending}>
          {isPending ? "Enviando…" : CONTACT_CONTENT.form.submitLabel}
        </Button>
        {state.message && !state.ok ? (
          <p role="alert" className="font-body text-body-md text-on-tertiary-container">
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}