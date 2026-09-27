"use client";

import { useState, useCallback } from "react";
import { ArrowRight, AlertCircle, CheckCircle } from "lucide-react";
import { z } from "zod";

const EMAIL = "Work.maxsherman@outlook.com";
const LOCATION = "Netherlands & United Kingdom";
const LINKEDIN_URL = "https://www.linkedin.com/in/maxsherman1";
const LINKEDIN_HANDLE = "in/maxsherman1";
const GITHUB_URL = "https://github.com/maxsherman1";
const GITHUB_HANDLE = "@maxsherman1";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwpbrvnr";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200, "Subject must be less than 200 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters"),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validateField = useCallback((name: keyof FormData, value: string): string | undefined => {
    const fieldSchema = contactSchema.shape[name];
    const result = fieldSchema.safeParse(value);
    return result.success ? undefined : result.error.issues[0].message;
  }, []);

  const validateForm = useCallback((data: FormData): FormErrors => {
    const result = contactSchema.safeParse(data);
    if (result.success) return {};

    const newErrors: FormErrors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof FormData;
      if (!newErrors[field]) {
        newErrors[field] = issue.message;
      }
    }
    return newErrors;
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field as user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name as keyof FormData, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    // Validate entire form
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData(initialFormData);
        setErrors({});
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function getInputClass(fieldName: keyof FormData) {
    const hasError = errors[fieldName] && touched[fieldName];
    return `input ${hasError ? "border-error focus:border-error focus:ring-1 focus:ring-error" : ""}`;
  }

  function renderError(fieldName: keyof FormData) {
    const error = errors[fieldName];
    const isTouched = touched[fieldName];
    if (!error || !isTouched) return null;

    return (
      <p
        key={fieldName}
        id={`${fieldName}-error`}
        className="label-code mt-1.5 text-error flex items-center gap-1"
        role="alert"
      >
        <AlertCircle size={12} strokeWidth={2} aria-hidden />
        {error}
      </p>
    );
  }

  return (
    <main className="pb-6 sm:pb-8 lg:pb-10 pt-4 sm:pt-6 lg:pt-12">
      <div className="container-site">
        {/* Header */}
        <header className="mb-6 md:mb-12">
          <h1>Let&rsquo;s Connect.</h1>
          <p className="measure mt-4 text-muted">
            Have an inquiry, project, or opportunity? Drop a message below or
            reach out directly.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
          {/* Left: direct info */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
            <div className="glass-card p-6 w-full">
              <p className="label-caps mb-5 text-accent">Direct Contact</p>
              <dl className="grid gap-5">
                <div>
                  <dt className="label-caps mb-1 text-subtle">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-semibold text-foreground transition-colors hover:text-accent"
                    >
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label-caps mb-1 text-subtle">Location</dt>
                  <dd className="text-foreground">{LOCATION}</dd>
                </div>
                <div>
                  <dt className="label-caps mb-1 text-subtle">Availability</dt>
                  <dd className="flex items-center gap-2 text-foreground">
                    Typically responds within 24 hours
                  </dd>
                </div>
              </dl>
            </div>

            <div className="glass-card p-6 w-full">
              <p className="label-caps mb-3 text-accent">Online Profiles</p>
              <ul className="divide-y divide-(--divider)">
                <li className="flex items-center justify-between py-3">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                  <span className="label-code text-subtle">{LINKEDIN_HANDLE}</span>
                </li>
                <li className="flex items-center justify-between py-3">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                  <span className="label-code text-subtle">{GITHUB_HANDLE}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8" noValidate>
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="label-caps mb-2 block text-subtle">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  className={getInputClass("name")}
                  aria-invalid={!!(errors.name && touched.name)}
                  aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                />
                {renderError("name")}
              </div>

              <div>
                <label htmlFor="email" className="label-caps mb-2 block text-subtle">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="name@company.com"
                  className={getInputClass("email")}
                  aria-invalid={!!(errors.email && touched.email)}
                  aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                />
                {renderError("email")}
              </div>

              <div>
                <label htmlFor="subject" className="label-caps mb-2 block text-subtle">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Project inquiry, question, or opportunity"
                  className={getInputClass("subject")}
                  aria-invalid={!!(errors.subject && touched.subject)}
                  aria-describedby={errors.subject && touched.subject ? "subject-error" : undefined}
                />
                {renderError("subject")}
              </div>

              <div>
                <label htmlFor="message" className="label-caps mb-2 block text-subtle">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  placeholder="Write your message here..."
                  className={`${getInputClass("message")} resize-y`}
                  aria-invalid={!!(errors.message && touched.message)}
                  aria-describedby={errors.message && touched.message ? "message-error" : undefined}
                />
                {renderError("message")}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
            </button>

            <p className="sr-only" role="status" aria-live="polite">
              {status === "success" && "Your message has been sent successfully."}
              {status === "error" &&
                "There was an error sending your message. Please try again."}
            </p>
            {status === "success" && (
              <p className="label-code mt-4 text-success flex items-center gap-1.5">
                <CheckCircle size={14} strokeWidth={2} aria-hidden />
                Your message has been sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="label-code mt-4 text-error flex items-center gap-1.5">
                <AlertCircle size={14} strokeWidth={2} aria-hidden />
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}