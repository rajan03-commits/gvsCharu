export type Certificate = {
  title: string;
  issuer: string;
  number: string;
  image?: string; // e.g. "/certificates/registration.jpg" once the scan is in public/certificates
};

// Confirm the exact job title with the NGO
export const manager = {
  name: "Upendra Srivastava",
  role: "Institution Manager",
};

export const mission = "[Mission statement from the NGO]";
export const vision = "[Vision statement from the NGO]";

export const facilities = [
  {
    name: "Specialised Adoption Agency (Gonda Child Protection Home)",
    text: "[Two or three sentences from the NGO about this.]",
  },
  {
    name: "Children's Homes for Infants, Girls and Boys",
    text: "[Two or three sentences from the NGO about this.]",
  },
  {
    name: "NIOS Open School",
    text: "[Two or three sentences from the NGO about this.]",
  },
  {
    name: "Vocational Centre",
    text: "[Two or three sentences from the NGO about this.]",
  },
];

export const registration = [
  {
    label: "Registered under",
    value: "Societies Registration Act, 1860 (Act XXI of 1860)",
  },
  {
    label: "Registering authority",
    value: "Registrar of Societies, Uttar Pradesh",
  },
  { label: "Registration number", value: "[Registration number and date]" },
];

export const certificates: Certificate[] = [
  {
    title: "Society registration",
    issuer: "Registrar of Societies, Uttar Pradesh",
    number: "[Registration number and date]",
  },
  {
    // Check this title against the certificate's exact wording
    title: "Specialised Adoption Agency",
    issuer: "[Issuing authority, as written on the certificate]",
    number: "[Number, date and validity]",
  },
  {
    // Check this title against the certificate's exact wording
    title: "NIOS Open Basic Education centre",
    issuer: "[Issuing authority, as written on the certificate]",
    number: "[Number and date]",
  },
];

export const awards = [
  { name: "[Award 1 name]", detail: "[Year · awarded by]" },
  { name: "[Award 2 name]", detail: "[Year · awarded by]" },
  { name: "[Award 3 name]", detail: "[Year · awarded by]" },
];