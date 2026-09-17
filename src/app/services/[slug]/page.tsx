import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";

import { ServiceCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { Breadcrumbs } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ButtonLink, cn, Eyebrow } from "@/components/ui";
import { getService, serviceCategories, services, servicesInCategory } from "@/lib/services";
import { primaryPhone, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    openGraph: { images: [{ url: service.image.src, width: service.image.width, height: service.image.height }] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const category = serviceCategories.find((item) => item.id === service.category)!;
  const related = servicesInCategory(service.category).filter((item) => item.slug !== service.slug);
  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950 pb-16 pt-32 lg:pb-24 lg:pt-44">
        <div aria-hidden className="absolute -right-32 top-0 -z-10 size-128 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="container-x">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: category.title, href: `/services#${category.id}` },
              { label: service.title },
            ]}
          />

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Reveal>
              <span className="grid size-16 place-items-center rounded-2xl bg-gold-500 text-navy-950 shadow-[0_12px_40px_-8px_rgb(215_151_53/0.6)]">
                <Icon className="size-8" />
              </span>
              <Eyebrow className="mt-8">{category.title}</Eyebrow>
              <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">{service.summary}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`/contact?service=${service.slug}`} size="lg" arrow>
                  Get a quote
                </ButtonLink>
                <a
                  href={primaryPhone.href}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-[0.95rem] font-semibold text-white transition-colors hover:border-white/60"
                >
                  <Phone className="size-4 text-gold-400" />
                  {primaryPhone.display}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-4/3 overflow-hidden rounded-4xl border border-white/10 bg-navy-800">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container-x grid gap-14 py-20 lg:grid-cols-[1fr_22rem] lg:gap-20 lg:py-28">
        <div className="min-w-0">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-navy-900/80">
              {service.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">What you get</h2>
            <div
              className={cn(
                "mt-6 grid gap-4",
                service.highlights.length === 2 || service.highlights.length === 4 ? "sm:grid-cols-2" : "sm:grid-cols-3",
              )}
            >
              {service.highlights.map((item) => (
                <article key={item.title} className="rounded-3xl border border-sand-200 bg-white p-6">
                  <span className="grid size-9 place-items-center rounded-full bg-gold-100 text-gold-600">
                    <Check className="size-4.5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy-950">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </Reveal>

          {service.steps && (
            <Reveal className="mt-14">
              <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">{service.steps.heading}</h2>
              <ol className="mt-8 space-y-0">
                {service.steps.items.map((step, index, all) => (
                  <li key={step.title} className="relative flex gap-6 pb-8 last:pb-0">
                    {index < all.length - 1 && (
                      <span aria-hidden className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-sand-200" />
                    )}
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-navy-800 font-display font-bold text-gold-400">
                      {index + 1}
                    </span>
                    <div className="pt-2.5">
                      <h3 className="text-lg font-bold text-navy-950">{step.title}</h3>
                      <p className="mt-1 leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          )}

          {service.details && (
            <Reveal className="mt-14">
              <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">{service.details.heading}</h2>
              <div className="mt-6 divide-y divide-sand-200 rounded-3xl border border-sand-200 bg-white">
                {service.details.items.map((item) => (
                  <div key={item.title} className="grid gap-2 p-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
                    <h3 className="font-bold text-navy-950">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {(service.list || service.deployments) && (
            <Reveal className="mt-14 grid gap-6 sm:grid-cols-2">
              {service.list && (
                <div className="rounded-3xl bg-navy-800 p-7 text-white">
                  <h2 className="text-xl font-bold">{service.list.heading}</h2>
                  {service.list.lead && <p className="mt-2 text-sm text-white/60">{service.list.lead}</p>}
                  <ul className="mt-5 space-y-2.5">
                    {service.list.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <Check className="size-4 text-gold-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {service.deployments && (
                <div className="rounded-3xl border border-sand-200 bg-white p-7">
                  <h2 className="text-xl font-bold text-navy-950">Where we deploy</h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.deployments.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 rounded-full bg-sand-100 px-3.5 py-1.5 text-sm text-navy-900"
                      >
                        <MapPin className="size-3.5 text-gold-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="All services" className="rounded-3xl border border-sand-200 bg-white p-3">
            <p className="px-3 pb-2 pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">All services</p>
            <ul>
              {services.map((item) => {
                const active = item.slug === service.slug;
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                        active ? "bg-navy-800 font-semibold text-white" : "text-navy-900 hover:bg-sand-100",
                      )}
                    >
                      <item.icon className={cn("size-4", active ? "text-gold-400" : "text-gold-600")} />
                      {item.title}
                      <ArrowUpRight
                        className={cn(
                          "ml-auto size-3.5 transition-opacity",
                          active ? "opacity-0" : "opacity-0 group-hover:opacity-60",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 p-7 text-white">
            <div aria-hidden className="absolute -right-10 -top-10 -z-10 size-40 rounded-full bg-gold-500/25 blur-2xl" />
            <h2 className="text-xl font-bold">Have questions?</h2>
            <p className="mt-2 text-sm text-white/60">Speak to our team about {service.title}.</p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={primaryPhone.href} className="flex items-center gap-3 hover:text-gold-300">
                <Phone className="size-4 text-gold-400" />
                {primaryPhone.display}
              </a>
              <a href={`mailto:${site.emails.sales}`} className="flex items-center gap-3 hover:text-gold-300">
                <Mail className="size-4 text-gold-400" />
                {site.emails.sales}
              </a>
            </div>
            <ButtonLink href={`/contact?service=${service.slug}`} className="mt-6 w-full" arrow>
              Book an appointment
            </ButtonLink>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-sand-100 py-20 lg:py-28">
          <div className="container-x">
            <Reveal>
              <Eyebrow>More in {category.title}</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold text-navy-950 sm:text-4xl">Related services</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.06}>
                  <ServiceCard service={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
