import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Cctv,
  Crosshair,
  Dog,
  EyeOff,
  FireExtinguisher,
  Fingerprint,
  GraduationCap,
  HeartPulse,
  PawPrint,
  RadioTower,
  ScanLine,
  ShieldCheck,
  Siren,
  Target,
} from "lucide-react";

import accessControl from "@/assets/images/access-control.jpg";
import alarmPanel from "@/assets/images/alarm-panel.jpg";
import cctv from "@/assets/images/cctv.jpg";
import fireDrill from "@/assets/images/fire-drill.jpg";
import firearmTraining from "@/assets/images/firearm-training.jpg";
import firstAid from "@/assets/images/first-aid.jpg";
import guardDevice from "@/assets/images/guard-device.jpg";
import guardsLineup from "@/assets/images/guards-lineup.jpg";
import k9Harness from "@/assets/images/k9-harness.jpg";
import k9Running from "@/assets/images/k9-running.jpg";
import responseBanner from "@/assets/images/response-banner.jpg";
import responseVehicles from "@/assets/images/response-vehicles.jpg";
import secretService from "@/assets/images/secret-service.jpg";
import teamParade from "@/assets/images/team-parade.jpg";
import teamSalute from "@/assets/images/team-salute.jpg";

export type ServiceCategoryId = "guarding" | "k9" | "electronic" | "training";

export const serviceCategories: {
  id: ServiceCategoryId;
  title: string;
  description: string;
}[] = [
  {
    id: "guarding",
    title: "Manned Guarding",
    description: "Uniformed, armed and undercover officers protecting your people, premises and cash.",
  },
  {
    id: "k9",
    title: "K9 Unit",
    description: "Watch, attack and detection dogs deployed alongside professionally trained handlers.",
  },
  {
    id: "electronic",
    title: "Electronic Security",
    description: "Alarms, CCTV, access control and guard monitoring backed by our 24/7 control room.",
  },
  {
    id: "training",
    title: "Training & Consultancy",
    description: "Thorough vetting and professional training programmes for security personnel.",
  },
];

type Item = { title: string; description: string };

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategoryId;
  icon: LucideIcon;
  image: StaticImageData;
  summary: string;
  intro: string[];
  highlights: Item[];
  steps?: { heading: string; items: Item[] };
  details?: { heading: string; items: Item[] };
  list?: { heading: string; lead?: string; items: string[] };
  deployments?: string[];
};

