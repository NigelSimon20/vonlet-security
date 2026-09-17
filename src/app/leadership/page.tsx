import type { Metadata } from "next";

import officersInspection from "@/assets/images/officers-inspection.jpg";
import { PersonCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { directorate, management } from "@/lib/team";

export const metadata: Metadata = {
  title: "Directorate & Management",
  description: "Meet the directorate, executive and management team leading Vonlet Security Services.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The people behind the uniform."
        description="Experienced leaders guiding Vonlet's operations, training and client service across Zimbabwe and Zambia."
        image={officersInspection}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Leadership" }]}
      />

      <section id="directorate" className="container-x py-24 lg:py-32">
        <Reveal>
          <SectionHeading eyebrow="Directorate & executive" title="Setting the direction." />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {directorate.map((person, index) => (
            <Reveal key={person.name} delay={index * 0.08}>
              <PersonCard person={person} large />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="management" className="bg-sand-100 py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Management"
              title="Leading security, training and administration."
              description="Our management team oversees daily security operations, officer training and the administration that keeps every branch running."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {management.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <PersonCard person={person} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
