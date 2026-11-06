export type Social = {
  key: "instagram" | "youtube" | "x";
  label: string;
  href: string;
};

// Fill in each link. An icon with an empty href is not shown.
export const socials: Social[] = [
  { key: "instagram", label: "Instagram", href: "" },
  { key: "youtube", label: "YouTube", href: "" },
  { key: "x", label: "X (Twitter)", href: "" },
];