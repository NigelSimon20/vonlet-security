import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Check, MapPin, Quote, RadioTower, Siren, Truck } from "lucide-react";

import cctvImage from "@/assets/images/cctv.jpg";
import k9Harness from "@/assets/images/k9-harness.jpg";
import officeReception from "@/assets/images/office-reception.jpg";
import responseVehicles from "@/assets/images/response-vehicles.jpg";
import teamParade from "@/assets/images/team-parade.jpg";
import teamSalute from "@/assets/images/team-salute.jpg";
import { PostCard, ServiceCard } from "@/components/cards";
import { Counter } from "@/components/counter";
import { CtaBand } from "@/components/cta-band";
import { HeroShowcase, type Slide } from "@/components/hero-showcase";
import { Reveal } from "@/components/reveal";
import { ButtonLink, Eyebrow, SectionHeading, TextLink } from "@/components/ui";
import { branches } from "@/lib/branches";
import { posts } from "@/lib/news";
import { getService, services } from "@/lib/services";
import { recruitmentSteps, site, testimonials, values, yearsInService } from "@/lib/site";

const heroSlides: Slide[] = [
  {
    eyebrow: "Welcome to Vonlet Security",
    title: "Armed & unarmed guards",
    text: "Static or roving officers, with firearm training delivered in collaboration with the police.",
    href: "/services/armed-guards",
    image: teamSalute,
  },
  {
    eyebrow: "At your convenience",
    title: "Trained service dogs",
    text: "Watch, attack and sniffer dogs that assist guards and law enforcement officers.",
    href: "/services/dog-services",
    image: k9Harness,
    position: "35% center",
  },
  {
    eyebrow: "Core services include",
    title: "Cash-in-transit",
    text: "Managed cash collection with task assignment, route selection and accounting of all books.",
    href: "/services/cash-in-transit",
    image: responseVehicles,
    position: "center 30%",
  },
];

const featured = [
  "armed-guards",
  "unarmed-guards",
  "dog-services",
  "secret-service",
  "rapid-response-systems",
  "guard-monitoring-systems",
].map((slug) => getService(slug)!);

const stats = [
  { value: yearsInService, suffix: "+", label: "Years protecting clients" },
  { value: branches.length, label: "Branches in two countries" },
  { value: services.length, label: "Specialist security services" },
  { value: 24, suffix: "/7", label: "Control room operations" },
];

const responseFlow = [
  { icon: Siren, title: "Alarm triggered", text: "A break-in sets off your linked alarm system." },
  { icon: RadioTower, title: "Control room alerted", text: "A report is relayed instantly to our control room." },
  { icon: Truck, title: "Team dispatched", text: "Our reaction team responds and inspects your premises." },
];

