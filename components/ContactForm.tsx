"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { contact } from "@/app/lib/contact";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  website: string; // honeypot: humans never see it
};

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-muted bg-background px-4 py-3 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-[invalid=true]:border-red-700";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-medium text-foreground">
        {label}
        {optional && <span className="font-normal"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  // A captcha result works for one submission, so clear it after every attempt.
  function resetCaptcha() {
    setCaptchaToken("");
    captchaRef.current?.resetCaptcha();
  }

  async function onSubmit(data: FormValues) {
    const { website, ...fields } = data;

    // Honeypot: only bots fill this. Pretend success, send nothing.
    if (website) {
      setStatus("success");
      reset();
      return;
    }

    // The visitor must complete the captcha first.
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }

    // No service connected yet: show the honest fallback message.
    if (!contact.formEndpoint || !contact.formAccessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...fields,
          access_key: contact.formAccessKey,
          subject: `Website enquiry: ${fields.topic}`,
          "h-captcha-response": captchaToken,
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    } finally {
      resetCaptcha();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <Field id="name" label="Full name" error={errors.name?.message}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={errors.name ? true : false}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
          {...register("name", { required: "Please enter your name." })}
        />
      </Field>

      <Field id="email" label="Email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? true : false}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
          {...register("email", {
            required: "Please enter your email address.",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Please enter a valid email address.",
            },
          })}
        />
      </Field>

      <Field id="phone" label="Phone" optional error={errors.phone?.message}>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          aria-invalid={errors.phone ? true : false}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={inputClass}
          {...register("phone", {
            pattern: {
              value: /^[0-9+\s-]{10,15}$/,
              message: "Please enter a valid phone number.",
            },
          })}
        />
      </Field>

      <Field id="topic" label="I am writing about">
        <select id="topic" className={inputClass} {...register("topic")}>
          {contact.topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          aria-invalid={errors.message ? true : false}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
          {...register("message", {
            required: "Please write your message.",
            minLength: {
              value: 10,
              message: "Please write at least 10 characters.",
            },
          })}
        />
      </Field>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Captcha */}
      <div>
        <HCaptcha
          ref={captchaRef}
          sitekey={contact.captchaSiteKey}
          reCaptchaCompat={false}
          onVerify={(token) => {
            setCaptchaToken(token);
            setCaptchaError(false);
          }}
          onExpire={() => setCaptchaToken("")}
        />
        {captchaError && (
          <p role="alert" className="mt-2 text-sm text-red-700">
            Please complete the security check above.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="font-medium text-primary">
            Thank you. Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-red-700">
            Sorry, your message could not be sent. Please call {contact.phone} or
            email {contact.email} instead.
          </p>
        )}
      </div>
    </form>
  );
}