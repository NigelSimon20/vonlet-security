import type { Metadata } from "next";

import hqSignage from "@/assets/images/hq-signage.jpg";
import { BranchExplorer } from "@/components/branch-explorer";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Branch Locator",
  description:
    "Find a Vonlet Security branch near you — Harare, Bulawayo, Rusape, Hwange, Beitbridge and Lusaka, Zambia.",
};

export default function BranchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Branch locator"
        title="Local teams across Zimbabwe and Zambia."
        description="Offices in Harare, Bulawayo, Rusape, Hwange and Beitbridge, plus a branch in Lusaka, Zambia — so help is never far away."
        image={hqSignage}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Branches" }]}
      />

      <section className="container-x py-20 lg:py-28">
        <Reveal>
          <BranchExplorer />
        </Reveal>
      </section>

      <CtaBand
        title="Need security in a new location?"
        description="Our branch network lets us deploy guards, K9 units and response teams wherever your business operates."
      />
    </>
  );
}
