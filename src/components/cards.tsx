import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import { cn } from "@/components/ui";
import { formatDate, type Post } from "@/lib/news";
import type { Service } from "@/lib/services";
import { initials, type Person } from "@/lib/team";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-[0_24px_60px_-24px_rgb(37_28_81/0.35)]",
        className,
      )}
    >
      <div className="relative aspect-16/10 overflow-hidden bg-navy-900">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25rem, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-linear-to-t from-navy-950/60 to-transparent" />
        <span className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-2xl bg-gold-500 text-navy-950 shadow-lg">
          <Icon className="size-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="flex items-start justify-between gap-3 text-xl font-bold text-navy-950">
          {service.title}
          <ArrowUpRight className="mt-0.5 size-5 shrink-0 text-navy-900/30 transition-all group-hover:rotate-45 group-hover:text-gold-600" />
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.summary}</p>
      </div>
    </Link>
  );
}

export function PostCard({ post, className }: { post: Post; className?: string }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgb(37_28_81/0.35)]",
        className,
      )}
    >
      <div className="relative aspect-3/2 overflow-hidden bg-navy-900">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25rem, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900 backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 text-xs text-muted">
          <CalendarDays className="size-3.5 text-gold-600" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h3 className="mt-3 text-lg font-bold leading-snug text-navy-950 transition-colors group-hover:text-navy-600">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-navy-700">
          Read story
          <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
        </span>
      </div>
    </Link>
  );
}

export function PersonCard({ person, large = false }: { person: Person; large?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-sand-200 bg-white">
      <div className={cn("relative overflow-hidden bg-navy-800", large ? "aspect-4/5" : "aspect-square")}>
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
            placeholder="blur"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid size-24 place-items-center rounded-full border border-gold-500/40 bg-navy-900 font-display text-3xl font-bold text-gold-400">
              {initials(person.name)}
            </span>
          </div>
        )}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-navy-950/50 to-transparent" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">{person.role}</p>
        <h3 className="mt-2 text-xl font-bold text-navy-950">{person.name}</h3>
        {person.bio && <p className="mt-3 text-sm leading-relaxed text-muted">{person.bio}</p>}
      </div>
    </article>
  );
}
