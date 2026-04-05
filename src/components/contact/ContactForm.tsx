"use client";

import { FormEvent, useState } from "react";

type SubmitState = {
  type: "idle" | "success" | "error";
  message: string;
};

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ type: "idle", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Unable to submit your inquiry right now.");
      }

      setSubmitState({
        type: "success",
        message: data.message || "Thanks for your inquiry. Mrinal will get back to you soon.",
      });
      setValues(initialValues);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong while submitting the form.";
      setSubmitState({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium">Your name</span>
          <input
            type="text"
            required
            minLength={2}
            maxLength={80}
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-cyan-500 dark:focus:ring-cyan-900"
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium">Email address</span>
          <input
            type="email"
            required
            maxLength={160}
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-cyan-500 dark:focus:ring-cyan-900"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm">
        <span className="font-medium">Subject</span>
        <input
          type="text"
          required
          minLength={4}
          maxLength={120}
          value={values.subject}
          onChange={(event) => setValues((prev) => ({ ...prev, subject: event.target.value }))}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-cyan-500 dark:focus:ring-cyan-900"
          placeholder="How can we collaborate?"
        />
      </label>

      <label className="grid gap-2 text-sm">
        <span className="font-medium">Message</span>
        <textarea
          required
          minLength={10}
          maxLength={2000}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          className="min-h-40 rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-cyan-500 dark:focus:ring-cyan-900"
          placeholder="Share your inquiry details..."
        />
      </label>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-slate-600 dark:text-slate-400">
          By submitting, you agree to be contacted regarding this inquiry.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-xl bg-cyan-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Send Inquiry"}
        </button>
      </div>

      {submitState.type !== "idle" ? (
        <p
          className={`rounded-xl border px-4 py-3 text-sm ${
            submitState.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300"
              : "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
          }`}
          role="status"
          aria-live="polite"
        >
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}