export const services: Service[] = [
  {
    slug: "unarmed-guards",
    title: "Unarmed Guards",
    category: "guarding",
    icon: ShieldCheck,
    image: guardsLineup,
    summary: "Static and roving patrol guards who keep your premises secure around the clock.",
    intro: [
      "Our unarmed guarding branch is made up of static and roving (patrolling) guards whose job is to ensure the total security of your premises.",
    ],
    highlights: [
      {
        title: "Static guards",
        description:
          "Posted to specific areas and responsible for protecting them until relieved. They escort staff and protect assets and infrastructure at entrances and exits.",
      },
      {
        title: "Roving & patrolling guards",
        description:
          "Move throughout the area or premises to guard against theft and vandalism of property, and to keep people safe.",
      },
    ],
  },
  {
    slug: "armed-guards",
    title: "Armed Guards",
    category: "guarding",
    icon: Crosshair,
    image: teamSalute,
    summary: "Firearm-trained officers for high-risk sites such as mines and fuel depots.",
    intro: [
      "Vonlet Security provides static or roving guards who are highly trained to handle firearms. They undergo intensive in-house training in collaboration with the Zimbabwe Republic Police (ZRP) and the Zambia National Police to maintain and improve their shooting skills.",
      "Our armed officers are capable of operating in high-risk areas such as mines, sand-poaching areas, fuel depots and other places that hold valuable items.",
    ],
    highlights: [
      {
        title: "Intensive in-house training",
        description: "Structured firearm programmes delivered by our own training officers.",
      },
      {
        title: "Police-backed shooting skills",
        description: "Skills maintained in collaboration with the ZRP and the Zambia National Police.",
      },
      {
        title: "Static or roving",
        description: "Deployed at a fixed post or on patrol, depending on the risk profile of your site.",
      },
    ],
    deployments: ["Mines", "Sand-poaching areas", "Fuel depots", "High-value premises"],
  },
  {
    slug: "secret-service",
    title: "Undercover Guards",
    category: "guarding",
    icon: EyeOff,
    image: secretService,
    summary: "Discreet guards embedded in your workplace to prevent theft and report back.",
    intro: [
      "Our secret service guards are incorporated into your workplace in a discreet and diplomatic way, giving them an inconspicuous identity.",
      "This gives them the flexibility to mingle with your personnel or customers. In the course of their duties they report back with evaluations of areas that need improvement or closer monitoring.",
      "The presence of Vonlet's undercover officers saves your business from lost time and resources, cash theft, shoplifting and vandalism — to mention only a few.",
    ],
    highlights: [
      { title: "Discreet deployment", description: "Officers blend in with staff or customers." },
      { title: "Reporting back", description: "Evaluations on areas that need improvement or monitoring." },
      { title: "Prevents cash theft", description: "A hidden layer of accountability around cash handling." },
      { title: "Stops shoplifting & vandalism", description: "Loss is caught where uniformed guards can't see." },
    ],
  },
  {
    slug: "cash-in-transit",
    title: "Cash-In-Transit",
    category: "guarding",
    icon: Banknote,
    image: responseVehicles,
    summary: "Managed cash collection with task assignment, route selection and full accounting.",
    intro: [
      "Our Cash-In-Transit (CIT) service manages the cash collection process end to end for our CIT staff — from the assignment of tasks and the selection of routes to the accounting of all books.",
    ],
    highlights: [
      { title: "Collection management", description: "A single, accountable service for your cash movements." },
      { title: "Task assignment", description: "Every collection is allocated to dedicated CIT staff." },
      { title: "Route selection", description: "Routes are planned and varied by our operations team." },
      { title: "Accounting of all books", description: "Complete records for every collection." },
    ],
  },
  {
    slug: "dog-services",
    title: "Dog Services",
    category: "k9",
    icon: Dog,
    image: k9Harness,
    summary: "Watch, attack and sniffer dogs whose presence alone deters crime.",
    intro: [
      "Due to their attentive and intimidating nature, dogs have over time become a substantial part of the security domain. Vonlet Security supplies clients with watch and attack dogs that reduce crime and are very effective in tackling threats to our clients or their property head-on.",
      "Our dogs are also trained to assist guards and other law enforcement officers. Their duties can include drug and explosives searches, locating missing people and finding crime-scene evidence.",
    ],
    highlights: [
      { title: "Watch & attack dogs", description: "A physical deterrent that responds to threats immediately." },
      { title: "Sniffer dogs", description: "Drug and explosives searches and evidence recovery." },
      { title: "Crime deterrence", description: "Their intimidating nature discourages intruders before they act." },
    ],
  },
  {
    slug: "dog-handling-training",
    title: "Dog Handling Training",
    category: "k9",
    icon: PawPrint,
    image: k9Running,
    summary: "Motivational K9 training for dogs and the handlers who work with them.",
    intro: [
      "Our dog section uses motivational training techniques to teach dogs to obey their handlers and apprehend intruders. The techniques are in line with the latest international approaches to dog training.",
      "Training starts with teaching the dog to respond to its handler's commands. The dogs are then taught to pursue an intruder who runs away — even inside a building. Trained dogs are deployed with their handlers to residential and business premises, farms, mines and schools.",
      "The welfare of the dogs at our kennels is of paramount importance. So is the professional handling and control of the dogs, which means our handlers are trained too, and get to know the dog they will be working with. Dogs, like people, have their own personalities.",
    ],
    highlights: [
      { title: "Motivational techniques", description: "Aligned with the latest international approaches." },
      { title: "Obedience & apprehension", description: "Dogs respond to commands and pursue intruders." },
      { title: "Handler training", description: "Handlers are trained and paired with their dog." },
      { title: "Welfare first", description: "Dog welfare at our kennels is of paramount importance." },
    ],
    list: {
      heading: "Breeds we raise",
      lead: "All breeds that are well suited to being trained and working as guard dogs.",
      items: ["Boerboels", "German Shepherds", "Rottweilers"],
    },
    deployments: ["Residential premises", "Business premises", "Farms", "Mines", "Schools"],
  },
  {
    slug: "intruder-alarm-systems",
    title: "Intruder Alarm Systems",
    category: "electronic",
    icon: Siren,
    image: alarmPanel,
    summary: "State-of-the-art alarms that alert you the moment your premises are breached.",
    intro: [
      "Our intruder alarm system is engineered to alert clients to any invasion or intrusion. Each installation is made up of a control panel, keypad, sensors, door and window magnets and sirens.",
      "Alarm systems can be linked to our rapid response control room, so a trigger is followed by a physical response.",
    ],
    highlights: [
      { title: "Control panel", description: "The brain of the system, managing every connected device." },
      { title: "Keypad (LED or LCD)", description: "Simple arming and disarming for authorised users." },
      { title: "Sensors", description: "Pet-immune and general motion sensors." },
      { title: "Magnets & sirens", description: "Window and door contacts with loud audible alerts." },
    ],
  },
  {
    slug: "rapid-response-systems",
    title: "Rapid Response",
    category: "electronic",
    icon: RadioTower,
    image: responseBanner,
    summary: "Your alarm linked to our control room, with a reaction team dispatched on trigger.",
    intro: [
      "With rapid response, your alarm system is linked to Vonlet Security's rapid response control room. In the event of a break-in, a report is relayed to our control room, which automatically triggers our reaction team to respond to your premises and inspect for any burglary.",
    ],
    highlights: [
      { title: "Linked alarm", description: "Your system reports directly to our control room." },
      { title: "Automatic dispatch", description: "An alert triggers the reaction team without delay." },
      { title: "On-site inspection", description: "The team checks your premises for any burglary." },
    ],
    steps: {
      heading: "How rapid response works",
      items: [
        { title: "Alarm triggered", description: "A break-in sets off the alarm system at your premises." },
        { title: "Control room alerted", description: "A report is relayed instantly to Vonlet's control room." },
        {
          title: "Reaction team dispatched",
          description: "Our team responds to your premises and inspects for any burglary.",
        },
      ],
    },
  },
  {
    slug: "cctv",
    title: "CCTV Systems",
    category: "electronic",
    icon: Cctv,
    image: cctv,
    summary: "CCTV surveillance installed, maintained and monitored for complete visibility.",
    intro: [
      "When it comes to building security, everyone wants the best surveillance solution available — and one of the most preferred options on the market is a CCTV surveillance system.",
      "Closed-circuit television lets you keep an eye on everything happening in your building through a network of cameras. We install, maintain and monitor security equipment including CCTV systems, video cameras, building monitors, entry alarms, metal detectors and movement and occupancy sensors.",
    ],
    highlights: [
      { title: "Installation", description: "Camera placement planned around your building's risks." },
      { title: "Maintenance", description: "Systems kept recording reliably, day and night." },
      { title: "Monitoring", description: "Footage watched and acted on by trained personnel." },
    ],
    details: {
      heading: "CCTV terms you should know",
      items: [
        {
          title: "Image sensors",
          description:
            "Sensors convert light into electronic signals. CCD sensors have higher light sensitivity and suit poor lighting; CMOS sensors are more cost-effective, and megapixel CMOS can deliver better overall image quality.",
        },
        {
          title: "Video encoders",
          description:
            "Encoders digitise analogue video signals so older CCTV systems can migrate to IP networks and take advantage of modern features and cheaper hardware.",
        },
        {
          title: "Recorders",
          description:
            "Digital video recorders (DVRs) process footage themselves and pair with analogue cameras. Network video recorders (NVRs) work with IP cameras that encode footage at the camera before streaming it for storage and remote viewing.",
        },
      ],
    },
  },
  {
    slug: "access-control-systems",
    title: "Access Control",
    category: "electronic",
    icon: Fingerprint,
    image: accessControl,
    summary: "Decide exactly who can enter which areas of your facility.",
    intro: [
      "Access control systems determine who is allowed into your building, and into specific areas within it. We help you choose and install the model that best fits the way your organisation works.",
    ],
    highlights: [
      { title: "Controlled entry", description: "Only authorised people get through." },
      { title: "Zoned access", description: "Different permissions for different areas." },
      { title: "Accountability", description: "Know who accessed what, and when." },
    ],
    details: {
      heading: "Types of access control",
      items: [
        {
          title: "Discretionary access control",
          description:
            "Puts more control in leadership's hands, letting owners or administrators decide who can access each area.",
        },
        {
          title: "Rule-based access control",
          description:
            "Access is granted or denied according to rules set by the administrator, such as time of day or location.",
        },
        {
          title: "Identity-based access control",
          description: "Access is granted based on a person's verified identity — such as a card, PIN or fingerprint.",
        },
      ],
    },
  },
  {
    slug: "guard-monitoring-systems",
    title: "Guard Monitoring",
    category: "electronic",
    icon: ScanLine,
    image: guardDevice,
    summary: "A real-time guard tour system that keeps guards productive, night and day.",
    intro: [
      "Our guard monitoring system is a real-time online guard tour system based on NFC, Beacon and QR-code tags. Staff scan tags placed at locations and on assets, and the monitoring centre is informed of incidents and events in real time.",
      "Each guard manages their tour from a smartphone, and inspections can be enhanced with pictures, voice messages, notes and signatures attached to scanned items. Guards can also immediately inform the facility managers responsible for those assets and locations.",
      "All kinds of assets and buildings — from departments, warehouses and transport areas to airports, stores and remote sites — can be placed under total control.",
    ],
    highlights: [
      { title: "Productive guards", description: "Proof that patrols happen, day and night." },
      { title: "Route monitoring", description: "Every checkpoint scan is tracked in real time." },
      { title: "Extensive reports", description: "Photos, voice notes, notes and signatures on record." },
      { title: "Portable time attendance", description: "Clock-ins captured on site, not on paper." },
    ],
  },
  {
    slug: "basic-security-guard-training",
    title: "Basic Guard Training",
    category: "training",
    icon: GraduationCap,
    image: teamParade,
    summary: "Rigorous vetting followed by a two-week training programme for every guard.",
    intro: [
      "As part of our operations, Vonlet vets every person we employ, with particular emphasis on guards. Vetting is a prerequisite and is completed before any applicant begins Vonlet training.",
    ],
    highlights: [
      { title: "Vetted before training", description: "No applicant is trained until vetting is complete." },
      { title: "Two-week programme", description: "Intensive training for every successful applicant." },
      { title: "Multi-skilled officers", description: "Firearms, dogs, first aid and fire drills covered." },
    ],
    steps: {
      heading: "Our vetting process",
      items: [
        { title: "Fingerprints", description: "Fingerprints are taken to check for any criminal record." },
        { title: "“O” Level", description: "Every applicant must have completed at least “O” Level." },
        {
          title: "Employment records",
          description: "Any previous employment with another manned security service is checked.",
        },
        { title: "References", description: "At least three references, excluding the previous employer." },
        { title: "Resume", description: "A painstaking review of the applicant's CV to confirm its authenticity." },
      ],
    },
    list: {
      heading: "The two-week programme",
      lead: "Having passed vetting, successful applicants gain knowledge in:",
      items: ["Basic security guard training", "Firearm handling", "Dog handling", "First aid", "Fire drill"],
    },
  },
  {
    slug: "firearm-handling",
    title: "Firearm Handling",
    category: "training",
    icon: Target,
    image: firearmTraining,
    summary: "Specialised firearm handling and safety training for officers who carry on duty.",
    intro: [
      "To become an armed security guard and carry a firearm on duty, an officer must complete additional training hours that specialise in firearm handling and safety. On completion, officers receive a card that allows them to legally carry a firearm while on duty.",
      "These hours are in addition to basic security guard training and include time spent learning how to handle and fire a weapon. Every candidate also goes through a rigorous, multi-point background check to make sure they are qualified to carry a firearm.",
    ],
    highlights: [
      { title: "Handling & safety", description: "Safe carriage, handling and storage of firearms." },
      { title: "Firing practice", description: "Hours spent learning to fire a weapon accurately." },
      { title: "Background checks", description: "A rigorous, multi-point check before qualification." },
      { title: "Licensed to carry", description: "Graduates receive a card to carry a firearm on duty." },
    ],
  },
  {
    slug: "first-aid",
    title: "First Aid",
    category: "training",
    icon: HeartPulse,
    image: firstAid,
    summary: "Life-saving skills so officers can act before medical help arrives.",
    intro: [
      "First aid training is an essential lesson for security personnel because it equips them with life-saving techniques for casualties at the scene of a medical emergency.",
      "First aid is the immediate treatment of a patient before trained medical personnel can take over — and security officers are often the first people on the scene.",
    ],
    highlights: [
      { title: "Emergency response", description: "Officers know what to do in the first critical minutes." },
      { title: "Casualty care", description: "Life-saving techniques applied at the scene." },
      { title: "Hand-over ready", description: "Patients stabilised until medical personnel take over." },
    ],
  },
  {
    slug: "fire-drill",
    title: "Fire Drill",
    category: "training",
    icon: FireExtinguisher,
    image: fireDrill,
    summary: "Fire-ready guards who keep extinguishers serviceable and escape routes clear.",
    intro: [
      "Our fire-drill-trained guards make sure fire extinguishers are not expired or damaged. They clear corridors of obstructions so people can evacuate quickly, and make sure every exit door stays clear and accessible for anyone who needs to evacuate.",
    ],
    highlights: [
      { title: "Extinguisher checks", description: "Equipment kept in date and undamaged." },
      { title: "Clear corridors", description: "Obstructions removed from evacuation routes." },
      { title: "Accessible exits", description: "Exit doors kept clear at all times." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function servicesInCategory(category: ServiceCategoryId) {
  return services.filter((service) => service.category === category);
}
