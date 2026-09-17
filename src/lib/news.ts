import type { StaticImageData } from "next/image";

import alarmPanel from "@/assets/images/alarm-panel.jpg";
import cctv from "@/assets/images/cctv.jpg";
import golfCover from "@/assets/images/gallery/golf-day-17.jpg";
import k9Harness from "@/assets/images/k9-harness.jpg";
import teamParade from "@/assets/images/team-parade.jpg";
import { golfDayPhotos } from "@/lib/gallery";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: StaticImageData;
  excerpt: string;
  body: Block[];
  photos?: StaticImageData[];
  relatedService?: string;
};

export const posts: Post[] = [
  {
    slug: "golf-day-for-the-vonlet-team",
    title: "Golf Day for the Vonlet Team",
    date: "2024-02-24",
    category: "Employee Relations",
    image: golfCover,
    excerpt: "The Vonlet team swapped the post for the fairway. The events of the day in pictures.",
    body: [
      {
        type: "p",
        text: "Team work is one of Vonlet's core values, and days away from the post matter as much as the hours on it.",
      },
    ],
    photos: golfDayPhotos,
  },
  {
    slug: "tips-you-should-adopt-when-breeding-security-dogs",
    title: "Tips You Should Adopt When Breeding Security Dogs",
    date: "2023-05-17",
    category: "K9 Unit",
    image: k9Harness,
    excerpt: "What goes into raising a dependable guard dog — from choosing the breed to pairing it with a handler.",
    relatedService: "dog-handling-training",
    body: [
      {
        type: "p",
        text: "A good security dog is raised, not found. Our dog section breeds and trains its own dogs, and a few principles guide everything we do.",
      },
      { type: "h2", text: "Start with breeds suited to the work" },
      {
        type: "p",
        text: "We breed Boerboels, German Shepherds and Rottweilers — breeds that are well suited to being trained and working as guard dogs.",
      },
      { type: "h2", text: "Put welfare first" },
      {
        type: "p",
        text: "The welfare of the dogs at our kennels is of paramount importance. A healthy, well-cared-for dog is more responsive in training and more reliable on duty.",
      },
      { type: "h2", text: "Build obedience before anything else" },
      {
        type: "p",
        text: "Training starts with teaching the dog to respond to its handler's commands. Only then do we teach dogs to pursue an intruder who runs away, including inside a building.",
      },
      { type: "h2", text: "Train the handler, too" },
      {
        type: "p",
        text: "Professional handling and control are essential, so handlers are trained as well and get to know the dog they will work with. Dogs, like people, have their own personalities.",
      },
    ],
  },
  {
    slug: "training-of-guards",
    title: "Training of Guards",
    date: "2023-05-17",
    category: "Employee Relations",
    image: teamParade,
    excerpt: "Every Vonlet guard is vetted before training begins. Here's what that process looks like.",
    relatedService: "basic-security-guard-training",
    body: [
      {
        type: "p",
        text: "The quality of a security service comes down to the people standing guard. That's why vetting is a prerequisite at Vonlet, and it is completed before any applicant begins training.",
      },
      { type: "h2", text: "Vetting comes first" },
      {
        type: "ul",
        items: [
          "Fingerprints are taken to check for any criminal record.",
          "Every applicant must have completed at least “O” Level.",
          "Any previous employment with a manned security service is checked.",
          "At least three references are required, excluding the previous employer.",
          "Each CV is carefully reviewed to confirm its authenticity.",
        ],
      },
      { type: "h2", text: "Two weeks of intensive training" },
      {
        type: "p",
        text: "Successful applicants then complete a two-week programme covering basic security guard training, firearm handling, dog handling, first aid and fire drills.",
      },
    ],
  },
  {
    slug: "cctv-making-the-technological-break-through-in-the-20th-century",
    title: "CCTV: The Technological Breakthrough of the 20th Century",
    date: "2021-07-08",
    category: "Home Security",
    image: cctv,
    excerpt: "How closed-circuit television became one of the most preferred building security solutions.",
    relatedService: "cctv",
    body: [
      {
        type: "p",
        text: "Few technologies have changed building security as much as closed-circuit television. CCTV lets you keep an eye on everything happening on your premises through a network of cameras.",
      },
      { type: "h2", text: "From analogue to networked" },
      {
        type: "p",
        text: "Video encoders now let older analogue systems migrate to IP networks, unlocking modern features on cheaper hardware. Network video recorders pair with IP cameras for storage and remote viewing, while digital video recorders continue to serve analogue installations.",
      },
      { type: "h2", text: "Choosing the right camera" },
      {
        type: "p",
        text: "CCD sensors offer higher light sensitivity for difficult lighting, while CMOS sensors are more cost-effective — and megapixel CMOS can deliver better overall image quality.",
      },
    ],
  },
  {
    slug: "why-alarm-systems-are-important",
    title: "Why Alarm Systems Are Important",
    date: "2021-07-07",
    category: "Alarm Systems",
    image: alarmPanel,
    excerpt: "An alarm is only as good as the response behind it. Here's why a linked system matters.",
    relatedService: "intruder-alarm-systems",
    body: [
      {
        type: "p",
        text: "An intruder alarm alerts you the moment your premises are breached. Each system combines a control panel, keypad, pet-immune and general sensors, door and window magnets and sirens.",
      },
      { type: "h2", text: "An alarm with a response behind it" },
      {
        type: "p",
        text: "When your alarm is linked to Vonlet's rapid response control room, a break-in automatically triggers our reaction team, which responds to your premises and inspects for any burglary.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
