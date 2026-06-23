import {
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../data/company.js";
import { services } from "../data/services.js";
import logo from "../assets/logo.png";

const socialIcons = {
  Facebook,
  LinkedIn: Linkedin,
  Instagram,
  X: X,
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link className="flex items-center gap-3" to="/">
            <img src={logo} alt=""  width={150}/>
          </Link>
          <p className="mt-5 leading-7 text-white/68">
            Our focus is the provision of world class services in all our areas of expertise (Engineering, Procurement & Construction, petroleum products distribution and marketing)
          </p>
          <div className="mt-6 flex gap-3">
            {company.socials.map((social) => {
              const SocialIcon = socialIcons[social.label] || ExternalLink;
              return (
                <a
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  href={social.href}
                  key={social.label}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold">Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {["About", "Services", "Projects", "Team", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  className="text-white/68 transition hover:text-red-400"
                  to={`/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link className="text-white/68 transition hover:text-red-400" to="/services">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold">Contact</h2>
          <ul className="mt-5 space-y-4 text-white/68">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
              <a className="hover:text-red-400" href={`tel:${company.phone.replace(/\s/g, "")}`}>
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
              <a className="hover:text-red-400" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
