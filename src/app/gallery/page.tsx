import type { Metadata } from "next";

import teamParade from "@/assets/images/team-parade.jpg";
import { CtaBand } from "@/components/cta-band";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { gallery, galleryCategories } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of Vonlet Security officers, K9 units, operations and team events.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Vonlet, on and off duty."
        description="Our officers, K9 units and operations — plus the moments we share as a team."
        image={teamParade}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <section className="container-x py-20 lg:py-24">
        <GalleryGrid images={gallery} categories={galleryCategories} />
      </section>
      <CtaBand />
    </>
  );
}
