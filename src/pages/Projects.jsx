import { AnimatePresence, motion } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { useMemo, useState } from "react";
import Button from "../components/Button.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/projects.js";
import usePageMeta from "../hooks/usePageMeta.js";
import PageLoader from "../components/PageLoader.jsx";

const filters = ["All", "construction", "installation", "procurement"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  usePageMeta(
    "Projects | Fodax Nig Limited Construction Portfolio",
    "Browse sample Fodax Nig Limited projects across residential, commercial, and civil construction categories.",
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Some of our projects across engineering, procurement and construction."
        description="Explore some of our executed projects, that reflect Fodax's full-service contracting capability and hands-on site delivery."
        image="/images/pagetitle/fodax145.webp"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Portfolio"
              title=""
              description=""
            />
            <div className="flex flex-wrap gap-3" role="list" aria-label="Project category filters">
              {filters.map((filter) => (
                <button
                  className={`rounded-md px-4 py-2 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 ${
                    activeFilter === filter
                      ? "bg-red-600 text-white"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:text-red-700"
                  }`}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  key={filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div layout key={project.id}>
                  <ProjectCard project={project} onSelect={setSelectedProject} delay={index * 0.03} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-red-600">
              Project Ready
            </p>
            <h2 className="font-heading text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Bring Fodax in before construction starts.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-600">
              Early contractor input helps control budgets, identify build risks, and align design,
              procurement, and site logistics.
            </p>
          </div>
          <Button to="/contact">Plan Your Project</Button>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={() => setSelectedProject(null)}
          >
            <motion.article
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-strong"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative">
                <img
                  className="aspect-[16/9] w-full object-cover"
                  src={selectedProject.image}
                  alt={`${selectedProject.title} project`}
                />
                <button
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md bg-white text-slate-950 shadow-lg transition hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <span className="rounded-md bg-red-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-red-700">
                  {selectedProject.category}
                </span>
                <h2 id="project-modal-title" className="mt-4 font-heading text-3xl font-extrabold text-slate-950">
                  {selectedProject.title}
                </h2>
                <p className="mt-3 flex items-center gap-2 font-semibold text-slate-500">
                  <MapPin className="h-4 w-4 text-red-600" aria-hidden="true" />
                  {selectedProject.location}
                </p>
                <p className="mt-5 leading-8 text-slate-700">{selectedProject.details}</p>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <PageLoader />
    </>
  );
}
