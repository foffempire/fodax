import { useState } from "react";
import Button from "./Button.jsx";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-100";

  return (
    <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold text-slate-800">
          Name
          <input
            className={inputClass}
            name="name"
            value={values.name}
            onChange={updateField}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name ? <span className="mt-2 block text-sm text-red-600" id="name-error">{errors.name}</span> : null}
        </label>

        <label className="block text-sm font-bold text-slate-800">
          Email
          <input
            className={inputClass}
            name="email"
            type="email"
            value={values.email}
            onChange={updateField}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email ? <span className="mt-2 block text-sm text-red-600" id="email-error">{errors.email}</span> : null}
        </label>

        <label className="block text-sm font-bold text-slate-800">
          Phone
          <input
            className={inputClass}
            name="phone"
            value={values.phone}
            onChange={updateField}
            placeholder="+234..."
          />
        </label>

        <label className="block text-sm font-bold text-slate-800">
          Subject
          <input
            className={inputClass}
            name="subject"
            value={values.subject}
            onChange={updateField}
            placeholder="Project enquiry"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            required
          />
          {errors.subject ? <span className="mt-2 block text-sm text-red-600" id="subject-error">{errors.subject}</span> : null}
        </label>
      </div>

      <label className="mt-5 block text-sm font-bold text-slate-800">
        Message
        <textarea
          className={`${inputClass} min-h-36 resize-y`}
          name="message"
          value={values.message}
          onChange={updateField}
          placeholder="Tell us about your project scope, location, timeline, and budget range."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message ? <span className="mt-2 block text-sm text-red-600" id="message-error">{errors.message}</span> : null}
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit">Submit Enquiry</Button>
        {submitted ? (
          <p className="text-sm font-semibold text-green-700" role="status">
            Thank you. Your enquiry has been received and our team will follow up shortly.
          </p>
        ) : null}
      </div>
    </form>
  );
}
