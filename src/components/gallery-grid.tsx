"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/components/ui";
import type { GalleryImage } from "@/lib/gallery";

export function GalleryGrid({ images, categories }: { images: GalleryImage[]; categories?: readonly string[] }) {
  const [filter, setFilter] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = filter === "All" ? images : images.filter((image) => image.category === filter);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (direction: 1 | -1) =>
      setOpenIndex((index) => (index === null ? null : (index + direction + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <>
      {categories && (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
          {["All", ...categories].map((category) => {
            const count =
              category === "All" ? images.length : images.filter((image) => image.category === category).length;
            const active = filter === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-navy-800 bg-navy-800 text-white"
                    : "border-sand-200 bg-white text-navy-900 hover:border-gold-500",
                )}
              >
                {category}
                <span className={cn("text-xs", active ? "text-gold-300" : "text-muted")}>{count}</span>
              </button>
            );
          })}
        </div>
      )}

      <ul key={filter} className={cn("columns-2 gap-3 sm:gap-4 md:columns-3 xl:columns-4", categories && "mt-10")}>
        {visible.map((image, index) => (
          <motion.li
            key={image.src.src}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index, 12) * 0.03 }}
            className="mb-3 break-inside-avoid sm:mb-4"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-sand-200"
              aria-label={`Open photo: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                sizes="(min-width: 1280px) 20rem, (min-width: 768px) 33vw, 50vw"
                placeholder="blur"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end justify-between bg-linear-to-t from-navy-950/70 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-left text-xs font-medium text-white">{image.category}</span>
                <Expand className="size-4 text-white" />
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {current && openIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-10"
            onClick={close}
          >
            <motion.div
              key={current.src.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative flex max-h-full max-w-5xl flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                sizes="(min-width: 1024px) 64rem, 100vw"
                placeholder="blur"
                className="h-auto max-h-[78vh] w-auto rounded-2xl object-contain"
              />
              <p className="mt-4 text-center text-sm text-white/70">
                {current.alt}
                <span className="ml-3 text-white/40">
                  {openIndex + 1} / {visible.length}
                </span>
              </p>
            </motion.div>

            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close"
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
            {visible.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
