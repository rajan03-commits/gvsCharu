// FILE PATH: app/lib/homeFeeds.ts  (replaces the old file)
// Content for the Home page. Each section stays hidden while its list is empty.
// Text in [square brackets] is a placeholder the NGO still has to fill.

type Text = { en: string; hi: string };

// The line at the very top of the Home page (court matters and other important notices).
// Keep each line general: no child's name, age, place or case details that could identify
// a child. The NGO's lawyer should check the wording before it goes public.
// date as YYYY-MM-DD, or "" for none. href is optional (a notice or PDF).
export type CourtUpdate = { date: string; text: Text; href?: string };

// date as YYYY-MM-DD, newest first. href is optional (an external link).
export type Update = { date: string; title: Text; text: Text; href?: string };
// id = the part after "v=" in the YouTube link
export type Video = { id: string; title: Text };
// Only real reviews, with the person's permission to show their name
export type Review = { quote: Text; name: string; role?: Text };

export const courtUpdates: CourtUpdate[] = [
  {
    date: "",
    text: {
      en: "[A short, general update about the court matter, in one or two lines.]",
      hi: "[न्यायालय संबंधी मामले की संक्षिप्त, सामान्य जानकारी, एक-दो पंक्तियों में।]",
    },
  },
];

export const updates: Update[] = [];

export const videos: Video[] = [];

export const reviews: Review[] = [
  {
    quote: {
      en: "[Review 1: written by a regular visitor, in their own words.]",
      hi: "[समीक्षा 1: नियमित आगंतुक द्वारा अपने शब्दों में लिखी गई।]",
    },
    name: "[Name]",
    role: { en: "[Regular visitor]", hi: "[नियमित आगंतुक]" },
  },
  {
    quote: {
      en: "[Review 2: written by a regular visitor, in their own words.]",
      hi: "[समीक्षा 2: नियमित आगंतुक द्वारा अपने शब्दों में लिखी गई।]",
    },
    name: "[Name]",
    role: { en: "[Regular visitor]", hi: "[नियमित आगंतुक]" },
  },
  {
    quote: {
      en: "[Review 3: written by a regular visitor, in their own words.]",
      hi: "[समीक्षा 3: नियमित आगंतुक द्वारा अपने शब्दों में लिखी गई।]",
    },
    name: "[Name]",
    role: { en: "[Regular visitor]", hi: "[नियमित आगंतुक]" },
  },
];