const marqueeItems = services.map((service) => service.title);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-32 lg:pb-28 lg:pt-44">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div aria-hidden className="absolute -left-32 -top-32 -z-10 size-144 rounded-full bg-navy-600/40 blur-3xl" />
        <div aria-hidden className="absolute -right-20 bottom-0 -z-10 size-120 rounded-full bg-gold-500/15 blur-3xl" />

        <div className="container-x grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 text-xs font-medium text-white/75">
                <span className="rounded-full bg-gold-500 px-2.5 py-0.5 font-semibold text-navy-950">Since {site.founded}</span>
                Operating in Zimbabwe & Zambia
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-7 text-5xl font-extrabold leading-[0.98] text-white sm:text-6xl xl:text-7xl">
                Security that <span className="text-gold-400">never</span> stands down.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
                Highly trained guards, K9 units, rapid response and electronic security systems — delivered by one of the
                region&apos;s leading indigenous-owned security companies.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg" arrow>
                  Request a free quote
                </ButtonLink>
                <ButtonLink href="/services" size="lg" variant="outline-light">
                  Explore our services
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <ul className="mt-12 grid max-w-xl gap-x-6 gap-y-3 text-sm text-white/65 sm:grid-cols-2">
                {[
                  "Firearm training with ZRP & Zambia Police",
                  "Every guard vetted before training",
                  "Rapid response control room",
                  "Six branches across two countries",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <BadgeCheck className="size-4.5 shrink-0 text-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={40}>
            <HeroShowcase slides={heroSlides} />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-10">
        <div className="container-x">
          <Reveal>
            <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-[0_30px_80px_-40px_rgb(37_28_81/0.45)] lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-1 p-6 sm:p-8 ${index % 2 === 1 ? "border-l" : ""} ${index > 1 ? "border-t lg:border-t-0" : ""} ${index === 2 ? "lg:border-l" : ""} border-sand-200`}
                >
                  <dt className="order-2 text-sm text-muted">{stat.label}</dt>
                  <dd className="order-1 font-display text-4xl font-extrabold text-navy-800 sm:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <Reveal className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-4xl">
            <Image
              src={teamParade}
              alt="Vonlet guards on parade"
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 right-4 w-2/5 overflow-hidden rounded-3xl border-8 border-sand-50 shadow-xl sm:right-8">
            <Image
              src={officeReception}
              alt="Vonlet staff at the head office"
              sizes="16rem"
              placeholder="blur"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -left-3 top-8 rounded-2xl bg-navy-800 px-5 py-4 text-white shadow-xl sm:-left-6">
            <p className="font-display text-3xl font-extrabold text-gold-400">{site.founded}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-white/60">Established</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Who we are"
            title="A powerhouse among indigenous-owned security companies."
            description="Vonlet Security excels at offering clients efficient and reliable services. We are devoted to broadening, maintaining and constantly researching versatile ways to tailor our protection to every client's needs."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {values.map((value) => (
              <li
                key={value}
                className="flex items-center gap-2 rounded-full border border-sand-200 bg-white px-4 py-2 text-sm font-medium text-navy-900"
              >
                <Check className="size-4 text-gold-600" />
                {value}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ButtonLink href="/about" variant="dark" arrow>
              More about us
            </ButtonLink>
            <TextLink href="/leadership">Meet our leadership</TextLink>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="relative bg-sand-100 py-24 lg:py-32">
        <div aria-hidden className="bg-grid-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
        <div className="container-x relative">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Our services"
                title="Protection built around your site, your risks and your people."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ButtonLink href="/services" variant="outline" arrow>
                All {services.length} services
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-white/10 bg-navy-800 py-5" aria-hidden>
        <div className="flex w-max animate-marquee gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="flex items-center gap-10 font-display text-xl font-semibold text-white/80">
              {item}
              <span className="size-2 rotate-45 bg-gold-500" />
            </span>
          ))}
        </div>
      </div>

      {/* Integrated solutions */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 lg:py-32">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-70" />
        <div aria-hidden className="absolute -right-40 top-20 -z-10 size-136 rounded-full bg-navy-600/40 blur-3xl" />
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Integrated solutions & systems"
              title="Experts in security systems, including CCTV monitoring."
              description="We install, maintain and monitor security equipment such as CCTV systems, video cameras, building monitors, entry alarms, metal detectors and movement and occupancy sensors."
            />
            <ol className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {[
                { slug: "intruder-alarm-systems", label: "Alarm systems" },
                { slug: "rapid-response-systems", label: "Rapid response" },
                { slug: "cctv", label: "CCTV systems" },
                { slug: "access-control-systems", label: "Access control" },
              ].map((item, index) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group flex items-center gap-6 py-5 text-white transition-colors hover:text-gold-400"
                  >
                    <span className="font-display text-sm font-semibold text-gold-500">0{index + 1}</span>
                    <span className="font-display text-2xl font-semibold">{item.label}</span>
                    <ArrowRight className="ml-auto size-5 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-4xl border border-white/10">
              <Image
                src={cctvImage}
                alt="CCTV camera mounted on a wall"
                sizes="(min-width: 1024px) 38rem, 100vw"
                placeholder="blur"
                className="aspect-3/4 w-full object-cover grayscale sm:aspect-square"
              />
              <div aria-hidden className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                <span className="size-2 animate-pulse rounded-full bg-red-500" />
                LIVE · Control room
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Rapid response</p>
                <ol className="mt-4 grid gap-3 sm:grid-cols-3">
                  {responseFlow.map((step) => (
                    <li key={step.title} className="rounded-2xl border border-white/10 bg-navy-900/70 p-4 backdrop-blur-md">
                      <step.icon className="size-5 text-gold-400" />
                      <p className="mt-3 text-sm font-semibold text-white">{step.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-white/55">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recruitment */}
      <section className="container-x py-24 lg:py-32">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we recruit"
            title="Every officer earns their place."
            description="The steps followed in our recruitment process make sure only the right people wear the Vonlet uniform."
          />
        </Reveal>
        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-linear-to-r from-transparent via-gold-500/50 to-transparent lg:block" />
          {recruitmentSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="relative h-full rounded-3xl border border-sand-200 bg-white p-7">
                <span className="relative grid size-14 place-items-center rounded-2xl bg-navy-800 font-display text-lg font-bold text-gold-400">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <TextLink href="/services/basic-security-guard-training">See how we vet and train guards</TextLink>
        </Reveal>
      </section>

      {/* Branches + testimonials */}
      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container-x grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="relative isolate h-full overflow-hidden rounded-4xl bg-navy-800 p-8 sm:p-10">
              <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
              <div aria-hidden className="absolute -bottom-20 -right-20 -z-10 size-80 rounded-full bg-gold-500/20 blur-3xl" />
              <Eyebrow>Branch network</Eyebrow>
              <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                Wherever you operate, we&apos;re close by.
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {branches.map((branch) => (
                  <li key={branch.id}>
                    <Link
                      href={`/branches?branch=${branch.id}`}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 p-4 transition-colors hover:border-gold-500/50 hover:bg-white/6"
                    >
                      <span className="grid size-10 place-items-center rounded-xl bg-gold-500/15 text-gold-400">
                        {branch.headOffice ? <Building2 className="size-5" /> : <MapPin className="size-5" />}
                      </span>
                      <span className="leading-tight">
                        <span className="block font-semibold text-white">{branch.city}</span>
                        <span className="block text-xs text-white/50">
                          {branch.headOffice ? "Head office" : branch.country}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ButtonLink href="/branches" variant="primary" className="mt-8" arrow>
                Locate a branch
              </ButtonLink>
            </div>
          </Reveal>

          <div className="grid gap-8">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.1}>
                <figure className="flex h-full flex-col rounded-4xl border border-sand-200 bg-white p-8 sm:p-10">
                  <Quote className="size-9 fill-gold-500 text-gold-500" />
                  <blockquote className="mt-5 font-display text-xl font-medium leading-snug text-navy-950 sm:text-2xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 pt-8">
                    <span className="grid size-11 place-items-center rounded-full bg-navy-800 text-sm font-bold text-gold-400">
                      {testimonial.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <span className="leading-tight">
                      <span className="block font-semibold text-navy-950">{testimonial.name}</span>
                      <span className="block text-sm text-muted">{testimonial.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="container-x pt-24 lg:pt-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading eyebrow="Local & global news" title="News and stories on security." />
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href="/news" variant="outline" arrow>
              View all news
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
