"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_CONTENT } from "./contact-content";
import { Button } from "@/components/ui/Button";

/**
 * Formulario de contacto (client component mínimo).
 * Estado local para los campos; preparado para conectarse a un backend
 * cuando exista (p.ej. fetch a una API REST). No envía a ningún servicio.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: conectar con backend/CMS (p.ej. POST a una API REST).
    setSent(true);
  };

  if (sent) {
    return (
      <p
        role="status"
        className="border border-on-tertiary-container px-margin-mobile py-margin-mobile font-body text-body-md text-on-tertiary-container"
      >
        Mensaje recibido. Gracias por escribir.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-margin-mobile">
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
          onChange={(event) => setName(event.target.value)}
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
          onChange={(event) => setEmail(event.target.value)}
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
          onChange={(event) => setMessage(event.target.value)}
          className="resize-none border border-outline-variant bg-surface-container-low px-unit py-3 font-body text-body-md text-on-background outline-none transition-colors focus-visible:border-on-tertiary-container"
          placeholder={CONTACT_CONTENT.form.messageLabel}
        />
      </div>

      <div>
        <Button type="submit" variant="secondary" size="lg">
          {CONTACT_CONTENT.form.submitLabel}
        </Button>
      </div>
    </form>
  );
}