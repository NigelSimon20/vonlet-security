import type { StaticImageData } from "next/image";

import golf01 from "@/assets/images/gallery/golf-day-01.jpg";
import golf02 from "@/assets/images/gallery/golf-day-02.jpg";
import golf03 from "@/assets/images/gallery/golf-day-03.jpg";
import golf04 from "@/assets/images/gallery/golf-day-04.jpg";
import golf05 from "@/assets/images/gallery/golf-day-05.jpg";
import golf06 from "@/assets/images/gallery/golf-day-06.jpg";
import golf07 from "@/assets/images/gallery/golf-day-07.jpg";
import golf08 from "@/assets/images/gallery/golf-day-08.jpg";
import golf09 from "@/assets/images/gallery/golf-day-09.jpg";
import golf10 from "@/assets/images/gallery/golf-day-10.jpg";
import golf11 from "@/assets/images/gallery/golf-day-11.jpg";
import golf12 from "@/assets/images/gallery/golf-day-12.jpg";
import golf13 from "@/assets/images/gallery/golf-day-13.jpg";
import golf14 from "@/assets/images/gallery/golf-day-14.jpg";
import golf15 from "@/assets/images/gallery/golf-day-15.jpg";
import golf16 from "@/assets/images/gallery/golf-day-16.jpg";
import golf17 from "@/assets/images/gallery/golf-day-17.jpg";
import golf18 from "@/assets/images/gallery/golf-day-18.jpg";
import golf19 from "@/assets/images/gallery/golf-day-19.jpg";
import golf20 from "@/assets/images/gallery/golf-day-20.jpg";
import armedGuard from "@/assets/images/armed-guard.jpg";
import guardsBranded from "@/assets/images/guards-branded.jpg";
import guardsHq from "@/assets/images/guards-hq.jpg";
import guardsLineup from "@/assets/images/guards-lineup.jpg";
import hqSignage from "@/assets/images/hq-signage.jpg";
import k9Harness from "@/assets/images/k9-harness.jpg";
import k9Portrait from "@/assets/images/k9-portrait.jpg";
import k9Resting from "@/assets/images/k9-resting.jpg";
import k9Running from "@/assets/images/k9-running.jpg";
import mineSiteGuards from "@/assets/images/mine-site-guards.jpg";
import officeReception from "@/assets/images/office-reception.jpg";
import officerSalute from "@/assets/images/officer-salute.jpg";
import officersInspection from "@/assets/images/officers-inspection.jpg";
import patrolMotorbike from "@/assets/images/patrol-motorbike.jpg";
import responseVehicles from "@/assets/images/response-vehicles.jpg";
import teamParade from "@/assets/images/team-parade.jpg";
import teamSalute from "@/assets/images/team-salute.jpg";

export const galleryCategories = ["Our Team", "Operations", "K9 Unit", "Golf Day 2024"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryImage = {
  src: StaticImageData;
  alt: string;
  category: GalleryCategory;
};

export const golfDayPhotos: StaticImageData[] = [
  golf01, golf02, golf03, golf04, golf05, golf06, golf07, golf08, golf09, golf10,
  golf11, golf12, golf13, golf14, golf15, golf16, golf17, golf18, golf19, golf20,
];

export const gallery: GalleryImage[] = [
  { src: teamSalute, alt: "Vonlet officers saluting in formation", category: "Our Team" },
  { src: officersInspection, alt: "Senior officers inspecting a guard parade", category: "Our Team" },
  { src: guardsLineup, alt: "Uniformed Vonlet guards lined up outdoors", category: "Our Team" },
  { src: teamParade, alt: "Guards on parade in winter uniform", category: "Our Team" },
  { src: guardsHq, alt: "Guards outside the Vonlet head office", category: "Our Team" },
  { src: officeReception, alt: "Vonlet staff at the head office reception", category: "Our Team" },
  { src: guardsBranded, alt: "Vonlet officers beside company banners", category: "Our Team" },
  { src: mineSiteGuards, alt: "Guards stationed at a mine site", category: "Operations" },
  { src: hqSignage, alt: "Vonlet Security signage at 9 Blatherwick Road", category: "Operations" },
  { src: armedGuard, alt: "Armed guard on duty", category: "Operations" },
  { src: patrolMotorbike, alt: "Patrol officer on a Vonlet motorbike", category: "Operations" },
  { src: responseVehicles, alt: "Vonlet rapid response vehicles", category: "Operations" },
  { src: officerSalute, alt: "Vonlet officer saluting", category: "Operations" },
  { src: k9Harness, alt: "German Shepherd in a K9 harness", category: "K9 Unit" },
  { src: k9Portrait, alt: "Vonlet K9 unit dog portrait", category: "K9 Unit" },
  { src: k9Resting, alt: "Guard dog resting on the grass", category: "K9 Unit" },
  { src: k9Running, alt: "Guard dog running", category: "K9 Unit" },
  ...golfDayPhotos.map((src, index) => ({
    src,
    alt: `Vonlet team golf day, photo ${index + 1}`,
    category: "Golf Day 2024" as const,
  })),
];
