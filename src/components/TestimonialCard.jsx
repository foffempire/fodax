import { Quote, Star } from "lucide-react";
import MotionReveal from "./MotionReveal.jsx";

export default function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <MotionReveal delay={delay}>
      <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <Quote className="h-8 w-8 text-red-600" aria-hidden="true" />
          <div className="flex gap-1 text-red-600" aria-label="Five star rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star className="h-4 w-4 fill-current" key={star} aria-hidden="true" />
            ))}
          </div>
        </div>
        <blockquote className="leading-8 text-slate-700">"{testimonial.quote}"</blockquote>
        <div className="mt-6 border-t border-slate-100 pt-5">
          <p className="font-heading font-bold text-slate-950">{testimonial.name}</p>
          <p className="mt-1 text-sm font-medium text-slate-500">{testimonial.role}</p>
        </div>
      </article>
    </MotionReveal>
  );
}
