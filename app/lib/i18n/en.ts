// FILE PATH: app/lib/i18n/en.ts  (replaces the old file)
// Every small UI word that is typed into a component lives here.
// hi.ts must have exactly the same keys, and TypeScript will complain if one is missing.
export const en = {
  nav: {
    home: "Home",
    about: "About Us",
    adoption: "Adoption Procedure",
    gallery: "Photo Gallery",
    stories: "Success Stories",
    events: "Notices & Events",
    contact: "Contact Us",
    donate: "Donate Now",
    // About Us dropdown
    aboutNgo: "About NGO",
    mission: "Our Mission",
    vision: "Our Vision",
    board: "Our Board",
    awards: "Awards & Recognitions",
    reports: "Annual Reports",
    projects: "Our Projects",
    saa: "Special Adoption Agency (SAA)",
    cciInfants: "Child Care Institute (CCI): Infants",
    cciGirls: "Child Care Institute (CCI): Girls",
    cciBoys: "Child Care Institute (CCI): Boys",
    niosObe: "NIOS (OBE) Institute",
    niosVocational: "NIOS Vocational Centre",
    moreInfo: "Important Information",
    rules: "Rules & Laws",
    charter: "Citizen's Charter",
  },
  a11y: {
    mainMenu: "Main",
    toggleMenu: "Toggle menu",
    breadcrumb: "Breadcrumb",
    opensInMaps: "(opens in Google Maps in a new tab)",
    opensInNewTab: "(opens in a new tab)",
    language: "Language",
  },
  common: {
    showLess: "Show less",
    breadcrumbHome: "Home",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    getInTouch: "Get in touch",
    viewOnMaps: "View location on Google Maps",
    rights: "All rights reserved.",
    footerBlurb:
      "A safe, caring future for every child begins with a family. Explore our adoption procedure, read our success stories and find ways to support us.",
  },
  home: {
    aboutHeading: (name: string) => `About ${name}`,
    learnMore: "Learn more about us",
    ourPromise: "Our Promise",
    ourMission: "Our Mission",
    ourVision: "Our Vision",
    readFullMission: "Read the full mission",
    readFullVision: "Read the full vision",
    ourImpact: "Our Impact",
    howAdoptionWorks: "How Adoption Works",
    seeFullProcedure: "See the full procedure",
    storiesOfHope: "Stories of Hope",
    readMoreStories: "Read more stories",
  },
  donateBanner: {
    title: "Donation",
    text: "", // the NGO wants no sentence under the heading
  },
};

export type Dictionary = typeof en;