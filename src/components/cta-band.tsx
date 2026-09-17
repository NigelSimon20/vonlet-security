import Image from "next/image";
import { Phone } from "lucide-react";

import officerSalute from "@/assets/images/officer-salute.jpg";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui";
import { primaryPhone } from "@/lib/site";

export function CtaBand({
  title = "Ready to secure what matters most?",
  description = "Tell us about your premises and we'll recommend the right mix of guards, K9 units and electronic systems — with a free, no-obligation quote.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-x py-20 lg:py-28">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-4xl bg-navy-800 px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 -z-10 size-112 rounded-full bg-gold-500/25 blur-3xl"
          />
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg" arrow>
                  Request a free quote
                </ButtonLink>
                <a
                  href={primaryPhone.href}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-[0.95rem] font-semibold text-white transition-colors hover:border-white/60"
                >
                  <Phone className="size-4 text-gold-400" />
                  {primaryPhone.display}
                </a>
              </div>
            </div>
            <div className="relative hidden h-72 lg:block">
              <Image
                src={officerSalute}
                alt="Vonlet officer saluting"
                fill
                sizes="400px"
                className="rounded-3xl object-cover object-top"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
