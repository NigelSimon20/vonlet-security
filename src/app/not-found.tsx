import { ShieldAlert } from "lucide-react";

import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-navy-950 pb-20 pt-40">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-gold-500 text-navy-950">
          <ShieldAlert className="size-8" />
        </span>
        <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">Error 404</p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl">This area is off limits.</h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="outline-light">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
