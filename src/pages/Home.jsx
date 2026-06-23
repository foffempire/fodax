import { CheckCircle2 } from "lucide-react";
import Button from "../components/Button.jsx";
import Hero from "../components/Hero.jsx";
import MotionReveal from "../components/MotionReveal.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import StatCounter from "../components/StatCounter.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { stats } from "../data/company.js";
import { clientLogos, clients } from "../data/clients.js";
import { projects } from "../data/projects.js";
import { services } from "../data/services.js";
import { testimonials } from "../data/testimonials.js";
import usePageMeta from "../hooks/usePageMeta.js";

export default function Home() {
  usePageMeta(
    "Fodax Nig Limited | General Contracting & Construction in Nigeria",
    "Fodax Nig Limited delivers residential, commercial, mechanical, and civil infrastructure construction projects across Nigeria.",
  );

  return (
    <>
      <Hero />

      {/* ABOUT */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <MotionReveal>
            <div className="relative overflow-hidden rounded-lg bg-slate-100">
              <img
                className="aspect-[4/3] h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt=""
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-md bg-white p-5 shadow-strong sm:left-auto sm:w-72">
                <p className="font-heading text-2xl font-extrabold text-slate-950">14+</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  years of experience
                </p>
              </div>
            </div>
          </MotionReveal>
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Our success is driven by our people and their commitment to get results the right way"
              description="We are a new breed Oil & Gas Services Company – our focus is the provision of world class services in all our areas of expertise. These are of course anchored on our company’s unwavering focus on quality, health, safety, security and environmental consciousness aimed at evolving a culture of excellence in service delivery with social responsibility."
            />
            <MotionReveal className="mt-7 space-y-4">
              <Button to="/about" className="mt-3">
                Learn About Fodax
              </Button>
            </MotionReveal>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <MotionReveal className="sm:order-2 order-none">
            <div className="relative overflow-hidden rounded-lg bg-slate-100">
              <img
                className="aspect-[4/3] h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt=""
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-md bg-white p-5 shadow-strong sm:left-auto sm:w-72">
                <p className="font-heading text-2xl font-extrabold text-slate-950">85+</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  successfully completed projects.
                </p>
              </div>
            </div>
          </MotionReveal>

          <div className="sm:order-1 order-none">
            <SectionHeading
              eyebrow="What we do"
              title="Efficiency and timely delivery are our major advantages."
              description="Fodax Nigeria Limited offers a wide range of services which include but not limited to:"
            />
            <MotionReveal className="mt-7 space-y-4">
              {[
                "Engineering, Procurement & Construction",
                "Project/Programme Management and Consultancy services",
                "Marketing, supply & trading of petroleum products",
                "Marine services, offshore support services",
                "Logistics, training, asset management, equipment leasing, etc.",
              ].map((item) => (
                <p className="flex gap-3 text-base font-semibold text-slate-700" key={item}>
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                  <span>{item}</span>
                </p>
              ))}
              <Button to="/services" className="mt-3">
                Learn more
              </Button>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our Services"
              title="Full-service construction support for any build type."
              description="Plan, build, coordinate, finish, and hand over with one contractor that understands the realities of Nigerian project delivery."
            />
            <Button to="/services" variant="light" className="self-start md:self-end">
              View All Services
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard service={service} compact delay={index * 0.05} key={service.id} />
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Built work across homes, business spaces, and infrastructure."
              description="A sample of realistic project types Fodax is equipped to plan, manage, and deliver."
            />
            <Button to="/projects" variant="light" className="self-start md:self-end">
              View Portfolio
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard project={project} delay={index * 0.05} key={project.id} />
            ))}
          </div>
        </div>
      </section> */}

            {/* STATS */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <StatCounter stat={stat} key={stat.label} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Our Passion"
            title="Our Passion"
            description="We’re “passionate about performance”. Our main goal for any service we provide is “customer satisfaction”. As a result, we carefully and thoroughly adapt our services to meet our goals. Efficiency and timely delivery are two of our services’ major advantages for clients. We make sure that not only are our customers pleased and satisfied, but that they also strongly believe on us anytime they need the services we provide. We will consistently uphold our basic business strategy of steady expansion, technological innovation, and teamwork as the key to realizing our vision. We appreciate our customers’ trust in us as well as the hard work, commitment, and dedication of our personnel."
          />
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="flex flex-col gap-8 border-b border-slate-200 pb-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-sm">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-red-600">
                  Our Clients
                </p>
                <h2 className="mt-3 font-heading text-2xl font-extrabold text-slate-950">
                  Trusted by project owners, engineers, and facility teams.
                </h2>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {clients.map((client, index) => (
                  <div
                    className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-1 py-2 text-center transition hover:border-red-200 hover:bg-white hover:shadow-sm"
                    key={index}
                    aria-label={`${client}`}
                  >
                    <img src={client} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="relative isolate overflow-hidden rounded-lg bg-slate-950 px-6 py-14 text-white shadow-strong sm:px-10 lg:px-14">
              <img
                className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=1400&q=80"
                alt=""
                loading="lazy"
              />
              <div className="absolute inset-0 -z-10 bg-slate-950/80" />
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-red-400">
                    Start Strong
                  </p>
                  <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
                    Ready to start your project?
                  </h2>
                  <p className="mt-4 leading-8 text-white/75">
                    Share the scope, location, and delivery goals. Fodax will help you define the
                    right plan and next steps.
                  </p>
                </div>
                <Button to="/contact">Contact Our Team</Button>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
