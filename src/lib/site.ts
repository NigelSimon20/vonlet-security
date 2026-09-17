export const site = {
  name: "Vonlet Security Services",
  shortName: "Vonlet Security",
  url: "https://vonletsecurity.co.zw",
  founded: 2010,
  description:
    "Indigenous-owned security company protecting people, property and cash across Zimbabwe and Zambia since 2010 — armed and unarmed guards, K9 units, rapid response and electronic security systems.",
  address: {
    street: "9 Blatherwick Road",
    suburb: "Queensdale",
    city: "Harare",
    country: "Zimbabwe",
  },
  phones: [
    { display: "+263 772 856 852", href: "tel:+263772856852" },
    { display: "+263 4 570 433", href: "tel:+2634570433" },
    { display: "+263 8644 145 665", href: "tel:+2638644145665" },
    { display: "086 880 031", href: "tel:086880031" },
  ],
  emails: {
    general: "info@vonletsecurity.co.zw",
    sales: "sales@vonletsecurity.co.zw",
  },
  hours: {
    office: "Mon – Sat, 8:00 AM – 4:30 PM",
    closed: "Closed Sundays & public holidays",
    operations: "Security operations run 24/7/365",
  },
  social: {
    facebook: "https://www.facebook.com/VonletServices/",
  },
} as const;

export const primaryPhone = site.phones[0];

export const yearsInService = new Date().getFullYear() - site.founded;

export const fullAddress = `${site.address.street}, ${site.address.suburb}, ${site.address.city}`;

export const values = [
  "Professionalism",
  "Innovation",
  "Transparency",
  "Excellent service standards",
  "Team work",
] as const;

export const recruitmentSteps = [
  {
    title: "Evaluate candidates",
    description: "All candidates are evaluated one on one. The best are selected for interviews.",
  },
  {
    title: "Job interviews",
    description: "Interviews are conducted in groups and then further on an individual basis.",
  },
  {
    title: "Selection & training",
    description: "Successful candidates are selected, undergo training and sign their contracts.",
  },
  {
    title: "Employment & deployment",
    description: "New officers are deployed to work stations across our branch network.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "While running an early stage startup everything feels hard, that's why it's been so nice to have our security handled by Vonlet.",
    name: "James Tapera",
    role: "Senior Manager, Excel Solution",
  },
  {
    quote: "They are simply the best in the game.",
    name: "Anna Sebastian",
    role: "Business Owner",
  },
] as const;
