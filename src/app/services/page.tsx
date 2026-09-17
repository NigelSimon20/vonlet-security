import type { Metadata } from "next";

import guardsHq from "@/assets/images/guards-hq.jpg";
import { ServiceCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { serviceCategories, services, servicesInCategory } from "@/lib/services";

export const metadata: Metadata = {
  title: "Security Services",
  description:
    "Armed and unarmed guards, undercover officers, cash-in-transit, K9 units, alarms, rapid response, CCTV, access control, guard monitoring and professional training.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything you need to stay protected."
        description={`${services.length} specialist services across four disciplines — combined into a security plan that fits your premises.`}
        image={guardsHq}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <nav aria-label="Service categories" className="mt-10 flex flex-wrap gap-2">
          {serviceCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur transition-colors hover:border-gold-500 hover:text-white"
            >
              {category.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={categoryIndex % 2 === 1 ? "bg-sand-100 py-20 lg:py-28" : "py-20 lg:py-28"}
        >
          <div className="container-x">
            <Reveal className="grid gap-4 border-b border-sand-200 pb-10 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm font-semibold text-gold-600">0{categoryIndex + 1}</span>
                <h2 className="text-3xl font-bold text-navy-950 sm:text-4xl">{category.title}</h2>
              </div>
              <p className="max-w-xl text-muted lg:justify-self-end lg:text-right">{category.description}</p>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesInCategory(category.id).map((service, index) => (
                <Reveal key={service.slug} delay={index * 0.06}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="Not sure what you need?"
        description="Our team will assess your premises and recommend the right combination of guarding, K9 and electronic security."
      />
    </>
  );
}
