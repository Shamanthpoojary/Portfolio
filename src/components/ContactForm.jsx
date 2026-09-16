import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertTriangle } from "lucide-react";
import { contactForm } from "../data/content";

const EMPTY = { name: "", email: "", subject: "", message: "" };

const FIELD_CLASS =
  "w-full rounded border border-border bg-bg px-3 py-2.5 font-mono text-sm text-text " +
  "placeholder:text-muted/60 transition-colors focus:border-trace focus:outline-none " +
  "focus:ring-1 focus:ring-trace disabled:opacity-60";

function Label({ htmlFor, children, hint }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-wider text-copper"
    >
      {children}
      {hint && <span className="text-[10px] normal-case tracking-normal text-muted">{hint}</span>}
    </label>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [botcheck, setBotcheck] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  // Links from a project README can name what they're about, so a bug report
  // arrives already labelled instead of as another "Hello".
  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get("subject");
    if (preset) setForm((f) => ({ ...f, subject: preset }));
  }, []);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch(contactForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contactForm.accessKey,
          from_name: "Portfolio contact form",
          replyto: form.email,
          botcheck,
          ...form,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "The form service rejected the message.");
      setForm(EMPTY);
      setStatus("sent");
    } catch (err) {
      setError(err.message || "Network error.");
      setStatus("error");
    }
  }

  const sending = status === "sending";

  if (!contactForm.accessKey) {
    return (
      <div className="mx-auto mt-16 max-w-2xl rounded-lg border border-border-hi bg-panel p-6 text-center">
        <p className="font-mono text-sm text-muted">
          The message form is being set up. In the meantime, email{" "}
          <a href="mailto:shamanth25402@gmail.com" className="text-trace hover:underline">
            shamanth25402@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-20 max-w-2xl"
    >
      <div className="mb-6 text-center">
        <h3 className="font-mono text-xl font-bold text-text sm:text-2xl">Send a message</h3>
        <p className="mt-2 text-sm text-muted">
          Questions, freelance enquiries, or a bug you hit in one of my projects — it all lands in
          my inbox.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-border bg-panel p-6 sm:p-7"
      >
        {/* Honeypot: invisible to people, so anything that ticks it is a bot.
            The value has to be tracked in state — a JSON submit never
            serializes the form, so an unread input would do nothing. */}
        <input
          type="checkbox"
          name="botcheck"
          id="botcheck"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
          checked={botcheck === "true"}
          onChange={(e) => setBotcheck(e.target.checked ? "true" : "")}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="cf-name">Name</Label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              disabled={sending}
              value={form.name}
              onChange={set("name")}
              placeholder="Your name"
              className={FIELD_CLASS}
            />
          </div>
          <div>
            <Label htmlFor="cf-email">Email</Label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              disabled={sending}
              value={form.email}
              onChange={set("email")}
              placeholder="you@example.com"
              className={FIELD_CLASS}
            />
          </div>
        </div>

        <div className="mt-4">
          <Label htmlFor="cf-subject">Subject</Label>
          <input
            id="cf-subject"
            name="subject"
            type="text"
            required
            disabled={sending}
            value={form.subject}
            onChange={set("subject")}
            placeholder="What is this about?"
            className={FIELD_CLASS}
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="cf-message" hint="For bugs, include steps and your OS.">
            Message
          </Label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={6}
            disabled={sending}
            value={form.message}
            onChange={set("message")}
            placeholder="Write your message…"
            className={`${FIELD_CLASS} resize-y leading-relaxed`}
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded border border-trace bg-trace/10 px-5 py-2.5 font-mono text-sm font-semibold text-trace transition-colors hover:bg-trace/20 focus:outline-none focus:ring-2 focus:ring-trace disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={15} />
            {sending ? "sending()" : "send_message()"}
          </button>

          <p aria-live="polite" className="font-mono text-xs">
            {status === "sent" && (
              <span className="inline-flex items-center gap-1.5 text-trace">
                <CheckCircle2 size={14} /> Message sent — I&apos;ll reply to your email.
              </span>
            )}
            {status === "error" && (
              <span className="inline-flex items-center gap-1.5 text-danger">
                <AlertTriangle size={14} /> Didn&apos;t send: {error}
              </span>
            )}
          </p>
        </div>
      </form>
    </motion.div>
  );
}
