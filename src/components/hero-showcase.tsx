"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, RadioTower, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type Slide = {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  image: StaticImageData;
  position?: string;
};

const DURATION = 6500;

export function HeroShowcase({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const bars = useRef<(HTMLSpanElement | null)[]>([]);
  const elapsed = useRef(0);

  // Progress is written straight to the bar elements so the slider doesn't re-render every frame,
  // and pausing on hover resumes from where it stopped.
  useEffect(() => {
    bars.current.forEach((bar, i) => {
      if (bar) bar.style.width = i < index || (i === index && reduce) ? "100%" : i === index ? `${elapsed.current * 100}%` : "0%";
    });
    if (paused || reduce) return;

    let frame = 0;
    const start = performance.now() - elapsed.current * DURATION;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / DURATION);
      elapsed.current = progress;
      const bar = bars.current[index];
      if (bar) bar.style.width = `${progress * 100}%`;
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        elapsed.current = 0;
        setIndex((value) => (value + 1) % slides.length);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [index, paused, reduce, slides.length]);

  const goTo = (i: number) => {
    elapsed.current = 0;
    setIndex(i);
  };

  const slide = slides[index];

  return (
    <div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-white/10 bg-navy-800 shadow-2xl shadow-black/40">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 34rem, 90vw"
              placeholder="blur"
              className="object-cover"
              style={{ objectPosition: slide.position ?? "center" }}
            />
          </motion.div>
        </AnimatePresence>
        <div aria-hidden className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">{slide.eyebrow}</p>
              <Link href={slide.href} className="group mt-2 flex items-start justify-between gap-4">
                <span className="font-display text-2xl font-bold text-white sm:text-3xl">{slide.title}</span>
                <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-950 transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">{slide.text}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 grid grid-cols-3 gap-2" role="tablist" aria-label="Highlighted services">
            {slides.map((item, i) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={item.title}
                onClick={() => goTo(i)}
                className="group relative h-6"
              >
                <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-white/20 transition-colors group-hover:bg-white/35">
                  <span
                    ref={(node) => {
                      bars.current[i] = node;
                    }}
                    className="block h-full w-0 rounded-full bg-gold-500"
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -left-4 top-10 hidden items-center gap-3 rounded-2xl border border-white/10 bg-navy-900/80 px-4 py-3 shadow-xl backdrop-blur-md sm:flex lg:-left-12"
      >
        <span className="grid size-10 place-items-center rounded-xl bg-gold-500/15 text-gold-400">
          <RadioTower className="size-5" />
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-white">Rapid response</span>
          <span className="block text-xs text-white/55">Control room 24/7/365</span>
        </span>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -right-4 top-1/3 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex lg:-right-8"
      >
        <span className="grid size-10 place-items-center rounded-xl bg-navy-700 text-gold-400">
          <ShieldCheck className="size-5" />
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-navy-950">Police-trained</span>
          <span className="block text-xs text-muted">Firearm officers</span>
        </span>
      </motion.div>

    </div>
  );
}
