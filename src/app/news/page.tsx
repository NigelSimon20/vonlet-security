import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import cctv from "@/assets/images/cctv.jpg";
import { PostCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { formatDate, posts } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "News, stories and insights from Vonlet Security Services.",
};

export default function NewsPage() {
  const [latest, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="News & stories"
        title="Local & global news on security."
        description="Company news, team stories and practical insight from our officers, handlers and technicians."
        image={cctv}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <section className="container-x py-20 lg:py-28">
        <Reveal>
          <Link
            href={`/news/${latest.slug}`}
            className="group grid overflow-hidden rounded-4xl border border-sand-200 bg-white transition-shadow hover:shadow-[0_30px_80px_-40px_rgb(37_28_81/0.45)] lg:grid-cols-2"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-navy-900 lg:aspect-auto lg:min-h-104">
              <Image
                src={latest.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 40rem, 100vw"
                placeholder="blur"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="flex flex-wrap items-center gap-3 text-sm text-muted">
                <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-600">Latest</span>
                <span>{latest.category}</span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3.5 text-gold-600" />
                  <time dateTime={latest.date}>{formatDate(latest.date)}</time>
                </span>
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-navy-950 sm:text-4xl">{latest.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{latest.excerpt}</p>
              <span className="mt-8 flex items-center gap-2 font-semibold text-navy-700">
                Read the story
                <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
