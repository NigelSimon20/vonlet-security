import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Handshake, HeartHandshake, Lightbulb, Medal, ScanSearch, Target, Users } from "lucide-react";

import guardsHq from "@/assets/images/guards-hq.jpg";
import hqSignage from "@/assets/images/hq-signage.jpg";
import officersInspection from "@/assets/images/officers-inspection.jpg";
import teamSalute from "@/assets/images/team-salute.jpg";
import { PersonCard } from "@/components/cards";
import { Counter } from "@/components/counter";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { branches } from "@/lib/branches";
import { services } from "@/lib/services";
import { site, yearsInService } from "@/lib/site";
import { directorate } from "@/lib/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 2010, Vonlet Security has grown into a powerhouse among indigenous-owned security companies, operating across Zimbabwe and Zambia.",
};

const valueCards = [
  { icon: Medal, title: "Professionalism", text: "Disciplined, vetted and well-trained officers on every post." },
  { icon: Lightbulb, title: "Innovation", text: "Constantly researching better ways to protect our clients." },
  { icon: ScanSearch, title: "Transparency", text: "Clear reporting and honest communication with every client." },
  { icon: HeartHandshake, title: "Excellent service standards", text: "A customer-centric approach from enquiry to deployment." },
  { icon: Users, title: "Team work", text: "Guards, handlers, control room and management working as one." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vonlet Security"
        title="Operating in Zimbabwe & Zambia since 2010."
        description="An indigenous-owned security company that has made enormous strides in the industry — and established itself as a force to reckon with."
        image={teamSalute}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Story */}
      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Our story"
            title="Best security provider in the Southern Africa region — and growing stronger."
          />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Vonlet Security is a security provision company that excels at offering clients efficient and reliable
              services. The company has made enormous strides in the security industry and has established itself as a
              powerhouse amongst indigenous-owned security companies.
            </p>
            <p>
              We are devoted to broadening, maintaining and constantly researching versatile ways to tailor our services
              to any client&apos;s needs. Our strength lies in the enthusiasm we maintain and the maximum effort we put in
              when dealing with our clients.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-sand-200 pt-8">
            {[
              { value: yearsInService, suffix: "+", label: "Years" },
              { value: branches.length, label: "Branches" },
              { value: services.length, label: "Services" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
                <dd className="font-display text-4xl font-extrabold text-navy-800">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-16/9 overflow-hidden rounded-4xl">
            <Image
              src={hqSignage}
              alt="Vonlet Security signage at the Harare head office"
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src={officersInspection}
              alt="Senior officers inspecting guards"
              fill
              sizes="20rem"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src={guardsHq}
              alt="Guards outside the head office"
              fill
              sizes="20rem"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Mission & vision */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 lg:py-32">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div aria-hidden className="absolute left-1/2 top-0 -z-10 size-160 -translate-x-1/2 rounded-full bg-navy-600/40 blur-3xl" />
        <div className="container-x">
          <Reveal>
            <SectionHeading dark align="center" eyebrow="What we represent" title="Our business, our purpose." />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Our mission",
                text: "To be the most customer-centric establishment and to offer the best quality services. We are tirelessly committed to maintaining high ethical standards, and to assisting the government in fighting crime to ensure the safety of the community.",
              },
              {
                icon: Handshake,
                title: "Our business",
                text: "To supply security services, protective clothing and related products, and ensure our clients' property is well protected and safe. Technical experts provide a 24/7/365 protection service, supported by a dedicated customer service division.",
              },
              {
                icon: Eye,
                title: "Our vision",
                text: "To become a well-recognised, outstanding, preferred and sought-after security provider in the Southern Africa region.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="h-full rounded-4xl border border-white/10 bg-white/3 p-8 backdrop-blur sm:p-10">
                  <span className="grid size-14 place-items-center rounded-2xl bg-gold-500 text-navy-950">
                    <item.icon className="size-6" />
                  </span>
                  <h3 className="mt-7 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-white/65">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Core values"
            title="The standards every Vonlet officer lives by."
            description="Five values guide how we recruit, train, deploy and serve."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {valueCards.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <article className="group h-full rounded-3xl border border-sand-200 bg-white p-6 transition-colors hover:border-gold-500/50">
                <value.icon className="size-7 text-gold-600" />
                <h3 className="mt-5 text-lg font-bold text-navy-950">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Leadership preview */}
      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHeading eyebrow="Leadership" title="Our directorate & executive." />
            </Reveal>
            <Reveal delay={0.1}>
              <ButtonLink href="/leadership" variant="outline" arrow>
                Meet the full team
              </ButtonLink>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {directorate.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <PersonCard person={person} large />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Trusted protection since ${site.founded}.`}
        description="Talk to our team about guarding, K9, rapid response or electronic security for your home, business or site."
      />
    </>
  );
}
