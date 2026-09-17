export type NavLink = { label: string; href: string; description?: string };

export const aboutLinks: NavLink[] = [
  { label: "About Us", href: "/about", description: "Our story, mission, vision and values" },
  { label: "Directorate & Management", href: "/leadership", description: "The people leading Vonlet" },
  { label: "Operations Team", href: "/operations-team", description: "Experienced officers on the ground" },
  { label: "Our Branches", href: "/branches", description: "Six offices across Zimbabwe and Zambia" },
];

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", menu: "about" as const },
  { label: "Services", href: "/services", menu: "services" as const },
  { label: "Branches", href: "/branches" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];
