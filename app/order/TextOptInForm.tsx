"use client";

import { useState } from "react";

type Status = {
  type: "idle" | "success" | "error";
  message: string;
};

export function TextOptInForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/text-opt-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          listSelection: String(formData.get("listSelection") ?? ""),
          consent: formData.get("consent") === "on",
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to join the text list right now.");
      }

      setStatus({
        type: "success",
        message: result.message ?? "You're on the list. We'll send the important feed updates.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to join the text list right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="text-name" className="form-label">
            Name
          </label>
          <input id="text-name" name="name" type="text" required className="form-input" />
        </div>
        <div>
          <label htmlFor="text-phone" className="form-label">
            Phone number
          </label>
          <input
            id="text-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            className="form-input"
          />
        </div>
      </div>

      <fieldset>
        <legend className="form-label">List selection</legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-3">
          {[
            ["bagged-pickup", "Bagged Feed Pickup"],
            ["feed-delivery", "Feed Delivery"],
            ["both", "Both"],
          ].map(([value, label]) => (
            <label key={value} className="radio-card">
              <input type="radio" name="listSelection" value={value} required />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex gap-3 rounded border border-[var(--ink-soft)] bg-white p-4 text-sm leading-6 text-[var(--ink-muted)]">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 flex-none" />
        <span>
          I agree to receive text updates from Kesten Feed Co. about order windows, pickup dates,
          delivery scheduling, and feed updates. Message and data rates may apply. Reply STOP to
          opt out.
        </span>
      </label>

      {status.type !== "idle" && (
        <div
          className={`rounded px-4 py-3 text-sm font-semibold ${
            status.type === "success"
              ? "border border-green-200 bg-green-50 text-green-800"
              : "border border-red-200 bg-red-50 text-red-800"
          }`}
          role="status"
        >
          {status.message}
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
        {isSubmitting ? "Joining..." : "Never Miss an Order Window"}
      </button>
    </form>
  );
}
