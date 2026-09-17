"use client";

import { Building2, Clock, Mail, MapPin, Navigation } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/components/ui";
import { branches, branchHours, directionsUrl, mapEmbedUrl } from "@/lib/branches";
import { site } from "@/lib/site";

export function BranchExplorer() {
  const [activeId, setActiveId] = useState(branches[0].id);

  // Links such as /branches?branch=bulawayo open on that branch.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("branch");
    if (requested && branches.some((branch) => branch.id === requested)) setActiveId(requested);
  }, []);
  const active = branches.find((branch) => branch.id === activeId) ?? branches[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[26rem_1fr]">
      <ul className="space-y-3" aria-label="Branches">
        {branches.map((branch) => {
          const selected = branch.id === active.id;
          return (
            <li key={branch.id}>
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveId(branch.id)}
                className={cn(
                  "flex w-full items-start gap-4 rounded-3xl border p-5 text-left transition-all",
                  selected
                    ? "border-navy-800 bg-navy-800 text-white shadow-[0_20px_50px_-24px_rgb(37_28_81/0.7)]"
                    : "border-sand-200 bg-white hover:border-gold-500/60",
                )}
              >
                <span
                  className={cn(
                    "grid size-11 shrink-0 place-items-center rounded-2xl",
                    selected ? "bg-gold-500 text-navy-950" : "bg-sand-100 text-gold-600",
                  )}
                >
                  {branch.headOffice ? <Building2 className="size-5" /> : <MapPin className="size-5" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className={cn("font-display text-lg font-bold", selected ? "text-white" : "text-navy-950")}>
                      {branch.city}
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider",
                        selected ? "bg-white/10 text-gold-300" : "bg-sand-100 text-muted",
                      )}
                    >
                      {branch.headOffice ? "Head office" : branch.country}
                    </span>
                  </span>
                  <span className={cn("mt-1 block text-sm", selected ? "text-white/65" : "text-muted")}>
                    {branch.address}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col overflow-hidden rounded-4xl border border-sand-200 bg-white lg:sticky lg:top-28 lg:self-start">
        <div className="relative aspect-4/3 bg-sand-100 sm:aspect-16/10">
          <iframe
            key={active.id}
            title={`Map showing ${active.name}, ${active.city}`}
            src={mapEmbedUrl(active)}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">{active.name}</p>
            <h2 className="mt-2 text-2xl font-bold text-navy-950">
              {active.city}, {active.country}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-600" />
                {active.address}, {active.city}
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold-600" />
                {branchHours}
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold-600" />
                <a href={`mailto:${site.emails.general}`} className="hover:text-navy-700">
                  {site.emails.general}
                </a>
              </li>
            </ul>
          </div>
          <a
            href={directionsUrl(active)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            <Navigation className="size-4 text-gold-400" />
            Get directions
          </a>
        </div>
      </div>
    </div>
  );
}
