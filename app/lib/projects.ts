// FILE PATH: app/lib/projects.ts  (English data. Not the hi folder.)
import {
  Baby,
  Compass,
  GraduationCap,
  Hammer,
  HeartHandshake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type ProjectPhoto = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  text: string;
  facts: { label: string; value: string }[];
  // Facility photos only, no identifiable children. Files are in public/images/projects.
  photos: ProjectPhoto[];
  icon: LucideIcon;
  // The NGO's logo for this unit. Leave it out for units with no logo yet.
  logo?: string;
  // "children" for the homes, "students" for the NIOS centres
  countKind: "children" | "students";
  // Current number. A placeholder until the NGO sends it.
  count: string;
  // Staff: names and roles only. No photos without written consent.
  staff: { name: string; role: string }[];
};

// Anything in [square brackets] is a placeholder the NGO still has to fill.
export const projects: Project[] = [
  {
    slug: "saa",
    name: "Special Adoption Agency (SAA)",
    kind: "Adoption",
    summary:
      "Safe, nurturing care for eligible children, and support for lawful adoption through the authorised process.",
    text: "Our infant care and specialised adoption services aim to provide a safe, nurturing, and developmentally appropriate environment for eligible children requiring such care. We focus on essential healthcare, nutrition, attentive caregiving, emotional bonding, developmental stimulation, and individualised monitoring. Where adoption is legally appropriate, we seek to support the authorised adoption process in accordance with applicable regulations and the procedures of the Central Adoption Resource Authority (CARA) and other competent authorities.",
    facts: [
      {
        label: "Adoption process",
        value: "Follows CARA regulations and the competent authorities",
      },
    ],
    photos: [
      {
        src: "/images/projects/saa-1.jpg",
        alt: "The infant ward, with cots, cradles and toys on the wall",
      },
      {
        src: "/images/projects/saa-2.jpg",
        alt: "The infant ward, with the weekly meal chart for young children on the wall",
      },
    ],
    icon: HeartHandshake,
    logo: "/logo.png",
    countKind: "children",
    count: "[number]",
    staff: [
      { name: "[Staff name]", role: "[Role]" },
      { name: "[Staff name]", role: "[Role]" },
    ],
  },
  {
    slug: "cci-infants",
    name: "Child Care Institute (CCI): Infants",
    kind: "Residential care",
    summary: "[One line from the NGO.]",
    text: "[Two or three sentences from the NGO.]",
    facts: [{ label: "Who it serves", value: "[From the NGO]" }],
    photos: [
      {
        src: "/images/projects/cci-infants-1.jpg",
        alt: "A bright infant room with cots and cradles",
      },
      {
        src: "/images/projects/cci-infants-2.jpg",
        alt: "Another view of the infant room, with a refrigerator and a store room",
      },
    ],
    icon: Baby,
    logo: "/logo.png",
    countKind: "children",
    count: "[number]",
    staff: [
      { name: "[Staff name]", role: "[Role]" },
      { name: "[Staff name]", role: "[Role]" },
    ],
  },
  {
    slug: "cci-girls",
    name: "Child Care Institute (CCI): Girls",
    kind: "Residential care",
    summary:
      "A safe, respectful and empowering home that protects the dignity and individual needs of every girl.",
    text: "Our girls' residential care unit is committed to providing a safe, respectful, and empowering environment that protects the dignity, rights, and individual needs of every girl. We emphasise education, physical and emotional well-being, personal safety, confidence-building, counselling, recreational opportunities, and the development of practical life skills. We strive to create opportunities for girls to pursue their aspirations, strengthen their decision-making abilities, and prepare for a future characterised by dignity, independence, and equal participation in society.",
    facts: [
      {
        label: "Decisions made with",
        value: "The Child Welfare Committee and other competent authorities",
      },
    ],
    // Dormitory photos are in public/images/projects (dormitory-1 to dormitory-4).
    // Add them here once the NGO says which dormitory is the girls' home.
    photos: [],
    icon: Sparkles,
    logo: "/logo.png",
    countKind: "children",
    count: "[number]",
    staff: [
      { name: "[Staff name]", role: "[Role]" },
      { name: "[Staff name]", role: "[Role]" },
    ],
  },
  {
    slug: "cci-boys",
    name: "Child Care Institute (CCI): Boys",
    kind: "Residential care",
    summary:
      "A secure, structured and supportive home where boys recover, learn and build confidence.",
    text: "Our boys' residential care unit seeks to provide children with a secure, structured, and supportive environment in which they can recover from difficult circumstances and develop their abilities. Our approach emphasises education, healthcare, nutrition, recreational activities, emotional support, positive relationships, and age-appropriate life skills. Through individual care planning and continued guidance, we aim to help every child build confidence, develop healthy habits, discover personal strengths, and prepare for successful family and community reintegration.",
    facts: [
      {
        label: "Decisions made with",
        value: "The Child Welfare Committee and other competent authorities",
      },
    ],
    photos: [],
    icon: Compass,
    logo: "/logo.png",
    countKind: "children",
    count: "[number]",
    staff: [
      { name: "[Staff name]", role: "[Role]" },
      { name: "[Staff name]", role: "[Role]" },
    ],
  },
  {
    slug: "nios-obe",
    name: "NIOS (OBE) Institute",
    kind: "Education",
    summary: "[One line from the NGO.]",
    text: "[Two or three sentences from the NGO.]",
    facts: [{ label: "Who it serves", value: "[From the NGO]" }],
    photos: [],
    icon: GraduationCap,
    countKind: "students",
    count: "[number]",
    staff: [
      { name: "[Staff name]", role: "[Role]" },
      { name: "[Staff name]", role: "[Role]" },
    ],
  },
  {
    slug: "nios-vocational",
    name: "NIOS Vocational Centre",
    kind: "Skills",
    summary: "[One line from the NGO.]",
    text: "[Two or three sentences from the NGO.]",
    facts: [{ label: "Who it serves", value: "[From the NGO]" }],
    photos: [
      {
        src: "/images/projects/vocational-1.jpg",
        alt: "The vocational training hall, with handmade items laid out on tables",
      },
      {
        src: "/images/projects/vocational-2.jpg",
        alt: "The vocational training hall seen from the other end",
      },
    ],
    icon: Hammer,
    countKind: "students",
    count: "[number]",
    staff: [
      { name: "[Staff name]", role: "[Role]" },
      { name: "[Staff name]", role: "[Role]" },
    ],
  },
];

export type BoardMember = {
  name: string;
  role: string;
  photo?: string; // e.g. "/images/board/name.jpg"
};

// Leave empty until every member has agreed in writing. The section stays hidden while this is empty.
export const board: BoardMember[] = [];

export type AnnualReport = {
  year: string; // e.g. "2024-25"
  file: string; // e.g. "/reports/annual-report-2024-25.pdf"
};

// Leave empty until the PDFs are in public/reports. The section stays hidden while this is empty.
export const annualReports: AnnualReport[] = [];