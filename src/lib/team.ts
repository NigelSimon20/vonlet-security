import type { StaticImageData } from "next/image";

import hellen from "@/assets/images/team/hellen-mujuru.jpg";
import hrManager from "@/assets/images/team/hr-manager.jpg";
import liberty from "@/assets/images/team/liberty-mahembe.jpg";

export type Person = {
  name: string;
  role: string;
  image?: StaticImageData;
  bio?: string;
};

export const directorate: Person[] = [
  {
    name: "Liberty Mahembe",
    role: "Chief Executive Officer",
    image: liberty,
    bio: "Holds a Bachelor's degree in Marketing and a Master's degree in Management, with experience in the security industry and special intelligence operations.",
  },
  { name: "Hellen Mujuru", role: "Managing Director", image: hellen },
  { name: "Mr Johnson", role: "HR Manager", image: hrManager },
];

export const management: Person[] = [
  { name: "Mr F. Khiri", role: "Chief Security Officer, Bulawayo" },
  { name: "Mr B. Svinurayi", role: "Training Officer" },
  { name: "Mr C. Johnson", role: "Administrator" },
];

export function initials(name: string) {
  return name
    .replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/i, "")
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
