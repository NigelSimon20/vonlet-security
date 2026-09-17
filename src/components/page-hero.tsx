import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { Eyebrow } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  image?: StaticImageData;
  breadcrumbs: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-16 pt-36 lg:pb-24 lg:pt-48">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="-z-20 object-cover opacity-30"
        />
      )}
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div aria-hidden className="absolute -left-40 top-10 -z-10 size-96 rounded-full bg-gold-500/15 blur-3xl" />

      <div className="container-x">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-8 max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
        {items.map((crumb, index) => (
          <li key={crumb.label} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="size-3" aria-hidden />}
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-white">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-white/80">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
