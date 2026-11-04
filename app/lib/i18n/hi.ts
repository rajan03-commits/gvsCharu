import type { Dictionary } from "./en";

// DRAFT Hindi wording: the NGO must approve every line in writing.
// "दत्तक ग्रहण" is the official CARA term; ask the NGO whether they prefer "गोद लेना".
export const hi: Dictionary = {
  nav: {
    home: "होम",
    about: "हमारे बारे में",
    adoption: "दत्तक ग्रहण प्रक्रिया",
    gallery: "फोटो गैलरी",
    stories: "सफलता की कहानियाँ",
    contact: "संपर्क करें",
    donate: "अभी दान करें",
    // About Us dropdown (DRAFT: the NGO must approve)
    aboutNgo: "संस्था के बारे में",
    mission: "हमारा मिशन",
    vision: "हमारी दृष्टि",
    board: "हमारा बोर्ड",
    awards: "पुरस्कार और सम्मान",
    reports: "वार्षिक रिपोर्ट",
    projects: "हमारी परियोजनाएँ",
    saa: "विशेषीकृत दत्तक ग्रहण एजेंसी (SAA)",
    cciInfants: "बाल देखरेख संस्था (CCI): शिशु",
    cciGirls: "बाल देखरेख संस्था (CCI): बालिकाएँ",
    cciBoys: "बाल देखरेख संस्था (CCI): बालक",
    niosObe: "NIOS (OBE) संस्थान",
    niosVocational: "NIOS व्यावसायिक केंद्र",
    moreInfo: "महत्वपूर्ण जानकारी",
    rules: "नियम और कानून",
    charter: "नागरिक अधिकार पत्र",
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