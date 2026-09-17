import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, Check, Clock } from "lucide-react";

import { PostCard, ServiceCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { GalleryGrid } from "@/components/gallery-grid";
import { FacebookIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { Breadcrumbs } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { formatDate, getPost, posts, type Post } from "@/lib/news";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image.src, width: post.image.width, height: post.image.height }],
    },
  };
}

function readingTime(post: Post) {
  const words = post.body
    .map((block) => (block.type === "ul" ? block.items.join(" ") : block.text))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${site.url}/news/${post.slug}`;
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const service = post.relatedService ? getService(post.relatedService) : undefined;
  const share = [
    { label: "Share on Facebook", icon: FacebookIcon, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: "Share on WhatsApp", icon: WhatsAppIcon, href: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}` },
    { label: "Share on LinkedIn", icon: LinkedInIcon, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 pb-40 pt-36 lg:pb-56 lg:pt-48">
        <div aria-hidden className="absolute -left-32 top-10 -z-10 size-96 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="container-x">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }, { label: post.title }]} />
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <Eyebrow className="justify-center">{post.category}</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-white sm:text-5xl">{post.title}</h1>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CalendarDays className="size-4 text-gold-400" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="size-4 text-gold-400" />
                {readingTime(post)} min read
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="container-x -mt-28 lg:-mt-40">
        <Reveal>
          <div className="relative mx-auto aspect-16/9 max-w-5xl overflow-hidden rounded-4xl border-8 border-sand-50 bg-navy-900 shadow-2xl">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 64rem, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <article className="container-x py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[3.5rem_1fr]">
          <aside className="order-2 lg:order-1">
            <div className="flex items-center gap-2 lg:sticky lg:top-28 lg:flex-col">
              <span className="mr-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted lg:mb-2 lg:mr-0">Share</span>
              {share.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid size-11 place-items-center rounded-full border border-sand-200 bg-white text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-600"
                >
                  <item.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </aside>

          <div className="order-1 max-w-3xl lg:order-2">
            <p className="font-display text-2xl leading-snug text-navy-950">{post.excerpt}</p>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-navy-900/80">
              {post.body.map((block, index) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={index} className="pt-4 text-2xl font-bold text-navy-950 sm:text-3xl">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={index} className="space-y-3">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-600">
                            <Check className="size-3" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={index}>{block.text}</p>;
              })}
            </div>

            {service && (
              <div className="mt-12 rounded-3xl border border-sand-200 bg-sand-100 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Related service</p>
                <div className="mt-4 max-w-sm">
                  <ServiceCard service={service} />
                </div>
              </div>
            )}
          </div>
        </div>

        {post.photos && (
          <div className="mx-auto mt-16 max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold text-navy-950 sm:text-3xl">The day in pictures</h2>
            <GalleryGrid
              images={post.photos.map((src, index) => ({
                src,
                alt: `${post.title}, photo ${index + 1}`,
                category: "Golf Day 2024",
              }))}
            />
          </div>
        )}
      </article>

      <section className="bg-sand-100 py-20 lg:py-28">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-navy-950 sm:text-4xl">More stories</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06}>
                <PostCard post={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
