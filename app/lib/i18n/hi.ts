// FILE PATH: app/lib/i18n/hi.ts  (replaces the old file)
import type { Dictionary } from "./en";

// Hindi wording. The menu words below follow the NGO's approved list (Part 1, revised).
// "दत्तक ग्रहण" is the official CARA term.
// "सूचना एवं कार्यक्रम" (Notices & Events) is a draft: the NGO must approve it.
export const hi: Dictionary = {
  nav: {
    home: "होम",
    about: "हमारे बारे में",
    adoption: "दत्तक ग्रहण प्रक्रिया",
    gallery: "फोटो गैलरी",
    stories: "सफलता की कहानियाँ",
    events: "सूचना एवं कार्यक्रम",
    contact: "संपर्क करें",
    donate: "अभी दान करें",
    // About Us dropdown
    aboutNgo: "संस्था के बारे में",
    mission: "हमारा मिशन",
    vision: "हमारी दृष्टि",
    board: "हमारा शासी निकाय",
    awards: "पुरस्कार एवं सम्मान",
    reports: "वार्षिक प्रतिवेदन",
    projects: "हमारी परियोजनाएँ",
    saa: "विशेषज्ञ दत्तक ग्रहण अभिकरण (SAA)",
    cciInfants: "बाल देखरेख संस्थान (शिशु)",
    cciGirls: "बाल देखरेख संस्थान (बालिका)",
    cciBoys: "बाल देखरेख संस्थान (बालक)",
    niosObe: "NIOS (OBE) अध्ययन केंद्र",
    niosVocational: "NIOS व्यावसायिक प्रशिक्षण केंद्र",
    moreInfo: "महत्वपूर्ण सूचनाएँ",
    rules: "नियम एवं अधिनियम",
    charter: "नागरिक चार्टर",
  },
  a11y: {
    mainMenu: "मुख्य मेनू",
    toggleMenu: "मेनू खोलें या बंद करें",
    breadcrumb: "पृष्ठ पथ",
    opensInMaps: "(गूगल मैप्स में नए टैब में खुलता है)",
    opensInNewTab: "(नए टैब में खुलता है)",
    language: "भाषा",
  },
  common: {
    showLess: "कम दिखाएँ",
    breadcrumbHome: "होम",
    quickLinks: "उपयोगी लिंक",
    contactUs: "संपर्क करें",
    getInTouch: "हमसे संपर्क करें",
    viewOnMaps: "गूगल मैप्स पर स्थान देखें",
    rights: "सर्वाधिकार सुरक्षित।",
    footerBlurb:
      "हर बच्चे का सुरक्षित और स्नेहपूर्ण भविष्य एक परिवार से शुरू होता है। हमारी दत्तक ग्रहण प्रक्रिया की जानकारी प्राप्त करें, सफलता की कहानियाँ पढ़ें और बच्चों के कल्याण में सहयोग के अवसर जानें।",
  },
  home: {
    aboutHeading: (name: string) => `${name} के बारे में`,
    learnMore: "हमारे बारे में और जानें",
    ourPromise: "हमारा वादा",
    ourMission: "हमारा मिशन",
    ourVision: "हमारी दृष्टि",
    readFullMission: "पूरा मिशन पढ़ें",
    readFullVision: "पूरी दृष्टि पढ़ें",
    ourImpact: "हमारा प्रभाव",
    howAdoptionWorks: "दत्तक ग्रहण कैसे होता है",
    seeFullProcedure: "पूरी प्रक्रिया देखें",
    storiesOfHope: "आशा की कहानियाँ",
    readMoreStories: "और कहानियाँ पढ़ें",
  },
  donateBanner: {
    title: "दान",
    text: "",
  },
};