import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";
import MotionReveal from "../components/MotionReveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { company } from "../data/company.js";
import usePageMeta from "../hooks/usePageMeta.js";

const contactItems = [
  { label: "Address", value: company.address, icon: MapPin },
  { label: "Phone", value: company.phone, icon: Phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
  { label: "Email", value: company.email, icon: Mail, href: `mailto:${company.email}` },
  { label: "Working Hours", value: company.hours, icon: Clock },
];

export default function Contact() {
  usePageMeta(
    "Contact Fodax Nig Limited | Request a Construction Quote",
    "Contact Fodax Nig Limited for construction quotes, project enquiries, residential builds, commercial construction, civil works, and mechanical construction support.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you want to build."
        description="Share your project location, scope, budget range, and expected timeline. Fodax will help you take the next step with clarity."
        image="https://images.unsplash.com/photo-1581091870622-1e7e4d665f18?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal delay={0.08}>
            <aside className="rounded-lg bg-slate-950 p-6 text-white shadow-strong sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-600">
                <Send className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-extrabold">Contact us</h2>
              <p className="mt-3 leading-7 text-white/70">
                We would love to help you plan a visit, ask a question, request a quote, or connect with us.
              </p>
              <div className="mt-8 grid gap-5">
                {contactItems.map((item) => {
                  const ItemIcon = item.icon;
                  const value = item.href ? (
                    <a className="transition hover:text-red-400" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  );

                  return (
                    <div className="flex gap-4" key={item.label}>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-red-400">
                        <ItemIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/50">
                          {item.label}
                        </p>
                        <p className="mt-1 font-semibold text-white">{value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/50">
                  Social Links
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {company.socials.map((social) => (
                    <a
                      className="rounded-md bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      href={social.href}
                      key={social.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visit or Locate Us"
            title="Visit our Head Office."
            description=""
          />
          <MotionReveal className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <iframe
              className="h-[420px] w-full"
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15884.069115803833!2d5.765581!3d5.564456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041adc011a79b87%3A0xc085b62be284e652!2sFodax%20Nig%20Limited!5e0!3m2!1sen!2sng!4v1782222308760!5m2!1sen!2sng"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
