import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { FacebookIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { aboutLinks } from "@/lib/navigation";
import { services } from "@/lib/services";
import { fullAddress, site } from "@/lib/site";

const featuredServices = [
  "armed-guards",
  "unarmed-guards",
  "dog-services",
  "rapid-response-systems",
  "cctv",
  "guard-monitoring-systems",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/60">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:py-20">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            An indigenous-owned security company delivering efficient and reliable protection since {site.founded}, with
            branches spread across Zimbabwe and Zambia.
          </p>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-gold-500 hover:text-white"
          >
            <FacebookIcon className="size-4" />
            Follow us on Facebook
          </a>
        </div>

        <FooterColumn title="Services">
          {featuredServices.map((slug) => {
            const service = services.find((item) => item.slug === slug)!;
            return (
              <FooterLink key={slug} href={`/services/${slug}`}>
                {service.title}
              </FooterLink>
            );
          })}
          <FooterLink href="/services">All services</FooterLink>
        </FooterColumn>

        <FooterColumn title="Company">
          {aboutLinks.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
          <FooterLink href="/gallery">Gallery</FooterLink>
          <FooterLink href="/news">News</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterColumn>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">Head office</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-500" />
              {fullAddress}, {site.address.country}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold-500" />
              <span className="flex flex-col gap-1">
                {site.phones.slice(0, 2).map((phone) => (
                  <a key={phone.href} href={phone.href} className="hover:text-white">
                    {phone.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold-500" />
              <span className="flex flex-col gap-1">
                <a href={`mailto:${site.emails.general}`} className="hover:text-white">
                  {site.emails.general}
                </a>
                <a href={`mailto:${site.emails.sales}`} className="hover:text-white">
                  {site.emails.sales}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.hours.operations}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-gold-400">
        {children}
      </Link>
    </li>
  );
}
