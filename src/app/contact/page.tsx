import type { Metadata } from "next";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import guardsLineup from "@/assets/images/guards-lineup.jpg";
import { ContactForm } from "@/components/contact-form";
import { FacebookIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TextLink } from "@/components/ui";
import { branches, directionsUrl, mapEmbedUrl } from "@/lib/branches";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Vonlet Security Services — call ${site.phones[0].display}, email ${site.emails.general} or visit us at ${fullAddress}.`,
};

export default function ContactPage() {
  const headOffice = branches.find((branch) => branch.headOffice)!;

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Reach our security team."
        description="Send us a message using the form below. If your enquiry is time sensitive, please call us directly."
        image={guardsLineup}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-x relative z-10 -mt-8 pb-20 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          <Reveal className="space-y-4">
            <ContactCard icon={Phone} title="Call us">
              <ul className="space-y-1.5">
                {site.phones.map((phone) => (
                  <li key={phone.href}>
                    <a href={phone.href} className="font-semibold text-navy-950 hover:text-gold-600">
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </ContactCard>
            <ContactCard icon={Mail} title="Email us">
              <p>
                General:{" "}
                <a href={`mailto:${site.emails.general}`} className="font-semibold text-navy-950 hover:text-gold-600">
                  {site.emails.general}
                </a>
              </p>
              <p className="mt-1">
                Sales:{" "}
                <a href={`mailto:${site.emails.sales}`} className="font-semibold text-navy-950 hover:text-gold-600">
                  {site.emails.sales}
                </a>
              </p>
            </ContactCard>
            <ContactCard icon={MapPin} title="Head office">
              <p className="font-semibold text-navy-950">{fullAddress}</p>
              <TextLink href="/branches" className="mt-3">
                View all branches
              </TextLink>
            </ContactCard>
            <ContactCard icon={Clock} title="Hours">
              <p className="font-semibold text-navy-950">{site.hours.office}</p>
              <p className="mt-1">{site.hours.closed}</p>
              <p className="mt-3 inline-flex rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-600">
                {site.hours.operations}
              </p>
            </ContactCard>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-4xl border border-sand-200 bg-white p-6 shadow-[0_30px_80px_-40px_rgb(37_28_81/0.35)] sm:p-10">
              <h2 className="text-3xl font-bold text-navy-950">Request a quote or ask a question</h2>
              <p className="mt-3 text-muted">
                Tell us what you need to protect and we&apos;ll recommend the right solution.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-24 lg:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-sand-200 bg-white">
            <div className="relative aspect-4/3 bg-sand-100 sm:aspect-21/9">
              <iframe
                title="Map of the Vonlet Security head office in Queensdale, Harare"
                src={mapEmbedUrl(headOffice)}
                className="absolute inset-0 size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">Visit us</p>
                <p className="mt-1 font-display text-xl font-bold text-navy-950">{fullAddress}</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-sand-200 px-5 text-sm font-semibold text-navy-900 hover:border-gold-500"
                >
                  <FacebookIcon className="size-4" />
                  Facebook
                </a>
                <a
                  href={directionsUrl(headOffice)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-navy-900 px-5 text-sm font-semibold text-white hover:bg-navy-700"
                >
                  Directions
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 rounded-3xl border border-sand-200 bg-white p-6">
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-navy-800 text-gold-400">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0 text-sm text-muted">
        <h2 className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-muted">{title}</h2>
        {children}
      </div>
    </div>
  );
}
