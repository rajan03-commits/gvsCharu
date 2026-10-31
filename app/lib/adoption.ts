const carings = "https://carings.wcd.gov.in/";
const cara = "https://cara.wcd.gov.in/";

export const officialLinks = [
  { label: "Official CARINGS portal", href: carings },
  { label: "Official CARA website", href: cara },
];

export const adoptionIntro = [
  "At Gramin Vikas Samiti Charu, we believe that every child deserves a safe, loving, and permanent family. Adoption provides an opportunity for eligible children who are legally free for adoption to grow up in a secure and nurturing family environment.",
  "Our approach is guided by the principles of child welfare, dignity, transparency, and the best interests of the child. Adoption in India is regulated by the Central Adoption Resource Authority (CARA), under the Ministry of Women and Child Development, Government of India, in accordance with applicable laws and regulations.",
];

export type AdoptionStep = {
  title: string;
  text: string;
  link?: { label: string; href: string };
};

export const adoptionSteps: AdoptionStep[] = [
  {
    title: "Online Registration",
    text: "Prospective Adoptive Parents (PAPs) must register through the official CARINGS adoption portal. They are required to complete the application, provide accurate information, select their preferences, and upload the prescribed documents.",
    link: { label: "Open the CARINGS portal", href: carings },
  },
  {
    title: "Document Verification and Home Study",
    text: "The prescribed documents are verified, and a Home Study Report is prepared by the authorised adoption agency or designated professional. This assessment evaluates the prospective parents' suitability, readiness, family environment, and ability to provide appropriate care and protection to a child.",
  },
  {
    title: "Eligibility Assessment and Child Referral",
    text: "After completion of the required formalities, eligible prospective adoptive parents proceed through the official adoption system. When a referral becomes available, the child's Child Study Report and Medical Examination Report are provided through the authorised process, subject to applicable regulations and availability.",
  },
  {
    title: "Child Review and Acceptance",
    text: "Prospective adoptive parents review the child's available records and medical information and communicate their decision within the prescribed timeline. Child matching and acceptance are carried out according to the applicable adoption regulations and procedures.",
  },
  {
    title: "Pre-Adoption Foster Care and Legal Formalities",
    text: "Where applicable, the child may be placed in pre-adoption foster care after completion of the prescribed formalities. The adoption case is then processed by the competent authorities in accordance with the applicable legal framework.",
  },
  {
    title: "Adoption Order and Legal Completion",
    text: "The adoption application is processed by the competent authority, including the District Magistrate where required by law. Following the adoption order, the necessary legal documentation and birth certificate formalities are completed through the authorised system.",
  },
  {
    title: "Post-Adoption Follow-Up",
    text: "Following adoption, prescribed post-adoption follow-ups are conducted to monitor the child's adjustment, safety, health, and overall well-being. These follow-ups help ensure that the child receives continued care and support in the new family environment.",
  },
];

export const eligibilityNote =
  "Prospective adoptive parents must satisfy the eligibility, age, health, and suitability requirements prescribed under the applicable adoption regulations.";

export const documentsNote =
  "Depending on the circumstances and current official requirements, documents may include the following. The complete and updated list should be checked on the official CARINGS portal and under the applicable Adoption Regulations.";

export const documents = [
  "Identity and address proof",
  "Proof of age and marital status, where applicable",
  "Recent photographs of prospective adoptive parents",
  "Medical fitness certificates",
  "Income or financial documents, where required",
  "Prescribed declarations, undertakings, and other supporting documents",
];

export const commitmentsIntro = [
  "At Gramin Vikas Samiti Charu, we recognise that adoption is a legally regulated process in which the child's safety, rights, identity, and best interests must remain paramount.",
  "We support awareness of lawful adoption procedures and cooperation with competent child protection authorities. All adoption-related activities must be conducted only within the scope of the organisation's valid authorisation and applicable legal requirements.",
];

export const commitments = [
  "Adoption must follow the legally prescribed procedure.",
  "A child must be declared legally free for adoption by the competent authority wherever required.",
  "No child may be informally selected, reserved, transferred, or promised for adoption.",
  "No payment or private arrangement may replace the prescribed legal process.",
  "Confidentiality and the privacy of every child and family must be protected.",
  "Every decision must prioritise the child's best interests and long-term welfare.",
];

export const beginJourney =
  "Individuals and families interested in adoption are encouraged to consult the official CARINGS portal for registration, eligibility criteria, required documents, and procedural guidance.";

export const closingMessage =
  "At Gramin Vikas Samiti Charu, we believe that every child deserves the opportunity to grow up in a safe, caring, and supportive family. Through lawful adoption procedures, responsible child protection practices, and cooperation with authorised institutions, we strive to help create brighter futures for children in need of care and protection.";

export const closingTagline =
  "Every Child Deserves a Family. Every Family Deserves Guidance. Every Adoption Deserves to Be Safe, Legal, and Child-Centric.";

// Add { question, answer } items here when the NGO sends them. While the list is empty, the FAQ section stays hidden.
export const faqs: { question: string; answer: string }[] = [];