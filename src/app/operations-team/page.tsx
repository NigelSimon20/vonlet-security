import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase, ShieldHalf, Star } from "lucide-react";

import guardsLineup from "@/assets/images/guards-lineup.jpg";
import mineSiteGuards from "@/assets/images/mine-site-guards.jpg";
import patrolMotorbike from "@/assets/images/patrol-motorbike.jpg";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Operations Team",
  description:
    "Vonlet's operations department is made up of security officers with vast experience, supported by a well-qualified administration team.",
};

const strengths = [
  {
    icon: ShieldHalf,
    title: "Vast field experience",
    text: "Our operations department is made up of security officers who bring vast experience in their respective fields.",
  },
  {
    icon: Star,
    title: "Former government service",
    text: "Some of our officers served with the Government of Zimbabwe and, after retiring, chose to join our organisation.",
  },
  {
    icon: Briefcase,
    title: "Qualified administration",
    text: "Our administration team is well qualified in finance and human resources, keeping operations professional and effective.",
  },
];

export default function OperationsTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Operations team"
        title="Experience you can see on every post."
        description="Seasoned security officers in the field, backed by a professional administration team."
        image={mineSiteGuards}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Operations Team" }]}
      />

      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-32">
        <Reveal className="grid grid-cols-2 gap-4 self-start">
          <div className="relative col-span-2 aspect-4/3 overflow-hidden rounded-4xl">
            <Image
              src={mineSiteGuards}
              alt="Vonlet guards stationed at a mine site"
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
            <Image src={guardsLineup} alt="Uniformed guards" fill sizes="18rem" placeholder="blur" className="object-cover" />
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
            <Image
              src={patrolMotorbike}
              alt="Patrol officer on a motorbike"
              fill
              sizes="18rem"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Who runs operations"
              title="Officers who know the job — because they've done it for years."
            />
          </Reveal>
          <div className="mt-10 space-y-4">
            {strengths.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="flex gap-5 rounded-3xl border border-sand-200 bg-white p-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-navy-800 text-gold-400">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy-950">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Services our team delivers</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-sand-200 bg-white px-3.5 py-1.5 text-sm text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
                  >
                    {service.title}
                    <ArrowUpRight className="size-3.5 opacity-40 transition-all group-hover:rotate-45 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
