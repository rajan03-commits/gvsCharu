
// Notices and events shown on the Notices & Events page (/events and /hi/events).
//
// To add a visit or event:
//   1. Put its PDF in the folder public/documents/events/  (for example diwali-visit.pdf)
//   2. Copy one entry below, change the texts, the date (YYYY-MM-DD), and the file path.
// Remove an entry when the event is over. Text in [square brackets] is a placeholder.
//
// Keep the PDF to what is safe to make public: names and roles of official guests, the
// programme, and the time. No names, photos or details of any child.

type Text = { en: string; hi: string };

export type EventNotice = {
  title: Text;
  date: string; // "YYYY-MM-DD", or "" while it is not known
  summary: Text;
  file: string; // e.g. "/documents/events/diwali-visit.pdf", or "" until the PDF arrives
};

export const eventsDescription: Text = {
  en: "Upcoming visits, programmes and public notices from Gramin Vikas Samiti Charu, with a PDF of the details.",
  hi: "ग्रामीण विकास समिति चारू के आगामी आगमन, कार्यक्रम और सार्वजनिक सूचनाएँ, विवरण के PDF सहित।",
};

export const eventsIntro: Text = {
  en: "Upcoming visits, programmes and public notices from Gramin Vikas Samiti Charu. Download the PDF on each card for the full details.",
  hi: "ग्रामीण विकास समिति चारू के आगामी आगमन, कार्यक्रम और सार्वजनिक सूचनाएँ। पूरी जानकारी के लिए प्रत्येक कार्ड पर दिया गया PDF डाउनलोड करें।",
};

export const events: EventNotice[] = [
  {
    title: {
      en: "Diwali Celebration: Guest Visit",
      hi: "दीवाली समारोह: अतिथि आगमन",
    },
    date: "",
    summary: {
      en: "[One or two lines from the NGO: what is happening, when, and who is invited.]",
      hi: "[संस्था से एक-दो पंक्तियाँ: क्या हो रहा है, कब, और कौन आमंत्रित है।]",
    },
    file: "",
  },
];