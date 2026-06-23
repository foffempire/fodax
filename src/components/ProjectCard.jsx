import { MapPin } from "lucide-react";
import MotionReveal from "./MotionReveal.jsx";

export default function ProjectCard({ project, onSelect, delay = 0 }) {
  return (
    <MotionReveal delay={delay}>
      <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-strong">
        <button
          className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
          type="button"
          onClick={() => onSelect?.(project)}
          aria-label={`View details for ${project.title}`}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <img
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              src={project.image}
              alt={`${project.title} project in ${project.location}`}
              loading="lazy"
            />
            <span className="absolute left-4 top-4 rounded-md bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {project.category}
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-heading text-xl font-bold text-slate-950">{project.title}</h3>
            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
              <MapPin className="h-4 w-4 text-red-600" aria-hidden="true" />
              {project.location}
            </p>
            <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
          </div>
        </button>
      </article>
    </MotionReveal>
  );
}
