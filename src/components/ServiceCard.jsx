import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import MotionReveal from "./MotionReveal.jsx";

export default function ServiceCard({ service, compact = false, delay = 0 }) {
  return (
    <MotionReveal delay={delay}>
      <Link
        to="/services"
        className="group block h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
      >
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
          <Icon name={service.icon} />
        </span>
        <h3 className="font-heading text-xl font-bold text-slate-950">{service.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>
        {!compact ? (
          <ul className="mt-5 space-y-3">
            {service.includes.map((item) => (
              <li className="flex gap-3 text-sm font-medium text-slate-700" key={item}>
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </Link>
    </MotionReveal>
  );
}
