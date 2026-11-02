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
      "हर बच्चे का सुरक्षित और स्नेहपूर्ण भविष्य एक परिवार से शुरू होता है। हमारी दत्तक ग्रहण प्रक्रिया देखें, सफलता की कहानियाँ पढ़ें और सहयोग के तरीके जानें।",
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
    title: "किसी बच्चे को प्यार भरा घर दिलाने में मदद करें",
    text: "आपका हर योगदान ज़रूरतमंद बच्चों की देखभाल और सुरक्षा में सहयोग करता है।",
  },
};