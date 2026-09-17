export type Branch = {
  id: string;
  name: string;
  address: string;
  city: string;
  country: "Zimbabwe" | "Zambia";
  lat: number;
  lng: number;
  headOffice?: boolean;
};

export const branchHours = "8:00 AM – 4:30 PM · Closed Sundays & public holidays";

export const branches: Branch[] = [
  {
    id: "harare",
    name: "Head Office",
    address: "9 Blatherwick Road, Queensdale",
    city: "Harare",
    country: "Zimbabwe",
    lat: -17.8520171,
    lng: 31.0881281,
    headOffice: true,
  },
  {
    id: "bulawayo",
    name: "Bulawayo Branch",
    address: "17 Woolwich Road, Thorngrove",
    city: "Bulawayo",
    country: "Zimbabwe",
    lat: -20.187689,
    lng: 28.5119013,
  },
  {
    id: "rusape",
    name: "Rusape Branch",
    address: "No. 3864 Magamba",
    city: "Rusape",
    country: "Zimbabwe",
    lat: -18.5563217,
    lng: 32.154963,
  },
  {
    id: "hwange",
    name: "Hwange Branch",
    address: "No. 748 Empumalanga, Baghdad",
    city: "Hwange",
    country: "Zimbabwe",
    lat: -18.3492643,
    lng: 26.4668173,
  },
  {
    id: "beitbridge",
    name: "Beitbridge Branch",
    address: "259 Limpopo View, Dulibadzimu",
    city: "Beitbridge",
    country: "Zimbabwe",
    lat: -22.2286142,
    lng: 29.9700526,
  },
  {
    id: "lusaka",
    name: "Zambia Branch",
    address: "Plot No. 228, Flat 4, Libowa Street, Salama Park",
    city: "Lusaka",
    country: "Zambia",
    lat: -15.3982635,
    lng: 28.3916281,
  },
];

export function mapEmbedUrl(branch: Branch) {
  return `https://maps.google.com/maps?q=${branch.lat},${branch.lng}&z=15&output=embed`;
}

export function directionsUrl(branch: Branch) {
  return `https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`;
}
