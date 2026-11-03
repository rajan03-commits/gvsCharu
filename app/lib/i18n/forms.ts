export type FormLabels = {
  fullName: string;
  email: string;
  phone: string;
  optional: string;
  topic: string;
  message: string;
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  phoneInvalid: string;
  messageRequired: string;
  messageShort: string;
  captchaError: string;
  send: string;
  sending: string;
  success: string;
  sendFailed: string; // {phone} and {email} are filled in
  topics: Record<string, string>; // English topic -> shown label
};

export const formLabelsEn: FormLabels = {
  fullName: "Full name",
  email: "Email",
  phone: "Phone",
  optional: "(optional)",
  topic: "I am writing about",
  message: "Message",
  nameRequired: "Please enter your name.",
  emailRequired: "Please enter your email address.",
  emailInvalid: "Please enter a valid email address.",
  phoneInvalid: "Please enter a valid phone number.",
  messageRequired: "Please write your message.",
  messageShort: "Please write at least 10 characters.",
  captchaError: "Please complete the security check above.",
  send: "Send message",
  sending: "Sending...",
  success: "Thank you. Your message has been sent.",
  sendFailed:
    "Sorry, your message could not be sent. Please call {phone} or email {email} instead.",
  topics: {},
};

// DRAFT Hindi wording: the NGO must approve it in writing.
export const formLabelsHi: FormLabels = {
  fullName: "पूरा नाम",
  email: "ईमेल",
  phone: "फ़ोन",
  optional: "(वैकल्पिक)",
  topic: "मैं इस विषय में लिख रहा/रही हूँ",
  message: "संदेश",
  nameRequired: "कृपया अपना नाम लिखें।",
  emailRequired: "कृपया अपना ईमेल पता लिखें।",
  emailInvalid: "कृपया सही ईमेल पता लिखें।",
  phoneInvalid: "कृपया सही फ़ोन नंबर लिखें।",
  messageRequired: "कृपया अपना संदेश लिखें।",
  messageShort: "कृपया कम से कम 10 अक्षर लिखें।",
  captchaError: "कृपया ऊपर दी गई सुरक्षा जाँच पूरी करें।",
  send: "संदेश भेजें",
  sending: "भेजा जा रहा है...",
  success: "धन्यवाद। आपका संदेश भेज दिया गया है।",
  sendFailed:
    "क्षमा करें, आपका संदेश नहीं भेजा जा सका। कृपया {phone} पर कॉल करें या {email} पर ईमेल करें।",
  topics: {
    "Adoption enquiry": "दत्तक ग्रहण संबंधी पूछताछ",
    Donation: "दान",
    Other: "अन्य",
  },
};

export type CopyLabels = {
  copy: string;
  copied: string;
  copyAria: string; // {label} is filled in
  copiedMsg: string;
  failedMsg: string;
};

export const copyLabelsEn: CopyLabels = {
  copy: "Copy",
  copied: "Copied",
  copyAria: "Copy {label}",
  copiedMsg: "{label} copied",
  failedMsg: "Could not copy {label}. Please select the text instead.",
};

// DRAFT Hindi wording
export const copyLabelsHi: CopyLabels = {
  copy: "कॉपी करें",
  copied: "कॉपी हो गया",
  copyAria: "{label} कॉपी करें",
  copiedMsg: "{label} कॉपी हो गया",
  failedMsg: "{label} कॉपी नहीं हो सका। कृपया टेक्स्ट चुनकर कॉपी करें।",
};

// Fills {name} markers in a label. Order of markers does not matter.
export function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}