import {
  Baby,
  BookOpen,
  Building2,
  Compass,
  FileCheck,
  GraduationCap,
  Heart,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Scale,
  ShieldCheck,
  Sprout,
  Stethoscope,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// position = which part of the picture stays visible when the box crops it
export type Photo = { src: string; alt: string; position?: string };

export const aboutImages: { who: Photo; promise: Photo; approach: Photo } = {
  who: {
    src: "/images/about-who.jpg",
    alt: "Entrance of the Charu Niwas building in Gonda, with red gates and a nameplate.",
    position: "center 68%",
  },
  // Decorative pictures use alt="" so screen readers skip them
  promise: { src: "/images/about-promise.jpg", alt: "", position: "center 65%" },
  approach: { src: "/images/about-approach.jpg", alt: "", position: "95% center" },
};

// These lists follow the ORDER of the lists in about.ts (same position = same item).
// If the NGO reorders an item in about.ts, move its icon here too.
export const facilityIcons: LucideIcon[] = [
  Baby, // Specialised Adoption Agency / Bal Grah Shishu
  Building2, // Bal Grah Balak
  Building2, // Bal Grah Balika
  GraduationCap, // NIOS Open School
  Wrench, // Vocational Centre
];

export const approachIcons: LucideIcon[] = [
  Heart, // Child-centric care planning
  BookOpen, // Education and learning
  Stethoscope, // Health and nutrition
  MessageCircle, // Emotional healing and counselling
  Users, // Family-based care and rehabilitation
  Wrench, // Life skills and vocational guidance
  Compass, // Social reintegration and aftercare
];

export const valueIcons: LucideIcon[] = [
  Users, // A Family for Every Child
  Scale, // Equal Opportunities
  ShieldCheck, // Safety, Dignity, and Protection
  Sprout, // Holistic Growth
  Lightbulb, // Empowerment and Independent Living
  FileCheck, // Accountability and Legal Compliance
  HeartHandshake, // Community Participation
];

// Used if an item has no icon yet (for example, a new item added in about.ts)
export const fallbackIcon: LucideIcon = Heart;