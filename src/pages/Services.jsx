import Button from "../components/Button.jsx";
import MotionReveal from "../components/MotionReveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { moreServices, processSteps, services } from "../data/services.js";
import usePageMeta from "../hooks/usePageMeta.js";

export default function Services() {
  usePageMeta(
    "Services | Fodax Nig Limited",
    "Explore Fodax Nig Limited services including engineering, petroleum products supply, residential construction, commercial construction, civil infrastructure, mechanical construction, MEP, finishing, roofing, and project management.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Engineering, Procurement and Construction"
        description="Fodax provides the project coordination, site supervision, procurement planning, and workmanship needed to deliver complete projects across Nigeria."
        image="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="What We Do"
            title="One contractor. Many project types. Complete delivery focus."
            description="Choose Fodax when your project needs joined-up construction management across structure, services, finishing, and external works."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard service={service} delay={index * 0.04} key={service.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
            align="center"
            eyebrow="More of What We Do"
            title="Fodax brings expertise accross multiple areas in the oil and gas sector."
            description=""
          />
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {moreServices.map((item) => (
                    <MotionReveal key={item}>
                      <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-6 text-center">
                        <p className="font-heading font-bold text-slate-950">{item}</p>
                      </div>
                    </MotionReveal>
                  ))}
                </div>
              </div>
            </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Our Process"
            title="A clear workflow from first conversation to final handover."
            description="We keep the construction journey structured, visible, and practical so clients understand what is happening and what comes next."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <MotionReveal delay={index * 0.05} key={item.step}>
                <article className="relative h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="font-heading text-5xl font-extrabold text-red-100">{item.step}</span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="rounded-lg bg-slate-950 px-6 py-12 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
              <div className="max-w-2xl">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-red-400">
                  Need a Scope Review?
                </p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">
                  Let us help define the right approach for your next projects.
                </h2>
              </div>
              <Button to="/contact" className="mt-8 lg:mt-0">
                Contact us
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
