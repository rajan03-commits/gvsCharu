// FILE PATH: app/lib/stories.ts
export type StoryAvatarKind = "girl" | "boy" | "woman" | "man";

export type Story = {
  title: string;
  excerpt: string; // shown always
  full: string[]; // optional extra paragraphs, shown when expanded
  // The illustration shown on the card. Real photos are never used.
  avatar?: StoryAvatarKind;
};

// Add a story only with written approval from the NGO.
// No names, photos, ages, places or conditions that could identify a child.
export const storiesLead = "Every Child Deserves a Brighter Future";

export const storiesIntro =
  "At Gramin Vikas Samiti Charu, we believe every child deserves love, care, and a safe family environment. Through dedicated medical care, rehabilitation, and lawful adoption, we strive to transform vulnerable childhoods into hopeful futures.";

export const stories: Story[] = [
  {
    title: "From Medical Challenges to a Loving Family",
    excerpt:
      "A young child came into our care with a serious medical condition. Through continuous medical supervision, prescribed treatment, and dedicated care over several years, the child's health improved. The child was later adopted by a loving family through the authorised adoption process.",
    full: [],
    avatar: "boy",
  },
  {
    title: "Every Step Is a Victory",
    excerpt:
      "A young child came into our care with health challenges that needed sustained medical treatment and rehabilitation. With compassionate support, the child made encouraging progress and was later legally adopted into a loving family, beginning a new chapter of life.",
    full: [],
    avatar: "girl",
  },
  {
    title: "From Difficult Circumstances to a New Beginning",
    excerpt:
      "A child came into our care after difficult circumstances. Through a safe environment, compassionate caregiving, and appropriate support, the child gradually moved toward a brighter future. Following the required legal procedures, the child was adopted by a family, giving the child the opportunity to grow up in a secure and nurturing home.",
    full: [],
    avatar: "boy",
  },
];

export const storiesClosingTitle = "Every Child Matters";

export const storiesClosing =
  "These journeys reflect our commitment to protecting vulnerable children, supporting their development, and helping them find safe and loving family environments. At Gramin Vikas Samiti Charu, every milestone represents a step toward a brighter future.";

export const storiesNote =
  "All stories are anonymised to protect the privacy and dignity of children. Adoption and medical details are presented in a generalised form.";