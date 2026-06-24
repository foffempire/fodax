import { CheckCircle2 } from "lucide-react";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import MotionReveal from "../components/MotionReveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { certifications, differentiators, leaders, values } from "../data/company.js";
import usePageMeta from "../hooks/usePageMeta.js";
import PageLoader from "../components/PageLoader.jsx";

export default function Team() {
  usePageMeta(
    "Our Team | Fodax Nig Limited",
    "Learn about Fodax Nig Limited, a Nigerian general contracting company built on integrity, safety, quality, and timely delivery.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Our Team, Our Strength"
        description="Competence, hardworking, expertise."
        image="/images/pagetitle/fodax708.webp"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <MotionReveal className="order-1 lg:order-none">
            <img
              className="w-full rounded-lg object-cover shadow-strong"
              src="/images/team/team.jpg"
              alt=""
              loading="lazy"
            />
          </MotionReveal>
          <div className="order-2 lg:order-none">
            <SectionHeading
              eyebrow="Our Team"
              title="Our Team, Our Strength"
              description=""
            />
            <MotionReveal className="mt-7 space-y-5 leading-8 text-slate-700">
              <p>
                Fodax Nigeria Limited has a verile and dynamic workforce that we like to refer to as our strength. This is in line with our mission to recruit, retain and reward a high performance workforce.
              </p>
              <p>
                We have a qualified system for accessing key skills and experience to ensure that our staff and consultants have significant and relevant experience relative to the job assigned
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>


      <section className="bg-slate-50  py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <MotionReveal>
            <img
              className="w-full rounded-lg object-cover shadow-strong"
              src="/images/team/biu.jpg"
              alt="Project managers reviewing drawings and construction plans"
              loading="lazy"
            />
          </MotionReveal>
          <div>
            <SectionHeading
              eyebrow="Managing Director"
              title="ENGR. DR. RAPHAEL ENEYI BIU, PhD, FNSE"
              description=""
            />
            <MotionReveal className="mt-8 grid gap-4">
              <p>
                Raphael is a passionate Engineer with extensive experience in the Oil and Gas sector. He is a Materials & Metallurgical Engineering graduate of the prestigious Federal University of Technology Owerri, Imo State. He holds a Master of Science (M.Sc.) degree in Engineering Management from the University of Benin, Edo State and has a Doctorate degree in Industrial Engineering from  university of Benin. He is a member of the Institute of Safety Professionals of Nigeria (ISPON), a fellow of Nigerian Society of Engineers (NSE), a registered Engineer of the Council for the Regulation of Engineering in Nigeria (COREN) and an alumnus of Harvard Business School.
              </p>
              <p>
                Dr. Raphael was admitted as a Doctoral fellow of the Chattered Institute of Logistics and Supply Chain Management, and a certified member of the American Society of Mechanical Engineers (ASME). He is a professional Scum Master, a certified Project Management Professional (PMP), a member of Project Management Institute (PMI) and a member of the Society of Petroleum Engineers (SPE).
              </p>
              <p>
                Prior to incorporation of Fodax Nigeria Limited, he worked with Rainoil Nigeria Limited, Matrix Energy Limited and PeopleTemp Limited. He has worked at different levels over the course of his career in Customer Relations, Retail Sales, Operations, Process Safety, Maintenance, Project Management, Terminal Management, Supply Chain Logistics and haulage management. He has close to two decades of experience in the Oil and gas industry and is currently the Managing Director of Fodax Nigeria Limited. Bringing forth a professional attitude, Raphael is committed to providing solutions to problems and is a strong leader who works well with other professionals.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* NEYE */}
      {/* <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="order-2 lg:order-none">
            <SectionHeading
              eyebrow="Business Development Manager"
              title="Neye Davies"
              description=""
            />
            <MotionReveal className="mt-8 grid gap-4">
              <p>
                A graduate of Business Administration and Management and with almost 7 years of expertise in business development, supply and distribution, haulage logistics, and petroleum depot operations, Davies has earned his accolades in the business and petroleum industry
              </p>
              <p>
                As a former employee of Matrix Energy Limited, Warri Terminal, he gained his jump-start experience in depot operations. Due to his level of dedication, quick wit, and zeal, he was elevated to the haulage department, where he oversaw 120 truck drivers as the lead journey manager for the company’s LPG trucks. Over time, he has engaged in continuous learning and acquired safety, quality assurance, and quality control certifications.
              </p>
              <p>
                In a bid to grasp more expertise in the field, he procured a certificate in business strategy, work ethics, and leadership from the Quantum Business School. He also possesses training certifications as a Project Management Professional (PMP) and PMI Risk Management Professional (RMP).
              </p>
            </MotionReveal>
          </div>
          <MotionReveal className="order-1 lg:order-none">
            <img
              className="w-full rounded-lg object-cover shadow-strong"
              src="/images/team/neye.jpg"
              alt=""
              loading="lazy"
            />
          </MotionReveal>
        </div>
      </section> */}

      {/* DIDI */}
      {/* <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <MotionReveal>
            <img
              className="w-full rounded-lg object-cover shadow-strong"
              src="/images/team/didi.jpeg"
              alt=""
              loading="lazy"
            />
          </MotionReveal>
          <div>
            <SectionHeading
              eyebrow="Administrative Personnel/HR"
              title="Tiemo Prisca Didimien"
              description=""
            />
            <MotionReveal className="mt-8 grid gap-4">
              <p>
                Prisca is a second-class upper Division Honors graduate of Niger Delta University. She has years of experience that covers Auditing and financial Accounting. She is also a student member of The Institute of Chartered Accountants of Nigeria (ICAN).
              </p>
              <p>
                Before joining Fodax Nig Ltd, she worked with Real Energy Up and Natony Ltd. She’s in charge of all administrative processes, including new and existing client filing systems and the creation of the master schedule.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section> */}


      <PageLoader />
    </>
  );
}
