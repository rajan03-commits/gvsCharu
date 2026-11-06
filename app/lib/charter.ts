
// The Citizen's Charter text, as sent by the NGO. Anything in [square brackets]
// is a placeholder the NGO still has to fill. The Hindi version is in app/lib/hi/charter.ts
// and must have the same structure (same number of items in every list).

type ListBlock = {
  heading: string;
  intro: string;
  items: string[];
  closing: string;
};

type TextBlock = { heading: string; paragraphs: string[] };

export type CharterData = {
  tagline: string;
  org: string;
  labels: { effective: string; updated: string; contents: string; issuedBy: string };
  effective: string;
  updated: string;
  commitment: TextBlock;
  rights: {
    heading: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  service: {
    heading: string;
    intro: string;
    columns: [string, string];
    rows: { service: string; time: string }[];
    note: string;
  };
  participation: ListBlock;
  transparency: ListBlock;
  grievance: {
    heading: string;
    motto: string;
    intro: string;
    howHeading: string;
    steps: { text: string; link?: { label: string; href: string } }[];
    responseHeading: string;
    responses: { label: string; text: string }[];
    closing: string;
    contactHeading: string;
    contact: { label: string; value: string }[];
    statutory: string;
  };
  accountability: ListBlock;
  childProtection: TextBlock;
  review: TextBlock;
  assurance: { heading: string; motto: string; paragraph: string };
  issuedBy: string;
  footnote: string;
};

export const charterDescription =
  "What you can expect from Gramin Vikas Samiti Charu, and how to raise a concern.";

export const charter: CharterData = {
  tagline:
    "Informed Citizens | Participative Governance | Responsible Service Delivery",
  org: "Gramin Vikas Samiti, Charu, Gonda, Uttar Pradesh",
  labels: {
    effective: "Effective Date",
    updated: "Last Updated",
    contents: "Contents",
    issuedBy: "Issued by",
  },
  effective: "[Date]",
  updated: "[Date]",

  commitment: {
    heading: "Our Public Commitment",
    paragraphs: [
      "Gramin Vikas Samiti is committed to providing accessible, transparent, respectful and responsible services to citizens and beneficiaries.",
      "This Charter aims to promote public awareness, encourage participation, protect beneficiaries' rights and strengthen accountability in the organisation's functioning.",
    ],
  },

  rights: {
    heading: "Know Your Rights",
    intro:
      "Every citizen and beneficiary interacting with the organisation is entitled to:",
    items: [
      {
        title: "Information",
        text: "Clear information about available services, eligibility and procedures.",
      },
      { title: "Dignity", text: "Respectful and non-discriminatory treatment." },
      {
        title: "Accessibility",
        text: "Fair access to relevant services and assistance.",
      },
      {
        title: "Transparency",
        text: "Appropriate information about applications, requests and service status.",
      },
      {
        title: "Participation",
        text: "An opportunity to offer suggestions and feedback.",
      },
      {
        title: "Grievance Redressal",
        text: "A fair opportunity to report concerns and seek resolution.",
      },
      {
        title: "Privacy",
        text: "Protection of personal information, particularly that of children and vulnerable beneficiaries.",
      },
    ],
  },

  service: {
    heading: "Our Service Commitments",
    intro: "We endeavour to ensure:",
    columns: ["Service", "Target Response Time"],
    rows: [
      { service: "General enquiries", time: "3 working days" },
      { service: "Information requests", time: "7 working days" },
      { service: "Application acknowledgement", time: "3 working days" },
      { service: "General complaints", time: "15 working days" },
      { service: "Complex complaints", time: "30 working days" },
    ],
    note: "These are indicative internal service targets. Statutory procedures and timelines shall prevail wherever applicable. Delays, where unavoidable, shall be communicated appropriately.",
  },

  participation: {
    heading: "Public Participation",
    intro:
      "Citizens are encouraged to actively participate in improving our services through:",
    items: [
      "Feedback and suggestions.",
      "Community consultations and awareness programmes.",
      "Beneficiary and stakeholder interactions.",
      "Reporting service deficiencies and irregularities.",
      "Participation in periodic reviews and social-audit processes, wherever applicable.",
    ],
    closing:
      "The views and suggestions of children shall also be encouraged through age-appropriate and child-friendly mechanisms.",
  },

  transparency: {
    heading: "Transparency & Public Information",
    intro:
      "Relevant public information shall be made accessible through the organisation's website, office or designated communication channels, including:",
    items: [
      "Available services and eligibility criteria.",
      "Registration and relevant recognition details.",
      "Contact details of responsible officials.",
      "Programme updates and important notices.",
      "Relevant reports and financial disclosures, subject to applicable requirements.",
    ],
    closing:
      "No unauthorised payment or personal gratification shall be demanded for accessing services.",
  },

  grievance: {
    heading: "Grievance Redressal",
    motto: "Your concern. Our responsibility.",
    intro:
      "Any citizen or beneficiary may report service deficiencies, delays, misconduct, discrimination, negligence or other legitimate concerns.",
    howHeading: "How to submit a complaint",
    steps: [
      {
        text: "Through the website's grievance form.",
        // The site has no separate grievance form yet, so this points to the Contact page.
        link: { label: "Open the Contact Us page", href: "/contact" },
      },
      { text: "By official email or written application." },
      { text: "Directly to the designated Grievance Redressal Officer." },
    ],
    responseHeading: "Our response mechanism",
    responses: [
      { label: "Acknowledgement", text: "Within 3 working days." },
      {
        label: "Examination and response",
        text: "Ordinarily within 15 working days.",
      },
      {
        label: "Complex matters",
        text: "Up to 30 working days, with an appropriate interim update.",
      },
      {
        label: "Escalation",
        text: "Unresolved or unsatisfactory complaints may be referred to the Head of the Organisation / competent management authority.",
      },
    ],
    closing:
      "Every complaint shall be considered fairly and confidentially, subject to applicable law.",
    contactHeading: "Grievance Contact",
    contact: [
      { label: "Grievance Officer", value: "[Name / Designation]" },
      { label: "Email", value: "[Official Email]" },
      { label: "Contact", value: "[Official Number]" },
      { label: "Escalation Authority", value: "[Designation]" },
    ],
    statutory:
      "Urgent child-protection matters shall be referred promptly to the appropriate statutory authorities. This internal mechanism does not replace statutory remedies.",
  },

  accountability: {
    heading: "Accountability & Responsibility",
    intro: "The organisation endeavours to ensure that:",
    items: [
      "Responsibilities are assigned to concerned officers and staff.",
      "Service delays and grievances are periodically reviewed.",
      "Unjustified negligence or misconduct is examined.",
      "Appropriate corrective or disciplinary action is taken wherever warranted, in accordance with applicable rules and due process.",
      "Repeated service deficiencies are brought to the attention of the competent management authority.",
    ],
    closing:
      "Any monetary recovery or penalty shall be governed exclusively by applicable rules, lawful authority and due process. No arbitrary fine shall be imposed.",
  },

  childProtection: {
    heading: "Child Protection & Confidentiality",
    paragraphs: [
      "The safety, dignity, privacy and best interests of children shall remain paramount.",
      "The organisation shall endeavour to maintain a safe and supportive environment, prevent abuse and exploitation, protect confidential records and follow applicable child-protection and adoption laws.",
    ],
  },

  review: {
    heading: "Review & Public Accountability",
    paragraphs: [
      "The organisation shall periodically review this Charter, consider public feedback and assess opportunities for improvement.",
      "Relevant service updates and accountability information may be shared through official communication channels, subject to confidentiality and applicable requirements.",
    ],
  },

  assurance: {
    heading: "Our Assurance",
    motto:
      "Your participation makes our services better. Your awareness strengthens accountability. Your voice matters.",
    paragraph:
      "Gramin Vikas Samiti welcomes constructive feedback, genuine concerns and public participation in its continuous efforts towards responsible and transparent service delivery.",
  },

  issuedBy: "The Competent Management Authority",
  footnote:
    "This Charter is a voluntary organisational commitment and shall be read subject to applicable laws, statutory regulations and directions of competent authorities. It does not confer governmental status or statutory powers upon the organisation.",
};