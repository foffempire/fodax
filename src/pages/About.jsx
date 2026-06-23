import { CheckCircle2 } from "lucide-react";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import MotionReveal from "../components/MotionReveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { certifications, differentiators, leaders, values } from "../data/company.js";
import usePageMeta from "../hooks/usePageMeta.js";

export default function About() {
  usePageMeta(
    "About Fodax Nig Limited | Nigerian Construction Company",
    "Learn about Fodax Nig Limited, a Nigerian general contracting company built on integrity, safety, quality, and timely delivery.",
  );

  return (
    <>
      <PageHeader
        eyebrow="About Fodax"
        title="Your construction partner built for strength, precision, and trust."
        description="FODAX Nig Limited is a 100% indigenous private company. The company is proudly Nigerian and is motivated by its intention to provide high quality, safe and excellent service."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="order-2 lg:order-none">
            <SectionHeading
              eyebrow="Our Story"
              title="Culture of excellence in service delivery with social responsibility"
              description="We are a new breed Oil & Gas Services Company – our focus is the provision of world class services in all our areas of expertise. These are of course anchored on our company’s unwavering focus on quality, health, safety, security and environmental consciousness aimed at evolving a culture of excellence in service delivery with social responsibility."
            />
            <MotionReveal className="mt-7 space-y-5 leading-8 text-slate-700">
              <p>
                We promote a culture of continuous improvement and we monitor our projects constantly to ensure they are completed within schedule.
              </p>
              <p>
                We work proactively with our existing clients while attracting new ones. Our aim is to increase our customer base yearly.
              </p>
            </MotionReveal>
          </div>
          <MotionReveal className="order-1 lg:order-none">
            <img
              className="w-full rounded-lg object-cover shadow-strong"
              src="/images/mission.jpg"
              alt="Engineer inspecting construction plans on site"
              loading="lazy"
            />
          </MotionReveal>
        </div>
      </section>

      {/* <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Core Values"
            title="The standards that guide every site and every decision."
            description="Construction succeeds when the team is clear about what matters. These values shape how Fodax plans, supervises, and hands over work."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <MotionReveal delay={index * 0.05} key={value.title}>
                <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-red-50 text-red-600">
                    <Icon name={value.icon} />
                  </span>
                  <h3 className="font-heading text-xl font-bold text-slate-950">{value.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{value.description}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-slate-50  py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <MotionReveal>
            <img
              className="aspect-[5/4] w-full rounded-lg object-cover shadow-strong"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Project managers reviewing drawings and construction plans"
              loading="lazy"
            />
          </MotionReveal>
          <div>
            <SectionHeading
              eyebrow="Why Work With Us"
              title="Accountable team from planning through handover."
              description="Fodax brings expertise accross multiple areas in the oil and gas sector. We handle approvals, budgets, and site constraints in one project."
            />
            <MotionReveal className="mt-8 grid gap-4">
              {differentiators.map((item) => (
                <p className="flex gap-3 rounded-md border border-slate-200 bg-white p-4 font-semibold text-slate-700" key={item}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                  <span>{item}</span>
                </p>
              ))}
            </MotionReveal>
          </div>
        </div>
      </section>



      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="order-2 lg:order-none">
            <SectionHeading
              eyebrow="Safety First"
              title="We ensure a safe and healthy work environment"
              description="We are committed to providing a safe and healthy working environment for our employees, visitors, and all people using our premises as a workplace. To ensure a safe and healthy work environment, we have developed and we are maintaining a health and safety management system."
            />
          </div>
          <MotionReveal className="order-1 lg:order-none">
            <img
              className="aspect-[5/4] w-full rounded-lg object-cover shadow-strong"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Project managers reviewing drawings and construction plans"
              loading="lazy"
            />
          </MotionReveal>
        </div>
      </section>

      {/* <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Experienced project people with field-first judgment."
            description="These placeholder profiles represent the kind of leadership structure clients can expect from Fodax."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {leaders.map((leader, index) => (
              <MotionReveal delay={index * 0.05} key={leader.name}>
                <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                  <img
                    className="aspect-[4/3] w-full object-cover"
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-slate-950">{leader.name}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-red-600">
                      {leader.role}
                    </p>
                    <p className="mt-4 leading-7 text-slate-600">{leader.bio}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section> */}


      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <MotionReveal>
            <img
              className="aspect-[5/4] w-full rounded-lg object-cover shadow-strong"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Project managers reviewing drawings and construction plans"
              loading="lazy"
            />
          </MotionReveal>
          <div>
            <SectionHeading
              eyebrow="Executing with excellence"
              title="We are commitment to get results the right way"
              description="FODAX Nig Limited has positioned itself to take full advantage of the large range of business opportunities presented by the current upward trend in the Nigerian Oil and Gas sector by maintaining a competitive edge over its competition. Our success is driven by our people and their commitment to get results the right way — by operating responsibly, executing with excellence, applying innovative technologies and capturing new opportunities for profitable growth."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((item) => (
              <MotionReveal key={item}>
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-6 text-center">
                  <p className="font-heading font-bold text-slate-950">{item}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
